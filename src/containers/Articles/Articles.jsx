import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import { getAllArticles } from "../../store/reducers/articlesReducer";
import ArticleCard from "../../components/ArticleCard/ArticleCard";
import styles from "./Articles.module.css";

const Articles = () => {
  const { articleItems } = useSelector((state) => state.articles);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllArticles());
  });

  return (
    <div>
      {articleItems.length ? (
        articleItems.map((card) => (
          <ArticleCard
            title={card.title}
            body={card.body}
            date={moment(card.date).format("DD.MM.YYYY")}
            tags={card.tags}
          />
        ))
      ) : (
        <h1>No data</h1>
      )}
    </div>
  );
};

export default Articles;
