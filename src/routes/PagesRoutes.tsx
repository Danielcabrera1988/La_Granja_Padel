import { Routes, Route, Navigate } from 'react-router-dom'
import { NavBar } from '../components/NavBar'
import { About, Home, News, Schedule } from '../pages'
export const PagesRoutes = () => {
    return (
        <>
            <NavBar />
            <div className='container'>
                <Routes>
                    <Route path='home' element={<Home />} />
                    <Route path='schedule' element={<Schedule />} />
                    <Route path='about' element={<About />} />
                    <Route path='news' element={<News />} />
                    <Route path='/*' element={<Navigate to={'home'} />} />
                </Routes>
            </div>
        </>
    )
}
