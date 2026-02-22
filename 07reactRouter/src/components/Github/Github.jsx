import { useLoaderData } from "react-router"
function Github () {
    const data = useLoaderData()
    console.log(data);
    // const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch('https://api.github.com/users/ashrafakib02')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data);
    //     })
    // }, [])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4'>
      <h1 className="text-3xl">{data.name}</h1>
      <p>{data.company}</p>
      Followers: {data.followers}
      <img src={data.avatar_url} alt="Avatar" 
      className="w-50 h-50 rounded-full mx-auto mt-2 justify-center" />
    </div>
  )
}

export default Github
