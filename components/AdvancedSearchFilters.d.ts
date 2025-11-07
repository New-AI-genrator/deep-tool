declare module '../../components/AdvancedSearchFilters' {
  import { ComponentType } from 'react';
  
  interface SearchFilters {
    pricing: string[];
    minRating: number | null;
    badges: string[];
    category: string | null;
    subcategory: string | null;
    sortBy: string;
  }
  
  interface AdvancedSearchFiltersProps {
    onFilterChange: (filters: SearchFilters) => void;
    initialFilters: SearchFilters;
    categories: Array<{ name: string; slug: string; subcategories: Array<{ name: string; slug: string }> }>;
    subcategories: Array<{ name: string; slug: string }>;
  }
  
  const AdvancedSearchFilters: ComponentType<AdvancedSearchFiltersProps>;
  
  export default AdvancedSearchFilters;
}