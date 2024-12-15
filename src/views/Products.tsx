import {ActionFunctionArgs, Link, useLoaderData} from 'react-router-dom'
import { getProducts, updateProduct, updateProductAvailability } from '../services/ProductService'
import ProductDetails from '../components/ProductDetails';
import { Product } from '../types';


const arrayTest: Object[] = [ 
  {id: 12, name: 'Silla Gamer 01', price: 130099, availability: true},
  {id: 21, name: 'Silla Gamer 02', price: 230099, availability: true},
  {id: 31, name: 'Silla Gamer 03', price: 330099, availability: true},
  {id: 42, name: 'Silla Gamer 04', price: 430099, availability: true}
]
export async function loader() {

  const products = await getProducts()
  return products
}

export async function action({request}: ActionFunctionArgs) {
  
  const data = Object.fromEntries(await request.formData())
  await updateProductAvailability(+data.id)
  console.log(+data.id , data)
  return {}
}

export default function Products() {

  const productsLoaded = useLoaderData() as Product[];

  return (
    <>
      <div className='flex justify-between'>
        <h2 className='text-3xl font-black text-slate-800'>Productos</h2>
        <Link to="productos/nuevo" className='rounded-md bg-indigo-600 p-3 text-sm font-bold text-white shadow-sm hover:bg-indigo-400'>
          Agregar Producto
        </Link>
      </div>
      <div className="p-2">
        <table className="w-full mt-5 table-auto">
          <thead className="bg-slate-800 text-white">
              <tr>
                  <th className="p-2 bg-slate-600">Envio</th>
                  <th className="p-2 bg-slate-900">Producto</th>
                  <th className="p-2 bg-slate-800">Precio</th>
                  <th className="p-2 bg-slate-900">Disponibilidad</th>
                  <th className="p-2 bg-slate-800">Acciones</th>
              </tr>
          </thead>
          <tbody>
            {/*{productsLoaded.map(product => (
              <ProductDetails
                key={product.id}
                product={product}
              />
            )) }*/}
            {productsLoaded.map(item => (
              <ProductDetails
              key={item.id}
              product={item}
            />
            ))}
          </tbody>
        </table>
      </div>

    </>
  )
}
