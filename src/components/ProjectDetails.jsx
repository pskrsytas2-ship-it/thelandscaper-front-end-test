const ProjectDetails = ({ specifications, description }) => {
  return (
    <div className="flex flex-col gap-8">
      {/* Specifications Section */}
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-medium text-grey-100">Specifications</h2>
        
        <div className="flex items-start gap-6">
          {specifications.map((spec, index) => (
            <div key={index} className="flex items-start gap-6 flex-1">
              {index > 0 && <div className="w-px h-full bg-[#D9D9D9]"></div>}
              <div className="flex py-2 items-start gap-6 flex-1 rounded-lg">
                <div className="w-[100px] text-sm font-normal text-[#2B2D2E]">{spec.label}</div>
                <div className="text-base font-semibold text-[#2B2D2E] text-center">{spec.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Description Section */}
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-medium text-grey-100">Detailed Description</h2>
        <p className="text-base font-normal text-[#2B2D2E] leading-6">{description}</p>
      </div>
    </div>
  );
};

export default ProjectDetails;

