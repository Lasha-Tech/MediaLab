import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./routes/Home/Home.jsx";
import CourseDetails from "./routes/coureseDetails/CourseDetails.jsx";
import {Header,Footer,Lessons} from './index.js'

function App() {
    return (
        <>
        <Header/>
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/details" element={<CourseDetails/>}/>
                    <Route path="/lessons" element={<Lessons/>}/>
                </Routes>
            </Router>
        <Footer />
        </>
    );
}

export default App
