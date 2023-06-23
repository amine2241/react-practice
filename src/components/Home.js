import React, { useCallback } from 'react'
import { useState, useEffect } from 'react';
import { BlogList } from './BlogList';

export const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: "my new website", body: "lorem ipsum ...", author: "mario", id: 1 },
        { title: "Welcome party !", body: "lorem ipsum ...", author: "yoshi", id: 2 },
        { title: "Web dev top tips", body: "lorem ipsum ...", author: "mario", id: 3 }
    ]);
    const [name, setName] = useState('mario');
    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id)
        setBlogs(newBlogs);

    }
    useEffect(() => {
        console.log("use effect ran", { name });

    }, [name]);

    return (
        <div className='home'>
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
            <button onClick={() => setName('luigi')}></button>
            <p>{name}</p>
        </div >
    )
}
