import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Row, Col, Card } from "antd";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import img1 from "../../assets/images/Certificate/GP6IFSp_t00.webp";
import img2 from "../../assets/images/Certificate/X3VRYJY6Q-w.webp";
import img3 from "../../assets/images/Certificate/zTx4wqpXyPc.webp";
import img4 from "../../assets/images/Main/d8f8ce1b355297f51463.webp";
import styles from "./Main.module.css";

const Main = () => {
  const history = useHistory();

  const changePage = (page) => {
    history.push(`/${page}`);
  };

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
          <Button onClick={() => changePage("programms")}>
            Попробовать бесплатно
          </Button>
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
        <Button className={styles.btn} onClick={() => changePage("about")}>
          Узнать больше
        </Button>
      </div>
      <div className={styles.programss}>
        <h2 className='title'>Наши программы</h2>
        <p className={styles.programssText}>
          Выбери подходящую себе программу и получи гарантированный результат
          вместе с нами! Первые результаты уже после 1 недели ! Попробую пробную
          версию и выбери для себя подходящую программу Для того, чтобы
          приобрести программу переходи по ссылке ниже
        </p>
        <div className={styles.programssCont}>
          <Row gutter={[15, 15]}>
            <Col span={8} style={{ display: "flex", alignItems: "stretch" }}>
              <Card title='Программы питания на 21:' style={{ width: "100%" }}>
                <ul>
                  <li className={styles.cardText}>
                    Безлактозная программа питания
                  </li>
                  <li className={styles.cardText}>
                    Вегетарианская программа питания
                  </li>
                </ul>
              </Card>
            </Col>
            <Col span={8} style={{ display: "flex", alignItems: "stretch" }}>
              <Card
                title='Основные программы тренировок и питания:'
                style={{ width: "100%" }}>
                <ul>
                  <li className={styles.cardText}>Тренировки на всё тело</li>
                  <li className={styles.cardText}>
                    Традиционные программы питания на 21 день
                  </li>
                </ul>
              </Card>
            </Col>
            <Col span={8} style={{ display: "flex", alignItems: "stretch" }}>
              <Card title='Программа «Психология похудения»' style={{ width: "100%" }}>
                <ul>
                  <li className={styles.cardText}>
                    А также дополнительные полезные материалы бесплатно от
                    нас!
                  </li>
                </ul>
              </Card>
            </Col>
          </Row>
        </div>
        <Button onClick={() => changePage("programms")} style={{margin: "30px 0"}}>Подробнее</Button>
      </div>
      <div className={styles.reviews}>
        <h2 className='title'>Отзывы наших клиентов</h2>
        <div className={styles.reviewsContainer}>
          <Row gutter={[15, 15]}>
            <Col span={8} style={{ display: "flex", alignItems: "stretch" }}>
              <Card
                title='Элина'
                style={{ width: "100%" }}
                hoverable
                onClick={() => changePage("about")}>
                <p className={styles.cardText}>
                  Благодарю Вас за советы, за мотивацию, за правильное
                  направление на здоровую жизнь…Мой результат 4 кг., я довольна.
                  Буду продолжать в таком духе, и месяцев через 6 таки, приведу
                  своё тело в полный порядок.
                </p>
              </Card>
            </Col>
            <Col span={8} style={{ display: "flex", alignItems: "stretch" }}>
              <Card
                title='Светлана'
                style={{ width: "100%" }}
                hoverable
                onClick={() => changePage("about")}>
                <p className={styles.cardText}>
                  Я бессовестно нарушила режим с субботы. Но результат вижу и
                  пройду все задания, и буду дальше придерживаться занятий и
                  питания, потому что результат увидела. Несколько уменьшились
                  объёмы, изменилась структура тела. Мышцы стали работать!
                  Шестичасовой сплав на байдарках (была инструктором, приглашаю)
                  в субботу не привёл к боли в спине и плечевом поясе!))) Так
                  что ОГРОМНОЕ СПАСИБО ОРГАНИЗАТОРАМ
                </p>
              </Card>
            </Col>
            <Col span={8} style={{ display: "flex", alignItems: "stretch" }}>
              <Card
                title='Олеся'
                style={{ width: "100%" }}
                hoverable
                onClick={() => changePage("about")}>
                <p className={styles.cardText}>
                  Хотелось бы добавить. Тренировки отличные. НЕ сильно
                  выматывают, но эффективные. Мышцы начали просыпаться. Мне все
                  понравилось. Иду на продолжение и рекомендую ВАС другим.
                  Спасибо
                </p>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
      <div className={styles.certificate}>
        <h2 className='title'>Компетентность</h2>
        <p className={styles.certificateText}>
          Тренировки и программу питания составляют исключительно
          сертифицированные специалисты
        </p>
        <div className={styles.certificateContainer}>
          <img src={img1} alt='' onClick={() => changePage("sertificate")} />
          <img src={img2} alt='' onClick={() => changePage("sertificate")} />
          <img src={img3} alt='' onClick={() => changePage("sertificate")} />
        </div>
      </div>
      <div className={styles.guarantees}>
        <h2 className='title'>Наши гарантии</h2>
        <p className={styles.guaranteesText}>
          Гарантируем эффективный результат за 4 недели
        </p>
        <div className={styles.guaranteesContainer}>
          <div className={styles.guaranteesImage}>
            <img src={img4} alt='' />
          </div>
          <div className={styles.guaranteesDescr}>
            <h3 className={styles.subtitle}>
              Почему вы не рискуете потерять свои средства?
            </h3>
            <p className={styles.guaranteesText}>
              Если вас не устроит платная версия программы, вы можете
              осуществить возврат денежных средств, объяснив причину возврата.
              Наши клиенты всегда остаются довольны своими результатами и следят
              за постоянными обновлениями
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
