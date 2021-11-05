import { useState } from "react";
const orders = [100, 200, 3000];
const gifs =[
  'CPU i9',
  'RAM 32GB RGB',
  'Iphone 13 XS Max'
]
const courses =[
  {
    id:1,
    name:'HTML,CSS'
  },
  {
    id:2,
    name:'Javascript'
  },
  {
    id:3,
    name:'React'
  }
]
///////////////////////////////////////////////////// USESTATE ///////////////////////////////////////////////////////
function App() {
  const [info,setInfo]=useState({
    name: 'Le Huy Hoang',
    age:20,
    address:'Nam Dinh ,Viet Nam'
  })
  const handleUpdate=()=>{
    setInfo({
      ...info,
      bio:'Yeu mau hong ...'
    })
    // setInfo(prev=>({
    //   ...prev,
    //   bio:'Yeu mau hong ...'
    // }))
  }
  const [counter, setCounter] = useState(() => {
    const total = orders.reduce((total, cur) => total + cur);
    return total;
  }); // order
  const [state, setstate] = useState(1);
  const handleIncrease = () => {
    setCounter((prevState) => prevState + 1); // call back
    // setCounter(prevState => prevState +1) // call back
  };
  const handlesIncrease = () => {
    setstate(state + 1);
  };


/////----------------------------------------CHUA BAI ------------------------------------------

  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [checks, setChecks] = useState([])
  // const [checks, setChecks] = useState(1)

  const [gift, setGift] = useState()
    const RandomGift=()=>{
        const index = Math.floor(Math.random()*gifs.length)
        setGift(gifs[index]);
    }
    // console.log(firstName);
    const handleSubmit=()=>{
      console.log({
        firstName,
        email
      });
    }
    const handleCheck = (id) =>{
      setChecks(prev=>{
        const isCheck = checks.includes(id)
        if(isCheck){
          return checks.filter(item => item !== id)
        }
        else{
          return [...prev,id]
        }
      })
    }
  






















console.log(checks);


  return (
    <div className="App" style={{ padding: 20 }}>
      <h1>{counter}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <h2>{state}</h2>
      <button onClick={handlesIncrease}>Increase</button>
      <h1>{JSON.stringify(info)}</h1>
      <button onClick={handleUpdate}>Increase</button>


      <div className="StateBT" style={{padding:32}} >
        <h1>{gift || 'Chưa có phần thưởng'}</h1>
        <button onClick={RandomGift}>Lấy thưởng</button>
        <div style={{display:"block"}}>
        <input value={firstName} onChange={e => setFirstName(e.target.value)} />
        <input value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <button style={{marginRight:100}} onClick={()=>setFirstName('Le Huy Hoang')}>Change</button>
        <button onClick={handleSubmit}>Register</button>
        
    </div>
    {/* {courses.map(course =>
      <div key={course.id}>
        <input type="radio" 
        checked={checks === course.id}
        onChange={()=>setChecks(course.id)}/>{course.name}
      </div>
      )} */}
    {courses.map(course =>
      <div key={course.id}>
        <input type="checkbox" 
        checked={checks.includes(course.id)}
        onChange={()=>handleCheck(course.id)}/>{course.name}
      </div>
      )}
    </div>
  );
}

export default App;




