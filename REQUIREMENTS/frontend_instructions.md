# Lyra - AI Features Hub Frontend Instructions

## Overview
Lyra is a comprehensive AI features hub that integrates various AI capabilities including image generation, video processing, and other AI-powered features. This document outlines the frontend architecture, design principles, and implementation guidelines.

## Tech Stack
- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS + Shadcn UI
- **State Management**: React Context + Zustand
- **Authentication**: Next-Auth
- **API Integration**: tRPC/REST APIs
- **Form Handling**: React Hook Form + Zod validation

## Project Structure
```
src/
├── app/                    # Next.js app router pages
├── components/            
│   ├── ui/                # Reusable UI components
│   ├── features/          # Feature-specific components
│   └── layouts/           # Layout components
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions and configurations
├── styles/                # Global styles and Tailwind config
└── types/                 # TypeScript type definitions
```

## Core Features

### 1. Image Generation Hub
- AI model selection interface
- Image prompt input with advanced options
- Gallery view for generated images
- Image editing and variation controls

### 2. Video Processing Center
- Video upload interface
- Processing options selection
- Progress tracking
- Results preview and download

### 3. Common UI Elements
- Modern, responsive navigation
- User dashboard
- Settings panel
- Usage statistics
- Credit system interface

## Design Guidelines

### Colors
- Primary: #6366F1 (Indigo)
- Secondary: #8B5CF6 (Purple)
- Accent: #F43F5E (Rose)
- Background: #FFFFFF (Light) / #0F172A (Dark)
- Text: #1F2937 (Light) / #F9FAFB (Dark)

### Typography
- Headings: Inter
- Body: Inter
- Code: JetBrains Mono

### Component Guidelines
1. **Accessibility**
   - ARIA labels for interactive elements
   - Keyboard navigation support
   - Color contrast compliance

2. **Responsiveness**
   - Mobile-first approach
   - Breakpoints: sm(640px), md(768px), lg(1024px), xl(1280px)

3. **Performance**
   - Lazy loading for images and heavy components
   - Code splitting
   - Optimized asset delivery

## State Management
- Use Zustand for global state
- React Context for theme and auth
- Local state for component-specific logic

## API Integration
- Implement proper error handling
- Loading states for async operations
- Rate limiting handling
- Caching strategies

## Testing Guidelines
- Unit tests for utility functions
- Component testing with React Testing Library
- E2E testing with Cypress
- Accessibility testing with axe-core

## Development Workflow
1. Create feature branch from main
2. Implement feature following guidelines
3. Write tests
4. Submit PR with detailed description
5. Code review
6. Merge after approval

## Performance Targets
- Lighthouse score > 90
- First Contentful Paint < 1.5s
- Time to Interactive < 3.5s
- Core Web Vitals compliance

## Deployment
- Vercel for production
- Preview deployments for PRs
- Environment variable management
- Build optimization

## Security Considerations
- Input sanitization
- XSS prevention
- CSRF protection
- Secure authentication flows
- API rate limiting

## Documentation
- Component documentation with Storybook
- API documentation
- Inline code comments
- README updates for new features

## Future Considerations
- PWA support
- Offline capabilities
- Real-time collaboration features
- Advanced AI model integration

Remember to keep this document updated as the project evolves. For any questions or clarifications, refer to the tech lead or project documentation.
