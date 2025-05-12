import useFetch from "./hook"


function App() {

  const apiKey = import.meta.env.VITE_API_KEY
  const {data, isPending, isError} = useFetch(`https://cdn.contentful.com/spaces/k5wda5ojvdh7/entries?access_token=${apiKey}`)

  if (data != null) {
    console.log(data.items[0].fields)
  }

  return (
    <>
      {data != null ? (data.items.map((array, index)=>(
        <>
          <div key={index}>
            <h1>{array.fields.title}</h1>
            <p>{array.fields.briefDescription}</p>
            <a href={array.fields.renderLink}>Render</a>
            <a href={array.fields.githubRep}>Github</a>
          </div>
        </>
      ))):<></> }
    </>
  )
}

export default App
