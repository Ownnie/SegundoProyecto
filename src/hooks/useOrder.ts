import { useState } from "react"
import type { OrderItem, MenuItem } from "../types"

export default function userOrder() {

    const [order, setOrder] = useState<OrderItem[]>([])
    const [tip, setTip] = useState(0)

    const addItem = (item: MenuItem) => {

        const itemExists = order.find(orderItem => orderItem.id === item.id)

        if (itemExists) {
            const updateOrder = order.map(orderItem => orderItem.id === item.id ?
                { ...orderItem, quantity: orderItem.quantity + 1 } :
                orderItem
            )
            setOrder(updateOrder)
        } else {
            const newItem = { ...item, quantity: 1 }
            setOrder([...order, newItem])
        }

    }

    const removeItem = (id: MenuItem['id']) => {
        setOrder(order.filter(item => item.id !== id))
    }

    const placeOrder = () => {
        setOrder([])
        setTip(0)
    }

    return {
        order: order,
        setOrder: setOrder,
        tip: tip,
        setTip: setTip,
        addItem: addItem,
        removeItem: removeItem,
        placeOrder: placeOrder
    }
}