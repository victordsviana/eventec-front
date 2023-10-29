import React, { useEffect, useState } from 'react';
import axios from 'axios';
import HomeNavbar from '../components/HomeNavbar';

const MyEvents = () => {
    const [myEvents, setMyEvents] = useState([]);

    const formatDateTime = (isoDate) => {
        const options = {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: false
        };
        return new Date(isoDate).toLocaleDateString(undefined, options).replace(',', ' ');
    };

    useEffect(() => {
        const fetchAllSubscribedEvents = async () => {
            try {
                const userid = localStorage.getItem('userid');

                if (!userid) {
                    console.error('User ID not found in local storage.');
                    return;
                }

                const response = await axios.get(`http://localhost:8080/subscriptions/user/${userid}`);

                setMyEvents(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching subscribed events', error);
            }
        };

        fetchAllSubscribedEvents();
    }, []);
    return (
        <><HomeNavbar /><div className='container'>
            <h1>Eventos</h1>
            <div className="row">
                {myEvents.map(subscription => (
                    <div className="col-12 col-lg-6 p-3" key={subscription.subscriptionId}>
                        <div className="card text-start">
                            <div className="card-header">
                                {subscription.title}
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{subscription.title}</h5>
                                <p className="card-text">Categoria: {subscription.event.category}</p>
                                <p className='card-text'>Localização: {subscription.address}</p>
                                <span>Data do evento:  </span>
                                <input type="datetime-local" value={subscription.event.dateEvent} disabled />
                                <br /><br />
                                <span>Data de Inscrição:     </span>
                                {subscription.subscriptionDate && (
                                    <input
                                        type="text"
                                        value={formatDateTime(subscription.subscriptionDate)}
                                        disabled />
                                )}
                                <br /><br />
                                <a href="#" className="btn btn-primary">Pegar certificado</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <br /><br />
        </div></>
    );
};

export default MyEvents;


