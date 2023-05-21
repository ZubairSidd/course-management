import { React, useEffect, useState } from "react";
import { getAuthors } from "../api/authorApi";
import styles from "../css/style.css";

function HomePage() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    getAuthors().then((_authors) => setAuthors(_authors));
  }, []);

  const featuredCourses = [
    {
      id: 1,
      title: "React - The Complete Guide",
      description: "Master React.js and build real-world applications.",
      rating: 4.8,
    },
    {
      id: 2,
      title: "Modern React with Redux",
      description: "Learn React with Redux for state management.",
      rating: 4.6,
    },
    {
      id: 3,
      title: "React Native - The Practical Guide",
      description: "Create native mobile apps using React Native.",
      rating: 4.9,
    },
  ];

  const latestNews = [
    {
      id: 1,
      title: "React Hooks - A Powerful Feature",
      description:
        "Learn about React Hooks and how they simplify state management in functional components.",
      date: "May 15, 2023",
    },
    {
      id: 2,
      title: "React Router - Navigating in React Apps",
      description:
        "Discover how to handle routing and navigation in React applications.",
      date: "May 10, 2023",
    },
    {
      id: 3,
      title: "Next.js - Building Server-side Rendered React Apps",
      description:
        "Explore Next.js and learn how to build server-side rendered React apps.",
      date: "May 5, 2023",
    },
  ];

  return (
    <div className="homepage-container">
      <main className="main-content">
        <section className="section">
          <h2 className="section-title">Featured Courses</h2>
          <ul className="course-list">
            {featuredCourses.map((course) => (
              <li key={course.id} className="course-item">
                <h3 className="course-title">{course.title}</h3>
                <p className="course-description">{course.description}</p>
                <p className="course-rating">Rating: {course.rating}</p>
              </li>
            ))}
          </ul>
        </section>
        <section className="section">
          <h2 className="section-title">Best Authors</h2>
          <ul className="news-list">
            {authors.slice(0, 3).map((author) => (
              <li key={author.id} className="news-item">
                <h3 className="news-title">{author.name}</h3>
              </li>
            ))}
          </ul>
        </section>
        <section className="section">
          <h2 className="section-title">Latest News</h2>
          <ul className="news-list">
            {latestNews.map((news) => (
              <li key={news.id} className="news-item">
                <h3 className="news-title">{news.title}</h3>
                <p className="news-description">{news.description}</p>
                <p className="news-date">Date: {news.date}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default HomePage;
