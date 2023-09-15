import { useEffect, useState } from "react"
import PropTypes from 'prop-types';
import { Blog } from "./Blog"

export const Blogs = ({ handleBookmark, handleTime }) => {

    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    },[])
    return (
        <div className='order-1 md:order-none'>{blogs.map(blog => <Blog handleTime={handleTime} handleBookmark={handleBookmark} blog={blog} key={blog.id}/>)}</div>
    )
}

Blogs.propTypes = {
    handleBookmark: PropTypes.func.isRequired,
    handleTime: PropTypes.func.isRequired
}