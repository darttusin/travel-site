import styles from './Button.module.css';
interface ButtonProps {
 label: string;
 color?: 'blue' | 'red';
 size?: 'small' | 'medium' | 'large';
}
export const Button = ({ label, color = 'blue', size = 'medium' }: ButtonProps) => {
 return (
 <button
 className={`${styles.btn} ${styles[`btn-${color}`]}
${styles[`btn-${size}`]}`}
 >
 {label}
 </button>
 );
};