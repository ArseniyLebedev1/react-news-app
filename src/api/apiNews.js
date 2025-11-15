import axios from "axios";

import data from "../newsData/latest-news.json";

const BASE_URL = data.news;


export const getNews = async () => {
  // try {
  //   const response = await axios.get(`${BASE_URL[0]}`);
  return data.news;
  // } catch (error) {
  //   console.error(error);
  // }
};
