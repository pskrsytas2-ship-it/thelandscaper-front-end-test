import React from 'react';

const CompanyInfo = ({
  publishedDate,
  projectTitle,
  companyName,
  companyLogo,
  rating,
  reviewCount,
}) => {
  return (
    <div className="flex w-[462px] flex-col items-start gap-10">
      <div className="flex p-4 flex-col items-start gap-6 self-stretch rounded-lg border border-[#E5E7EB] bg-[#F9FAFB]">
        {/* Header Section */}
        <div className="flex flex-col items-start gap-2 self-stretch">
          <div className="flex pb-2 items-center gap-4 self-stretch">
            <div className="flex-1 overflow-hidden text-[#9E9E9E] text-right font-['Dubai'] text-[10px] font-medium line-clamp-1">
              {publishedDate}
            </div>
            <div className="flex w-6 h-6 p-1.5 justify-center items-center rounded-full border border-[#F3F4F6] bg-white">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M4.295 6.755L7.71 8.745M7.705 3.255L4.295 5.245M10.5 2.5C10.5 3.32843 9.82843 4 9 4C8.17157 4 7.5 3.32843 7.5 2.5C7.5 1.67157 8.17157 1 9 1C9.82843 1 10.5 1.67157 10.5 2.5ZM4.5 6C4.5 6.82843 3.82843 7.5 3 7.5C2.17157 7.5 1.5 6.82843 1.5 6C1.5 5.17157 2.17157 4.5 3 4.5C3.82843 4.5 4.5 5.17157 4.5 6ZM10.5 9.5C10.5 10.3284 9.82843 11 9 11C8.17157 11 7.5 10.3284 7.5 9.5C7.5 8.67157 8.17157 8 9 8C9.82843 8 10.5 8.67157 10.5 9.5Z"
                  stroke="#6B7280"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="flex w-6 h-6 p-1.5 justify-center items-center rounded-full border border-[#F3F4F6] bg-white">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M10.4201 2.30591C10.1647 2.05041 9.86147 1.84774 9.52774 1.70945C9.19401 1.57117 8.8363 1.5 8.47506 1.5C8.11382 1.5 7.75611 1.57117 7.42238 1.70945C7.08865 1.84774 6.78544 2.05041 6.53006 2.30591L6.00006 2.83591L5.47006 2.30591C4.95421 1.79007 4.25458 1.50027 3.52506 1.50027C2.79554 1.50027 2.09591 1.79007 1.58006 2.30591C1.06421 2.82176 0.774414 3.5214 0.774414 4.25091C0.774414 4.98043 1.06421 5.68007 1.58006 6.19591L2.11006 6.72591L6.00006 10.6159L9.89006 6.72591L10.4201 6.19591C10.6756 5.94054 10.8782 5.63732 11.0165 5.30359C11.1548 4.96986 11.226 4.61216 11.226 4.25091C11.226 3.88967 11.1548 3.53196 11.0165 3.19824C10.8782 2.86451 10.6756 2.56129 10.4201 2.30591Z"
                  fill="#D1D5DB"
                />
              </svg>
            </div>
          </div>
          <div className="self-stretch text-[#374151] text-right font-['Dubai'] text-base font-medium leading-6">
            {projectTitle}
          </div>
        </div>

        <div className="h-px self-stretch bg-[#E5E7EB]" />

        {/* Company Section */}
        <div className="flex flex-col items-start gap-6 self-stretch">
          <div className="flex flex-col items-start gap-2 self-stretch">
            <div className="self-stretch overflow-hidden text-[#9CA3AF] text-right font-['Dubai'] text-[10px] font-medium line-clamp-1">
              تم النشر بواسطة
            </div>
            <div className="flex items-center gap-3">
              <img
                src={companyLogo}
                alt={companyName}
                className="w-[72px] h-[72px] rounded-full"
              />
              <div className="flex flex-col justify-center items-end gap-1">
                <div className="text-[#23262A] text-right font-['Dubai'] text-lg font-bold">
                  {companyName}
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-[#6B7280] font-['Dubai'] text-xs font-medium leading-[160%]">
                    ({reviewCount} تقييمات)
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="flex items-center gap-1">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path
                          d="M7.99967 11.848L12.1197 14.3346L11.0263 9.64797L14.6663 6.49464L9.87301 6.08797L7.99967 1.66797L6.12634 6.08797L1.33301 6.49464L4.97301 9.64797L3.87967 14.3346L7.99967 11.848Z"
                          fill="#FFBE28"
                        />
                      </svg>
                    </div>
                    <div className="text-[#4B5563] font-['Dubai'] text-sm font-bold leading-[160%]">
                      {rating}
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <button className="flex items-start gap-2 rounded-sm">
                    <span className="text-[#0C7A1F] text-right font-['Dubai'] text-xs font-bold leading-5">
                      عرض جميع القوائم
                    </span>
                  </button>
                  <div className="w-px self-stretch bg-[#D9D9D9]" />
                  <button className="flex items-start gap-2 rounded-sm">
                    <span className="text-[#0C7A1F] text-right font-['Dubai'] text-xs font-bold leading-5">
                      عرض جميع القوائم
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button className="flex h-[34px] py-[7px] px-5 justify-center items-center gap-2 self-stretch rounded-sm border border-[#0C7A1F]/10 bg-[#0C7A1F]/10">
          <span className="text-[#0C7A1F] text-right font-['Dubai'] text-xs font-bold leading-5">
            استفسار
          </span>
        </button>
      </div>
    </div>
  );
};

export default CompanyInfo;
