// halaman untuk render jsx
import Case from "../components/kasus";
import Search from "../components/search";
// buat fungsi untuk menampilkan artikelnya sesuai dengan filter
// yang di inginkan
import postData from "../favian.json";
import { useState } from "react";

function Home() {
  const [search, setSearch] = useState(postData);
  function filterSearch(value) {
    const filteredJSON = postData.filter((e) => e.keywords.includes(value));
    setSearch(filteredJSON);
  }
  // filter data tersebut di sebuah function
  return (
    <>
      <h1>Selamat datang di blog kami</h1>
      <Search onSetSearch={filterSearch} />
      {search.map((elements) => {
        return (
          <>
            <Case
              id={elements.id}
              nama={elements.nama}
              kasus={elements.kasus}
            />
          </>
        );
      })}
    </>
  );
}

export default Home;
