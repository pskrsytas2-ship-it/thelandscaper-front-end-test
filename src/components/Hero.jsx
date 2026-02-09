import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
//import Bg from '../assets/images/BG.svg';

const Hero = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEmirate, setSelectedEmirate] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const emirateSelectRef = useRef(null);
  const categorySelectRef = useRef(null);
  const navigate = useNavigate();

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

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    // Trigger immediate search when category changes
    if (onSearch) {
      onSearch(searchTerm, category);
    }
  };

  const handleEmirateChange = (e) => {
    const emirate = e.target.value;
    setSelectedEmirate(emirate);
  };

  const openEmirateDropdown = () => {
    emirateSelectRef.current?.focus();
    emirateSelectRef.current?.click();
  };

  const openCategoryDropdown = () => {
    categorySelectRef.current?.focus();
    categorySelectRef.current?.click();
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

  return (
    <section
      className="flex flex-col justify-center items-center h-[200px] w-full bg-[#0C7A1F] relative overflow-hidden"
      style={{ padding: '32px 120px' }}
    >
      {/* Decorative Background Pattern - All the plant/landscape elements */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none" aria-hidden="true">
        {/* Background frame image with all decorative elements */}
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2Fcdb7c934efe041d78ab29729729dc83e%2F583721f8f25842378016b409568ed9fe"
          alt=""
          className="w-full h-full object-cover absolute top-0 left-0"
          style={{
            opacity: 0.8,
            filter: 'contrast(1.05) brightness(1.08) saturate(1.02)'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center gap-4 w-full max-w-[1200px]">
        {/* Hero Title */}
        <h1 className="text-white text-center font-['Open_Sans'] text-[30px] font-extrabold leading-normal">
          Create your dream landscaping today!
        </h1>

        {/* Search Bar Container */}
        <form
          onSubmit={handleSearch}
          className="flex items-center w-full max-w-[1200px] bg-transparent overflow-hidden"
          style={{
            boxShadow: '0 32px 64px -12px rgba(16, 24, 40, 0.14)',
            padding: '0 24px'
          }}
        >
          {/* All Emirates Dropdown */}
          <div className="relative flex items-center gap-3" style={{
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
          }}>
            <div className="flex items-center gap-2 w-full">
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
              <select
                ref={emirateSelectRef}
                value={selectedEmirate}
                onChange={handleEmirateChange}
                className="w-full appearance-none bg-transparent text-[#4B5563] font-poppins font-medium cursor-pointer focus:outline-none border-0"
                style={{
                  fontSize: '16px',
                  lineHeight: '24px',
                  letterSpacing: '0.48px'
                }}
                aria-label="Select emirate"
              >
                <option value="all">All Emirates</option>
                <option value="abu-dhabi">Abu Dhabi</option>
                <option value="dubai">Dubai</option>
                <option value="sharjah">Sharjah</option>
                <option value="ajman">Ajman</option>
                <option value="fujairah">Fujairah</option>
                <option value="ras-al-khaimah">Ras Al Khaimah</option>
                <option value="umm-al-quwain">Umm Al Quwain</option>
              </select>
            </div>
            <button
              type="button"
              onMouseDown={openEmirateDropdown}
              onClick={openEmirateDropdown}
              className="flex items-center justify-center"
              aria-label="Open emirates list"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M4 6L8 10L12 6" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* All Categories Dropdown */}
          <div className="relative flex items-center gap-3" style={{
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
          }}>
            <div className="flex items-center gap-2 w-full">
              <select
                ref={categorySelectRef}
                value={selectedCategory}
                onChange={handleCategoryChange}
                className="w-full appearance-none bg-transparent text-[#4B5563] font-poppins font-medium cursor-pointer focus:outline-none border-0"
                style={{
                  fontSize: '16px',
                  lineHeight: '24px',
                  letterSpacing: '0.48px'
                }}
                aria-label="Select category"
              >
                <option value="all">All Categories</option>
                <option value="projects">Projects</option>
                <option value="machineries">Machineries</option>
                <option value="tools">Tools</option>
                <option value="trees">Trees</option>
                <option value="agro-chemicals">Agro Chemicals</option>
                <option value="seeds">Seeds</option>
                <option value="farms">Farms</option>
                <option value="movers">Movers</option>
              </select>
            </div>
            <button
              type="button"
              onMouseDown={openCategoryDropdown}
              onClick={openCategoryDropdown}
              className="flex items-center justify-center"
              aria-label="Open categories list"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M4 6L8 10L12 6" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
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
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
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
    </section>
  );
};

export default Hero;
