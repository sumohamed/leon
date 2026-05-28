import { HashLink } from "react-router-hash-link";
import { useState, type RefObject } from "react";
import styles from "./layout.module.css";
import { CloseIcon, navlist } from "../../assets";

interface navbarProps {
	closeNavbar: () => void;
	ref: RefObject<HTMLElement | null>;
}

export const Navbar = ({ closeNavbar, ref }: navbarProps) => {
	const [activePath, setActivePath] = useState("/");

	const handleNavClick = (path: string) => {
		setActivePath(path);
		closeNavbar();

		// 1. - go to home link [with # or / ]
		if (path === "/" || path === "#home" || path === "/#home") {
			// if user already at home scroll to top
			if (window.location.pathname === "/") {
				window.scrollTo({ top: 0, behavior: "smooth" });
			} else {
				// if user in anthor page scroll to top when go back to home
				setTimeout(() => {
					window.scrollTo({ top: 0, behavior: "smooth" });
				}, 100);
			}
		} else {
			// when go to section scroll to section location
			const targetId = path.replace("/", "").replace("#", "");

			setTimeout(() => {
				const element = document.getElementById(targetId);
				if (element) {
					element.scrollIntoView({ behavior: "smooth", block: "start" });
				}
			}, 150);
		}
	};

	return (
		<nav ref={ref} className={styles.navbar}>
			<button onClick={closeNavbar} className={styles.closeNav}>
				<CloseIcon />
			</button>

			<div className={styles.navMenu}>
				{navlist.map((item) => (
					<div key={item.category} className={styles.navCategories}>
						<span className={styles.category}>{item.category}</span>
						<ul className={styles.navlinks}>
							{item.links.map((link) => {
								const fullPath = link.path.startsWith("#")
									? `/${link.path}`
									: link.path;
								return (
									<li key={link.label}>
										<HashLink
											smooth
											target={link.target || "_self"}
											className={`${styles.link} ${activePath === link.path ? styles.active : ""}`}
											to={fullPath}
											onClick={() => handleNavClick(link.path)}
										>
											{link.label}
										</HashLink>
									</li>
								);
							})}
						</ul>
					</div>
				))}
			</div>
			<footer className={styles.navFooter}>&copy; leon.com 2026</footer>
		</nav>
	);
};
