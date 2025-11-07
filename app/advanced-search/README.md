# Advanced Search Features

This document explains the advanced search functionality implemented in the DeepTool platform.

## Features

### 1. Enhanced Search Algorithm
- **Fuzzy Matching**: Searches across tool names, taglines, descriptions, categories, subcategories, tags, features, and use cases
- **Relevance Scoring**: Calculates relevance scores based on match quality and applies bonuses for filter matches
- **Better Results**: More accurate and relevant search results compared to basic search

### 2. Advanced Filtering Options
- **Pricing Model**: Filter by free, freemium, paid, or enterprise pricing
- **Minimum Rating**: Filter tools by minimum rating (4, 4.5, or 5 stars)
- **Badges**: Filter by tool badges (nexus-verified, trending, enterprise, new, popular, featured, community-favorite)
- **Category & Subcategory**: Filter by specific categories and subcategories
- **Sorting Options**: Sort by relevance, rating, reviews, name, or newest

### 3. Improved User Experience
- **Pagination**: Navigate through large result sets
- **Real-time Suggestions**: Get search suggestions as you type
- **Filter Persistence**: Filters are saved in the URL for easy sharing
- **Clear All Filters**: One-click reset of all applied filters

### 4. Search Analytics
- **Trending Searches**: See what other users are searching for
- **Recent Searches**: Quick access to your recent searches
- **Search Insights**: Understand search patterns and popular terms

## API Endpoints

### Advanced Search API
```
GET /api/advanced-search
```

**Query Parameters:**
- `q` - Search query string
- `limit` - Number of results to return (default: 24)
- `offset` - Offset for pagination (default: 0)
- `sortBy` - Sort order (relevance, rating, reviews, name, newest)
- `pricing` - Filter by pricing model (comma-separated)
- `minRating` - Minimum rating filter
- `badges` - Filter by badges (comma-separated)
- `category` - Filter by category slug
- `subcategory` - Filter by subcategory slug

**Response:**
```json
{
  "success": true,
  "query": "search term",
  "count": 24,
  "total": 150,
  "offset": 0,
  "limit": 24,
  "sortBy": "relevance",
  "filters": {
    "pricing": ["free", "freemium"],
    "minRating": 4.5,
    "badges": ["trending", "popular"],
    "category": "creative-design",
    "subcategory": "ai-art-generation"
  },
  "results": [
    {
      "id": "tool-slug",
      "name": "Tool Name",
      "tagline": "Tool tagline",
      "logoUrl": "/logos/tool.png",
      "category": "Category Name",
      "categorySlug": "category-slug",
      "subcategory": "Subcategory Name",
      "subcategorySlug": "subcategory-slug",
      "pricing": "free",
      "badges": ["trending", "popular"],
      "rating": 4.8,
      "reviewCount": 1250,
      "relevanceScore": 150
    }
  ]
}
```

## Components

### AdvancedSearchFilters
A reusable component that provides all advanced filtering options.

### SearchAnalytics
Displays trending and recent search terms to help users discover popular tools.

### AdvancedSearchPage
The main search interface that combines all advanced search features.

## Implementation Details

### Relevance Scoring Algorithm
The search algorithm calculates relevance scores based on:
1. **Exact Name Match**: Highest weight (100 points)
2. **Partial Name Match**: Medium-high weight (50 points)
3. **Tagline Match**: Medium weight (30 points)
4. **Description Match**: Lower-medium weight (20 points)
5. **Category/Subcategory Match**: Lower weight (15 points)
6. **Tags Match**: Low weight (10 points)
7. **Features/Use Cases Match**: Lowest weight (5 points)
8. **Filter Bonuses**: Additional points for matching applied filters

### Fuzzy Matching
The fuzzy matching algorithm:
1. Checks for direct string inclusion
2. Splits queries into words and ensures all words are present
3. Provides more flexible matching than exact string comparison

### Performance Optimizations
- **Debouncing**: Search API calls are debounced to prevent excessive requests
- **Pagination**: Results are paginated to avoid loading too much data at once
- **Caching**: API responses can be cached for better performance