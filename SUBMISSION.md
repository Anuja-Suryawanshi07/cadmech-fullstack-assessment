# 📋 Submission Details

> **Instructions:** Fill out every section below before submitting. Replace all placeholder text. Check boxes for features you implemented. Be honest — your self-assessment matters.

---

## 👤 Candidate Information

| Field | Your Details |
|-------|-------------|
| **Full Name** | Anuja Suryawanshi |
| **Email** | suryaanu07@gmail.com |
| **Phone** | +91-9653111291 |
| **GitHub Username** | Anuja-Suryawanshi07 |
| **LinkedIn (optional)** |anujasuryawanshi07 |
| **Current Location** | Navi Mumbai, India |

---

## 🔗 Repository & Deployment Links

| Link | URL |
|------|-----|
| **GitHub Repo** (forked) | `https://github.com/Anuja-Suryawanshi07/cadmech-fullstack-assessment` |
| **Live Frontend** (GitHub Pages) | `https://anuja-suryawanshi07.github.io/cadmech-fullstack-assessment/` |
| **Live Backend** (Render/Railway) | `https://cadmech-fullstack-assessment.up.railway.app` |

---

## 🛠️ Tech Choices

| Choice | Your Answer |
|--------|------------|
| **Database Used** | MySQL |
| **ORM / Query Builder** | Raw SQL (`mysql2/promise` with Connection Pooling) |
| **Additional Frontend Libraries** | `axios` (API requests),`react-hot-toast` (UI notifications) |
| **Additional Backend Libraries** | `express`, `mysql2`, `dotenv`, `cors` |
| **CSS Approach** | Tailwind CSS |

---

## ✅ Features Implemented

- [☑️] Dashboard with summary statistics
- [☑️] Equipment list view (table/grid)
- [☑️] Add new equipment with validation
- [☑️] Edit existing equipment
- [☑️] Delete equipment with confirmation dialog
- [☑️] Search by name
- [☑️] Filter by type and/or status
- [☑️] Responsive design (desktop + mobile)
- [☑️] REST API with proper error handling
- [☑️] Database with schema
- [☑️] Frontend deployed to GitHub Pages
- [☑️] Backend deployed to Render/Railway

---

## 💬 Self Assessment

### What went well?

> Building the frontend UI with Tailwind CSS and making it completely responsive was a smooth process. I was able to successfully write all the backend API endpoints and connect them to the React frontend. It feels great to see the app successfully fetching, adding, updating and deleting live data from database. 

### What was the hardest part?

> The most challenging part was deploying the project to the cloud because the frontend and the backend are in the same repository. Initially, the hosting platform got confused about which folder to build. Also, the backend was looking for my local database settings instead of the cloud database settings.I fixed this by updating the platform settings to point directly to the backend folder and updating my Node.js code to handle both local and cloud database configuration names cleanly.

### What would you do differently with more time?

> If I had more time, I would write automated unit tests for my React components using tools like Jest and React Testing Library to make sure the forms, buttons, and filters work perfectly without any bugs. I would also add a proper login system with security tokens (JWT) so that only authorized users or administrators can add, edit, or delete the laboratory equipment.

### AI Tools Usage

> I used AI (ChatGPT/ Gemini) as a helpful assistant to help me troubleshoot cloud deployment issues, fix database connection errors, and understand configuration settings.
While the AI helped me figure out the right settings and path-handling strategies much faster, I made sure to review, test, and understand every single line of code so I know exectly how the appication works.

---

## ⏱️ Time Spent

| Area | Hours |
|------|-------|
| **Frontend UI/UX & Responsive Design** | 16 |
| **Backend API Development & DB** | 14 |
| **Deployment (FE + BE)** | 8 |
| **Documentation & Cleanup** | 6 |
| **Total** | 44 |

---

## 📌 Additional Notes

> **Smart Database Connection:** The backend is configured to automatically detect where it is running. It will seamlessly connect to my local database during development, and switch to the Railway database in production without needing any manual code changes.

> **Fixed GuitHub Pages Pathing:** I configured the `base` path in Vite so that the frontend loads perfectly on GitHub Pages. This ensures the live website can easily find its stylig and JavaScript files, preventing the common "blank screen" loading error.

---

> **⚠️ Checklist before submitting:**
> - [☑️] All links are working and publicly accessible
> - [☑️] Code is pushed to your forked repo
> - [☑️] Commit history shows progressive development
