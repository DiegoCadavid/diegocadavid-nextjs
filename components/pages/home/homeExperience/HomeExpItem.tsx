import React from "react";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import dateDiffMonths from "../../../../utils/dateDiffMonths";

interface props {
  jobTitle: string;
  companyName: string;
  startDate: `${number}-${number}-${number}`;
  endDate?: `${number}-${number}-${number}`;
  description: string;
}

const HomeExpItem = ({
  jobTitle,
  companyName,
  startDate: _startDate,
  endDate: _endDate,
  description,
}: props) => {
  const startDate = new Date(_startDate);
  const endDate = _endDate ? new Date(_endDate) : new Date();
  dayjs.extend(relativeTime);

  const diffMonths = dayjs(startDate).from(endDate, true);

  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-12 h-12 bg-black rounded-lg" />
      <div className="flex-grow">
        <h2 className="text-lg font-bold leading-tight">
          Fullstack Developer & UI/UX Designer
        </h2>
        <p>
          <span className="font-semibold">{companyName}</span> · {diffMonths} (
          {dayjs(startDate).format("MMMM YYYY")} -{" "}
          {_endDate ? dayjs(endDate).format("MMMM YYYY") : "now"})
        </p>

        <p className="mt-2">{description}</p>
      </div>
    </div>
  );
};

export default HomeExpItem;
