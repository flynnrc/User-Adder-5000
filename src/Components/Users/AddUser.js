import React from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import { useState } from "react";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();

    if (userName.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }

    if (+age < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age, over 0 years old.",
      });
      return;
    }

    //console.log(userName);
    //console.log(age);
    props.onAddUser(userName, age);

    setUserName("");
    setAge("");
  };

  const userNameChangeHandler = (event) => {
    setUserName(event.target.value);
    //console.log(userName);
  };

  const userAgeChangeHandler = (event) => {
    setAge(event.target.value);
    //console.log(age);
  };

  const errorResolvedHandler = () => {
    setError(null);
  };

  //dynamic content via ternary
  var errorContent = error ? (
    <ErrorModal
      title={error.title}
      message={error.message}
      onConfirm={errorResolvedHandler}
    />
  ) : (
    ""
  );

  return (
    <div>
      {
        errorContent
        /* {error && (
        <ErrorModal title="An error occurred" message="Something Went Wrong." />
      )} */
      }
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={userName}
            onChange={userNameChangeHandler}
          ></input>
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={age}
            onChange={userAgeChangeHandler}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
