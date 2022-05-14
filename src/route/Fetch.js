import axios from "axios";
import React, { useEffect, useState } from "react";

function Fetch() {
  const [user, setuser] = useState([]);
  

  const feachpost = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setuser(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {user.map((posts, index) => {
       return  <p key={index}> USERNAME-- {posts.name}</p>
      
      })}
      <button onClick={(()=>{
          feachpost()
    })}>click</button>
    </div>
  );
}

export default Fetch;
