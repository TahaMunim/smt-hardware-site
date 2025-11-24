# SMT Hardware & Construction Materials Website

## Overview

This is a professional React-based website for Saleh Mohsin Trading LLC (SMT), a hardware and construction materials business in the UAE. The application is built with React, TypeScript, and Express.js, featuring a modern black and yellow branded design. The website serves both B2B and retail customers, providing product catalogs, quote requests, and contact functionality for construction materials, tools, and hardware supplies.

## Recent Changes

### Product Display Simplification (November 17, 2025)
- **Removed Price Information**: Eliminated price field from Product interface and all product data
- **Removed Stock Status**: Removed stock status badges and tracking from products
- **Simplified Product Cards**: Streamlined product display to show only brand, name, description, and WhatsApp inquiry button
- **Amazon-Style Mobile Layout**: Products displayed as horizontal cards on mobile (image left, info right) for space efficiency
- **Responsive Grid**: 1 column on mobile (horizontal cards), 3 columns on tablet, 4 columns on desktop

### Enhanced Pages (November 14, 2025)

### Enhanced About Us Page
Completely redesigned About page with comprehensive company information:
- **Hero Section**: Professional headline "About Saleh Mohsin Trading" with subtitle
- **Our Story**: Four-paragraph narrative covering SMT's founding (2012), growth, specialization in Sika/Tuffix sealants and Stanley/DeWalt tools, and core values
- **Stats Section**: Four key metrics cards (SMT Warehouse, Serving UAE 12+ years, 2000+ clients, 5000+ products)
- **Our Values**: Four detailed value cards (Quality Assurance, Trust & Reliability, Customer Focus, Continuous Growth)
- **Our Team**: Three department team cards (Sales Team, Technical Team, Logistics Team)
- **Our Facilities**: Two facility cards (SMT Warehouse and SMT Showroom descriptions)
- **Visit Us**: Address information, business hours table, and Google Maps placeholder for Al Sajaa, Sharjah location

### Enhanced Services Page
Expanded Services page with detailed service offerings:
- **Hero Section**: "Our Services" with comprehensive subtitle
- **Main Services**: Four expanded service cards with detailed descriptions (Bulk Supply, Technical Support, Contractor Discounts, Site Delivery)
- **How We Work**: Three-step process with detailed explanations (Request Quote, We Confirm, Fast Delivery)
- **Additional Services**: NEW - Four additional benefit cards (Extended Hours 7AM-8PM, Prime Location, Inventory Management, Account Management)
- **CTA Section**: Updated with "Need Bulk Pricing?" heading and Call Now action button

### Enhanced Contact Page
Rebuilt Contact page with WhatsApp integration:
- **Hero Section**: "Contact Us" with descriptive subtitle
- **Contact Info Blocks**: Four cards displaying Phone, Email, Location, and Business Hours
- **Send Message Form**: Contact form with Name*, Email*, Phone, Subject, and Message* fields that redirects to WhatsApp with encoded parameters
- **WhatsApp Quick Order**: Standalone box with direct link to WhatsApp for quick quotes
- **Map Section**: "Find Us on the Map" with Google Maps placeholder and "Open in Google Maps" button

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: TailwindCSS with custom CSS variables for consistent black/yellow theming
- **UI Components**: Radix UI primitives with shadcn/ui component library for accessibility and consistency
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Forms**: React Hook Form with Zod validation for type-safe form handling
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js REST API server
- **Language**: TypeScript with ES modules for modern JavaScript features
- **API Design**: RESTful endpoints for contact messages and quote requests
- **Data Storage**: In-memory storage with interface abstraction for future database integration
- **Validation**: Zod schemas shared between frontend and backend for consistent validation
- **Error Handling**: Centralized error handling with proper HTTP status codes

### Database Schema
- **Contact Messages**: Customer inquiries with name, phone, email, and message fields
- **Quotes**: Product quote requests including product type, quantity, customer details, and notes
- **Prepared for**: PostgreSQL with Drizzle ORM configuration ready for production deployment

### Component Architecture
- **Layout Components**: Header with sticky navigation, Footer with business information
- **Page Components**: Home, Products, Services, About, Contact with responsive design
- **Feature Components**: ProductGrid for catalog display, QuoteModal for quote requests, TestimonialsCarousel for social proof
- **UI Components**: Comprehensive design system using Radix UI primitives

### Styling Strategy
- **Design System**: Black background with yellow accent colors reflecting SMT branding
- **Typography**: Modern sans-serif fonts with consistent hierarchy
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts
- **Dark Theme**: Primary dark theme with custom CSS variables for easy maintenance

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Hook Form for modern React development
- **TypeScript**: Full TypeScript support across frontend and backend
- **Vite**: Development server and build tool with hot module replacement

### UI and Styling
- **TailwindCSS**: Utility-first CSS framework with PostCSS processing
- **Radix UI**: Unstyled, accessible UI primitives for complex components
- **Lucide React**: Modern icon library for consistent iconography
- **React Icons**: Additional icon set including FontAwesome for WhatsApp integration

### Backend Dependencies
- **Express.js**: Web framework for REST API development
- **Drizzle ORM**: Type-safe database ORM with PostgreSQL support
- **Neon Database**: Serverless PostgreSQL database service
- **Connect PG Simple**: PostgreSQL session store for future authentication needs

### Development Tools
- **ESBuild**: Fast JavaScript bundler for production builds
- **TSX**: TypeScript execution environment for development
- **Zod**: Schema validation library for type-safe data handling

### Database Integration
- **Drizzle Kit**: Database migration and schema management tools
- **PostgreSQL**: Production database with Neon serverless hosting
- **Schema Validation**: Shared Zod schemas between database, API, and frontend

### Replit-Specific
- **Vite Plugin Runtime Error Modal**: Development error overlay for Replit environment
- **Cartographer Plugin**: Replit-specific development tooling integration