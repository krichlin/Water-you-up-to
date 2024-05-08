import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import MainPage from './MainPage';
import AboutPage from './AboutPage';
import LogForm from './LogForm';
import WaterFacts from './WaterFacts';
import { hydrateRoot } from 'react-dom/client';
import './Header.css';

function Header() {

    const hdr = (

        <Router>
            <div>
                <nav>
                    <ul className="horizontal-list">
                        <li>
                        <Link to="/">Home</Link>
                        </li>
                        <li>
                        <Link to="/about">About</Link>
                        </li>
                        <li>
                        <Link to="/waterfacts">Water Facts</Link>
                        </li>
                    </ul>
                </nav>
            </div>

            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/waterfacts" element={<WaterFacts />} />
            </Routes>
        </Router>
    )

    return hdr;

}



// {/* <Container>
//     <Row>
//         <Col xs={6} md={4}>
//             <Image src="holder.js/171x180" rounded />
//         </Col>
//         <Col xs={6} md={4}>
//             <Image src="holder.js/171x180" rounded />
//         </Col>
//         <Col xs={6} md={4}>
//             <Image src="holder.js/171x180" rounded />
//         </Col>
//     </Row>
// </Container> */}




export default Header;