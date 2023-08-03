import { useEffect } from 'react';
import BlogList from './BlogList';
import './Home.css'
import { useState } from 'react';
import useFetch from './useFetch';

const Home = () => {
     const {data:blogs, isPending, error} = useFetch('http://localhost:8000/blogs');
 
     
    return ( 
        <div className="home">
               {isPending && <span>Loading...</span>}
               {error && <span> {error} </span>}
             {blogs && <BlogList blogs = {blogs} />}
        </div>
     );
}
 
export default Home;