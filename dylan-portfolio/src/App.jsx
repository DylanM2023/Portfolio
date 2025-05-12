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
      {data != null ? (data.items.map((array, index)=>(
        <Project array={array} key={index} image={data.includes.Asset[0].fields.file.url}/>
      ))):<></> }
    </>
  )
}

export default App
