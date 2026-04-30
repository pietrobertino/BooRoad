import travels from "../data/travel"
import { Link } from "react-router-dom"





export default function HomePage() {


    return (
        <>
            <h1 className="text-center p-3">Lista Viaggi</h1>
            <div className="container">
                <div className="d-flex justify-content-end"><Link className="btn btn-primary my-3" to="/travels/addTravel">Add Travel</Link></div>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
                    {
                        travels.map(travel => (
                            <div className="col" key={travel.id}>
                                <div className="card h-100" style={{ width: "18rem" }}>
                                    <img src={`https://placehold.co/600x400?text=${travel.title.replace(" ", "+")}`} className="card-img-top " alt={travel.title} />
                                    <div className="card-body">
                                        <h5 className="card-title">{travel.title}</h5>
                                        <div className="">{travel.destination}</div>
                                        <div className="">DA: {travel.startDate} A: {travel.endDate}</div>
                                        <p className="card-text">{travel.description}</p>
                                        <Link to={`/travels/${travel.id}`} className="btn btn-primary">Dettagli Viaggio</Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>


        </>
    )
}