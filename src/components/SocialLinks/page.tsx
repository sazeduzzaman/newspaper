import Link from "next/link";
import React from "react";
import { FaFacebookF, FaYoutube, FaUser } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="flex justify-end items-end">
      <Link type="button" href={"#"} className="me-2" target="_blank">
        <button className="btn btn-circle bg-white border-0 text-black btn-sm">
          <FaFacebookF className="text-[16px]" />
        </button>
      </Link>
      <Link type="button" href={"#"} className="me-2" target="_blank">
        <button className="btn btn-circle bg-white border-0 text-black btn-sm">
          <FaYoutube className="text-[16px]" />
        </button>
      </Link>
      <Link type="button" href={"#"} className="me-2" target="_blank">
        <button className="btn btn-circle bg-white border-0 text-black btn-sm">
          <FaUser className="text-[16px]" />
        </button>
      </Link>
    </div>
  );
};

export default SocialLinks;
