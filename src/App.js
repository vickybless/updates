import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import UsersList from "./components/UI/UsersList";
import NewLogs from "./components/UI/NewLogs";

function App() {
  const [newLogs, setNewLogs] = useState([]);

  const addUserHandler = (uDate, uLogOne, uLogTwo, uLogThree) => {
    setNewLogs((prevnewLogs) => {
      return [
        ...prevnewLogs,
        {
          date: uDate,
          logone: uLogOne,
          logtwo: uLogTwo,
          logthree: uLogThree,
          id: Math.random().toString(),
        },
      ];
    });
  };
  return (
    <div>
      <Navbar />;
      <UsersList onAddUser={addUserHandler} />;
      <NewLogs logs={newLogs} />
    </div>
  );
}

export default App;
