import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Breadcrumb from './Breadcrumb';
import ImageGallery from './ImageGallery';
import CompanyInfo from './CompanyInfo';
import ListingDetails from './ListingDetails';
import { footerData as defaultFooterData } from './data/landingPageData';

const ProjectDetailPage = ({
  breadcrumbItems,
  imageGalleryData,
  companyData,
  projectDetails,
  footerData
}) => {
  // Use provided footerData or fall back to default
  const footer = footerData || defaultFooterData;
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
