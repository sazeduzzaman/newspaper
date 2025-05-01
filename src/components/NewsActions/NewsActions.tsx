import React from "react";
import { AiFillCopy, AiFillPrinter } from "react-icons/ai";
import { FaArrowDownShortWide, FaArrowUpShortWide } from "react-icons/fa6";

const NewsActions = () => {
  return (
    <div>
      <button
        className="main-text btn me-2 btn-circle bg-blend-lighten btn-sm"
        title="Print This News"
      >
        <AiFillPrinter />
      </button>
      <button
        className="main-text btn me-2 btn-circle bg-blend-lighten btn-sm"
        title="Copy This News"
      >
        <AiFillCopy />
      </button>
      <button
        className="main-text btn me-2 btn-circle bg-blend-lighten btn-sm"
        title="Increase News Font Size"
      >
        <FaArrowDownShortWide />
      </button>
      <button
        className="main-text btn me-2 btn-circle bg-blend-lighten btn-sm"
        title="Dicrease News Font Size"
      >
        <FaArrowUpShortWide />
      </button>
    </div>
  );
};

export default NewsActions;
