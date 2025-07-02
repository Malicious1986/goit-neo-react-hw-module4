import "./App.css";
import friends from "../friends.json";
import transactions from "../transactions.json";
import userData from "../userData.json";
import FriendsList from "./FriendList/FriendsList";
import Profile from "./Profile/Profile";
import TransactionHistory from "./TransactionHistory/TransactionHistory";

function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
