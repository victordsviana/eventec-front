import React from 'react'

const CompleteAccount = () => {
    return (
        <div className='myAccountBox' >
            <form className='completeAccountFormBox'>
                <fieldset>
                    <legend>Que tipo de usuário você é?</legend>
                <div>
                    <input type="radio" id="aluno" name="aluno" value="aluno" checked />
                    <label htmlFor="aluno">Aluno</label>
                </div>
                
                <div>
                    <input type="radio" id="funcProf" name="funcProf" value="funcProf" />
                    <label htmlFor="funcProf">Funcionário/Professor</label>
                </div>

                <div>
                    <input type="radio" id="outro" name="outro" value="outro" />
                    <label htmlFor="outro">Outro</label>
                </div>
                </fieldset>


                <label>Unidade:</label>
                <select name="unidadesDeEnsino" id="unidadesDeEnsino">
                    <option value="FatecDI">Fatec Diadema</option>
                    <option value="FatecMA">Fatec Mauá</option>
                    <option value="FatecSA">Fatec Santo André</option>
                    <option value="FatecSCS">Fatec São Caetano do Sul</option>
                </select>

                <label>Curso:</label>
                <input type="text" value=""/>

                <label>Semestre:</label>
                <input type="number" value="1" min="1" max="12" />

                <label>RA:</label>
                <input type="number" value="1234567891011" min="13" max="13"/>

                <button type="submit" className='completeAccountBtn'>Enviar</button>
            </form>

        </div>)
}

export default CompleteAccount