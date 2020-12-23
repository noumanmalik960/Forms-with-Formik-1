// import React, { useRef } from "react";

// export const Form = () => {
//   const nameEl = useRef();
//   const ageEl = useRef();

//   const submitHandler = (e) => {
//     // will get the vals from inputs and log them
//     e.preventDefault();
//     console.log(nameEl.current.value);
//     console.log(ageEl.current.value);
//   };
//   // manual validation functions

//   return (
//     <div>
//       <form onSubmit={submitHandler}>
//         <div>
//           <label htmlFor="name">Name</label>
//           <input ref={nameEl} type="text" id="name" />
//         </div>
//         <div>
//           <label htmlFor="age">age</label>
//           <input type="number" ref={ageEl} id="age" />
//         </div>
//         <button>Submit</button>
//       </form>
//     </div>
//   );
// };
import React from "react";

export const Form = () => {
  return <div>Forms</div>;
};
