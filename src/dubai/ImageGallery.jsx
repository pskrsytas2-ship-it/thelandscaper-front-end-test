import React from 'react';

const ImageGallery = ({ mainImage, thumbnails, imageCount }) => {
  return (
    <div className="flex flex-col items-start gap-6 self-stretch w-full overflow-hidden">
      <div className="flex items-start gap-4 self-stretch w-full overflow-hidden">
        {/* Thumbnail Column */}
        <div className="flex flex-col items-start gap-4 w-[360px] flex-shrink-0">
          {thumbnails?.slice(0, 2).map((thumb, index) => (
            <div key={index} className="relative w-full h-[208px] overflow-hidden rounded-lg">
              <img
                src={thumb.src || thumb}
                alt={thumb.alt || `Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
              {/* Image Count Badge - only show on second thumbnail */}
              {index === 1 && imageCount && (
                <div className="absolute left-4 bottom-4 flex py-1 px-2 items-center gap-2 rounded bg-[rgba(0,0,0,0.6)]">
                  <span className="text-white font-semibold text-[11px] leading-normal">
                    {imageCount}
                  </span>
                  <div className="flex w-[17.5px] h-3.5 justify-center items-center">
                    <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0)">
                        <path d="M14.2398 0.300781H2.95682C2.3156 0.300781 1.70063 0.555509 1.24721 1.00892C0.793791 1.46235 0.539062 2.07732 0.539062 2.71854V10.7778C0.539062 11.419 0.793791 12.0339 1.24721 12.4874C1.70063 12.9408 2.3156 13.1956 2.95682 13.1956H14.2398C14.881 13.1956 15.4959 12.9408 15.9493 12.4874C16.4028 12.0339 16.6575 11.419 16.6575 10.7778V2.71854C16.6575 2.07732 16.4028 1.46235 15.9493 1.00892C15.4959 0.555509 14.881 0.300781 14.2398 0.300781ZM2.95682 11.5837C2.74309 11.5837 2.5381 11.4988 2.38695 11.3476C2.23582 11.1965 2.1509 10.9915 2.1509 10.7778V8.82743L4.81044 6.17595C4.96109 6.02828 5.16364 5.94557 5.37459 5.94557C5.58555 5.94557 5.78809 6.02828 5.93873 6.17595L11.3465 11.5837H2.95682ZM15.0457 10.7778C15.0457 10.9915 14.9608 11.1965 14.8096 11.3476C14.6585 11.4988 14.4534 11.5837 14.2398 11.5837H13.6192L10.5486 8.497L11.2578 7.78779C11.4084 7.64012 11.611 7.55741 11.822 7.55741C12.0329 7.55741 12.2355 7.64012 12.3861 7.78779L15.0457 10.4393V10.7778ZM15.0457 8.16657L13.5305 6.6595C13.0712 6.2182 12.4589 5.97175 11.822 5.97175C11.185 5.97175 10.5728 6.2182 10.1134 6.6595L9.40423 7.36871L7.08314 5.04766C6.62381 4.60636 6.01155 4.35991 5.37459 4.35991C4.73762 4.35991 4.12536 4.60636 3.66604 5.04766L2.1509 6.55473V2.71854C2.1509 2.5048 2.23582 2.29982 2.38695 2.14867C2.5381 1.99754 2.74309 1.91262 2.95682 1.91262H14.2398C14.4534 1.91262 14.6585 1.99754 14.8096 2.14867C14.9608 2.29982 15.0457 2.5048 15.0457 2.71854V8.16657Z" fill="white"/>
                      </g>
                      <defs>
                        <clipPath id="clip0">
                          <rect width="17.5" height="13.8158" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Main Image */}
        <img
          src={mainImage?.src || mainImage}
          alt={mainImage?.alt || "Main"}
          className="flex-1 min-w-0 h-[432px] object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default ImageGallery;
