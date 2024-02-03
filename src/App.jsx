
import { useState } from 'react'
import './App.css'
import Folder from './Components/Folder'
import explorer from './data/Folder'
function App() {

  const [explorerData,setExplorerData] = useState(explorer);
  return (
    <>
      <Folder explorer = {explorerData}/>
    </>
  )
}

export default App
