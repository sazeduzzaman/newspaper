import React from "react";

// Define the type of props for the component
interface SectionHeaderProps {
  title: string; // `title` will be a string
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
  return (
    <div
      className="post-header-title flex items-center rounded-lg p-4 text-white"
      style={{
        backgroundImage:
          "linear-gradient(45deg, #165588, #ed1e2b 51%, #165588)",
      }}
    >
      <div className="flex items-center">
        <img
          alt="test"
          title="test"
          loading="lazy"
          width="50"
          height="40"
          decoding="async"
          className="pe-2"
          src="https://ajkal.us/_next/image?url=https%3A%2F%2Fajkal.us%2Fimg%2Fsettings%2FAsset-2.png&w=64&q=75"
        />
        <h4 className="mb-0 ml-3 text-2xl font-semibold">{title}</h4>
      </div>
    </div>
  );
};

export default SectionHeader;
