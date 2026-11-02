// ================================================
// BLOG ARTICLES FUNCTIONALITY
// File: assets/js/articles.js
// ================================================

// Article Data
const articles = {
    1: {
        title: "7 Keunggulan Mobil Listrik BYD yang Wajib Anda Ketahui",
        date: "10 Desember 2024",
        readTime: "5 min read",
        category: "PANDUAN",
        content: `
            <div class="prose prose-invert max-w-none">
                <div class="mb-6 flex items-center gap-3 text-sm text-gray-400">
                    <span class="bg-byd-accent text-black px-3 py-1 rounded-full font-bold text-xs">PANDUAN</span>
                    <span><i class="far fa-calendar mr-2"></i>10 Desember 2024</span>
                    <span><i class="far fa-clock mr-2"></i>5 min read</span>
                </div>

                <img src="assets/images/byd-seal.png" alt="BYD Electric" class="w-full h-64 object-cover rounded-xl mb-8">

                <p class="text-lg text-gray-300 leading-relaxed mb-6">
                    Mobil listrik semakin populer di Indonesia, dan BYD menjadi pilihan utama dengan teknologi terdepan. Berikut 7 keunggulan yang membuat BYD berbeda dari kompetitor.
                </p>

                <h3 class="text-2xl font-bold text-white mt-8 mb-4">1. Teknologi Blade Battery yang Aman</h3>
                <p class="text-gray-300 leading-relaxed mb-4">
                    BYD menggunakan Blade Battery berbasis lithium iron phosphate (LFP) yang telah lulus <strong>nail penetration test</strong> - standar keamanan tertinggi industri. Baterai ini tidak mudah terbakar bahkan dalam kondisi ekstrem, memberikan ketenangan pikiran maksimal untuk Anda dan keluarga.
                </p>

                <h3 class="text-2xl font-bold text-white mt-8 mb-4">2. Jarak Tempuh Hingga 650 km</h3>
                <p class="text-gray-300 leading-relaxed mb-4">
                    Dengan kapasitas baterai hingga 82.56 kWh, BYD Seal mampu menempuh jarak <strong>650 km</strong> dalam sekali charging. Cukup untuk perjalanan Jakarta-Bandung pulang pergi tanpa perlu charging ulang!
                </p>

                <h3 class="text-2xl font-bold text-white mt-8 mb-4">3. Performa Akselerasi Responsif</h3>
                <p class="text-gray-300 leading-relaxed mb-4">
                    Motor listrik memberikan torsi maksimal sejak RPM 0. BYD Seal dapat akselerasi <strong>0-100 km/h dalam 5.9 detik</strong>, setara dengan sports car premium dengan harga jauh lebih terjangkau.
                </p>

                <h3 class="text-2xl font-bold text-white mt-8 mb-4">4. Hemat Biaya Operasional 70%</h3>
                <p class="text-gray-300 leading-relaxed mb-4">
                    Biaya charging listrik jauh lebih murah dibanding bensin. Untuk jarak 1000 km:
                </p>
                <ul class="list-disc list-inside text-gray-300 space-y-2 mb-4 ml-4">
                    <li>Mobil bensin: <strong>Rp 1.2 juta</strong> (BBM Pertalite)</li>
                    <li>Mobil listrik: <strong>Rp 200 ribu</strong> (tarif listrik rumah)</li>
                    <li>Penghematan: <strong>Rp 1 juta per 1000 km!</strong></li>
                </ul>

                <h3 class="text-2xl font-bold text-white mt-8 mb-4">5. Minim Perawatan</h3>
                <p class="text-gray-300 leading-relaxed mb-4">
                    Mesin listrik hanya memiliki <strong>20 komponen bergerak</strong> vs 2000+ di mesin bensin. Tidak perlu ganti oli, tune-up, atau service rutin yang mahal. Service berkala hanya untuk cek kondisi umum dan rotasi ban.
                </p>

                <h3 class="text-2xl font-bold text-white mt-8 mb-4">6. Ramah Lingkungan</h3>
                <p class="text-gray-300 leading-relaxed mb-4">
                    Zero emission saat berkendara. Mengurangi polusi udara dan jejak karbon hingga <strong>60-70%</strong> dibanding mobil konvensional. Investasi untuk masa depan anak cucu kita.
                </p>

                <h3 class="text-2xl font-bold text-white mt-8 mb-4">7. Teknologi Canggih & Fitur Lengkap</h3>
                <p class="text-gray-300 leading-relaxed mb-4">
                    Semua model BYD dilengkapi dengan:
                </p>
                <ul class="list-disc list-inside text-gray-300 space-y-2 mb-6 ml-4">
                    <li>Layar rotating 12.8" atau 15.6"</li>
                    <li>Advanced Driver Assistance System (ADAS)</li>
                    <li>OTA (Over-The-Air) software updates</li>
                    <li>Panoramic sunroof</li>
                    <li>Premium sound system</li>
                </ul>

                <div class="bg-byd-accent/10 border border-byd-accent/30 rounded-xl p-6 mt-8">
                    <h4 class="text-xl font-bold text-byd-accent mb-3">Kesimpulan</h4>
                    <p class="text-gray-300 leading-relaxed">
                        Mobil listrik BYD bukan hanya tentang teknologi masa depan, tapi juga penghematan nyata di kantong Anda. Dengan ROI (Return on Investment) yang tercapai dalam 3-5 tahun, switching ke EV adalah keputusan finansial yang cerdas.
                    </p>
                </div>
            </div>
        `
    },
    2: {
        title: "Teknologi Blade Battery: Revolusi Keamanan Baterai Mobil Listrik",
        date: "8 Desember 2024",
        readTime: "6 min read",
        category: "TEKNOLOGI",
        content: `
            <div class="prose prose-invert max-w-none">
                <div class="mb-6 flex items-center gap-3 text-sm text-gray-400">
                    <span class="bg-red-600 text-white px-3 py-1 rounded-full font-bold text-xs">TEKNOLOGI</span>
                    <span><i class="far fa-calendar mr-2"></i>8 Desember 2024</span>
                    <span><i class="far fa-clock mr-2"></i>6 min read</span>
                </div>

                <p class="text-lg text-gray-300 leading-relaxed mb-6">
                    Blade Battery adalah inovasi revolusioner dari BYD yang mengubah standar keamanan industri mobil listrik. Mari kita bahas mengapa teknologi ini begitu istimewa.
                </p>

                <h3 class="text-2xl font-bold text-white mt-8 mb-4">Apa itu Blade Battery?</h3>
                <p class="text-gray-300 leading-relaxed mb-4">
                    Blade Battery adalah <strong>baterai Lithium Iron Phosphate (LFP)</strong> dengan desain cell-to-pack yang unik. Berbeda dengan baterai konvensional yang menggunakan modul, Blade Battery langsung mengintegrasikan cell ke dalam pack, meningkatkan efisiensi hingga 50%.
                </p>

                <h3 class="text-2xl font-bold text-white mt-8 mb-4">Keunggulan Utama</h3>
                
                <h4 class="text-xl font-bold text-byd-accent mt-6 mb-3">1. Keamanan Maksimal</h4>
                <p class="text-gray-300 leading-relaxed mb-4">
                    Blade Battery adalah satu-satunya baterai EV yang <strong>lulus nail penetration test</strong> tanpa mengalami kebakaran atau ledakan. Bahkan ketika dipaku, suhu baterai hanya naik 30-60°C (baterai NCM/NCA bisa mencapai 500°C dan terbakar).
                </p>

                <h4 class="text-xl font-bold text-byd-accent mt-6 mb-3">2. Umur Pakai Panjang</h4>
                <p class="text-gray-300 leading-relaxed mb-4">
                    Tahan hingga <strong>3000 siklus charging</strong> dengan degradasi minimal. Artinya:
                </p>
                <ul class="list-disc list-inside text-gray-300 space-y-2 mb-4 ml-4">
                    <li>Jarak tempuh total: 1.95 juta km (650km x 3000)</li>
                    <li>Estimasi umur: 15-20 tahun untuk penggunaan normal</li>
                    <li>Garansi: 8 tahun atau 500.000 km</li>
                </ul>

                <h4 class="text-xl font-bold text-byd-accent mt-6 mb-3">3. Stabilitas Suhu Ekstrem</h4>
                <p class="text-gray-300 leading-relaxed mb-4">
                    Blade Battery dapat beroperasi optimal di suhu -30°C hingga 60°C. Dilengkapi dengan intelligent thermal management system yang menjaga suhu sel tetap stabil.
                </p>

                <h4 class="text-xl font-bold text-byd-accent mt-6 mb-3">4. Space Efficiency</h4>
                <p class="text-gray-300 leading-relaxed mb-4">
                    Desain blade (pisau) yang tipis dan panjang meningkatkan volume utilization hingga <strong>60%</strong> dibanding baterai konvensional. Lebih banyak energi dalam space yang sama = jarak tempuh lebih jauh.
                </p>

                <h4 class="text-xl font-bold text-byd-accent mt-6 mb-3">5. Ramah Lingkungan</h4>
                <p class="text-gray-300 leading-relaxed mb-4">
                    Lithium Iron Phosphate tidak mengandung kobalt atau nikel - material yang sering dikaitkan dengan isu ethical mining. 100% recyclable dan sustainable.
                </p>

                <h3 class="text-2xl font-bold text-white mt-8 mb-4">Perbandingan dengan Baterai NCM/NCA</h3>
                <div class="overflow-x-auto mb-6">
                    <table class="w-full text-sm text-gray-300">
                        <thead class="bg-byd-accent/20 text-byd-accent">
                            <tr>
                                <th class="px-4 py-3 text-left">Aspek</th>
                                <th class="px-4 py-3 text-left">Blade Battery (LFP)</th>
                                <th class="px-4 py-3 text-left">NCM/NCA</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-700">
                            <tr>
                                <td class="px-4 py-3 font-semibold">Keamanan</td>
                                <td class="px-4 py-3 text-green-400">★★★★★ Sangat Aman</td>
                                <td class="px-4 py-3 text-orange-400">★★★☆☆ Moderat</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-3 font-semibold">Umur Pakai</td>
                                <td class="px-4 py-3 text-green-400">3000+ siklus</td>
                                <td class="px-4 py-3">1000-1500 siklus</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-3 font-semibold">Biaya</td>
                                <td class="px-4 py-3 text-green-400">Lebih murah 30%</td>
                                <td class="px-4 py-3">Lebih mahal</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-3 font-semibold">Lingkungan</td>
                                <td class="px-4 py-3 text-green-400">Tanpa kobalt</td>
                                <td class="px-4 py-3 text-orange-400">Mengandung kobalt</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="bg-byd-accent/10 border border-byd-accent/30 rounded-xl p-6 mt-8">
                    <h4 class="text-xl font-bold text-byd-accent mb-3">Fun Fact</h4>
                    <p class="text-gray-300 leading-relaxed">
                        BYD adalah satu-satunya produsen mobil listrik di dunia yang memproduksi baterai sendiri. Ini memberikan kontrol penuh atas kualitas dan keamanan, sekaligus menurunkan biaya produksi hingga 20% dibanding kompetitor yang membeli baterai dari pihak ketiga.
                    </p>
                </div>
            </div>
        `
    },
    3: {
        title: "Perhitungan Biaya Operasional: Listrik vs Bensin",
        date: "5 Desember 2024",
        readTime: "7 min read",
        category: "HEMAT",
        content: `
            <div class="prose prose-invert max-w-none">
                <div class="mb-6 flex items-center gap-3 text-sm text-gray-400">
                    <span class="bg-green-600 text-white px-3 py-1 rounded-full font-bold text-xs">HEMAT</span>
                    <span><i class="far fa-calendar mr-2"></i>5 Desember 2024</span>
                    <span><i class="far fa-clock mr-2"></i>7 min read</span>
                </div>

                <p class="text-lg text-gray-300 leading-relaxed mb-6">
                    Banyak yang ragu beralih ke mobil listrik karena harga awal yang lebih tinggi. Tapi apakah Anda tahu bahwa biaya operasional mobil listrik jauh lebih murah? Mari kita hitung dengan data real.
                </p>

                <h3 class="text-2xl font-bold text-white mt-8 mb-4">Asumsi Perhitungan</h3>
                <div class="bg-byd-dark/50 border border-gray-700 rounded-xl p-6 mb-6">
                    <ul class="space-y-2 text-gray-300">
                        <li><strong>Jarak tempuh:</strong> 20.000 km/tahun (rata-rata pengguna Indonesia)</li>
                        <li><strong>Mobil bensin:</strong> Konsumsi 12 km/liter</li>
                        <li><strong>Mobil listrik:</strong> BYD Seal - konsumsi 14.3 kWh/100km</li>
                        <li><strong>Harga Pertalite:</strong> Rp 10.000/liter</li>
                        <li><strong>Tarif listrik rumah:</strong> Rp 1.445/kWh (rata-rata)</li>
                    </ul>
                </div>

                <h3 class="text-2xl font-bold text-white mt-8 mb-4">Biaya Energi per Tahun</h3>
                
                <h4 class="text-xl font-bold text-byd-accent mt-6 mb-3">Mobil Bensin</h4>
                <div class="bg-byd-dark/50 border border-gray-700 rounded-xl p-6 mb-6">
                    <p class="text-gray-300 mb-4">Perhitungan:</p>
                    <code class="block bg-black/50 p-4 rounded text-sm text-green-400 mb-4">
                        Konsumsi bensin = 20.000 km ÷ 12 km/L = 1.667 liter<br>
                        Biaya = 1.667 L × Rp 10.000 = <strong class="text-red-400">Rp 16.670.000/tahun</strong>
                    </code>
                </div>

                <h4 class="text-xl font-bold text-byd-accent mt-6 mb-3">Mobil Listrik (BYD Seal)</h4>
                <div class="bg-byd-dark/50 border border-gray-700 rounded-xl p-6 mb-6">
                    <p class="text-gray-300 mb-4">Perhitungan:</p>
                    <code class="block bg-black/50 p-4 rounded text-sm text-green-400 mb-4">
                        Konsumsi listrik = 20.000 km × 14.3 kWh/100km = 2.860 kWh<br>
                        Biaya = 2.860 kWh × Rp 1.445 = <strong class="text-byd-accent">Rp 4.132.700/tahun</strong>
                    </code>
                </div>

                <div class="bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-xl p-6 mb-8">
                    <h4 class="text-2xl font-bold text-green-400 mb-3">💰 Penghematan per Tahun</h4>
                    <p class="text-3xl font-bold text-white mb-2">Rp 12.537.300</p>
                    <p class="text-gray-300">Atau <strong>Rp 1.044.775 per bulan!</strong></p>
                    <p class="text-sm text-gray-400 mt-2">*Cukup untuk cicilan mobil atau investasi lainnya</p>
                </div>

                <h3 class="text-2xl font-bold text-white mt-8 mb-4">Biaya Perawatan & Service</h3>
                
                <h4 class="text-xl font-bold text-byd-accent mt-6 mb-3">Mobil Bensin (Estimasi per Tahun)</h4>
                <ul class="list-disc list-inside text-gray-300 space-y-2 mb-4 ml-4">
                    <li>Ganti oli + filter: Rp 1.000.000 (4x @ Rp 250k)</li>
                    <li>Service berkala: Rp 2.000.000</li>
                    <li>Tune-up: Rp 800.000</li>
                    <li>Ganti parts (kampas rem, dll): Rp 1.500.000</li>
                    <li><strong>Total: Rp 5.300.000/tahun</strong></li>
                </ul>

                <h4 class="text-xl font-bold text-byd-accent mt-6 mb-3">Mobil Listrik (Estimasi per Tahun)</h4>
                <ul class="list-disc list-inside text-gray-300 space-y-2 mb-4 ml-4">
                    <li>Service berkala: Rp 800.000 (hanya cek kondisi)</li>
                    <li>Rotasi & balancing ban: Rp 300.000</li>
                    <li>Ganti brake pad (lebih jarang karena regenerative braking): Rp 500.000</li>
                    <li><strong>Total: Rp 1.600.000/tahun</strong></li>
                </ul>

                <div class="bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-xl p-6 mb-8">
                    <h4 class="text-2xl font-bold text-green-400 mb-3">🔧 Penghematan Service per Tahun</h4>
                    <p class="text-3xl font-bold text-white mb-2">Rp 3.700.000</p>
                    <p class="text-gray-300">Hemat <strong>70% biaya perawatan!</strong></p>
                </div>

                <h3 class="text-2xl font-bold text-white mt-8 mb-4">Total Penghematan 5 Tahun</h3>
                <div class="bg-byd-dark/50 border border-byd-accent rounded-xl p-6 mb-6">
                    <table class="w-full text-gray-300">
                        <tr class="border-b border-gray-700">
                            <td class="py-3 font-semibold">Penghematan Energi (5 tahun)</td>
                            <td class="py-3 text-right text-byd-accent font-bold">Rp 62.686.500</td>
                        </tr>
                        <tr class="border-b border-gray-700">
                            <td class="py-3 font-semibold">Penghematan Service (5 tahun)</td>
                            <td class="py-3 text-right text-byd-accent font-bold">Rp 18.500.000</td>
                        </tr>
                        <tr class="border-b-2 border-byd-accent">
                            <td class="py-3 text-xl font-bold text-white">TOTAL PENGHEMATAN</td>
                            <td class="py-3 text-right text-3xl font-bold text-green-400">Rp 81.186.500</td>
                        </tr>
                    </table>
                    <p class="text-sm text-gray-400 mt-4">*Belum termasuk insentif pajak kendaraan listrik (diskon hingga 70%)</p>
                </div>

                <h3 class="text-2xl font-bold text-white mt-8 mb-4">Return on Investment (ROI)</h3>
                <p class="text-gray-300 leading-relaxed mb-4">
                    Jika selisih harga BYD Seal (Rp 639 juta) vs mobil sedan bensin premium (Rp 550 juta) adalah <strong>Rp 89 juta</strong>, maka:
                </p>
                <div class="bg-gradient-to-r from-byd-accent/20 to-blue-500/20 border border-byd-accent/30 rounded-xl p-6">
                    <p class="text-gray-300 mb-2">ROI tercapai dalam:</p>
                    <p class="text-4xl font-bold text-byd-accent mb-2">5.5 Tahun</p>
                    <p class="text-gray-300">Setelah itu, Anda <strong>pure profit</strong> dari penghematan!</p>
                </div>
            </div>
        `
    },
    // Articles 4, 5, 6 dengan format yang sama...
    4: {
        title: "Panduan Lengkap Charging Mobil Listrik di Rumah",
        date: "3 Desember 2024",
        readTime: "5 min read",
        category: "TIPS & TRIK",
        content: `
            <div class="prose prose-invert max-w-none">
                <p class="text-lg text-gray-300 leading-relaxed mb-6">
                    Charging di rumah adalah cara paling convenient dan ekonomis untuk mobil listrik Anda. Berikut panduan lengkapnya.
                </p>
                <h3 class="text-2xl font-bold text-white mt-8 mb-4">Pilihan Charging di Rumah</h3>
                <p class="text-gray-300 leading-relaxed">Coming soon... Full article content here.</p>
            </div>
        `
    },
    5: {
        title: "Perkembangan Infrastruktur Charging di Jakarta 2024",
        date: "1 Desember 2024",
        readTime: "6 min read",
        category: "INFORMASI",
        content: `
            <div class="prose prose-invert max-w-none">
                <p class="text-lg text-gray-300 leading-relaxed mb-6">
                    Update terbaru lokasi charging station di Jakarta dan cara mengaksesnya.
                </p>
                <h3 class="text-2xl font-bold text-white mt-8 mb-4">Peta Charging Station Jakarta</h3>
                <p class="text-gray-300 leading-relaxed">Coming soon... Full article content here.</p>
            </div>
        `
    },
    6: {
        title: "BYD Seal vs Atto 3: Mana yang Cocok untuk Anda?",
        date: "28 November 2024",
        readTime: "8 min read",
        category: "REVIEW",
        content: `
            <div class="prose prose-invert max-w-none">
                <p class="text-lg text-gray-300 leading-relaxed mb-6">
                    Perbandingan lengkap dua model terlaris BYD untuk membantu Anda memilih yang tepat.
                </p>
                <h3 class="text-2xl font-bold text-white mt-8 mb-4">Performa & Spesifikasi</h3>
                <p class="text-gray-300 leading-relaxed">Coming soon... Full article content here.</p>
            </div>
        `
    }
};

// Open Article Modal
function openArticle(articleId) {
    const article = articles[articleId];
    if (!article) return;

    const modal = document.getElementById('article-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalContent = document.getElementById('modal-content');

    modalTitle.textContent = article.title;
    modalContent.innerHTML = article.content;

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';

    // Track article read in Google Analytics
    if (typeof trackEvent === 'function') {
        trackEvent('article_read', {
            'event_category': 'content',
            'event_label': article.title,
            'article_id': articleId
        });
    }

    // Smooth scroll to top of modal
    modal.scrollTop = 0;
}

// Close Article Modal
function closeArticle() {
    const modal = document.getElementById('article-modal');
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('article-modal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeArticle();
            }
        });
    }

    // Close modal with ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeArticle();
        }
    });
});