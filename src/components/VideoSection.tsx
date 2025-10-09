import React from 'react';

const VideoSection: React.FC = () => {
  const videos = [
    {
      id: 1,
      // YouTube embed URL
      videoEmbedUrl: "https://www.youtube.com/embed/MCKa31EqCLE", 
      studentName: "Obidinov Abdulaziz",
      university: "Woosuk University"
    },
    {
      id: 2,
      // YouTube embed URL
      videoEmbedUrl: "https://www.youtube.com/embed/V63q9AgNSrE",
      studentName: "Usupjonov Saidbek",
      university: "Woosuk University"
    },
    {
      id: 3,
      // YouTube embed URL
      videoEmbedUrl: "https://www.youtube.com/embed/hP3-C-LeupI",
      studentName: "Akhtamov Islom",
      university: "Woosuk University"
    }
  ];

  return (
    <section className="w-full py-20 px-4 relative">
      {/* Orqa fon - shaffof qora */}
      <div className="absolute inset-0 bg-black/5 backdrop-blur-sm"></div>
      
      {/* max-w-7xl ga qaytarildi */}
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Sarlavha */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Talabalarimizdan Intervyu
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Koreyadagi hayot va ta'lim haqida to'g'ridan-to'g'ri eshiting
          </p>
        </div>

        {/* Video kartalar konteyneri */}
        {/* Kichik ekranlarda gorizontal aylantirish, katta ekranlarda grid */}
        {/* gap-8 ga qaytarildi */}
        <div className="flex overflow-x-auto snap-x snap-mandatory pb-4 gap-8 
                    md:grid md:grid-cols-3 md:gap-8 md:overflow-hidden md:snap-none">
          {videos.map((video) => (
            <div 
              key={video.id}
              // w-[90vw] sm:w-80 ga qaytarildi
              className="group relative flex-shrink-0 w-[90vw] sm:w-80 md:w-auto md:flex-shrink"
            >
              {/* RAMKA EFFEKTI OLIB TASHLANDI */}
              {/* Asosiy karta */}
              <div className="relative bg-black/90 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 shadow-2xl transform group-hover:scale-[1.02] transition-all duration-500 w-full snap-center">
                
                {/* Video */}
                <div 
                  className="relative overflow-hidden" 
                  // Shorts videolarni to'g'ri ko'rsatish uchun aspect ratio
                  // Bu yerda 9:16 (560 / 315 * 100 = 177.77%) aspect ratio ishlatilgan.
                  style={{ paddingTop: '177.77%' }} 
                >
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={video.videoEmbedUrl}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>

                {/* Ma'lumotlar */}
                <div className="p-6 bg-gradient-to-br from-black/95 to-gray-900/95 backdrop-blur-xl">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                    {video.studentName}
                  </h3>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <p className="text-gray-400 text-sm font-medium">
                      {video.university}
                    </p>
                  </div>
                  <p className="text-gray-500 text-xs">
                    Intervyu
                  </p>
                </div>

                {/* Pastki chiziq effekti */}
                <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;