import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Anggota from './pages/Anggota';
import Materi from './pages/Materi';
import Pembimbing from './pages/Pembimbing';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="anggota" element={<Anggota />} />
          <Route path="materi" element={<Materi />} />
          <Route path="pembimbing" element={<Pembimbing />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
