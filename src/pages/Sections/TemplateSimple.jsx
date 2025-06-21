import { Link } from "react-router-dom";

const TemplateSimple = ({ title, mainImage, description, skills, url }) => {
    return (
        <div className="project-template">
            <div className="container">
                <div className="top-wrap">
                    <h2 className="case-hero__title">{title}</h2>
                    <div className="skill-list">
                        {skills.map((skill, index) => (
                            <span key={index}>{skill}</span>
                        ))}
                    </div>
                </div>
            </div>
            <div className="case-image-main__image">
                <img src={mainImage} alt={title} />
            </div>
            <div className="case-description">
                <div className="container">
                    <div className="wrap">
                        <h2>My Role</h2>
                        <div className="desc">
                            <p>{description}</p>
                        </div>
                    </div>
                    <div className="live-site">
                        <div className="small-circle"></div>
                        <div className="big-circle"></div>
                        <div className="link-circle">
                            <Link target="_blank" to={url}>Live Site</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TemplateSimple;
