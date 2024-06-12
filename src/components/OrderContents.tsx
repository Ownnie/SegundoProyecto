import { formatCurrency } from "../helpers"
import type { OrderItem } from "../types"
import { OrderActions } from "../reducers/order-reducer"

import { Dispatch } from "react"


type OrderItemProps = {
    order: OrderItem[]
    dispatch: Dispatch<OrderActions>
}

export default function OrderContents({ order, dispatch }: OrderItemProps) {
    return (
        <div>
            <h2 className=' font-black text-4xl'>Consumo</h2>

            <div className=" space-y-3 mt-5">
                {order.map(item =>
                (
                    <div
                        key={item.id}
                        className="flex justify-between items-center border-t border-dashed border-slate-300 py-5 rounded-lg last-of-type:border-b"
                    >
                        <div>
                            <p className="text-lg">
                                {item.name} - {formatCurrency(item.price)}
                            </p>
                            <p className=" font-black">
                                Cantidad: {item.quantity} - {formatCurrency(item.price * item.quantity)}
                            </p>
                        </div>
                        <div>
                            <button
                                className=" bg-red-500 text-white px-3 py-1 rounded-full"
                                onClick={() => dispatch({ type: 'removeItem', payload: item })}
                            >
                                X
                            </button>
                        </div>
                    </div>
                ))
                }
            </div>
        </div>
    )
}
