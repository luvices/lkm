import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Anggota from './pages/Anggota';
import Materi from './pages/Materi';
import MateriDetail from './pages/MateriDetail';
import Swot from './pages/Swot';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="anggota" element={<Anggota />} />
          <Route path="materi" element={<Materi />} />
          <Route path="materi/:id" element={<MateriDetail />} />
          <Route path="swot" element={<Swot />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
