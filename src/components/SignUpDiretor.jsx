import React from 'react'

const SignUpDiretor = ({ setUnidade, unidade, emailInstitucional, setEmailInstitucional }) => {
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
                        <option value="Fatec São Bernardo do Campo – Adib Moises Dib - Endereço: Av. Pereira Barreto, 400 - Vila Baeta Neves - Centro, São Bernardo do Campo - SP, 09751-000">Fatec São Bernardo do Campo</option>
                        <option value="Fatec Diadema - Luigi Papaiz - Endereço: Av. Luiz Merenda, 443 - Campanário, Diadema - SP, 09931-390">Fatec Diadema</option>
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

export default SignUpDiretor