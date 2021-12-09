import React from "react";
import { InstagramOutlined, WhatsAppOutlined } from "@ant-design/icons";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerItems}>
          <div className={styles.item}>
            <h2 className={styles.title}>Контакты</h2>
            <p className={styles.text}>
              Следите за нами в социальных сетях, мы будем рады обратной связи и
              вашим вопросам
            </p>
          </div>
          <div className={styles.item}>
            <a
              href='https://wa.me/89182381035'
              target='_blank'
              rel='noopener noreferrer'>
              <WhatsAppOutlined style={{fontSize: 36}}/>
            </a>
            <a
              href='https://www.instagram.com/sport.home.fitness/?hl=ru'
              target='_blank'
              rel='noopener noreferrer'>
              <InstagramOutlined style={{fontSize: 36}}/>
            </a>
          </div>
        </div>
        <p className={styles.footerText}>Все права защищены 2021</p>
      </div>
    </div>
  );
};

export default Footer;
