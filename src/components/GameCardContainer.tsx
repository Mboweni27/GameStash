import type { ReactNode } from "react";
interface Props {
  children: ReactNode;
}
const GameCardContainer = ({ children }: Props) => {
  return (
    <>
      <div className="card bg-base-200 shadow-md rounded-box overflow-hidden border border-base-700">
        {children}
      </div>
    </>
  );
};

export default GameCardContainer;
