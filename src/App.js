import "./App.css";
import ProfileCard from "./components/ProfileCard.tsx";
import SocmedAccounts from "./components/SocmedAccounts.tsx";
function App() {
  return (
    <div>
      <ProfileCard
        children={<SocmedAccounts name="Github" url="https://github.com/" />}
      />
    </div>
  );
}

export default App;
