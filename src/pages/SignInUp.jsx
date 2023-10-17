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
  const [instituicao, setInstituicao] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('usuarioComum');
  const [unidade, setUnidade] = useState('');
  const [curso, setCurso] = useState('');

  const [zipCode, setZipcode] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [street, setStreet] = useState('');


  const handleZipCodeChange = async (cepValue) => {
    setZipcode(cepValue);
  
    if (cepValue.length === 8) {
      try {
        const response = await axios.get(`http://localhost:8080/api/endereco/${cepValue}`);
        const enderecoData = response.data;
  
        if (enderecoData) {
          setState(enderecoData.state || ''); 
          setCity(enderecoData.city || '');  
          setNeighborhood(enderecoData.neighborhood || ''); 
          setStreet(enderecoData.street || '');  
        }
      } catch (error) {
        console.error("Erro ao buscar endereço pelo CEP:", error);
      }
    }
  };
  
  

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
          curso,
          instituicao,
          unidade,
          zipCode,
          state,
          city,
          street,
          neighborhood
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
        localStorage.setItem('userId', response.data.userId);
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userPassword', password);
        const accountDetailsResponse = await axios.get(`http://localhost:8080/api/users/myAccount?email=${email}&password=${password}`);
        console.log('Account Details:', accountDetailsResponse.data);
        navigate('/MyAccount');
      } catch (error) {
        console.error('There was an error logging in!', error);
      }
    }
  };

  return (
    <>
      <div className="container">
        <div className="row formStyle">
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
          <div className="row">
            {action === 'Login' ? (
              <>
              <div className="row justify-content-center">
                <div className="col-4">
                <div className="form-floating mb-3">
                  <input className='form-control'
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} placeholder='E-mail*'
                  />
                  <label className='form-label' htmlhtmlFor="email">E-mail*</label>
                </div>

                <div className="form-floating mb-3">
                  <input className='form-control'
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Senha*'
                  />
                  <label className='form-label' htmlhtmlFor="password">Senha*</label>
                </div>
                </div>
              </div>
                
              </>
            ) : (
              <>
                <div className="col-4">
                  <div className="d-flex justify-content-start">
                    <h3>Informações básicas</h3>
                  </div>

                  <div className="form-floating mb-3">
                    <input
                      className="form-control" type="text" id="userName" value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      placeholder="Nome*"
                    />
                    <label htmlFor="userName">Nome*</label>
                  </div>

                  <div className="form-floating mb-3">
                    <input className='form-control'
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="email@email.com*"
                    />
                    <label htmlhtmlFor="email">E-mail*</label>
                  </div>

                  <div className="form-floating mb-3">
                    <input className='form-control'
                      type="number"
                      id="cpf"
                      value={cpf}
                      onChange={(e) => setCpf(e.target.value)}
                      placeholder='CPF'
                    />
                    <label className='form-label' htmlhtmlFor="email">CPF*</label>
                  </div>

                  <div className="form-floating mb-3">
                    <input className='form-control'
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder='Password'
                    />
                    <label className='form-label' htmlhtmlFor="password">Senha*</label>
                  </div>

                </div>


                <div className="col-4">
                  <div className="d-flex justify-content-start">
                    <h3>Endereço</h3>
                  </div>
                  <div className="form-floating mb-3">
                    <input className='form-control'
                      type="text"
                      id="zipCode"
                      value={zipCode}
                      placeholder='CEP'
                      onChange={(e) => {
                        setZipcode(e.target.value);
                        handleZipCodeChange(e.target.value);
                      }}
                    />
                      <label className='form-label' htmlhtmlFor="zipCode">CEP*</label>
                  </div>

                  <div className="form-floating mb-3">
                    <input className='form-control'
                      type="text"
                      id="state"
                      placeholder='Estado*'
                      value={state}
                      onChange={(e) => setState(e.target.value)} disabled
                    />
                    <label className='form-label' htmlhtmlFor="state">Estado*</label>
                  </div>

                  <div className="form-floating mb-3">
                    <input className='form-control'
                      type="text"
                      id="city"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder='Cidade*' disabled
                    />
                    <label className='form-label' htmlhtmlFor="city">Cidade*</label>
                  </div>

                  <div className="form-floating mb-3">
                    <input className='form-control'
                      type="text"
                      id="neighborhood"
                      value={neighborhood}
                      onChange={(e) => setNeighborhood(e.target.value)}
                      placeholder='Bairro*' disabled
                    />
                    <label className='form-label' htmlhtmlFor="neighborhood">Bairro*</label>
                  </div>

                  <div className="form-floating mb-3">
                    <input className='form-control'
                      type="text"
                      id="street"
                      value={street}
                      onChange={(e) => setStreet(e.target.value)}
                      placeholder='Rua*' disabled
                    />
                    <label className='form-label' htmlhtmlFor="street">Rua*</label>
                  </div>

                </div>





                {userType === 'aluno' && (
                  <>
                    
                      <div className="col-4">
                        <div className="d-flex justify-content-start">
                          <h3>Informações adicionais</h3>
                        </div>
                        <div className="form-floating mb-3">
                          <input className='form-control'
                            type="text"
                            id="emailInstitucional"
                            value={emailInstitucional}
                            onChange={(e) => setEmailInstitucional(e.target.value)}
                            placeholder='Email institucional'
                          />
                          <label className='form-label' htmlhtmlFor="emailInstitucional">E-mail Instituição*</label>
                        </div>

                        <div className="form-floating mb-3">
                          <input className='form-control'
                            type="text"
                            id="ra"
                            value={ra}
                            onChange={(e) => setRA(e.target.value)}
                            placeholder='RA'
                          />
                          <label className='form-label' htmlhtmlFor="ra">RA*</label>
                        </div>

                        <div className="form-floating mb-3">
                          <input className='form-control'
                            type="number"
                            id="semestre"
                            value={semestre}
                            onChange={(e) => setSemestre(e.target.value)}
                            placeholder='Semestre'
                          />
                          <label className='form-label' htmlhtmlFor="semestre">Semestre*</label>
                        </div>

                        <div className="form-floating mb-3">
                          <select className='form-select'
                            type="text"
                            id="unidade"
                            value={unidade}
                            onChange={(e) => setUnidade(e.target.value)}
                          >
                            <option value="Fatec São Bernardo do Campo">Fatec São Bernardo do Campo</option>
                            <option value="Fatec Diadema">Fatec Diadema</option>
                          </select>
                          <label className='form-label' htmlhtmlFor="unidade">Instituição de Ensino*</label>
                        </div>

                        <div className="form-floating mb-3">
                          <select className='form-select'
                            type="text"
                            id="curso"
                            value={curso}
                            onChange={(e) => setCurso(e.target.value)}
                          >
                            <option value="Desenvolvimento de Software Multiplataforma">Desenvolvimento de Software Multiplataforma</option>
                            <option value="Gestão da Produção Industrial">Gestão da Produção Industrial</option>
                          </select>
                          <label className='form-label' htmlhtmlFor="curso">Curso*</label>
                        </div>


                      </div>
                    
                  </>
                )}
                {userType === 'professor' && (
                  <>
                    
                      <div className="col-4">
                        <div className="d-flex justify-content-start">
                          <h3>Informações adicionais</h3>
                        </div>
                        <div className="form-floating mb-3">
                          <input className='form-control'
                            type="text"
                            id="instituicao"
                            value={instituicao}
                            onChange={(e) => setInstituicao(e.target.value)} placeholder='Instituição de Ensino'/>
                          <label className='form-label' htmlhtmlFor="instituicao">Instituição de Ensino*</label>
                        </div><div className="form-floating mb-3">
                          <input className='form-control'
                            type="text"
                            id="emailInstitucional"
                            value={emailInstitucional}
                            onChange={(e) => setEmailInstitucional(e.target.value)} placeholder='E-mail Instituicional' />
                          <label className='form-label' htmlhtmlFor="emailInstitucional">E-mail Institucional*</label>
                        </div>
                      </div>
                    

                  </>


                )}

              </>
            )}
            <div className="forgotPassword">
              Esqueci a senha <span>Clique aqui</span>
            </div>
            <div className="d-flex gap-3 justify-content-center">
              <div className={action === 'Login' ? 'submit gray' : 'submit'}
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

      </div>

      <Footer />
    </>
  );
};

export default SignInUp;