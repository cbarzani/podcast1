import React from 'react';
import { motion } from 'framer-motion';
import { Play, TrendingUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const popularEpisodes = [
  {
    id: 1,
    titleKey: 'popular.episode1.title',
    descriptionKey: 'popular.episode1.description',
    thumbnail: 'https://img.youtube.com/vi/li6ymY_1TpQ/maxresdefault.jpg',
    duration: '48:30',
    views: '100K+',
    url: 'https://youtu.be/li6ymY_1TpQ?si=uJugH4L8EErfaHKI'
  },
  {
    id: 2,
    titleKey: 'popular.episode2.title',
    descriptionKey: 'popular.episode2.description',
    thumbnail: 'https://img.youtube.com/vi/I4fkxdbVgL0/maxresdefault.jpg',
    duration: '55:15',
    views: '85K+',
    url: 'https://youtu.be/I4fkxdbVgL0?si=EKDnRhpWs2KdXpXe'
  },
  {
    id: 3,
    titleKey: 'popular.episode3.title',
    descriptionKey: 'popular.episode3.description',
    thumbnail: 'https://img.youtube.com/vi/c6vA5yMA1Wc/maxresdefault.jpg',
    duration: '42:20',
    views: '45K+',
    url: 'https://youtu.be/c6vA5yMA1Wc?si=97opieTCnPajVI0L'
  }
];

export function PopularEpisodesSection() {
  const { t } = useLanguage();
  
  return (
    <section id="popular" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl text-[#5a4a3a] mb-4">{t('popular.title')}</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {popularEpisodes.map((episode, index) => (
            <motion.a
              key={episode.id}
              href={episode.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="bg-[#f5f1e8] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group cursor-pointer relative"
            >
              {/* Ranking Badge */}
              <motion.div 
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 + 0.2, type: "spring" }}
                className="absolute top-4 left-4 z-10 w-10 h-10 bg-[#5a4a3a] text-[#d4c5a9] rounded-full flex items-center justify-center shadow-lg"
              >
                <span className="text-lg">#{index + 1}</span>
              </motion.div>

              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={episode.thumbnail} 
                  alt={t(episode.titleKey)}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 bg-[#d4c5a9] rounded-full flex items-center justify-center">
                    <Play className="w-8 h-8 text-[#5a4a3a] ml-1" fill="currentColor" />
                  </div>
                </div>
                <div className="absolute bottom-2 left-2 bg-[#5a4a3a]/90 text-[#d4c5a9] px-2 py-1 rounded text-sm flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  {episode.views} {t('popular.views')}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl text-[#5a4a3a] mb-2">{t(episode.titleKey)}</h3>
                <p className="text-[#5a4a3a]/70">{t(episode.descriptionKey)}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}