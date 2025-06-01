import React, { useState, useEffect } from "react";
import { ADToBS } from "bikram-sambat-js";

const DateAndTime = () => {
  const [dateAndTime, setDateAndTime] = useState({
    year: "",
    month: "",
    date: "",
    day: "",
    hour: "",
    minutes: "",
  });

  useEffect(() => {
    const today = new Date();
    const bs = ADToBS(today); // e.g., "2081-02-19"

    const [year, month, date] = bs.split("-").map((item) => Number(item));

    const now = today.toLocaleTimeString("ne-NP", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    const [hour, minutes] = now.split(":");

    setDateAndTime({
      year: year.toLocaleString("ne-NP").replace(/,/g, ""),
      month: month.toLocaleString("ne-NP"),
      date: date.toLocaleString("ne-NP"),
      hour,
      minutes,
    });
  }, []);

  return (
    <div className="flex gap-x-10">
      <p>
        {dateAndTime.year} - {dateAndTime.month} - {dateAndTime.date}
      </p>
      <p>
        {dateAndTime.hour}:{dateAndTime.minutes}
      </p>
    </div>
  );
};

export default DateAndTime;
