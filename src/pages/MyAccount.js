import { useState, useEffect } from 'react'
import "./myAccount.css"

const MyAccount =() => {
  const [userInfo, setInfo] = useState([])
  const [erro, setErro] = useState(null)

  useEffect(() => {
    const consult = async() =>{
      try {
        const answer = await fetch("http://localhost:8080/myAccount")
        if (!answer.ok) {
          throw new Error();          
        }
        const data = await answer.json()
        console.log(JSON.stringify(data));
        setInfo(data)
      } catch (error) {
        setErro(error.message)
      }
    }

    consult()
  }, [])

if (erro) {
  return(
    <>
    <h3>ERRO!!!</h3>
    </>
  )
} else {
  return(
    <div className='myAccountBox'>
    <form className='formContainer'>
       <label>Nome:</label>
       <input type="text" value={userInfo.userName} />

      <label>E-Mail:</label>
      <input type="text" value={userInfo.email} />

    </form>
    {userInfo.userName}
  </div>
  )
}
}

export default MyAccount;