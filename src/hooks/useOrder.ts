import { useState } from "react"
import type { items, orderItem } from "../interfaces/interface"


export default function useOrder() {

    const [order, setOrder] = useState<orderItem[]>([]) 
    const [tip, setTip] = useState(0)
    

    function addToOrder(item: items) {

        const itemExists = order.find(orderItem => orderItem.id === item.id);

        if(itemExists){
            const updatedOrder = order.map(orderItem => {
                if(orderItem.id === item.id){
                    return {...orderItem, quantity: orderItem.quantity + 1} // Incrementamos la cantidad del item existente
                }
                return orderItem; // Retornamos el item sin cambios si no es el que estamos buscando
            })
            setOrder(updatedOrder); // Actualizamos el estado del pedido con el item modificado
            return;
        }
        
        const newItem = {...item, quantity: 1}
        setOrder([...order, newItem]) // Agregamos el nuevo item al pedido 

    }

    function removeItem(id: items['id']){
        setOrder(order.filter(item => item.id !== id))
    }

    function clearOrder(){
        setOrder([])
        setTip(0)
    }

    return {
        order,
        tip,
        setTip,
        addToOrder,
        removeItem,
        clearOrder
    }
}

