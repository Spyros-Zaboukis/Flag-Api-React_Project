import React from 'react';
import Logo from "./../components/Logo"
import Navigation from "./../components/Navigation"
import { useState } from 'react';


const Blog = () => {

    const [content, setContent] = useState('');
    const [error, setError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        if(content.length < 140){
            setError(true)        
            }else{
                setError(false)
            }
                }



    return (
        <div className='blog-container'>
            <Logo/>
            <Navigation/>
            <h1>Blog</h1>

            <form onSubmit={(e) => handleSubmit(e)}>
                <input type="text" placeholder='Nom'/>
                <textarea
                style={{border : error ?  "2px solid red" : null }} 
                placeholder='Message' 
                onChange={(e) => setContent(e.target.value)}></textarea>

                {error && <p>Entrez un texte de plus de 140 caractères SVP</p>}

                <input type='submit' value='Envoyer'/>
            </form>
            <ul></ul>
        </div>
    );
};

export default Blog; 