import { useState } from "react";
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isToday,
  isFuture,
  isSameMonth,
} from "date-fns";

interface CalendarProps {
  theme?: "light" | "dark";
  journalTypes?: Record<
    string,
    {
      text?: boolean;
      video?: boolean;
      audio?: boolean;
    }
  >;
}

const Calendar = ({ theme = "light", journalTypes = {} }: CalendarProps) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });

  return (
    <div
      className={`calendar-container p-6 ${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      <div className="header flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">
          {format(currentDate, "MMMM yyyy")}
        </h2>
        <div className="nav-buttons space-x-2">
          <button
            onClick={() =>
              setCurrentDate(
                new Date(currentDate.setMonth(currentDate.getMonth() - 1))
              )
            }
            className={`px-3 py-1 rounded ${
              theme === "dark"
                ? "bg-gray-700 hover:bg-gray-600"
                : "bg-background-light hover:bg-gray-200"
            }`}
          >
            ←
          </button>
          <button
            onClick={() => setCurrentDate(new Date())}
            className={`px-3 py-1 rounded ${
              theme === "dark"
                ? "bg-gray-700 hover:bg-gray-600"
                : "bg-background-light hover:bg-gray-200"
            }`}
          >
            Today
          </button>
          <button
            onClick={() =>
              setCurrentDate(
                new Date(currentDate.setMonth(currentDate.getMonth() + 1))
              )
            }
            className={`px-3 py-1 rounded ${
              theme === "dark"
                ? "bg-gray-700 hover:bg-gray-600"
                : "bg-background-light hover:bg-gray-200"
            }`}
          >
            →
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7">
        {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((day) => (
          <div
            key={day}
            className={`text-center text-sm font-medium py-2 ${
              theme === "dark" ? "text-gray-300" : ""
            }`}
          >
            {day}
          </div>
        ))}

        {daysInMonth.map((date) => {
          const dateStr = format(date, "yyyy-MM-dd");
          const hasJournaled = !!journalTypes[dateStr];
          const isMissed = !isFuture(date) && !isToday(date) && !hasJournaled;

          return (
            <div
              key={dateStr}
              className={`
                aspect-square relative flex items-center justify-center
                ${!isSameMonth(date, currentDate) ? "bg-gray-50" : ""}
                ${isToday(date) && !hasJournaled ? "bg-accent-green" : ""}
                ${isToday(date) && hasJournaled ? "bg-calendar-current" : ""} 
                ${isFuture(date) ? "text-text-secondary" : ""}
                ${hasJournaled ? "bg-calendar-streak text-text-primary" : ""}
                ${isMissed ? "text-calendar-missed" : ""}
                ${theme === "dark" ? "bg-gray-700 border-gray-600" : ""}
              `}
            >
              <div className="flex flex-col items-center justify-center">
                <span
                  className={`font-bold ${
                    isToday(date) ? "text-text-primary" : ""
                  } ${!isSameMonth(date, currentDate) ? "text-gray-400" : ""} ${
                    theme === "dark" ? "text-gray-300" : ""
                  }`}
                >
                  {format(date, "d")}
                </span>
                {hasJournaled && journalTypes[dateStr] && (
                  <div className="bottom-2 left-2 flex gap-0.5">
                    {journalTypes[dateStr].text && (
                      <div className="w-2 h-2 rounded-full bg-accent-orange"></div>
                    )}
                    {journalTypes[dateStr].video && (
                      <div className="w-2 h-2 rounded-full bg-accent-green"></div>
                    )}
                    {journalTypes[dateStr].audio && (
                      <div className="w-2 h-2 rounded-full bg-accent-blue"></div>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
