const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-center items-center rounded-lg border-1 shadow-md border-[#1b1a1a]  p-[100px] m-[10px] ">
      {children}
    </div>
  );
};

export default Card;
