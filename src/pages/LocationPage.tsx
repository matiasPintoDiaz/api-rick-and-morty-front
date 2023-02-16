import { useState, useEffect } from 'react';

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
      <div>LOCATIONS</div>
      <button className='' onClick={() => setCountOp("add")}>
        NEXT
      </button>
    </>
  );
}
