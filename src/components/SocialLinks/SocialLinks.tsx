import Link from "next/link";
import React from "react";
import { FaFacebookF, FaYoutube, FaUser } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="flex justify-end items-end">
      <Link type="button" href={"https://www.facebook.com/ajkalusa"} className="me-2" target="_blank">
        <button className="btn btn-circle bg-black border-0 text-white btn-sm">
          <FaFacebookF className="text-[16px]" />
        </button>
      </Link>
      <Link type="button" href={"https://www.youtube.com/@ajkalusa/featured"} className="me-2" target="_blank">
        <button className="btn btn-circle bg-black border-0 text-white btn-sm">
          <FaYoutube className="text-[16px]" />
        </button>
      </Link>
      <Link type="button" href="auth/login" className="me-2">
        <button className="btn btn-circle bg-black border-0 text-white btn-sm">
          <FaUser className="text-[16px]" />
        </button>
      </Link>
    </div>
  );
};

export default SocialLinks;
