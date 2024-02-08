import React from "react";
import './Mapa.css';

const Mapa = () => {
    return (
        <>
            <div className="container text-center">
                <div className="row">
                    <div className="col-lg-3 col-12">
                        <div className="card carta-contacto d-flex justify-content-center align-items-center" >
                            <svg className="svgCards" xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 24 24" style={{ fill: "#bfddfe", transform: "", msFilter: "" }}>
                                <path d="m21.447 6.105-6-3a1 1 0 0 0-.895 0L9 5.882 3.447 3.105A1 1 0 0 0 2 4v13c0 .379.214.725.553.895l6 3a1 1 0 0 0 .895 0L15 18.118l5.553 2.776a.992.992 0 0 0 .972-.043c.295-.183.475-.504.475-.851V7c0-.379-.214-.725-.553-.895zM10 7.618l4-2v10.764l-4 2V7.618zm-6-2 4 2v10.764l-4-2V5.618zm16 12.764-4-2V5.618l4 2v10.764z"></path>
                            </svg>
                            <div className="card-body">
                                <h5 className="card-title">Nuestra dirección</h5>
                                <p className="card-text">Av. 9 de Julio 4136</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-12">
                        <div className="card carta-contacto d-flex justify-content-center align-items-center" >
                            <svg className="svgCards" xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 24 24" style={{ fill: "#bfddfe", transform: "", msFilter: "" }}>
                                <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"></path>
                            </svg>
                            <div className="card-body">
                                <h5 className="card-title">Escríbenos</h5>
                                <p className="card-text">ventas@fymsanitarios.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-12">
                        <div className="card carta-contacto d-flex justify-content-center align-items-center" >
                            <svg className="svgCards" xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 24 24" style={{ fill: "#bfddfe", transform: "", msFilter: "" }}>
                                <path fillRule="evenodd" clipRule="evenodd" d="M18.403 5.633A8.919 8.919 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977 0 1.582.413 3.126 1.198 4.488L3 21.116l4.759-1.249a8.981 8.981 0 0 0 4.29 1.093h.004c4.947 0 8.975-4.027 8.977-8.977a8.926 8.926 0 0 0-2.627-6.35m-6.35 13.812h-.003a7.446 7.446 0 0 1-3.798-1.041l-.272-.162-2.824.741.753-2.753-.177-.282a7.448 7.448 0 0 1-1.141-3.971c.002-4.114 3.349-7.461 7.465-7.461a7.413 7.413 0 0 1 5.275 2.188 7.42 7.42 0 0 1 2.183 5.279c-.002 4.114-3.349 7.462-7.461 7.462m4.093-5.589c-.225-.113-1.327-.655-1.533-.73-.205-.075-.354-.112-.504.112s-.58.729-.711.879-.262.168-.486.056-.947-.349-1.804-1.113c-.667-.595-1.117-1.329-1.248-1.554s-.014-.346.099-.458c.101-.1.224-.262.336-.393.112-.131.149-.224.224-.374s.038-.281-.019-.393c-.056-.113-.505-1.217-.692-1.666-.181-.435-.366-.377-.504-.383a9.65 9.65 0 0 0-.429-.008.826.826 0 0 0-.599.28c-.206.225-.785.767-.785 1.871s.804 2.171.916 2.321c.112.15 1.582 2.415 3.832 3.387.536.231.954.369 1.279.473.537.171 1.026.146 1.413.089.431-.064 1.327-.542 1.514-1.066.187-.524.187-.973.131-1.067-.056-.094-.207-.151-.43-.263"></path>
                            </svg>
                            <div className="card-body">
                                <h5 className="card-title">Whatsapp</h5>
                                <p className="card-text">15-6622-9213</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-12">
                        <div className="card carta-contacto d-flex justify-content-center align-items-center" >
                            <svg className="svgCards" xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 24 24" style={{ fill: "#bfddfe", transform: "", msFilter: "" }}>
                                <path fillRule="evenodd" clipRule="evenodd" d="M17.707 12.293a.999.999 0 0 0-1.414 0l-1.594 1.594c-.739-.22-2.118-.72-2.992-1.594s-1.374-2.253-1.594-2.992l1.594-1.594a.999.999 0 0 0 0-1.414l-4-4a.999.999 0 0 0-1.414 0L3.581 5.005c-.38.38-.594.902-.586 1.435.023 1.424.4 6.37 4.298 10.268s8.844 4.274 10.269 4.298h.028c.528 0 1.027-.208 1.405-.586l2.712-2.712a.999.999 0 0 0 0-1.414l-4-4.001zm-.127 6.712c-1.248-.021-5.518-.356-8.873-3.712-3.366-3.366-3.692-7.651-3.712-8.874L7 4.414 9.586 7 8.293 8.293a1 1 0 0 0-.272.912c.024.115.611 2.842 2.271 4.502s4.387 2.247 4.502 2.271a.991.991 0 0 0 .912-.271L17 14.414 19.586 17l-2.006 2.005z"></path>
                            </svg>
                            <div className="card-body">
                                <h5 className="card-title">Teléfono de linea</h5>
                                <p className="card-text">11-2118-7415</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='map' id="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.5344518263637!2d-58.56380912426139!3d-34.56534097296811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb9e6bf36676f%3A0x35331b110b6ef282!2sAv.%20101%209%20de%20Julio%204136%2C%20Villa%20Ballester%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1699391493815!5m2!1ses-419!2sar"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </>
    )
}

export default Mapa;    