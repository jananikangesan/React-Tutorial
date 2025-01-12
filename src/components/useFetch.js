import { useState , useEffect} from "react";

const useFetch=(url)=>{

    const [data,setData]=useState(null);
    const [isPending, setIsPending]=useState(true);
    const [error,setError]=useState(null);

    useEffect(()=>{
        setTimeout(()=>{
            fetch(url)
            .then(res=>{
                //console.log(res);
                if(!res.ok){
                    throw Error("could not fetch the data for that resource");
                }
                return res.json();
            }).then(data=>{
                console.log(data);
                setData(data);
                
                setError(null);
            }).catch(err=>{
                if(err.name==='AbortError'){
                    console.log('fetch aborted');
                }else{
                    setIsPending(false);
                    setError(err.message);
                }
                console.log(err.message);
              
            })
        },1000);
        
    },[]);
    return {data,isPending,error};
}

export default useFetch;