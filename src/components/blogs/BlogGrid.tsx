import { blogArticles } from "@/data/blogs";
import type { Blog } from "@/types/blog";
import { Link } from "react-router-dom";

export default function BlogGrid() {
  return (
    <div className="main-content">
      {/* .blog-grid-main */}
      <div className="blog-grid-main flat-spacing">
        <div className="container">
          <div className="row">
            <div className="tf-grid-layout md-col-3 mb_48">
              {blogArticles.map((article: Blog, index: number) => ( 
                <div className="blog-article-item" key={index}>
                  <div className="article-thumb">
                    <Link to={`/blog-details/${article.id}`}>
                      <img
                        className="lazyload"
                        data-src={article.image}
                        src={article.image}
                        alt="img-blog" 
                        width={615}
                        height={461}
                      />
                    </Link>
                    <div className="article-label">
                      <a href="#" className="text-button-small">
                        {article.label}
                      </a>
                    </div>
                  </div>
                  <div className="article-content">
                    <ul className="meta">
                      <li className="text-button-small">
                        <a href="#" className="link">
                          {article.date}
                        </a>
                      </li>
                      <li className="text-button-small">
                        by{" "}
                        <a href="#" className="link">
                          {article.author}
                        </a>
                      </li>
                    </ul>
                    <h5 className="article-title">
                      <Link
                        to={`/blog-details/${article.id}`}
                        className="line-clamp-2 link"
                      >
                        {article.title}
                      </Link>
                    </h5>
                    <p className="article-description text_secondary text-body-default">
                      {article.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <ul className="wg-pagination justify-content-center">
              <li>
                <a href="#" className="pagination-item text-button">
                  1
                </a>
              </li>
              <li className="active">
                <div className="pagination-item text-button">2</div>
              </li>
              <li>
                <a href="#" className="pagination-item text-button">
                  3
                </a>
              </li>
              <li>
                <a href="#" className="pagination-item text-button">
                  <i className="icon-right" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* /.blog-grid-main */}
    </div>
  );
}
