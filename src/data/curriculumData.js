export const curriculumData = {
  meta: {
    title: "Path Mobile Provoks",
    subtitle: "Flutter + VS Code AI Workflow",
    duration: "8 Minggu (2 Bulan)",
    target: "1 Aplikasi Portfolio Ready • 100% Clean Architecture",
    workload: {
      aiVibe: 60,
      humanArch: 40,
    },
    dailyRoutine: {
      total: 120, // minutes
      theory: 15,
      coding: 60,
      review: 45,
    },
    tools: [
      { name: "VS Code", desc: "Editor utama ringan untuk Flutter" },
      { name: "Flutter & Dart Extension Pack", desc: "Debugging, Hot Reload, & Snippets resmi" },
      { name: "Copilot / Continue.dev / Cursor", desc: "Autocompletion & inline AI refactoring" },
      { name: "Flutter Tree / Pubspec Assist", desc: "Manajemen dependensi & hirarki widget" },
      { name: "Thunder Client / Postman", desc: "Pengujian endpoint REST API di editor" },
    ],
  },

  months: [
    {
      id: "month-1",
      monthNumber: 1,
      title: "Bulan I: Fondasi Dart & AI-Driven UI",
      weeksRange: "Minggu 1 - Minggu 4",
      description: "Membangun pondasi logika Dart modern, arsitektur widget Flutter, state management Riverpod, dan navigasi deklaratif dipercepat dengan AI Vibe Coding.",
      color: "from-amber-500 to-orange-600",
      weeks: [
        {
          id: "w1",
          weekNumber: 1,
          month: 1,
          title: "Toolset, Dart Essentials & AI Prompting Workflow",
          focus: "Instalasi SDK, konfigurasi VS Code, OOP Dart, dan teknik prompting AI untuk snippet kode Dart presisi.",
          tags: ["Dart OOP", "Async/Await", "SDK Setup", "Prompting"],
          image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80",
          stats: {
            theory: "15m/hr",
            vibe: "60m/hr",
            review: "45m/hr",
            duration: "7 Hari"
          },
          days: [
            {
              days: "Hari 1-2",
              topic: "Setup Lingkungan Dev & Tooling",
              detail: "Setup Flutter SDK, VS Code extensions (Flutter, Dart, Copilot/Continue), & Android Studio SDK.",
              completed: true,
            },
            {
              days: "Hari 3-4",
              topic: "Sintaks Dart Modern & OOP",
              detail: "Sintaks Dart: Variable, Control Flow, Functions, OOP (Class, Mixin), Null Safety.",
              completed: true,
            },
            {
              days: "Hari 5-7",
              topic: "Pemrograman Asinkron & Prompting Workshop",
              detail: "Pemrograman Asinkron (Future, Async/Await) & Vibe Prompting Workshop (Generate Models).",
              completed: false,
            },
          ],
          promptSnippet: {
            title: "Generate Model Dart Terstruktur",
            prompt: `Buatkan model Dart bernama UserProfile dengan null safety.
Memiliki properti: id (String), name (String), email (String), role (enum UserRole), avatarUrl (String?), dan createdAt (DateTime).
Sertakan constructor, method copyWith, fromJson, dan toJson tanpa library eksternal.`,
          },
        },
        {
          id: "w2",
          weekNumber: 2,
          month: 1,
          title: "Layout Mastery & AI UI Scaffolding",
          focus: "Memahami pohon widget (Widget Tree), layout kompleks, dan AI untuk menyusun UI responsif.",
          tags: ["Widget Tree", "Slivers", "UI Prompting", "CustomScrollView"],
          stats: {
            theory: "15m/hr",
            vibe: "60m/hr",
            review: "45m/hr",
            duration: "7 Hari"
          },
          days: [
            {
              days: "Hari 8-9",
              topic: "Core Widgets & Composition",
              detail: "Core Widgets: Container, Column, Row, Stack, Image, Text, Textfield, Icon.",
              completed: false,
            },
            {
              days: "Hari 10-11",
              topic: "Scrollable & Performance Widgets",
              detail: "Scrollable Widgets: ListView.builder, GridView, CustomScrollView, & Slivers.",
              completed: false,
            },
            {
              days: "Hari 12-14",
              topic: "Prompting UI Scaffolding",
              detail: "Prompting UI: Mengubah deskripsi menjadi widget Flutter bersih dalam 3x iterasi prompt.",
              completed: false,
            },
          ],
          promptSnippet: {
            title: "Scaffolding Widget ProductCard (Sesuai Silabus)",
            prompt: `Buatkan widget Flutter StatefulWidget bernama ProductCard. Memiliki parameter imageUrl, title, price, dan onAddToCart.
Gunakan Card dengan Elevation 2, Border Radius 12px, serta layout Column yang rapi.
Sertakan tombol 'Beli' di kanan bawah dengan warna Amber-600.`,
          },
        },
        {
          id: "w3",
          weekNumber: 3,
          month: 1,
          title: "State Management & Arsitektur Aplikasi",
          focus: "Berpindah dari Ephemeral State (setState) ke App State Management (Riverpod/Provider).",
          tags: ["Riverpod", "StateNotifier", "Clean State", "Immutability"],
          stats: {
            theory: "15m/hr",
            vibe: "60m/hr",
            review: "45m/hr",
            duration: "7 Hari"
          },
          days: [
            {
              days: "Hari 15-16",
              topic: "Imutabilitas Data & Batasan setState",
              detail: "Imutabilitas data, Lift State Up, & batasan setState pada aplikasi skala menengah.",
              completed: false,
            },
            {
              days: "Hari 17-19",
              topic: "Riverpod Modern Implementation",
              detail: "State Management Modern (Riverpod): StateNotifierProvider, FutureProvider, ConsumerWidget.",
              completed: false,
            },
            {
              days: "Hari 20-21",
              topic: "Vibe Coding Riverpod Boilerplate",
              detail: "Pola Vibe Coding: Meminta AI membuat Boilerplate Notifier & State Class, developer review logic.",
              completed: false,
            },
          ],
          promptSnippet: {
            title: "Boilerplate Riverpod StateNotifier",
            prompt: `Buatkan kelas StateNotifier Riverpod untuk mengelola AuthState.
Kondisi state meliputi: initial, loading, authenticated(User), dan error(String message).
Gunakan sealed class atau freezed pattern. Sertakan method login(email, password) dan logout().`,
          },
        },
        {
          id: "w4",
          weekNumber: 4,
          month: 1,
          title: "Navigasi, Routing, & Local Storage",
          focus: "Mengatur alur perpindahan halaman dengan declarative routing dan penyimpanan data lokal.",
          tags: ["GoRouter", "Deep Linking", "SharedPreferences", "Hive/Isar"],
          stats: {
            theory: "15m/hr",
            vibe: "60m/hr",
            review: "45m/hr",
            duration: "7 Hari"
          },
          days: [
            {
              days: "Hari 22-24",
              topic: "Declarative Routing dengan GoRouter",
              detail: "Declarative Routing dengan GoRouter: Deep linking, route guards, & arguments.",
              completed: false,
            },
            {
              days: "Hari 25-28",
              topic: "Local Storage & Caching",
              detail: "Local Storage: SharedPreferences (preferensi) & Hive / Isar (Database NoSQL lokal).",
              completed: false,
            },
          ],
          promptSnippet: {
            title: "Setup GoRouter dengan Route Guards",
            prompt: `Buatkan konfigurasi GoRouter Flutter dengan route guard berbasis status login.
Jika belum login dan membuka /dashboard, redirect ke /login.
Sertakan transisi animasi fade page transition.`,
          },
        },
      ],
    },
    {
      id: "month-2",
      monthNumber: 2,
      title: "Bulan II: Integrasi Data & Capstone Project",
      weeksRange: "Minggu 5 - Minggu 8",
      description: "Integrasi REST API, Backend-as-a-Service (Supabase/Firebase), eksekusi Capstone Project utuh, serta optimasi performa dan build release APK.",
      color: "from-blue-600 to-indigo-700",
      weeks: [
        {
          id: "w5",
          weekNumber: 5,
          month: 2,
          title: "REST API Integration & JSON Serialization",
          focus: "Menghubungkan aplikasi dengan web service, HTTP request, dan handling error terstandar.",
          tags: ["Dio / Http", "Freezed", "JSON Parsing", "Failure Handling"],
          stats: {
            theory: "15m/hr",
            vibe: "60m/hr",
            review: "45m/hr",
            duration: "7 Hari"
          },
          days: [
            {
              days: "Hari 29-31",
              topic: "Client HTTP & Interceptors",
              detail: "Client HTTP (Dio / Http package): GET, POST, PUT, DELETE, Headers, Interceptors.",
              completed: false,
            },
            {
              days: "Hari 32-33",
              topic: "Serialization & Model Freezed",
              detail: "Serialization: Auto-generate Model Class dari raw JSON dengan AI / freezed.",
              completed: false,
            },
            {
              days: "Hari 34-35",
              topic: "Error Handling & UI State",
              detail: "Error Handling: Custom Failure classes, Try-Catch, & State Loading/Error pada UI.",
              completed: false,
            },
          ],
          promptSnippet: {
            title: "Dio Client Interceptor Setup",
            prompt: `Buatkan singleton DioClient di Flutter yang memiliki Interceptor untuk menyisipkan Bearer token otomatis, me-refresh token saat 401 Unauthorized, serta logging request/response di mode debug.`,
          },
        },
        {
          id: "w6",
          weekNumber: 6,
          month: 2,
          title: "Backend-as-a-Service (Supabase / Firebase)",
          focus: "Mengintegrasikan Autentikasi dan Database Realtime menggunakan Supabase atau Firebase.",
          tags: ["Supabase", "Auth Realtime", "CRUD Database", "File Storage"],
          stats: {
            theory: "15m/hr",
            vibe: "60m/hr",
            review: "45m/hr",
            duration: "7 Hari"
          },
          days: [
            {
              days: "Hari 36-38",
              topic: "Autentikasi Pengguna & Sesi",
              detail: "Autentikasi pengguna: Sign Up, Login Email/Password, Google Sign-In, Session.",
              completed: false,
            },
            {
              days: "Hari 39-42",
              topic: "Realtime Database & Upload",
              detail: "Database Operations: CRUD data real-time, file storage untuk upload gambar.",
              completed: false,
            },
          ],
          promptSnippet: {
            title: "Supabase Realtime Stream Provider",
            prompt: `Buatkan Flutter repository class untuk Supabase yang me-listen stream data tabel 'tasks' secara realtime dan memetakan hasilnya ke List<TaskModel>.`,
          },
        },
        {
          id: "w7",
          weekNumber: 7,
          month: 2,
          title: "Capstone Mini Project (60% Vibe Coding)",
          focus: "Membangun aplikasi utuh dari awal memanfaatkan kecepatan AI Vibe Coding di VS Code.",
          tags: ["Feature-First", "Vibe Coding 60%", "Clean Arch", "Full App"],
          stats: {
            theory: "15m/hr",
            vibe: "60m/hr",
            review: "45m/hr",
            duration: "7 Hari"
          },
          days: [
            {
              days: "Hari 43-44",
              topic: "Setup Arsitektur & Folder",
              detail: "Setup Arsitektur: Feature-first folder structure, Theme setup, & Mock API.",
              completed: false,
            },
            {
              days: "Hari 45-47",
              topic: "Rapid Feature Building (AI)",
              detail: "Rapid Feature Building: Vibe Coding untuk Auth, Dashboard, Detail View, & Cart Flow.",
              completed: false,
            },
            {
              days: "Hari 48-49",
              topic: "Integrasi Logic & State",
              detail: "Integrasi Logic & State: Mengaitkan kode AI dengan bisnis logika secara tepat.",
              completed: false,
            },
          ],
          promptSnippet: {
            title: "Feature-First Folder Scaffolding",
            prompt: `Susun struktur folder Flutter berorientasi fitur (feature-first) untuk aplikasi e-commerce/POS dengan folder: core/ (network, theme, utils) dan features/ (auth, catalog, cart, orders) yang memisahkan layer data, domain, dan presentation.`,
          },
        },
        {
          id: "w8",
          weekNumber: 8,
          month: 2,
          title: "Refactoring, Optimization & APK Build",
          focus: "Pembersihan kode hasil AI, peningkatan performa UI, bug fixing, dan build release.",
          tags: ["Code Review", "Shimmer Loading", "Linter Clean", "APK Release"],
          stats: {
            theory: "15m/hr",
            vibe: "60m/hr",
            review: "45m/hr",
            duration: "7 Hari"
          },
          days: [
            {
              days: "Hari 50-52",
              topic: "Code Review & Refactoring",
              detail: "Code Review & Refactoring: Menghapus redundant code & linting warning.",
              completed: false,
            },
            {
              days: "Hari 53-56",
              topic: "Polish UI & Build Output (.apk)",
              detail: "Polish UI (Animasi, Shimmer Loading) & Build Output (.apk) untuk pengujian.",
              completed: false,
            },
          ],
          promptSnippet: {
            title: "Flutter Performance & Lint Audit",
            prompt: `Audit widget Flutter ini untuk mendeteksi rebuild yang tidak perlu: pastikan penggunaan const constructor, hapus anonymous function di build method, dan rekomendasikan memoization dengan select() pada Riverpod.`,
          },
        },
      ],
    },
  ],

  capstoneProjects: [
    {
      id: "cap-1",
      name: "Provoks POS Mini",
      category: "Retail / Point of Sale",
      description: "Aplikasi kasir toko mandiri untuk UMKM dengan manajemen katalog produk, keranjang transaksi kilat, kalkulasi kembalian, dan cetak nota transaksi PDF via printer thermal / share.",
      dataComplexity: "Local Storage + REST API Sync",
      badge: "Local + API",
      highlights: ["Kasir Toko Cepat", "Katalog Produk & Stok", "Keranjang Belanja", "Cetak Nota PDF"],
      features: [
        "Manajemen produk dengan barcode & foto",
        "Keranjang belanja interaktif dengan diskon",
        "Simulasi pembayaran tunai & QRIS",
        "Generate & export struk nota PDF",
        "Sinkronisasi data ke cloud saat online"
      ],
      stats: {
        complexity: "Menengah",
        storage: "Hive / Isar",
        api: "REST Client",
        offline: "100% Ready"
      }
    },
    {
      id: "cap-2",
      name: "Task Master AI",
      category: "Productivity & AI",
      description: "Aplikasi manajemen tugas harian modern dengan kategori fleksibel, pengingat notifikasi, sinkronisasi realtime, serta ringkasan prioritas berbasis AI.",
      dataComplexity: "Supabase Realtime DB",
      badge: "Supabase Realtime",
      highlights: ["Tugas Harian & Kategori", "Notifikasi Lokal", "Supabase Realtime", "Ringkasan Prioritas AI"],
      features: [
        "Autentikasi email & Google Sign-In",
        "CRUD realtime tugas dengan filter prioritas",
        "Notifikasi pengingat tenggat waktu",
        "AI Summarizer untuk jadwal harian",
        "Dark / Light theme adaptif"
      ],
      stats: {
        complexity: "Menengah-Tinggi",
        storage: "Supabase DB",
        api: "Realtime WebSocket",
        offline: "Cache Sync"
      }
    },
    {
      id: "cap-3",
      name: "Catalog App (E-Commerce)",
      category: "E-Commerce",
      description: "Katalog produk e-commerce interaktif dengan pencarian instan, multi-filter, sistem wishlist tersimpan, dan alur mock checkout payment gateway.",
      dataComplexity: "REST API + Payment Gateway Mock",
      badge: "E-Commerce Mock",
      highlights: ["Katalog Produk Grid", "Pencarian & Multi-Filter", "Sistem Wishlist", "Mock Checkout Flow"],
      features: [
        "Tampilan produk adaptif grid & list",
        "Filter berdasarkan kategori, harga, rating",
        "Wishlist tersimpan di local storage",
        "Mock checkout dengan pemilihan kurir",
        "Shimmer placeholder saat loading API"
      ],
      stats: {
        complexity: "Menengah",
        storage: "SharedPreferences",
        api: "REST API Mock",
        offline: "Wishlist Cached"
      }
    },
  ],

  vibeCodingProtocol: {
    title: "Protokol Vibe Coding 60/40",
    description: "Vibe coding berarti memanfaatkan AI secara terukur tanpa mengorbankan kualitas arsitektur aplikasi.",
    aiShare: {
      percentage: 60,
      label: "Boleh Didelegasikan ke AI",
      items: [
        "Menulis boilerplate code (Stateful/Stateless class)",
        "Membuat layout UI dari sketsa deskriptif / wireframe",
        "Membuat data dummy JSON & Model Dart (fromJson/toJson)",
        "Membuat fungsi pembantu (Date formatter, Validator regex)"
      ]
    },
    humanShare: {
      percentage: 40,
      label: "WAJIB Ditangani Developer",
      items: [
        "Penentuan arsitektur folder & pemilihan state management",
        "Validasi keamanan token API & kredensial rahasia (.env)",
        "Debugging logika error yang rumit / edge cases",
        "Code review menyeluruh untuk performa memori & rebuild"
      ]
    }
  },

  rubric: [
    {
      title: "Kualitas Kode & Arsitektur",
      weight: 30,
      desc: "Kode terstruktur rapi (Clean Architecture), tidak ada file raksasa (>300 baris), dan bersih dari warning linter."
    },
    {
      title: "Kelengkapan Fitur App",
      weight: 30,
      desc: "Aplikasi berfungsi tanpa crash, alur CRUD berjalan lancar, dan integrasi API/Database sesuai spesifikasi."
    },
    {
      title: "Kemahiran Vibe Coding",
      weight: 20,
      desc: "Kemampuan merumuskan prompt efektif di VS Code dan efisiensi waktu pengerjaan UI serta bug-fixing."
    },
    {
      title: "UI/UX Polish & Responsif",
      weight: 20,
      desc: "Antarmuka nyaman dilihat, konsisten dengan tema, serta memiliki penanganan status loading shimmer dan error yang jelas."
    }
  ],

  promptLab: [
    {
      id: "p1",
      category: "UI Scaffolding",
      title: "ProductCard Widget Komprehensif",
      tags: ["Flutter", "UI", "Card", "Amber-600"],
      prompt: `Buatkan widget Flutter StatefulWidget bernama ProductCard. Memiliki parameter imageUrl, title, price, dan onAddToCart.
Gunakan Card dengan Elevation 2, Border Radius 12px, serta layout Column yang rapi.
Sertakan tombol 'Beli' di kanan bawah dengan warna Amber-600.`
    },
    {
      id: "p2",
      category: "Data Models",
      title: "Model Dart Freezed dengan JSON Serialization",
      tags: ["Dart", "Freezed", "Model"],
      prompt: `Buatkan data class menggunakan package:freezed_annotation untuk entitas Product.
Properti: id (String), name (String), price (double), rating (double), inStock (bool), dan tags (List<String>).
Tambahkan factory constructor fromJson dan toJson yang kompatibel dengan json_serializable.`
    },
    {
      id: "p3",
      category: "State Management",
      title: "Riverpod StateNotifier + AsyncValue Pattern",
      tags: ["Riverpod", "AsyncValue", "State"],
      prompt: `Buatkan class ProductListNotifier extends StateNotifier<AsyncValue<List<Product>>>.
Sertakan method fetchProducts() yang memanggil ProductRepository, menangani loading state, sukses, dan error failure class secara elegan.`
    },
    {
      id: "p4",
      category: "Networking",
      title: "Dio Interceptor untuk Token & Refresh Auth",
      tags: ["Dio", "HTTP", "JWT Auth"],
      prompt: `Buatkan AuthInterceptor untuk Dio di Flutter.
Jika request dikirim, sematkan 'Authorization: Bearer <token>' dari SecureStorage.
Jika respon 401 Unauthorized, lakukan pemanggilan refresh token otomatis lalu ulang request yang gagal.`
    },
    {
      id: "p5",
      category: "Architecture",
      title: "Feature-First Folder Template",
      tags: ["Clean Arch", "Structure"],
      prompt: `Susun template boilerplate arsitektur feature-first untuk fitur 'Cart' di Flutter:
1. data/ (datasources, models, repositories)
2. domain/ (entities, usecases, repository interfaces)
3. presentation/ (controllers/notifiers, pages, widgets)`
    }
  ]
};
