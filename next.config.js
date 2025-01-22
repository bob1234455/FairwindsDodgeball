// pages/_app.js
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

// pages/index.js
'use client'
import { useState } from 'react'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [activeDivision, setActiveDivision] = useState('6')

  const divisions = {
    '6': {
      title: 'Grade 6 Division',
      teams: [
        { rank: 1, name: 'Lightning Strikes', score: 285 },
        { rank: 2, name: 'Thunder Squad', score: 265 },
        { rank: 3, name: 'Storm Chasers', score: 245 },
        { rank: 4, name: 'Cloud Runners', score: 230 },
        { rank: 5, name: 'Rain Raiders', score: 210 },
        { rank: 6, name: 'Tornado Titans', score: 195 },
        { rank: 7, name: 'Hurricane Heroes', score: 180 },
        { rank: 8, name: 'Cyclone Strikers', score: 165 }
      ]
    },
    '7': {
      title: 'Grade 7 Division',
      teams: [
        { rank: 1, name: 'Dodge Masters', score: 290 },
        { rank: 2, name: 'Ball Blazers', score: 275 },
        { rank: 3, name: 'Swift Strikers', score: 255 },
        { rank: 4, name: 'Power Players', score: 240 },
        { rank: 5, name: 'Quick Quitters', score: 225 },
        { rank: 6, name: 'Dodge Dynasty', score: 210 },
        { rank: 7, name: 'Ball Legends', score: 195 },
        { rank: 8, name: 'Victory Vault', score: 180 }
      ]
    },
    '8': {
      title: 'Grade 8 Division',
      teams: [
        { rank: 1, name: 'Elite Eagles', score: 295 },
        { rank: 2, name: 'Falcon Force', score: 280 },
        { rank: 3, name: 'Wing Warriors', score: 265 },
        { rank: 4, name: 'Sky Strikers', score: 250 },
        { rank: 5, name: 'Air Assault', score: 235 },
        { rank: 6, name: 'Soaring Squad', score: 220 },
        { rank: 7, name: 'Phoenix Pride', score: 205 },
        { rank: 8, name: 'Hawk Heroes', score: 190 }
      ]
    }
  }

  return (
    <main className={`min-h-screen flex flex-col ${inter.className}`}>
      <header className="bg-gradient-to-br from-blue-600 to-sky-400 p-10 text-center shadow-md">
        <h1 className="text-4xl font-bold text-white mb-2 text-shadow">
          Fairwind Falcons Dodgeball Tournament
        </h1>
        <p className="text-xl text-white opacity-90 max-w-2xl mx-auto">
          Professional Tournament Management System
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 max-w-6xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-md border-2 border-sky-200 hover:-translate-y-1 transition-transform">
          <h3 className="text-blue-600 text-xl font-semibold mb-2">Tournament Status</h3>
          <p>Currently Active</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md border-2 border-sky-200 hover:-translate-y-1 transition-transform">
          <h3 className="text-blue-600 text-xl font-semibold mb-2">Total Teams</h3>
          <p>24 Teams (8 per Division)</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md border-2 border-sky-200 hover:-translate-y-1 transition-transform">
          <h3 className="text-blue-600 text-xl font-semibold mb-2">Next Matches</h3>
          <p>Quarterfinals - All Divisions</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-4 max-w-6xl mx-auto px-8 my-8">
        {Object.keys(divisions).map((division) => (
          <button
            key={division}
            onClick={() => setActiveDivision(division)}
            className={`px-8 py-4 text-lg font-semibold rounded-lg transition-colors
              ${activeDivision === division
                ? 'bg-blue-600 text-white'
                : 'bg-white text-blue-600 border-2 border-blue-600 hover:bg-sky-200 hover:text-black'
              }`}
          >
            Grade {division}
          </button>
        ))}
      </div>

      <div className="container mx-auto px-8 mb-16">
        <h2 className="text-2xl text-blue-600 text-center mb-8">
          {divisions[activeDivision].title}
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-separate border-spacing-y-2">
            <thead>
              <tr>
                <th className="bg-blue-600 text-white p-4 text-left rounded-l-lg">Rank</th>
                <th className="bg-blue-600 text-white p-4 text-left">Team Name</th>
                <th className="bg-blue-600 text-white p-4 text-left rounded-r-lg">Score</th>
              </tr>
            </thead>
            <tbody>
              {divisions[activeDivision].teams.map((team) => (
                <tr
                  key={team.rank}
                  className="bg-gray-50 hover:bg-sky-200 hover:scale-[1.01] transition-all"
                >
                  <td className="p-4 text-lg font-semibold text-blue-600 rounded-l-lg">
                    {team.rank}
                  </td>
                  <td className="p-4 text-lg font-semibold">
                    {team.name}
                  </td>
                  <td className="p-4 text-lg font-semibold text-black rounded-r-lg">
                    {team.score}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <footer className="bg-gradient-to-br from-blue-600 to-sky-400 p-6 text-center mt-auto">
        <p className="text-white">© 2025 Fairwind Falcons Dodgeball Tournament</p>
        <p className="text-white opacity-90 mt-2 text-sm">All rights reserved</p>
      </footer>
    </main>
  )
}

// styles/globals.css
@tailwind base;
@tailwind components;
@tailwind utilities;

.text-shadow {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

// package.json
{
  "name": "tournament-app",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "14.1.0",
    "react": "^18",
    "react-dom": "^18"
  },
  "devDependencies": {
    "autoprefixer": "^10.0.1",
    "postcss": "^8",
    "tailwindcss": "^3.3.0"
  }
}
