import FeaturedStatCard from "./FeaturedStatCard";
import NavBar from "./NavBar";

const featuredStats = [
  {
    title: "Words Written",
    stat: "2,936",
    changePercentage: +26,
    timePeriod: "month",
  },
  {
    title: "Videos Journalled",
    stat: "3hr 4min",
    changePercentage: +10,
    timePeriod: "month",
  },
  {
    title: "Audio Journalled",
    stat: "1hr 23min",
    changePercentage: +10,
    timePeriod: "month",
  },
];

const Dashboard = () => {
  return (
    <div className="px-8 pt-4 bg-background-light min-h-screen">
      <NavBar />

      <div className="main-content grid grid-cols-3">
        <div className="col-span-2">
          <div className="featured-stats grid grid-cols-3">
            {featuredStats.map((stat) => (
              <FeaturedStatCard key={stat.title} {...stat} />
            ))}
          </div>
          <div className="text-center">your activity</div>
          <div className="grid grid-cols-2">
            <div>
              <div className="image-gallery grid grid-cols-4">
                <div className="col-span-2 row-span-2">1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
              </div>
              <div className="text-desc">
                <h3>Productive day</h3>
              </div>
            </div>
            <div>
              <div>Audio recording</div>
              <div>Video clip</div>
            </div>
          </div>
        </div>
        <div className="bg-blue-500">
          <div className="profile-overview">
            <div className="greetings-with-avatar flex">
              <div className="avatar">Avatar</div>
              <div className="greetings">
                <h3>Good morning, Anjali!</h3>
                <p>Let's talk about what happend today</p>
              </div>
            </div>
            <div className="profile-stats flex">
              <div className="total-points">Total points</div>
              <div className="total-entries">Total videos</div>
              <div className="streak">Total audio</div>
            </div>
            <div className="create-new-entry-btn">+ New Entry</div>
          </div>
          <div className="calendar-container"></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
