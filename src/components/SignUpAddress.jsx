import React from 'react';

const SignUpAddress = ({
  zipCode, setZipcode,
  state, setState,
  city, setCity,
  neighborhood, setNeighborhood,
  street, setStreet,
  handleZipCodeChange
}) => {
  return (
    <div className="col-3">
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
        <label className='form-label' htmlFor="zipCode">CEP*</label>
      </div>

      <div className="form-floating mb-3">
        <input className='form-control'
          type="text"
          id="state"
          placeholder='Estado*'
          value={state}
          onChange={(e) => setState(e.target.value)} disabled
        />
        <label className='form-label' htmlFor="state">Estado*</label>
      </div>

      <div className="form-floating mb-3">
        <input className='form-control'
          type="text"
          id="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder='Cidade*' disabled
        />
        <label className='form-label' htmlFor="city">Cidade*</label>
      </div>

      <div className="form-floating mb-3">
        <input className='form-control'
          type="text"
          id="neighborhood"
          value={neighborhood}
          onChange={(e) => setNeighborhood(e.target.value)}
          placeholder='Bairro' disabled
        />
        <label className='form-label' htmlFor="neighborhood">Bairro*</label>
      </div>

      <div className="form-floating mb-3">
        <input className='form-control'
          type="text"
          id="street"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
          placeholder='Rua*' disabled
        />
        <label className='form-label' htmlFor="street">Rua*</label>
      </div>
    </div>
  );
};

export default SignUpAddress;
