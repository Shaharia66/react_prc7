import { lazy,Suspense,useState } from "react";
import LazyLoading from "./LazyLoading";
const LazY=lazy(()=>import("./LazyLoading"))

function App3(){
    const [load,setLoad]=useState(false)
    return(
        <div style={{textAlign:"center"}}>
            <h1>Simple Validation in input field.</h1>
            <h3>here starts lazy loading .</h3>
            <button onClick={()=>{setLoad(true)}}>Lazy loading</button>
            {
                load?<Suspense fallback={<h3>Loading....</h3>}><LazyLoading/></Suspense>:null
            }
        </div>
    )
}
export default App3; 
