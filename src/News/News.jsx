import { useEffect, useState } from "react";
import NewsDiv from "./NewsDiv";

const News = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch("news.json");
        const data = await res.json()
        setNews(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchNews();
  }, []);
  return (
    <div>
      {news.map((item) => (
        <NewsDiv key={item?._id} item={item}></NewsDiv>
      ))}
    </div>
  );
};

export default News;
