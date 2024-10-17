// untuk menampilkan news dari API

import Api from "../components/api";

function NewsData() {
  return (
    <>
      <h1>Ini halaman bagian News</h1>
      <Api />
      <a href="/">Kembali ke halaman Home</a>
    </>
  );
}

export default NewsData;
