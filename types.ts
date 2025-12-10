export interface ToolLink {
  id: string;
  name: string;
  description?: string;
  url: string;
  icon: string;
  variant: 'primary' | 'secondary' | 'accent' | 'neutral' | 'orange' | 'indigo';
  target?: '_blank' | '_self' | '_parent' | '_top';
  rel?: string;
}