
export const initialState = [
    {
        item: 'Clean Kitchen',
        completed: false,
        id: 3892987589
    },

    {
        item: 'Clean Bedroom',
        completed: false,
        id: new Date(),

    }
]

export const ADD_TASK = "ADD_TASK"
export const TOGGLE_COMPLETED = "TOGGLE_COMPLETED"
export const CLEAR_COMPLETED = "CLEAR_COMPLETED"


export const reducer = (state, action) => {
    switch (action.type) {
        case ADD_TASK:
            return [
                ...state, { item: action.payload, completed: false, id: new Date() }
            ]
        case "TOGGLE_COMPLETED":
            // find todo by id
            // highlight found todo from state
            // update state
            return state.map(todo => {
                if (todo.id === action.payload) {
                    return { ...todo, completed: !todo.completed }
                }
                else {
                    return todo
                }
            })
        case "CLEAR_COMPLETED":
            return state.filter(todo => {

                return todo.completed !== true
            })

        default: return state;

    }
}