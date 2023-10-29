import { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import "./myAccount.css";
import { useNavigate } from 'react-router-dom';


const MyAccount = () => {
  const navigate = useNavigate();
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
        navigate('/');
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
        <div className='col-4 myAccountBox'>
          <div className="modal fade" id="changePassword" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">Troca de senha</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <form>
                    <label className='form-label'>Confirmar Senha Atual:</label>
                    <input className='form-control' type='password' id='currentPassword' />

                    <label className='form-label'>Nova Senha:</label>
                    <input className='form-control' type='password' id='newPassword' />

                    <label className='form-label'>Confirmar Nova Senha:</label>
                    <input className='form-control' type='password' id='confirmNewPassword' />                    </form>

                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
                  <button type='submit' className="changePasswordBtn btn btn-primary" onClick={handleChangePassword}>Salvar</button>
                </div>
              </div>
            </div>
          </div>


          <div className="modal fade" id="deleteAccount" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">Troca de senha</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <h1>Deseja realmente excluir a conta?</h1>
                  <button type='submit' className='btn btn-outline-danger' data-bs-toggle="modal" data-bs-target="#deleteAccount" onClick={handleDeleteAccount}>
                Quero excluir a conta.
              </button>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
                  
                </div>
              </div>
            </div>
          </div>


          <div className='d-flex justify-content-between'>
            <h5>Olá, {userInfo?.userName || 'Nome não disponível'}! </h5>
            <h5></h5>
          </div>
          <form className='formContainer'>
            <div className="form-floating mb-3">
              <input className='form-control' type="text" placeholder='Nome' value={userInfo?.userName || ''} disabled />
              <label className='form-label'>Nome:</label>
            </div>

            <div className="form-floating mb-3">
              <input className='form-control' type="text" value={userInfo?.email || ''} placeholder='E-mail' disabled />
              <label className='form-label'>E-Mail:</label>
            </div>

            <div className="form-floating mb-3">
              <input className='form-control' type="text" placeholder='CPF' value={userInfo?.cpf || ''} disabled />
              <label className='form-label'>CPF:</label>
            </div>

            <div className={`form-floating mb-3 ${!userInfo.emailInstitucional ? 'd-none' : ''}`}>
              <input className='form-control' type="text" placeholder='E-mail Institucional' value={userInfo?.emailInstitucional || 'N/A'} disabled />
              <label className='form-label'>E-Mail Institucional:</label>
            </div>

            <div className={`form-floating mb-3 ${!userInfo.ra ? 'd-none' : ''}`}>
              <input className='form-control' type="text" value={userInfo?.ra || 'N/A'} placeholder='RA' disabled />
              <label className='form-label'>RA:</label>
            </div>

            <div className={`form-floating mb-3 ${!userInfo.semestre ? 'd-none' : ''}`}>
              <input className='form-control' type="text" value={userInfo?.semestre || 'N/A'} placeholder='Semestre' disabled />
              <label className='form-label'>Semestre:</label>
            </div>

            <div className={`form-floating mb-3 ${!userInfo.unidade ? 'd-none' : ''}`}>
              <input className='form-control' type="text" value={userInfo?.unidade || 'N/A'} placeholder='Instituição de Ensino' disabled />
              <label className='form-label'>Instituição de Ensino:</label>            </div>

            <div className={`form-floating mb-3 ${!userInfo.curso ? 'd-none' : ''}`}>
              <input className='form-control' type="text" value={userInfo?.curso || 'N/A'} placeholder='Curso' disabled />
              <label className='form-label'>Curso:</label>
            </div>

            <div className="form-floating mb-3">
              <input className='form-control' type="password" value={userInfo?.password || ''} disabled />
              <label className='form-label'>Senha:</label>
            </div>


          </form>

          <div className="col-12 changePasswordContainer">
            <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#changePassword">
              Quero trocar de senha
            </button>
          </div>
        </div>

        <div className='col-4 myAccountBox'>

          <div className='d-flex justify-content-between'>
            <h5>Seu endereço: </h5>
            <h5></h5>
          </div>
          <form className='formContainer'>
            <div className="form-floating mb-3">
              <input className='form-control' type="text" placeholder='zipCode' value={userInfo?.zipCode || ''} disabled />
              <label className='form-label'>CEP:</label>
            </div>

            <div className="form-floating mb-3">
              <input className='form-control' type="text" value={userInfo?.street || ''} placeholder='street' disabled />
              <label className='form-label'>Endereço:</label>
            </div>

            <div className="form-floating mb-3">
              <input className='form-control' type="text" placeholder='Estado' value={userInfo?.state || ''} disabled />
              <label className='form-label'>Estado:</label>
            </div>

            <div className="form-floating mb-3">
              <input className='form-control' type="text" placeholder='Bairro' value={userInfo?.neighborhood || 'N/A'} disabled />
              <label className='form-label'>Bairro:</label>
            </div>

            <div className="form-floating mb-3">
              <input className='form-control' type="text" value={userInfo?.RA || 'N/A'} placeholder='Cidade' disabled />
              <label className='form-label'>Cidade:</label>
            </div>

          </form>
        </div>

        <div className="col-3 myAccountBox">

          <div className="d-flex align-items-center flex-column menuContainer">

            <div className="mb-auto p-2">
              <a href="/crudevent">
                <button className='btn btn-lg btn-primary'>Criar evento</button>
              </a>
            </div>
            <div className="mb-auto p-2">
              <a href="/MyEvents">
                <button className='btn btn-lg btn-primary'>Meus eventos</button>
              </a>
            </div>
            <div className="p-2">
              <button type='submit' className='btn btn-danger' data-bs-toggle="modal" data-bs-target="#deleteAccount">
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
