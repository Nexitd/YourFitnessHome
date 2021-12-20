import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import img1 from "../../assets/images/Certificate/1.jpeg";
import img2 from "../../assets/images/Certificate/13.jpeg";
import img3 from "../../assets/images/Certificate/2.jpeg";
import img4 from "../../assets/images/Certificate/3.jpeg";
import img5 from "../../assets/images/Certificate/31.jpeg";
import img6 from "../../assets/images/Certificate/5.jpeg";
import img7 from "../../assets/images/Certificate/GP6IFSp_t00.webp";
import img8 from "../../assets/images/Certificate/X3VRYJY6Q-w.webp";
import img9 from "../../assets/images/Certificate/zTx4wqpXyPc.webp";
import { Col, Row } from "antd";
import styles from "./Sertificate.module.css";

const Sertificate = () => {
  return (
    <div>
      <Header />
      <div className={styles.main}>
        <h2 className="title">Сертификаты</h2>
        <p className={styles.text}>
          С вами будут работать только опытные специалисты, поэтому тренировки и
          программу питания составляют исключительно сертифицированные
          специалисты
        </p>

        <div className={styles.cards}>
          <Row gutter={[10, 16]}>
            <Col xl={8} lg={12} xs={24}>
              <img src={img1} alt="" />
            </Col>
            <Col xl={8} lg={12} xs={24}>
              <img src={img2} alt="" />
            </Col>
            <Col xl={8} lg={12} xs={24}>
              <img src={img3} alt="" />
            </Col>
            <Col xl={8} lg={12} xs={24}>
              <img src={img4} alt="" />
            </Col>
            <Col xl={8} lg={12} xs={24}>
              <img src={img5} alt="" />
            </Col>
            <Col xl={8} lg={12} xs={24}>
              <img src={img6} alt="" />
            </Col>
            <Col xl={8} lg={12} xs={24}>
              <img src={img7} alt="" />
            </Col>
            <Col xl={8} lg={12} xs={24}>
              <img src={img8} alt="" />
            </Col>
            <Col xl={8} lg={12} xs={24}>
              <img src={img9} alt="" />
            </Col>
          </Row>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Sertificate;
