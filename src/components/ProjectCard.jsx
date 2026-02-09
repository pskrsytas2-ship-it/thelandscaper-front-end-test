import { useNavigate } from 'react-router-dom';

const ProjectCard = ({ project, id = '1' }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    console.log('ProjectCard clicked - navigating to:', id, 'Title:', project.title);
    navigate(`/projects/${id}`);
  };

  return (
    <div
      onClick={handleCardClick}
      className="flex flex-col w-[276px] rounded-lg border border-[#E5E7EB] bg-white shadow-[0_1px_0_0_rgba(0,0,0,0)] cursor-pointer hover:shadow-md transition-shadow group"
    >
      {/* Project Image */}
      <div className="relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-[162px] object-cover rounded-t-lg"
        />
      </div>

      {/* Project Details */}
      <div className="flex flex-col py-3 gap-2">
        <div className="flex flex-col px-3 gap-1.5">
          {/* Title */}
          <h3 className="text-sm font-medium text-grey-100 overflow-hidden whitespace-nowrap text-ellipsis">
            {project.title}
          </h3>

          {/* Location */}
          <div className="flex items-center gap-0.5">
            <p className="flex-1 text-xs font-medium text-grey-80 leading-[19.2px]">
              {project.location}
            </p>
          </div>
        </div>

        {/* Enquiry Button - Shows on Hover (Below Title) */}
        <div className="hidden group-hover:block px-3">
          <button
            onClick={(e) => {
              e.stopPropagation();
              // Handle enquiry action
              console.log('Enquiry for:', project.title);
            }}
            className="w-full px-4 py-2 bg-[#0C7A1F] text-white text-sm font-semibold rounded"
          >
            Enquiry
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
