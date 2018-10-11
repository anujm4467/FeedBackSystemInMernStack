 import axios from 'axios';
 import {FETCH_USER} from './type.js';
const fetchUser = ()=>{
    axios.get('/api/current_user');
}