# Luxé Beauty - Premium Makeup Studio Website

A luxury MERN stack website for a premium makeup studio featuring services, portfolio, classes, and client testimonials.

## Project Structure

```
luxe-beauty/
├── frontend/           # React + Vite frontend application
│   ├── src/
│   │   ├── components/
│   │   │   ├── layout/    # Navbar, Footer
│   │   │   ├── sections/  # Home page sections
│   │   │   └── ui/        # Reusable UI components
│   │   ├── pages/         # Page routes
│   │   ├── services/      # API service layer
│   │   ├── App.jsx        # Main app with routing
│   │   └── main.jsx       # Entry point
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
│
├── backend/            # Express.js backend API
│   ├── config/         # Database configuration
│   ├── models/         # MongoDB schemas
│   ├── routes/         # API endpoints
│   ├── controllers/    # Business logic
│   ├── middleware/     # Custom middleware
│   ├── server.js       # Express server
│   ├── package.json
│   └── .env            # Environment variables
│
└── README.md           # This file
```

## Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Axios** - HTTP client
- **Swiper** - Carousel/slider component
- **Lucide React** - Icon library

### Backend
- **Node.js** - Runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **CORS** - Cross-origin request handling
- **Express Validator** - Input validation
- **Nodemailer** - Email service

## Features

✅ **Responsive Design** - Mobile-first approach, works on all devices
✅ **Luxury Theme** - Black & gold color scheme with elegant typography
✅ **Service Showcase** - Display of 6+ makeup services
✅ **Portfolio Gallery** - Category-filtered image gallery
✅ **Testimonials** - Auto-sliding client testimonials carousel
✅ **About Founder** - Showcase of founder's experience and achievements
✅ **Academy Section** - Training classes and certification information
✅ **Contact Form** - Lead generation with backend integration
✅ **WhatsApp Integration** - Direct messaging capability
✅ **SEO Optimized** - Meta tags, structured data, sitemaps
✅ **Performance** - Image lazy loading, optimized animations

## Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- MongoDB (local or cloud instance)

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

Frontend will be available at `http://localhost:5173`

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file:
```bash
cp .env.example .env
```

4. Update `.env` with your MongoDB URI:
```
MONGODB_URI=mongodb://localhost:27017/luxe-beauty
PORT=5000
NODE_ENV=development
CORS_ORIGIN=http://localhost:5173
```

5. Start development server:
```bash
npm run dev
```

Backend will be available at `http://localhost:5000`

## API Endpoints

### Content Endpoints (GET)
- `GET /api/content/services` - Get all services
- `GET /api/content/services/:slug` - Get single service
- `GET /api/content/classes` - Get all classes
- `GET /api/content/classes/:slug` - Get single class
- `GET /api/content/testimonials` - Get all testimonials
- `GET /api/content/gallery` - Get gallery items (with optional ?category filter)

### Contact Endpoints
- `POST /api/contact` - Submit contact form inquiry
- `GET /api/contact` - Get all inquiries (admin)

### Health Check
- `GET /api/health` - Server health status

## Running Both Servers

Option 1: Run in separate terminals
```bash
# Terminal 1 - Frontend
cd frontend && npm run dev

# Terminal 2 - Backend
cd backend && npm run dev
```

Option 2: From root directory with concurrently (install concurrently first)
```bash
npm install -D concurrently
npm run dev
```

## Database Setup

### MongoDB Models

**Contact** - Form submissions
- name, email, phone, serviceType, message, status, timestamps

**Testimonial** - Client reviews
- clientName, rating, quote, serviceType, image, timestamps

**Service** - Service offerings
- name, description, packages, FAQs, icon, image

**CourseClass** - Training classes
- name, description, syllabus, duration, fees, timing

**Gallery** - Portfolio images
- title, image, category, tags, description

## Environment Variables

### Frontend
No environment variables needed for local development. API calls default to `/api`.

### Backend
```
MONGODB_URI=<your-mongodb-connection-string>
PORT=5000
NODE_ENV=development
CORS_ORIGIN=http://localhost:5173
```

## Deployment

### Frontend (Vercel)
```bash
# Build
cd frontend && npm run build

# Deploy to Vercel
vercel
```

### Backend (Render/Railway/Heroku)
```bash
# Set environment variables in hosting platform
# Push code and deploy
```

## Customization

### Colors & Branding
Edit `frontend/tailwind.config.js` to customize:
- Primary colors (gold theme)
- Background colors
- Typography
- Shadows and effects

### Content
Update content in:
- `frontend/src/components/sections/` - Section content
- `backend/models/` - Database schemas
- Add images to portfolio and services

### Contact Info
Update in `frontend/src/components/layout/Footer.jsx`:
- Phone number
- Email address
- Physical address
- Social media links

## Performance Optimization

- Image lazy loading implemented
- Responsive image sizing
- Tailwind CSS tree-shaking
- Vite code splitting
- MongoDB indexing on frequently queried fields

## SEO Features

- Meta tags and Open Graph
- Semantic HTML
- Schema.org structured data
- Sitemap generation (coming soon)
- Fast loading times

## Future Enhancements

- [ ] Admin dashboard for content management
- [ ] Appointment booking system
- [ ] Payment integration
- [ ] Blog section
- [ ] Video testimonials
- [ ] Before & after slider
- [ ] Email notifications
- [ ] SMS updates
- [ ] Social media feed integration
- [ ] Google Analytics

## Troubleshooting

### Frontend not loading
- Check if Vite dev server is running on port 5173
- Clear browser cache
- Check console for errors

### Backend connection issues
- Ensure MongoDB is running
- Check `.env` file has correct MONGODB_URI
- Verify backend is running on port 5000

### CORS errors
- Check CORS_ORIGIN in backend `.env`
- Ensure frontend URL matches CORS_ORIGIN

## Support & Contact

For issues or inquiries, contact through the website contact form or:
- Email: info@luxebeauty.com
- Phone: +91 98765 43210
- WhatsApp: Click WhatsApp button on website

## License

MIT License - Feel free to use this project for your own business

---

Built with ❤️ for Luxé Beauty Makeup Studio
