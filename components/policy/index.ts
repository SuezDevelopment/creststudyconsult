export { default as PolicyHero } from './PolicyHero';
export { default as PolicySection } from './PolicySection';
export { default as PolicyContact } from './PolicyContact';
export { default as PolicyLayout, PolicyContent } from './PolicyLayout';

// Types for reusability
export interface PolicySectionData {
  title: string;
  icon: React.ReactNode;
  content: string | string[];
}

export interface PolicyContactInfo {
  email?: string;
  phone?: string;
  address?: string;
}