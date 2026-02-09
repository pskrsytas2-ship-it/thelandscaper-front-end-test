import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Breadcrumb from '../components/Breadcrumb';
import Footer from '../components/Footer';
import ListingCard from '../components/ListingCard';
import {
  machineriesForRent,
  machineriesForSale,
  toolsForSale,
  treesForSale,
  agroChemicalsForSale,
} from '../data/sampleData';

function ItemDetailPage({ category }) {
  const { id } = useParams();

  // Get item based on category
  let item = null;
  let categoryName = '';
  let allItems = [];

  if (category === 'machinery-rent') {
    allItems = machineriesForRent;
    categoryName = 'Machineries for Rent';
  } else if (category === 'machinery-sale') {
    allItems = machineriesForSale;
    categoryName = 'Machineries for Sale';
  } else if (category === 'tool') {
    allItems = toolsForSale;
    categoryName = 'Tools for Sale';
  } else if (category === 'tree') {
    allItems = treesForSale;
    categoryName = 'Trees for Sale';
  } else if (category === 'agro') {
    allItems = agroChemicalsForSale;
    categoryName = 'Agro Chemicals for Sale';
  }

  item = allItems.find(i => i.id === id);

  // Fallback if item not found
  if (!item) {
    item = allItems[0] || {
      title: 'Item not found',
      location: '',
      price: '',
      image: '',
    };
  }

  // Get related items (exclude current item)
  const relatedItems = allItems
    .filter(i => i.id !== id)
    .slice(0, 4);

  const breadcrumbItems = [
    { label: 'Home', href: '/', icon: 'home' },
    { label: categoryName, href: '/' },
    { label: item.title, current: true },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="w-full max-w-[1200px] mx-auto px-6 py-8">
        {/* Breadcrumb */}
        <Breadcrumb items={breadcrumbItems} />

        {/* Content Section */}
        <div className="mt-6 flex gap-6">
          {/* Left Column - Image & Description */}
          <div className="flex-[2] flex flex-col gap-8">
            {/* Main Image */}
            <div className="w-full h-[432px]">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Description Section */}
            <div className="flex flex-col items-start gap-4">
              <h2 className="text-[#374151] font-poppins text-2xl font-medium leading-9">
                Description
              </h2>
              <p className="self-stretch text-[#2B2D2E] font-poppins text-base font-normal leading-6">
                This {item.title.toLowerCase()} is available in {item.location}.
                {item.price && ` Price: ${item.price}${item.priceSuffix || ''}`}.
                Contact us for more information about this listing.
              </p>
            </div>
          </div>

          {/* Right Column - Info Card */}
          <div className="flex-1 flex flex-col gap-10 min-w-[462px]">
            {/* Info Card */}
            <div className="flex p-4 flex-col items-start gap-6 rounded-lg border border-[#E5E7EB] bg-[#F9FAFB]">
              <div className="flex flex-col items-start gap-2 self-stretch">
                {/* Title */}
                <h2 className="self-stretch text-[#374151] font-poppins text-base font-medium leading-6">
                  {item.title}
                </h2>

                {/* Location */}
                <div className="flex items-center gap-0.5 self-stretch">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.25 5.83594C12.25 9.91927 7 13.4193 7 13.4193C7 13.4193 1.75 9.91927 1.75 5.83594C1.75 4.44355 2.30312 3.10819 3.28769 2.12363C4.27226 1.13906 5.60761 0.585937 7 0.585938C8.39239 0.585938 9.72774 1.13906 10.7123 2.12363C11.6969 3.10819 12.25 4.44355 12.25 5.83594Z" stroke="#7AAF7B" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 7.58594C7.9665 7.58594 8.75 6.80244 8.75 5.83594C8.75 4.86944 7.9665 4.08594 7 4.08594C6.0335 4.08594 5.25 4.86944 5.25 5.83594C5.25 6.80244 6.0335 7.58594 7 7.58594Z" stroke="#7AAF7B" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <p className="flex-1 overflow-hidden text-[#6B7280] text-ellipsis line-clamp-1 font-poppins text-sm font-medium leading-4">
                    {item.location}
                  </p>
                </div>

                {/* Price */}
                {item.price && (
                  <div className="flex items-center gap-2 self-stretch mt-4">
                    <span className="text-[#0C7A1F] font-poppins text-2xl font-semibold">
                      {item.price}
                    </span>
                    {item.priceSuffix && (
                      <span className="text-[#6B7280] font-poppins text-sm font-medium">
                        {item.priceSuffix}
                      </span>
                    )}
                  </div>
                )}
              </div>

              <div className="h-px self-stretch bg-[#E5E7EB]"></div>

              {/* Contact Button */}
              <button className="flex h-[34px] px-5 py-[7px] justify-center items-center gap-2 self-stretch rounded-sm border border-[#0C7A1F1A] bg-[#0C7A1F1A] hover:bg-[#0C7A1F2A] transition-colors">
                <span className="text-[#0C7A1F] font-poppins text-xs font-semibold leading-5 capitalize">
                  Contact Seller
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Related Items Section */}
        {relatedItems.length > 0 && (
          <div className="mt-12 flex flex-col items-start gap-4">
            <h2 className="text-[#374151] font-poppins text-2xl font-medium leading-9">
              Related Items
            </h2>
            <div className="flex items-start gap-4 self-stretch flex-wrap">
              {relatedItems.map((relatedItem) => (
                <ListingCard
                  key={relatedItem.id}
                  {...relatedItem}
                />
              ))}
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default ItemDetailPage;
