import styles from "./layout.module.css";
export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<p className={styles.footerInfo}>
				&copy; 2019 - <span className={styles.author}>Leon</span>,All Right
				Reserved
			</p>
			<p className={styles.footerInfo}>
				Designed by <span className={styles.author}>sally mohamed</span>
			</p>
		</footer>
	);
};
