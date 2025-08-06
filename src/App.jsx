import { Header, Footer, Sidebar, ProfileCard } from './components';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="main-content">
        <ProfileCard />
        <Sidebar />
      </div>
      <Footer />
    </div>
  )
}

export default App
