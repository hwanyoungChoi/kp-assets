export interface ButtonProps {
  width?: number | string;
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'default';
}

export type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps;
