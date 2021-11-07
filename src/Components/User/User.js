import React from 'react';
import Button from 'react-bootstrap/Button';


const User = (props) => {
    const addUser = props.addUser;
    const { name, email, cell, picture, location } = props.user;
    
    const userStyle = {
        border: '2px solid black', width: '20%', padding: '10px', margin: '10px', float: 'left', height: '450px'
    } 
    return (
        
        <div style={userStyle}>
            <img src={picture.large} alt="" />
            <h3>{name.first + ' ' + name.last}</h3>
            <p>Mobile:  {cell}</p>
            <p>Email: {email}</p>
            <h2>Salary:${location.street.number}</h2>
            <Button variant="success"  onClick={() => addUser(props.user)}>Add user</Button>
            
        </div>
    );
};

export default User;