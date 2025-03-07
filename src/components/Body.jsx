import './Body.css';
import Form from './Form';

const Body = () => {
    return (
        <div className="container" id="contacto">
            <div className="row justify-content-between gy-4">
                <div className="col-lg-6 d-flex align-items-center">
                    <div className="container atencion">
                        <div><svg className="svgSoporte" xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 24 24" style={{ fill: "#85bcf9", transform: "", msFilter: "" }}>
                            <path d="M12 2C6.486 2 2 6.486 2 12v4.143C2 17.167 2.897 18 4 18h1a1 1 0 0 0 1-1v-5.143a1 1 0 0 0-1-1h-.908C4.648 6.987 7.978 4 12 4s7.352 2.987 7.908 6.857H19a1 1 0 0 0-1 1V18c0 1.103-.897 2-2 2h-2v-1h-4v3h6c2.206 0 4-1.794 4-4 1.103 0 2-.833 2-1.857V12c0-5.514-4.486-10-10-10z"></path>
                        </svg></div>
                        <h3 className="cardTitle">Atención al gremio</h3>
                        <h4 className="barrita2">-</h4>
                        <p>Contamos con un departamento de obras para asesorar y acompañar a nuestros clientes en todo el proceso.</p>
                    </div>
                </div>
                <div className="col-lg-5">
                    <Form />
                </div>
            </div>
        </div>
    )
}

export default Body;
