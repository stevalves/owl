import ShowLogo from "@/components/ShowLogo";

interface iNotFoundPage {

}

const NotFoundPage = ({}: iNotFoundPage) => {
  return (
    <div className="bg-black w-screen h-screen">
      <ShowLogo />
    </div>
  );
};

export default NotFoundPage;