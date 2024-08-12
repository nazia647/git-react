// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>                                                                                                   
//     </>
//   )
// }

// export default App
  



// import React from 'react'

// function App() {                 
//   return (
//     <div>
//       <h1>hello</h1>
//       <p> i m nazia</p>
//       <P>it section</P>
//     </div>
//   )
// }

// export default App
   





// topic Hook starts

import React, { useEffect, useMemo, useState } from 'react';

function Hook() {
    const [count ,setCount]  = useState(0);
    const [data ,setData]  = useState(10);
//  useEffect(()=>{
//     const array = new Array(1000000000).fill(0)
//     console.log(array)
//     // console.log("soory working")
//  },[count]) 
//  useEffect(()=>{
//     console.log("data increase") 
//  },[data]) 
 const control = useMemo(()=>{
    return(
        <div>
            <h1 style={{color:"red"}} >Count in memo: {count} data {data} </h1>
        </div>
    )
 },[count])
  return (
    <div>
       

    {control}

  <h1>Count: {count}</h1>
  <h1>Data: {data}</h1>

  <button onClick={()=>{setCount(count+1)}} >increment count</button>
  <button onClick={()=>{setData(data+10)}} >increment data</button>
    </div>
  );
}

export default Hook;