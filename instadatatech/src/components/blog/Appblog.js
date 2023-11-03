import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Blog from './Blog';
import Blogpage1 from './Blogpage1';
import Blogpage2 from './Blogpage2';
import Blogpage3 from './Blogpage3';

function Appblog() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Blog />} />
                <Route path="/blog/blogpage1" element={<Blogpage1 />} />
                <Route path="/blog/blogpage2" element={<Blogpage2 />} />
                <Route path="/blog/blogpage3" element={<Blogpage3 />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Appblog;
