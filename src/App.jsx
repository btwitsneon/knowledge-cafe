import { useState } from 'react'
import './App.css'

import { Blogs } from './components/Blogs'
import { Bookmarks } from './components/Bookmarks'
import { Header } from './components/Header'

function App() {
  const [bookmarks, setBookmark] = useState([])
  const [readingTime, setReadingTime] = useState(0)

  const handleRead = (id, time) => {
    setReadingTime(t => t + time)

    setBookmark(bookmarks.filter(bookmark => bookmark.id !== id))
  }

  return (
    <>
      <div className="container mx-auto">
        <Header/>
        <main className='grid md:grid-cols-[1fr,auto] gap-4 px-6 md:px-0'>
          <Blogs handleBookmark={setBookmark} handleTime={handleRead}/>
          <Bookmarks bookmarks={bookmarks} time={readingTime}/>
        </main>
      </div>
    </>
  )
}

export default App
