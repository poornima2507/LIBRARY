import logo from './logo.svg';
import './App.css';
import AddStudent from './component/AddStudent';
import SearchBook from './component/SearchBook';
import Delete from './component/Delete';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewallBook from './component/ViewallBook';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddStudent/>} />
      <Route path='/search' element={<SearchBook/>} />
      <Route path='/delete' element={<Delete/>} />
      <Route path='/view all' element={<ViewallBook/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
