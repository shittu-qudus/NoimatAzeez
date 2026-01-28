import Navbar from './component/navbar'
// import './App.css'
import './index.css'
import HeroSection from './component/hero'
import ServicesSection from './component/hero2'
import ClientLanguageSection from './component/hero3'
import AboutSection from './component/about'
import ToolsSkillsSection from './component/skills'
import ProjectSection from './component/project'
import ContactSection from './component/contact'
import Footer from './component/footer'
function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ClientLanguageSection />
      <AboutSection />
      <ToolsSkillsSection />
      <ProjectSection />
      <ContactSection />
      <Footer />
    </>
  )
}

export default App
