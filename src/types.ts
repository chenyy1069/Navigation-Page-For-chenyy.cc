import { ElementType } from 'react';

export interface SiteLink {
  id: string;
  name: string;
  url: string;
  description: string;
  icon?: ElementType;
  colorClass?: string;
  bgHoverClass?: string;
  borderHoverClass?: string;
}
