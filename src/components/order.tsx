import type { orderItem } from "../interfaces/interface"
import type { OrderActions } from "../useReducer/order-reducer"

interface orderProps {
    order: orderItem[],
    dispatch: React.ActionDispatch<[action: OrderActions]>
}


export default function Order( { order, dispatch }: orderProps) { // Desestructuramos las props
    return (
        <>
            <div className="  mt-5 " >
                {order.length ===0 ? <p className="" > La orden esta Vacia </p> : (
                    order.map(item =>(
                        <div key={item.id} className=" flex justify-between p-4 text-start border-t border-gray-200 last-of-type:border-b  " >
                            <div>
                                <p className="text-lg" > {item.name} - {item.price}$</p>
                                <p className=" font-black" > Cantidad: {item.quantity} - ${item.quantity*item.price} </p>
                            </div>
                            <button 
                                onClick={()=> dispatch({type: 'remove-item', payload: {id: item.id}})}
                                className="bg-red-600 w-8 h-8 rounded-full text-white font-black" 
                            >    
                            X 
                            </button>
                        </div>
                    ))
                )}
            </div>
        </>
    )
}