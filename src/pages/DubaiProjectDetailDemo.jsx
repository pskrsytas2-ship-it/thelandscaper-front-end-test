import React from 'react';
import { useLocation } from 'react-router-dom';
import ProjectDetailPage from '../dubai/ProjectDetailPage';
import { projectsDetailData, projectDetailPageData } from '../dubai/data/detailsPageData';

function DubaiProjectDetailDemo() {
  const location = useLocation();
  const projectId = location.state?.projectId || 'project-1';

  // Get the specific project data or fallback to default
  const currentProjectData = projectsDetailData[projectId] || projectDetailPageData;

  return (
    <div className="min-h-screen bg-white flex justify-center">
      <ProjectDetailPage
        breadcrumbItems={currentProjectData.breadcrumb.items}
        imageGalleryData={currentProjectData.imageGallery}
        companyData={currentProjectData.company}
        projectDetails={currentProjectData.projectDetails}
        projectId={projectId}
      />
    </div>
  );
}

export default DubaiProjectDetailDemo;
