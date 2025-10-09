// src/components/SuccessStories.tsx

import React from 'react';

// Matnni qisqartirish uchun yordamchi funksiya
const truncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + '...';
  }
  return text;
};

const storiesData = [
  {
    name: 'Akhtamov Islom',
    university: 'Woosuk university',
    imageUrl: '/images/students/akhtamov_islom.jpg',
    review: "Go Korea bilan Koreyaga borish orzuyim ro'yobga chiqdi! 🔥 Hujjatlarni rasmiylashtirishdan tortib, universitetga qabul bo'lguncha doim yordam berishdi. Ularning professional jamoasiga katta rahmat! 🙏"
  },
  {
    name: 'Akramov Artur',
    university: 'Woosuk university',
    imageUrl: '/images/students/akramov_artur.jpg',
    review: "Go Korea'ga ishonib adashmadim! Barcha savollarimga aniq va tushunarli javob berishdi. Endi Woosuk university talabasiman! Katta rahmat sizlarga! 🎓✨"
  },
  {
    name: 'Karimova Mushtariy',
    university: 'Woosuk university',
    imageUrl: '/images/students/karimova_mushtariy.jpg',
    review: "Orzuimdagi Koreyada o'qish endi real! Go Korea'ning maslahatlari va yordami bilan imtihonlarga ishonch bilan kirdim. Sizlar eng zo'rsizlar! 👍😊"
  },
  {
    name: 'Khayitov Mirzakhidjon',
    university: 'Woosuk university',
    imageUrl: '/images/students/khayitov_mirzokhidjon.jpg',
    review: "Hujjatlar bilan qiynalaman deb o'ylagandim. Go Korea jamoasi har bir qadamda yordam berib, hamma narsani oson qilib berishdi. Rahmat sizga, Go Korea! 🌟💼"
  },
  {
    name: 'Khodjiev Uktam',
    university: 'Woosuk university',
    imageUrl: '/images/students/khodjiev_uktam.jpg',
    review: "Go Korea bilan Koreya universitetiga kirish naqadar oson bo'ldi! Tezkor va samarali xizmat uchun minnatdorlik bildiraman. Kelajak talabalariga tavsiya qilaman! ✅🚀"
  },
  {
    name: 'Khudoev Akhtam',
    university: 'Woosuk university',
    imageUrl: '/images/students/khudoev_akhtam.jpg',
    review: "Avvaliga ozgina xavotir olgandim, lekin Go Korea jamoasi meni to'liq qo'llab-quvvatladi. Natijada Woosuk university talabasi bo'ldim! Zo'r! 🎉🥳"
  },
  {
    name: 'Kirg\'izov Azizjon',
    university: 'Woosuk university',
    imageUrl: '/images/students/kirgizov_azizjon.jpg',
    review: "Go Korea'ning yordami bilan Koreyada o'qish imkoniyatini qo'lga kiritdim. Ularning tajribasi va maslahatlari bebaho. Katta rahmat! 💯🇰🇷"
  },
  {
    name: 'Nazirjonov Izzatilla',
    university: 'Woosuk university',
    imageUrl: '/images/students/nazirjanov_izzatilla.jpg',
    review: "Go Korea xodimlari juda xushmuomala va bilimdon. Har qanday muammoda yordam berishga tayyor turishdi. Ular bilan hamma narsa oson! 😊🤝"
  },
  {
    name: 'Obidov Abdulaziz',
    university: 'Woosuk university',
    imageUrl: '/images/students/obidov_abdulaziz.jpg',
    review: "Woosuk universityga qabul bo'lishimda Go Korea'ning hissasi juda katta. Ular nafaqat hujjatlar bilan, balki ruhiy jihatdan ham qo'llab-quvvatlashdi. Qoyil! 👏❤️"
  },
  {
    name: 'Parmonov Ilkhom',
    university: 'Woosuk university',
    imageUrl: '/images/students/parmonov_ilkhom.jpg',
    review: "Go Korea! Sizlar bilan ishlash juda maroqli va foydali bo'ldi. Maqsadlarimga erishishimda asosiy yordamchi bo'ldingiz. Tabriklashni unutmang! 😉🥂"
  },
  {
    name: 'Rashidov Mukhammadali',
    university: 'Woosuk university',
    imageUrl: '/images/students/rashidov_mukhammadali.jpg',
    review: "Go Korea'ning mutaxassislari har bir savolimga tezkor javob berib, jarayonni tushunarli qilib berishdi. Ular bilan Koreyada o'qishga kirish muammo emas! 💡👍"
  },
  {
    name: 'Sadullaev Erkinjon',
    university: 'Woosuk university',
    imageUrl: '/images/students/sadullaev_erkinjon.jpg',
    review: "Ishonchli va tajribali konsalting kompaniyasi! Go Korea jamoasi tufayli Woosuk universityga qabul bo'ldim. Ishonch bilan tavsiya qilaman! 💪📚"
  },
  {
    name: 'Sayfullaev Abdulla',
    university: 'Woosuk university',
    imageUrl: '/images/students/sayfullaev_abdulla.jpg',
    review: "Go Korea bilan Koreyaga ketishimga 100% ishonchim komil edi. Ularning sadoqati va mas'uliyati tahsinga loyiq. Rahmat! 🙏✈️"
  },
  {
    name: 'Sultonov Ulug\'bek',
    university: 'Woosuk university',
    imageUrl: '/images/students/sultonov_ulugbek.jpg',
    review: "Woosuk universityga qabul bo'lishimda Go Korea'ning har bir maslahati oltin kabi qadrli edi. Sizlar eng yaxshi ustozsizlar! 🙏🎓"
  },
  {
    name: 'Toshkentboev Shakhzodbek',
    university: 'Woosuk university',
    imageUrl: '/images/students/toshkentboev_shakhzodbek.jpg',
    review: "Go Korea jamoasi har doim talabalarning yonida. Ularning yordami bilan Woosuk university talabasi bo'ldim. Hamma narsa uchun minnatdorman! 🙌🌟"
  },
  {
    name: 'Usupjonov Saidbek',
    university: 'Woosuk university',
    imageUrl: '/images/students/usupjonov_saidbek.jpg',
    review: "Go Korea'ning xizmatlaridan to'liq mamnunman. Koreyada o'qish imkoniyati berganingiz uchun rahmat. Orzularimga yetdim! ✨😊"
  },
  {
    name: 'Yuldashalievna Maftuna',
    university: 'Woosuk university',
    imageUrl: '/images/students/yuldashalievna_maftuna.jpg',
    review: "Go Korea nafaqat kompaniya, balki do'stlardek. Ularning shaxsiy yondashuvi va samimiyati meni juda xursand qildi. Katta rahmat! 🥰💖"
  },
  {
    name: 'Zokirov Muhammaddiyor',
    university: 'Woosuk university',
    imageUrl: '/images/students/zokirov_muhammaddiyor.jpg',
    review: "Go Korea konsalting kompaniyasi — Koreyada o'qishga kirish uchun eng to'g'ri tanlov! Professional va g'amxo'r jamoaga minnatdorman! 🇰🇷💯"
  }
];

const SuccessStories = () => {
  // Uzluksiz aylanish (loop) uchun ma'lumotlarni ikki marta nusxalash yetarli.
  const duplicatedData = [...storiesData, ...storiesData];
  const MAX_REVIEW_LENGTH = 150; // Izohlar uchun maksimal belgi soni

  return (
    // Asosiy bo'limning orqa fonini shaffof qilish uchun "bg-background" olib tashlandi
    <div className="overflow-hidden bg-transparent"> 
      <div className="py-16 text-white">
        <div className="text-center mb-12 px-4">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Biz Bilan Muvaffaqiyatga Erishganlar
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300 font-inter">
            Har bir talabamizning yutug'i — bizning g'ururimiz. Koreyada o'qiyotgan talabalarimiz bilan tanishing.
          </p>
        </div>

        {/* Birinchi qator - chapdan o'ngga harakat (animate-scroll-left) */}
        <div className="relative mb-8 overflow-hidden">
          <div className="flex gap-8 animate-scroll-left">
            {duplicatedData.map((story, index) => (
              <div
                key={`row1-${index}`}
                // Karta o'lchamlari va paddingi kichiklashtirildi, fon shaffof
                className="flex-shrink-0 w-64 md:w-72 p-4 rounded-2xl border-2 border-primary-custom/30 
                           shadow-xl hover:shadow-2xl hover:shadow-primary-custom/20 
                           transition-all duration-300 hover:scale-105 hover:border-primary-custom/50
                           flex flex-col justify-between backdrop-blur-lg bg-transparent" 
              >
                <div className="flex items-center gap-4 mb-3"> {/* Gap va margin qisqartirildi */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary-custom/20 rounded-full blur-xl"></div>
                    <img
                      src={story.imageUrl}
                      alt={story.name}
                      // Rasm o'lchami kichiklashtirildi
                      className="relative w-16 h-16 rounded-full object-cover border-3 border-primary-custom/60 
                                 shadow-lg ring-4 ring-primary-custom/20"
                      onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/64"; }} // Placeholder ham yangilandi
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-heading font-bold text-white mb-1">{story.name}</h4> {/* Nomi qalin va text-lg */}
                    <p className="text-sm text-gray-300 font-inter leading-relaxed">{story.university}</p>
                  </div>
                </div>
                {/* Sharhni qisqartirish */}
                <p className="text-xs text-gray-400 font-inter leading-tight">
                  {truncateText(story.review, MAX_REVIEW_LENGTH)}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Ikkinchi qator - o'ngdan chapga harakat (animate-scroll-right) */}
        <div className="relative overflow-hidden">
          <div className="flex gap-8 animate-scroll-right">
            {duplicatedData.map((story, index) => (
              <div
                key={`row2-${index}`}
                // Karta o'lchamlari va paddingi kichiklashtirildi, fon shaffof
                className="flex-shrink-0 w-64 md:w-72 p-4 rounded-2xl border-2 border-primary-custom/30 
                           shadow-xl hover:shadow-2xl hover:shadow-primary-custom/20 
                           transition-all duration-300 hover:scale-105 hover:border-primary-custom/50
                           flex flex-col justify-between backdrop-blur-lg bg-transparent" 
              >
                <div className="flex items-center gap-4 mb-3"> {/* Gap va margin qisqartirildi */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary-custom/20 rounded-full blur-xl"></div>
                    <img
                      src={story.imageUrl}
                      alt={story.name}
                      // Rasm o'lchami kichiklashtirildi
                      className="relative w-16 h-16 rounded-full object-cover border-3 border-primary-custom/60 
                                 shadow-lg ring-4 ring-primary-custom/20"
                      onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/64"; }} // Placeholder ham yangilandi
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-heading font-bold text-white mb-1">{story.name}</h4> {/* Nomi qalin va text-lg */}
                    <p className="text-sm text-gray-300 font-inter leading-relaxed">{story.university}</p>
                  </div>
                </div>
                {/* Sharhni qisqartirish */}
                <p className="text-xs text-gray-400 font-inter leading-tight">
                  {truncateText(story.review, MAX_REVIEW_LENGTH)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        /* O'ngga aylanish uchun animatsiya */
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            /* Ma'lumotlar ikki marta takrorlanganligi sababli, 
               birinchi to'liq qismning kengligi bo'yicha siljiymiz (-50%) */
            transform: translateX(-50%); 
          }
        }

        /* Chapga aylanish uchun animatsiya (orqaga) */
        @keyframes scroll-right {
          0% {
            /* Boshlanish nuqtasini sozlaymiz, shunda u scroll-left ning tugash nuqtasidan boshlanadi */
            transform: translateX(-50%); 
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 40s linear infinite; /* Tezlikni sozlash mumkin */
        }

        .animate-scroll-right {
          animation: scroll-right 40s linear infinite; /* Tezlikni sozlash mumkin */
        }
      `}</style>
    </div>
  );
};

export default SuccessStories;