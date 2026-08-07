export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) {
  const baseStyles = 'font-medium transition-all duration-300 rounded focus:outline-none';

  const variants = {
    primary: 'bg-primary text-background hover:bg-primary-light shadow-luxury hover:shadow-luxury-hover',
    secondary: 'border border-primary text-primary hover:bg-primary hover:text-background',
    ghost: 'text-primary hover:text-primary-light'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
