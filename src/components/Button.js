import Link from 'next/link';
import styles from '/public/styles/Home.module.css';

export default function Button({ children, href, variant = 'primary', onClick, type, className, disabled }) {
  const buttonClass = variant === 'primary' 
    ? styles.primaryButton 
    : variant === 'secondary' 
      ? styles.secondaryButton 
      : styles.outlineButton;
  
  const combinedClassName = `${buttonClass} ${className || ''}`;

  // If href is provided, render a Link
  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  // Otherwise render a button
  return (
    <button 
      className={combinedClassName} 
      onClick={onClick} 
      type={type || 'button'} 
      disabled={disabled}
    >
      {children}
    </button>
  );
}
