import React from "react";

export default class Admins extends React.Component {
  constructor() {
    super();

    this.state = {
      users: [
        { name: "Nader", age: 22, isAdmin: true },
        { name: "Hany", age: 27, isAdmin: false },
        { name: "Mohammed", age: 52, isAdmin: true },
        { name: "Ali", age: 25, isAdmin: false },
      ],
    };
  }

  render() {
    return (
      <>
        <ul>
          {this.state.users.map((user, index) => {
            if (!user.isAdmin)
              return (
                <>
                  <li>
                    {" "}
                    {index} == {user.name} == {user.age}{" "}
                  </li>
                  <li>===================================================</li>
                </>
              );
          })}
        </ul>
      </>
    );
  }
}
