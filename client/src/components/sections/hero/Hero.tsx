import styles from "./hero.module.css";

export const Hero = () => {
	return (
		<section className={styles.hero}>
			<div className={styles.heroContent}>
				<h1 className={styles.title}>Hello There!</h1>
				<p className={styles.desc}>
					We are Leon - Super Creative & Minimal Agency Web Template
				</p>
			</div>
		</section>
	);
};
