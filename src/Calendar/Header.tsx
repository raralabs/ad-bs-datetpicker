import React from "react";
import { ShowDropdownType, ShowYearDropdownType } from "../types/main";
import {
  getAdRangeForBsCalendar,
  getBsRangeForAdCalendar,
  getMonthNames,
  getNepaliNumber,
  getValidYears,
} from "../CalendarData";

type OffsetChange = (a: number) => void;

type HeaderProps = {
  year: number;
  month: number;
  changeYear: OffsetChange; //TODO
  changeMonth: OffsetChange;
  isAD: boolean;
  showMonthDropdown: ShowDropdownType;
  showYearDropdown: ShowYearDropdownType;
  showExtra: boolean;
};

const Header = ({
  year,
  month,
  changeYear,
  changeMonth,
  isAD,
  showMonthDropdown,
  showYearDropdown,
  showExtra,
}: HeaderProps) => {
  const maxAD = 2035;
  const maxBS = 2092;
  // because month from props is received in readable format 1= Baishakh
  // but the component manipulates in array format 0= Baisakh
  const monthIndex = month - 1;

  const allNepaliMonth = getMonthNames("np", "full");
  const allEnglishMonth = getMonthNames("en", "full");

  const allMonth = isAD ? allEnglishMonth : allNepaliMonth;

  const currentMonthName = allMonth ? allMonth[monthIndex] : "";

  const currentYear = isAD ? year : getNepaliNumber(year ?? 0);

  const allYears = isAD ? getValidYears("en", "AD") : getValidYears("en", "BS");

  const alternateCalendarTypeRange = isAD
    ? getBsRangeForAdCalendar(year, month)
    : getAdRangeForBsCalendar(year, month);

  const { from, to } = alternateCalendarTypeRange;

  const reachedMaxYear = isAD ? year >= maxAD : year >= maxBS;

  return (
    <div>
      <div className="month-header">
        <div className="left-actions">
          <button
            type="button"
            style={{
              border: "none",
              backgroundColor: "inherit",
              color: "White",
            }}
            title="Previous Year"
            onClick={(e) => {
              e.stopPropagation();
              changeYear(-1);
            }}
            className="prev-year hand-cursor"
          >
            &#10094;&#10094;
          </button>
          <button
            type="button"
            style={{
              border: "none",
              backgroundColor: "inherit",
              color: "White",
            }}
            title="Previous Month"
            onClick={(e) => {
              e.stopPropagation();
              changeMonth(-1);
            }}
            className="prev-month hand-cursor"
          >
            &#10094;
          </button>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className="month-header-content">
            {!showMonthDropdown ? (
              <span>{currentMonthName} &nbsp;</span>
            ) : (
              <select
                className="rl-nepali-calendar__month-select"
                value={monthIndex}
                onChange={(e) => {
                  const { value } = e.currentTarget;
                  const offset = +value - monthIndex;
                  changeMonth(offset);
                }}
              >
                {allMonth &&
                  allMonth.map((m, i) => (
                    <option value={i} key={m}>
                      {m}
                    </option>
                  ))}
              </select>
            )}

            <div key={`${year}--`} tabIndex={0} className="inline-dropdown">
              <div className="value"></div>
              {!showYearDropdown ? (
                <span>{currentYear || 0} &nbsp;</span>
              ) : (
                <select
                  className="rl-nepali-calendar__month-select"
                  value={year}
                  onChange={(e) => {
                    const { value } = e.currentTarget;
                    const offset = +value - year;

                    changeYear(offset);
                  }}
                >
                  {allYears.map((m) => (
                    <option value={m} key={m}>
                      {isAD ? m : getNepaliNumber(m)}
                    </option>
                  ))}
                </select>
              )}
            </div>
          </div>
          {showExtra && (
            <div className="flex" style={{ justifyContent: "center" }}>
              <div style={{ fontSize: 12 }}>
                {from.monthName}/{to.monthName} -
              </div>
              <div
                key={`${year}--`}
                tabIndex={0}
                className="inline-dropdown"
                style={{ fontSize: 12 }}
              >
                {from.year}
                {from.year !== to.year ? `/${String(to.year).slice(-2)}` : ""}
              </div>
            </div>
          )}
        </div>

        <div className="right-actions">
          <button
            type="button"
            title="Next Month"
            style={{
              border: "none",
              backgroundColor: "inherit",
              color: `${reachedMaxYear && month >= 9 ? "gray" : "white"}`,
            }}
            disabled={reachedMaxYear && month >= 9}
            onClick={(e) => {
              e.stopPropagation();
              changeMonth(1);
            }}
            className="next-month hand-cursor"
          >
            &#10095;
          </button>
          <button
            type="button"
            style={{
              border: "none",
              backgroundColor: "inherit",
              color: `${reachedMaxYear ? "gray" : "white"}`,
            }}
            onClick={(e) => {
              e.stopPropagation();
              changeYear(1);
            }}
            disabled={reachedMaxYear}
            title="Next Year"
            className="next-year hand-cursor"
          >
            &#10095;&#10095;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
