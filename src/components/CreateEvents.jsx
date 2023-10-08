import React, { useState } from 'react'
import axios from 'axios';

const CreateEvents = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');

    const handleFormEventSubmit = async (event) => {
          event.preventDefault();
          try {
            const response = await axios.post('http://localhost:8080/event', {
              title,
              description,
              category

          });
            console.log('Registration Successful', response.data);
          } catch (error) {
            console.error('There was an error registering!', error);
          }
        } 


  return (
    <form action="">
        <h1>Crie um novo evento</h1>

        <div className="form-group">
            <label for="titulo">Título</label>
            <input type="text" className="form-control" id="title" placeholder="Digite o título" value={title} onChange={(e) => setTitle(e.target.value)}/>
        </div>

        <div className="form-group">
            <label for="descricao">Descrição</label>
            <textarea className="form-control" id="description" rows="3" placeholder="Digite a descrição" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
        </div>

        <div className="form-group">
            <label for="categoria">Categoria</label>
            <select className="form-control" id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="tecnologia">Tecnologia</option>
                <option value="financas">Finanças</option>
                <option value="comunicacao">Comunicação</option>
            </select>
        </div>

        {/* <div className="form-group">
            <label for="data">Data e hora do evento</label>
            <input type="datetime-local" className="form-control" id="data"/>
        </div> */}


        <button type="submit" className="btn btn-primary" onClick={handleFormEventSubmit}>Enviar</button>
    </form>  )
}

export default CreateEvents