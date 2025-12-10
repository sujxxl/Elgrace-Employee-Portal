import React from 'react';

interface BrandIconProps {
  className?: string;
  alt: string;
}

export const ErpNextLogo: React.FC<BrandIconProps> = ({ className = '', alt }) => (
  <img src="/logos/erpnext-logo.png" alt={alt} className={className} />
);

export const OdooLogo: React.FC<BrandIconProps> = ({ className = '', alt }) => (
  <img src="/logos/odoo-logo.png" alt={alt} className={className} />
);

export const VtigerLogo: React.FC<BrandIconProps> = ({ className = '', alt }) => (
  <img src="vtiger.png" alt={alt} className={className} />
);