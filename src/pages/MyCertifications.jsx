import React, { useEffect, useState } from 'react';
import LoggedNavbar from './LoggedNavbar';
import Footer from '../components/Footer';
import axios from 'axios';
import jsPDF from 'jspdf';

const MyCertifications = () => {
    const [certificates, setCertificates] = useState([]);

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

    const handleDownloadCertificate = (certificate) => {
        const doc = new jsPDF('landscape');
    
        const text = `Certificado de Conclusão\n\nEvento: ${certificate.eventTitle}\nConclusão: ${formatDateTime(certificate.eventDate)}`;
    
        const textWidth = doc.getStringUnitWidth(text) * doc.internal.getFontSize() / doc.internal.scaleFactor;
    
        const pageWidth = doc.internal.pageSize.getWidth();
    
        const xPosition = (pageWidth - textWidth) / 2;
    
        doc.text(text, xPosition, 50); 
    
        doc.save(`Certificado_${certificate.eventTitle}.pdf`);
    };
    

    useEffect(() => {
        const userid = localStorage.getItem('userid');

        const fetchCertificates = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/certifications/user/${userid}`);
                if (response.status === 200) {
                    setCertificates(response.data);
                    console.log(response.data);
                } else {
                    console.error('Erro ao buscar os certificados:', response.statusText);
                }
            } catch (error) {
                console.error('Erro ao buscar os certificados:', error);
            }
        };

        fetchCertificates();
    }, []);

    return (
        <>
            <LoggedNavbar />
            <div className="container-bg">
                <div className="container">
                    <div className="row">
                        {certificates.map((certificate, index) => (
                            <div className="col-4" key={index}>
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">{certificate.eventTitle}</h5>
                                        <h6 className="card-subtitle mb-2 text-body-secondary">{certificate.category}</h6>
                                        <br />
                                        <p className="card-text">Conclusão: {formatDateTime(certificate.eventDate)}</p>
                                        <button onClick={() => handleDownloadCertificate(certificate)} className="btn btn-primary">Pegar certificado</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default MyCertifications;
