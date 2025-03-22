/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: [
        './index.html',
        './src/**/*.{vue,js,ts,jsx,tsx}',
        '*.{js,ts,jsx,tsx,mdx}',
        'app/**/*.{ts,tsx}',
        'components/**/*.{ts,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                primary: {
                    DEFAULT: '#4285f4',
                    foreground: 'hsl(var(--primary-foreground))',
                    light: 'rgba(66, 133, 244, 0.1)',
                },
                secondary: {
                    DEFAULT: '#fbbc05',
                    foreground: 'hsl(var(--secondary-foreground))',
                    light: 'rgba(251, 188, 5, 0.1)',
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))',
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))',
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))',
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))',
                },
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))',
                },
                danger: {
                    DEFAULT: '#F92F27',
                    light: 'rgba(241, 144, 136, 0.1)',
                },
                'gray-light': '#f9fafb',
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
                lg: '1.5rem',
                custom: '0.75rem',
            },
            boxShadow: {
                custom: '0 10px 15px -3px rgba(44, 44, 44, 0.1), 0 4px 6px -2px rgba(50, 50, 50, 0.05)',
                button: '0 2px 5px rgba(0, 0, 0, 0.1)',
                card: '0 4px 8px rgba(0, 0, 0, 0.05)',
            },
            spacing: {
                18: '4.5rem',
                30: '7.5rem',
            },
        },
    },
    plugins: [require('tailwindcss-animate')],
};
