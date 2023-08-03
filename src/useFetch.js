import { useEffect,useState } from "react";

const useFetch = (url) =>{
    const [data,setData] = useState(null);
    const [isPending,setIsPending] = useState(true);
    const [error,setError] = useState(null); 

    useEffect(() => {
        setTimeout(()=>{
            fetch(url)
             .then(res => {
                  if(!res.ok){
                       throw Error('Could not fetch data for that resource');
                  }
                  return res.json();
             })
             .then(data => { 
                  setData(data);
                  setIsPending(false);
             })
             .catch(err => { 
                  setError(err.message);
                  setIsPending(false); 
             })
        },1000);
        
   },[url]);

   return {data, isPending, error}

}

export default useFetch;