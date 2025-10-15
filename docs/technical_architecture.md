# Aetherium Nexus — Technical Architecture

Frontend
- Next.js 14 (App Router), TypeScript
- Tailwind CSS design tokens; Framer Motion animations; Three.js/WebGL for 3D
- Edge rendering via CDN; ISR/SSR mixed model

Backend
- Core API: Node (Express) or Fastify
- Intelligence/ML API: Python (FastAPI)
- Caching: Redis; Queue: SQS (or Cloud Tasks)

Data
- PostgreSQL (relational): users, tools, categories, tool_categories, reviews, benchmarks, workflows, workflow_steps, comparisons, saves
- MongoDB (docs): intelligence_feed_events, ai_recommendations, user_sessions
- Search: OpenSearch/Meili/Typesense for instant search

Observability
- Metrics, logs, traces; uptime 99.9% SLO; alerting on key SLIs

Security
- SSO/SAML; RBAC; audit logs; rate limits; WAF; secrets manager

Performance
- TTFB < 100ms target; Lighthouse 100; image/CDN optimization; code splitting

Schema (key tables)
- tools(id uuid pk, name, slug unique, website_url, pricing_tier, api_status, integrations jsonb, mobile jsonb, architecture, data_notes, compute_notes, privacy_notes, env_rating, founding_year, hq, funding_status, created_at)
- categories(id uuid pk, name, slug unique, level, parent_id fk, created_at)
- tool_categories(tool_id fk, category_id fk, primary key (tool_id, category_id))
- reviews(id uuid pk, user_id fk, tool_id fk, rating int, pros text, cons text, created_at)
- benchmarks(id uuid pk, tool_id fk, metric_key text, metric_value numeric, context jsonb, created_at)
- users(id uuid pk, email unique, password_hash, name, role, plan_tier, preferences jsonb, created_at)
- workflows(id uuid pk, user_id fk, name, description, is_public, created_at)
- workflow_steps(id uuid pk, workflow_id fk, step_index int, tool_id fk, config jsonb, inputs jsonb, outputs jsonb, created_at)
- comparisons(id uuid pk, user_id fk, tool_ids uuid[], criteria jsonb, created_at)
