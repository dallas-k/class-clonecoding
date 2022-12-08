let express = require('express');
let axios = require('axios');

let app = express();
let port = process.env.PORT || 80;

app.use(express.static('public_html'));
app.listen(port, () => {
    console.log('HTML 서버 시작');
});


// https://apis.data.go.kr/B552657/ErmctInsttInfoInqireService/getParmacyListInfoInqire?serviceKey=mmgaRe2jArTS%2B4%2BZ%2F3bFdLysADDBgldElPJr8bttAHStiCDJ0b1pxBpM%2FMHL%2F8Z6QwtT2Y3aRiK2WUdt6qx8xQ%3D%3D&Q0=%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C&Q1=%EA%B0%95%EB%82%A8%EA%B5%AC&QT=1&QN=%EC%82%BC%EC%84%B1%EC%95%BD%EA%B5%AD&ORD=NAME&pageNo=1&numOfRows=10

app.get("/pharmach_list", (req, res) => {
    let response = null;
    try {
        let api = async() => {
            response = await axios.get('http://apis.data.go.kr/B552657/ErmctInsttInfoInqireService/getParmacyListInfoInqire', {
                params : {
                    serviceKey : 'mmgaRe2jArTS%2B4%2BZ%2F3bFdLysADDBgldElPJr8bttAHStiCDJ0b1pxBpM%2FMHL%2F8Z6QwtT2Y3aRiK2WUdt6qx8xQ%3D%3D',
                    'Q0' : '서울특별시',
                    'Q1' : '강남구',
                    'QT' : "",
                    'QN' : "",
                    'ORD' : "",
                    'pageNo' : "1",
                    'numOfRows' : "1000" 
                }
            })
        }
        api().then((response) => {
            res.setHeader('Access-Control-Allow-Origin','*');
            res.json(response.data.response.body);
        })
    }
    catch(e) {
        console.log(e);
    }
    return response;
})