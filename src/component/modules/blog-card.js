import { Link } from "react-router-dom";

const CardBlogs = ({ image, title, author, date, excerpt, link }) => {
  return (
    <div className="card border-0 shadow pb-3">
      <img src={image} className="card-img-top" width={400} alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{excerpt}</p>
        {/* Format konten sebelum dirender */}
        <div className="text-center">
          <Link to={`${link}`} className="btn btn-primary">
            {link ? "Selengkapnya" : "Coming Soon..."}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardBlogs;
