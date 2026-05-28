import { useState, useRef, useEffect } from "react";

interface UseNavigationStylingOptions {
	property?: "right" | "left" | "top" | "bottom";
	startValue?: string; // القيمة وهي مقفولة
	endValue?: string; // القيمة وهي مفتوحة
	durationOpen?: number;
	durationClose?: number;
	easing?: string;
}

export const useNavigation = (options?: UseNavigationStylingOptions) => {
	const [isOpen, setIsOpen] = useState(false);
	const navRef = useRef<HTMLElement>(null);

	const {
		property = "right",
		startValue = "-400px",
		endValue = "0px",
		durationOpen = 400,
		durationClose = 350,
		easing = "cubic-bezier(0.25, 1, 0.5, 1)",
	} = options || {};

	// Handling toggle nav
	const openNavbar = () => setIsOpen(true);
	const closeNavbar = () => setIsOpen(false);
	const toggleNavbar = () => setIsOpen((prev) => !prev);

	// Handling Styling Options
	useEffect(() => {
		if (!navRef.current) return;

		if (isOpen) {
			navRef.current.animate(
				[{ [property]: startValue }, { [property]: endValue }],
				{
					duration: durationOpen,
					easing: easing,
					fill: "forwards",
				},
			);
		} else {
			const activeAnimations = navRef.current.getAnimations();
			if (activeAnimations.length === 0) return;
			navRef.current.animate(
				[{ [property]: endValue }, { [property]: startValue }],
				{
					duration: durationClose,
					easing: easing,
					fill: "forwards",
				},
			);
		}
	}, [
		isOpen,
		property,
		startValue,
		endValue,
		durationOpen,
		durationClose,
		easing,
	]);

	// Handling click outside effect
	useEffect(() => {
		if (!isOpen) return;

		const handleClickOutside = (event: MouseEvent) => {
			if (navRef.current && !navRef.current.contains(event.target as Node)) {
				closeNavbar();
			}
		};

		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [isOpen]);

	return { isOpen, openNavbar, closeNavbar, toggleNavbar, navRef };
};
