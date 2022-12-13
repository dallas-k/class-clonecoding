class UserStroage {
    loginUser(id, pwd) {
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                if (
                    (id === 'ellie' && pwd === '0000') ||
                    (id === 'coder' && pwd === '0000')
                ) resolve(id);
                else reject(new Error('Login Fail'));
            }, 2000);
        }, 2000);
        
    }

    getRoles(user) {
        return new Promise((resolve, reject)=>{
            setTimeout( () => {
                if (user === 'ellie')
                resolve({name : 'ellie', role: 'admin'});
                else {reject(new Error('no access'));}
            }, 1000);
        })
        
    }
}

const userStroage = new UserStroage();
const id = prompt('enter your id');
const pwd = prompt('your pwd');

userStroage
.loginUser(id, pwd)
.then(userStroage.getRoles)
.then(user => alert('login success : '+ id + user.name + user.role))
.catch(console.log)