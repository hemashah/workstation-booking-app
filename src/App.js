
import React, { useState } from "react";
import { BrowserRouter, Link, Route, Routes  } from 'react-router-dom';
import Register from './Register';
import Layout from "./Layout";
import Login from './Login';
import Machine from './Machine';


function App() {
    const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (

          // <div className="App">
          //   {
          //     currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
          //   }
          // </div>
          <div className="App">
            
          <h1>Booking System</h1>
          <BrowserRouter>
          <nav>
          {
          /* <ul>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </ul> */}
        </nav>
            {/* <Routes>
              <Route path="/" component={<Register />} /> */}
                
              {/* </Route> */}
              {/* <Route path="/login">
                <Login />
              </Route> */}
              {/* <Route path="/whale">
                <Whale />
              </Route> */}
            {/* </Routes> */}
            <Routes>
        <Route path="/" element={<Layout />}>
        
        
          {/* <Route index element={<Register />} /> */}
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="machine" element={<Machine />} />

          {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
      </Routes>
          </BrowserRouter>
        </div>
        );
}

export default App;


// import React from 'react';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import './App.css';

// import Manatee from '../Manatee/Manatee';
// import Narwhal from '../Narwhal/Narwhal';
// import Whale from '../Whale/Whale';

// function App() {
//   return (
//     <div className="wrapper">
//       <h1>Marine Mammals</h1>
//       <BrowserRouter>
//         <Switch>
//           <Route path="/manatee">
//             <Manatee />
//           </Route>
//           <Route path="/narwhal">
//             <Narwhal />
//           </Route>
//           <Route path="/whale">
//             <Whale />
//           </Route>
//         </Switch>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;
// export default App;

// /////
// import React, { useState } from "react";
// import logo from './logo.svg';
// import './App.css';
// import { Login } from "./Login";
// import { Register } from "./Register";

// function App() {
//   const [currentForm, setCurrentForm] = useState('login');

//   const toggleForm = (formName) => {
//     setCurrentForm(formName);
//   }

//   return (
//     <div className="App">
//       {
//         currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
//       }
//     </div>
//   );
// }

// export default App;