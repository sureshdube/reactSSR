import React from 'react';
import {Route} from 'react-router-dom';
import Home from './component/Home';
import UsersList,{loadData} from './component/UsersList'
export default [
    {
        path : "/",
        component : Home,
        exact : true
    },
    {
        loadData,
        path : "/users",
        component : UsersList
    }, 
]

// () => {
//     return (
//         <div>
//             <Route exact path = "/" component = {Home}/>
//             <Route exact path = "/users" component = {UsersList}/>
//         </div>
//     )
// }