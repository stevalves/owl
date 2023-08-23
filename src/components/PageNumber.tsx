import { tv } from "tailwind-variants";

interface iPageNumber {
  page: string;
  title: string;
}

const PageNumber = ({ page, title }: iPageNumber) => {

  const pagenumber_tv = tv({
    base: ""
  })

  return (
    <div className="md:h-full md:w-max w-full h-max flex md:flex-col items-center">
      <div className="relative justify-center flex w-max p-2 before:absolute before:left-0 before:top-0 before:h-4 before:w-4 before:border-l-2 before:border-t-2 before:border-forest-200 before:content-[''] after:absolute after:bottom-0 after:right-0 after:h-4 after:w-4 after:border-b-2 after:border-r-2 after:border-forest-200 after:content-['']">
        <h5 className="w-max -rotate-90 text-sm text-forest-100 md:text-xl">
          página
        </h5>
        <h4 className="w-max -translate-x-3 text-3xl text-forest-100 underline md:text-6xl">
          {page}
        </h4>
      </div>
      <div className="md:h-full h-1 w-full bg-forest-100 md:w-1 mx-6 md:my-6 rounded-xl" />
      <h5 className="md:text-[2rem] text-[1.5rem] text-forest-100 font-normal">{title}</h5>
    </div>
  );
};

export default PageNumber;
