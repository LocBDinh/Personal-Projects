import React from 'react';
import RemoveBuilding from './RemoveBuilding';

function ViewBuilding(props) {
  const { data, selectedBuilding, setSelectedBuilding, setData } = props;
  // Find the corresponding data based off the selected building's id and display its data
  const building = data.find(building => building.id === selectedBuilding);

  const handleOnClick = (id) => {
    try {
      setSelectedBuilding(id);
    } catch (error) {
      console.log('Failed to update selected building', error);
    }
  }

  const handleRemoveBuilding = (id) => {
    try {
      const newData = data.filter(building => building.id !== id);
      props.setData(newData);
RemoveBuilding();
      setSelectedBuilding(null);
    } catch (error) {
      console.log('Failed to remove building', error);
    }
  }

  return (
    <div>
      <p>
        {' '}
        <i>Click on a name to view more information</i>
      </p>
      {building && (
        <div>
          <h2 onClick={() => handleOnClick(building.id)}></h2>
          <p>Name: {building.name}</p>
          <p>Code: {building.code}</p>
          {building.address ? (
            <p>
              Address: {building.address}
            </p>
          ) : (
            <p>
              <button onClick={() => handleRemoveBuilding(building.id)}> Remove </button>
            </p>
          )}
          <div>
          </div>
          {building.coordinates && (
            <div>
              <p>Coordinates: {building.coordinates.latitude}, {building.coordinates.longitude}</p>
              <div>
                <button onClick={() => handleRemoveBuilding(building.id)}> Remove </button>
              </div>
            </div>
          )}
        </div>
      )} 
    </div>
  );
} 

export default ViewBuilding;