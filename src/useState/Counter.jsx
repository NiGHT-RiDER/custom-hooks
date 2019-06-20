import React from "react";

// class Counter extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0
//     };
//   }

//   render() {
//     return (
//       <button
//         onClick={() =>
//           this.setState(prevState => ({ count: prevState.count + 1 }))
//         }
//       >
//         {this.state.count}
//       </button>
//     );
//   }
// }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
const Counter = props => {
  const [count, setCount] = React.useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
};

export default Counter;
