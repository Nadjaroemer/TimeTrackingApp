import _ from "lodash";

export default function AppCalendar() {
  function GetDates(startDate, daysToAdd) {
    var aryDates = [];

    for (var i = 0; i <= daysToAdd; i++) {
      var currentDate = new Date();
      currentDate.setDate(startDate.getDate() + i);
      aryDates.push(
        DayAsString(currentDate.getDay()) +
          ", " +
          currentDate.getDate() +
          " " +
          MonthAsString(currentDate.getMonth()) +
          " " +
          currentDate.getFullYear()
      );
    }

    return aryDates;
  }

  const GetNextXDates = (startDate, daysToAdd) => {
    var dates = [];

    _.times(6, (num) => {
      var date = new Date();
      date.setDate(startDate.getDate() + num + 1);
      dates.push(date);
    });
    return dates;
    // var dates = [];

    // for (var i = 0; i <= daysToAdd; i++) {
    //   var date = new Date();
    //   date.setDate(startDate.getDate() + i);
    //   dates.push(date);
    // }
    // return dates;
  };

  function MonthAsString(monthIndex) {
    var d = new Date();
    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";

    return month[monthIndex];
  }

  function DayAsString(dayIndex) {
    var weekdays = new Array(7);
    weekdays[0] = "Sunday";
    weekdays[1] = "Monday";
    weekdays[2] = "Tuesday";
    weekdays[3] = "Wednesday";
    weekdays[4] = "Thursday";
    weekdays[5] = "Friday";
    weekdays[6] = "Saturday";

    return weekdays[dayIndex];
  }

  const dateOneWeekFromNow = new Date();
  dateOneWeekFromNow.setDate(dateOneWeekFromNow.getDate() + 7);
  const nextDates = GetNextXDates(dateOneWeekFromNow, 6);

  const startDate = new Date();
  const aryDates = GetDates(startDate, 7);
  console.log(aryDates);
  console.log(nextDates);
  return (
    <div>
      <button></button>
    </div>
  );
}
