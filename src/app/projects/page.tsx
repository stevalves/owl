import api from "@/services/api";

interface iProject {
  id: string;
  name: string;
}

const Projects = async () => {
  const { data } = await api.get<iProject[]>("projects");

  return (
    <>
      <h1>projects</h1>
      <ul>
        {data.map((project) => (
          <li key={project.id}>{project.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Projects;
