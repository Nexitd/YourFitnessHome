import React from "react";
import { Card, Col, Row } from "antd";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import img1 from "../../assets/images/About/imgonline-com-ua-Res.webp";
import img2 from "../../assets/images/About/d611b4989afdae2b30aaf4c537e4f0a6.jpg";
import img3 from "../../assets/images/About/fitness-step-training-aerobics-sport-concept-athletic-woman-trainer-at-step-doing-aerobic-class-with-steppers_98890-801.jpg";
import img4 from "../../assets/images/About/young-woman-doing-pilates-woman-doing-exercises-with-gym-ball-the-girl-goes-in-for-sports-in-the-gym-healthy-lifestyle-sport-conception_98890-789.jpg";
import img5 from "../../assets/images/About/28dc90.webp";
import { CheckOutlined } from "@ant-design/icons";
import styles from "./About.module.css";

const About = () => {
  const { Meta } = Card;
  return (
    <>
      <Header />
      <div className={styles.content}>
        <div className={styles.about}>
          <div className={styles.aboutItem}>
            <h2 className="title">О ПРОЕКТЕ</h2>
            <p className={styles.aboutText}>
              Наш проект направлен на похудение, который включает в себя 5
              программ, состоящих из подробного план тренировок и питания для
              занятий в домашних условиях. Данные программы помогут тебе
              похудеть и привести себя в форму, не выходя из дома. Они заменят
              тебе персонального тренера, помогут тебе на каждой тренировке и в
              каждом упражнении, чтобы прийти к результату как можно быстрей.
            </p>
          </div>
          <div className={styles.aboutItem}>
            <div className={styles.image}>
              <img src={img1} alt="" />
            </div>
            <div className={styles.text}>
              <p className={styles.aboutText}>
                Наш проект ориентирован на то, чтобы тренировки проходили
                эффективно и без каких-либо сложностей и ограничений. Формат
                тренировок простой и удобный, всё, что тебе нужно для занятий
                это: доступ к интернету, пространство 2 на 2 метра и минимальный
                инвентарь.
              </p>
              <p className={styles.aboutText}>
                Ты можешь выбрать любую подходящую тебе программу .Наши
                программы отличаются подробным и универсальным планом питания,
                который не включает в себя экзотики. Он Покажет, как можно
                вкусно и правильно питаться, чтобы иметь красивую фигуру и
                чувствовать себя комфортно в своём теле. Всё, что тебе
                необходимо это соблюдать план питания и тренировок строго по
                нашей программе и тогда результат не заставит себя ждать!
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

        <div className={styles.programm}>
          <h2 className="title">Для кого наша программа?</h2>
          <p className={styles.programmText}>
            Все занятия подобраны с учетом домашних условий и разнообразных
            нагрузок
          </p>

          <div className={styles.programmCards}>
            <Row gutter={[15, 16]}>
              <Col span={8} style={{ display: "flex", alignItems: "stretch" }}>
                <Card cover={<img alt="" src={img2} />}>
                  <Meta
                    title="Кто хочет привести себя в форму"
                    description="Улучшаем гибкость и осанку, расслабляем мышцы и стремимся к идеальному прессу"
                  />
                </Card>
              </Col>
              <Col span={8} style={{ display: "flex", alignItems: "stretch" }}>
                <Card cover={<img alt="" src={img3} />}>
                  <Meta
                    title="Кто имеет опыт в фитнесе"
                    description="Держи себя в форме, не выходя из дома"
                  />
                </Card>
              </Col>
              <Col span={8} style={{ display: "flex", alignItems: "stretch" }}>
                <Card cover={<img alt="" src={img4} />}>
                  <Meta
                    title="Кто только начинает свой путь в фитнесе"
                    description="Верим в себя и продолжаем работать над собой, чтобы наслаждаться плодами своей работы"
                  />
                </Card>
              </Col>
            </Row>
          </div>
        </div>

        <div className={styles.lessons}>
          <h2 className="title">Что нужно для начала занятий?</h2>

          <div className={styles.lessonsCont}>
            <div className={styles.lessonsItem}>
              <img src={img5} alt="" />
            </div>
            <div className={styles.lessonsItem}>
              <div className={styles.itemSection}>
                <CheckOutlined style={{ fontSize: "32px" }} />
                <div className={styles.itemDescription}>
                  <h4 className={styles.lessonsSubtitle}>Доступ к интернету</h4>
                  <p className={styles.lessonsText}>
                    Вы можете подключиться к онлайн-тренировке с любого
                    устройства: смартфона, ноутбука или smart.tv.
                  </p>
                </div>
              </div>
              <div className={styles.itemSection}>
                <CheckOutlined style={{ fontSize: "32px" }} />
                <div className={styles.itemDescription}>
                  <h4 className={styles.lessonsSubtitle}>
                    Пространство 2 на 2 метра
                  </h4>
                  <p className={styles.lessonsText}>
                    Минимальное пространство, в котором можно установить ноутбук
                    или смартфон на расстоянии 1,5–2 метра от вас.
                  </p>
                </div>
              </div>
              <div className={styles.itemSection}>
                <CheckOutlined style={{ fontSize: "32px" }} />
                <div className={styles.itemDescription}>
                  <h4 className={styles.lessonsSubtitle}>
                    Минимальный инвентарь (опционально)
                  </h4>
                  <p className={styles.lessonsText}>
                    Отлично, если есть коврик для фитнеса и гантели. Если нет —
                    можно их заменить пледом или ковром и бутылками с водой.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
