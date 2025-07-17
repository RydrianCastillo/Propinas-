import { useMemo } from 'react';
import type { orderItem } from '../interfaces/interface';


interface ordertotalprops{
    order: orderItem[],
    tip: number,
    clearOrder: () => void
}

export default function Ordertotal({order, tip, clearOrder} : ordertotalprops) {

    const subTotalAmount = useMemo(() => order.reduce( (total , item) => (total + item.quantity*item.price), 0 ) , [order])
    const tipAmout = useMemo(() => subTotalAmount* tip, [tip, order])
    const totalAmount = useMemo(()=> subTotalAmount+tipAmout, [tip, order])

  return (
    <>
        <div className="">
            <h2 className="text-2xl font-black">Total y Propinas: </h2>
            <p>SubTotal:
                <span className="font-bold"> ${subTotalAmount}</span>
            </p>
            <p>Propinas:
                <span className="font-bold"> ${tipAmout}</span>
            </p>
            <p>Total a Pagar:
                <span className="font-bold"> ${totalAmount}</span>
            </p>
        </div>

        <button 
            className='w-full bg-black p-3 uppercase text-white disabled:opacity-10' 
            disabled={totalAmount===0}  
            onClick={clearOrder}
        >
            Guardar Orden 
        </button>
    </>
  )
}
