
const TemplateSimple = ({ title, mainImage, description, skills }) => {
  return (
    <div className="template container">
      <h2 className="case-hero__title">{title}</h2>
      <div className="case-image-main__image">
        <img src={mainImage} alt={title} />
      </div>
      <div className="case-description">
        <h3>My Role</h3>
        <p>{description}</p>
        <div className="case-hero__skills">
          {skills.map((skill, index) => (
            <span key={index}>{skill}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TemplateSimple;
