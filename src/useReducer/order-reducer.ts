import type { items } from '../interfaces/interface';
import type { orderItem } from '../interfaces/interface';

export type OrderActions =
    { type: 'add-item', payload: { item: items } } |
    { type: 'remove-item', payload: { id: items['id'] } } |
    { type: 'clear-order' } |
    { type: 'set-tip', payload: { value: number } }

export type OrderState = {
    order: orderItem[]
    tip: number
}

export const InitialState: OrderState = {
    order: [],
    tip: 0
}

export const OrderReducer = (state: OrderState = InitialState, action: OrderActions) => {

    if (action.type === 'add-item') {

        const itemExists = state.order.find(orderItem => orderItem.id === action.payload.item.id);
        let order: orderItem[] = []

        if (itemExists) {
            order = state.order.map(orderItem => {
                if (orderItem.id === action.payload.item.id) {
                    return { ...orderItem, quantity: orderItem.quantity + 1 } // Incrementamos la cantidad del item existente
                }
                return orderItem; // Retornamos el item sin cambios si no es el que estamos buscando
            })
            return {
                ...state,
                order
            }
        }

        const newItem: orderItem = { ...action.payload.item , quantity: 1 }
        order = [...state.order, newItem]
    
        return {
            ...state,
            order
        }

    }

    if (action.type === 'remove-item') {
        let order: orderItem[]
        order = state.order.filter(item => item.id !== action.payload.id)
        
        return {
            ...state,
            order
        }
    }

    if (action.type === 'clear-order') {

        return {
            ...state,
        }
    }

    if (action.type === 'set-tip') {

        return {
            ...state,
        }
    }

    return state


}

