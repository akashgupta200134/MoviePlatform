import React from 'react'
import { createContext } from 'react';
import { useState } from 'react'





export const UserContext = createContext();


const Context = (props) => {


    const [users, setUsers] = useState([
       
        {    
            id :1,
            name : "Akash", 
            age  :24 , 
            city : "Mumbai"
        },

        {    
            id :2,
            name : "Shikha", 
            age  :23 , 
            city : "Heaven"
        },

        {   
            id :3,
            name : "Ram", 
            age  :20 , 
            city : "Ayodhya"
        }
    ]);

    // console.log(users);
    


  
  return (
     <UserContext.Provider value = {{users , setUsers}}>
     {props.children}
   </UserContext.Provider>
  
  )
   


}

export default Context;
