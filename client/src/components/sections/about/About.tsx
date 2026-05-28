import { assets } from "../../../assets";
import { SectionHeader } from "../shared/SectionHeader";
import styles from "./about.module.css";
export const About = () => {
	return (
		<section aria-labelledby="about" className={styles.about}>
			<SectionHeader
				sectionId="about"
				title="About"
				desc="Learn more about us"
			/>
			<div className={styles.aboutBody}>
				<div className="container">
					<div className={styles.aboutContent}>
						<div className={styles.aboutImg}>
							<img src={assets.aboutImg} alt="About Us" />
						</div>
						<div className={styles.aboutText}>
							<p className={styles.firstParagraph}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit,
								sed do eiusmod tempor incididunt ut labore et dolore
								magna aliqua. Ut enim ad minim veniam, quis nostrud
								exercitation ullamco laboris nisi ut aliqui
							</p>
							<p className={styles.secondParagraph}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit,
								sed do eiusmod tempor incididunt ut labore et dolore
								magna aliqua. Ut enim ad minim veniam, quis nostrud
								exercitation ullamco laboris nisi ut aliqu
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
