import React from "react";
import logo from "../../assets/images/Header/uTe-tB3zTb8.jpg";
import { Link } from "react-router-dom";
import { Button } from "antd";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerCont}>
        <div className={styles.logo}>
          <img src={logo} alt='' />
        </div>
        <div className={styles.menu}>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <Link className={styles.listLink} to='/'>
                Главная
              </Link>
            </li>
            <li className={styles.listItem}>
              <Link className={styles.listLink} to='/about'>
                О нас
              </Link>
            </li>
            <li className={styles.listItem}>
              <Link className={styles.listLink} to='/articles'>
                Наши Статьи
              </Link>
            </li>
            <li className={styles.listItem}>
              <Link className={styles.listLink} to='/anket'>
                Подбор программы
              </Link>
            </li>
            <li className={styles.listItem}>
              <Link className={styles.listLink} to='/price'>
                Цены
              </Link>
            </li>
            <li className={styles.listItem}>
              <Link className={styles.listLink} to='/sertifites'>
                Сертификаты
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.login}>
          <Button>Войти</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
