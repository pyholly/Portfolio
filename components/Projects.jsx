import "../src/App.css";
import { projectList } from "../assets/projectsList";

export const Projects = () => {
  return (
    <section>
      <h2>My Projects</h2>
      {projectList.map((project) => {
        return (
          <ul>
            <h3>{project.name}</h3>
            <img src={project.img} alt={project.alt} />
            <p>{project.body}</p>
          </ul>
        );
      })}
    </section>
  );
};
