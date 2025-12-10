import React from 'react';

export const Logo: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center mb-16">
      <div className="mb-4">
        <img height={64}
          src="/logos/elgrace-logo.png" 
          alt="ELGRACE TALENTS"
          className="w-20 h-20 object-contain"
        />
      </div>
      <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 tracking-tight text-center">
        ELGRACE TALENTS
      </h1>
      <p className="text-slate-400 mt-4 text-center text-sm uppercase tracking-widest font-medium">
        Employee Resource Portal
      </p>
    </div>
  );
};