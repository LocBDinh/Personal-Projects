import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

const Home = () => {
  const [birthdays, setBirthdays] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedBirthday, setSelectedBirthday] = useState(null); // Track the selected birthday

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:1337/birthdays')
      .then((response) => {
        setBirthdays(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  // Functio</td>n to handle selecting a birthday
  const handleSelectBirthday = (birthday) => {
    setSelectedBirthday(birthday);
  };

  // Function to handle closing the popup
  const handleClosePopup = () => {
    setSelectedBirthday(null);
  };

  return (
    <div className='p-4'>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl my-8 text-gray-800'>BirthdayBeacon</h1>
        <Link to='/birthdays/create'>
          <MdOutlineAddBox className='text-4xl text-blue-400' />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <table className='w-full border-separate border-spacing-2'>
          <thead>
            <tr>
              <th className='border-primary'>No</th>
              <th className='border-primary'>Name</th>
              <th className='border-primary'>Birthdate</th>
              <th className='border-primary'>Phone Number</th>
              <th className='border-primary'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {birthdays.map((birthday, idx) => (
              <tr key={birthday._id} className='h-9'>
                <td className='border-table'>{idx + 1}</td>
                <td className='border-table'>{birthday.name}</td>
                <td className='border-table'>{birthday.birthdate}</td>
                <td className='border-table'>{birthday.phone}</td>
                <td className='border-table'>
                  <div className='flex justify-center gap-x-4'>
                    <button onClick={() => handleSelectBirthday(birthday)}>
                      <BsInfoCircle className='text-2xl text-blue-400' />
                    </button>
                    <Link to={`/birthdays/edit/${birthday._id}`}>
                      <AiOutlineEdit className='text-2xl text-green-400' />
                    </Link>
                    <Link to={`/birthdays/delete/${birthday._id}`}>
                      <MdOutlineDelete className='text-2xl text-red-400' />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Popup */}
      {selectedBirthday && (
        <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center text-center bg-black bg-opacity-50'>
          <div className='bg-white p-4'>
            <h2>{selectedBirthday.name}</h2>
            <p>Birthdate: {selectedBirthday.birthdate}</p>
            <p>Phone Number: {selectedBirthday.phone}</p>
            <button className='ring-offset-2 ring-2 ring-red-600 bg-red-400  
                   ring-opacity-25 w-20 h-6 rounded-md' onClick={handleClosePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;