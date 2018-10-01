import axios from 'axios';
 export const FETCH_USERS = 'fetch_users';
 export const fetchUsers = ()=> async dispatch =>{
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
const res = await axios.get('http://react-ssr-api.herokuapp.com/users');
console.log("res",res);
dispatch({
    type : FETCH_USERS,
    payload : res
})
 }