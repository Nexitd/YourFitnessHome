import React, { useLayoutEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import { Col, Row, Select } from "antd";
import {
  filterTags,
  getAllArticles,
} from "../../store/reducers/articlesReducer";
import ArticleCard from "../../components/ArticleCard/ArticleCard";
import Loader from "../../components/Loader/Loader";
import Header from "../../components/Header/Header";
import styles from "./Articles.module.css";

const Articles = () => {
  const { articleItems, initialLoading } = useSelector(
    (state) => state.articles
  );
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(getAllArticles());
  }, [dispatch]);

  const addFilter = (value) => {
    if (value === "all") {
      dispatch(getAllArticles());
      return
    }

    dispatch(filterTags(value));
  };

  const { Option } = Select;

  return (
    <div>
      <Header />
      <Loader initialLoading={initialLoading}>
        <div className={styles.container}>
          <Select
            mode="multiply"
            placeholder="Please search"
            style={{ width: "300px" }}
            onChange={addFilter}
          >
            <Option key="all" value="all">Все статьи</Option>
            {articleItems.map((card) => (
              <Option key={card.tags}>{card.tags}</Option>
            ))}
          </Select>
        </div>
        {articleItems.length || articleItems !== undefined ? (
          <div style={{ padding: "0 15px" }}>
            <Row gutter={[15, 15]}>
              {articleItems.map((card) => {
                return (
                  <Col
                    key={card.id}
                    xl={8}
                    lg={12}
                    xs={24}
                    style={{ display: "flex", alignItems: "stretch" }}
                  >
                    <ArticleCard
                      title={card.title}
                      body={card.body}
                      date={moment(card.date).format("DD.MM.YYYY")}
                      tags={card.tags}
                    />
                  </Col>
                );
              })}
            </Row>
          </div>
        ) : (
          <h1>No data</h1>
        )}
      </Loader>
    </div>
  );
};

export default Articles;
