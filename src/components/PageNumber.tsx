interface iPageNumber {
  page: string;
}

const PageNumber = ({ page }: iPageNumber) => {
  return (
    <div>
      <div className="relative flex w-max p-2 before:absolute before:left-0 before:top-0 before:h-4 before:w-4 before:border-l-2 before:border-t-2 before:border-forest-200 before:content-[''] after:absolute after:bottom-0 after:right-0 after:h-4 after:w-4 after:border-b-2 after:border-r-2 after:border-forest-200 after:content-['']">
        <h5 className="w-max -rotate-90 text-sm text-forest-200 md:text-xl">
          página
        </h5>
        <h4 className="w-max -translate-x-3 text-3xl text-forest-200 underline md:text-6xl">
          {page}
        </h4>
      </div>
    </div>
  );
};

export default PageNumber;
