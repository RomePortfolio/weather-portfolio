import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import HomePage from './pages/home';
import ProjectsPage from './pages/ProjectsPage';
import WeatherPage from './pages/WeatherPage';
import MedicalPage from './pages/MedicalPage';
import ResumeTailorPage from './pages/ResumeTailorPage';
import ResumeCheckerPage from './pages/ResumeCheckerPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-linear-to-br from-blue-900 via-indigo-900 to-purple-950 flex flex-col text-white">
        <Header />
        
        <main className="flex-1 pt-20">
          <Routes>
            <Route path="/" element={<HomePage />} />
            
            <Route path="/projects" element={<ProjectsPage />} />
            
            <Route path="/projects/weather" element={<WeatherPage />} />
            <Route path="/projects/medical" element={<MedicalPage />} />
            <Route path="/projects/resume-tailor" element={<ResumeTailorPage />} />
            <Route path="/projects/resume-checker" element={<ResumeCheckerPage />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;