import {useParams} from "react-router-dom";
import { useState } from "react";
import useFetch from "./useFetch";
import {useHistory} from 'react-router-dom';
import './index.css';
const BlogDetails = () => {
    const {id} = useParams();
    const {data:blogs, isPending, error} = useFetch('http://localhost:8000/blogs/'+ id);
    const history = useHistory();
    const [isLoading,setIsLoading] = useState(false); 

    const handleDelete = () =>{
        setIsLoading(true);
        setTimeout(() => {
            fetch('http://localhost:8000/blogs/'+ id,{
            method:'DELETE'
            })
            .then(()=>{
                setIsLoading(false); 
                history.push('/');
            })
        }, 1000);
        
    }
    return ( 
         <div className="blog-details">
            {isPending && <span>Loading...</span>}
            {error && <span> {error} </span>}
            {blogs && (
                <article>
                    <h1>{blogs.title}</h1>  
                    <p>{blogs.body}</p>
                    <h4>Written by {blogs.author}</h4> 
                    {!isLoading && <button onClick={handleDelete}>Delete this Blog</button>}
                    {isLoading && <button disabled>Deleting Blog...</button>}
                </article>
                
            )}
            
        </div> 
     );
}
 
export default BlogDetails;