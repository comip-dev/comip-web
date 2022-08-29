import React from 'react'
import BlogCard from './BlogCard'
import './BottomCards.css'
const BottomCards = () => {
    const imgSrc="https://picsum.photos/300/200?grayscale&random=1"
    return(
        <div className='cards-container'>
            <BlogCard img={"https://picsum.photos/300/200?grayscale&random=1"} />
            <BlogCard img={"https://picsum.photos/300/200?grayscale&random=2"} />
            <BlogCard img={"https://picsum.photos/300/200?grayscale&random=3"} />
            <BlogCard img={"https://picsum.photos/300/200?grayscale&random=4"} />
            
            {/* <BlogCard/> */}
        </div>
    )
}

export default BottomCards