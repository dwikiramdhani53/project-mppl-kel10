<div align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/1/15/Bogor_Agricultural_University_%28IPB%29_symbol.svg" width=200px>
  <br>
  <h1>TiramisyuID</h1>
  <b>Manajemen Proyek Perangkat Lunak<br>
  Kelompok 10 Praktikum 2</b>
</div>


## A. Deskripsi Singkat Aplikasi
[`^ Kembali Keatas ^`](#)

&ensp;&ensp;&ensp;&ensp;&ensp; IPB: Tracking user merupakan suatu platform berbasis web yang dapat menunjukan pergerakan user dalam lingkungan kampus ipb university. Melalui platform ini, user dapat mengetahui lokasi mana saja didalam kampus yang ramai maupun sepi. Penerapan lebih lanjut untuk aplikasi ini adalah penyesuaian terhadap protokol kesehatan yang diterapkan imbas dari pandemi Covid-19. Melalui aplikasi ini, user dapat mengetahui lokasi mana yang ramai di dalam kampus sehingga dapat menentukan tujuannya lebih baik dan menghindari kerumunan.  


## B. User Analysis
[`^ Kembali Keatas ^`](#)

#### User Story

* Saya sebagai mahasiswa IPB ,jika perkuliahan dilaksanakan secara offline,saya ingin tahu dimana lokasi di ipb yang sedang ramai orangnya, sehingga saya tidak pergi atau melewati daerah tersebut untuk menekan penularan Covid19.
* Saya sebagai mahasiswa IPB, jika perkuliahan dilaksanakan secara offline, dengan kondisi new normal seperti ini saya ingin tahu informasi mengenai lokasi mana di IPB yang bisa digunakan untuk mengadakan suatu kegiatan.


## C. Spesifikasi Teknis Lingkungan Pengembangan
[`^ Kembali Keatas ^`](#)

#### Software:
* Operating System : Windows 10 64-bit & Linux
* Text Editor : Visual Studio Code
* Version Control System: Git
* Design Tools and Prototyping : Figma
* Management Tools : Trello
  
#### Hardware:
* CPU : Intel Core i3-4030U @1.90GHz
* GPU : Intel HD Graphic Family
* RAM : 6GB DDR3l
* ROM : 512Gb HDD dan 128Gb SSD

#### Tech Stack
* Programming Languange : 
* Framework : 
* Web Server : 
* DBMS : 
 
## D. Hasil dan Pembahasan
[`^ Kembali Keatas ^`](#)

  #### 1. Use Case Diagram 
  
  <img src="https://github.com/fathanfatazka/project-psbo/blob/master/report-assets/Use%20Case%20Diagram.jpg">
  
  #### 2. Activity Diagram 
  * Melakukan Tracking :
  <img src="https://github.com/fathanfatazka/project-psbo/blob/master/report-assets/TrackUser%20Activity%20Diagram.jpg">
  
  * Merubah Profile :
  <img src="https://github.com/fathanfatazka/project-psbo/blob/master/report-assets/Ubah%20Profil.jpg">
 
  #### 3. Class Diagram 
  
  <img src="https://github.com/fathanfatazka/project-psbo/blob/master/report-assets/Class%20Diagram.png">
  
  #### 4. Entity Relationship Diagram
  
  <img src="https://github.com/fathanfatazka/project-psbo/blob/master/report-assets/erd.jpeg">
  
  #### 5. Arsitektur Sistem  
  
  ![psbo kuy](https://user-images.githubusercontent.com/74283988/122190683-3eefab80-cebc-11eb-8513-7e8a889634d0.png)
  
  #### 6. Fungsi Utama yang Dikembangkan 
Fungsi utama:

  #### 7. Fungsi CRUD
  
  #### a. Create : 
  Sebelum menggunakan IPB Tracking User, pengguna diharuskan memiliki akun untuk dapat masuk kedalam aplikasi. Pada kasus kali ini, fungsi CREATE digunakan untuk membuat akun pengguna. Pengguna dapat terdiri dari mahasiswa, dosen, atau civitas akademika IPB.
  
  #### b. Read : 
  Pengguna yang sudah memiliki akun dapat melihat kondisi peta kampus IPB pada aplikasi. Selain itu pengguna juga dapat melihat dan mengecek data profil yang mereka daftarkan pada halaman profile. Hal ini menerapkan fungsi READ pada aplikasi yang dikembangkan.
  
  #### c. Update :
  Fungsi UPDATE juga diterapkan pada halaman profile aplikasi. Selain dapat mengecek data yang mereka daftarkan, pengguna juga dapat melakukan perubahan data diri pada halaman profile apabila ada pembaharuan yang ingin mereka lakukan. Pada kasus kali ini, fungsi UPDATE data diterapkan pada aplikasi.
  #### d. Delete :
  Kemampuan DELETE atau menghapus dimiliki oleh admin. Admin dapat melakukan DELETE akun yang terdaftar pada aplikasi IPB Tracking User. Hal ini masuk kedalam tugas admin dalam melakukan monitor terhadap pengguna.


## F. Hasil Implementasi
[`^ Kembali Keatas ^`](#)
  * <b>Screenshot Sistem</b>

  #### 1. Sign Up Page
  <img src="https://github.com/fathanfatazka/project-psbo/blob/master/report-assets/SS/1.%20signup%20tracking.png">
  
  #### 2. Login Page
  <img src="https://github.com/fathanfatazka/project-psbo/blob/master/report-assets/SS/2.%20Login-tracking.png">
  
  #### 3. Welcome Page
  <img src="https://github.com/fathanfatazka/project-psbo/blob/master/report-assets/SS/3.%20welcome-tracking.png">
 
  #### 4. Dashboard / Track Page
  <img src="https://github.com/fathanfatazka/project-psbo/blob/master/report-assets/SS/4.%20dashboard-tracking.png">
  
  #### 5. Profile Page
  <img src="https://github.com/fathanfatazka/project-psbo/blob/master/report-assets/SS/5.%20profile-tracking.png">
  
  #### 6. Update Profile Page
  <img src="https://github.com/fathanfatazka/project-psbo/blob/master/report-assets/SS/6.%20update-profile-tracking.png">
  
  #### 7. Admin Page
  <img src="https://github.com/fathanfatazka/project-psbo/blob/master/report-assets/SS/7.%20admin-page-tracking.png">

  * <b>Link Aplikasi</b>
    
## G. Saran untuk Pengembangan Selanjutnya
[`^ Kembali Keatas ^`](#)

Berikut beberapa saran untuk proyek pengembangan selanjutnya:
1. Proses pembelajaran dalam membangun/mengembangkan platform harus lebih efektif dan tidak memakan waktu yang lama
2. Pembagian tugas para pengembang lebih jelas dan sesuai jobdesc agar tanggung jawab lebih merata dan tepat
3. Memaksimalkan komunikasi dan manajemen antar pengembang dalam proses pengembangan
4. Aplikasi dapat dikembangkan menjadi lebih baik karena fungsinya yang cukup penting bagi kehidupan kampus


## H. Job Description Role
[`^ Kembali Keatas ^`](#)
<table>
    <tr>
      <th></th>
      <th>Nama</th>
      <th>NIM</th>
      <th>Role</th>
    </tr>
    <tr>
      <td>1</td>
      <td>Muhammad Dwiki Ramdhani</td>
      <td>G6418032</td>
      <td>Backend Engineer</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Ulfainil Aisyah</td>
      <td>G64180045</td>
      <td>UI/UX Designer</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Ihsan Fadhilah Wika Putra</td>
      <td>G64180071</td>
      <td>Frontend Engineer</td>
    </tr>
   <tr>
      <td>4</td>
      <td>Linggar Asmara</td>
      <td>G64180099</td>
      <td>Backend Engineer</td>
    </tr>
    <tr>
      <td>5</td>
      <td>M Fathan Fatazka</td>
      <td>G64180118</td>
      <td>Project Manager</td>
    </tr>
  </table>
