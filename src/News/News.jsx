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
    <div className="">
      {news.map((newsDetails) => (
        <NewsDiv key={newsDetails?._id} newsDetails={newsDetails}></NewsDiv>
      ))}
    </div>
  );
};

export default News;
