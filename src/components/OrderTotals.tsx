import { Dispatch, useMemo } from "react"
import type { OrderItem } from "../types"
import { formatCurrency } from "../helpers"
import { OrderActions } from "../reducers/order-reducer"

type OrderTotalsProps = {
    order: OrderItem[]
    tip: number
    dispatch: Dispatch<OrderActions>
}

export default function OrderTotals({ order, tip, dispatch }: OrderTotalsProps) {

    const subtotalAmount = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order])
    const tipAmount = useMemo(() => subtotalAmount * tip, [tip, order])
    const totalAmount = useMemo(() => subtotalAmount + tipAmount, [subtotalAmount, tipAmount])


    return (
        <>
            <div className="space-y-3">
                <h2 className=" font-black text-2xl">Totales y Propina:</h2>
                <p>Subtotal: {''}
                    <span className=" font-bold">{formatCurrency(subtotalAmount)}</span>
                </p>
                <p>Propina: {''}
                    <span className=" font-bold">{formatCurrency(tipAmount)}</span>
                </p>
                <p>Total a Pagar: {''}
                    <span className=" font-bold">{formatCurrency(totalAmount)}</span>
                </p>
            </div>

            <button
                className=" w-full font-bold bg-black text-white p-3 rounded-lg mt-5 hover:bg-white hover:text-black hover:border-black border-2 disabled:opacity-10 disabled:bg-black disabled:text-white disabled:border-black"
                disabled={totalAmount === 0}
                onClick={() => dispatch({ type: 'placeOrder' })}
            >
                Guardar Orden
            </button>
        </>
    )
}
