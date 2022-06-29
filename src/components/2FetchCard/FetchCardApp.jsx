import React, { useState } from "react";
import { getUser } from "./helpers/getUser";

function FetchCardApp() {
  const [user, setUser] = useState(getUser);

  console.log(user);

  return (
    <div>
      <span>FetchCardApp</span>
    </div>
  );
}

export default FetchCardApp;
