import axios from 'axios';

const API_KEY = 'bc7ddf6369774b6bb93aaafb09a18bb2';

/**
 * We can set a centralised Axios Client to ease use of all of API endpoints
 * along with we can setup request and response interceptors to auto addition of token to request
 * and response.
 *
 * But as this example project will only have one single API endpoint I'm skipping
 * this steps. Still a example can be like below;
 *
 const baseURL = devBaseUrl;

 const Axios = axios.create({ baseURL });

  Axios.interceptors.request.use(
  (request) => {
    if (excludedUrls.includes(request.url)) {
     return request;
    }
    request.headers['x-digital-api-key'] = 1234;
   return request;
  },
  (err) => Promise.reject(err)
);
 */

export const fetchAllNews = async () => {
  const res = await axios.get(
    `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${API_KEY}`
  );
  return res.data;
};

export const fetchTopNews = async () => {
  const res = await axios.get(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
  );
  return res.data;
};
