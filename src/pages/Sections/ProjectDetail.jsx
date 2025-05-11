import { useParams } from 'react-router-dom';
import projects from '../../components/Data/Projects';
import TemplateSimple from './TemplateSimple';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return <p>Project not found.</p>;
  }

  return (
    <TemplateSimple
      title={project.title}
      mainImage={project.mainImage}
      description={project.description}
      skills={project.skills}
    />
  );
};

export default ProjectDetail;
