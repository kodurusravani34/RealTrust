/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        container: {
            center: true,
            padding: '1rem',
        },
        extend: {
            colors: {
                primary: '#2563EB', // blue-600
                accent: '#FB923C', // warm orange
                secondary: '#0B1220', // dark slate
                surface: '#ffffff',
            },
            fontFamily: {
                sans: ['Inter', 'ui-sans-serif', 'system-ui'],
            }
        },
    },
    plugins: [],
}
