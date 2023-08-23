import { Me, About, Projects, Learning, Talk } from "@/sections";
import Nav from "@/components/Nav";

const Home = () => {
  return (
    <>
      <main className="flex flex-col">
        <Me />
        <About />
        <Projects />
        <Learning />
        <Talk />
      </main>
      <Nav />
    </>
  );
};

export default Home;
