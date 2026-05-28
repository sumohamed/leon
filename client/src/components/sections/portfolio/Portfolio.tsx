import { Link } from "react-router-dom";
import { portfolioData } from "../../../assets";
import { SectionHeader } from "../shared/SectionHeader";
import styles from "./portfolio.module.css";

export const Portfolio = () => {
	return (
		<section className={styles.portfolio} aria-labelledby="portfolio">
			<SectionHeader
				sectionId="portfolio"
				title="portfolio"
				desc="if you do it right, it will last forever"
				styleData="dark"
			/>
			<div className={styles.sectionBody}>
				<div className="container">
					<div className={styles.grid}>
						{portfolioData.map((port) => (
							<article key={port.id} className={styles.card}>
								<Link
									to={`/portfolio/${port.id}`}
									className={styles.imageLink}
								>
									<div className={styles.cardImg}>
										<span className={styles.badge}>see more</span>
										<img
											src={port.introImg}
											alt={port.title}
											className={styles.img}
											// click action to go to single page
										/>
									</div>
								</Link>
								<div className={styles.cardBody}>
									<h3 className={styles.title}>{port.title}</h3>
									<p className={styles.description}>{port.introTxt}</p>
								</div>
							</article>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};
