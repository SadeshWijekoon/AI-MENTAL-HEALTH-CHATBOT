// pages/Feed.js
import { useEffect, useState } from 'react';
import axios from 'axios';

const Feed = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Replace with your NewsAPI key
  const API_KEY = '55929c170ad04311998247bf00a70158';
  const API_URL = `https://newsapi.org/v2/everything?q=mental health&apiKey=${API_KEY}`;

  useEffect(() => {
    // Fetch articles from NewsAPI
    const fetchArticles = async () => {
      try {
        const response = await axios.get(API_URL);
        setArticles(response.data.articles);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchArticles();
  }, [API_URL]);

  if (loading) {
    return <div className="p-4">Loading articles...</div>;
  }

  if (error) {
    return <div className="p-4 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Mental Health Articles</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {articles.map((article, index) => (
          <div key={index} className="border p-4 rounded-lg shadow-md">
            {article.urlToImage && (
              <img
                src={article.urlToImage}
                alt={article.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
            )}
            <h2 className="text-xl font-semibold mt-4">{article.title}</h2>
            <p className="text-gray-600">{article.description}</p>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Read more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feed;