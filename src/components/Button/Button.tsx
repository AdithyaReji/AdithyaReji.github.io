import styles from './Button.module.css';

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
};

export default function Button({
  children,
  variant = "primary",
  href,
}: ButtonProps) {
  const className = `${styles.btn} ${
    variant === "primary" ? styles.primary : styles.secondary
  }`;

  if (href) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return (
    <button className={className}>
      {children}
    </button>
  );
}