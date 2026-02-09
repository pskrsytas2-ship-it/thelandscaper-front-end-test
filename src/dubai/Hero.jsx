import React from 'react';


const Hero = ({
  backgroundImage,
  alt,
  title,
  searchButton,
  searchPlaceholder,
  categoriesLabel,
  citiesLabel
}) => {
  const heroBg =
    'https://cdn.builder.io/api/v1/image/assets%2Fcdb7c934efe041d78ab29729729dc83e%2F583721f8f25842378016b409568ed9fe';

  return (
    <div
      className="w-full flex justify-center items-start bg-[#0C7A1F] bg-no-repeat bg-center bg-cover relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(12,122,31,0.55), rgba(12,122,31,0.55)), url(${heroBg})`,
      }}
    >
      <div className="w-full max-w-[1440px] flex flex-col justify-center items-start gap-4 py-8 px-[120px] relative">
        {/* Background decorative pattern placeholder */}
        <div className="absolute inset-0 w-full h-full opacity-100 pointer-events-none" />

        {/* Main Heading */}
        <div className="w-full flex justify-center items-center gap-2 px-[22px] pb-4 relative z-10">
          <h1 className="text-white text-right font-['Dubai'] text-[30px] font-bold leading-normal">
            {title || 'أنشئ تنسيق الحدائق الذي تحلم به اليوم!'}
          </h1>
        </div>

        {/* Search Bar - RTL Layout */}
        <div className="w-full max-w-[1200px] flex justify-center items-center px-6 relative z-10 shadow-[0_32px_64px_-12px_rgba(16,24,40,0.14)]">
          <div className="flex w-full items-stretch" dir="rtl">
            {/* Cities Dropdown - Rightmost in RTL */}
            <div className="flex px-4 py-2.5 justify-center items-center gap-3 rounded-r-lg border border-[rgba(12,122,31,0.15)] bg-white">
              <div className="flex items-center gap-2">
                <span className="w-[135px] text-[#4B5563] text-right font-['Dubai'] text-base font-medium leading-6 tracking-[0.48px]">
                  {citiesLabel || 'جميع المدن'}
                </span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_cities)">
                    <path d="M14 6.66797C14 11.3346 8 15.3346 8 15.3346C8 15.3346 2 11.3346 2 6.66797C2 5.07667 2.63214 3.55055 3.75736 2.42533C4.88258 1.30011 6.4087 0.667969 8 0.667969C9.5913 0.667969 11.1174 1.30011 12.2426 2.42533C13.3679 3.55055 14 5.07667 14 6.66797Z" stroke="#0C7A1F" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 8.66797C9.10457 8.66797 10 7.77254 10 6.66797C10 5.5634 9.10457 4.66797 8 4.66797C6.89543 4.66797 6 5.5634 6 6.66797C6 7.77254 6.89543 8.66797 8 8.66797Z" stroke="#0C7A1F" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_cities">
                      <rect width="16" height="16" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6L8 10L12 6" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            {/* Categories Dropdown */}
            <div className="flex px-4 py-2.5 justify-center items-center gap-3 border-t border-b border-l border-[rgba(12,122,31,0.15)] bg-white">
              <div className="flex items-center gap-2">
                <span className="w-[139px] text-[#4B5563] text-right font-['Dubai'] text-base font-medium leading-6 tracking-[0.48px]">
                  {categoriesLabel || 'جميع الفئات'}
                </span>
              </div>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6L8 10L12 6" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            {/* Search Input */}
            <div className="flex flex-1 px-4 py-[19px] items-center gap-3 border-t border-b border-[rgba(12,122,31,0.15)] bg-white">
              <input
                type="text"
                placeholder={searchPlaceholder || 'ابحث عن أي شيء'}
                className="flex-1 text-right font-['Dubai'] text-base font-normal leading-6 text-[#9CA3AF] bg-transparent outline-none"
                dir="rtl"
              />
            </div>

            {/* Search Button - Leftmost in RTL */}
            <button className="flex min-w-[128px] px-10 justify-center items-center gap-2 flex-shrink-0 rounded-l-lg border border-[rgba(12,122,31,0.15)] bg-[#D2E2D5]">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                <path d="M14 14L11.1 11.1M12.6667 7.33333C12.6667 10.2789 10.2789 12.6667 7.33333 12.6667C4.38781 12.6667 2 10.2789 2 7.33333C2 4.38781 4.38781 2 7.33333 2C10.2789 2 12.6667 4.38781 12.6667 7.33333Z" stroke="#0C7A1F" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-[#0C7A1F] text-right font-['Dubai'] text-base font-bold leading-6 tracking-[0.48px] capitalize">
                {searchButton || 'البحث'}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
