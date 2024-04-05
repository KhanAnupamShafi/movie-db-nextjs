import Image from "next/image";
export const renderStars = (rating) => {
  const roundedRating = Math.round(rating / 2);
  const stars = [];

  // Generate star components based on rounded rating
  for (let i = 0; i < 5; i++) {
    if (i < roundedRating) {
      stars.push(<Star key={i} filled />);
    } else {
      stars.push(<Star key={i} />);
    }
  }

  return stars;
};

const Star = ({ filled }) => {
  return <span>{filled ?           <Image src='/star.svg' width='14' height='14' alt='' />
 : "☆"}</span>;
};

const RatingStars = ({ rating }) => {
  return <div>{renderStars(rating)}</div>;
};

export default RatingStars;
