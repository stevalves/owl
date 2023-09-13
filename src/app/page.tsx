import { Me, About, Projects, Technologies, Talk } from "@/sections";
import Nav from "@/components/Nav";

const Home = () => {
  return (
    <>
      <main className="flex flex-col">
        <Me />
        <About />
        <Projects />
        <Technologies />
        <Talk />
      </main>
      <Nav />
    </>
  );
};

export default Home;
