import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note"
import CreateArea from "./CreateArea"
function App(){

    const [posts,setPosts] = useState([]);

    function addPost(note){         
        setPosts((preValues)=>{            
            return [...preValues, note] ;
        });
    }

    function deletePost(id){
        setPosts(            
            posts.filter((post,index)=>{
                return index !== id;
            })
        );
    }

    return  (
    <div >
        <Header/>
            <CreateArea onAdd={addPost} />
                <div className="pin-board">
                    { posts.map((post,index) => (<Note id={index} key={index} onDelete={deletePost} title={post.title} content={post.content} />))}
                </div>
        <Footer/>
    </div>);
}

export default App;