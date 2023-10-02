import './App.css'
import React, {useState} from 'react';
import Contacts from './components/Contacts';
import AddContact from './components/AddContact';


function App(){
    const [contacts, setContacts] = useState([]);
    const [currentPage, setCurrentPage] = useState('home');

    return(
        <>
            <nav>
                <ul>
                    <li><a href="#" onClick={() => setCurrentPage('home')}>Головна</a></li>
                    <li><a href="#" onClick={() => setCurrentPage('contacts')}>Список контактів</a></li>
                    <li><a href="#" onClick={() => setCurrentPage('add')}>Додати контакт</a></li>
                </ul>
            </nav>

            {/*{currentPage === 'home' && <p>Home component</p>}*/}
            {currentPage === 'contacts' && <Contacts contacts={contacts} setContacts={setContacts}/>}
            {currentPage === 'add' && <AddContact contacts={contacts} setContacts={setContacts}/>}
        </>
    )
}
export default App;


