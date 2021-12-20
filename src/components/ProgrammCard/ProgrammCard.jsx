import React from "react";
import styles from "./ProgrammCard.module.css";

const ProgrammCard = ({ title, textList, price }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h2 className={styles.cardTitle}>{title}</h2>
      </div>
      <ul className={styles.cardList}>
        {textList.map((item, index) => {
          return (
            <li key={index} className={styles.listItem}>
              {item}
            </li>
          );
        })}
      </ul>
      <div className={styles.cardFooter}>
        <p className={styles.footerText}>Цена: {price} ₽</p>
      </div>
    </div>
  );
};

export default ProgrammCard;
