import { useNavigate } from 'react-router-dom';

const ForumCard = ({
  id = '1',
  image,
  images = [],
  title,
  author,
  timeAgo,
  commentCount,
}) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    // Navigate to forum post detail page
    console.log('Navigating to forum post:', id, 'Title:', title);
    navigate(`/forum/${id}`);
  };

  // Calculate the image count overlay
  const totalImages = images?.length || 0;
  const imageCountOverlay = totalImages > 1 ? `+${totalImages}` : null;

  return (
    <div
      onClick={handleCardClick}
      className="flex w-full items-start rounded-lg border border-[#E5E7EB] bg-white shadow-[0_1px_2px_0_rgba(16,24,40,0.05)] hover:shadow-md transition-shadow cursor-pointer overflow-hidden"
    >
      {/* Image Section with Overlay */}
      <div className="relative w-[119px] h-[119px] flex-shrink-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-[3.742px]"
        />
        {imageCountOverlay && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-[3.742px]">
            <span className="text-white font-medium text-[13.176px] leading-normal font-poppins">
              {imageCountOverlay}
            </span>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-1 p-3 gap-2">
        {/* Author and Time */}
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-medium text-[#9E9E9E] leading-normal font-poppins line-clamp-1">
            {author}
          </span>
          <div className="w-[3px] h-[3px] rounded-full bg-[#9E9E9E]"></div>
          <span className="text-[10px] font-medium text-[#9E9E9E] leading-normal font-poppins line-clamp-1">
            {timeAgo}
          </span>
        </div>

        {/* Title and Comment Count */}
        <div className="flex flex-col gap-1">
          {/* Title */}
          <h3 className="h-[50px] text-[16px] font-medium text-[#374151] leading-normal font-poppins overflow-hidden whitespace-nowrap text-ellipsis">
            {title}
          </h3>

          {/* Comment Count */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <svg
                className="w-4 h-4"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 5.2C2 4.0799 2 3.51984 2.21799 3.09202C2.40973 2.71569 2.71569 2.40973 3.09202 2.21799C3.51984 2 4.0799 2 5.2 2H10.8C11.9201 2 12.4802 2 12.908 2.21799C13.2843 2.40973 13.5903 2.71569 13.782 3.09202C14 3.51984 14 4.07989 14 5.2V8.8C14 9.9201 14 10.4802 13.782 10.908C13.5903 11.2843 13.2843 11.5903 12.908 11.782C12.4802 12 11.9201 12 10.8 12H6.45583C6.0398 12 5.83178 12 5.63281 12.0408C5.45628 12.0771 5.28547 12.137 5.12499 12.219C4.94411 12.3114 4.78168 12.4413 4.45681 12.7012L2.8665 13.9735C2.58911 14.1954 2.45042 14.3063 2.33369 14.3065C2.23218 14.3066 2.13615 14.2604 2.07282 14.1811C2 14.0898 2 13.9122 2 13.557V5.2Z"
                  stroke="#6B7280"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-[12px] font-medium text-[#6B7280] leading-normal font-poppins line-clamp-1">
                {commentCount}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForumCard;
