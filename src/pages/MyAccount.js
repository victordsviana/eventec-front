
import { useState, useEffect } from 'react'
import "./myAccount.css"
import CompleteAccount from '../components/CompleteAccount'

const MyAccount = () => {
  const [userInfo, setInfo] = useState({})
  const [erro, setErro] = useState(null)

  useEffect(() => {
    const consult = async () => {
      try {
        const answer = await fetch("http://localhost:8080/api/users/myAccount")
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
          <h1>Olá, {userInfo.userName}! </h1>
          <h3>Minha conta.</h3>
        </div>
        <form className='formContainer'>
          <label>Nome:</label>
          <input type="text" value={userInfo.userName} disabled />

          <label>E-Mail:</label>
          <input type="text" value={userInfo.email} disabled />

          <label>CPF:</label>
          <input type="text" value={userInfo.cpf} disabled />

          <label>E-Mail Institucional:</label>
          <input type="text" value={userInfo.emailInstitucional} disabled />

          <label>RA:</label>
          <input type="text" value={userInfo.ra} disabled />

          <label>Semestre:</label>
          <input type="text" value={userInfo.email} disabled />

          <label>Instituição de Ensino:</label>
          <input type="text" value={userInfo.unidade} disabled />

          <label>Curso:</label>
          <input type="text" value={userInfo.curso} disabled />

          <label>Senha:</label>
          <input type="password" value={userInfo.password} disabled />
        </form>

        <button type='submit' className='deleteAccountBtn'>EXCLUIR CONTA</button>

      </div>
      </>

    )
  }
}

export default MyAccount;