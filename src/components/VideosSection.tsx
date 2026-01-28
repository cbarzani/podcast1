import React from 'react';
import { motion } from 'framer-motion';
import { Play, Youtube, MousePointerClick } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const videos = [
  {
    id: 1,
    titleKey: 'videos.episode1.title',
    descriptionKey: 'videos.episode1.description',
    thumbnail: 'https://img.youtube.com/vi/7Sng33Z_Uw8/maxresdefault.jpg',
    duration: '45:22',
    url: 'https://youtu.be/7Sng33Z_Uw8?si=QZfZQ19mRPrBWLOI'
  },
  {
    id: 2,
    titleKey: 'videos.episode2.title',
    descriptionKey: 'videos.episode2.description',
    thumbnail: 'https://img.youtube.com/vi/ddCkr5maaGQ/maxresdefault.jpg',
    duration: '45:22',
    url: 'https://youtu.be/ddCkr5maaGQ?si=CgdddyHGDSWiWDv5'
  },
  {
    id: 3,
    titleKey: 'videos.episode3.title',
    descriptionKey: 'videos.episode3.description',
    thumbnail: 'https://img.youtube.com/vi/kbQ_NGRZppE/maxresdefault.jpg',
    duration: '52:18',
    url: 'https://youtu.be/kbQ_NGRZppE?si=C2Y3a5rNBHurQuP2'
  }
];

export function VideosSection() {
  const { t } = useLanguage();
  
  return (
    <section id="videos" className="py-20 bg-[#f5f1e8]">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl text-[#5a4a3a] mb-4">{t('videos.title')}</h2>
          <p className="text-[#5a4a3a]/70 max-w-2xl mx-auto">
            {t('videos.description')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {videos.map((video, index) => (
            <motion.a
              key={video.id}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group cursor-pointer"
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={video.thumbnail} 
                  alt={video.titleKey ? t(video.titleKey) : video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 brightness-110"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl text-[#5a4a3a] mb-2">
                  {video.descriptionKey ? t(video.descriptionKey) : video.description}
                </h3>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-[#5a4a3a] to-[#6a5a4a] rounded-2xl p-8 max-w-2xl mx-auto shadow-2xl">
            <Youtube className="w-12 h-12 text-[#d4c5a9] mx-auto mb-4" />
            <h3 className="text-2xl text-[#d4c5a9] mb-3">{t('videos.viewAll')}</h3>
            <motion.a
              href="https://youtube.com/@chirokyan?si=oew1jpOkdDxYJad0" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-10 py-4 bg-[#d4c5a9] text-[#5a4a3a] rounded-xl hover:bg-[#e4d5b9] transition-all shadow-lg hover:shadow-xl"
            >
              <Youtube className="w-5 h-5" />
              <span><MousePointerClick className="w-5 h-5 inline mr-1" />{t('videos.watchAll')}</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
