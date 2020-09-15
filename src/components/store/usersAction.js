export const addUser = (users) => {
    return {
        type: 'ADD_USER',
        payload: users
    }
}

export const deleteUser = (user_id) => {
    return {
        type: 'DELETE_USER',
        payload: user_id
    }
}