import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import Home from "./routes/Home/Home.jsx";
import CourseDetails from "./routes/coureseDetails/CourseDetails.jsx";
import Lessons from "./routes/lessons/Lessons.jsx";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/details" element={<CourseDetails/>}/>
                    <Route path="/lessons" element={<Lessons/>}/>
                </Routes>
            </Router>
        </>
    );
}

export default App
