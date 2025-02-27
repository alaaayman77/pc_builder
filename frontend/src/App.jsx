import { useState } from "react";

import "./App.css";
import Login from "./components/login/login";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Login />
      <Signup />
    </>
  );
}

export default App;
