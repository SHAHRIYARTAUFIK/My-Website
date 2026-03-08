import React from 'react';
import ReactDOM from 'react-dom/client';
import AdminPage from './components/AdminPage.jsx';
import './admin.css';

ReactDOM.createRoot(document.getElementById('admin-root')).render(
    <React.StrictMode>
        <AdminPage />
    </React.StrictMode>
);
