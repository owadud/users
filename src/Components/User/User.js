import React from 'react';

const User = (props) => {
    const addUser = props.addUser;
    const { name, email, cell, picture, location } = props.user;
    const userStyle = {
        border: '2px solid black', width: '20%', padding: '10px', margin: '10px', float: 'left', height: '400px'
    }
    return (
        <div style={userStyle}>
            <img src={picture.large} alt="" />
            <h3>{name.first + ' ' + name.last}</h3>
            <h3>Mobile:  {cell}</h3>
            <h4>Email: {email}</h4>
            <h2>Salary:${location.street.number}</h2>
            <button onClick={() => addUser(props.user)}>Add user</button>
        </div>
    );
};

export default User;