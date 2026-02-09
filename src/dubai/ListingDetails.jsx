import React from 'react';

const ListingDetails = ({ title, specifications, description }) => {
  return (
    <div className="flex w-[666px] flex-col justify-center items-end gap-8 rounded-2xl">
      {/* Title */}
      <div className="flex h-9 flex-col justify-center self-stretch text-[#374151] text-right font-['Dubai'] text-2xl font-medium leading-9">
        {title}
      </div>

      {/* Specifications */}
      <div className="flex flex-col items-start gap-2">
        {specifications?.map((spec, index) => (
          <div
            key={index}
            className="flex py-2 justify-center items-center gap-6 rounded-lg"
          >
            <div className="w-40 text-[#374151] text-right font-['Dubai'] text-sm font-normal leading-6">
              {spec.label}
            </div>
            <div className="text-[#111827] text-right font-['Dubai'] text-sm font-bold leading-6">
              {spec.value}
            </div>
          </div>
        ))}
      </div>

      {/* Description */}
      {description && (
        <div className="flex pr-3 justify-end items-center gap-2 self-stretch">
          <div className="flex-1 text-[#6B7280] text-right font-['Dubai'] text-xs font-medium">
            {description}
          </div>
        </div>
      )}
    </div>
  );
};

export default ListingDetails;

