import React from "react";
import styles from "./ArticleCard.module.css";

const ArticleCard = ({ title, body, tags, date }) => {
	const splitedBody = body.split("=")[2];
	const bodyText = body.split("<")[0];
	let image;

	if (splitedBody !== undefined) {
		image = splitedBody.substring(1, splitedBody.length - 2);
	}

	return (
		<div className={styles.card}>
			<div className={styles.head}>
				<h2 className={styles.title}>{title}</h2>
			</div>
			<div className={styles.body}>
				<p>{bodyText}</p>
				<img src={image} alt="" style={{width: 150}}/>
			</div>
			<div className={styles.footer}>
				<span className={styles.footerText}>{tags}</span>
				<span className={styles.footerText}>{date}</span>
			</div>
		</div>
	);
};

export default ArticleCard;
