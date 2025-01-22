# MyDataList

Aplikasi sederhana untuk menampilkan daftar data dari API JSONPlaceholder. Dirancang untuk tes mobile developer.

## Fitur Utama

- Halaman List Data: Menampilkan daftar data dengan infinite scroll
- Halaman Detail Data: Menampilkan detail data berdasarkan item yang dipilih
- Halaman Profil: Berisi informasi tentang pengembang aplikasi
- Splash Screen: Menampilkan logo aplikasi dan nama aplikasi saat startup

## Cara Install dan Menjalankan Aplikasi

1. Clone repository: `git clone https://github.com/username/MyDataList.git`
2. Install dependencies: `npm install`
3. Menjalankan aplikasi di emulator/perangkat: `npx react-native run-android`
4. Download APK (Release Version): Unduh file `app-release.apk` di halaman Releases

## Teknologi yang Digunakan

- React Native: Framework utama pengembangan aplikasi
- React Navigation: Navigasi antar halaman
- Axios: Mengambil data dari API

## Struktur Halaman

- Splash Screen: Menampilkan logo dan nama aplikasi selama 3 detik
- List Data: Menampilkan daftar data dari API dengan infinite scroll
- Detail Data: Menampilkan detail data (ID, Title, dan Body)
- Profil: Berisi informasi pengembang aplikasi dan tautan GitHub/Portofolio

## API yang Digunakan

- JSONPlaceholder: Sumber data aplikasi
 - Endpoint List Data: `https://jsonplaceholder.typicode.com/posts`
 - Endpoint Detail Data: `https://jsonplaceholder.typicode.com/posts/{id}`

## Lisensi

Aplikasi ini dikembangkan untuk keperluan tes mobile developer. Silakan gunakan dan modifikasi sesuai kebutuhan.

## Kontribusi

Kontribusi sangat diterima. Silakan fork repository dan kirim pull request.

## Versi

Versi saat ini: 1.0.0
