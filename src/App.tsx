import './App.css'
import About from './components/About/about'
import Layout from "./components/Layout/Layout"


function App() {
  return (
    <>
      <Layout>
        <section id="about"><About /></section>
      </Layout>
    </>
  )
}

export default App
