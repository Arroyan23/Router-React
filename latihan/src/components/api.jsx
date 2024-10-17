// untuk fetch api
import { useState } from "react";

function Api() {
  const [externalData, setExternalData] = useState([]);
  fetch("https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json")
    .then((response) => response.json())
    .then((responses) => setExternalData(responses));

  return (
    <>
      <h2>Ini adalah external data dari Fetch</h2>
      {externalData.map((elements) => {
        return (
          <>
            <p>Nama Provinsi : {elements.name}</p>
          </>
        );
      })}
    </>
  );
}

export default Api;
