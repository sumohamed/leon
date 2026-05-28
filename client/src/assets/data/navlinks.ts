export interface navItem {
	label: string;
	path: string;
	target?: string;
}

export interface navCategory {
	category: string;
	links: navItem[];
}

export const navlist: navCategory[] = [
	{
		category: "Menu",
		links: [
			{ label: "Home", path: "/" },
			{ label: "Services", path: "#services" },
			{ label: "Portfolio", path: "#portfolio" },
			{ label: "About", path: "#about" },
		],
	},
	{
		category: "Get in Touch",
		links: [{ label: "Contact Me", path: "#contact" }],
	},
	{
		category: "Get Social",
		links: [
			{
				label: "Behance",
				target: "_blank",
				path: "https://www.behance.net/",
			},
			{ label: "Dribble", target: "_blank", path: "https://dribbble.com/" },
			{ label: "Twitter", target: "_blank", path: "https://x.com/" },
		],
	},
];
