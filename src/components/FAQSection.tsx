import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Xorijiy universitetlarga qabul jarayoni qanday amalga oshiriladi?",
    answer: "Biz sizning tanlagan universitetingizga hujjatlarni to'g'ri rasmiylashtirish, motivatsion xat yozish, visa olish va boshqa barcha jarayonlarda professional yordam beramiz. Bizning mutaxassislarimiz har bir bosqichda yoningizda bo'ladi."
  },
  {
    question: "Grant yoki stipendiya olish imkoniyati bormi?",
    answer: "Ha, biz talabalarimizga turli xalqaro grantlar va stipendiyalar topishda yordam beramiz. Ko'plab universitetlar xorijiy talabalarga to'liq yoki qisman grant taqdim etadi. Sizning akademik ko'rsatkichlaringizga qarab eng mos variantlarni topamiz."
  },
  {
    question: "Qaysi mamlakatlarga o'qishga yuborish xizmatingiz mavjud?",
    answer: "Biz faqat Janubiy Koreyaga talabalar jo'natamiz. Janubiy Koreya nufuzli universitetlari va yuqori sifatli ta'lim tizimi bilan mashhur."
  },
  {
    question: "Xizmat narxi qancha va to'lov qanday amalga oshiriladi?",
    answer: "Xizmat narxi tanlangan dastur va mamlakatga qarab farq qiladi. Biz moslashuvchan to'lov rejalarini taklif qilamiz. Batafsil ma'lumot uchun bepul konsultatsiya olishingiz mumkin."
  },
  {
    question: "Til bilishi talabi qanchalik muhim?",
    answer: "Til bilishi muhim, lekin ko'pchilik universitetlar preparatory kurslarini taklif qiladi. Shuningdek, biz IELTS, TOEFL va boshqa til imtihonlariga tayyorgarlik ko'rishda ham yordam beramiz."
  },
  {
    question: "Qabul jarayoni qancha vaqt davom etadi?",
    answer: "Qabul jarayoni odatda 3-6 oy davom etadi. Bu muddat hujjatlarni tayyorlash, universitetdan javob kutish va visa olish jarayonini o'z ichiga oladi. Biz jarayonni iloji boricha tezlashtiramiz."
  }
];

interface FAQSectionProps {
  onContactClick: () => void;
}

export default function FAQSection({ onContactClick }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Tez-tez so'raladigan savollar
        </h2>
        <p className="text-gray-400 text-lg">
          Eng ko'p uchraydigan savollarga javoblar
        </p>
      </div>

      {/* FAQ Items */}
      <div className="max-w-4xl mx-auto space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="backdrop-blur-sm bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl border border-blue-400/30 overflow-hidden transition-all duration-300 hover:border-blue-400/60 hover:shadow-lg hover:shadow-blue-500/20"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-5 flex items-center justify-between text-left transition-all duration-200"
            >
              <span className="text-lg font-semibold text-white pr-8">
                {item.question}
              </span>
              <ChevronDown
                className={`w-6 h-6 text-blue-400 flex-shrink-0 transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>
            
            <div
              className={`transition-all duration-300 ease-in-out ${
                openIndex === index
                  ? 'max-h-96 opacity-100'
                  : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-6 pb-5 text-gray-300 leading-relaxed">
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="text-center mt-12">
        <button 
          onClick={onContactClick}
          className="px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold rounded-full hover:shadow-xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 animate-gradient"
        >
          Savollaringiz qoldimi? Biz bilan bog'laning
        </button>
      </div>
    </section>
  );
}