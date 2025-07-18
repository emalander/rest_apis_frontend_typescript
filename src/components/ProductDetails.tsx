
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { Product } from "../types"
import { ActionFunctionArgs, Form, useNavigate, redirect, useFetcher } from "react-router-dom"
import { formatCurrency } from "../utils"
import { deleteProduct } from "../services/ProductService"
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

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
            <div className="flex justify-center items-center">
              <LocalShippingIcon
                className="text-blue-500" // Clases de Tailwind para color
                fontSize="medium"         // Propiedad de MUI para el tamaño
              />
            </div>
          </div>
        </td>
        <td className="p-3 text-lg text-gray-800 text-center">
          {product.name}
        </td>
        <td className="p-3 text-lg text-gray-800 text-center">
          {formatCurrency(product.price)}
        </td>
        <td className="p-3 text-lg text-gray-800 text-center">
          {product.stock}
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
              <EditIcon
                className="text-blue-500 hover:text-blue-600 cursor-pointer" // Clases de Tailwind para color
                fontSize="medium"
                onClick= {()=> navigate(`/productos/${product.id}/editar`)}         // Propiedad de MUI para el tamaño
              />
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
                <button
                  type='submit'
                  value='Eliminar'
                  >
                  <DeleteIcon fontSize="medium" className="text-red-500 hover:text-red-600 cursor-pointer" />
                </button>
                
              </Form>
           </div>
        </td>
    </tr> 
  )
}

