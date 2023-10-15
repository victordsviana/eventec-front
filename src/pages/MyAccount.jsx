import { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import "./myAccount.css";
import HomeNavbar from '../components/HomeNavbar';

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
    <><><div className="container">
      <div className="row d-flex justify-content-around ">
        <div className='col-5 myAccountBox'>
          <div class="modal fade" id="changePassword" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">Troca de senha</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <form>
                    <label className='form-label'>Confirmar Senha Atual:</label>
                    <input className='form-control' type='password' id='currentPassword' />

                    <label className='form-label'>Nova Senha:</label>
                    <input className='form-control' type='password' id='newPassword' />

                    <label className='form-label'>Confirmar Nova Senha:</label>
                    <input className='form-control' type='password' id='confirmNewPassword' />                    </form>

                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
                  <button type='submit' class="changePasswordBtn btn btn-primary" onClick={handleChangePassword}>Salvar</button>
                </div>
              </div>
            </div>
          </div>
          <div className='d-flex justify-content-between'>
            <h5>Olá, {userInfo?.userName || 'Nome não disponível'}! </h5>
            <h5></h5>
          </div>
          <form className='formContainer'>
            <label className='form-label'>Nome:</label>
            <input className='form-control' type="text" value={userInfo?.userName || ''} disabled />

            <label className='form-label'>E-Mail:</label>
            <input className='form-control' type="text" value={userInfo?.email || ''} disabled />

            <label className='form-label'>CPF:</label>
            <input className='form-control' type="text" value={userInfo?.cpf || ''} disabled />

            <label className='form-label'>E-Mail Institucional:</label>
            <input className='form-control' type="text" value={userInfo?.emailInstitucional || 'N/A'} disabled />

            <label className='form-label'>RA:</label>
            <input className='form-control' type="text" value={userInfo?.ra || 'N/A'} disabled />

            <label className='form-label'>Semestre:</label>
            <input className='form-control' type="text" value={userInfo?.semestre || 'N/A'} disabled />

            <label className='form-label'>Instituição de Ensino:</label>
            <input className='form-control' type="text" value={userInfo?.unidade || 'N/A'} disabled />

            <label className='form-label'>Curso:</label>
            <input className='form-control' type="text" value={userInfo?.curso || 'N/A'} disabled />
            <label className='form-label'>Senha:</label>
            <input className='form-control' type="password" value={userInfo?.password || ''} disabled />


          </form>

          <div className="col-12 changePasswordContainer">
            <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#changePassword">
              Quero trocar de senha
            </button>
          </div>
        </div>

        <div className="col-3 myAccountBox">

          <div className="d-flex align-items-center flex-column menuContainer">

            <div className="mb-auto p-2">
              <a href="/crudevent">
                <button className='btn btn-lg btn-primary'>Criar evento</button>
              </a>
            </div>
            <div className="p-2">
              <button type='submit' className='btn btn-danger' onClick={handleDeleteAccount}>
                EXCLUIR CONTA
              </button>
            </div>
          </div>

        </div>
      </div>
    </div><Footer /></></>
  );
}

export default MyAccount;
