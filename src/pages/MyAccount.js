
import { useState, useEffect } from 'react'
import "./myAccount.css"
import CompleteAccount from '../components/CompleteAccount'

const MyAccount = () => {
  const [userInfo, setInfo] = useState({})
  const [erro, setErro] = useState(null)

  useEffect(() => {
    const consult = async () => {
      try {
        const answer = await fetch("http://localhost:8080/myAccount")
        if (!answer.ok) {
          throw new Error();
        }
        const data = await answer.json()
        console.log(JSON.stringify(data));
        setInfo(data[0])
      } catch (error) {
        setErro(error.message)
      }
    }

    consult()
  }, [])

  if (erro) {
    return (
      <>
        <h3>{erro}</h3>
      </>
    )
  } else {
    return (
      <><div className='myAccountBox myAccountContainer'>
        <div>
          <h1>Quase lá, {userInfo.userName}! </h1>
          <h3>Conclua o seu cadastro.</h3>
        </div>
        <form className='formContainer'>
          <label>Nome:</label>
          <input type="text" value={userInfo.userName} disabled />

          <label>E-Mail:</label>
          <input type="text" value={userInfo.email} disabled />
        </form>

      <CompleteAccount />
      </div>
      </>

    )
  }
}

export default MyAccount;