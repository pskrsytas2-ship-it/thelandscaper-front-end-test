import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Breadcrumb from '../components/Breadcrumb';
import ImageGallery from '../components/ImageGallery';
import ProjectCard from '../components/ProjectCard';
import Footer from '../components/Footer';
import { getProjectById, relatedProjects } from '../data/sampleData';

function ProjectDetailPage() {
  const { id } = useParams();
  const projectDetail = getProjectById(id);

  const breadcrumbItems = [
    { label: 'Home', href: '/', icon: 'home' },
    { label: 'Projects', href: '/projects' },
    { label: projectDetail.title, current: true },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header showBorder={false} />

      <main className="w-full max-w-[1200px] mx-auto px-6 py-8">
        {/* Breadcrumb */}
        <Breadcrumb items={breadcrumbItems} />

        {/* Image Gallery */}
        <div className="mt-6">
          <ImageGallery
            images={projectDetail.images}
            totalCount={projectDetail.totalImages}
            title={projectDetail.title}
            companyName={projectDetail.company.name}
          />
        </div>

        {/* Content Section */}
        <div className="mt-6 flex gap-6">
          {/* Left Column - Specifications & Description */}
          <div className="flex-[2] flex flex-col gap-8">
            {/* Specifications Section */}
            <div className="flex flex-col items-start gap-4">
              <h2 className="h-9 flex flex-col justify-center self-stretch text-[#374151] font-poppins text-2xl font-medium leading-9">
                Specifications
              </h2>
              <div className="flex items-start gap-6 self-stretch">
                {projectDetail.specifications.map((spec, index) => (
                  <div key={index} className="flex p-2 items-start gap-6 flex-1 rounded-lg">
                    <div className="w-[100px] text-[#2B2D2E] font-poppins text-sm font-normal leading-6">
                      {spec.label}
                    </div>
                    {index < projectDetail.specifications.length - 1 && (
                      <div className="w-px self-stretch bg-[#D9D9D9]"></div>
                    )}
                    <div className="text-[#2B2D2E] text-center font-poppins text-base font-semibold leading-6">
                      {spec.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Description Section */}
            <div className="flex flex-col items-start gap-4">
              <h2 className="h-9 flex flex-col justify-center self-stretch text-[#374151] font-poppins text-2xl font-medium leading-9">
                Detailed Description
              </h2>
              <p className="self-stretch text-[#2B2D2E] font-poppins text-base font-normal leading-6">
                {projectDetail.description}
              </p>
            </div>
          </div>

          {/* Right Column - Project Info Card */}
          <div className="flex-1 flex flex-col gap-10 min-w-[462px]">
            {/* Info Card */}
            <div className="flex p-4 flex-col items-start gap-6 rounded-lg border border-[#E5E7EB] bg-[#F9FAFB]">
              <div className="flex flex-col items-start gap-2 self-stretch">
                {/* Header with Actions */}
                <div className="flex items-center gap-4 self-stretch">
                  <p className="flex-1 overflow-hidden text-[#9E9E9E] text-ellipsis line-clamp-1 font-poppins text-[10px] font-medium">
                    Posted : {projectDetail.postedDate}
                  </p>
                  <div className="flex gap-2">
                    {/* Share Button */}
                    <button className="flex w-6 h-6 p-1.5 justify-center items-center gap-2 rounded-full border border-[#F3F4F6] bg-white shadow-[0_1px_2px_0_rgba(16,24,40,0.05)] hover:bg-gray-50 transition-colors">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.295 6.755L7.71 8.745M7.705 3.255L4.295 5.245M10.5 2.5C10.5 3.32843 9.82843 4 9 4C8.17157 4 7.5 3.32843 7.5 2.5C7.5 1.67157 8.17157 1 9 1C9.82843 1 10.5 1.67157 10.5 2.5ZM4.5 6C4.5 6.82843 3.82843 7.5 3 7.5C2.17157 7.5 1.5 6.82843 1.5 6C1.5 5.17157 2.17157 4.5 3 4.5C3.82843 4.5 4.5 5.17157 4.5 6ZM10.5 9.5C10.5 10.3284 9.82843 11 9 11C8.17157 11 7.5 10.3284 7.5 9.5C7.5 8.67157 8.17157 8 9 8C9.82843 8 10.5 8.67157 10.5 9.5Z" stroke="#6B7280" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                    {/* Favorite Button */}
                    <button className="flex w-6 h-6 p-1.5 justify-center items-center gap-2 rounded-full border border-[#F3F4F6] bg-white shadow-[0_1px_2px_0_rgba(16,24,40,0.05)] hover:bg-gray-50 transition-colors">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.4201 2.30591C10.1647 2.05041 9.86147 1.84774 9.52774 1.70945C9.19401 1.57117 8.8363 1.5 8.47506 1.5C8.11382 1.5 7.75611 1.57117 7.42238 1.70945C7.08865 1.84774 6.78544 2.05041 6.53006 2.30591L6.00006 2.83591L5.47006 2.30591C4.95421 1.79007 4.25458 1.50027 3.52506 1.50027C2.79554 1.50027 2.09591 1.79007 1.58006 2.30591C1.06421 2.82176 0.774414 3.5214 0.774414 4.25091C0.774414 4.98043 1.06421 5.68007 1.58006 6.19591L2.11006 6.72591L6.00006 10.6159L9.89006 6.72591L10.4201 6.19591C10.6756 5.94054 10.8782 5.63732 11.0165 5.30359C11.1548 4.96986 11.226 4.61216 11.226 4.25091C11.226 3.88967 11.1548 3.53196 11.0165 3.19824C10.8782 2.86451 10.6756 2.56129 10.4201 2.30591Z" fill="#D1D5DB"/>
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Project Title */}
                <h2 className="self-stretch text-[#374151] font-poppins text-base font-medium leading-6">
                  {projectDetail.title}
                </h2>

                {/* Location */}
                <div className="flex items-center gap-0.5 self-stretch">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.25 5.83594C12.25 9.91927 7 13.4193 7 13.4193C7 13.4193 1.75 9.91927 1.75 5.83594C1.75 4.44355 2.30312 3.10819 3.28769 2.12363C4.27226 1.13906 5.60761 0.585937 7 0.585938C8.39239 0.585938 9.72774 1.13906 10.7123 2.12363C11.6969 3.10819 12.25 4.44355 12.25 5.83594Z" stroke="#7AAF7B" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 7.58594C7.9665 7.58594 8.75 6.80244 8.75 5.83594C8.75 4.86944 7.9665 4.08594 7 4.08594C6.0335 4.08594 5.25 4.86944 5.25 5.83594C5.25 6.80244 6.0335 7.58594 7 7.58594Z" stroke="#7AAF7B" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <p className="flex-1 overflow-hidden text-[#6B7280] text-ellipsis line-clamp-1 font-poppins text-sm font-medium leading-4">
                    {projectDetail.location}
                  </p>
                </div>
              </div>

              <div className="h-px self-stretch bg-[#E5E7EB]"></div>

              {/* Company Info */}
              <div className="flex flex-col items-start gap-6 self-stretch">
                <div className="flex items-center gap-4">
                  {/* Company Logo */}
                  <div className="w-[72px] h-[72px] rounded-full overflow-hidden">
                    <img
                      src={projectDetail.company.logo}
                      alt={projectDetail.company.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Company Details */}
                  <div className="flex flex-col justify-center items-start gap-2">
                    <h3 className="text-[#23262A] font-poppins text-lg font-semibold">
                      {projectDetail.company.name}
                    </h3>

                    {/* Rating */}
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        <span className="text-[#4B5563] font-poppins text-sm font-semibold leading-[22.4px] tracking-[-0.28px]">
                          {projectDetail.company.rating}
                        </span>
                        <div className="flex items-center gap-1">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.99967 11.848L12.1197 14.3346L11.0263 9.64797L14.6663 6.49464L9.87301 6.08797L7.99967 1.66797L6.12634 6.08797L1.33301 6.49464L4.97301 9.64797L3.87967 14.3346L7.99967 11.848Z" fill="#FFBE28"/>
                          </svg>
                        </div>
                      </div>
                      <span className="text-[#6B7280] font-poppins text-xs font-medium leading-[19.2px] tracking-[-0.24px]">
                        ({projectDetail.company.ratingsCount} Ratings)
                      </span>
                    </div>

                    {/* Action Links */}
                    <div className="flex items-start gap-4">
                      <button className="flex items-start gap-2 rounded-sm">
                        <span className="text-[#0C7A1F] font-poppins text-xs font-semibold leading-5 capitalize">
                          Rate this Business
                        </span>
                      </button>
                      <div className="w-px self-stretch bg-[#D9D9D9]"></div>
                      <button className="flex items-start gap-2 rounded-sm">
                        <span className="text-[#0C7A1F] font-poppins text-xs font-semibold leading-5 capitalize">
                          View all Listings
                        </span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Enquiry Button */}
                <button className="flex h-[34px] px-5 py-[7px] justify-center items-center gap-2 self-stretch rounded-sm border border-[#0C7A1F1A] bg-[#0C7A1F1A] hover:bg-[#0C7A1F2A] transition-colors">
                  <span className="text-[#0C7A1F] font-poppins text-xs font-semibold leading-5 capitalize">
                    Enquiry
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Other Projects */}
        <div className="mt-12 flex flex-col items-start gap-4">
          <h2 className="h-9 flex flex-col justify-center self-stretch text-[#374151] font-poppins text-2xl font-medium leading-9">
            Other Projects
          </h2>
          <div className="flex items-start gap-4 self-stretch">
            {relatedProjects.slice(0, 4).map((project, index) => (
              <ProjectCard
                key={project.id || index}
                project={project}
                id={project.id || String(index)}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default ProjectDetailPage;

