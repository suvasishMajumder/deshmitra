import { FaStar, FaRegStar } from "react-icons/fa6";
import type {StarRatingProps} from '../types/types'


const StarRating: React.FC<StarRatingProps> = ({
  rating,
  maxStars = 5,
  size = 16,
}) => (
  <div className="flex">
    {Array.from({ length: maxStars }).map((_, i) => {
      const fillPct = Math.max(0, Math.min(1, rating - i));

      // full star
      if (fillPct === 1) {
        return (
          <FaStar
            key={i}
            style={{ width: size, height: size }}
            className="text-yellow-400"
          />
        );
      }

      // empty star
      if (fillPct === 0) {
        return (
          <FaRegStar
            key={i}
            style={{ width: size, height: size }}
            className="text-gray-300"
          />
        );
      }

      // fractional star: outline underneath + clipped fill on top
      return (
        <span
          key={i}
          className="relative inline-block"
          style={{ width: size, height: size, lineHeight: 0 }}
        >
          <FaRegStar
            style={{ width: size, height: size }}
            className="text-gray-300"
          />
          <FaStar
            style={{
              width: size,
              height: size,
              position: "absolute",
              top: 0,
              left: 0,
              clipPath: `inset(0 ${100 - fillPct * 100}% 0 0)`,
            }}
            className="text-yellow-400"
          />
        </span>
      );
    })}
  </div>
);


export default StarRating;