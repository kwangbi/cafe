const express = require('express');
const next = require('next');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const dotenv = require('dotenv');

const dev = process.env.NODE_ENV !== 'production';
const prod = process.env.NODE_ENV === 'production';

dotenv.config();

const app = next({ dev }); // next 모듈을 사용
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express(); // back 서버에서의 const app = express()

    server.use(morgan('dev'));
    server.use(express.json());
    server.use(express.urlencoded({ extended: true }));
    //server.use(cookieParser(process.env.COOKIE_SECRET));
    server.use(cookieParser("!SDFDESSRTGHGFDGFDS!@#SdDD345"));
    server.use(
        expressSession({
            resave: false,
            saveUninitialized: false,
            //secret: process.env.COOKIE_SECRET, // backend 서버와 같은 키를 써야한다.
            secret: "!SDFDESSRTGHGFDGFDS!@#SdDD345", // backend 서버와 같은 키를 써야한다.
            cookie: {
                httpOnly: true,
                secure: false,
            },
        }),
    );

    server.post('/signin', (req, res) => {
        console.log(req.body);
        res.json({ 'userId': 1 });
    })

    // server.get('/hashtag/:tag', (req, res) => {
    //     return app.render(req, res, '/hashtag', { tag: req.params.tag });
    // });

    // server.get('/user/:id', (req, res) => {
    //     return app.render(req, res, '/user', { id: req.params.id });
    // });

    server.get('/goods/:id',(req,res)=>{
        const actualPage = '/goods_detail'
        const queryParams = {
            goods_idx: req.params.id
        }

        return app.render(req,res,actualPage,queryParams)
    });

    server.get('*', (req, res) => { // 모든 get 요청 처리
        return handle(req, res); // next의 get 요청 처리기
    });

    server.listen(3000, () => {
        console.log('next+expresss running on port 3000');
    });
});