import React from 'react';

const ListingCard = ({
  id,
  image,
  title,
  subtitle,
  location,
  price,
  priceUnit,
  favorite = false,
  onClick,
  titleClassName = '',
  subtitleClassName = '',
}) => {
  const handleCardClick = (e) => {
    // Don't trigger navigation if clicking on favorite or navigation buttons
    if (e.target.closest('button')) {
      return;
    }
    if (onClick) {
      onClick(id);
    }
  };

  return (
    <div
      className="flex w-full flex-col items-end rounded-lg border border-[#E5E7EB] bg-white shadow-[0_1px_0_0_rgba(0,0,0,0)] overflow-hidden relative cursor-pointer hover:shadow-md transition-shadow"
      onClick={handleCardClick}
    >
      {/* Image Container */}
      <div
        className="flex h-[162px] px-2 py-12 justify-between items-center self-stretch rounded-t-md bg-cover bg-center relative"
        style={{ backgroundImage: `url(${image})` }}
      >
      </div>

      {/* Content */}
      <div className="flex py-3 flex-col items-end gap-2 self-stretch">
        <div className="flex px-3 flex-col items-end gap-1.5 self-stretch">
          <div className={`self-stretch overflow-hidden text-gray-700 text-right font-['Dubai'] text-sm font-medium line-clamp-1 ${titleClassName}`}>
            {title}
          </div>
          <div className="flex justify-end items-center gap-0.5 self-stretch">
            <div className={`flex-1 overflow-hidden text-[#6B7280] text-right font-['Dubai'] text-xs font-medium line-clamp-1 ${subtitleClassName}`}>
              {subtitle || location}
            </div>
            {(subtitle || location) && (
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M10.5 5C10.5 8.5 6 11.5 6 11.5C6 11.5 1.5 8.5 1.5 5C1.5 3.80653 1.97411 2.66193 2.81802 1.81802C3.66193 0.974106 4.80653 0.5 6 0.5C7.19347 0.5 8.33807 0.974106 9.18198 1.81802C10.0259 2.66193 10.5 3.80653 10.5 5Z"
                  stroke="#7AAF7B"
                  strokeWidth="0.833333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 6.5C6.82843 6.5 7.5 5.82843 7.5 5C7.5 4.17157 6.82843 3.5 6 3.5C5.17157 3.5 4.5 4.17157 4.5 5C4.5 5.82843 5.17157 6.5 6 6.5Z"
                  stroke="#7AAF7B"
                  strokeWidth="0.833333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </div>
        </div>

        {/* Price Section */}
        {price && (
          <div className="flex px-3 justify-end items-center gap-1 self-stretch">
            {priceUnit && (
              <div className="flex-1 overflow-hidden text-[#9E9E9E] text-right font-['Dubai'] text-[10px] font-medium line-clamp-1">
                {priceUnit}
              </div>
            )}
            <div className="text-[#111827] text-right font-['Dubai'] text-sm font-bold">
              AED {price}
            </div>
          </div>
        )}
      </div>

      {/* Favorite Icon */}
      <div className="flex w-7 h-7 justify-center items-center absolute left-2 top-2 bg-transparent">
        <svg width="14" height="14" viewBox="0 0 12 12" fill="none" aria-hidden="true">
          <path
            d="M10.4201 2.30591C10.1647 2.05041 9.86147 1.84774 9.52774 1.70945C9.19401 1.57117 8.8363 1.5 8.47506 1.5C8.11382 1.5 7.75611 1.57117 7.42238 1.70945C7.08865 1.84774 6.78544 2.05041 6.53006 2.30591L6.00006 2.83591L5.47006 2.30591C4.95421 1.79007 4.25458 1.50027 3.52506 1.50027C2.79554 1.50027 2.09591 1.79007 1.58006 2.30591C1.06421 2.82176 0.774414 3.5214 0.774414 4.25091C0.774414 4.98043 1.06421 5.68007 1.58006 6.19591L2.11006 6.72591L6.00006 10.6159L9.89006 6.72591L10.4201 6.19591C10.6756 5.94054 10.8782 5.63732 11.0165 5.30359C11.1548 4.96986 11.226 4.61216 11.226 4.25091C11.226 3.88967 11.1548 3.53196 11.0165 3.19824C10.8782 2.86451 10.6756 2.56129 10.4201 2.30591Z"
            stroke="#FFFFFF"
            strokeWidth="1"
            fill={favorite ? 'rgba(255,255,255,0.15)' : 'none'}
          />
        </svg>
      </div>
    </div>
  );
};

export default ListingCard;
