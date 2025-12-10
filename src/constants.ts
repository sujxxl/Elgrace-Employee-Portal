import { ToolLink } from './types';

export const TOOLS: ToolLink[] = [
  {
    id: 'website',
    name: 'Main Website',
    url: 'https://www.elgrace.in/',
    icon: '/logos/globe.png',
    variant: 'primary'
  },
  {
    id: 'erp',
    name: 'ERPNext',
    url: 'http://72.61.233.139/app/home',
    icon: '/logos/erpnext.png',
    variant: 'indigo'
  },
  {
    id: 'odoo',
    name: 'Odoo CRM',
    url: '#odoo',
    icon: '/logos/odoo.png',
    variant: 'accent'
  },
  {
    id: 'vtiger',
    name: 'Vtiger CRM',
    url: 'http://72.61.233.139:8081/index.php?module=Home&view=DashBoard',
    icon: '/logos/vtiger.jpg',
    variant: 'orange',
    target: '_blank',
    rel: 'noreferrer noopener'
  }
];