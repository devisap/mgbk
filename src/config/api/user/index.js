import axios from 'axios'

const loginApi = param => {
    return axios({
        url: 'https://api.mgbkkotamalang.my.id/user/login',
        method: 'post',
        data: {
            email: param.email,
            password: param.pass
        }
    })
}

const registerApi = param => {
    return axios({
        url: 'https://api.mgbkkotamalang.my.id/user/register',
        method: 'post',
        data: {
            name: param.name,
            email: param.email,
            password: param.pass
        }
    })
}

const getDataProfileApi = param => {
    console.log(param.id_user)
    return axios({
        url: 'https://api.mgbkkotamalang.my.id/user/profile/'+param.id_user,
        method: 'get'
    })
}

export { loginApi, registerApi, getDataProfileApi }