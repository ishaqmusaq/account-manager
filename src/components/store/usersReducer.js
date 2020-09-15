const initialState = {
    users: [{
        Bank_name: 'ADB',
        Account_description: 'saving account',
        Branch_Address: ' Abrepo-junction',
        Account_name: 'ishaq musah',
        Account_number: '234567890987',
        Location: 'accra',
        amount_spent: 'GH 345,678'
    }


    ]



}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_USER':
            const newUser = {
                Bank_name: action.payload.Bank_name,
                Account_description: action.payload.Account_description,
                Branch_Address: action.payload.Branch_Address,
                Account_name: action.payload.Account_name,
                Location: action.payload.Location,
                amount_spent: action.payload.amount_spent,

            };
            return {
                ...state, users: [...state.users, newUser]
            };
            case "DELETE_USER":
                const fitlteredUsers=state.users.filter(user => user.id !== action.payload)
            return { ...state, users: fitlteredUsers };
        case 'EDIT_USER':
            const editedUsers = state.users.map(user => {
                if (user.id === action.user_id) {
                    return { ...user, ...action.updated_info }
                } else {
                    return user;
                }

            });
            return { ...state, users: editedUsers }
        default:
            return state;
    }
}

export default userReducer;