import React from 'react';
import './Blog.css';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Web Development",
      excerpt: "Exploring the latest trends and technologies shaping the future of web development.",
      date: "2024-01-15",
      author: "John Doe",
      category: "Technology"
    },
    {
      id: 2,
      title: "Best Practices for React Development",
      excerpt: "Learn the essential best practices for building scalable React applications.",
      date: "2024-01-10",
      author: "Jane Smith",
      category: "Development"
    },
    {
      id: 3,
      title: "Designing User-Friendly Interfaces",
      excerpt: "Tips and tricks for creating intuitive and engaging user interfaces.",
      date: "2024-01-05",
      author: "Mike Johnson",
      category: "Design"
    }
  ];

  return (
    <div className="blog-container">
      <div className="blog-hero">
        <h1 className="blog-title">Our Blog</h1>
        <p className="blog-description">
          Stay updated with the latest insights, tutorials, and industry news from our team of experts.
        </p>
      </div>

      <div className="blog-content">
        <div className="blog-posts">
          {blogPosts.map(post => (
            <article key={post.id} className="blog-post">
              <div className="post-meta">
                <span className="post-category">{post.category}</span>
                <span className="post-date">{post.date}</span>
              </div>
              <h2 className="post-title">{post.title}</h2>
              <p className="post-excerpt">{post.excerpt}</p>
              <div className="post-footer">
                <span className="post-author">By {post.author}</span>
                <button className="read-more-btn">Read More</button>
              </div>
            </article>
          ))}
        </div>

        <div className="blog-sidebar">
          <div className="sidebar-section">
            <h3>Categories</h3>
            <ul className="category-list">
              <li><a href="#technology">Technology</a></li>
              <li><a href="#development">Development</a></li>
              <li><a href="#design">Design</a></li>
              <li><a href="#business">Business</a></li>
            </ul>
          </div>
          
          <div className="sidebar-section">
            <h3>Recent Posts</h3>
            <ul className="recent-posts">
              <li><a href="#post1">The Future of Web Development</a></li>
              <li><a href="#post2">Best Practices for React Development</a></li>
              <li><a href="#post3">Designing User-Friendly Interfaces</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="quick-navigation">
        <h2>Quick Navigation</h2>
        <div className="nav-buttons">
          <a href="/" className="nav-btn">🏠 Home</a>
          <a href="/about" className="nav-btn">👥 About</a>
          <a href="/services" className="nav-btn">🛠️ Services</a>
          <a href="/contact" className="nav-btn">📞 Contact</a>
          <a href="/portfolio" className="nav-btn">💼 Portfolio</a>
          <a href="/team" className="nav-btn">👨‍💼 Team</a>
        </div>
      </div>
    </div>
  );
};

export default Blog;
