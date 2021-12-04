<div align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/1/15/Bogor_Agricultural_University_%28IPB%29_symbol.svg" width=200px>
  <br>
  <h1>TiramisyuID</h1>
  <b>Manajemen Proyek Perangkat Lunak<br>
  Kelompok 10 Praktikum 2</b>
</div>


## A. Deskripsi Singkat Aplikasi
[`^ Kembali Keatas ^`](#)

&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; TiramisyuID merupakan sebuah sistem berbasis web yang dikembangkan untuk menunjang proses bisnis perusahaan jamur tiram TiramisyuID. Website ini menyediakan informasi tetang jamur tiram, layanan yang diberikan perusahaan, dan jual beli produk jamur tiram. Selain itu platform ini juga menyediakan section edukasi berupa artikel-artikel tentang jamur tiram dan juga memberikan koneksi ke berbagai komunitas jamur tiram. Website ini dapat diakses semua orang, namun untuk menikmati layanan yang disediakannya harus memiliki akun, sedangkan penyedian informasi masih dibantu oleh admin. 


## B. User Analysis
[`^ Kembali Keatas ^`](#)

#### User Story

* Saya sebagai perusahaan budidaya jamur tiram ingin membagikan berbagai informasi tentang jamur tiram selain itu juga ingin menginformasikan layanan yang perusahaan miliki, dan juga ingin menjual berbagai macam jenis produk jamur tiram.
*	Saya sebagai pembeli ingin secara khusus membeli berbagai produk jamur tiram dan juga ingin mengetahui informasi bermanfaat tentang jamur tiram.
*	Saya sebagai pemula pembudidaya jamur tiram ingin mengetahui informasi penting tentang jamur tiram, memanfaatkan layanan yang diberikan perusahaan jamur tiram dan juga bergabung dengan berbagai komunitas jamur tiram untuk bertukar pikiran dan informasi.



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
* Programming Languange : Javascript
* Framework : Express.jS
* Web Server : Heroku
* DBMS : PostgreSQL
 
## D. Hasil dan Pembahasan
[`^ Kembali Keatas ^`](#)

  #### 1. Use Case Diagram 
  ![Use Case](https://user-images.githubusercontent.com/47946071/143602585-653fc56a-98ac-4e5c-9274-4b537f416b0d.jpg)

  #### 2. Activity Diagram 
  * User - Melihat Layanan :
  
  ![activity layanan](https://user-images.githubusercontent.com/47946071/144578468-79ed721f-e43f-4428-97a9-3e47c3e69223.jpg)

  * User - Order Produk :
  
  ![Activity - order produk](https://user-images.githubusercontent.com/47946071/144578560-8e228b70-cf00-492b-b6c4-328a541071f6.jpg)

  * User - Melihat Artikel :
   
   ![Activity - melihat artikel](https://user-images.githubusercontent.com/47946071/144578591-cbd98b05-3c98-490c-9087-88b7b08b0df6.jpg)

  * User - Melihat komunitas :
  
  ![activity - komunitas](https://user-images.githubusercontent.com/47946071/144578638-b2bcbc0f-b103-4feb-8124-aab8b0c145ba.jpg)

  * Admin - Mengelola produk :
  
  ![activity - mengelola data produk](https://user-images.githubusercontent.com/47946071/144578714-07121d78-65ac-4c15-9ea2-71d1c3d0abd5.jpg)

  * Admin - Mengelola artikel :

![activity - mengelola artikel](https://user-images.githubusercontent.com/47946071/144578734-99761ab9-fb22-42e9-a64c-0dfd14e82b70.jpg)

  * Admin - Mengelola data komunitas :
  
  ![mengelola komunitas](https://user-images.githubusercontent.com/47946071/144578768-16570c54-68fd-4f3f-a11e-85662d71bd91.jpg)

  #### 3. Class Diagram 
  
  ![Class Diagram Tiramisyu](https://user-images.githubusercontent.com/62282651/144169343-8220de26-4ed8-4130-8e6c-6879c63c32c3.jpg)
  
  #### 4. Entity Relationship Diagram
  
  ![ERD](https://user-images.githubusercontent.com/62282651/144169273-b2fd781a-b0c6-4ec7-bf98-c02dfc162d17.jpg)
  
  #### 5. Arsitektur Sistem  
  
  ![psbo kuy](https://user-images.githubusercontent.com/74283988/122190683-3eefab80-cebc-11eb-8513-7e8a889634d0.png)
  
  #### 6. Fungsi Utama yang Dikembangkan 
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; Fungsi utama yang dikembangkan pada projek ini diantaranya adalah tampilan halaman utama sebagai pintu masuk bagi user dalam berinteraksi dengan web TiramisyuID. Kemudian ada bagian produk yang menawarkan proses jual-beli komoditas jamur tiram. Selain itu ada forum komunitas dimana user dapat berinteraksi dan sharing seputar komoditas jamur tiram, sampai fitur edukasi untuk mencerdaskan user terhadap komoditas jamur tiram.


## F. Hasil Implementasi
[`^ Kembali Keatas ^`](#)
  * <b>Screenshot Sistem</b>

  #### 1. Halaman Daftar

  ![Page Daftar](https://user-images.githubusercontent.com/62282651/144692677-2b6c8ca4-2ee9-4f84-bf4f-1cff314e6224.png)
  
  #### 2. Halaman Login/Masuk
  
  ![Page Login](https://user-images.githubusercontent.com/62282651/144692740-b38c88ca-0f9c-4fd2-a96c-685c89e041bb.png)
  
  #### 3. Halaman Utama

  ![Laman Utama](https://user-images.githubusercontent.com/62282651/144692789-5a5304e1-bc05-436d-b8ef-f6ff896d6174.png)
 
  #### 4. Halaman Fitur Layanan

  ![Page Layanan](https://user-images.githubusercontent.com/62282651/144692812-9e0e4359-b6de-4c62-ae50-924801e10b28.png)
  
  #### 5. Halaman Fitur Produk
  
  ![Page Produk 1](https://user-images.githubusercontent.com/62282651/144692893-cb46587b-e3f0-42c5-a57f-2c84b86fc92f.png)
  ![Page Produk 2](https://user-images.githubusercontent.com/62282651/144692895-794df0c2-e0b3-49cf-ac28-1061d1dfdd42.png)
  ![Page Produk 3](https://user-images.githubusercontent.com/62282651/144692890-9995c0b5-29d2-45bc-8c08-d0a3593c6be8.png)
  
  #### 6. Halaman Fitur Edukasi

  ![Page Edukasi](https://user-images.githubusercontent.com/62282651/144692923-4d45855b-098b-446b-9ddb-49dcd2adbc69.png)

  
  #### 7.  Halaman Fitur Komunitas
  
  ![Page Komunitas](https://user-images.githubusercontent.com/62282651/144692367-5097125c-7b6b-4365-9746-ec6bb1addb6a.png)
  
  #### 8.  Halaman Layanan - Admin
  
  ![admin-layanan](https://user-images.githubusercontent.com/62282651/144693213-2fa6da94-5713-4d89-a57d-03a2aa5d0ffd.png)
  ![Page Layanan - Admin](https://user-images.githubusercontent.com/62282651/144693268-afc9661a-1818-4547-afc2-5d8bef178cb3.png)
  
  
  #### 9.  Halaman Produk - Admin
  
  ![Page Produk -Admin](https://user-images.githubusercontent.com/62282651/144693171-20f97e78-5de5-4970-ad28-3070ccf740ed.png)
  ![Page Produk 2 -Admin](https://user-images.githubusercontent.com/62282651/144693174-d4d26b63-f29c-4779-82e3-83f6999f8153.png)
  
  #### 10.  Halaman Edukasi - Admin
  
  ![Page Artikel - Admin](https://user-images.githubusercontent.com/62282651/144693190-4fb4bae5-f7f0-4c5a-b300-0ba6200db527.png)
  ![Page Artikel 2 - Admin](https://user-images.githubusercontent.com/62282651/144693196-f901f0bd-d830-4b05-8e06-5e6eb8f52396.png)
  
  #### 11.  Halaman Komunitas - Admin
  
  ![Page Komunitas - Admin](https://user-images.githubusercontent.com/62282651/144693224-5ebc812e-c8d5-4f0e-8330-056cef20bf5e.png)
  ![Page Komunitas2 -Admin](https://user-images.githubusercontent.com/62282651/144693230-80dfa396-5176-45c0-ba58-49bc903e111f.png)

  
  * <b>Link Aplikasi</b>
    
## G. Saran untuk Pengembangan Selanjutnya
[`^ Kembali Keatas ^`](#)

Berikut beberapa saran untuk proyek pengembangan selanjutnya:
1. Proses pembelajaran dalam membangun/mengembangkan platform harus lebih efektif dan tidak memakan waktu yang lama
2. Memaksimalkan komunikasi dan manajemen antar pengembang dalam proses pengembangan
3. Memastikan dengan jelas keinginan client terhadap aplikasi seperti apa yang mereka inginkan
4. Client tetap harus memerhatikan pengembangan idenya sekalipun tujuan mereka sudah tidak sama dengan sebelumnya
5. Penerapan time management dalam pengembangan aplikasi harus lebih dimaksimalkan dan ditepati



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
