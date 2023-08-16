interface iLoading {}

const Loading = ({}: iLoading) => {
  return (
    <div className="fixed left-0 right-0 top-0 flex h-screen items-center justify-center bg-black/50">
      <div className="relative inline-block h-20 w-20">
        <div className="absolute inset-0 animate-spin rounded-full border-t-2 border-forest-100 border-opacity-50"></div>
      </div>
    </div>
  );
};

export default Loading;
