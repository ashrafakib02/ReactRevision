
import './App.css'
import Card from './components/card'

function App() {
  let myobj= {
    uName:"Ashraf",
    Age:31
  }

  return (
     <div className='flex flex-wrap gap-4 justify-center'>
      <Card Channel="1" someObj={myobj}/>
      <Card Channel="2" someObj={myobj}/>
      <Card Channel="3" someObj={myobj}/>
      <Card Channel="4" someObj={myobj}/>
      <Card Channel="5" someObj={myobj}/>
     </div>
  )
}

export default App
