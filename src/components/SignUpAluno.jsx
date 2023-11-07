import React from 'react'

const SignUpAluno = ({ emailInstitucional, setEmailInstitucional,
    ra, setRA,
    semestre, setSemestre,
    unidade, setUnidade,
    curso, setCurso
}) => {
    return (
        <>
            <div className="col-3">
                <div className="d-flex justify-content-start">
                    <h4>Informações adicionais</h4>
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
    )
}

export default SignUpAluno