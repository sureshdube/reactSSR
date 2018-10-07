export const FETCH_USERS = 'fetch_users';
export const fetchUsers = () => async (dispatch, getState, api) => {
    console.log("before res");
    // const res = {data :[{
    //     id : 1,
    //     name : "Suresh Dube"
    // },
    // {
    //     id : 2,
    //     name : "Ganesh Nawale"
    // },
    // {
    //     id : 3,
    //     name : "Pratam R"
    // },
    // {
    //     id : 4,
    //     name : "Abhiraj K"
    // },
    // {
    //     id : 5,
    //     name : "Sachin K"
    // }
    // ]}
    const res = await api.get('users');
    console.log("res", res);
    dispatch({
        type: FETCH_USERS,
        payload: res
    })
}

export const FETCH_CURRENT_USER = 'FETCH_CURRENT_USER';
export const fetchCurrentUser = () => async (dispatch, getState, api) => {
    const res = await api.get('/current_user');
    dispatch({
        type: FETCH_CURRENT_USER,
        payload: res
    })
}

export const FETCH_ADMINS = 'FETCH_ADMINS';
export const fetchAdmins = () => async (dispatch, getState, api) => {
    const res = {
        data: [{
            id: 1,
            name: "Suresh Dube"
        },
        {
            id: 2,
            name: "Ganesh Nawale"
        },
        {
            id: 3,
            name: "Pratam R"
        },
        {
            id: 4,
            name: "Abhiraj K"
        },
        {
            id: 5,
            name: "Sachin K"
        }
        ]
    }
    dispatch({
        type: FETCH_ADMINS,
        payload: res
    })
}