import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../dubai/Header';
import Footer from '../dubai/Footer';
import Breadcrumb from '../dubai/Breadcrumb';
import ImageGallery from '../dubai/ImageGallery';
import ListingDetails from '../dubai/ListingDetails';
import CompanyInfo from '../dubai/CompanyInfo';
import {
  headerData,
  footerData,
  categoriesData,
  companyInfoData
} from '../dubai/data/index';

const DetailsPage = () => {
  const { listingId } = useParams();
  const navigate = useNavigate();
  const [listingData, setListingData] = useState(null);
  const [categoryName, setCategoryName] = useState('');

  useEffect(() => {
    // Find the listing from all categories
    let foundListing = null;
    let foundCategory = null;

    for (const category of categoriesData) {
      const listing = category.items.find(item => item.id === listingId);
      if (listing) {
        foundListing = listing;
        foundCategory = category.title;
        break;
      }
    }

    if (foundListing) {
      setListingData(foundListing);
      setCategoryName(foundCategory);
    } else {
      // Listing not found, redirect to home
      navigate('/');
    }
  }, [listingId, navigate]);

  if (!listingData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-gray-500">جاري التحميل...</div>
      </div>
    );
  }

  // Prepare breadcrumb data
  const breadcrumbData = {
    items: [
      { label: 'الرئيسية', link: '/', active: false },
      { label: categoryName, link: '/', active: false },
      { label: listingData.title, link: '#', active: true }
    ]
  };

  // Prepare image gallery data
  const imageGalleryData = {
    mainImage: listingData.image,
    thumbnails: [
      { id: 1, src: listingData.image, alt: listingData.title },
      { id: 2, src: listingData.image, alt: listingData.title },
      { id: 3, src: listingData.image, alt: listingData.title },
      { id: 4, src: listingData.image, alt: listingData.title }
    ]
  };

  // Prepare listing details data
  const detailsData = {
    title: listingData.title,
    specifications: [
      { label: 'النوع', value: listingData.subtitle },
      { label: 'الموقع', value: listingData.location },
      { label: 'السعر', value: `${listingData.price} ${listingData.priceUnit}` },
      { label: 'الحالة', value: 'جديد' },
      { label: 'التوصيل', value: 'متوفر' }
    ],
    description: `${listingData.title} - ${listingData.subtitle}\n\nمنتج عالي الجودة متوفر في ${listingData.location}. يتميز بمواصفات ممتازة ومناسب لجميع الاحتياجات.\n\nللمزيد من المعلومات، يرجى الاتصال بالبائع.`
  };

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <Header {...headerData} />
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Breadcrumb items={breadcrumbData.items} />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Listing Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image Gallery */}
            <div className="bg-white rounded-lg shadow-sm p-4">
              <ImageGallery
                mainImage={imageGalleryData.mainImage}
                thumbnails={imageGalleryData.thumbnails}
              />
            </div>

            {/* Listing Details */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <ListingDetails
                title={detailsData.title}
                specifications={detailsData.specifications}
                description={detailsData.description}
              />
            </div>
          </div>

          {/* Right Column - Company Info */}
          <div className="lg:col-span-1">
            <div className="sticky top-6">
              <CompanyInfo {...companyInfoData} />
            </div>
          </div>
        </div>
      </div>

      <Footer {...footerData} />
    </div>
  );
};

export default DetailsPage;



