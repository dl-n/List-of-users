import React,{useState,useEffect} from 'react';

const App = () => {
  const [data,setData] = useState([]);
  const [count,setCount] = useState(0);
  useEffect(() =>{
    fetch('https://run.mocky.io/v3/f5f88eb9-3661-4384-877b-9cd1522cc64b').then(
      res => res.json()
    ).then(jsonData => setData(jsonData)).catch(err => console.error(err))
  })
  return (
    <div>
              <center>
          {data.length>=1 ?
          <div>
          <div className='card'>
            <div className='card-body'>
                <h5 className='card-title'>{data[count].name}</h5>
            </div>
          </div>
          <br />
          <button className='btn btn-success' onClick={() => setCount(count-1)} disabled={count === 0} >Previous</button>
          <button  className='btn btn-success'  onClick={() => setCount(count+1)} disabled={count===data.length-1}>Next</button>
          </div>

          :
          <h5>User List Loading...</h5>
        }
        </center>
    </div>
  )
}

export default App
