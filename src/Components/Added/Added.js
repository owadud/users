import React from 'react';

const Added = (props) => {
    const addUsers = props.addUsers;

    const salary = addUsers.reduce((sum, user) => sum + user.location.street.number, 0)

    return (
        <div>
            <h1>Added user:{addUsers.length}</h1>

            <h2>Total Added users Salary :${salary}</h2>

        </div>
    );
};

export default Added;