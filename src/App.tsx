
import { ToastContainer } from "react-toastify"
import { Footer, TopLane, Header } from "./components"
import { AppProvider } from "./Contexts"
import { BrowserRouter } from "react-router-dom"
import { Router } from "./Routes/Routes"
// import { FemininoSection } from "./Pages"
function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <ToastContainer />
        <TopLane />
        <Header />
        <Router />
        <Footer />
      </AppProvider>
    </BrowserRouter>
  )
}

export default App
