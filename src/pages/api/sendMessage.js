// pages/api/sendMessage.js

import { sql } from '@vercel/postgres';

// Telegram bot ma'lumotlari
const TELEGRAM_BOT_TOKEN = '7560442174:AAGGHS37cjAk2OBNHoS5iH4VXJET3MNmYVs';
const TELEGRAM_CHAT_ID = '6571883034';

// Telegramga xabar yuborish funksiyasi
async function sendToTelegram(name, phone, messageText) {
  const telegramMessage = `
🆕 <b>Yangi konsultatsiya so'rovi!</b>

👤 <b>Ism:</b> ${name}
📱 <b>Telefon:</b> ${phone}
💬 <b>Xabar:</b> ${messageText || 'Yo\'q'}
  `;

  try {
    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: telegramMessage,
          parse_mode: 'HTML',
        }),
      }
    );

    const result = await telegramResponse.json();
    
    if (!result.ok) {
      console.error('Telegram xatolik:', result);
      throw new Error('Telegramga yuborishda xatolik');
    }
    
    return result;
  } catch (error) {
    console.error('Telegram yuborishda xatolik:', error);
    throw error;
  }
}

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    return response.status(405).json({ message: 'Faqat POST so\'rovlari qabul qilinadi.' });
  }

  try {
    const { name, phone, selectedPackage, program } = request.body;

    // Ma'lumotlar to'liqligini tekshirish
    if (!name || !phone) {
      return response.status(400).json({ message: 'Ism va telefon raqami kiritilishi shart.' });
    }

    // `message` ustuni uchun matn tayyorlash
    let messageText = '';
    if (selectedPackage) {
      messageText = `Tanlangan paket: ${selectedPackage}`;
    } else if (program) {
      messageText = `Tanlangan dastur: ${program}`;
    }

    // Ma'lumotlarni bazaga yozish
    await sql`
      INSERT INTO Consultations (name, phone, message) 
      VALUES (${name}, ${phone}, ${messageText});
    `;
    
    // Telegramga xabar yuborish
    try {
      await sendToTelegram(name, phone, messageText);
      console.log('✅ Telegram xabar yuborildi!');
    } catch (telegramError) {
      console.error('❌ Telegram xatolik:', telegramError);
      // Telegram xato bo'lsa ham, bazaga saqlandi deb hisoblaymiz
    }
    
    // Muvaffaqiyatli javobni yuborish
    return response.status(200).json({ message: 'Murojaat muvaffaqiyatli yuborildi!' });

  } catch (error) {
    console.error('Xatolik:', error); 

    // Xatolik javobini yuborish
    return response.status(500).json({ 
      message: 'Serverda ichki xatolik yuz berdi.',
      error: (error as Error).message
    });
  }
}