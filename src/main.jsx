import './styles.css';

import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { JournalApp } from './JournalApp.jsx';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <JournalApp />
    </BrowserRouter>
)
