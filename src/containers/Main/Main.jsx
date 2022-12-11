import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import { Button } from "antd";
import styles from "./Main.module.css";
import axiosInstance from "../../api/api";

const Main = () => {
	useEffect(() => {
		axiosInstance.get("get_price.php");
	}, []);

  
	return (
		<div className={styles.container}>
			<Header />
			<div className={styles.containerMain}>
				<div className={styles.mainTextCont}>
					<h2 className={styles.title}>ТРЕНИРУЙСЯ ДОМА</h2>
					<h3 className={styles.subtitle}>УЛУЧШАЙ СЕБЯ И СВОЮ ЖИЗНЬ</h3>
					<p className={styles.mainText}>
						Не трать деньги и время на спортзал! Попробуй бесплатную программу
						тренировок и питания Получи гарантированный результат уже на 2
						недели
					</p>
					<Button>Попробовать бесплатно</Button>
				</div>
				<div className={styles.mainImageCont}></div>
			</div>
			<div className={styles.aboutProject}>
				<h2 className={styles.aboutTitle}>О ПРОЕКТЕ</h2>
				<p className={styles.aboutText}>
					Наш проект направлен на похудение, который включает в себя 5 программ,
					состоящих из подробного план тренировок и питания для занятий в
					домашних условиях. Данные программы помогут тебе похудеть и привести
					себя в форму, не выходя из дома. Они заменят тебе персонального
					тренера, помогут тебе на каждой тренировке и в каждом упражнении,
					чтобы прийти к результату как можно быстрей.
				</p>
				<Button className={styles.btn}>Узнать больше</Button>
			</div>
			<div className={styles.programss}>
				<h2 className="title">Наши программы</h2>
				<p className={styles.programssText}>text</p>
				<div className={styles.programssCont}></div>
				<Button>Подробнее</Button>
			</div>
			<div className={styles.reviews}></div>
		</div>
	);
};

export default Main;
