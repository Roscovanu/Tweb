import RootStore from './RootStore.store'

const storeProvider = RootStore.create({
    contents: [
        {
            id: '1',
            name: 'Sudent - 1',
            description: 'Some more text',
            inStock: true,
            price: 210,
        },
        {
            id: '2',
            name: 'Sudent - 2',
            description: 'Some more text',
            inStock: true,
            price: 100,
        },
        {
            id: '3',
            name: 'Sudent - 3',
            description: 'Some more text',
            inStock: true,
            price: 120,
        },
    ]
})

export default storeProvider