import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ListingCard = ({
  id = '1',
  image,
  images = [], // Array of images for navigation
  title,
  location,
  price,
  priceSuffix,
  showFavorite = true,
  type = 'other' // 'project' or 'other'
}) => {
  const [isFavorited, setIsFavorited] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  // Use images array if provided, otherwise fallback to single image
  const fallbackImage =
    'https://api.builder.io/api/v1/image/assets/TEMP/069f5e3f17bdf6c593745f1c45b47bc51a41cbf3?width=552';
  const imageList = (images && images.length > 0 ? images : [image]).filter(Boolean);
  const currentImage = imageList[currentImageIndex] || fallbackImage;
  const hasMultipleImages = imageList.length > 1;

  const handleCardClick = () => {
    // Determine route based on ID prefix
    let route = '';

    if (id.toString().startsWith('machinery-rent-')) {
      route = `/machineries/rent/${id}`;
    } else if (id.toString().startsWith('machinery-sale-')) {
      route = `/machineries/sale/${id}`;
    } else if (id.toString().startsWith('tool-')) {
      route = `/tools/${id}`;
    } else if (id.toString().startsWith('tree-')) {
      route = `/trees/${id}`;
    } else if (id.toString().startsWith('agro-')) {
      route = `/agro-chemicals/${id}`;
    } else if (type === 'project') {
      route = `/projects/${id}`;
    }

    if (route) {
      console.log('Navigating to:', route, 'Title:', title);
      navigate(route);
    } else {
      console.log('No route defined for id:', id, 'type:', type);
    }
  };

  const handlePreviousImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : imageList.length - 1));
  };

  const handleNextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev < imageList.length - 1 ? prev + 1 : 0));
  };

  return (
    <div
      onClick={handleCardClick}
      className="flex flex-col w-full rounded-lg border border-[#E5E7EB] bg-white shadow-[0_1px_0_0_rgba(0,0,0,0)] hover:shadow-md transition-shadow cursor-pointer group overflow-hidden"
    >
      {/* Image Section */}
      <div
        className="relative h-[162px] rounded-t-lg bg-cover bg-center"
        style={{ backgroundImage: `url(${currentImage})` }}
      >
        {/* Navigation Arrows - Only show if multiple images */}
        {hasMultipleImages && (
          <div className="flex justify-between items-center h-full px-2 py-12">
            {/* Previous Button */}
            <button
              onClick={handlePreviousImage}
              className="flex items-center justify-center w-[30px] h-[30px] rounded-full border border-grey-30 bg-white/60 hover:bg-white/80 transition-colors z-10"
            >
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.0876 6.175L11.9126 5L6.9126 10L11.9126 15L13.0876 13.825L9.27093 10L13.0876 6.175Z" fill="black" fillOpacity="0.56"/>
              </svg>
            </button>

            {/* Next Button */}
            <button
              onClick={handleNextImage}
              className="flex items-center justify-center w-[30px] h-[30px] rounded-full border border-grey-30 bg-white/60 hover:bg-white/80 transition-colors z-10"
            >
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.0876 5L6.9126 6.175L10.7293 10L6.9126 13.825L8.0876 15L13.0876 10L8.0876 5Z" fill="black" fillOpacity="0.56"/>
              </svg>
            </button>
          </div>
        )}

        {/* Favorite Button */}
        {showFavorite && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsFavorited(!isFavorited);
            }}
            className="absolute right-2 top-2 flex items-center justify-center w-6 h-6 bg-transparent"
            aria-label="Favorite"
          >
            <svg className="w-4 h-4" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path
                d="M10.4201 2.30591C10.1647 2.05041 9.86147 1.84774 9.52774 1.70945C9.19401 1.57117 8.8363 1.5 8.47506 1.5C8.11382 1.5 7.75611 1.57117 7.42238 1.70945C7.08865 1.84774 6.78544 2.05041 6.53006 2.30591L6.00006 2.83591L5.47006 2.30591C4.95421 1.79007 4.25458 1.50027 3.52506 1.50027C2.79554 1.50027 2.09591 1.79007 1.58006 2.30591C1.06421 2.82176 0.774414 3.5214 0.774414 4.25091C0.774414 4.98043 1.06421 5.68007 1.58006 6.19591L2.11006 6.72591L6.00006 10.6159L9.89006 6.72591L10.4201 6.19591C10.6756 5.94054 10.8782 5.63732 11.0165 5.30359C11.1548 4.96986 11.226 4.61216 11.226 4.25091C11.226 3.88967 11.1548 3.53196 11.0165 3.19824C10.8782 2.86451 10.6756 2.56129 10.4201 2.30591Z"
                stroke="#FFFFFF"
                strokeWidth="1"
                fill={isFavorited ? "rgba(255,255,255,0.15)" : "none"}
              />
            </svg>
          </button>
        )}
      </div>

      {/* Content Section */}
      <div className="flex flex-col pt-3">
        <div className="flex flex-col gap-1.5 px-3 pb-3">
          {/* Title */}
          <h3 className="text-sm font-medium text-[#374151] line-clamp-1">
            {title}
          </h3>

          {/* Location */}
          <div className="flex items-center gap-0.5">
            <svg className="w-3 h-3 flex-shrink-0" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.5 5C10.5 8.5 6 11.5 6 11.5C6 11.5 1.5 8.5 1.5 5C1.5 3.80653 1.97411 2.66193 2.81802 1.81802C3.66193 0.974106 4.80653 0.5 6 0.5C7.19347 0.5 8.33807 0.974106 9.18198 1.81802C10.0259 2.66193 10.5 3.80653 10.5 5Z" stroke="#7AAF7B" strokeWidth="0.833333" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6 6.5C6.82843 6.5 7.5 5.82843 7.5 5C7.5 4.17157 6.82843 3.5 6 3.5C5.17157 3.5 4.5 4.17157 4.5 5C4.5 5.82843 5.17157 6.5 6 6.5Z" stroke="#7AAF7B" strokeWidth="0.833333" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <p className="text-xs font-medium text-[#6B7280] line-clamp-1">
              {location}
            </p>
          </div>
          {/* Price */}
          {price && (
            <div className="flex items-center gap-1 mt-2">
              <span className="text-sm font-semibold text-[#111827]">{price}</span>
              {priceSuffix && (
                <span className="text-[10px] font-medium text-[#9E9E9E] line-clamp-1">
                  {priceSuffix}
                </span>
              )}
            </div>
          )}
        </div>

        {/* Enquiry Button - Shows on Hover (Below Content) */}
        <div className="hidden group-hover:block">
          <button
            onClick={(e) => {
              e.stopPropagation();
              // Handle enquiry action
              console.log('Enquiry for:', title);
            }}
            className="w-full px-4 py-3 bg-[#2D7A1F] text-white text-sm font-semibold rounded-b-lg"
          >
            Enquiry
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
