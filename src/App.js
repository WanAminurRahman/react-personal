import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout'

// ROUTING
import HomePage from './pages/home.page';
import AboutPage from './pages/about.page';
import ContactPage from './pages/contact.page';
import TaskPage from './pages/tasks.page';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/tasks" element={<TaskPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
