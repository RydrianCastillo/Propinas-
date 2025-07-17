
const tipOptions = [
  {
    id: 'tip-10',
    value: .10,
    label: '10%'
  },
  {
    id: 'tip-20',
    value: .20,
    label: '20%'
  },
  {
    id: 'tip-50',
    value: .50,
    label: '50%'
  },
]

type tipPercentageProps={
    setTip: React.Dispatch<React.SetStateAction<number>>
}


export default function TipPercentage({setTip}: tipPercentageProps) {
  return (
    <>
        <div  className="" >
            <h2 className="font-black" >Propinas: </h2>
            <form action="">
                {tipOptions.map(option =>
                    <div key={option.id} className="flex gap-2" >
                       <label htmlFor={option.id}>{option.label}</label>
                       <input id={option.id} type="radio" name="tip" value={option.value} 
                              onChange={e => setTip(+e.target.value)}
                       />
                    </div>
                )}
                
            </form>
        </div>
    </>
  )
}



