// src/components/Contacts.js
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Contacts() {
    const [contacts, setContacts] = useState([]);
    const location = useLocation();

    useEffect(() => {
        if (!contacts.length) {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then((response) => response.json())
                .then((data) => setContacts(data));
        }
    }, [contacts, setContacts]);

    const handleDeleteContact = (contactId) => {
        const updatedContacts = contacts.filter((contact) => contact.id !== contactId);
        setContacts(updatedContacts);
    };

    return (
        <div>
            <h1>Список контактів</h1>
            <table>
                <thead>
                {/* Заголовки стовбців таблиці */}
                </thead>
                <tbody>
                {contacts.map((contact) => (
                    <tr key={contact.id}>
                        <td>{contact.name}</td>
                        <td>{contact.username}</td>
                        <td>{contact.phone}</td>
                        <td>
                            <button onClick={() => handleDeleteContact(contact.id)}>
                                Видалити
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default Contacts;
