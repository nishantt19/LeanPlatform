
import './App.css'
import EducationDetails from './Routes/EducationDetails/EducationDetails.component'
import ExperienceDetails from './Routes/ExperienceDetails/ExperienceDetails.component'

import { BrowserRouter, Route, Routes } from 'react-router-dom';


const App=()=> {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EducationDetails />} />
        <Route path="/experience" element={<ExperienceDetails />} />

        
      </Routes>
    </BrowserRouter>
  )
}

export default App
