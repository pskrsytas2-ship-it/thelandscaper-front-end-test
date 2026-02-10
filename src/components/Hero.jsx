import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
//import Bg from '../assets/images/BG.svg';

const Hero = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEmirate, setSelectedEmirate] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const emirateSelectRef = useRef(null);
  const categorySelectRef = useRef(null);
  const emirateDropdownRef = useRef(null);
  const categoryDropdownRef = useRef(null);
  const [isEmirateOpen, setIsEmirateOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const navigate = useNavigate();

  const emirateOptions = [
    { value: 'all', label: 'All Emirates' },
    { value: 'abu-dhabi', label: 'Abu Dhabi' },
    { value: 'dubai', label: 'Dubai' },
    { value: 'sharjah', label: 'Sharjah' },
    { value: 'ajman', label: 'Ajman' },
    { value: 'fujairah', label: 'Fujairah' },
    { value: 'ras-al-khaimah', label: 'Ras Al Khaimah' },
    { value: 'umm-al-quwain', label: 'Umm Al Quwain' }
  ];

  const categoryOptions = [
    { value: 'all', label: 'All Categories' },
    { value: 'projects', label: 'Projects' },
    { value: 'machineries', label: 'Machineries' },
    { value: 'tools', label: 'Tools' },
    { value: 'trees', label: 'Trees' },
    { value: 'agro-chemicals', label: 'Agro Chemicals' },
    { value: 'seeds', label: 'Seeds' },
    { value: 'farms', label: 'Farms' },
    { value: 'movers', label: 'Movers' }
  ];

  const selectedEmirateLabel =
    emirateOptions.find((option) => option.value === selectedEmirate)?.label || 'All Emirates';
  const selectedCategoryLabel =
    categoryOptions.find((option) => option.value === selectedCategory)?.label || 'All Categories';

  const handleSearch = (e) => {
    e.preventDefault();
    if (selectedEmirate === 'dubai') {
      navigate('/landing');
    } else if (selectedEmirate === 'all') {
      navigate('/home');
    }
    if (onSearch) {
      onSearch(searchTerm, selectedCategory);
    }
  };

  const handleCategorySelect = (value) => {
    setSelectedCategory(value);
    setIsCategoryOpen(false);
    if (onSearch) {
      onSearch(searchTerm, value);
    }
  };

  const handleEmirateSelect = (value) => {
    setSelectedEmirate(value);
    setIsEmirateOpen(false);
  };

  const openEmirateDropdown = () => {
    setIsEmirateOpen((prev) => !prev);
    setIsCategoryOpen(false);
  };

  const openCategoryDropdown = () => {
    setIsCategoryOpen((prev) => !prev);
    setIsEmirateOpen(false);
  };

  const handleClearFilters = () => {
    setSearchTerm('');
    setSelectedEmirate('all');
    setSelectedCategory('all');
    navigate('/home');
    if (onSearch) {
      onSearch('', 'all');
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const emirateEl = emirateDropdownRef.current;
      const categoryEl = categoryDropdownRef.current;
      if (emirateEl && !emirateEl.contains(event.target)) {
        setIsEmirateOpen(false);
      }
      if (categoryEl && !categoryEl.contains(event.target)) {
        setIsCategoryOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <section className="flex flex-col justify-center items-center w-full relative overflow-visible">
      <div
        className="relative w-full"
        style={{
          padding: '20px 20px 0',
          margin: '16px auto 4px',
          maxWidth: '1140px',
          minHeight: '175px'
        }}
      >
        {/* Rounded Background Layer */}
        <div className="absolute inset-0 rounded-[28px] overflow-hidden bg-[#0C7A1F]" aria-hidden="true">
          <img
            src="https://res.cloudinary.com/drhwchhsp/image/upload/v1770686403/BG_ycfujy.png"
            alt=""
            className="w-full h-full object-cover absolute top-0 left-0"
            style={{
              opacity: 0.85,
              filter: 'contrast(1.04) brightness(1.24) saturate(1.04)'
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center items-center gap-6 w-full max-w-[1200px] mx-auto">
        {/* Hero Title */}
        <h1 className="text-white text-center font-['Poppins'] text-[22px] font-extrabold leading-none tracking-[-0.2px] drop-shadow-[0_1px_0_rgba(0,0,0,0.35)] mt-2">
          Create your dream landscaping today!
        </h1>

        {/* Search Bar Container */}
        <form
          onSubmit={handleSearch}
          className="flex items-center w-full max-w-[1000px] bg-white rounded-[12px] overflow-visible mt-2"
          style={{
            boxShadow: '0 18px 36px -16px rgba(16, 24, 40, 0.25)'
          }}
        >
          {/* All Emirates Dropdown */}
          <div
            className="relative flex items-center gap-3"
            ref={emirateDropdownRef}
            style={{
            display: 'flex',
            height: '48px',
            padding: '10px 16px',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '12px',
            borderRadius: '8px 0 0 8px',
            border: '1px solid rgba(12, 122, 31, 0.15)',
            background: '#FFF',
            width: '200px'
          }}
          >
            <div className="flex items-center gap-2 w-full ">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <g clipPath="url(#clip0_emirates)">
                  <path d="M14 6.66797C14 11.3346 8 15.3346 8 15.3346C8 15.3346 2 11.3346 2 6.66797C2 5.07667 2.63214 3.55055 3.75736 2.42533C4.88258 1.30011 6.4087 0.667969 8 0.667969C9.5913 0.667969 11.1174 1.30011 12.2426 2.42533C13.3679 3.55055 14 5.07667 14 6.66797Z" stroke="#0C7A1F" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 8.66797C9.10457 8.66797 10 7.77254 10 6.66797C10 5.5634 9.10457 4.66797 8 4.66797C6.89543 4.66797 6 5.5634 6 6.66797C6 7.77254 6.89543 8.66797 8 8.66797Z" stroke="#0C7A1F" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                <defs>
                  <clipPath id="clip0_emirates">
                    <rect width="16" height="16" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
              <button
                type="button"
                onClick={openEmirateDropdown}
                className="w-full text-left bg-transparent text-[#0F172A] font-poppins font-medium focus:outline-none border-0 cursor-pointer"
                style={{
                  fontSize: '16px',
                  lineHeight: '24px'
                }}
                aria-haspopup="listbox"
                aria-expanded={isEmirateOpen}
                aria-label="Select emirate"
              >
                {selectedEmirateLabel}
              </button>
            </div>
            <button
              type="button"
              onMouseDown={openEmirateDropdown}
              onClick={openEmirateDropdown}
              className="flex items-center justify-center"
              aria-label="Open emirates list"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M4 6L8 10L12 6" stroke="#0F172A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            {isEmirateOpen && (
              <div
                className="absolute left-0 top-full mt-0 w-full rounded-[10px] border border-[#E5E7EB] shadow-[0_16px_32px_-12px_rgba(15,23,42,0.35)] z-20 overflow-hidden"
                style={{ background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(6px)' }}
                role="listbox"
              >
                <div className="max-h-[260px] overflow-y-auto py-2">
                  {emirateOptions.map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => handleEmirateSelect(option.value)}
                      className="w-full px-4 py-2.5 flex items-center justify-between text-left hover:bg-white/70 transition-colors cursor-pointer"
                      role="option"
                      aria-selected={selectedEmirate === option.value}
                    >
                      <span className="text-[#0F172A] text-[15px] font-semibold">{option.label}</span>
                      {selectedEmirate === option.value && (
                        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                          <path d="M4.5 10.5L8.5 14.5L15.5 6.5" stroke="#15803D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* All Categories Dropdown */}
          <div
            className="relative flex items-center gap-3"
            ref={categoryDropdownRef}
            style={{
            display: 'flex',
            height: '48px',
            padding: '10px 16px',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '12px',
            borderTop: '1px solid rgba(12, 122, 31, 0.15)',
            borderRight: '1px solid rgba(12, 122, 31, 0.15)',
            borderBottom: '1px solid rgba(12, 122, 31, 0.15)',
            background: '#FFF',
            width: '200px'
          }}
          >
            <div className="flex items-center gap-2 w-full">
              <button
                type="button"
                onClick={openCategoryDropdown}
                className="w-full text-left bg-transparent text-[#0F172A] font-poppins font-medium focus:outline-none border-0 cursor-pointer"
                style={{
                  fontSize: '16px',
                  lineHeight: '24px'
                }}
                aria-haspopup="listbox"
                aria-expanded={isCategoryOpen}
                aria-label="Select category"
              >
                {selectedCategoryLabel}
              </button>
            </div>
            <button
              type="button"
              onMouseDown={openCategoryDropdown}
              onClick={openCategoryDropdown}
              className="flex items-center justify-center"
              aria-label="Open categories list"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M4 6L8 10L12 6" stroke="#0F172A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            {isCategoryOpen && (
              <div
                className="absolute left-0 top-full mt-0 w-full rounded-[10px] border border-[#E5E7EB] shadow-[0_16px_32px_-12px_rgba(15,23,42,0.35)] z-20 overflow-hidden"
                style={{ background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(6px)' }}
                role="listbox"
              >
                <div className="max-h-[260px] overflow-y-auto py-2">
                  {categoryOptions.map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => handleCategorySelect(option.value)}
                      className="w-full px-4 py-2.5 flex items-center justify-between text-left hover:bg-white/70 transition-colors cursor-pointer"
                      role="option"
                      aria-selected={selectedCategory === option.value}
                    >
                      <span className="text-[#0F172A] text-[15px] font-semibold">{option.label}</span>
                      {selectedCategory === option.value && (
                        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                          <path d="M4.5 10.5L8.5 14.5L15.5 6.5" stroke="#15803D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Search Input */}
          <div style={{
            display: 'flex',
            height: '48px',
            padding: '19px 16px',
            alignItems: 'center',
            gap: '12px',
            flex: '1 0 0',
            borderTop: '1px solid rgba(12, 122, 31, 0.15)',
            borderBottom: '1px solid rgba(12, 122, 31, 0.15)',
            background: '#FFF'
          }}>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search for anything"
              className="w-full bg-transparent text-[#9CA3AF] font-poppins font-normal focus:outline-none border-0 cursor-pointer"
              style={{
                fontSize: '16px',
                lineHeight: '24px'
              }}
              aria-label="Search listings"
            />
          </div>

          {/* Search Button */}
          <button
            type="submit"
            className="flex items-center justify-center gap-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#0C7A1F] focus:ring-offset-2 transition-all flex-shrink-0"
            style={{
              width: '128px',
              padding: '0 40px',
              height: '48px',
              borderRadius: '0 8px 8px 0',
              border: '1px solid rgba(12, 122, 31, 0.15)',
              background: '#D2E2D5'
            }}
            aria-label="Search"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                <path d="M14 14L11.1 11.1M12.6667 7.33333C12.6667 10.2789 10.2789 12.6667 7.33333 12.6667C4.38781 12.6667 2 10.2789 2 7.33333C2 4.38781 4.38781 2 7.33333 2C10.2789 2 12.6667 4.38781 12.6667 7.33333Z" stroke="#0C7A1F" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            <span className="font-poppins font-semibold text-[#0C7A1F]" style={{
              fontSize: '16px',
              lineHeight: '24px',
              letterSpacing: '0.48px',
              textTransform: 'capitalize'
            }}>Search</span>
          </button>

          {/* Clear Button - only show when filters are active */}
          {(searchTerm || selectedCategory !== 'all' || selectedEmirate !== 'all') && (
            <button
              type="button"
              onClick={handleClearFilters}
              className="hidden"
              aria-label="Clear filters"
            >
              <svg
                className="w-5 h-5 text-[#6B7280]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              <span className="text-sm font-medium text-[#374151] font-poppins">Clear</span>
            </button>
          )}
        </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;
