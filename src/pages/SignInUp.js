import React, { useState } from 'react';
import axios from 'axios';
import Footer from '../components/Footer';
import LogoImg from '../static/Logo.svg';
import { useNavigate } from 'react-router-dom';

const SignInUp = () => {
  const navigate = useNavigate();
  const [action, setAction] = useState('Cadastrar');
  const [userName, setUserName] = useState('');
  const [cpf, setCpf] = useState('');
  const [emailInstitucional, setEmailInstitucional] = useState('');
  const [ra, setRA] = useState('');
  const [semestre, setSemestre] = useState('');
  const [turno, setTurno] = useState('');
  const [instituicao, setInstituicao] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('usuarioComum');
  const [unidade, setUnidade] = useState('');
  const [curso, setCurso] = useState('');

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  const handleFormSubmit = async () => {
    if (action === 'Cadastrar') {
      try {
        const response = await axios.post('http://localhost:8080/api/users/create', {
          userName,
          email,
          password,
          userType,
          cpf,
          emailInstitucional,
          ra,
          semestre,
          turno,
          instituicao,
          unidade,
      });
        console.log('Registration Successful', response.data);
      } catch (error) {
        console.error('There was an error registering!', error);
      }
    } else if (action === 'Login') {
      try {
        const response = await axios.post('http://localhost:8080/login', {
          email,
          password,
        });
        console.log('Login Successful', response.data);

        // Redirect to the desired page on successful login
        navigate('/MyAccount');
      } catch (error) {
        console.error('There was an error logging in!', error);
      }
    }
  };

  return (
    <>
      <div className="containerInUp">
        <div className='logoNavbar'>
          <img src={LogoImg} alt="Logo" />
        </div>
        <div className="header">
          <div className="text">{action}</div>
        </div>
        <div className="user-type-input">
          <label>
            <input
              type="radio"
              value="aluno"
              checked={userType === 'aluno'}
              onChange={handleUserTypeChange}
            />
            Aluno*
          </label>
          <label>
            <input
              type="radio"
              value="usuarioComum"
              checked={userType === 'usuarioComum'}
              onChange={handleUserTypeChange}
            />
            Usuário Comum*
          </label>
          <label>
            <input
              type="radio"
              value="professor"
              checked={userType === 'professor'}
              onChange={handleUserTypeChange}
            />
            Professor*
          </label>
        </div>
        <div className="inputs">
          {action === 'Login' ? (
            <>
              <div className="input">
                <label htmlFor="email">E-mail*</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="input">
                <label htmlFor="password">Senha*</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </>
          ) : (
            <>
              <div className="input">
                <label htmlFor="userName">Nome*</label>
                <input
                  type="text"
                  id="userName"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
              <div className="input">
                <label htmlFor="email">E-mail*</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="input">
                <label htmlFor="email">CPF*</label>
                <input
                  type="number"
                  id="cpf"
                  value={cpf}
                  onChange={(e) => setCpf(e.target.value)}
                />
              </div>

              <div className="input">
                <label htmlFor="password">Senha*</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              {userType === 'aluno' && (
                <>

                  <div className="input">
                    <label htmlFor="emailInstitucional">E-mail Instituição*</label>
                    <input
                      type="text"
                      id="emailInstitucional"
                      value={emailInstitucional}
                      onChange={(e) => setEmailInstitucional(e.target.value)}
                    />
                  </div>

                  <div className="input">
                    <label htmlFor="ra">RA*</label>
                    <input
                      type="text"
                      id="ra"
                      value={ra}
                      onChange={(e) => setRA(e.target.value)}
                    />
                  </div>

                  <div className="input">
                    <label htmlFor="semestre">Semestre*</label>
                    <input
                      type="number"
                      id="semestre"
                      value={semestre}
                      onChange={(e) => setSemestre(e.target.value)}
                    />
                  </div>
                  <div className="input">
                    <label htmlFor="turno">Turno*</label>
                    <input
                      type="text"
                      id="turno"
                      value={turno}
                      onChange={(e) => setTurno(e.target.value)}
                    />
                  </div>
                  <div className="input">
                    <label htmlFor="unidade">Instituição de Ensino*</label>
                    <select type="text"
                      id="unidade"
                      value={unidade}
                      onChange={(e) => setUnidade(e.target.value)}>
                      <option value={unidade}>Fatec São Bernardo do Campo</option>
                      <option value={unidade}>Fatec Diadema</option>
                    </select>
                  </div>

                  <div className="input">
                    <label htmlFor="curso">Curso*</label>
                    <select type="text"
                      id="curso"
                      value={curso}
                      onChange={(e) => setCurso(e.target.value)}>
                      <option value={curso}>Desenvolvimento de Software</option>
                      <option value={curso}>Gestão da Produção Industrial</option>
                    </select>
                  </div>
                </>
              )}
              {userType === 'professor' && (

                <><div className="input">
                    <label htmlFor="instituicao">Instituição de Ensino*</label>
                    <input
                      type="text"
                      id="instituicao"
                      value={instituicao}
                      onChange={(e) => setInstituicao(e.target.value)} />
                  </div><div className="input">
                      <label htmlFor="emailInstitucional">E-mail Instituição*</label>
                      <input
                        type="text"
                        id="emailInstitucional"
                        value={emailInstitucional}
                        onChange={(e) => setEmailInstitucional(e.target.value)} />
                    </div></>
              )}

            </>
          )}
          <div className="forgotPassword">
            Esqueci a senha <span>Clique aqui</span>
          </div>
          <div className="submit-container">
            <div
              className={action === 'Login' ? 'submit gray' : 'submit'}
              onClick={() => {
                if (action === 'Cadastrar') {
                  handleFormSubmit();
                } else {
                  setAction('Cadastrar');
                }
              }}
            >
              Cadastrar

            </div>
            <div
              className={action === 'Cadastrar' ? 'submit gray' : 'submit'}
              onClick={() => {
                if (action === 'Login') {
                  handleFormSubmit();
                } else {
                  setAction('Login');
                }
              }}
            >
              Entrar
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignInUp;