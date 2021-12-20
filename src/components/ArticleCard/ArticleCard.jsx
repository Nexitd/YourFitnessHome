import React from "react";
import "../../assets/styles/images.css"
import styles from "./ArticleCard.module.css";

const ArticleCard = ({ title, body, tags, date }) => {
  return (
    <div className={styles.card}>
      <div className={styles.head}>
        <h2 className={styles.title}>{title}</h2>
      </div>
      <div
        className={styles.body}
        dangerouslySetInnerHTML={{ __html: body }}
      ></div>
      <div className={styles.footer}>
        <span className={styles.footerText}>{tags}</span>
        <span className={styles.footerText}>{date}</span>
      </div>
    </div>
  );
};

export default ArticleCard;
