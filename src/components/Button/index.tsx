import React from 'react';
import './style.css';

interface IButtonProps {
	content: string;
	onClick: () => void;
	variant: 'light-blue' | 'green' | 'warm-yellow' | 'pale-red' | 'dark-grey' | 'light-grey' | 'dark-green' | 'light-cyan';
}

const Button: React.FC<IButtonProps> = ({ content, onClick, variant }) => {
	return (
		<button className={variant} onClick={onClick}>{content}</button>
	)
}

export default Button;