import type { MenuItem } from '../types'
import { Dispatch } from 'react'
import { OrderActions } from '../reducers/order-reducer'

type MenuItemProps = {
    item: MenuItem
    dispatch: Dispatch<OrderActions>
}

export default function MenuItem({ item, dispatch }: MenuItemProps) {
    return (
        <button
            className=' border-2 border-teal-400 w-full p-3 mb-5 my-2 rounded-lg hover:bg-teal-400 hover:text-white flex justify-between'
            onClick={() => dispatch({ type: 'addItem', payload: { item } })}
        >
            <p>{item.name}</p>
            <p className=' font-black'>${item.price}</p>
        </button>
    )
}
