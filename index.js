import express from 'express';
import {getGreetings,addGreeting} from './db.js'
console.log('start')

const app = express();
const PORT = process.env.PORT || 3008;

app.get('/api/greetings',async (req, res)=>{
const greetings = await getGreetings();
console.log(greetings);
res.json({
greetings 
})
});
app.post('/api/greetings', async (req,res) => {
    const greeting = req.body.greeting;
    const language = req.body.language;
     await addGreeting(language, greeting)
    res.json({
        status : 'success',
        message : `Added a greeting for ${language}`
    })
});

app.listen(PORT, () => console.log(`app started on port ${PORT}`)
);
