import { LuQuote } from "react-icons/lu";
import { IoMicOutline, IoVideocamOutline } from "react-icons/io5";
import { MdOutlineCollectionsBookmark } from "react-icons/md";
import { BsFire } from "react-icons/bs";

import FeaturedStatCard from "./FeaturedStatCard";
import NavBar from "./NavBar";
import TextEntryCard from "./TextEntryCard";
import AudioEntryCard from "./AudioEntryCard";
import VideoEntryCard from "./VideoEntryCard";
import Calendar from "./Calendar";

const featuredStats = [
  {
    title: "Words Written",
    icon: LuQuote,
    stat: "2,936",
    changePercentage: 26,
    timePeriod: "month",
    color: "orange",
  },
  {
    title: "Videos Journalled",
    icon: IoVideocamOutline,
    stat: "3hr 4min",
    changePercentage: 7,
    timePeriod: "month",
    color: "green",
  },
  {
    title: "Audio Journalled",
    icon: IoMicOutline,
    stat: "1hr 23min",
    changePercentage: -9,
    timePeriod: "month",
    color: "blue",
  },
];

const exampleCalendarProps = {
  // Dates that were missed (user should have journaled but didn't)
  missedDays: ["2024-12-01", "2024-12-02", "2024-12-03"],

  // Theme can be "light" or "dark"
  theme: "light" as const,

  // Journal entries with their types
  journalTypes: {
    // Day with all types of entries
    "2024-12-01": {
      text: true,
      video: true,
      audio: true,
    },
    // Day with just text and audio
    "2024-12-02": {
      text: true,
      audio: true,
    },
    // Day with only video
    "2024-12-03": {
      video: true,
    },
    // Day with text only
    "2024-12-04": {
      text: true,
    },
    "2024-12-09": {
      text: true,
    },
  },
};

const Dashboard = () => {
  return (
    <div className="px-8 pt-4 bg-background-light min-h-screen">
      <NavBar />

      <div className="main-content grid grid-cols-3 mt-8 gap-4">
        <div className="col-span-2">
          <div className="featured-stats grid grid-cols-3 bg-white rounded-xl p-4 gap-4">
            {featuredStats.map((stat) => (
              <FeaturedStatCard key={stat.title} {...stat} />
            ))}
          </div>
          <div className="text-center">your activity</div>
          <div className="grid grid-cols-2 gap-4">
            <TextEntryCard />
            <div className="flex flex-col gap-4">
              <AudioEntryCard />
              <VideoEntryCard />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="profile-overview flex flex-col gap-4">
            <div className="greetings-with-avatar flex gap-4 items-center justify-center">
              <div className="avatar w-20 rounded-full overflow-hidden border-4 border-white flex-shrink-0">
                <img src="./img/avatar.webp" alt="" />
              </div>
              <div className="greetings flex-grow">
                <h3 className="text-2xl font-semibold">
                  Good morning, Anjali!
                </h3>
                <p className="text-sm font-regular">
                  Let's talk about what happend today
                </p>
              </div>
            </div>
            <div className="profile-stats flex justify-between gap-4 items-center">
              <div className="total-points text-primary border-2 border-primary flex items-center justify-center leading-5 py-2 rounded-xl flex-grow">
                <div className="text-3xl">34,984</div>
                <div className="text-xs ml-2">
                  Total <br /> Points
                </div>
              </div>
              <div className="total-entries flex-shrink-0">
                <div className="flex items-center">
                  <div className="icon w-8">
                    <MdOutlineCollectionsBookmark className="w-full h-full" />
                  </div>
                  <div className="text-3xl">179</div>
                </div>
                <div className="text-xs">Entries this year</div>
              </div>
              <div className="streak flex-shrink-0">
                <div className="flex items-center">
                  <div className="icon w-8">
                    <BsFire className="w-full h-full" />
                  </div>
                  <div className="text-3xl">11</div>
                </div>
                <div className="text-xs">Days streak</div>
              </div>
            </div>
            <div className="create-new-entry-btn w-full bg-primary text-white text-center text-2xl font-semibold py-4 rounded-xl">
              + New Entry
            </div>
          </div>
          <div className="calendar-container rounded-xl overflow-hidden">
            <Calendar {...exampleCalendarProps} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
