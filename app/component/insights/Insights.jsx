"use client";

import './Insights.css';

const insightsData = [
  {
    id: 1,
    date: "Jan 10, 2024",
    title: "Top Cybersecurity Trends Every Business Should Know in 2024",
    image: "/images/pages/news-insights/image-1.jpg",
    link: "#"
  },
  {
    id: 2,
    date: "Jan 10, 2024",
    title: "Top Cybersecurity Trends Every Business Should Know in 2024",
    image: "/images/pages/news-insights/image-2.jpg",
    link: "#"
  },
  {
    id: 3,
    date: "Jan 10, 2024",
    title: "The Future of Cloud Security: Best Practices for Organizations",
    image: "/images/pages/news-insights/image 3.jpg",
    link: "#"
  }
];

export default function Insights() {
  return (
    <section className="insights-section">
      <div className="insights-container">
        <div className="insights-header">
          <div className="insights-header-left">
            <span className="insights-badge">NEWS & INSIGHTS</span>
            <h2 className="insights-title">
              Stay Ahead with <span className="highlight">Expert Guidance</span>
            </h2>
          </div>
          <div className="insights-header-right">
            <button className="view-all-btn">View all news</button>
          </div>
        </div>

        <div className="insights-grid">
          {insightsData.map((item) => (
            <div key={item.id} className="insight-card">
              <div className="insight-image-wrapper">
                <img src={item.image} alt={item.title} className="insight-image" />
              </div>
              <div className="insight-content">
                <span className="insight-date">{item.date}</span>
                <h3 className="insight-card-title">{item.title}</h3>
                <a href={item.link} className="read-more-link">
                  Read More
                  <img src="/images/pages/news-insights/icon.svg" alt="Arrow" className="read-more-icon" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
