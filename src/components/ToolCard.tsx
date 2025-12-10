import React from 'react';
import { ToolLink } from '../types';

interface ToolCardProps {
  tool: ToolLink;
}

export const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  return (
    <a
      href={tool.url}
      target={tool.target}
      rel={tool.rel}
      className={`group relative overflow-hidden rounded-2xl p-10 transition-all duration-300 hover:scale-110 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700 hover:border-slate-600 shadow-lg hover:shadow-2xl`}
    >
      <div className="flex flex-col items-center justify-center space-y-6">
        <img 
          src={tool.icon} 
          alt={tool.name}
          className="w-20 h-20 object-contain drop-shadow-lg"
        />
        <h3 className="text-white font-bold text-center text-base">{tool.name}</h3>
        {tool.description && (
          <p className="text-slate-400 text-sm text-center">{tool.description}</p>
        )}
      </div>
    </a>
  );
};