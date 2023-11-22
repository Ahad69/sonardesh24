import React from "react";
import { format } from "date-fns";
import { bn } from "date-fns/locale";
import bnYears from "../../public/year.json";

const Dynamicdate = ({ date }) => {
  const currentDate = new Date(date);
  const formattedDate = format(currentDate, "eeee,  do MMMM", { locale: bn });

  const years = new Date().getFullYear();
  const thisYear = bnYears.find((a) => a.en == years);

  //   const getBengaliDate = () => {
  //     const currentDate = new Date();
  //     const year = currentDate.getFullYear() - 593;
  //     const month = currentDate.getMonth() + 1;
  //     const day = currentDate.getDate();

  //     console.log(day, month, year);
  //   };
  //   getBengaliDate();

  return (
    <div>
      <div>
        <div className="text-sm flex text-end mr-1 ml-1">
          {formattedDate}, <br className="block sm:hidden" />{" "}
          <p>{thisYear.bn}</p>
        </div>
      </div>
    </div>
  );
};

export default Dynamicdate;
