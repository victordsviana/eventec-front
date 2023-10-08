import { useState, useEffect } from 'react';
import "./myAccount.css";

const MyAccount = () => {
  const [userInfo, setInfo] = useState({});
  const [erro, setErro] = useState(null);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [changePasswordError, setChangePasswordError] = useState(null);
  const [showPasswordFields, setShowPasswordFields] = useState(false);

  const handleChangePassword = async () => {
    const currentPasswordInput = document.getElementById('currentPassword');
    const newPasswordInput = document.getElementById('newPassword');
    const confirmNewPasswordInput = document.getElementById('confirmNewPassword');
  
    const currentPassword = currentPasswordInput.value;
    const newPassword = newPasswordInput.value;
    const confirmNewPassword = confirmNewPasswordInput.value;
  
    if (newPassword !== confirmNewPassword) {
      setChangePasswordError('As senhas não coincidem');
      return;
    }
  
    try {
      const response = await fetch(`http://localhost:8080/api/users/changePassword?email=${userInfo.email}&currentPassword=${currentPassword}&newPassword=${newPassword}`, {
        method: 'POST',
      });
  
      if (response.ok) {
        setCurrentPassword('');
        setNewPassword('');
        confirmNewPasswordInput.value = '';
        setChangePasswordError(null);
        console.log("Senha trocada com sucesso! Favor fazer login novamente");
        window.location.href = '/signinup';
      } else {
        setChangePasswordError('Senha atual incorreta');
      }
    } catch (error) {
      console.error('Erro ao trocar a senha:', error);
      setChangePasswordError('Erro ao trocar a senha');
    }
  };
  

  const handleDeleteAccount = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/users/deleteAccount?email=${userInfo.email}&password=${userInfo.password}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        console.log("Excluído com sucesso")
      } else {
      }
    } catch (error) {
      console.error('Erro ao excluir a conta:', error);
    }
  };

  useEffect(() => {
    const email = localStorage.getItem('userEmail');
    const password = localStorage.getItem('userPassword');
    
    const consult = async () => {
      try {
        const url = `http://localhost:8080/api/users/myAccount?email=${email}&password=${password}`;
        const answer = await fetch(url);
        if (!answer.ok) {
          throw new Error();
        }
        const data = await answer.json()
        setInfo(data)
      } catch (error) {
        setErro(error.message)
      }
    }

    consult()
  }, [])

  return (
    <div className='myAccountBox myAccountContainer'>
      <div>
        <h1>Olá, {userInfo?.userName || 'Nome não disponível'}! </h1>
        <h3>Minha conta.</h3>
      </div>
      <form className='formContainer'>
      <label>Nome:</label>
          <input type="text" value={userInfo?.userName || ''} disabled />

          <label>E-Mail:</label>
          <input type="text" value={userInfo?.email || ''} disabled />

          <label>CPF:</label>
          <input type="text" value={userInfo?.cpf || ''} disabled />

          <label>E-Mail Institucional:</label>
          <input type="text" value={userInfo?.emailInstitucional || 'N/A'} disabled />

          <label>RA:</label>
          <input type="text" value={userInfo?.ra || 'N/A'} disabled />

          <label>Semestre:</label>
          <input type="text" value={userInfo?.semestre || 'N/A'} disabled />

          <label>Instituição de Ensino:</label>
          <input type="text" value={userInfo?.unidade || 'N/A'} disabled />

          <label>Curso:</label>
          <input type="text" value={userInfo?.curso || 'N/A'} disabled />
          <label>Senha:</label>
          <input type="password" value={userInfo?.password || ''} disabled />

        <button type='button' className='changePassword' onClick={() => setShowPasswordFields(!showPasswordFields)}>
          Quero trocar de senha
        </button>

        {showPasswordFields && (
          <div className='changePasswordBox'>
            <label>Confirmar Senha Atual:</label>
            <input type='password' id='currentPassword' />

            <label>Nova Senha:</label>
            <input type='password' id='newPassword' />

            <label>Confirmar Nova Senha:</label>
            <input type='password' id='confirmNewPassword' />
            <button type='submit' className='changePasswordBtn' onClick={handleChangePassword}>
          Trocar senha
        </button>
          </div>
        )}


        <button type='submit' className='deleteAccountBtn' onClick={handleDeleteAccount}>
          EXCLUIR CONTA
        </button>
      </form>
    </div>
  );
}

export default MyAccount;
