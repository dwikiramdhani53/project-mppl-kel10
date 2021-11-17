# Backend

## fungsi yang kemungkinan ada
login(
    email perusahaan
    password
)
daftar(
    nama perusahaan
    email perusahaan
    alamat
    penanggung jawab
    email penanggung jawab
)
getAllLayanan()
getOneLayanan(nama)
getAllProduk()
getOneProduk(nama)
addProduk(
    nama
    deskripsi
    gambar
)
getAllArtikel()
getOneArtikel(judul)
getNewestArtikel()
addArtikel(
    judul artikel 
    deskripsi
    gambar
    datetime -> timestamp
    author -> nama id perusahaan
)
getAllKomunitas()
getOneKomunitas(nama)

## bentuk database
Komunitas:
    id (serial)
    nama komunitas (varchar)
    deskripsi (varchar)
    gambar
    link grup (varchar)

Artikel:
    id (serial)
    judul artikel (varchar)
    deskripsi (varchar)
    gambar
    tanggal dibuat (datetime)
    author (-> nama perusahaan)

Layanan:
    id (serial)
    nama Layanan (varchar)
    deskripsi (varchar)
    gambar

produk:
    id (serial)
    nama produk (varchar)
    deskripsi (varchar)
    gambar

User:
    id (serial)
    nama perusahaan (varchar)
    email perusahaan (varchar)
    email penanggung jawab (varchar)
    hash password (varchar)
    penanggung jawab (varchar)
    alamat perusahaan (varchar)
    token (varchar)