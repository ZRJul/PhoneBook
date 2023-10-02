
import React, { useState } from 'react';


function AddContact() {

    const [contact, setContact] = useState({
        name: '',
        username: '',
        phone: '',
    });
    const [contacts, setContacts] = useState([]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setContact({
            ...contact,
            [name]: value,
        });
    };

    const handleSaveContact = () => {
        setContacts([...contacts, contact]);
        window.location.href = '/contacts';
    };

    const handleCancel = () => {
        window.location.href = '/'; // Перенаправити на головну сторінку
    };

    return (
        <div>
            <h1>Додати контакт</h1>
            <form>
                <div>
                    <label htmlFor="name">Ім'я:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={contact.name}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="username">Прізвище:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={contact.username}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="phone">Телефон:</label>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={contact.phone}
                        onChange={handleInputChange}
                    />
                </div>
                <button onClick={handleSaveContact}>Зберегти</button>
                <button onClick={handleCancel}>Скасувати</button>
            </form>
        </div>
    );
}

export default AddContact;


