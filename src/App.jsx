
import { useState } from 'react'
import './App.css'
import Folder from './Components/Folder'
import explorer from './data/Folder'
import useTraverseTree from './hook/useTraverseTree';
function App() {

  const [explorerData,setExplorerData] = useState(explorer);
  const {insertNode} = useTraverseTree();

  const handeInsertNode = (folderId,item , isFolder)=>{
    const newTree = insertNode(explorerData,folderId,item,isFolder);
    setExplorerData(newTree);
  }

  return (
    <>
      <Folder explorer = {explorerData} handeInsertNode = {handeInsertNode}/>
    </>
  )
}

export default App
