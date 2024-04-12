import express, {Response, Request} from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import jwt from 'jwt-simple';



dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true }
));
app.use(cors());

let Items = [
    {
        id: 1,
        type: 'cake',
        name: 'euro cake',
        price: 12
    },
    {
        id: 2,
        type: 'cake',
        name: 'orange cake',
        price: 12
    },
    {
        id: 3,
        type: 'drink',
        name: 'cola',
        price: 12
    }
]


app.get('/p', (res:Response, req:Request) =>{
    res.status(200).json(Items);
});

const checkLogin = ((req:Request, res:Response) => {
    let username = req.body.username;
    let password = req.body.password;
    if(username === 'admin' && password === '123456'){
            console.log('Hello')
        } else {
            res.send(`You're Username or Password incorrect.`);
            console.log(req.body);
            
        }
    });
    
    
app.post('/login', checkLogin, (req:Request, res:Response) =>{
    res.send('Welcome back' + req.body.username);
    const payload = {
        'username': req.body.username,
        'iAt': new Date().getTime(),
        
    };
    const SECRET = "USER_SECRET_KEY"
    res.send(jwt.encode(payload, SECRET));
});

app.listen(process.env.PORT, ()=>{
    console.log(`Server has been started at http://localhost:5050`);
});

