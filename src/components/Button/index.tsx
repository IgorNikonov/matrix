import React from 'react';
import './style.css';

interface IButtonProps {
	content: string;
	onClick: () => void;
}

const Button: React.FC<IButtonProps> = ({ content, onClick }) => {
	return (
		<button onClick={onClick}>{content}</button>
	)
}

export default Button;