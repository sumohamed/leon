import styles from "./shared.module.css";

interface sectionHeaderProps {
	title: string;
	desc: string;
	sectionId: string;
	styleData?: string;
}

export const SectionHeader = ({
	title,
	desc,
	sectionId,
	styleData = "light",
}: sectionHeaderProps) => {
	return (
		<div className={styles.sectionHeader}>
			<h2 className={styles.title} id={sectionId} data-style={styleData}>
				{title}
			</h2>
			<p className={styles.description}>{desc}</p>
		</div>
	);
};
