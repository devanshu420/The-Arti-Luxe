import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Reviews() {
  useEffect(() => {
    document.title = 'Reviews - Luxé Beauty';
  }, []);

  return (
    <main className="min-h-screen pt-20 pb-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="py-20"
        >
          <h1 className="text-5xl font-display font-bold mb-4 text-center">
            Client Reviews
          </h1>
          <p className="text-text-secondary text-xl text-center mb-16">
            What our clients have to say
          </p>
          <p className="text-center text-text-secondary">
            Full reviews and testimonials collection coming soon...
          </p>
        </motion.div>
      </div>
    </main>
  );
}
