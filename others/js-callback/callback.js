class UserStroage {
    loginUser(id, pwd, onSuccess, onError) {
        setTimeout(()=>{
            if (
                (id === 'ellie' && pwd === '0000') ||
                (id === 'coder' && pwd === '0000')
            ) {onSuccess(id);}
            else {onError(new Error('not found'));}
        }, 2000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout( () => {
            if (user === 'ellie') {onSuccess({name : 'ellie', role: 'admin'});}
            else {onError(new Error('no access'));}
        }, 1000);
    }
}

const userStroage = new UserStroage();
const id = prompt('enter your id');
const pwd = prompt('your pwd');
userStroage.loginUser(id, pwd,
    user => {userStroage.getRoles(
        user,
        userWithRole => {
            alert('login success ', id);
        },
        error => {
            console.log(error);
        }
        );
    },
    error => {
        console.log(error);
    }
);