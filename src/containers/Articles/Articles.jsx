import React, { useLayoutEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import { Col, Row, Select } from "antd";
import { filterTags, getAllArticles } from "../../store/reducers/articlesReducer";
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
    dispatch(filterTags(value))
  }

  const { Option } = Select;

  return (
    <div>
      <Header />
      <Loader initialLoading={initialLoading}>
        <div className={styles.container}>
          <Select
            placeholder="Please search"
            style={{ width: "300px" }}
            onChange={addFilter}
          >
            {articleItems.map((card) => (
              <Option key={card.tags}>{card.tags}</Option>
            ))}
          </Select>
        </div>
        {articleItems.length ? (
          <Row gutter={[15, 15]}>
            {articleItems.map((card) => {
              return (
                <Col
                  key={card.id}
                  span={8}
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
        ) : (
          <h1>No data</h1>
        )}
      </Loader>
    </div>
  );
};

export default Articles;
