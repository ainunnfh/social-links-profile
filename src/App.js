import React from "react";
import "./App.css";
import ProfileCard from "./components/ProfileCard.tsx";

const App = () => {
  const socialAccounts = [
    { platform: "Github", url: "https://www.github.com" },
    { platform: "Frontend Mentor", url: "https://www.frontendmentor.io" },
    { platform: "Linkedin", url: "https://www.linkedin.com" },
    { platform: "Twitter", url: "https://www.twitter.com" },
    { platform: "Instagram", url: "https://www.instagram.com" },
  ];

  return (
    <div>
      <ProfileCard accounts={socialAccounts} />
    </div>
  );
};

export default App;
