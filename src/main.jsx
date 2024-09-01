import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ProductProvider } from './context/productContext.jsx';
import { BasketProvider } from './context/basketContext.jsx';


createRoot(document.getElementById('root')).render(
  <ProductProvider>
        <BasketProvider>
           <App />
        </BasketProvider>
  </ProductProvider>
);
