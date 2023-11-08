import React from 'react';

const RemoveBuilding = ({ setBuildingList, buildingList, setSelectedBuilding, selectedBuilding, initializeState }) => {
    // const [buildingList, setBuildingList] = useState(data);
    const resetSelectedBuilding = () => {
        setSelectedBuilding(initializeState);
    }

    // const [selectedBuilding, setSelectedBuilding] = useState(0);
    const handleClick = () => {
        let tempDirectory = buildingList.filter((building => {
            if (building.id !== selectedBuilding.id) return building;
        }));

        for (let i = 0; i < tempDirectory.length; i++) {
            tempDirectory[i].id = i + 1;
        }

        setBuildingList(tempDirectory);

        resetSelectedBuilding();
    }
    
    return (
        <div>
            {(selectedBuilding.code !== "") &&
                <button type="button" id="remove-btn" onClick={handleClick}>
                    Remove Building
                </button>}
        </div>
    )

}

export default RemoveBuilding;
