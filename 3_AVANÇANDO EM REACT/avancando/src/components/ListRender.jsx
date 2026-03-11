import { useState } from "react";

function ListRender() {
    const [list] = useState(["Marina", "Henrique", "Guilherme"]);
  return (
      <div>
          <ul>
              {list.map((item) => (
                  <li>{item}</li>
              ))}
          </ul>
    </div>
  )
}

export default ListRender