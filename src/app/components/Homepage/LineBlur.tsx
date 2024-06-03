const LineBlur = () => {
  return (
    <div className="staff absolute flex flex-col items-center justify-center z-[1] w-[150%] blur-2xl select-none max-w-screen overflow-hidden">
      <img
        src="/line.svg"
        alt="curvy lines"
        className="w-[100%] absolute top-[0] z-[0] select-none"
      />
      <img
        src="/line.svg"
        alt="curvy lines"
        className="w-[100%] absolute top-[30px] z-[0] select-none"
      />
      <img
        src="/line.svg"
        alt="curvy lines"
        className="w-[100%]  absolute top-[60px] z-[0] select-none"
      />
      <img
        src="/line.svg"
        alt="curvy lines"
        className="w-[100%]  absolute top-[90px] z-[0]  select-none"
      />
      <img
        src="/line.svg"
        alt="curvy lines"
        className="w-[100%]  absolute top-[120px] z-[0]  select-none"
      />
    </div>
  );
};

export default LineBlur;
