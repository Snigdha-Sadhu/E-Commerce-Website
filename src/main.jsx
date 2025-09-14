import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Wishlistcontext from './components/wishlistContext/Wishlistcontext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
<Wishlistcontext>
    <App />
  </Wishlistcontext>,
  </StrictMode>
)





