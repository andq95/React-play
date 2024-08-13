import { observable, action} from 'mobx';

export default class Network {
    @observable accessToken = '';
    @observable role = '';
    @observable token = ''; 

    baseUrl = '';
    createAccountUrl = `${this.baseUrl}/api/user/create`
    changePasswordUrl = `${this.baseUrl}/api/user/updatePassword`
    loginUrl = `${this.baseUrl}/api/user/login`;
  
    @observable isLoggedIn() {
        
        // let _now = new Date().getTime();
        // return this.access_token != '' && this.expire_time > (_now / 1000);
        return false;
    }


    @action register(body) {
        return new Promise((resolve, reject) => {
            fetch(`${this.createAccountUrl}`, {
                method: 'POST',
                body
            })
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err))
        })
    }

    @action login(_username, _password) {
        return new Promise((resolve, reject) => {
            fetch(`${this.loginUrl}`, {
                method: 'POST',
                body: JSON.stringify({
                    username: _username,
                    password: _password
                })
            })
                .then((response) => response.json())
                .then((responseJSON) => {
                    if (responseJSON.status === "success" &&
                        responseJSON.data &&
                        responseJSON.data.accessToken &&
                        responseJSON.data.expiry) {
                        let _now = new Date().getTime();
                        this.user_name = _username;
                        this.access_token = responseJSON.data.accessToken;
                        this.expire_time = _now / 1000 + responseJSON.data.expiry;
                        resolve(responseJSON);
                    } else {
                        reject(responseJSON);
                    }
                })
                .catch((err) => {
                    reject({
                        code: 500,
                        data: {},
                        status: 'error',
                        message: err
                    });
                })
        })
    }

    @action logout() {
        this.accessToken = '';
    }

    @action updatePassword(body) {
        return new Promise((resolve, reject) => {
            fetch(`${this.changePasswordUrl}`, {
                headers: {
                    'Authorization': this.access_token
                },
                method: 'POST',
                body
            })
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err))
        })
    }

}