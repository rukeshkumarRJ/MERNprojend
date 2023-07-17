import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Main from './Main.js';
import Createuser from './pages/CreateUser';
import Login from './pages/Login';
import Home from './Components/Home';
import EventList from './Components/EventList';
import EventDetails from './Components/EventDetails';
import CreateEvent from './Components/CreateEvent';
import UpdateStudent from './Components/UpdateEvent';
import Contact from './Components/contact';
import { HashRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-user" element={<Createuser />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/home" element={<Home />}/>
        <Route path="/create-event" element={<CreateEvent/>}/>
        <Route path="/event-list" element={<EventList />}/>
        <Route path="/event-details" element={<EventDetails />}/>
        <Route path="/update-event/:id" element={<UpdateStudent />} />
      </Routes>
    </HashRouter>
  );
}
export default App;