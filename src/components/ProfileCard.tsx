import React from "react";

const ProfileCard = () => {
  return (
    <div className="flex justify-center h-screen items-center">
      <div className="flex flex-col items-center justify-center p-10 bg-gray-700 rounded-md">
        <img
          src="https://randomuser.me/api/portraits/women/24.jpg"
          className="rounded-full w-20 h-20"
          alt="user icon"
        />
        <div className="font-semibold text-2xl text-white">Jessica Randali</div>
        <div style={{ color: "hsl(75, 94%, 57%)" }}>London, United Kingdom</div>
        <div className="text-white mt-4">
          "Front-end developer and avid reader"
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
