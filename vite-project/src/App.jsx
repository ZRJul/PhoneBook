import './App.css'
import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Contacts from './components/Contacts';
import AddContact from './components/AddContact';

function App() {
    const [contacts, setContacts] = useState([]);
    return (
        <Router>
            <div>
                <header>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/contacts">Список контактів</Link>
                            </li>
                            <li>
                                <Link to="/add">Додати контакт</Link>
                            </li>
                        </ul>
                    </nav>
                </header>
                <Routes>
                    <Route path="/contacts" element={<Contacts contacts={contacts} setContacts={setContacts} />} />
                    <Route path="/add" element={<AddContact contacts={contacts} setContacts={setContacts} />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
