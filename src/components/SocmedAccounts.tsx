import React from "react";

interface ISocmedAcc {
  accounts: { platform: string; url: string }[];
}
const SocmedAccounts = (props: ISocmedAcc) => {
  return (
    <div>
      <ul className="space-y-3">
        {props.accounts.map((account, index) => (
          <li key={index} className="my-2">
            <a
              className="text-white font-semibold flex justify-around bg-[#333333] w-64 p-2 rounded-md"
              href={account.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {account.platform}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocmedAccounts;
