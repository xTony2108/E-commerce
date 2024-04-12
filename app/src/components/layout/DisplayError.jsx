export const DisplayError = ({ error }) => {
  console.log(error);
  return (
    <>
      <div className="h-screen flex flex-col gap-12 justify-center items-center bg-black">
        <h1 className="text-white tracking-[1em] font-bold text-2xl">
          Errore {error.status}
        </h1>
        <span className="text-white tracking-[1em] font-bold text-2xl">
          {error.data?.message}
        </span>
      </div>
    </>
  );
};
