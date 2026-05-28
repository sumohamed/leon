import styles from "./layout.module.css";
import { assets, MenuIcon } from "../../assets";
import { Navbar } from "./Navbar";
import { useNavigation } from "../../features/useNavigation";

export const Header = () => {
	const { openNavbar, closeNavbar, navRef } = useNavigation({
		property: "right",
		startValue: "-400px",
		endValue: "0px",
	});

	const handleOpenNavbar = (e: React.MouseEvent) => {
		e.stopPropagation();
		openNavbar();
	};

	return (
		<header className={styles.header}>
			<div className="container">
				<div className={styles.navHead}>
					<img src={assets.logo} alt="leon" className={styles.logo} />
					<button className={styles.toggleMenu} onClick={handleOpenNavbar}>
						<MenuIcon />
					</button>
				</div>
			</div>
			<Navbar ref={navRef} closeNavbar={closeNavbar} />
		</header>
	);
};
