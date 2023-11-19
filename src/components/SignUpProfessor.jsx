import React from 'react'

const SignUpProfessor = ({ setUnidade, unidade, emailInstitucional, setEmailInstitucional }) => {
    return (
      <div className="col-3">
        <div className="d-flex justify-content-start">
          <h4>Informações adicionais</h4>
        </div>
        <div className="form-floating mb-3">
                    <select className='form-select'
                        type="text"
                        id="unidade"
                        value={unidade}
                        onChange={(e) => setUnidade(e.target.value)}
                    >
                        <option value="" disabled>Selecione a sua unidade</option>
                        <option value="Fatec Diadema">Fatec Diadema</option>
                        <option value="" disabled>
                  Não encontrou sua Fatec na lista? Fale com o seu diretor sobre a implantação do Eventec na sua Fatec!
                </option>
                    </select>
                    <label className='form-label' htmlhtmlFor="unidade">Unidade*</label>
                </div>
        <div className="form-floating mb-3">
          <input className='form-control'
            type="text"
            id="emailInstitucional"
            value={emailInstitucional}
            onChange={(e) => setEmailInstitucional(e.target.value)} 
            placeholder='E-mail Institucional'
          />
          <label className='form-label' htmlFor="emailInstitucional">E-mail Fatec*</label>
        </div>
      </div>
    );
  };

export default SignUpProfessor