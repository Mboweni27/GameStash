interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  if (!score || score === 0) return null;
  let color =
    score > 75
      ? "accent"
      : score > 60
      ? "bg-yellow-500 text-yellow-500"
      : "error";
  return (
    <>
      <div className={`badge badge-outline badge-${color} self-start`}>
        {score}
      </div>
    </>
  );
};

export default CriticScore;
