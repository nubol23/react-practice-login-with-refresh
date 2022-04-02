import React, {useEffect, useState} from 'react';
import api from "../apis/api";

const MedicinesList = () => {

  const [medicines, setMedicines] = useState([]);

  useEffect(() => {
    api.get(`medicines/medicines/`)
      .then((response) => {
        if (response) {
          setMedicines(response.data.results);
        }
      })
      .catch((error) => {
        setMedicines(meds => [])
      })
  }, [])

  return (
    <div>
      <ul>
        {
          medicines.map(medicine => <li key={medicine.id}>{medicine.name}</li>)
        }
      </ul>
    </div>
  );
};

export default MedicinesList;