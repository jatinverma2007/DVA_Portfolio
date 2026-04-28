const base = import.meta.env.BASE_URL

const projects = [
  {
    name: "Swiggy Dashboard",
    description: "Interactive Swiggy order & delivery dashboard built with Tableau — includes KPIs, order trends, and geographic insights.",
    image: `${base}swiggy.png`,
    tags: ["Tableau", "Data Visualization"],
    github: "https://github.com/jatinverma2007/Swiggy_dashboard",
    live: "https://public.tableau.com/app/profile/jatin.verma7956/viz/SwiggyDashboard_17768364216340/Dashboard1"
  },
  {
    name: "Uber Dashboard",
    description: "Uber trip analysis dashboard showcasing trip patterns, hotspots and performance metrics.",
    image: `${base}uber.png`,
    tags: ["Tableau", "Data Visualization"],
    github: "https://github.com/jatinverma2007/Uber_Dashboard",
    live: "https://public.tableau.com/app/profile/jatin.verma7956/viz/shared/GPSR8JMRK"
  }
]

export default projects
