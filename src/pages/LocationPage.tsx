import { useState, useEffect } from 'react';
import "../css/locationPage.css"

import { fetchLocation, locationData } from "../services/fetchingLocation"

export default function LocationPage() {
  const [id, setId] = useState(1);
  const [location, setLocation] = useState<locationData>();

  useEffect(() => {
    fetchLocation(id).then(setLocation)
  }, [id]);

  const setCountOp = async (op: string) => {
    if (op == "sub") {
      if (id <= 1) return;
      setId(id - 1);
    } else {
      setId(id + 1);
    }

    const locationResponse = await fetchLocation(id);
    // console.log(locationResponse);

    setLocation(locationResponse);
  };

  return (
    <>
      <div className='location-box'>
        <div>
          <h1>Rick & Morty Locations</h1>
        </div>
        <div className='button-location-box'>
          <button className='' onClick={() => setCountOp("sub")}>Previous Location</button>
          <p className='location-id'>Ubicación número: {id}</p>
          <button className='' onClick={() => setCountOp("add")}>Next Location</button>
        </div>
      </div>
    </>
  );
}
