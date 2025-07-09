import { useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([
    { name: "Nader", age: 22, isAdmin: true },
    { name: "Hany", age: 27, isAdmin: false },
    { name: "Mohammed", age: 52, isAdmin: true },
    { name: "Ali", age: 25, isAdmin: false },
  ]);

  const [isAuth, SetIsAuth] = useState(false);

  return (
    <>
      <ul>
        {isAuth ? (
          users.map((user, index) => {
            return (
              <li key={index}>
                {user.name} === {user.age}
              </li>
            );
          })
        ) : (
          <h1>Please Login</h1>
        )}
      </ul>


      <button onClick={()=>{SetIsAuth(!isAuth)}}>Toggle State</button>
    </>
  );
}
