import React from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import { useState } from 'react';

const AddUser = props => {
    const [userName, setUserName] = useState('');
    const [age, setAge] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault(); 
        
        if(userName.trim().length === 0 || age.trim().length === 0){
            return;
        }

        if(+age < 1){
            return;
        }
        
        console.log(userName);
        console.log(age); 
        setUserName('');
        setAge('');
    };  

    const userNameChangeHandler = (event) => {
        setUserName(event.target.value);
        //console.log(userName);
    }

    const userAgeChangeHandler = (event) => {
        setAge(event.target.value);
        //console.log(age);
    }

    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" value={userName} onChange={userNameChangeHandler}></input>
                <label htmlFor='age'>Age (Years)</label>
                <input id="age" type="number" value={age} onChange={userAgeChangeHandler}></input>
                <Button type='submit'>Add User</Button>
            </form>
        </Card>
    )
};

export default AddUser;