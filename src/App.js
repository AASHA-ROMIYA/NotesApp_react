
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { AllNotes } from './pages/AllNotes';
import { CreateNotes } from './pages/CreateNotes';
import { Edit } from './pages/Edit';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<AllNotes/>}/>
        <Route path='/create' element={<CreateNotes/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>
      </Routes>
    </div>
  );
}

export default App;
