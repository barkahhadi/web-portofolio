import { css } from "@emotion/css";
import projects from "@/constants/projects";
import CardProject from "./card-project";

const ProjectList: React.FC = () => {
  return (
    <div
      className={css`
        padding: 80px 0;
      `}
    >
      <div className="container">
        <h1
          className={css`
            color: #627f8d;
            font-size: 34px;
            text-align: center;
            font-weight: 600;
            margin-bottom: 30px;
          `}
        >
          My Work
        </h1>
        {projects.map((project) => (
          <CardProject key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
