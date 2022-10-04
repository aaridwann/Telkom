import React from 'react'
import { useDispatch } from 'react-redux';
import { addUser } from '../../redux/Slice/User';


function CardComponent() {
  const dispatch = useDispatch()
  async function Login () {
    try {
      const response = await fetch('https://github.com/login/oauth/authorize')
      const data = await response.json()
      dispatch(addUser({payload:data}))
      // console.log(data);
    } catch (error) {
     console.log(error) 
    }
  }

  return (
    <div className=' bg-slate-50 w-full h-80 flex items-center justify-center '>'
     <button className=' bg-green-700 px-4 py-1 rounded-xl text-white' onClick={Login}><p>Login</p></button>
    </div>
  )
}

export default CardComponent
