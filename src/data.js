const base = import.meta.env.BASE_URL

const projects = [
  {
    name: "Zepto Dashboard",
    description: "Operations dashboard for Zepto built in Tableau, highlighting order flow, fulfillment efficiency, and service performance insights.",
    image: `${base}zepto.png`,
    tags: ["Tableau", "Data Visualization", "Operations"],
    github: "https://github.com/jatinverma2007/Zepto_Dashboard",
    live: "https://public.tableau.com/views/ZeptoOperationDashboard_17774656610870/Dashboard1?:language=en-GB&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"
  },
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
  },
  {
    name: "Human Resources Analysis Dashboard",
    description: "Comprehensive HR analytics dashboard tracking workforce composition, attrition trends, hiring flow, and department-level performance to support smarter people decisions.",
    image: `${base}Human Resources Analysis.png`,
    tags: ["Tableau", "HR Analytics", "Dashboard Design", "Data Storytelling"],
    github: "https://github.com/jatinverma2007/Human_Resources_Analysis_Dashboard",
    live: "https://public.tableau.com/views/HumanResourcesAnalysis_17774058794750/Dashboard1?:language=en-GB&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"
  },
  {
    name: "Employee Attrition Analysis",
    description: "In-depth analysis of employee attrition patterns with data processing, pivot tables, and insights into workforce retention factors.",
    image: `${base}employee.png`,
    tags: ["Data Analysis", "HR Analytics", "Python", "Spreadsheets"],
    github: "https://github.com/jatinverma2007/SectionB_G12_Employee_Attrition",
    live: "https://docs.google.com/spreadsheets/d/11k6a7roDlZMBnM63qBJszrIvSV6clFQgL7Gq24U1zqo/edit?usp=sharing"
  },

]

export default projects
