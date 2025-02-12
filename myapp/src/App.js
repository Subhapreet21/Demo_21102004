// function App() {
//   // let ele = React.createElement(
//   //   "div",
//   //   { className: "App" },
//   //   React.createElement("h1", null, "Header")
//   // );
//   let username = "Rohan";
//   return (
//     // <div className="App">
//     //   <h1 style={{ color: "red" }}>Name: Subhapreet Patro</h1>
//     //   <input />
//     // </div>
//     // <section>
//     //   <h1>One JSX Element</h1>
//     //   <p>lorem3</p>
//     // </section>
//     <div>
//       <h1>{username}</h1>
//       <p>{100 + 100}</p>
//     </div>
//   );
// }

// export default App;

// ! Components
// ? CBC

// class App extends React.Component {
//   render() {
//     return <h1>Class based Component</h1>;
//   }
// }

// export default App;

// ? FBC
// function App() {
//   return <h1>Functional Based Component</h1>;
// }
// export default App;

// OR

// const App = () => {
//   return <h1>Functional based Component</h1>;
// };
// export default App;

// !Component composition
// import React from "react";
// import Navbar from "./components/Navbar";
// import Main from "./components/Main";
// import Sidebar1 from "./components/Sidebar1";
// import Sidebar2 from "./components/Sidebar2";
// import Footer from "./components/Footer";

// const App = () => {
//   return (
//     <div className="app">
//       <Navbar />
//       <Main />
//       <div className="sidebar">
//         <Sidebar1 />
//         <Sidebar2 />
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default App;

// ! props
import React, { Component } from "react";
import CBCPropEx from "./propsex/CBCPropEx";

export default class App extends Component {
  render() {
    return (
      <div>
        App
        <CBCPropEx username="Subhapreet" />
      </div>
    );
  }
}
