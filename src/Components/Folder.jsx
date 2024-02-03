import { useState } from "react"

// eslint-disable-next-line react/prop-types
const Folder = ({explorer, handeInsertNode}) => {

    const [expand, setExpand] = useState(false);
    const [showInput, setShowInput] = useState({
        isVisible: false,
        isFolder: null,
    });

    const handleExpand = ()=>{
        if(expand){
            setExpand(false);
        }
        else{
            setExpand(true);
        }
    }
    const handleInput = (e,isFolder)=>{
        e.stopPropagation();
        setExpand(true);
        setShowInput({
            isVisible: true,
            isFolder: isFolder
        })
    }
    const onAddFolder = (e) =>{

        if(e.keyCode === 13 && e.target.value){
            handeInsertNode(explorer.id, e.target.value, showInput.isFolder);
            setShowInput({...showInput,isVisible: false});
        }
    }


  return (
    <>  {
        (explorer.isFolder)?
        <div>
            <div  className="folders" onClick={handleExpand}>
                <span><h1>{(expand)?`📂${explorer.name}`:`📁${explorer.name}`}</h1></span>
                <div>
                    <button onClick={(e)=>handleInput(e,true)}>Folder +</button>
                    <button onClick={(e)=>handleInput(e,false)}>File +</button>
                </div>
            </div>
            <div style={(expand)?{display:"block"}:{display:"none"}}>
                { showInput.isVisible &&
                <div style={{paddingLeft:"40px",marginBottom:"10px"}}>
                    <span>{showInput.isFolder?'📁':'📄'}</span>
                    <input type="text"
                        autoFocus
                        onKeyDown={onAddFolder}
                        onBlur={()=>{setShowInput({...showInput,isVisible:false})}} />
                </div>
                }
                {explorer.items.map((item)=>{
                    return <div style={{paddingLeft:"40px"}} key={item.id}><Folder handeInsertNode={handeInsertNode} explorer={item}/></div>
                })}
            </div>
        </div>:
        <div>
            <h2>📄{explorer.name}</h2>
        </div>
    }
    </>
  )
}

export default Folder
