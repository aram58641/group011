import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import Footer from "./Pages/layouts/Footer/Footer";
import Header from "./Pages/layouts/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Pages/About/About";
import Error from "./Pages/Error/Error";
import Product from "./Pages/Product/Product";
import TestRed from "./Pages/Reducer/Reducer";
import Registration from "./Pages/Registration/Registration";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/product" element={<Product />} />
                <Route path="/red" element={<TestRed />} />
                <Route path="/registration" element={<Registration />} />
                
                {/* git avel */}

                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
