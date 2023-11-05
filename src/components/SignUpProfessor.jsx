import React from 'react'

const SignUpProfessor = ({ setUnidade, unidade, emailInstitucional, setEmailInstitucional }) => {
    return (
      <div className="col-3">
        <div className="d-flex justify-content-start">
          <h3>Informações adicionais</h3>
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
          <input className='form-control'
            type="text"
            id="emailInstitucional"
            value={emailInstitucional}
            onChange={(e) => setEmailInstitucional(e.target.value)} 
            placeholder='E-mail Institucional'
          />
          <label className='form-label' htmlFor="emailInstitucional">E-mail Institucional*</label>
        </div>
      </div>
    );
  };

export default SignUpProfessor