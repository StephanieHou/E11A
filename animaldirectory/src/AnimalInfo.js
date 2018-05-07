import React from "react";

const formatDate = date => {
  const dateArr = date.split("-");
  const [year, month, day] = dateArr;
  return `${month}/${day}/${year}`;
};

const AnimalInfo = animal => {
  const date = animal.created_date ? animal.created_date.split("T")[0] : "-";
  const formattedDate = date ? formatDate(date) : "-";

  return (
    <div>
      <strong> Description of Abuse</strong> : {animal.descriptor} <br />
      <strong>Agency</strong>: {animal.agency_name} <br />
      <strong>Spotted on:</strong> {formattedDate} <br />
      <strong>Location type:</strong> {animal.location_type} <br />
      <strong>Address: </strong>{animal.incident_address} {animal.city} {animal.incident_zip} <br />
      <strong>Resolution:</strong> {animal.resolution_description}
    </div>
  );
};

export default AnimalInfo;