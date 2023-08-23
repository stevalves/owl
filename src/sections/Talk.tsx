import PageNumber from "@/components/PageNumber";

interface iTalk {}

const Talk = ({}: iTalk) => {
  return (
    <section id="talk" className="h-[50vh] w-full">
      <div className="scale-100 container mx-auto h-full bg-forest-700/40 px-2 py-4 border-t-2 border-dashed border-forest-800">
      <PageNumber page="05" title="Talk" />
      </div>
    </section>
  );
};

export default Talk;
