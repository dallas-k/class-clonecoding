// 1.async
// async 키워드를 함수 앞에 쓰면 바로 promise로 만들어줌.
async function fetchUser() {
    // 10 seconds
    return 'ellie';
}

const user = fetchUser();
user.then(console.log);


// 2.await
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple(){
    await delay(1000);
    return 'apple';
}

async function getBanana(){
    await delay(1000);
    return 'banana';
}

async function pickFruits(){
    const apple = await getApple();
    const banana = await getBanana();
    return `${apple} + ${banana}`;
}

pickFruits().then(console.log)