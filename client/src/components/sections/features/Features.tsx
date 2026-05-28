import styles from "./features.module.css";
import { features } from "../../../assets";

export const Features = () => {
	return (
		<section className={styles.features} aria-labelledby="features">
			<h2 id="features" className="sr-only">
				features section
			</h2>
			<div className={styles.grid}>
				{features.map((feature) => {
					const Icon = feature.icon;
					return (
						<div key={feature.id} className={styles.card}>
							<span className={styles.icon}>
								<Icon />
							</span>
							<h3 className={styles.title}>{feature.title}</h3>
							<p className={styles.description}>{feature.description}</p>
						</div>
					);
				})}
			</div>
		</section>
	);
};
