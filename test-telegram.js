const TELEGRAM_BOT_TOKEN = '7560442174:AAGGHS37cjAk2OBNHoS5iH4VXJET3MNmYVs';
const TELEGRAM_CHAT_ID = '6571883034';

async function testTelegram() {
  const message = '🧪 Test xabar - Bot ishlayapti!';
  
  try {
    const response = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: message,
        }),
      }
    );
    
    const result = await response.json();
    console.log('Telegram javob:', result);
    
  } catch (error) {
    console.error('Xatolik:', error);
  }
}

testTelegram();