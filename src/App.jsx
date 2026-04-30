import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./layout/DefaultLayout"
import HomePage from "./pages/HomePage"
import RubricaPage from "./pages/RubricaPage"
import ParticipantPage from "./pages/ParticipantPage"
import FormPage from "./pages/FormPage"


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/travels/:id" element={<RubricaPage />} />
            <Route path="/participants/:participantId" element={<ParticipantPage />} />
            <Route path="/travels/addTravel" element={<FormPage />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App