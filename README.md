# ELGRACE TALENTS - Employee Resource Portal

A centralized landing page for ELGRACE TALENTS employees to access company tools, ERP systems, CRM platforms, and the main website.

## 📋 Overview

The ELGRACE Employee Resource Portal provides a single entry point for employees to quickly access:

- **Main Website** - Company website (https://www.elgrace.in/)
- **ERPNext** - Enterprise Resource Planning system
- **Odoo CRM** - Customer Relationship Management
- **Vtiger CRM** - Alternative CRM platform

## 🛠️ Tech Stack

- **React** - UI framework
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and dev server

## 📁 Project Structure

```
corporate-portal-hub/
├── components/
│   ├── Logo.tsx              # Header logo component
│   ├── ToolCard.tsx          # Tool card component
│   └── BrandIcons.tsx        # Brand icon components
├── App.tsx                   # Main application component
├── constants.ts              # Tool links configuration
├── types.ts                  # TypeScript interfaces
├── index.html                # HTML entry point
├── index.tsx                 # React entry point
└── README.md                 # This file
```

## 🔧 Configuration

### Adding New Tools

Edit `constants.ts` to add new tools:

```typescript
{
  id: 'tool-id',
  name: 'Tool Name',
  url: 'https://tool-url.com/',
  icon: '/logos/tool-logo.png',
  variant: 'primary' | 'secondary' | 'accent' | 'neutral' | 'orange' | 'indigo',
  target?: '_blank',
  rel?: 'noreferrer noopener'
}
```

### Customizing Colors

Edit `index.html` Tailwind config to modify brand colors:

```javascript
colors: {
  brand: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    500: '#0ea5e9',
    600: '#0284c7',
    900: '#0c4a6e',
  }
}
```

## 📸 Logo Files

Place the following PNG/JPG files in `/public/logos/`:

- `elgrace-logo.png` - Main header logo
- `globe.png` - Main website icon
- `erpnext.png` - ERPNext icon
- `odoo.png` - Odoo CRM icon
- `vtiger.jpg` - Vtiger CRM icon

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

## 📊 Component Details

### Logo Component

Displays the ELGRACE TALENTS header with animated branding.

### ToolCard Component

Renders individual tool cards with:

- Logo image
- Tool name
- Optional description
- Click-to-navigate functionality

## 👤 Usage Notes

- **Authorized Personnel Only** - This portal is for ELGRACE TALENTS employees only
- **Tool Access** - Some tools may require authentication

## 📝 License

© 2025 ELGRACE TALENTS. All rights reserved.
