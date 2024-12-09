import { IconType } from "react-icons";

interface FeaturedStatCardProps {
  title: string;
  stat: string;
  changePercentage: number;
  timePeriod: string;
  color: string;
  icon: IconType;
}

const FeaturedStatCard = ({
  title,
  stat,
  changePercentage,
  timePeriod,
  color,
  icon,
}: FeaturedStatCardProps) => {
  return (
    <div className="">
      <div className={"top-icon text-4xl"}>
        {icon({ className: `text-accent-${color}` })}
      </div>
      <div className="title text-lg font-semibold">{title}</div>
      <div className="stat text-4xl font-semibold mt-1">{stat}</div>
      <div
        className={`change-percentage text-sm font-regular ${
          changePercentage > 0 ? "text-green-500" : "text-red-500"
        }`}
      >
        {`${changePercentage}% since last ${timePeriod}`}
      </div>
      <div className="graph mt-4">
        <div className="flex items-end h-16 gap-1.5">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className={`w-full bg-accent-${color} rounded w-1.5`}
              style={{ height: `${Math.random() * 100}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedStatCard;
