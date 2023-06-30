import Link from "next/link";
import React from "react";

const Linkedin = () => {
	return (
		<Link
			href="https://www.linkedin.com/in/tyommmm/"
			rel="noopener noreferrer"
			target="_blank"
		>
			<svg
				width="30"
				height="30"
				viewBox="0 0 30 30"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className="cursor-pointer"
			>
				<circle cx="15" cy="15" r="15" className="fill-secondary" />
				<path
					d="M8.22178 22.0586H11.3059V12.0742H8.22178V22.0586Z"
					className="fill-primaryButton"
				/>
				<path
					d="M7.94141 8.88672C7.94141 9.87109 8.7358 10.668 9.76384 10.668C10.7451 10.668 11.5395 9.87109 11.5395 8.88672C11.5395 7.90234 10.7451 7.05859 9.76384 7.05859C8.7358 7.05859 7.94141 7.90234 7.94141 8.88672Z"
					className="fill-primaryButton"
				/>
				<path
					d="M19.8106 22.0586H22.9414V16.5742C22.9414 13.9023 22.3339 11.793 19.2031 11.793C17.7078 11.793 16.6797 12.6367 16.2592 13.4336H16.2124V12.0742H13.2685V22.0586H16.3526V17.1367C16.3526 15.8242 16.5863 14.5586 18.2218 14.5586C19.8106 14.5586 19.8106 16.0586 19.8106 17.1836V22.0586Z"
					className="fill-primaryButton"
				/>
			</svg>
		</Link>
	);
};

export default Linkedin;
