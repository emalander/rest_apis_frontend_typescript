import {Outlet} from 'react-router-dom'
import cubito from '../assets/cubo_002d.svg'

export default function Layout() {
  return (
    <>
      <header className='bg-slate-800 bg-gradient-to-r  from-slate-900 via-slate-800 to-slate-500'>
        <div className='mx-auto max-w-6xl py-4'>
          <div className="flex items-center">
            <div className="py-4">
              <h1 className='text-2xl font-bold text-slate-200'>
                Administrador de Productos
              </h1>
            </div>
            <div className="py-4">
              <img src={cubito} alt="Logo" width="100" height="100"/>
            </div>
          </div>
        </div>
      </header>
      <main className='mt-10 mx-auto max-w-6xl p-10 bg-white shadow-xl rounded-md'>
        <Outlet/>
      </main>
    </>
    
  )
}
