import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ShowEvents = () => {
    const [events, setEvents] = useState([]);
    const [editingEventId, setEditingEventId] = useState(null);
    const [editedEventDate, setEditedEventDate] = useState('');

    useEffect(() => {
        const userEmail = localStorage.getItem('userEmail');
        const userPassword = localStorage.getItem('userPassword');

        axios.get(`http://localhost:8080/myEvents?email=${userEmail}&password=${userPassword}`)
            .then(response => {
                setEvents(response.data);
            })
            .catch(error => {
                console.error("Erro ao buscar eventos:", error);
            });
    }, []);

    const deleteEvent = (eventId) => {
        axios.delete(`http://localhost:8080/event/${eventId}`)
            .then(response => {
                setEvents(events.filter(event => event.id !== eventId));
            })
            .catch(error => {
                console.error("Erro ao excluir evento:", error);
                alert("Erro ao excluir o evento. Por favor, tente novamente.");
            });
    };

    const startEditing = (eventId, eventDate) => {
        setEditingEventId(eventId);
        setEditedEventDate(eventDate);
    };

    const saveEditedEvent = () => {
        axios.put(`http://localhost:8080/eventEdit/${editingEventId}`, { dateEvent: editedEventDate })
            .then(response => {
                setEvents(events.map(event => {
                    if (event.id === editingEventId) {
                        return { ...event, dateEvent: editedEventDate };
                    }
                    return event;
                }));
                setEditingEventId(null);
            })
            .catch(error => {
                console.error("Erro ao editar evento:", error);
                alert("Erro ao editar o evento. Por favor, tente novamente.");
            });
    };

    return (
        <div className="container">
            <h1>Esses são os seus eventos criados:</h1>
            <div className="accordion" id="accordionExample">
                {events.map((event, index) => (
                    <div key={index} className="accordion-item">
                        <h2 className="accordion-header" id={`heading${index}`}>
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`} aria-expanded={index === 0} aria-controls={`collapse${index}`}>
                                {event.title}
                            </button>
                        </h2>
                        <div id={`collapse${index}`} className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`} aria-labelledby={`heading${index}`} data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <div className="row d-grid gap-3">
                                    <div className="col-12">
                                        <label htmlFor="descricao">Descrição</label>
                                        <textarea className="form-control" id="description" rows="3" placeholder="Digite a descrição" value={event.description} disabled></textarea>
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="categoria">Categoria</label>
                                        <select className="form-control" id="category" value={event.category} disabled>
                                            <option value="tecnologia">Tecnologia</option>
                                            <option value="financas">Finanças</option>
                                            <option value="comunicacao">Comunicação</option>
                                        </select>
                                    </div>
                                    <div className="row">
                                        <div className="col-6 form-group">
                                            <label htmlFor="data">Data e hora do evento</label>
                                            {editingEventId === event.id ? (
                                                <input type="datetime-local" className="form-control" id="data" value={editedEventDate} onChange={(e) => setEditedEventDate(e.target.value)} />
                                            ) : (
                                                <input type="datetime-local" className="form-control" id="data" value={event.dateEvent} disabled />
                                            )}
                                        </div>
                                        <div className="col-6 openEventInput">
                                            <div className="form-check form-switch openEventInput">
                                                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" disabled />
                                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Aberto ao público?</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="endereço">Endereço</label>
                                        <select type="text" className="form-control" id="address" value={event.address} disabled>
                                            <option value="Fatec Diadema - Luigi Papaiz - Endereço: Av. Luiz Merenda, 443 - Campanário, Diadema - SP, 09931-390">Fatec Diadema - Luigi Papaiz - Endereço: Av. Luiz Merenda, 443 - Campanário, Diadema - SP, 09931-390</option>
                                            <option value="Fatec São Bernardo do Campo – Adib Moises Dib - Endereço: Av. Pereira Barreto, 400 - Vila Baeta Neves - Centro, São Bernardo do Campo - SP, 09751-000">Fatec São Bernardo do Campo – Adib Moises Dib - Endereço: Av. Pereira Barreto, 400 - Vila Baeta Neves - Centro, São Bernardo do Campo - SP, 09751-000</option>
                                        </select>
                                    </div>
                                    <div className="row justify-content-center">
                                        {editingEventId === event.id ? (
                                            <>
                                                <div className="col-3">
                                                    <button className="btn btn-success" onClick={saveEditedEvent}>Salvar</button>
                                                </div>
                                                <div className="col-3">
                                                    <button className="btn btn-secondary" onClick={() => setEditingEventId(null)}>Cancelar</button>
                                                </div>
                                            </>
                                        ) : (
                                            <div className="col-3">
                                                <button className="btn btn-primary" onClick={() => startEditing(event.id, event.dateEvent)}>Editar</button>
                                            </div>
                                        )}
                                        <div className="col-3">
                                            <button className="btn btn-danger" onClick={() => deleteEvent(event.id)}>Deletar</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ShowEvents;