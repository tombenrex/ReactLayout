import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/header/NavBar';
import Sidebar from './components/sidebar/SideBar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import TaskTwo from './components/pages/Task2';
import TaskThree from './components/pages/Task3';
import NotFound from './components/pages/NotFound';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <Router basename='/ReactLayout/'>
      <div className='min-h-screen bg-gradient-to-r from-purple-800 to-blue-500'>
        <Navbar
          onSidebarOpen={() => setIsSidebarOpen((prev) => !prev)}
          isSidebarOpen={isSidebarOpen}
        />
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />

        {isSidebarOpen && (
          <div
            className='fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden'
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        <main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/tasktwo' element={<TaskTwo />} />
            <Route path='/taskthree' element={<TaskThree />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
