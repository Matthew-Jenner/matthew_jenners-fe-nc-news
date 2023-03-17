// AllArticles.js
import { useEffect, useState } from "react";
import { getAllArticles } from "../api";
import ArticleCard from "./ArticleCard";
import { useParams, useSearchParams } from "react-router-dom";

function AllArticles() {
  const [allArticles, setAllArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedSortBy, setSelectedSortBy] = useState("created_at");
  const [selectedOrder, setSelectedOrder] = useState("DESC");
  const [searchParams, setSearchParams] = useSearchParams();
  const { topic } = useParams();

  const sortByQuery = searchParams.get("sort_by");

  useEffect(() => {
    setIsLoading(true);
    getAllArticles(topic, selectedSortBy, selectedOrder).then((articlesFromAPI) => {
      setAllArticles(articlesFromAPI);
      setIsLoading(false);
    });
  }, [topic, selectedSortBy, selectedOrder]);

  const handleSortByChange = (event) => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("sort_by", event.target.value);
    setSearchParams(newSearchParams);
    setSelectedSortBy(event.target.value.split(" ")[0]);
    setSelectedOrder(event.target.value.split(" ")[1]);
  };

  return (
    <main>
      <h2>Articles</h2>
      <select value={selectedSortBy + " " + selectedOrder} onChange={handleSortByChange}>
        <option disabled value="">
          Sort the articles
        </option>
        <option value="votes ASC">Votes ASC</option>
        <option value="votes DESC">Votes DESC</option>
        <option value="created_at ASC">Created at ASC</option>
        <option value="created_at DESC">Created at DESC</option>
      </select>
      {isLoading ? (
        <h1>Loading....</h1>
      ) : (
        <ul>
          {allArticles.map((article) => {
            return <ArticleCard key={article.article_id} article={article} />;
          })}
        </ul>
      )}
    </main>
  );
}

export default AllArticles;
