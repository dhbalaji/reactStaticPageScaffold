import { Map } from 'immutable'
import { DECREMENT, INCREMENT } from '../actions'
import { getCount } from '../selector'

export const initialState = Map({
    count: 0
})

function reducer(state = initialState, action) {
    switch (action.type) {
        case INCREMENT:
            return Map({
                count: getCount(state) + 1
            })
        case DECREMENT:
            return Map({
                count: getCount(state) - 1
            })
        default:
            return initialState
    }
}

export default reducer
