import React from "react";
import butterfly from "../assets/butterflymbobo.webp";
import knifeDog from "../assets/dogKnife.webp";
import monkey from "../assets/surprisedMonkey.webp";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: { src: string; alt: string } } = {
    3: { src: butterfly, alt: "butterfly" },
    4: { src: knifeDog, alt: "knife dog" },
    5: { src: monkey, alt: "surprised monkey" },
  };

  const emoji = emojiMap[rating];

  return (
    <img
      src={emoji.src}
      alt={emoji.alt}
      className="w-10 h-10 ml-2 inline-block rounded-full "
    />
  );
};

export default Emoji;
