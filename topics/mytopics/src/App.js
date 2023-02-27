

import React from 'react'
import './App.css';
import { useState , useEffect}  from 'react'




const App = () => {

  const [fake , setFake] = useState([])
  console.log(fake)
 
  useEffect (() =>{

    const fakeFunction = async() =>{
      const response = await fetch('https://api.escuelajs.co/api/v1/products')
      const data = await response.json()
      setFake(data)
  }
  
    fakeFunction()
  } , [])
  
// const fakeFunction = async() =>{
    // const response = await fetch('https://api.escuelajs.co/api/v1/products')
    // const data = await response.json()
    // setFake(data)
// }
// 
  return (
    <div className='container'>
      {fake.map((value) =>{
        return(
          <>
           <div className='box'>
           <div className='boxitems'>
             <img src={value.images} alt = ''/>
             <h3>{value.title}</h3>
              <h5>{value.price}</h5>
              <p>{value.description}</p>
             </div>
           </div>
          </>
        )
      })}
  </div>
  )
}

export default App




