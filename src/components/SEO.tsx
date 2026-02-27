import { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export function SEO() {
  const { language, t } = useLanguage();

  useEffect(() => {
    // Update page title
    document.title = t('seo.title');

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      
      meta.setAttribute('content', content);
    };

    // Basic SEO
    updateMetaTag('description', t('seo.description'));
    updateMetaTag('keywords', t('seo.keywords'));
    updateMetaTag('author', 'Dr. Hazhar Salam');
    updateMetaTag('language', language);

    // Open Graph / Facebook
    updateMetaTag('og:title', t('seo.title'), true);
    updateMetaTag('og:description', t('seo.description'), true);
    updateMetaTag('og:type', 'website', true);
    updateMetaTag('og:url', 'https://chirokyan.net', true);
    updateMetaTag('og:site_name', 'چیرۆکیان - Chirokyan Podcast', true);
    updateMetaTag('og:locale', language === 'ku' ? 'ku_IQ' : language === 'ar' ? 'ar_IQ' : 'en_US', true);

    // Twitter Card
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', t('seo.title'));
    updateMetaTag('twitter:description', t('seo.description'));

    // Additional SEO
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('googlebot', 'index, follow');

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = 'https://chirokyan.net';

    // Language alternates
    const updateAlternate = (lang: string, href: string) => {
      let link = document.querySelector(`link[hreflang="${lang}"]`) as HTMLLinkElement;
      if (!link) {
        link = document.createElement('link');
        link.rel = 'alternate';
        link.hreflang = lang;
        document.head.appendChild(link);
      }
      link.href = href;
    };

    updateAlternate('en', 'https://chirokyan.net?lang=en');
    updateAlternate('ku', 'https://chirokyan.net?lang=ku');
    updateAlternate('ar', 'https://chirokyan.net?lang=ar');
    updateAlternate('x-default', 'https://chirokyan.net');

    // Add JSON-LD structured data for podcast
    let script = document.querySelector('script[type="application/ld+json"]');
    if (!script) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "PodcastSeries",
      "name": "چیرۆکیان - Chirokyan Podcast",
      "description": t('seo.description'),
      "url": "https://chirokyan.net",
      "author": {
        "@type": "Person",
        "name": "Dr. Hazhar Salam",
        "email": "hazharsalam62@gmail.com"
      },
      "genre": ["Interview", "Life Stories", "Talk"],
      "inLanguage": ["ku", "en", "ar"],
      "sameAs": [
        "https://youtube.com/@chirokyan",
        "https://www.instagram.com/chirokiyan",
        "https://www.facebook.com/profile.php?id=61574421084981",
        "https://www.tiktok.com/@chirokyann"
      ],
      "publisher": {
        "@type": "Organization",
        "name": "چیرۆکیان",
        "logo": {
          "@type": "ImageObject",
          "url": "https://chirokyan.net/logo.png"
        }
      }
    };
    
    script.textContent = JSON.stringify(structuredData);

  }, [language, t]);

  return null;
}