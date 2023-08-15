import PageNumber from "@/components/PageNumber";

const Home = () => {
  return (
    <main className="flex flex-col">
      <section
        id="me"
        className="flex h-screen w-full flex-col items-center justify-end bg-transparent"
      >
        <div className="container mx-2 flex h-5/6 flex-col px-4 py-4">
          <PageNumber page={"01"} />
          <h2>A cada dia um novo desafio.</h2>
        </div>
      </section>
    </main>
  );
};

export default Home;
