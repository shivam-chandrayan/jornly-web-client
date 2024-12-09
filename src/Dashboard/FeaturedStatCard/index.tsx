interface FeaturedStatCardProps {
  title: string;
  stat: string;
  changePercentage: number;
  timePeriod: string;
}

const FeaturedStatCard = ({
  title,
  stat,
  changePercentage,
  timePeriod,
}: FeaturedStatCardProps) => {
  return (
    <div className="">
      <div className="top-icon"></div>
      <div className="title">{title}</div>
      <div className="stat">{stat}</div>
      <div className="change-percentage">
        {`${changePercentage}% since last ${timePeriod}`}
      </div>
      <div className="graph">
        <div className="flex items-end h-16 gap-2">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="w-full bg-gray-600 rounded w-2"
              style={{ height: `${Math.random() * 100}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedStatCard;
