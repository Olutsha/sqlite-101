import * as sqlite from 'sqlite';
import sqlite3 from 'sqlite3';
import express from 'express';
const app = express();
const PORT = process.env.PORT || 3008;

app.get('/api/greetings',async (req, res)=>{
const greetings = await getGreetings();
console.log(greetings);
res.json({
greetings 
})
});


app.listen(PORT, () => console.log(`app started on port ${PORT}`)
);
const db = await sqlite.open({
    filename: './101.db',
    driver: sqlite3.Database
});





async function getGreetings(){
const result = await db.all(`select * from greetings`);
return result;
}
const result = await getGreetings()
console.log(result)

async function addGreeting(language, greeting){
    const sql = "insert into greetings(language,greeting) values(?,?)"
   await db.run(sql, [language,greeting]);
    }
    async function deleteGreetingByLanguage(language){
            }
    async function deleteGreeting(id){
        const sql = `delete from greetings where id = ?`;
        await db.run(sql, [id]);
    }


    async function updateGreeting(language, greeting, id){
        const sql = `update greetings set language =?, greeting = ? where id = ?`;
        await db.run(sql, [language,greeting,id]);
    }
    const result1 = await getGreetings()
    console.log(result1);
    console.log('=====================')
    await updateGreeting('Sepedi', 'Thobela',16)


    console.log('=====================')

    const result2 = await getGreetings()
    console.log(result2);

    
//getGreetings().then(result=> console.log(result))
//console.log(getGreetings)
// db
//.all('select *from greetings')
//.then(result=> {
 //   console.log(result)
//});
const countResult = await db.get(`select count(*) as count from greetings`);
console.log(countResult.count);

console.log('end')


