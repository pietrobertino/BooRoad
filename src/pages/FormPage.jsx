import { useEffect, useState } from "react"
import { organizers } from "../data/organizers";
import travels from "../data/travel";

export default function FormPage({ setTravelArray }) {

    const initialData = {
        id: "",
        title: "",
        destination: "",
        startDate: "",
        endDate: "",
        price: "",
        organizer: {},
        participants: [],
        description: "",
        capacity: ""
    }
    const [refresh, setRefresh] = useState(false);
    const [formData, setFormData] = useState(initialData);

    useEffect(() => {
        const newId = travels.length + 10;
        setFormData({ ...formData, id: newId });

    }, [refresh])


    function handleSelect(e) {
        const id = Number(e.target.value);
        const foundOrganizer = organizers.find(organizer => organizer.id === id);
        setFormData({ ...formData, organizer: foundOrganizer });
    }

    function handleSubmit(e) {
        e.preventDefault();
        travels.push(formData);
        const newArray = travels;
        console.log(newArray)
        setTravelArray(newArray);
        setRefresh(!refresh);
        setFormData(initialData);


    }

    return (

        <>
            <h1 className="text-center">Add a travel</h1>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={formData.title}
                        onChange={e => setFormData({ ...formData, title: e.target.value })}
                        placeholder="Travel title"
                        required
                        className=" form-control mt-3" />
                    <input
                        type="text"
                        value={formData.destination}
                        onChange={e => setFormData({ ...formData, destination: e.target.value })}
                        placeholder="Travel destination"
                        required
                        className=" form-control mt-3" />
                    <label htmlFor="startDate" className=" form-label mt-3">Travel start date:</label>
                    <input
                        id="startDate"
                        type="date"
                        value={formData.startDate}
                        onChange={e => setFormData({ ...formData, startDate: e.target.value })}
                        className=" form-control mt-1" />
                    <label htmlFor="endDate" className=" form-label mt-3">Travel end date:</label>
                    <input
                        id="endDate"
                        type="date"
                        value={formData.endDate}
                        onChange={e => setFormData({ ...formData, endDate: e.target.value })}
                        className=" form-control mt-1" />
                    <input
                        type="number"
                        value={formData.price}
                        onChange={e => setFormData({ ...formData, price: Number(e.target.value) })}
                        placeholder="Travel price"
                        className=" form-control mt-3" />

                    <select onChange={handleSelect} className=" form-select mt-3" >
                        <option value="" hidden >Select a guide</option>
                        {
                            organizers.map(organizer => (
                                <option value={organizer.id} key={organizer.id}>{organizer.name}</option>
                            ))
                        }
                    </select>
                    <input
                        type="text"
                        value={formData.description}
                        onChange={e => setFormData({ ...formData, description: e.target.value })}
                        placeholder="Travel description"
                        className="form-control mt-3" />
                    <input
                        type="number"
                        value={formData.capacity}
                        onChange={e => setFormData({ ...formData, capacity: Number(e.target.value) })}
                        placeholder="Travel capacity"
                        className="form-control mt-3" />
                    <button className="btn btn-primary mt-3">
                        Submit Travel
                    </button>
                </form>
            </div>
        </>
    )
}