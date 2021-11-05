import { useState } from "react";
// import { useEffect } from "react";
import Content from "./Content";
import { useLayoutEffect } from "react";
import UseLayoutEffects from "./useLayoutEffect";

function Appp() {
    const storageJobs =JSON.parse( localStorage.getItem('jobs'))
    // console.log(storageJobs);
    const [show, setShow] = useState(false)
    const [shows, setShows] = useState(false)
 const [job, setJob] = useState('')
 const [jobs, setJobs] = useState(storageJobs ?? []) // trais == undef,null lay dang sau
//  const [jobs, setJobs] = useState(()=>{
//     const storageJobs =JSON.parse( localStorage.getItem('jobs'))
//     console.log(storageJobs);
//     return storageJobs
//  }) 

    const handleSubmit=()=>{
        setJobs(prev=>{
         const newjobs=   [...prev,job]
         //save to local storage
         const jsonJobs= JSON.stringify(newjobs)
         localStorage.setItem('jobs',jsonJobs)
        return newjobs
        
        })
        setJob('')
    }

  return (
    <div style={{padding:32}}>
      <input value={job}
      onChange={e=>setJob(e.target.value)}
      />
      <button onClick={handleSubmit}>Add</button>
    <ul>
    {jobs.map((job,index)=>(
            <li key={index}>
            {job}
            </li>
        ))}
     
    </ul>
    <button onClick={()=>setShow(!show)}>Show</button>
    {show && <Content />}

    <button style={{marginLeft:50}} onClick={()=>setShows(!shows)}>Show LayoutEffect</button>
    {shows && <UseLayoutEffects />}
    
    </div>
  );
}

export default Appp;




