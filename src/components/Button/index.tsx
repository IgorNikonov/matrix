import React from "react";
import "./style.css";

interface IButtonProps {
	content: string;
	onClick: () => void;
	variant:
		| "light-blue"
		| "green"
		| "warm-yellow"
		| "pale-red"
		| "dark-grey"
		| "light-grey"
		| "dark-green";
}

const Button: React.FC<IButtonProps> = ({ content, onClick, variant }) => {
	return (
		<div className='m-2 overflow-hidden'>
			<button
				className={`button relative hover:cursor-pointer font-[500] p-3 duration-300 before:absolute before:w-full before:border-b before:border-2 before:border-black before:bottom-0 before:left-[-100%] before:hover:left-0 before:opacity-0 before:hover:opacity-100 before:duration-300 ${variant}`}
				onClick={onClick}
			>
				{content}
			</button>
		</div>
	);
};

export default Button;
