"use client";
import React from "react";
import Countdown from "react-countdown";

const endingDate = new Date("2026-03-03");
const CountDown = () => {
  return (
    <Countdown
      className="text-5xl text-yellow-300 font-bold"
      date={endingDate}
    />
  );
};
export default CountDown;
