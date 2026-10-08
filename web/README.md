# Ashutosh Shehra — Developer Portfolio

> **"Building practical software with Java."**

A premium, recruiter-first developer portfolio built with clean, human-readable code and modern visual craftsmanship. Specifically designed for **Ashutosh Shehra**, showcasing practical software projects in Java, Servlets, JSP, JDBC, MySQL, and Spring fundamentals.

---

## 🌟 Key Highlights & Architecture

1. **Authentic First Impression**:
   - Two-column hero showcasing identity as an engineering student focused on Java, backend development, and building practical software projects.
   - Clean, interview-ready Java syntax in `Developer.java` IDE mockup with companion professional portrait.
   - Prominent CTAs: **View My Work** and **Download Resume** (linked to resume PDF).
   - Instant social connections to GitHub, LinkedIn, and email with 1-click clipboard copy.

2. **Project Showcases**:
   - **AEGIS**: A structured Java web application with clean multi-tier separation (Jakarta Servlets, Service layer, PreparedStatement DAOs, and MySQL) featuring role-based access control (RBAC).
   - **AnnaSetu (AnnPath)**: "A Bridge Between Food and Need" — A food redistribution software prototype connecting donors, verified NGOs, and volunteer dispatchers with shelf-life countdown timers, atomic claim updates, and multilingual support.
   - **SmartExam**: A web-based online examination system built with Java, JSP, Servlets, JDBC, and MySQL on NetBeans IDE & GlassFish Server to manage role-based authentication (Admin, Teacher, Student), exams, question banks, online test-taking, and student results.

3. **In-Depth Technical Modals**:
   - Clicking **"View Details & Architecture"** on any project opens a modal detailing:
     - Project Overview & Rationale
     - Problem vs. Solution analysis
     - Multi-tier system architecture diagrams
     - Core technical features & implementation details
     - Development environment & future improvements

4. **Guaranteed Real-Send Contact Form**:
   - Integrated with FormSubmit backend API sending inquiries directly to `ashutoshshehra01@gmail.com`.
   - Automatic fallback to Gmail Web Compose & Default Mail client with pre-filled content if accessed offline or locally.

5. **Production & SEO Optimization**:
   - Open Graph (`og:title`, `og:description`, `og:image`) & Twitter Card tags for rich previews on LinkedIn, WhatsApp, and Twitter/X.
   - Fast loading with zero build dependencies, responsive across 320px–1440px+ screens.
   - Included `robots.txt`, `sitemap.xml`, `.nojekyll`, `vercel.json`, and `netlify.toml`.

---

## 📁 Project Structure

```text
Portfolio/
├── index.html                 # Semantic, accessible HTML structure
├── styles.css                 # Design system & responsive rules
├── script.js                  # Theme toggle, modals, scroll-spy, contact handler
├── robots.txt                 # Search engine crawler permissions
├── sitemap.xml                # Search engine sitemap
├── .nojekyll                  # GitHub Pages Jekyll bypass flag
├── .gitignore                 # Clean git commit exclusions (build/war/IDE files)
├── vercel.json                # Vercel deployment configuration
├── netlify.toml               # Netlify deployment configuration
├── README.md                  # Comprehensive documentation & deployment guide
├── assets/
│   ├── Ashutosh_Shehra_Resume.pdf  # Downloadable PDF resume
│   └── ashutosh-shehra.jpg         # Professional developer portrait photo
└── web/                       # NetBeans IDE Web Application source folder
```

---

## 🚀 How to Deploy (Ready for Production)

### Option 1: GitHub Pages (Recommended & 100% Free)

1. Open PowerShell or Terminal in this folder (`c:\Users\Ashutosh\Documents\NetBeansProjects\Portfolio`):
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Ashutosh Shehra Portfolio"
   git branch -M main
   ```

2. Create a new repository on [GitHub](https://github.com/new) named `portfolio` (or `ashutoshshehra.github.io`).

3. Link and push to GitHub:
   ```bash
   git remote add origin https://github.com/ashutoshshehra/portfolio.git
   git push -u origin main
   ```

4. Enable GitHub Pages:
   - Go to your repository on GitHub: **Settings > Pages**.
   - Under **Build and deployment > Source**, select **Deploy from a branch**.
   - Under **Branch**, select `main` and `/ (root)`, then click **Save**.
   - Your website will be live in ~60 seconds at: `https://ashutoshshehra.github.io/portfolio/`!

---

### Option 2: Vercel (1-Click Free Hosting)

1. Go to [Vercel](https://vercel.com) and sign in with GitHub.
2. Click **"Add New Project"** and select your `portfolio` repository.
3. Click **"Deploy"** (no build settings required).
4. Vercel will give you a live HTTPS URL (e.g., `https://ashutosh-portfolio.vercel.app`).

---

### Option 3: Netlify (Drag & Drop or Git)

1. Go to [Netlify Drop](https://app.netlify.com/drop).
2. Simply drag and drop this `Portfolio` folder into the browser window.
3. Your site is live instantly with an SSL certificate.

---

### Option 4: Local Preview / NetBeans IDE

- **Local browser:** Double-click `index.html` to open directly in Chrome/Edge/Firefox.
- **NetBeans IDE:** Open project in NetBeans, right-click project > **Run** (deploys to GlassFish or Tomcat at `http://localhost:8080/Portfolio/`).

---

## 👤 Author Information

- **Name**: Ashutosh Shehra
- **Role**: Engineering Student • Java Developer
- **GitHub**: [github.com/ashutoshshehra](https://github.com/ashutoshshehra)
- **LinkedIn**: [linkedin.com/in/ashutosh-shehra-17b498398](https://www.linkedin.com/in/ashutosh-shehra-17b498398)
- **Email**: ashutoshshehra01@gmail.com
