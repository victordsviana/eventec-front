import React from 'react'

const CreateEvents = () => {
  return (
    <form action="">
        <h1>Crie um novo evento</h1>

        <div class="form-group">
            <label for="titulo">Título</label>
            <input type="text" class="form-control" id="titulo" placeholder="Digite o título"/>
        </div>

        <div class="form-group">
            <label for="descricao">Descrição</label>
            <textarea class="form-control" id="descricao" rows="3" placeholder="Digite a descrição"></textarea>
        </div>

        <div class="form-group">
            <label for="categoria">Categoria</label>
            <select class="form-control" id="categoria">
                <option value="tecnologia">Tecnologia</option>
                <option value="financas">Finanças</option>
                <option value="comunicacao">Comunicação</option>
            </select>
        </div>

        <div class="form-group">
            <label for="data">Data</label>
            <input type="date" class="form-control" id="data"/>
        </div>

        <div class="form-group">
            <label for="horario">Horário de início</label>
            <input type="time" class="form-control" id="horario"/>
        </div>

        <button type="submit" class="btn btn-primary">Enviar</button>
    </form>  )
}

export default CreateEvents