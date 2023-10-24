import React, { useState } from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import AddBuilding from './components/AddBuilding';

function App({ data }) {
  // create state variables using useState hook
  const [filterText, setFilterText] = useState('');
  const [selectedBuilding, setSelectedBuilding] = useState(0);
  const [buildingList, setBuildingList] = useState(data);

  // create filterUpdate function to set state of filterText
  function filterUpdate(value) {
    setFilterText(value);
  }

  // create selectedUpdate function to set state of selectedBuilding
  function selectedUpdate(id) {
    setSelectedBuilding(id);
  }

  return (
    <div className="bg">
      <div className="row">
        <h1>UF Directory App</h1>
      </div>
      <Search 
        filterText={filterText} 
        filterUpdate={filterUpdate}
      />
      <main>
        <div className="row">
          <div className="column1">
            <div className="tableWrapper">
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <td>
                      <b>Code Building</b>
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <BuildingList 
                    data={buildingList}
                    filterText={filterText}
                    selectedUpdate={selectedUpdate}
                  />
                </tbody>
              </table>
            </div>
          </div>
          <div className="column2">
            <ViewBuilding 
              selectedBuilding={selectedBuilding}
              data={buildingList}
            />
          </div>
            <div className="column1" style={{ backgroundColor: 'white' }}></div>
            <div className="column3">
              <AddBuilding 
                data={buildingList}
                setBuildingList={setBuildingList}
              />
          </div>
        </div>
        <Credit/>
      </main>
    </div>
  );
}

export default App;
