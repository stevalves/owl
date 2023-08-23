import Link from "next/link";

const NotFoundPage = () => {

  return (
    <div className="bg-red-700/20 w-full h-screen flex flex-col items-center justify-center">
      <h1 className="text-white text-[3rem]">404</h1>
      <Link href="/">Return to HomePage</Link>
    </div>
  );
};

export default NotFoundPage;