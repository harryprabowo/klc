# Karisma Learning Center (KLC) - Le Portail

Proyek ini merupakan implementasi SI menurut [**dokumen ini**](https://drive.google.com/file/d/19FBwC--rdAt_41hlfB2w1Y8QG5n_b54G/view?usp=sharing).
Proyek dikerjakan dalam rangka tugas besar mata kuliah IF3141 (Sistem Informasi) tahun 2019 fakultas Teknik Informatika Institut Teknologi Bandung.

## Mulai

Berikut adalah instruksi untuk mendapatkan salinan proyek ini di _local machine_ Anda dalam rangka pengembangan & pengujian.
Lihat bagian _deployment_ untuk catatan untuk _deploy_ aplikasi ke _live system_.

### Prerequisite

* **Odoo** (versi 13) - _instance_ berjalan di `localhost:8069`
* **NodeJS**
* **Yarn**

### Instalasi

Untuk menjalankan aplikasi pertama kali, instal _dependencies_ terlebih dahulu.
```
yarn
```
Jalankan aplikasi. 
```
yarn dev
```

## Deployment

Untuk kemudahan _development_, backend dimuat di direktori _root_ (`server.js`) dengan setelan _scripts_ di `package.json`. 
Anda dapat _serve_ backend secara terpisah saat deployment, bila-bila Anda ingin melakukan `build` sebelum deployment _react-app_-nya.
```
node server.js
```
Untuk _remote Odoo instance_, dapat melakukan setup SSH.

## Teknologi
* [**React**](https://github.com/facebook/react) - framework frontend
* [**Express**](https://github.com/expressjs/express) - modul Node.js
* [**Odoo**](https://www.odoo.com/) - ERP & backend

## Lisensi
Proyek ini berada di bawah lisensi `BSD 3-Clause "New" or "Revised"` - lihat [LICENSE.md](LICENSE) untuk informasi lebih lanjut.

## Sambutan
* [Iman Sulaiman](https://medium.com/@alle.aldine) - penulis [artikel ini](https://medium.com/@alle.aldine/how-to-show-list-of-events-created-in-odoo-erp-shows-in-reactjs-website-52d847fa86e) sebagai referensi utama.