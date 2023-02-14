import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import After1 from './components/After1';
import After2 from './components/After2';
import Before1 from './components/Before1';
import Before2 from './components/Before2';
import SiteMap from './components/SiteMap';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SiteMap />} />
        <Route path="Before1" element={<Before1 />} />
        <Route path="Before2" element={<Before2 />} />
        <Route path="After1" element={<After1 />} />
        <Route path="After2" element={<After2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
