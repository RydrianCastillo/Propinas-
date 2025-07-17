import MenuItem from "./components/MenuItem";
import Order from "./components/order";
import { menuItems } from "./data/db";
import useOrder from "./hooks/useOrder";
import Ordertotal from "./components/ordertotal";
import TipPercentage from "./components/tipPercentage";
import { useReducer } from "react";
import { InitialState, OrderReducer } from "./useReducer/order-reducer";

function App() {
  
  const {tip, setTip, clearOrder } = useOrder();   // importamos el hook useOrder
  // y extraemos la función addToOrder
  // que nos permite agregar items al pedido
  const [state, dispatch] = useReducer( OrderReducer, InitialState )


  return (
    <>
      <header className=" bg-teal-400 py-5">
        <h1 className=" text-center text-4xl font-black">
          Calculadora de Propinas y Consumo
        </h1>
      </header>

      <main className=" max-w-7xl mx-auto py-10 text-center grid md:grid-cols-2 ">
        <div>
          <h2 className="text-4xl font-black" >Menú</h2>
          {menuItems.map(item => (
            <MenuItem 
              key={item.id}
              item={item}
              dispatch={dispatch} // usamos el dispatch del useReducer
            />
          ))}
        </div>
        <div className=" border-2 ml-5" >
          <h2 className="text-4xl font-black"> Consumo </h2>
          <Order
            order={state.order}
            dispatch={dispatch}
          />
          <div className="mt-2 space-y-5 text-start px-3 " >

            <TipPercentage
                setTip={setTip} 
            />

            <Ordertotal
              order={state.order}
              tip={tip}
              clearOrder={clearOrder}
            />
          </div>
          

        </div>
      </main>
    </>
  );
}

export default App;
