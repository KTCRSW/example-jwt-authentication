import express, {Response, Request} from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true }
));
app.use(cors());


// const checkLogin = ((req:Request, res:Response) => {
    // });
    
    
app.post('/login', (req:Request, res:Response) =>{
    let username = req.body.username;
    let password = req.body.password;
    if(username === 'admin' && password === '123456'){
            console.log('Hello')
            res.send('Welcome back' + req.body.username);
        } else {
            res.send(`You're Username or Password incorrect.`);
            console.log(req.body);

        }
});

app.listen(process.env.PORT, ()=>{
    console.log('Server has been started');
});

