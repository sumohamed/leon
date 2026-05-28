import styles from "./services.module.css";
import { SectionHeader } from "../shared/SectionHeader";
import { assets, servicesData } from "../../../assets";
export const Services = () => {
	return (
		<section aria-labelledby="services" className={styles.services}>
			<SectionHeader
				sectionId="services"
				title="services"
				desc="Don't be busy, be productive"
			/>
			<div className="container">
				<section className={styles.servicesBody}>
					<div className={styles.servicesGroup}>
						{servicesData.map((srv) => (
							<article key={srv.id} className={styles.card}>
								<div className={styles.cardImage}>
									<img src={srv.icon} alt={srv.title} />
								</div>
								<div className={styles.cardBody}>
									<h3 className={styles.title}>{srv.title}</h3>
									<p className={styles.desc}>{srv.description}</p>
								</div>
							</article>
						))}
					</div>
					<div className={styles.servicesImg}>
						<img src={assets.servicesImg} alt="services" />
					</div>
				</section>
			</div>
		</section>
	);
};
