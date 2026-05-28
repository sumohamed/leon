import { socialLinks } from "../../../assets";
import { SectionHeader } from "../shared/SectionHeader";
import styles from "./contact.module.css";
export const Contact = () => {
	return (
		<section className={styles.contact} aria-labelledby="contact">
			<SectionHeader
				sectionId="contact"
				title="Contact"
				desc="We are born to create"
				styleData={"dark"}
			/>
			<div className={styles.contactBody}>
				<div className="container">
					<div className={styles.conactInfo}>
						<h3 className={styles.title}>
							Feel free to drop us a line at:
						</h3>
						<p className={styles.email}>leonagency@mail.com</p>

						<div className={styles.socialLinks}>
							<span className={styles.socialTitle}>
								Find us on social networks:
							</span>
							<ul className={styles.icons}>
								{socialLinks.map((link) => (
									<li key={link.label}>
										<img
											className={styles.socialIcon}
											src={link.icon}
											aria-label={link.label}
											alt={link.label}
										/>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
