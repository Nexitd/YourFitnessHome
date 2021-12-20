import React, { useLayoutEffect } from "react";
import { Row, Col, Input, Select, Button, Form } from "antd";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Footer from "../../components/Footer";
import Header from "../../components/Header/Header";
import {
  getFullProgramms,
  sendCourseData,
} from "../../store/reducers/programmsReducer";
import ProgrammCard from "../../components/ProgrammCard/ProgrammCard";
import styles from "./Programms.module.css";

const Programms = () => {
  const { fullProgramms } = useSelector((state) => state.programms);
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const { Option } = Select;

  const options = fullProgramms.map((item) => {
    return (
      <Option key={item.title} value={item.title}>
        {item.title}
      </Option>
    );
  });

  const sendPayData = (values) => {
    dispatch(sendCourseData(values));
    form.resetFields();
  };

  useLayoutEffect(() => {
    dispatch(getFullProgramms());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <div className={styles.programms}>
        <h2 className="title">Наши программы</h2>

        <p className={styles.programmsText}>
          Выбери подходящую себе программу и получи гарантированный результат
          вместе с нами! Первые результаты уже после 1 недели ! Попробую пробную
          версию и выбери для себя подходящую программу Для того, чтобы
          приобрести программу заполни форму ниже
        </p>

        <div className={styles.programmsCont}>
          <Row gutter={[15, 15]}>
            {fullProgramms.map((prog) => {
              return (
                <Col
                  key={prog.id}
                  span={8}
                  style={{ display: "flex", alignItems: "stretch" }}
                >
                  <ProgrammCard
                    title={prog.title}
                    price={prog.price}
                    textList={prog.text}
                  />
                </Col>
              );
            })}
          </Row>
        </div>

        <Form
          layout="vertical"
          onFinish={sendPayData}
          className={styles.form}
          form={form}
        >
          <Form.Item
            name="name"
            label="Name"
            rules={[
              {
                message: "Это поле обязательно для заполнения",
                required: true,
              },
            ]}
          >
            <Input  />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                message: "Это поле обязательно для заполнения",
                required: true,
              },
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="course"
            label="Course"
            rules={[
              {
                message: "Это поле обязательно для заполнения",
                required: true,
              },
            ]}
          >
            <Select >{options}</Select>
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit">Оставить заявку</Button>
          </Form.Item>
        </Form>
      </div>
      <Footer />
    </div>
  );
};

export default Programms;
