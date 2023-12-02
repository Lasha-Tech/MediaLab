import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./routes/Home/Home.jsx";
import CourseDetails from "./routes/coureseDetails/CourseDetails.jsx";
import {Header,Footer,Lessons} from './index.js'
import styled, {css} from "styled-components";

function App() {
    return (
        <AppDiv>
            <Header/>
                <Router>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/details" element={<CourseDetails/>}/>
                        <Route path="/lessons" element={<Lessons/>}/>
                    </Routes>
                </Router>
        </AppDiv>
    );
}

export default App

const AppDiv = styled.div(
    css`
        width: 100%;
        overflow-y: hidden;
    `
)
