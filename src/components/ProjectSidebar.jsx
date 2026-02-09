const ProjectSidebar = ({ project, company }) => {
  return (
    <div className="flex flex-col w-[462px] gap-10">
      <div className="flex flex-col gap-6 p-4 rounded-lg border border-grey-50 bg-grey-30">
        <div className="flex flex-col gap-2">
          {/* Header with date and actions */}
          <div className="flex items-center gap-4 justify-between">
            <span className="text-[#9E9E9E] text-[10px] font-medium flex-1 overflow-hidden whitespace-nowrap text-ellipsis">
              Posted : {project.postedDate}
            </span>
            <div className="flex items-center gap-2">
              {/* Share Button */}
              <button className="flex items-center justify-center w-6 h-6 rounded-full border border-grey-40 bg-white hover:bg-grey-40 transition-colors">
                <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.295 6.755L7.71 8.745M7.705 3.255L4.295 5.245M10.5 2.5C10.5 3.32843 9.82843 4 9 4C8.17157 4 7.5 3.32843 7.5 2.5C7.5 1.67157 8.17157 1 9 1C9.82843 1 10.5 1.67157 10.5 2.5ZM4.5 6C4.5 6.82843 3.82843 7.5 3 7.5C2.17157 7.5 1.5 6.82843 1.5 6C1.5 5.17157 2.17157 4.5 3 4.5C3.82843 4.5 4.5 5.17157 4.5 6ZM10.5 9.5C10.5 10.3284 9.82843 11 9 11C8.17157 11 7.5 10.3284 7.5 9.5C7.5 8.67157 8.17157 8 9 8C9.82843 8 10.5 8.67157 10.5 9.5Z" stroke="#6B7280" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              
              {/* Like Button */}
              <button className="flex items-center justify-center w-6 h-6 p-1.5 rounded-full border border-grey-40 bg-white hover:bg-grey-40 transition-colors">
                <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.4201 2.30591C10.1647 2.05041 9.86147 1.84774 9.52774 1.70945C9.19401 1.57117 8.8363 1.5 8.47506 1.5C8.11382 1.5 7.75611 1.57117 7.42238 1.70945C7.08865 1.84774 6.78544 2.05041 6.53006 2.30591L6.00006 2.83591L5.47006 2.30591C4.95421 1.79007 4.25458 1.50027 3.52506 1.50027C2.79554 1.50027 2.09591 1.79007 1.58006 2.30591C1.06421 2.82176 0.774414 3.5214 0.774414 4.25091C0.774414 4.98043 1.06421 5.68007 1.58006 6.19591L2.11006 6.72591L6.00006 10.6159L9.89006 6.72591L10.4201 6.19591C10.6756 5.94054 10.8782 5.63732 11.0165 5.30359C11.1548 4.96986 11.226 4.61216 11.226 4.25091C11.226 3.88967 11.1548 3.53196 11.0165 3.19824C10.8782 2.86451 10.6756 2.56129 10.4201 2.30591Z" fill="#D1D5DB"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Project Title */}
          <h3 className="text-base font-medium text-grey-100">{project.title}</h3>
        </div>

        <div className="h-px bg-grey-50"></div>

        {/* Company Info */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-[#9E9E9E] text-[10px] font-medium overflow-hidden whitespace-nowrap text-ellipsis">
              Posted by
            </span>
            
            <div className="flex items-center gap-4">
              {/* Company Logo */}
              <div 
                className="w-[72px] h-[72px] rounded-full bg-cover bg-center" 
                style={{ backgroundImage: `url(${company.logo})` }}
              ></div>
              
              <div className="flex flex-col justify-center gap-2">
                <h4 className="text-lg font-semibold text-[#23262A]">{company.name}</h4>
                
                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <span className="text-sm font-semibold text-grey-90 tracking-[-0.28px]">{company.rating}</span>
                    <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.99967 11.848L12.1197 14.3346L11.0263 9.64797L14.6663 6.49464L9.87301 6.08797L7.99967 1.66797L6.12634 6.08797L1.33301 6.49464L4.97301 9.64797L3.87967 14.3346L7.99967 11.848Z" fill="#FFBE28"/>
                    </svg>
                  </div>
                  <span className="text-xs font-medium text-grey-80 tracking-[-0.24px]">({company.ratingsCount} Ratings)</span>
                </div>
                
                {/* Action Links */}
                <div className="flex items-start gap-4">
                  <button className="text-xs font-semibold text-brand capitalize">
                    Rate this Business
                  </button>
                  <div className="w-px h-5 bg-[#D9D9D9]"></div>
                  <button className="text-xs font-semibold text-brand capitalize">
                    View all Listings
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Enquiry Button */}
          <button className="flex h-[34px] px-5 py-[7px] justify-center items-center gap-2 rounded-sm border border-[rgba(12,122,31,0.1)] bg-[rgba(12,122,31,0.1)] hover:bg-[rgba(12,122,31,0.15)] transition-colors">
            <span className="text-xs font-semibold text-brand capitalize">Enquiry</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectSidebar;

