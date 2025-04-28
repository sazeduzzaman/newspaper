import React from "react";

const page = () => {
  return (
    <div className="dark:bg-white">
      <div className="container mx-auto sm:px-0 mx w-2/3 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-12 lg:grid-cols-2 xl:grid-cols-2 gap-6 justify-center items-center">
          {/* First Card */}
          <div className="card bg-primary text-primary-content shadow-2xl">
            <div className="card-body text-center w-full">
              <h2 className="card-title text-7xl">লগিন করুন !</h2>
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
              <div className="card-actions justify-end">
                <button className="btn">Buy Now</button>
              </div>
            </div>
          </div>
          {/* Second Card */}
          <div className="card bg-primary text-primary-content shadow-2xl">
            <div className="card-body">
              <h2 className="card-title">Card title!</h2>
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
              <div className="card-actions justify-end">
                <button className="btn">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
