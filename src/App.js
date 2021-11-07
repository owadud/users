import './App.css';
import { useEffect, useState } from 'react';
import User from './Components/User/User'
import Added from './Components/Added/Added';



function App() {



  useEffect(() => {
    fetch('https://randomuser.me/api/?results=16')
      .then(response => response.json())
      .then(data => {
        setUser(data.results);
      })


    // .catch(error=> console.log(error))


  }, []);
  const [users, setUser] = useState([]);
  const [addUsers, setAdd] = useState([]);

  const addUser = (user) => {
    const newAdd = [...addUsers, user];
    setAdd(newAdd);

  }
  

  return (
    <div className="App">
      <Added addUsers={addUsers} ></Added>
     

     

      <ul>
        {
          users.map(user =>

            <User addUser={addUser} user={user} key={user.cell} ></User>

          )
        }
      </ul>


    </div>
  );
};

export default App;
