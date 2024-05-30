import { useState , useEffect} from "react"
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

    const [name,setName] = useState('computer');
    const [age,setAge]=useState(25);

    const {data:blogs,isPending,error}=useFetch('http://localhost:8000/blogs');


    // const [isPending, setIsPending]=useState(true);
    // const [error,setError]=useState(null);

    // const [blogs,setBlogs]=useState([
    //     {title:'my new website',body:'aaaaaaaa',author:'mario',id:1},
    //     {title:'welcome party',body:'bbbbbbb',author:'yosi',id:2},
    //     {title:'my dev tool',body:'ccccccc',author:'mario',id:3}
    // ]);

    // const [blogs,setBlogs]=useState(null);

    const handleClick=()=>{
        //console.log("hello",e)
        setName('Science');
        setAge(30);
       
    }
    const handleClickAgain=(name)=>{
        console.log("hello "+name)
    }
    /*
    const handleDelete=(id)=>{
        const newBlogs=blogs.filter(blog=>blog.id!==id);
        //setBlogs(newBlogs);

    }*/

    // useEffect(()=>{
    //     console.log("use effect ran");
    //     console.log(name);
    // },[name]);

    // useEffect(()=>{
    //     setTimeout(()=>{
    //         fetch('http://localhost:8000/blogs')
    //         .then(res=>{
    //             //console.log(res);
    //             if(!res.ok){
    //                 throw Error("could not fetch the data for that resource");
    //             }
    //             return res.json();
    //         }).then(data=>{
    //             console.log(data);
    //             setBlogs(data);
    //             setIsPending(false);
    //         }).catch(err=>{
    //             console.log(err.message);
    //             setError(err.message);
    //         })
    //     },1000);
        
    // },[]);

    return (  
        <div className="home">
            <h2>Home Page</h2>
            <button onClick={handleClick}>Click me</button>
            <p>{name} is {age} years old</p>
            <button onClick={()=>handleClickAgain("jana")}>Click me Again</button>
            <button onClick={()=>setName('sarasu')}>change name</button>
            <p>{name}</p>
            <div>
                {/* {blogs.map((blog)=>(
                    <div className="blog-preview" key={blog.id}>
                        <h2>{blog.title}</h2>
                        <p>written by {blog.author}</p>

                    </div>
                )

                )} */}
                {error && <div>{error}</div>}
                {isPending && <div>Loading....</div>}
                {blogs && <BlogList blogs={blogs} title="All Blogs" /> }
               { blogs && <BlogList blogs={blogs.filter((blog)=>blog.author==='mario')} title="Mario's Blogs"/>}

            </div>
        </div>
    );
}
 
export default Home;