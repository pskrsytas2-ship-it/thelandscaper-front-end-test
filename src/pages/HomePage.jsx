import { useState, useMemo } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
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
} from '../components/CategorySection';
import Footer from '../components/Footer';
import {
  popularProjects,
  machineriesForRent,
  machineriesForSale,
  toolsForSale,
  treesForSale,
  agroChemicalsForSale,
  seedsForSale,
  farmsForSale,
  farmsForRent,
  moversForRent,
  trendingForumPosts,
} from '../data/sampleData';

function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Filtered listings with useMemo for performance
  const filteredProjects = useMemo(() => {
    if (!searchTerm) return popularProjects;
    return popularProjects.filter(item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const filteredMachineriesRent = useMemo(() => {
    if (!searchTerm) return machineriesForRent;
    return machineriesForRent.filter(item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const filteredMachineriesSale = useMemo(() => {
    if (!searchTerm) return machineriesForSale;
    return machineriesForSale.filter(item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const filteredTools = useMemo(() => {
    if (!searchTerm) return toolsForSale;
    return toolsForSale.filter(item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const filteredTrees = useMemo(() => {
    if (!searchTerm) return treesForSale;
    return treesForSale.filter(item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const filteredAgroChemicals = useMemo(() => {
    if (!searchTerm) return agroChemicalsForSale;
    return agroChemicalsForSale.filter(item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const filteredSeeds = useMemo(() => {
    if (!searchTerm) return seedsForSale;
    return seedsForSale.filter(item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const filteredFarmsSale = useMemo(() => {
    if (!searchTerm) return farmsForSale;
    return farmsForSale.filter(item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const filteredFarmsRent = useMemo(() => {
    if (!searchTerm) return farmsForRent;
    return farmsForRent.filter(item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const filteredMovers = useMemo(() => {
    if (!searchTerm) return moversForRent;
    return moversForRent.filter(item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const filteredForumPosts = useMemo(() => {
    if (!searchTerm) return trendingForumPosts;
    return trendingForumPosts.filter(item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  // Handle search
  const handleSearch = (term, category) => {
    setSearchTerm(term);
    setSelectedCategory(category);
  };

  // Determine which categories to show
  const shouldShowCategory = (categoryKey) => {
    return selectedCategory === 'all' || selectedCategory === categoryKey;
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero onSearch={handleSearch} />

      <main className="flex flex-col items-center gap-12 py-10">
        {/* Filter Summary */}
        {(searchTerm || selectedCategory !== 'all') && (
          <div className="w-full max-w-[1200px] px-6">
            <div className="flex items-center gap-2 py-4 px-6 bg-[#F0FDF4] border border-[#86EFAC] rounded-lg">
              <svg className="w-5 h-5 text-[#0C7A1F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-sm font-medium text-[#0C7A1F]">
                Showing filtered results
                {searchTerm && ` for "${searchTerm}"`}
                {selectedCategory !== 'all' && ` in ${selectedCategory.replace('-', ' ')}`}
              </p>
            </div>
          </div>
        )}

        {shouldShowCategory('projects') && filteredProjects.length > 0 && (
          <CategorySection
            icon={<ProjectsIcon />}
            title="Popular Projects"
            listings={filteredProjects}
          />
        )}

        {shouldShowCategory('machineries') && filteredMachineriesRent.length > 0 && (
          <CategorySection
            icon={<MachineriesIcon />}
            title="Popular Machineries for Rent"
            listings={filteredMachineriesRent}
          />
        )}

        {shouldShowCategory('machineries') && filteredMachineriesSale.length > 0 && (
          <CategorySection
            icon={<MachineriesIcon />}
            title="Popular Machineries for Sale"
            listings={filteredMachineriesSale}
          />
        )}

        {shouldShowCategory('tools') && filteredTools.length > 0 && (
          <CategorySection
            icon={<ToolsIcon />}
            title="Popular Tools for Sale"
            listings={filteredTools}
          />
        )}

        {shouldShowCategory('trees') && filteredTrees.length > 0 && (
          <CategorySection
            icon={<TreesIcon />}
            title="Popular Trees for Sale"
            listings={filteredTrees}
          />
        )}

        {shouldShowCategory('agro-chemicals') && filteredAgroChemicals.length > 0 && (
          <CategorySection
            icon={<AgroChemicalsIcon />}
            title="Popular Agro Chemicals for Sale"
            listings={filteredAgroChemicals}
          />
        )}

        {shouldShowCategory('seeds') && filteredSeeds.length > 0 && (
          <CategorySection
            icon={<SeedsIcon />}
            title="Popular Seeds for Sale"
            listings={filteredSeeds}
          />
        )}

        {shouldShowCategory('farms') && filteredFarmsSale.length > 0 && (
          <CategorySection
            icon={<FarmsIcon />}
            title="Popular Farms for Sale"
            listings={filteredFarmsSale}
          />
        )}

        {shouldShowCategory('farms') && filteredFarmsRent.length > 0 && (
          <CategorySection
            icon={<FarmsIcon />}
            title="Popular Farms for Rent"
            listings={filteredFarmsRent}
          />
        )}

        {shouldShowCategory('movers') && filteredMovers.length > 0 && (
          <CategorySection
            icon={<MoversIcon />}
            title="Nearest Movers for Rent"
            listings={filteredMovers}
          />
        )}

        {shouldShowCategory('forum') && filteredForumPosts.length > 0 && (
          <CategorySection
            icon={<ForumIcon />}
            title="Trending Posts in Forum"
            listings={filteredForumPosts}
          />
        )}

        {/* No Results Message */}
        {(searchTerm || selectedCategory !== 'all') &&
         filteredProjects.length === 0 &&
         filteredMachineriesRent.length === 0 &&
         filteredMachineriesSale.length === 0 &&
         filteredTools.length === 0 &&
         filteredTrees.length === 0 &&
         filteredAgroChemicals.length === 0 &&
         filteredSeeds.length === 0 &&
         filteredFarmsSale.length === 0 &&
         filteredFarmsRent.length === 0 &&
         filteredMovers.length === 0 &&
         filteredForumPosts.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 px-6">
            <svg className="w-20 h-20 text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No results found</h3>
            <p className="text-gray-500 text-center max-w-md">
              We couldn't find any listings matching your search criteria. Try adjusting your filters or search term.
            </p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default HomePage;
