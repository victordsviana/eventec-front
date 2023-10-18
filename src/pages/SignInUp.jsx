import React, { useState } from 'react';
import axios from 'axios';
import Footer from '../components/Footer';
import LogoImg from '../static/Logo.svg';
import { useNavigate } from 'react-router-dom';
import SignUpAluno from '../components/SignUpAluno';
import SignUpProfessor from '../components/SignUpProfessor';
import SignUpBasicInfo from '../components/SignUpBasicInfo';
import SignUpAddress from '../components/SignUpAddress';

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
          <div className="row user-type-input justify-content-center">
            <div className="col-2">
              <label className='btn btn-outline-primary'>
                <input
                 className="custom-radio-input"
                  type="radio"
                  value="aluno"
                  checked={userType === 'aluno'}
                  onChange={handleUserTypeChange}
                />
                Aluno*
              </label>
            </div>
            <div className="col-2">
              <label className='btn btn-outline-primary'>
                <input
                 className="custom-radio-input"
                  type="radio"
                  value="usuarioComum"
                  checked={userType === 'usuarioComum'}
                  onChange={handleUserTypeChange}
                />
                Usuário Comum*
              </label>
            </div>
            <div className="col-2">
              <label className='btn btn-outline-primary'>
                <input
                 className="custom-radio-input"
                  type="radio"
                  value="professor"
                  checked={userType === 'professor'}
                  onChange={handleUserTypeChange} btn btn-outline-primary
                />
                Professor*
              </label>
            </div>



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
                <SignUpBasicInfo
                  userName={userName}
                  setUserName={setUserName}
                  email={email}
                  setEmail={setEmail}
                  cpf={cpf}
                  setCpf={setCpf}
                  password={password}
                  setPassword={setPassword}
                />

                <SignUpAddress
                  zipCode={zipCode}
                  setZipcode={setZipcode}
                  state={state}
                  setState={setState}
                  city={city}
                  setCity={setCity}
                  neighborhood={neighborhood}
                  setNeighborhood={setNeighborhood}
                  street={street}
                  setStreet={setStreet}
                  handleZipCodeChange={handleZipCodeChange}
                />

                {userType === 'aluno' && (

                  <SignUpAluno
                    emailInstitucional={emailInstitucional}
                    setEmailInstitucional={setEmailInstitucional}
                    ra={ra}
                    setRA={setRA}
                    semestre={semestre}
                    setSemestre={setSemestre}
                    unidade={unidade}
                    setUnidade={setUnidade}
                    curso={curso}
                    setCurso={setCurso} />
                )}
                {userType === 'professor' && (
                  <>
                    <SignUpProfessor
                      unidade={unidade}
                      setUnidade={setUnidade}
                      emailInstitucional={emailInstitucional}
                      setEmailInstitucional={setEmailInstitucional}
                    />
                  </>
                )}
              </>
            )}
            <div className="d-flex gap-3 justify-content-center loginRegisterbtn">
              <div className={action === 'Login' ? 'btn btn-lg btn-outline-secondary' : 'btn btn-lg btn-success'}
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
                className={action === 'Cadastrar' ? 'btn btn-lg btn-outline-secondary' : 'btn btn-lg btn-success'}
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