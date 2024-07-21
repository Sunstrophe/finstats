import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

function MainLayout() {
  return (
    <div className='flex flex-col min-h-screen bg-slate-300'>
        <Header />
        <Outlet />
    </div>
  )
}

export default MainLayout