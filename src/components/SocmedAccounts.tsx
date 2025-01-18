import React from "react";

interface ISocmedAcc {
  name: string;
  url?: string;
}
const SocmedAccounts = (props: ISocmedAcc) => {
  return (
    <div className="text-white text-center font-semibold flex bg-gray-700 w-64 p-2 rounded-md">
      <div className="cursor-pointer">
        <a href={props.url} target="_blank">
          {props.name}
        </a>
      </div>
    </div>
  );
};

export default SocmedAccounts;
