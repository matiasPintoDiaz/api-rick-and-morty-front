import { useState, useEffect } from 'react';
import "../css/locationPage.css";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


import { fetchLocation, locationData } from "../services/fetchingLocation"

export default function LocationPage() {
  const [id, setId] = useState(1);
  const [location, setLocation] = useState<locationData>();
  const [expanded, setExpanded] = useState<string | false>(false);

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

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <>
      <div className='location-box'>
        <div>
          <h1>Rick & Morty Locations</h1>
        </div>
        <div className='buttons-location-box'>
          <button className='location-button' onClick={() => setCountOp("sub")}>Previous Location</button>
          <p className='location-id'>Ubicación número: {id}</p>
          <button className='location-button' onClick={() => setCountOp("add")}>Next Location</button>
        </div>
        <div className="list-box">
          {location && (
            <Accordion
              className="accordion"
              expanded={expanded === `${location.name}`}
              onChange={handleChange(`${location.name}`)}
              key={location.id.toString()}
            >
              <AccordionSummary
                className="accordion"
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id={location.name}
              >
                <Typography>{location.name}</Typography>
              </AccordionSummary>
              <AccordionDetails className="accordion">
                <Typography>
                  <div>
                    <p>Tipo: {location.type}</p>
                    <p>Dimensión: {location.dimension}</p>
                    {/* <p>Residentes: {location.residents}</p> */}
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>
          )}
        </div>
      </div>
    </>
  );
}
