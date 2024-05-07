import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import MainPage from './MainPage';
import AboutPage from './AboutPage';
import LogForm from './LogForm';
import { hydrateRoot } from 'react-dom/client';

function Header() {
    
    const hdr = (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                        <Link to="/">Home</Link>
                        </li>
                        <li>
                        <Link to="/about">About</Link>
                        </li>
                        <li>
                        <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>

            <Routes>
                <Route path="/" element={<LogForm />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<MainPage />} />
            </Routes>
        </Router>
    )

    return hdr;

}

export default Header;