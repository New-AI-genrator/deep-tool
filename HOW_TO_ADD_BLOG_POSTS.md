# How to Add Blog Posts to DeepTool

This guide explains how to add new blog posts to your website easily.

## 📝 Quick Start

Blog posts are stored in `/data/blog-posts.ts` as TypeScript objects. Each post has:
- Content written in Markdown
- Metadata (title, author, tags, etc.)
- SEO optimization built-in

## 🚀 Adding a New Blog Post

### Step 1: Open the blog data file

```bash
/data/blog-posts.ts
```

### Step 2: Add your post to the `blogPosts` array

```typescript
{
  slug: 'your-post-url-slug',  // URL-friendly version of title
  title: 'Your Amazing Blog Post Title',
  excerpt: 'A compelling 1-2 sentence summary that appears in listings',
  content: `
# Your Blog Post Title

Write your full blog post content here in Markdown format.

## This is a heading

This is a paragraph with **bold text** and *italic text*.

### Lists work too:

- Bullet point 1
- Bullet point 2
- Bullet point 3

### Code blocks:

\`\`\`javascript
const greeting = "Hello World";
console.log(greeting);
\`\`\`

### Numbered lists:

1. First item
2. Second item
3. Third item

  `,
  category: 'tutorials',  // Options: 'guides', 'tutorials', 'reviews', 'ai-tools', 'industry-news'
  author: {
    name: 'Your Name',
    role: 'Your Role',
    image: '👤',  // Use an emoji or image URL
  },
  publishedAt: '2025-01-20',  // Format: YYYY-MM-DD
  readTime: '5 min',
  coverImage: '📝',  // Emoji to represent your post
  tags: ['Tag1', 'Tag2', 'Tag3'],
  featured: false,  // Set to true for featured posts
  trending: false,  // Set to true for trending posts
  views: 0,
  likes: 0,
}
```

### Step 3: Save and deploy

```bash
git add data/blog-posts.ts
git commit -m "Add new blog post: Your Post Title"
git push origin main
```

Your post will be live at: `https://deep-tool.vercel.app/blog/your-post-url-slug`

## 📋 Blog Post Template

Copy this template for new posts:

```typescript
{
  slug: 'change-this-to-match-title',
  title: 'Your Blog Post Title Here',
  excerpt: 'Write a compelling 1-2 sentence summary here that will appear in blog listings and search results.',
  content: `
# Main Title

## Introduction

Write your introduction paragraph here. Make it engaging!

## Section 1

Your content here with **bold text** for emphasis.

### Subsection

More detailed content...

## Section 2

- Bullet point 1
- Bullet point 2
- Bullet point 3

## Conclusion

Wrap up your post with key takeaways.
  `,
  category: 'tutorials',
  author: {
    name: 'Author Name',
    role: 'Job Title',
    image: '👤',
  },
  publishedAt: '2025-01-20',
  readTime: '5 min',
  coverImage: '📝',
  tags: ['Tutorial', 'AI', 'Guide'],
  featured: false,
  trending: false,
  views: 0,
  likes: 0,
}
```

## 🎨 Markdown Formatting Guide

### Headers
```markdown
# H1 - Main title
## H2 - Section heading
### H3 - Subsection heading
```

### Text Formatting
```markdown
**Bold text**
*Italic text*
`Inline code`
```

### Lists
```markdown
- Unordered list item
- Another item

1. Ordered list item
2. Another item
```

### Code Blocks
````markdown
```javascript
const code = "example";
```
````

### Links
```markdown
[Link text](https://example.com)
```

## 📂 Blog Categories

Available categories:
- `guides` - Comprehensive how-to guides
- `tutorials` - Step-by-step tutorials
- `reviews` - Tool and product reviews
- `ai-tools` - AI tool spotlights and comparisons
- `industry-news` - Latest news and trends

## 🏷️ Best Practices

### SEO Optimization
1. **Title**: 50-60 characters, include main keyword
2. **Excerpt**: 150-160 characters, compelling summary
3. **Tags**: 3-5 relevant tags, use existing tags when possible
4. **Content**: Minimum 500 words for good SEO

### Slug Guidelines
- Use lowercase letters
- Separate words with hyphens
- Keep it short and descriptive
- Example: `ultimate-guide-ai-tools-2025`

### Author Information
- Use real names and roles
- Keep consistent across posts
- Use professional emojis or avatars

## 🔍 Finding Your Blog Posts

### Blog listing page:
```
https://deep-tool.vercel.app/blog
```

### Individual post:
```
https://deep-tool.vercel.app/blog/your-slug-here
```

### Filter by category:
```
https://deep-tool.vercel.app/blog?category=tutorials
```

## ✨ Featured & Trending Posts

To feature a post on the homepage or mark it as trending:

```typescript
{
  // ... other fields
  featured: true,   // Shows in featured section
  trending: true,   // Shows in trending section
}
```

## 📊 Advanced Features

### Add custom metadata
```typescript
{
  // ... other fields
  updatedAt: '2025-01-25',  // Optional: when post was last updated
  views: 1500,              // Optional: view count
  likes: 230,               // Optional: like count
}
```

### Social media sharing
- Twitter, LinkedIn, and Facebook share buttons are automatic
- Open Graph images are generated automatically
- All posts have proper meta tags for SEO

## 🐛 Troubleshooting

### Post not showing up?
1. Check the `slug` is unique
2. Verify the date format is `YYYY-MM-DD`
3. Ensure all required fields are filled
4. Check for TypeScript errors in the file

### Formatting issues?
1. Make sure markdown syntax is correct
2. Close all code blocks with triple backticks
3. Check for unclosed quotation marks
4. Validate the content string is wrapped in backticks

## 💡 Tips for Great Blog Posts

1. **Hook readers early** - Start with an engaging intro
2. **Use headers** - Break content into scannable sections
3. **Add examples** - Code snippets and real-world use cases
4. **Include visuals** - Use emojis or describe images
5. **End with action** - Call-to-action or key takeaways
6. **Optimize for SEO** - Use keywords naturally
7. **Proofread** - Check grammar and spelling

## 📈 Blog Growth Strategy

### Consistency
- Publish 1-2 posts per week
- Maintain a content calendar
- Update old posts regularly

### Topics
- Answer common questions
- Review popular tools
- Share tutorials and guides
- Cover industry trends

### Promotion
- Share on social media
- Link from other pages
- Email to subscribers
- Engage with comments

## 🎯 Example: Complete Blog Post

Here's a complete example you can copy and modify:

```typescript
{
  slug: '10-best-free-ai-tools-2025',
  title: '10 Best Free AI Tools You Should Try in 2025',
  excerpt: 'Discover the top free AI tools that rival their paid counterparts. Perfect for students, freelancers, and anyone on a budget.',
  content: `
# 10 Best Free AI Tools You Should Try in 2025

Finding quality AI tools without breaking the bank? You're in luck! Here are 10 powerful free AI tools you can start using today.

## Why Free AI Tools Matter

Not everyone can afford $20/month subscriptions. These free tools prove that you don't need to pay to access powerful AI features.

## 1. ChatGPT Free Tier

**What it does**: Conversational AI for writing, coding, and brainstorming

**Why it's great**:
- Access to GPT-3.5
- Unlimited questions
- Fast responses

## 2. Google Gemini

**What it does**: AI chatbot with Google integration

**Why it's great**:
- Free access to Gemini Pro
- Google Search integration
- Multimodal capabilities

## 3. Canva AI

**What it does**: AI-powered design tools

**Why it's great**:
- Free design templates
- Magic Edit features
- Background removal

## Conclusion

These free tools are powerful enough for most use cases. Start experimenting today!
  `,
  category: 'ai-tools',
  author: {
    name: 'Tom Anderson',
    role: 'Tech Reviewer',
    image: '👨‍💼',
  },
  publishedAt: '2025-01-15',
  readTime: '8 min',
  coverImage: '🎁',
  tags: ['Free Tools', 'AI', 'Budget', 'Resources'],
  featured: true,
  trending: true,
  views: 16800,
  likes: 1890,
}
```

## 🔗 Useful Resources

- [Markdown Guide](https://www.markdownguide.org/)
- [SEO Best Practices](https://developers.google.com/search/docs)
- [Content Writing Tips](https://blog.hubspot.com/marketing/content-marketing)

---

Need help? Check the existing blog posts in `/data/blog-posts.ts` for more examples!
