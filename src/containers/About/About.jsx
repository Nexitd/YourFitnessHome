import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import img1 from "../../assets/images/About/imgonline-com-ua-Res.webp";
import styles from "./About.module.css";

const About = () => {
  return (
    <>
      <Header />

      <div className={styles.about}>
        <div className={styles.aboutItem}>
          <h2 className='title'>О ПРОЕКТЕ</h2>
          <p className={styles.aboutText}>
            Наш проект направлен на похудение, который включает в себя 5
            программ, состоящих из подробного план тренировок и питания для
            занятий в домашних условиях. Данные программы помогут тебе похудеть
            и привести себя в форму, не выходя из дома. Они заменят тебе
            персонального тренера, помогут тебе на каждой тренировке и в каждом
            упражнении, чтобы прийти к результату как можно быстрей.
          </p>
        </div>
        <div className={styles.aboutItem}>
          <div className={styles.image}>
            <img src={img1} alt='' />
          </div>
          <div className={styles.text}>
            <p className={styles.aboutText}>
              Наш проект ориентирован на то, чтобы тренировки проходили
              эффективно и без каких-либо сложностей и ограничений. Формат
              тренировок простой и удобный, всё, что тебе нужно для занятий это:
              доступ к интернету, пространство 2 на 2 метра и минимальный
              инвентарь.
            </p>
            <p className={styles.aboutText}>
              Ты можешь выбрать любую подходящую тебе программу .Наши программы
              отличаются подробным и универсальным планом питания, который не
              включает в себя экзотики. Он Покажет, как можно вкусно и правильно
              питаться, чтобы иметь красивую фигуру и чувствовать себя комфортно
              в своём теле. Всё, что тебе необходимо это соблюдать план питания
              и тренировок строго по нашей программе и тогда результат не
              заставит себя ждать!
            </p>
            <p className={styles.aboutText}>
              Как выглядит наша программа? Наша программа — это несколько
              файлов, которыми вы можете пользоваться в любой точке мира и с
              любых устройств. Мы предоставляем бесплатную версию тренировок и
              питания, если данная программа вас заинтересует, то после её
              ознакомления мы можете приобрести полную версию. Не устроила
              программа? Вернём вам средства. Все материалы, мы вам высылаем в
              любом, удобном для вас формате.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
