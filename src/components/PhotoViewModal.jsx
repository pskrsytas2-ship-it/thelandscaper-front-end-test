import { useState, useEffect } from 'react';

const PhotoViewModal = ({ isOpen, onClose, images, title, companyName, initialImageIndex = 0 }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(initialImageIndex);

  // Update current index when initialImageIndex changes
  useEffect(() => {
    if (isOpen) {
      setCurrentImageIndex(initialImageIndex);
    }
  }, [initialImageIndex, isOpen]);

  // Add keyboard navigation for Escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
  };

  const currentImage = images[currentImageIndex];
  const imageCount = images.length;

  return (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/24"
      onClick={handleOverlayClick}
    >
      <div
        className="w-[980px] max-w-[95vw] max-h-[90vh] overflow-y-auto bg-white rounded-3xl p-5 flex flex-col gap-6 no-scrollbar"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        onClick={(e) => e.stopPropagation()}
      >
        <style>{`
          .no-scrollbar::-webkit-scrollbar { display: none; }
        `}</style>
        {/* Header */}
        <div className="flex items-start gap-3 self-stretch">
          <div className="flex flex-col items-start gap-2 flex-1">
            <h2 className="self-stretch text-[#000000DE] font-poppins text-2xl font-medium leading-[133.4%]">
              {title}
            </h2>
            <p className="self-stretch text-[#6B7280] font-poppins text-xs font-medium leading-4 overflow-hidden text-ellipsis line-clamp-1">
              {companyName}
            </p>
          </div>
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="flex px-[22px] py-2 flex-col justify-center items-center rounded border border-[#2E7D3280] hover:bg-[#2E7D3210] transition-colors"
          >
            <span className="text-[#2E7D32] font-lato text-[15px] font-medium leading-[26px] tracking-[0.46px]">
              Close
            </span>
          </button>
        </div>

        {/* Image Viewer */}
        <div className="flex flex-col items-start gap-6 flex-1 self-stretch">
          <div className="relative flex flex-col justify-center items-center gap-2 flex-1 self-stretch bg-black/16">
            <img
              src={currentImage}
              alt={`${title} - Image ${currentImageIndex + 1}`}
              className="w-[740px] h-[410px] object-cover"
            />

            {/* Image Counter Badge */}
            <div className="absolute bottom-4 right-4 flex items-center gap-2 px-1 py-1 rounded bg-black/60">
              <div className="flex items-center justify-center w-[17.5px] h-3.5">
                <svg className="w-[18px] h-3.5" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_4002_272)">
                    <path d="M14.2398 0.300781H2.95682C2.3156 0.300781 1.70063 0.555509 1.24721 1.00892C0.793791 1.46235 0.539062 2.07732 0.539062 2.71854V10.7778C0.539062 11.419 0.793791 12.0339 1.24721 12.4874C1.70063 12.9408 2.3156 13.1956 2.95682 13.1956H14.2398C14.881 13.1956 15.4959 12.9408 15.9493 12.4874C16.4028 12.0339 16.6575 11.419 16.6575 10.7778V2.71854C16.6575 2.07732 16.4028 1.46235 15.9493 1.00892C15.4959 0.555509 14.881 0.300781 14.2398 0.300781ZM2.95682 11.5837C2.74309 11.5837 2.5381 11.4988 2.38695 11.3476C2.23582 11.1965 2.1509 10.9915 2.1509 10.7778V8.82743L4.81044 6.17595C4.96109 6.02828 5.16364 5.94557 5.37459 5.94557C5.58555 5.94557 5.78809 6.02828 5.93873 6.17595L11.3465 11.5837H2.95682ZM15.0457 10.7778C15.0457 10.9915 14.9608 11.1965 14.8096 11.3476C14.6585 11.4988 14.4534 11.5837 14.2398 11.5837H13.6192L10.5486 8.497L11.2578 7.78779C11.4084 7.64012 11.611 7.55741 11.822 7.55741C12.0329 7.55741 12.2355 7.64012 12.3861 7.78779L15.0457 10.4393V10.7778ZM15.0457 8.16657L13.5305 6.6595C13.0712 6.2182 12.4589 5.97175 11.822 5.97175C11.185 5.97175 10.5728 6.2182 10.1134 6.6595L9.40423 7.36871L7.08314 5.04766C6.62381 4.60636 6.01155 4.35991 5.37459 4.35991C4.73762 4.35991 4.12536 4.60636 3.66604 5.04766L2.1509 6.55473V2.71854C2.1509 2.5048 2.23582 2.29982 2.38695 2.14867C2.5381 1.99754 2.74309 1.91262 2.95682 1.91262H14.2398C14.4534 1.91262 14.6585 1.99754 14.8096 2.14867C14.9608 2.29982 15.0457 2.5048 15.0457 2.71854V8.16657Z" fill="white"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_4002_272">
                      <rect width="17.5" height="13.8158" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <span className="text-white font-inter text-[11.266px] font-semibold">
                {String(currentImageIndex + 1).padStart(2, '0')} / {String(imageCount).padStart(2, '0')}
              </span>
            </div>

            {/* Action Icons */}
            <div className="absolute top-4 right-4 flex gap-3">
              {/* Share Button */}
              <button className="flex w-8 h-8 justify-center items-center rounded-full bg-white shadow-[0_2px_8px_rgba(0,0,0,0.12)] hover:bg-gray-50 transition-colors">
                <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 6.5C15.3807 6.5 16.5 5.38071 16.5 4C16.5 2.61929 15.3807 1.5 14 1.5C12.6193 1.5 11.5 2.61929 11.5 4C11.5 5.38071 12.6193 6.5 14 6.5Z" stroke="#6B7280" strokeWidth="1.5"/>
                  <path d="M6 12C7.38071 12 8.5 10.8807 8.5 9.5C8.5 8.11929 7.38071 7 6 7C4.61929 7 3.5 8.11929 3.5 9.5C3.5 10.8807 4.61929 12 6 12Z" stroke="#6B7280" strokeWidth="1.5"/>
                  <path d="M14 18.5C15.3807 18.5 16.5 17.3807 16.5 16C16.5 14.6193 15.3807 13.5 14 13.5C12.6193 13.5 11.5 14.6193 11.5 16C11.5 17.3807 12.6193 18.5 14 18.5Z" stroke="#6B7280" strokeWidth="1.5"/>
                  <path d="M8.2 10.4L11.8 13.1" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M11.8 6.9L8.2 9.6" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>

              {/* Favorite Button */}
              <button className="flex w-8 h-8 justify-center items-center rounded-full bg-white shadow-[0_2px_8px_rgba(0,0,0,0.12)] hover:bg-gray-50 transition-colors">
                <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 17.5L8.55 16.2C4.8 12.9 2.5 10.9 2.5 8.25C2.5 6.2 4.2 4.5 6.25 4.5C7.43 4.5 8.56 5.05 9.25 5.93C9.94 5.05 11.07 4.5 12.25 4.5C14.3 4.5 16 6.2 16 8.25C16 10.9 13.7 12.9 9.95 16.2L10 17.5Z" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Thumbnail Strip */}
          <div className="flex h-[72px] items-center gap-3 self-stretch bg-white overflow-x-auto px-2">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  handleThumbnailClick(index);
                }}
                className={`flex-shrink-0 ${
                  index === currentImageIndex
                    ? 'p-1 rounded border-2 border-[#0C7A1F]'
                    : 'p-1'
                }`}
              >
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-[60px] h-[60px] rounded object-cover cursor-pointer"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoViewModal;

