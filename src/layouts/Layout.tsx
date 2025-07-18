
import {Outlet} from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <header className={`
        bg-slate-700
        header-with-background
      `}>
        <div className='max-w-6xl mx-auto'>
          <div className="flex items-center gap-x-4 " >
            
            <h1 className='text-2xl font-bold text-slate-800 bg-[#60A5FA] py-2 px-4 mt-4 rounded-t-md'>
              Administrador de Productos
            </h1>
          </div>
        </div>
      </header>
      <main className='mt-10 mx-auto max-w-6xl p-10 bg-white shadow-xl rounded-md'>
        <Outlet/>
      </main>
    </>
    
  )
}
