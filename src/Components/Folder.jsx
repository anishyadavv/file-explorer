import { useState } from "react"

const Folder = ({explorer}) => {

    const [expand, setExpand] = useState(false);
    const handleExpand = ()=>{
        if(expand){
            setExpand(false);
        }
        else{
            setExpand(true);
        }
    }
  return (
    <>  {
        (explorer.isFolder)?
        <div className="folders">
            <div onClick={handleExpand}>
                <span><h1>{(expand)?`📂${explorer.name}`:`📁${explorer.name}`}</h1></span>
            </div>
            <div style={(expand)?{display:"block"}:{display:"none"}}>
                {explorer.items.map((item)=>{
                    return <div style={{paddingLeft:"40px"}} key={item.id}><Folder explorer={item}/></div>
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
