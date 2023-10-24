function BuildingList({ data, filterText, selectedUpdate }) {
  // TODO: Apply names filter on buildingList
  const buildingList = data
    .filter(directory => {
      return directory.name.toLowerCase().includes(filterText.toLowerCase())
    })
    .map(directory => {
      const handleOnClick = () => {
        try {
          selectedUpdate(directory.id);
        } catch (error) {
          console.log('Failed to update selected building', error);
        }
      };
      return (
        // TODO: Create onClick listener to capture building id being selected
        <tr key = {directory.id} onClick = {handleOnClick}>
          <td>{directory.code}</td>
          <td>{directory.name}</td>
        </tr>
      );
    });

  return <>{buildingList}</>;
}

export default BuildingList;
