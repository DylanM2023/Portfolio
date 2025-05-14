import useFetch from "./hook";

const Project = ({array, image}) => {

    return ( 
        <div className="desktop:w-2/3 border-4 border-black flex flex-col my-5 rounded-xl">
            <h1 className="text-xl text-center">{array.fields.title}</h1>
            <p>{array.fields.briefDescription}</p>
            <img className="w-2/3" src={image} alt="" />
            <div className="text-right">
                <a className="border-2 border-black mx-2 rounded-xl p-3" href={array.fields.renderLink}>GA</a>
                <a className="border-2 border-black rounded-xl p-3" href={array.fields.githubRep}>GA</a>    
            </div>
        </div>
    );
}
 
export default Project;