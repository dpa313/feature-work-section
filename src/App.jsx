
import './App.css'
import { CardSpotlightDemo } from './components/CardSpotLight'
import { Layout } from './components/Layout'
import {LayoutAlt} from "./components/LayoutAlt"

function App() {


  return (
    <>
      <Layout/>
      <div className='pt-[1000px]'></div>
      <LayoutAlt/>
      <div className='pt-[1000px]'></div>
      <CardSpotlightDemo/>
    </>
  )
}

export default App
