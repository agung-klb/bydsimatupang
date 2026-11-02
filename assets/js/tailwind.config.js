tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Outfit', 'sans-serif'],
            },
            colors: {
                byd: {
                    dark: '#0B0F19',       // Background sangat gelap
                    card: '#151C2C',       // Background kartu
                    accent: '#00C2FF',     // Biru Elektrik (EV style)
                    secondary: '#64748B'   // Text muted
                }
            },
            animation: {
                'fade-in': 'fadeIn 1s ease-in-out',
                'bounce-slow': 'bounce 3s infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                }
            }
        }
    }
}
