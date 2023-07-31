import { css } from "@emotion/css";
import projects from "@/constants/projects";
import CardProject from "./card-project";

const RecentProjects: React.FC = () => {
  return (
    <div
      className={css`
        background: #f3f4f5;
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
          My Recent Work
        </h1>
        {projects
          .filter((project) => project.isRecent)
          .map((project) => (
            <CardProject key={project.title} {...project} />
          ))}
        <div style={{ textAlign: "center" }}>
          <a
            href="/projects"
            className={css`
              border-radius: 20px;
              background: #ffc107;
              display: flex;
              padding: 13px 20px;
              justify-content: center;
              align-items: center;
              height: 40px;
              color: #002a3a;
              font-weight: 600;
              display: inline-block;
              &:hover {
                background: #ffca2c;
                color: #fff !important;
              }
            `}
          >
            Show More
          </a>
        </div>
      </div>
    </div>
  );
};

export default RecentProjects;
