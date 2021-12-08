import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import { Select } from "antd";
import { getAllArticles } from "../../store/reducers/articlesReducer";
import ArticleCard from "../../components/ArticleCard/ArticleCard";
import Loader from "../../components/Loader/Loader";
import styles from "./Articles.module.css";

const Articles = () => {
  const { articleItems, initialLoading } = useSelector(
    (state) => state.articles
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllArticles());
  }, [dispatch]);

  const { Option } = Select;

  return (
    <div>
      <Loader initialLoading={initialLoading}>
        <div>
          <Select
            mode='multiple'
            placeholder='Please search'
            style={{ width: "300px" }}>
            {articleItems.map((card) => (
              <Option key={card.tags}>{card.tags}</Option>
            ))}
          </Select>
        </div>
        {articleItems.length ? (
          articleItems.map((card) => {
            return (
              <ArticleCard
                key={card.id}
                title={card.title}
                body={card.body}
                date={moment(card.date).format("DD.MM.YYYY")}
                tags={card.tags}
              />
            );
          })
        ) : (
          <h1>No data</h1>
        )}
      </Loader>
    </div>
  );
};

export default Articles;
