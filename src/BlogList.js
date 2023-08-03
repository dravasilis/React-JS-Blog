
import { Link } from "react-router-dom/cjs/react-router-dom";
const BlogList = ({blogs}) => {
    return ( 
        <div className="blog-list">
            {blogs.map(blog =>(
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                    <h2> {blog.title}</h2> 
                    <h3> Written by {blog.author}</h3> 
                    </Link>
            </div>
            ) )}
            
        </div>
        
     );
}


export default BlogList;