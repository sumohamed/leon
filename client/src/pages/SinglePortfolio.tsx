import { useParams } from "react-router-dom";
import { portfolioData } from "../assets";
import styles from "./singlePortfolio.module.css";

export const SinglePortfolio = () => {
	const { id } = useParams<{ id: string }>();
	const card = portfolioData.find((item) => item.id === id);
	if (!card) {
		return <div className="container">Project not found!</div>;
	}

	return (
		<>
			<section
				className={styles.portHeader}
				style={{ backgroundImage: `url(${card.mainImage})` }}
			>
				<div className={styles.content}>
					<span className={styles.category}>{card.category}</span>
					<h2 className={styles.title}>{card.title}</h2>
				</div>
			</section>

			<section className={styles.portBody}>
				<div className="container">
					<div className={styles.portfolio}>
						{card.slots?.map((slot, index) => {
							if (slot.type === "text_only") {
								return (
									<div className={styles.portInfo}>
										<div key={index} className={styles.portDesc}>
											<p className={styles.textOne}>{slot.text01}</p>
											<p className={styles.textTwo}>{slot.text02}</p>
										</div>
										<ul className={styles.portDetails}>
											<li className={styles.item}>
												<span className={styles.itemLabel}>
													category
												</span>
												<span className={styles.itemLabelDesc}>
													{card.category}
												</span>
											</li>
											<li className={styles.item}>
												<span className={styles.itemLabel}>
													author
												</span>
												<span className={styles.itemLabelDesc}>
													{card.author}
												</span>
											</li>
											<li className={styles.item}>
												<span className={styles.itemLabel}>
													year
												</span>
												<span className={styles.itemLabelDesc}>
													{card.year}
												</span>
											</li>
										</ul>
									</div>
								);
							}

							if (slot.type === "image_only") {
								return (
									<div key={index} className={styles.portMainImage}>
										<img
											src={slot.image}
											className={styles.image}
											alt={card.title}
										/>
									</div>
								);
							}

							if (slot.type === "mix_content") {
								return (
									<div key={index} className={styles.portDescription}>
										<div className={styles.content}>
											<p className={styles.text}>{slot.content}</p>
										</div>
										<div className={styles.image}>
											<img
												src={slot.image}
												className={styles.img}
												alt={card.title}
											/>
										</div>
									</div>
								);
							}

							return null;
						})}
					</div>
				</div>
			</section>
		</>
	);
};
