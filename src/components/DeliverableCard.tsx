import React from 'react';
import { LucideIcon, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface DeliverableCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export const DeliverableCard: React.FC<DeliverableCardProps> = ({ icon: Icon, title, description, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full group"
    >
      <div className="mb-6">
        <Icon size={24} className="text-orange-500 group-hover:scale-110 transition-transform" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight tracking-tight">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-grow">
        {description}
      </p>
      <a 
        href="#" 
        className="inline-flex items-center text-[10px] font-black text-orange-500 uppercase tracking-[0.2em] group/link"
      >
        Ver Detalhes
        <ArrowRight size={14} className="ml-2 transition-transform group-hover/link:translate-x-1" />
      </a>
    </motion.div>
  );
};

