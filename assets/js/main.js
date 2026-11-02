// 1. Data Slideshow Hero (UPDATE DI SINI)
const slides = [
    {
        image: "assets/images/byd-seal.png",
        mobileImage: "assets/images/potrait/byd-seal.png",
        title: "BYD SEAL",
        desc: "Performa Tinggi, Kecepatan Maksimal."
    },
    {
        image: "assets/images/byd-atto3.png",
        mobileImage: "assets/images/potrait/byd-atto3.png",
        title: "BYD ATTO 3",
        desc: "Kenyamanan SUV Listrik Premium."
    },
    {
        image: "assets/images/byd-dolphin.jpg",
        mobileImage: "assets/images/potrait/byd-dolphin.jpg",
        title: "BYD DOLPHIN",
        desc: "Lincah dan Efisien untuk Perkotaan."
    },
    {
        image: "assets/images/byd-sealion7.png",
        mobileImage: "assets/images/potrait/byd-sealion7.png",
        title: "BYD SEALION 7",
        desc: "Inovasi SUV Listrik Berperforma Tinggi."
    },
    {
        image: "assets/images/byd-atto1.png",
        mobileImage: "assets/images/potrait/byd-atto1.jpg",
        title: "BYD ATTO 1",
        desc: "Energi Baru untuk Mobilitas Perkotaan."
    },
    {
        image: "assets/images/byd-m6.jpg",
        mobileImage: "assets/images/potrait/byd-m6.jpg",
        title: "BYD M6",
        desc: "MPV Listrik Luas untuk Keluarga Modern."
    }
];

let currentSlide = 0;
const heroSlider = document.getElementById('hero-slider');
const slideDots = document.getElementById('slide-dots');
const heroTitle = document.getElementById('hero-title');
const heroDesc = document.getElementById('hero-desc');

function initSlider() {
    // Render Images
    slides.forEach((slide, index) => {
        const img = document.createElement('div');
        img.className = `absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 slide-bg-${index} ${index === 0 ? 'opacity-100' : 'opacity-0'}`;
        img.id = `slide-${index}`;

        // CSS dinamis untuk responsif gambar
        const style = document.createElement('style');
        style.innerHTML = `
            .slide-bg-${index} {
                background-image: url('${slide.image}');
            }
            @media (max-width: 768px) {
                .slide-bg-${index} {
                    background-image: url('${slide.mobileImage}');
                }
            }
        `;
        document.head.appendChild(style);

        heroSlider.appendChild(img);

        // Create Dots
        const dot = document.createElement('button');
        dot.className = `w-3 h-3 rounded-full transition-all ${index === 0 ? 'bg-byd-accent w-8' : 'bg-gray-500'}`;
        dot.onclick = () => changeSlide(index);
        slideDots.appendChild(dot);
    });
}

function changeSlide(index) {
    document.getElementById(`slide-${currentSlide}`).classList.remove('opacity-100');
    document.getElementById(`slide-${currentSlide}`).classList.add('opacity-0');

    currentSlide = index;

    document.getElementById(`slide-${currentSlide}`).classList.remove('opacity-0');
    document.getElementById(`slide-${currentSlide}`).classList.add('opacity-100');

    Array.from(slideDots.children).forEach((dot, i) => {
        if (i === currentSlide) {
            dot.classList.remove('bg-gray-500', 'w-3');
            dot.classList.add('bg-byd-accent', 'w-8');
        } else {
            dot.classList.add('bg-gray-500', 'w-3');
            dot.classList.remove('bg-byd-accent', 'w-8');
        }
    });

    heroTitle.style.opacity = '0';
    heroDesc.style.opacity = '0';
    setTimeout(() => {
        heroTitle.innerText = slides[currentSlide].title;
        heroDesc.innerText = slides[currentSlide].desc;
        heroTitle.style.opacity = '1';
        heroDesc.style.opacity = '1';
    }, 300);
}

setInterval(() => {
    let nextIndex = (currentSlide + 1) % slides.length;
    changeSlide(nextIndex);
}, 5000);

initSlider();

// 2. Mobile Menu Toggle
const btn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');

if (btn && menu) {
    btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });
}

// 3. Navbar Scrolled Background Effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('shadow-lg');
        navbar.classList.replace('bg-byd-dark/80', 'bg-byd-dark/95');
    } else {
        navbar.classList.remove('shadow-lg');
        navbar.classList.replace('bg-byd-dark/95', 'bg-byd-dark/80');
    }
});

// 4. Credit Simulation Logic
function calculateCredit() {
    const price = parseFloat(document.getElementById('sim-price').value) || 0;
    const dp = parseFloat(document.getElementById('sim-dp').value) || 0;
    const tenor = parseInt(document.getElementById('sim-tenor').value);
    const rateYear = parseFloat(document.getElementById('sim-rate').value) || 0;

    if (price <= 0) { alert("Mohon masukkan harga mobil yang valid"); return; }
    if (dp >= price) { alert("DP tidak boleh lebih besar atau sama dengan Harga Mobil"); return; }

    const loanAmount = price - dp;
    const totalInterest = loanAmount * (rateYear / 100) * (tenor / 12);
    const totalPayment = loanAmount + totalInterest;
    const monthlyInstallment = totalPayment / tenor;

    const formatter = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });

    const resultElement = document.getElementById('sim-result');
    const interestElement = document.getElementById('sim-interest');

    resultElement.style.opacity = '0';
    interestElement.style.opacity = '0';

    setTimeout(() => {
        resultElement.innerText = formatter.format(monthlyInstallment);
        interestElement.innerText = formatter.format(totalInterest);

        resultElement.style.opacity = '1';
        interestElement.style.opacity = '1';
    }, 200);
}

// 5. Booking Test Drive Logic

// Data Gambar Mobil untuk Test Drive
const testDriveImages = {
    "BYD Seal": "assets/images/byd-seal.png",
    "BYD Atto 3": "assets/images/byd-atto3.png",
    "BYD Dolphin": "assets/images/byd-dolphin.jpg",
    "BYD M6": "assets/images/potrait/byd-m6.jpg", // Using potrait/m6 as fall back or just regular m6 if available? Checking usage. Original was /images/byd-m6.jpg.
    "BYD Sealion 7": "assets/images/byd-sealion7.png",
    "BYD Atto 1": "assets/images/byd-atto1.png"
};
// Note: I noticed m6 was /images/byd-m6.jpg in original script. In my slides array I updated paths.
// Let me double check if I should update paths in testDriveImages too. Use relative paths.

function updateTestDriveImage() {
    const model = document.getElementById('td-model').value;
    const imgElement = document.getElementById('td-image');
    let newSrc = testDriveImages[model];
    
    // Fix for M6 path if needed, matching the moved structure.
    if(model === "BYD M6") newSrc = "assets/images/byd-m6.jpg"; 

    if (newSrc) {
        // Efek Fade Out
        imgElement.style.opacity = 0;

        setTimeout(() => {
            // Ganti Source
            imgElement.src = newSrc;
            // Efek Fade In
            imgElement.style.opacity = 1;
        }, 300); // Durasi delay sesuai transition di CSS
    }
}

function bookTestDrive() {
    const name = document.getElementById('td-name').value;
    const model = document.getElementById('td-model').value;
    const date = document.getElementById('td-date').value;
    const time = document.getElementById('td-time').value;

    if (!name || !date || !time) {
        alert("Mohon lengkapi data Test Drive Anda");
        return;
    }

    const message = `Halo Sales BYD Simatupang, saya ${name} ingin booking Test Drive.\n\nUnit: ${model}\nTanggal: ${date}\nJam: ${time}\n\nMohon konfirmasi ketersediaan unit. Terima kasih.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/6281294633578?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
}
