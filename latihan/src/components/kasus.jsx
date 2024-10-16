// ini untuk menampilkan file JSON

import postData from "../favian.json";

function Case(props) {
  return (
    <>
      <h2>Ini adalah list nama dan kasusnya</h2>
      <h3>No: {props.id}</h3>
      <h4>{props.nama}</h4>
      <p>{props.kasus.join(", ")}</p>
    </>
  );
}

export default Case;
