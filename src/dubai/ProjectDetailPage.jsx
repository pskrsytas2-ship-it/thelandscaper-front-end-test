import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Breadcrumb from './Breadcrumb';
import ImageGallery from './ImageGallery';
import CompanyInfo from './CompanyInfo';
import ListingDetails from './ListingDetails';
import ListingCard from './ListingCard';
import { categoriesData, footerData as defaultFooterData } from './data/landingPageData';

const ProjectDetailPage = ({
  breadcrumbItems,
  imageGalleryData,
  companyData,
  projectDetails,
  footerData,
  projectId
}) => {
  // Use provided footerData or fall back to default
  const footer = footerData || defaultFooterData;
  const projectsCategory = categoriesData.find((category) => category.id === 'projects');
  const relatedProjects = (projectsCategory?.items || [])
    .filter((item) => (projectId ? item.id !== projectId : true))
    .slice(0, 5);
  return (
    <div className="min-h-screen bg-white flex flex-col items-center">
      {/* Header */}
      <Header showBorder={false} />

      {/* Main Content */}
      <div className="flex w-[1200px] py-8 px-6 flex-col items-start gap-8">
        {/* Breadcrumb */}
        <div className="flex flex-col items-start gap-4 self-stretch">
          <Breadcrumb items={breadcrumbItems} />

          {/* Image Gallery */}
          <div className="flex flex-col items-start gap-6 self-stretch">
            <ImageGallery
              mainImage={imageGalleryData.mainImage}
              thumbnails={imageGalleryData.thumbnails}
              imageCount={imageGalleryData.imageCount}
            />
          </div>
        </div>

        {/* Content Section - Two Columns */}
        <div className="flex items-start gap-6 self-stretch">
          {/* Left Column - Company Info Card (462px) */}
          <CompanyInfo
            publishedDate={companyData.publishedDate}
            projectTitle={companyData.projectTitle}
            companyName={companyData.companyName}
            companyLogo={companyData.companyLogo}
            rating={companyData.rating}
            reviewCount={companyData.reviewCount}
          />

          {/* Right Column - Specifications (666px) */}
          <ListingDetails
            title={projectDetails.title}
            specifications={projectDetails.specifications}
            description={projectDetails.description}
          />
        </div>

        {relatedProjects.length > 0 && (
          <div className="flex flex-col items-end gap-4 self-stretch" dir="rtl">
            <h3 className="text-[#111827] text-left font-['Dubai'] text-sm font-bold leading-5 pl-2 self-start">
              قوائم أخرى
            </h3>
            <div className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              {relatedProjects.map((item) => (
                <ListingCard
                  key={item.id}
                  {...item}
                  titleClassName="pr-2"
                  subtitleClassName="pr-2"
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <Footer
       logo={footer.logo}
      description={footer.description}
      copyright={footer.copyright}
      sections={footer.sections}
       />
    </div>
  );
};

export default ProjectDetailPage;
