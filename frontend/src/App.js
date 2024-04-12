import './App.css';
import AuthPage from './components/auth/auth';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import User from './components/user/user';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<AuthPage />} />
          <Route path='/user' element={<User />} />

        </Routes>
      </div></BrowserRouter>
  );
}

export default App;
