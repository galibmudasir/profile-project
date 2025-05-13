const ProjectCard = ({ Image, Title, Content, Link }) => {
  return (
    <div className="card">
      <img src={Image} className="card-img-top" width={400} alt={Title} />
      <div className="card-body">
        <h5 className="card-title">{Title}</h5>
        <p className="card-text">{Content}</p>
        <div className="text-center">
          <a
            href={Link ? Link : "#"} // Jika Link ada, gunakan Link; jika tidak, fallback ke #
            className="btn btn-primary"
          >
            {Link ? "Selengkapnya" : "Coming Soon..."}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
