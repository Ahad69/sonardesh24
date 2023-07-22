import React from "react";
import { format } from "date-fns";
import { bn } from "date-fns/locale";
import bnYears from "../../public/year.json";

const BanglaDates = () => {
  const currentDate = new Date();
  const formattedDate = format(currentDate, "eeee,  do MMMM", { locale: bn });

  const years = new Date().getFullYear();
  const thisYear = bnYears.find((a) => a.en == years);

  const getBengaliDate = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear() - 593;
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();

    console.log(day, month, year);
  };

  // getBengaliDate();

  return (
    <div>
      <div className="text-xs sm:text-base text-end ">
        {formattedDate}, <br className="block sm:hidden" /> {thisYear.bn}
      </div>
    </div>
  );
};

export default BanglaDates;
