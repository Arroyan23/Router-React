// untuk melakukan fungsi search

function Search(props) {
  // kirimkan valuenya
  function keepOnChange(event) {
    props.onSetSearch(event.target.value);
  }
  return (
    <>
      Masukkan Kata Kunci: <input onChange={keepOnChange}></input>
    </>
  );
}

export default Search;
