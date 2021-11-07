import React from 'react';

const Added = (props) => {
    const addUsers = props.addUsers;
    

    const salary = addUsers.reduce((sum, user) => sum + user.location.street.number, 0)

    const displayStyle={float:'left',margin:'10px'}
   
    return (
        <div>
            <h1>Added user:{addUsers.length}</h1>
           
            <ul>
                {
                    addUsers.map(addUser =>
                            
                     <div style={displayStyle}> 
                     <div>
                    <p>Name: {addUser.name.first}</p>  
                    <img src={addUser.picture.medium} alt="" />
                    </div>
                    </div>)

                }
            </ul>

            <h2 style={{clear: 'both'}}>Total Added users Salary :${salary}</h2>

        </div>
    );
};

export default Added;