import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./layout/Header/Header";
import Footer from "./layout/Footer/Footer";
import Home from "./pages/Home/Home";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
