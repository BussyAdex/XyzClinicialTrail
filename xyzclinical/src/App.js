import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import NewPost from './pages/NewPost';
import PostPage from './pages/PostPage';
import EditPost from './pages/EditPost';
import About from './pages/About';
import Missing from './pages/Missing';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { DataProvider } from './context/DataContext';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header title="XYZ Clinical Trial" />
        <DataProvider>
          <section className="Container">
            <Nav />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/post" element={<NewPost />} />
              <Route path="/edit/:id" element={<EditPost />} />
              <Route path="/post/:id" element={<PostPage />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<Missing />} />
            </Routes>
          </section>
        </DataProvider>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
