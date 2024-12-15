
import { Product } from "../types"
import { ActionFunctionArgs, Form, Link, useNavigate, redirect, useFetcher } from "react-router-dom"
import { formatCurrency } from "../utils"
import { deleteProduct } from "../services/ProductService"
import cubito from '../assets/cubo_002d.svg'

type ProductDetailsProps = {
  product:Product
}

export async function action({params} : ActionFunctionArgs) {
  
  if(params.id !== undefined){
    await deleteProduct(+params.id)
    return redirect('/')
  }
  console.log('desde action de ProductDetails', params.id) 
}

export default function ProductDetails({product} : ProductDetailsProps) {

  const fetcher = useFetcher()

  const navigate = useNavigate()

  const isAvailable = product.availability

  return (
    <tr className="border-b">
        <td className="p-1 text-xs text-gray-800">
          <div className="flex justify-center items-center">
            <img src={cubito} alt="Logo" width="100" height="100"/>
          </div>
        </td>
        <td className="p-3 text-lg text-gray-800 text-center">
          {product.name}
        </td>
        <td className="p-3 text-lg text-gray-800 text-center">
          {formatCurrency(product.price)}
        </td>
        <td className="p-3 text-lg text-gray-700">
          <fetcher.Form method='POST'>
            <button
              type='submit' 
              name='id'
              value={product.id}
              className={`${isAvailable ? 'text-black': 'text-red-500'}
              rounded-lg p-2 text-xs uppercase font-bold w-full border border-black-100 hover:cursor-pointer hover:bg-red-100`}
            >
                {isAvailable ? 'Disponible':'No Disponible'}
            </button>
          </fetcher.Form>
        </td>
        <td className="p-3 text-lg text-gray-800 ">
           <div className="flex gap-2 items-center">
             {/* <Link   // Link version
                to= {`/productos/${product.id}/editar`}
                className="bg-indigo-600 text-white rounded-lg w-full p-2 uppercase font-bold text-xs text-center">
                Editar
              </Link>*/}
              <button   // navigate version
                onClick= {()=> navigate(`/productos/${product.id}/editar`)}
                className="bg-indigo-600 text-white rounded-lg w-full p-2 uppercase font-bold text-xs text-center hover:bg-indigo-500 drop-shadow-md">
                Editar
              </button>
              <Form 
                className="w-full"
                method="POST"
                action={`productos/${product.id}/eliminar`}
                onSubmit={(e) => {
                    if(!confirm('¿Eliminar registro?')) {
                      e.preventDefault()
                    }  
                  }
                }
              >
                <input
                  type='submit'
                  value='Eliminar'
                  className="bg-red-500 hover:bg-red-600 cursor-pointer text-white rounded-lg w-full p-2 uppercase font-bold text-xs text-center drop-shadow-md"
                />
              </Form>
           </div>
        </td>
    </tr> 
  )
}

