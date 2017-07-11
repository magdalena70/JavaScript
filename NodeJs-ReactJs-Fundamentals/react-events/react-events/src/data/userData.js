let users = {} //database

let userData = {
    register: (email, password) => {
        return new Promise((resolve, reject) => {
            if(users[email]){
                resolve({
                    error: 'E-mail already exists'
                })

                return
            }

            let token = `${email} ${password}`
            users[email] = {
                email: email,
                password: password,
                token: token
            }

            resolve({
                token: token
            })
        })
    },
    login: (email, password) => {
        return new Promise((resolve, reject) => {
            if(!users[email] || users[email].password !== password){
                resolve({
                    error: 'Invalid credentials'
                })

                return
            }

            let token = `${email} ${password}`
            resolve({
                token: token
            })           
        })
    }
}

export default userData