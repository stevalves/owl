interface iProjectIn {
  params: {
    id: string
  }
}

const ProjectIn = async ({ params }: iProjectIn) => {

  return (
    <div>
      <h1>{params.id}</h1>
    </div>
  );
};

export default ProjectIn;