import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Calendar, Newspaper, ArrowLeft } from "lucide-react";

const News = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const article = location.state?.article;

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  if (!article) {
    return (
      <div className="max-w-2xl mx-auto p-6 text-center">
        <h2 className="text-xl font-semibold text-red-600">No article found!</h2>
        <p className="text-gray-500 mt-2">Please return to Info Center and select a news article.</p>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 px-4 py-2 bg-amber-600 text-white rounded hover:bg-amber-700"
        >
          <ArrowLeft className="inline-block mr-1" /> Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto w-150 px-6 py-12">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-amber-700 hover:underline flex items-center"
      >
        <ArrowLeft className="h-4 w-4 mr-1" />
        Back to News List
      </button>

      <h1 className="text-3xl font-bold text-gray-900 mb-4">{article.title}</h1>

      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
        <div className="flex items-center space-x-1">
          <Calendar className="h-4 w-4" />
          <span>{formatDate(article.publishedAt)}</span>
        </div>
        <div className="flex items-center space-x-1">
          <Newspaper className="h-4 w-4" />
          <span>{article.source?.name || "Unknown Source"}</span>
        </div>
      </div>

      {article.urlToImage && (
        <img
          src={article.urlToImage}
          alt="News"
          className="rounded-lg shadow mb-6 w-full max-h-[500px] object-cover"
        />
      )}

      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        {article.description || "No description provided."}
      </p>

      {article.content && (
        <div className="text-base text-gray-800 mb-8">{article.content}</div>
      )}

      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold"
      >
        Read Full Article
      </a>
    </div>
  );
};

export default News;
