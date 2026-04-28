export default function Sidebar() {
  return (
    <aside className="sidebar">
      <img
        src="https://github.com/jatinverma2007.png"
        alt="Profile"
        className="sidebar-avatar"
      />
      <h1 className="sidebar-name">Jatin Verma</h1>
      <p className="sidebar-username">jatinverma2007</p>
      <p className="sidebar-bio">
        Dashboard developer and data analyst focused on interactive visualizations and web dashboards using Tableau, React and Python.
      </p>

      <a
        href="/Jatin%20Resume%20(DVA)%20.pdf"
        download
        className="sidebar-follow-btn"
      >
        Download Resume
      </a>
      <div className="sidebar-socials">
        <a
          href="https://github.com/jatinverma2007"
          target="_blank"
          rel="noreferrer"
          className="sidebar-social-btn"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/jatin-verma007/"
          target="_blank"
          rel="noreferrer"
          className="sidebar-social-btn"
        >
          LinkedIn
        </a>
      </div>

      <div className="sidebar-info">
        <div className="sidebar-info-item">
          <svg viewBox="0 0 16 16" width="16" height="16" fill="#8b949e">
            <path d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z" />
          </svg>
          <span>Newton School of Technology, Rishihood University</span>
        </div>
        <div className="sidebar-info-item">
          <svg viewBox="0 0 16 16" width="16" height="16" fill="#8b949e">
            <path d="M1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0114.25 14H1.75A1.75 1.75 0 010 12.25v-8.5C0 2.784.784 2 1.75 2zM1.5 12.251c0 .138.112.25.25.25h12.5a.25.25 0 00.25-.25V5.809L8.38 9.397a.75.75 0 01-.76 0L1.5 5.809v6.442zm13-8.181v-.32a.25.25 0 00-.25-.25H1.75a.25.25 0 00-.25.25v.32L8 7.88z" />
          </svg>
          <a href="mailto:jatin.verma2024@nst.rishihood.edu.in">jatin.verma2024@nst.rishihood.edu.in</a>
        </div>
        <div className="sidebar-info-item">
          <svg viewBox="0 0 16 16" width="16" height="16" fill="#8b949e">
            <path d="M2 1h12a1 1 0 011 1v12a1 1 0 01-1 1H2a1 1 0 01-1-1V2a1 1 0 011-1zm0 1v12h12V2H2zm5.5 8h1v3h-1v-3zm0-5h1v4h-1V5z" />
          </svg>
          <a href="tel:7417319012">7417319012</a>
        </div>
      </div>


      <div className="sidebar-orgs">
        <h3 className="sidebar-orgs-title">Skills</h3>
        <div className="sidebar-orgs-list">
          <span className="org-pill">C</span>
          <span className="org-pill">CSS</span>
          <span className="org-pill">Data Structure</span>
          <span className="org-pill">Express JS</span>
          <span className="org-pill">Figma</span>
          <span className="org-pill">Generative AI</span>
          <span className="org-pill">Git and Github</span>
          <span className="org-pill">HTML</span>
          <span className="org-pill">JavaScript</span>
          <span className="org-pill">Machine Learning</span>
          <span className="org-pill">Matplotlib</span>
          <span className="org-pill">Microsoft Office</span>
          <span className="org-pill">MongoDB</span>
          <span className="org-pill">MySQL</span>
          <span className="org-pill">Node.js</span>
          <span className="org-pill">NumPy</span>
          <span className="org-pill">OAuth 2.0</span>
          <span className="org-pill">Pandas</span>
          <span className="org-pill">Postman</span>
          <span className="org-pill">Prisma ORM</span>
          <span className="org-pill">Python</span>
          <span className="org-pill">React</span>
          <span className="org-pill">Spreadsheet</span>
          <span className="org-pill">Supabase</span>
          <span className="org-pill">Tableau</span>
          <span className="org-pill">TypeScript</span>
        </div>
      </div>


    </aside>
  )
}
