import Header from './Header'
import Main from './Table'
import Footer from './Footer'
import './App.css'
import 'antd/dist/antd.css'

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <Main />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App
