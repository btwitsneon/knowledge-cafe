import PropTypes from 'prop-types';
import { HiOutlineBookmark } from 'react-icons/hi'

export const Blog = ({ blog, handleBookmark, handleTime }) => {
    const {title, id, cover, author_img, author, posted_date, reading_time, hashtags} = blog
  return (
    <div className='pb-6 mb-10 border-b border-gray-200'>
        <figure className='rounded-lg overflow-hidden mb-4'>
            <img className='w-full' src={cover} alt="" />
        </figure>
        <div className='flex justify-between items-center mb-8 text-sm'>
            <div className='flex items-center gap-2'>
                <img className='w-12 h-12' src={author_img} alt="" />
                <div>
                    <h3 className='font-semibold text-[.9rem]'>{author}</h3>
                    <h4 className='text-neutral-500'>{posted_date}</h4>
                </div>
            </div>
            <div className="flex gap-2 items-center">
                <h3 className='text-neutral-500'>{reading_time.toString().length > 1 ? '' : '0'}{reading_time} min read</h3>
                <button className='h-[1.25rem]' onClick={() => handleBookmark(bookmark => [...bookmark, blog])}><HiOutlineBookmark className='w-full h-full stroke-neutral-500'/></button>
            </div>
        </div>
        <h2 className='text-2xl font-bold'>{title}</h2>
        <div className='flex gap-2 mt-2 mb-6'>{hashtags.map((tag, i) => <a key={i} href='#' className='text-neutral-500'>#{tag}</a>)}</div>
        <button onClick={() => handleTime(id, parseInt(blog.reading_time))} className='border-b border-violet-800 text-violet-800 font-semibold active:scale-[.99] transition-transform origin-[left_center]'>Mark as read</button>
    </div>
  )
}

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmark: PropTypes.func.isRequired,
    handleTime: PropTypes.func.isRequired
}