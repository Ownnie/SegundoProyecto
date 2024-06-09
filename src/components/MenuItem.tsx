import type { MenuItem } from '../types'

type MenuItemProps = {
    item: MenuItem
    addItem: (item: MenuItem) => void
}

export default function MenuItem({ item, addItem }: MenuItemProps) {
    return (
        <button
            className=' border-2 border-teal-400 w-full p-3 mb-5 my-2 rounded-lg hover:bg-teal-400 hover:text-white flex justify-between'
            onClick={() => addItem(item)}
        >
            <p>{item.name}</p>
            <p className=' font-black'>${item.price}</p>
        </button>
    )
}
