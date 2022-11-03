import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from "react-query"
import Home from "./pages/Home/index"
import Filmes from './pages/Filmes/index.js';
import Header from './components/Header/Header';

const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Navigate to={"/home"} replace />} />
          <Route path='/home' element={<Home/>}/>
          <Route path='/filmes' element={<Filmes />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  )

}

export default App;
