import Header from './components/Header'
import Posts from './components/Posts'
import Footer from './components/Footer'
import './App.css'
import 'antd/dist/antd.css'

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <Posts />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App
