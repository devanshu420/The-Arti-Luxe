export default function Card({ children, className = '', variant = 'default' }) {
  const baseStyles = 'rounded overflow-hidden transition-all duration-300';

  const variants = {
    default: 'bg-background-secondary border border-border hover:border-primary',
    premium: 'bg-background-secondary border border-primary shadow-luxury hover:shadow-luxury-hover',
    minimal: 'bg-background-secondary'
  };

  return (
    <div className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </div>
  );
}
