import { useState } from "react";

function ListRender() {
    const [list] = useState(["Marina", "Henrique", "Guilherme", "Marina"]);

    const [users, setUsers] = useState([
        { id: 1, name: "Marina", age: 38 },
        { id: 2, name: "Henrique", age: 10 },
        { id: 3, name: "Guilherme", age: 5 }
    ])

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4)
        setUsers((prevUsers) =>
            prevUsers.filter((user) => randomNumber != user.id)
        );
    };

  return (
      <div>
          {/* 4 - render sem key */}
          <ul>
              {list.map((item) => (
                  <li>{item}</li>
              ))}
          </ul>
          {/* 5 - render com key */}
          <ul>
              {users.map((user) => (
                  <li key={user.id}>{user.name} - {user.age} anos</li>
              ))}
          </ul>
          {/* 6 - previous state */}
          <button onClick={deleteRandom}>Delete random user</button>
    </div>
  )
}

export default ListRender