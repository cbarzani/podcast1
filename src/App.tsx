import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { VideosSection } from './components/VideosSection';
import { PopularEpisodesSection } from './components/PopularEpisodesSection';
import { SocialMediaSection } from './components/SocialMediaSection';
import { AboutSection } from './components/AboutSection';
import { FounderSection } from './components/FounderSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <HeroSection />
          <VideosSection />
          <PopularEpisodesSection />
          <SocialMediaSection />
          <AboutSection />
          <FounderSection />
          <ContactSection />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </LanguageProvider>
  );
}