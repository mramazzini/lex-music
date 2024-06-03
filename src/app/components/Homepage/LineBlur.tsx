const LineBlur = () => {
  return (
    <div className="staff flex flex-col items-center absolute justify-center h-full w-[100vw] blur-2xl select-none max-w-screen overflow-hidden ">
      <img
        src="/line.svg"
        alt="curvy lines"
        className="w-[100%] top-[0] absolute select-none"
      />
      <img
        src="/line.svg"
        alt="curvy lines"
        className="w-[100%]  top-[30px] absolute select-none"
      />
      <img
        src="/line.svg"
        alt="curvy lines"
        className="w-[100%] top-[60px] absolute select-none"
      />
      <img
        src="/line.svg"
        alt="curvy lines"
        className="w-[100%]  top-[90px] absolute  select-none"
      />
      <img
        src="/line.svg"
        alt="curvy lines"
        className="w-[100%]  top-[120px] absolute  select-none"
      />
    </div>
  );
};

export default LineBlur;
