import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import contactRoutes from './routes/contact.js';
import contentRoutes from './routes/content.js';
import sendMessageEmail from './routes/sendMessage.routes.js';
import 'dotenv/config';
// dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
// server.js mein cors configuration ko isse replace karein:
const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:5173',
  "https://the-arti-luxe-5zfj.vercel.app",
  process.env.CORS_ORIGIN
].filter(Boolean);

app.use(cors({
  origin: function (origin, callback) {
    // allow requests with no origin (like mobile apps, postman, curl)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/contact', contactRoutes);
app.use('/api/content', contentRoutes);

//Email Send Message
app.use('/api/sendMessage-email', sendMessageEmail);







// Health check
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'Server is running',
    timestamp: new Date().toISOString()
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({
    success: false,
    message: 'Internal server error',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`\n🚀 Server running on http://localhost:${PORT}`);
  console.log(`📝 API Documentation:`);
  console.log(`   - GET  /api/health - Health check`);
  console.log(`   - GET  /api/content/services - All services`);
  console.log(`   - GET  /api/content/classes - All classes`);
  console.log(`   - GET  /api/content/testimonials - All testimonials`);
  console.log(`   - GET  /api/content/gallery - Portfolio gallery`);
  console.log(`   - POST /api/contact - Submit contact form\n`);
});

export default app;
