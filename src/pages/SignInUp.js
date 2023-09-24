import React, { useState } from 'react';
import Footer from '../components/Footer';
import LogoImg from '../static/Logo.svg'

const SignInUp = () => {
  const [action, setAction] = useState('Cadastrar');
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [emailInstitucional, setEmailInstitucional] = useState('');
  const [ra, setRA] = useState('');
  const [semestre, setSemestre] = useState('');
  const [turno, setTurno] = useState('');
  const [instituicao, setInstituicao] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('aluno');

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
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
            Usuário Comum
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
                <label htmlFor="password">Senha</label>
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
                <label htmlFor="nome">Nome*</label>
                <input
                  type="text"
                  id="nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />
              </div>
              <div className="input">
                <label htmlFor="emailInstitucional">E-mail Institucional*</label>
                <input
                  type="email"
                  id="emailInstitucional"
                  value={emailInstitucional}
                  onChange={(e) => setEmailInstitucional(e.target.value)}
                />
              </div>
              {userType === 'aluno' && (
                <>
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
                      type="text"
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
                    <label htmlFor="instituicao">Instituição de Ensino*</label>
                    <input
                      type="text"
                      id="instituicao"
                      value={instituicao}
                      onChange={(e) => setInstituicao(e.target.value)}
                    />
                  </div>
                </>
              )}
              {userType === 'professor' && (
                <div className="input">
                  <label htmlFor="instituicao">Instituição de Ensino*</label>
                  <input
                    type="text"
                    id="instituicao"
                    value={instituicao}
                    onChange={(e) => setInstituicao(e.target.value)}
                  />
                </div>
              )}
            </>
          )}
          <div className="forgotPassword">
            Esqueci a senha <span>Clique aqui</span>
          </div>
          <div className="submit-container">
            <div
              className={action === 'Login' ? 'submit gray' : 'submit'}
              onClick={() => setAction('Cadastrar')}
            >
              Cadastrar
            </div>
            <div
              className={action === 'Cadastrar' ? 'submit gray' : 'submit'}
              onClick={() => setAction('Login')}
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
