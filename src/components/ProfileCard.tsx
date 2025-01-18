import React from "react";
import SocmedAccounts from "./SocmedAccounts.tsx";

interface IProfileCardPropd {
  accounts: { platform: string; url: string }[];
}
const ProfileCard = (props: IProfileCardPropd) => {
  return (
    <div className="flex justify-center h-screen items-center">
      <div className="flex flex-col items-center justify-center p-10 bg-gray-800 rounded-md">
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

        <div className="mt-4">
          <SocmedAccounts accounts={props.accounts} />
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
