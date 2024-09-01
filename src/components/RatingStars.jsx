import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const RatingStars = ({ rating }) => {
  // Rating'in tam sayı kısmı ve ondalıklı kısmını al
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const totalStars = 5;

  return (
    <div className="flex items-center">
      {Array.from({ length: totalStars }).map((_, index) => {
        if (index < fullStars) {
          return <FaStar key={index} className="text-yellow-500 ms-1" />;
        } else if (index === fullStars && hasHalfStar) {
          return <FaStarHalfAlt key={index} className="text-yellow-500 ms-1" />;
        } else {
          return <FaRegStar key={index} className="text-yellow-500 ms-1" />;
        }
      })}
    </div>
  );
};

export default RatingStars;
