import React, {useState} from 'react';
import NavBar from "./components/Navbar";
import { Nav } from "reactstrap";

function App() {
  const [page, setPage] = useState(0)
  return (
    <div>
      <NavBar setPage={setPage} />
    </div>
  );
}

export default App;
