import { useState } from 'react'
import './App.css'

/**
 * SmartLab Equipment Manager — CADMech Assessment
 *
 * TODO: Build your solution here!
 *
 * Required Features:
 * 1. Dashboard with summary statistics
 * 2. Equipment list (table/grid view)
 * 3. Add new equipment (form)
 * 4. Edit equipment
 * 5. Delete equipment (with confirmation)
 * 6. Search & Filter (by name, type, status)
 * 7. Responsive design
 *
 * API Base URL (development): http://localhost:5000/api
 * API Base URL (production):  Replace with your deployed backend URL
 *
 * Hints:
 * - Create separate components in the /components folder
 * - Use fetch() or axios to communicate with the backend
 * - Consider using React Router for navigation (optional)
 * - Add loading states while fetching data
 */

// TODO: Update this to your deployed backend URL before deploying frontend
function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <h1 className="text-5xl font-bold text-blue-600">
        SmartLab Equipment Manager
      </h1>
    </div>
  );
}

export default App;