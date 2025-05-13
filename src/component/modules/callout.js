const Callout = ({ icon, title, content }) => {
  return (
    <div className="callout">
      <div className="callout-wrapper text-center">
        <div className="callout-icon-wrapper">
          <span className="callout-icon mb-5">
            <i className={icon ? icon : "fa fa-house"}></i>
          </span>
        </div>
        <div className="callout-title my-3">
          <h4>{title}</h4>
        </div>
        <div
          className="callout-content"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </div>
    </div>
  );
};

export default Callout;
