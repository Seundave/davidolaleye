import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home/index";

import AppLayout from "./layout/App";
// import { useDispatch, useSelector } from "react-redux";

function App() {
  return (
    <Router>
      <>
        <Routes>
          {/* open routes */}
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            {/* <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/academy" element={<Academy />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/verify-payment" element={<Verify />} /> */}
          </Route>
        </Routes>
      </>
    </Router>
  );
}

export default App;
