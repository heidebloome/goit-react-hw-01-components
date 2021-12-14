import "./App.css";

import user from "./profile/user.json";
import Profile from "./profile/Profile";
import data from "./statistics/data.json";
import Statistics from "./statistics/Statistics";
import friends from "./friends/friends.json";
import FriendList from "./friends/FriendList";
import transactions from "./transactions/transactions.json";
import TransactionHistory from "./transactions/TransactionHistory";

function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
