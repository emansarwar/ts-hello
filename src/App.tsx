

// import logo from './logo.svg';
// import './App.css';

import { useState } from "react";
import TheLayout from "./views/pages/TheLayout";


function App() {
  const [state, setSate] = useState();
  return (
    <div>
<TheLayout></TheLayout>
    </div>
  );
}

export default App;
