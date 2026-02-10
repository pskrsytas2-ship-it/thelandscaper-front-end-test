import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Breadcrumb from './Breadcrumb';
import ListingCard from './ListingCard';
import { categoriesData, footerData as defaultFooterData } from './data/landingPageData';

const categoryIdByRoute = {
  'machineries-rent': 'machineries-rent',
  'machineries-sale': 'machineries-sale',
  tools: 'tools',
  trees: 'trees',
  fertilizers: 'fertilizers',
  'agro-chemicals': 'fertilizers',
  seeds: 'seeds',
  farms: 'farms',
  movers: 'movers',
};

const ItemDetailPage = ({ footerData }) => {
  const { category, id } = useParams();
  const navigate = useNavigate();

  const categoryId = categoryIdByRoute[category] || category;
  const categoryData =
    categoriesData.find((entry) => entry.id === categoryId) || categoriesData[0];

  const item =
    categoryData?.items?.find((entry) => entry.id === id) ||
    categoryData?.items?.[0] || {
      title: 'Item not found',
      location: '',
      price: '',
      image: '',
    };

  const relatedItems = (categoryData?.items || [])
    .filter((entry) => entry.id !== item.id)
    .slice(0, 4);

  const breadcrumbItems = [
    { label: 'الرئيسية', active: false },
    { label: categoryData?.title || 'العناصر', active: false },
    { label: item.title, active: true },
  ];

  const footer = footerData || defaultFooterData;

  const handleRelatedClick = (relatedId) => {
    navigate(`/dubai/items/${categoryId}/${relatedId}`);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center">
      <Header showBorder={false} />

      <div className="flex w-[1200px] py-8 px-6 flex-col items-start gap-8" dir="rtl">
        <div className="flex flex-col items-start gap-4 self-stretch">
          <Breadcrumb items={breadcrumbItems} />
        </div>

        <div className="flex items-start gap-6 self-stretch" dir="ltr">
          <div className="flex-[2] flex flex-col gap-8">
            <div className="w-full h-[432px]">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-6 min-w-[462px]" dir="rtl">
            <div className="flex p-4 flex-col items-start gap-6 rounded-lg border border-[#E5E7EB] bg-[#F9FAFB]">
              <div className="flex flex-col items-start gap-2 self-stretch">
                <h2 className="self-stretch text-[#374151] font-['Dubai'] text-base font-medium leading-6 text-right">
                  {item.title}
                </h2>

                <div className="flex items-center gap-1 self-stretch">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.25 5.83594C12.25 9.91927 7 13.4193 7 13.4193C7 13.4193 1.75 9.91927 1.75 5.83594C1.75 4.44355 2.30312 3.10819 3.28769 2.12363C4.27226 1.13906 5.60761 0.585937 7 0.585938C8.39239 0.585938 9.72774 1.13906 10.7123 2.12363C11.6969 3.10819 12.25 4.44355 12.25 5.83594Z" stroke="#7AAF7B" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 7.58594C7.9665 7.58594 8.75 6.80244 8.75 5.83594C8.75 4.86944 7.9665 4.08594 7 4.08594C6.0335 4.08594 5.25 4.86944 5.25 5.83594C5.25 6.80244 6.0335 7.58594 7 7.58594Z" stroke="#7AAF7B" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <p className="flex-1 overflow-hidden text-[#6B7280] text-ellipsis line-clamp-1 font-['Dubai'] text-sm font-medium text-right">
                    {item.location || ''}
                  </p>
                </div>

                {item.price && (
                  <div className="flex items-center gap-2 self-stretch mt-4">
                    <span className="text-[#0C7A1F] font-['Dubai'] text-2xl font-semibold">
                      AED {item.price}
                    </span>
                    {item.priceUnit && (
                      <span className="text-[#6B7280] font-['Dubai'] text-sm font-medium">
                        {item.priceUnit}
                      </span>
                    )}
                  </div>
                )}
              </div>

              <div className="h-px self-stretch bg-[#E5E7EB]"></div>

              <button className="flex h-[34px] px-5 py-[7px] justify-center items-center gap-2 self-stretch rounded-sm border border-[#0C7A1F1A] bg-[#0C7A1F1A] hover:bg-[#0C7A1F2A] transition-colors">
                <span className="text-[#0C7A1F] font-['Dubai'] text-xs font-semibold leading-5 capitalize">
                  تواصل مع البائع
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start gap-3 self-stretch" dir="ltr">
          <h2 className="text-[#374151] font-['Dubai'] text-2xl font-medium leading-9 text-left">
            الوصف
          </h2>
          <p className="self-stretch text-[#2B2D2E] font-['Dubai'] text-base font-normal leading-6 text-left">
            هذا العنصر متوفر في {item.location || 'منطقتك'}.
            {item.price && ` السعر: AED ${item.price}${item.priceUnit || ''}.`}
            تواصل معنا لمزيد من المعلومات حول هذا الإعلان.
          </p>
        </div>

        {relatedItems.length > 0 && (
          <div className="mt-6 flex flex-col items-end gap-4 self-stretch">
            <h2 className="text-[#374151] font-['Dubai'] text-2xl font-medium leading-9 text-right">
              عناصر ذات صلة
            </h2>
            <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {relatedItems.map((relatedItem) => (
                <ListingCard
                  key={relatedItem.id}
                  {...relatedItem}
                  onClick={handleRelatedClick}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer
        logo={footer.logo}
        description={footer.description}
        copyright={footer.copyright}
        sections={footer.sections}
      />
    </div>
  );
};

export default ItemDetailPage;
