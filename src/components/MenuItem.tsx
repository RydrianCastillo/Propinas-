import type { items } from "../interfaces/interface"
import type { OrderActions } from "../useReducer/order-reducer"


interface MenuItemProps{ // Definimos las props que recibe el componente
    item: items,
    dispatch: React.ActionDispatch<[action: OrderActions]>
} 


export default function MenuItem({item, dispatch}: MenuItemProps) {  // Desestructuramos las props
  return (
    <button onClick={() => dispatch({type: 'add-item', payload: {item: item}}) }  className="border-2 border-teal-400 hover:bg-teal-200 w-full mb-2 p-3 ml-2 flex justify-between" >

        <p>hola</p>
        <p>{item.name}</p>
        <p className=" font-black" >${item.price}</p>

    </button>
  )
}



