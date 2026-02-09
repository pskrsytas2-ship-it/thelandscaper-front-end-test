import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import ItemDetailPage from './pages/ItemDetailPage';
import LandingPage from './pages/LandingPage';
import DetailsPage from './pages/DetailsPage';
import DubaiProjectDetailDemo from './pages/DubaiProjectDetailDemo';

function App() {
  return (
    <Routes>
      {/* Default Route */}
      <Route path="/" element={<HomePage />} />

      {/* Figma Design Routes */}
      <Route path="/landing" element={<LandingPage />} />
      <Route path="/listing/:listingId" element={<DetailsPage />} />
      <Route path="/dubai/project-detail" element={<DubaiProjectDetailDemo />} />

      {/* Original Routes */}
      <Route path="/home" element={<HomePage />} />
      <Route path="/projects/:id" element={<ProjectDetailPage />} />
      <Route path="/machineries/rent/:id" element={<ItemDetailPage category="machinery-rent" />} />
      <Route path="/machineries/sale/:id" element={<ItemDetailPage category="machinery-sale" />} />
      <Route path="/tools/:id" element={<ItemDetailPage category="tool" />} />
      <Route path="/trees/:id" element={<ItemDetailPage category="tree" />} />
      <Route path="/agro-chemicals/:id" element={<ItemDetailPage category="agro" />} />
      <Route path="/projects" element={<HomePage />} />
      <Route path="/machineries" element={<HomePage />} />
      <Route path="/tools" element={<HomePage />} />
      <Route path="/trees" element={<HomePage />} />
      <Route path="/agro-chemicals" element={<HomePage />} />
      <Route path="/seeds" element={<HomePage />} />
      <Route path="/farms" element={<HomePage />} />
      {/* Catch-all for 404 */}
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}

export default App;
