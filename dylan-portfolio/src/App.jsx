import useFetch from "./hook"
import Project from "./Project"


function App() {

  const apiKey = import.meta.env.VITE_API_KEY
  const spaceKey = import.meta.env.VITE_SPACE_ID 

  const {data, isPending, isError} = useFetch(`https://cdn.contentful.com/spaces/${spaceKey}/entries?access_token=${apiKey}`)

  if (data != null) {
    console.log(data.includes.Asset[0].fields.file.url)
  }

  return (
    <>
    <nav className="flex bg-black text-white py-2">
      <h1 className="text-3xl flex-grow p-2">Dylan Middleton</h1>
      <div className="flex gap-2">
        <a className="border-2 border-white rounded-xl p-3" href="">GA</a>
        <a className="border-2 border-white rounded-xl p-3" href="">GA</a>
        <a className="border-2 border-white rounded-xl p-3" href="">GA</a>
      </div>
    </nav>
    <div className="desktop:justify-items-center">
      {data != null ? (data.items.map((array, index)=>(
          <Project array={array} key={index} image={data.includes.Asset[0].fields.file.url}/>
        ))):<><h1>No Data Available</h1></> }
    </div>
    </>
  )
}

export default App
