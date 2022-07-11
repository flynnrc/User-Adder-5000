import React, { useState } from "react";
import AddUser from "./Components/Users/AddUser";
import UserList from "./Components/Users/UserList";

function App(props) {
  const [userList, setUserList] = useState([]);

  const onAddUserHandler = (userName, userAge) => {
    setUserList((previousUserList) => {
      return [...previousUserList, {name: userName, age: userAge, id: Math.random() }];
    });
  };

  return (
    <>
      <AddUser onAddUser={onAddUserHandler} />
      <UserList users={userList} />
    </>
  );
}

export default App;
