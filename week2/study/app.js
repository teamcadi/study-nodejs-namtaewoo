const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
// 정적 파일을 제공하는 api
// 애플리케이션 레벨에서 미들웨어를 등록하는 메서드
// 프로필 사진에서도 사용
// 배너 이미지
// app.use("/public", express.static('public'));
//1
app.use(express.json());
//2
app.use(express.urlencoded({
    extended: true
}));
//3
app.use('/public', express.static(path.join(__dirname, 'public')));
//4
app.post('/', (req, res) => {
    const data = req.body;
    console.log(data);
    //디비에 유저 생성
    // 수정
    // 등등 가능
});
//app이 많은 기능을 포함하고 서버를 열었다.
app.listen(9000, () => {
    console.log('server connected');
});