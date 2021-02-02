import axios from 'axios'
import configTheme from '../services/config'

const nbServ = axios.create({
    baseURL: configTheme.apiUrl
}) 
export default nbServ 