import PropTypes from 'prop-types';

export const Bookmarks = ({ bookmarks, time }) => {
  return (
    <div>
    <div className='p-5 rounded-lg bg-violet-50 border font-semibold mb-10 border-violet-800 text-violet-800 md:min-w-[384px] md:max-w-sm'>
        Spent time on read : {time} min
    </div>
    <div className='px-5 py-8 rounded-lg bg-[#f3f3f3] md:min-w-[384px]'>
        <h2 className='font-semibold text-lg'>Bookmarked Blogs : {bookmarks.length}</h2>

        <ul className='flex flex-col gap-3 list-decimal mt-8 font-medium text-[.85rem]'>
            {bookmarks.map((bookmark, i) => <span key={i} className='rounded-lg bg-white p-5 px-8 pl-10 pl- block md:max-w-sm'><li>{bookmark.title}</li></span>)}
        </ul>
    </div>
    </div>
  )
}
Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    time: PropTypes.number.isRequired
}