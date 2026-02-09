import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../dubai/Header';
import Hero from '../dubai/Hero';
import CategorySection, {
  ProjectsIcon,
  MachineriesIcon,
  ToolsIcon,
  TreesIcon,
  AgroChemicalsIcon,
  SeedsIcon,
  FarmsIcon,
  MoversIcon,
  ForumIcon
} from '../dubai/CategorySection';
import Footer from '../dubai/Footer';
import {
  headerData,
  heroData,
  categoriesData,
  footerData
} from '../dubai/data/index';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleListingClick = (listingId, categoryId) => {
    // Navigate to Dubai project detail page for projects section
    if (categoryId === 'projects') {
      navigate('/dubai/project-detail', { state: { projectId: listingId } });
    } else {
      navigate(`/listing/${listingId}`);
    }
  };

  // Icon mapping
  const iconMap = {
    'landscaper': <ProjectsIcon />,
    'machaineries': <MachineriesIcon />,
    'equipments': <ToolsIcon />,
    'nursery': <TreesIcon />,
    'Fertilizers': <AgroChemicalsIcon />,
    'Seeds': <SeedsIcon />,
    'Farms': <FarmsIcon />,
    'Transport': <MoversIcon />,
    'forum': <ForumIcon />
  };

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <Header {...headerData} />
      <Hero {...heroData} />

      {/* Categories Section */}
      <div className="flex flex-col items-center gap-12 py-12">
         {categoriesData.map((category) => (
          <CategorySection
            key={category.id}
            title={category.title}
            icon={iconMap[category.icon] || <ProjectsIcon />}
            items={category.items}
            viewAllLink={category.viewAllLink}
            categoryId={category.id}
            onListingClick={handleListingClick}
          />
        ))}
      </div>

      <Footer {...footerData} />
    </div>
  );
};

export default LandingPage;
