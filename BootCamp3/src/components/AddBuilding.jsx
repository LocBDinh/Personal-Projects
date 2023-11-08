import React, { useRef } from 'react';

function AddBuilding({ buildingList, setBuildingList }) {
    const codeRef = useRef();
    const nameRef = useRef();
    const addressRef = useRef();
    const latitudeRef = useRef();
    const longitudeRef = useRef();

    const addBuilding = () => {
        const maxId = buildingList.reduce((max, building) => Math.max(max, building.id), 0);
        const newBuilding = {
            id: maxId + 1,
            code: codeRef.current.value,
            name: nameRef.current.value,
            address: addressRef.current.value,
            coordinates: {
                latitude: latitudeRef.current.value,
                longitude: longitudeRef.current.value
            }
        };
        setBuildingList([...buildingList, newBuilding]);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        addBuilding();
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="code">Code (Required):</label>
            <input type="text" id="code" ref={codeRef} className="btninput" />

            <label htmlFor="name">Name (Required):</label>
            <input type="text" id="name" ref={nameRef} className="btninput" />

            <label htmlFor="address">Address:</label>
            <input type="text" id="address" ref={addressRef} className="btninput" />

            <label htmlFor="latitude">Latitude:</label>
            <input type="text" id="latitude" ref={latitudeRef} className="btninput" />

            <label htmlFor="longitude">Longitude:</label>
            <input type="text" id="longitude" ref={longitudeRef} className="btninput" />

            <button type="submit">Add Building</button>
        </form>
    );
}

export default AddBuilding;
