import useFetch from "./hook";

const Project = ({array, image}) => {



    return ( 
        <div>
            <h1>{array.fields.title}</h1>
            <p>{array.fields.briefDescription}</p>
            <img src={image} alt="" />
            <a href={array.fields.renderLink}>Render</a>
            <a href={array.fields.githubRep}>Github</a>
        </div>
    );
}
 
export default Project;