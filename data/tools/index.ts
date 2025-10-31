import { ToolEntry } from '../tools';
import { creativeDesignTools } from './creative-design';

// Export all tools from individual category files
export const allTools: ToolEntry[] = [
  ...creativeDesignTools,
  // ... other category tools will be added here
];

// Export tools organized by subcategory for backward compatibility
export const toolsBySubcategory: Record<string, ToolEntry[]> = {};

// Initialize toolsBySubcategory from allTools
allTools.forEach(tool => {
  const subcategorySlug = tool.subcategorySlug;
  if (!toolsBySubcategory[subcategorySlug]) {
    toolsBySubcategory[subcategorySlug] = [];
  }
  toolsBySubcategory[subcategorySlug].push(tool);
});

// Re-export types and helper functions for backward compatibility
export type { ToolEntry, ToolPricing, ToolBadge } from '../tools';
export type { Subcategory, CategoryWithSubcategories } from '../tools';

// Re-export helper functions
export {
  getAllTools,
  getToolsByCategory,
  getToolsBySubcategory,
  getToolBySlug,
  getCategoryBySlug,
  getSubcategoryBySlug,
  categoriesWithSubcategories
} from '../tools';