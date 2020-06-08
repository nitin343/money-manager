export const setUser = user => ({
    type: 'SET_USER',
    payload: user
})

export const userName = user => ({
    type: 'NAME',
    payload: user
})

export const hidden = () => ({
type: 'HIDDEN',
})