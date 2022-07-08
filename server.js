const express = require("express");
const app = express();
const cors = require('cors');
const PORT = 8000;

app.use(cors());

const familyMembers = {
    'jim':{
        'name':'Jim Schoenecker',
        'age': 28,
        'eye color': 'green',
        'favorite food': 'pizza',
        'interests': ['basketball','software engineering','cooking'],
        'sign':'pisces'
    },
    'ariel':{
        'name':'Ariel Sanders',
        'age': 24,
        'eye color': 'blue',
        'favorite food': 'steak?',
        'interests': ['fitness','reading','travel'],
        'sign':'taurus'
    },
    'nugget':{
        'name':'Nugget',
        'age': 5,
        'eye color': 'green',
        'favorite food': 'string cheese',
        'interests': ['walkies','evening cuddle time','birds'],
        'sign':'CAT'
    },
    'bailey':{
        'name':'Bailey',
        'age': 5,
        'eye color': 'aqua',
        'favorite food': 'goldfish crackers',
        'interests': ['snoozing','snacking','cuddling'],
        'sign': 'CAT'
    },
    'kiki':{
        'name':'Kiki',
        'age': 2,
        'eye color': 'aqua',
        'favorite food': 'kibble',
        'interests': ['snoozing','yelling','being annoying'],
        'sign': 'CAT'
    },
    'pickles':{
        'name':'Pickles',
        'age': 6,
        'eye color': 'green',
        'favorite food': "mom and dad's dinner",
        'interests': ['snoozing','outside cats','chewing bathing suits'],
        'sign': 'CAT'
    },
    'unknown':{
        'name':'unknown',
        'age': 'unknown',
        'eye color': 'unknown',
        'favorite food': 'unknown',
        'interests': ['unknown'],
        'sign': 'unknown'
    }
}



app.get('/', (req, res)=> {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (req, res)=>{
    const familyName = req.params.name.toLowerCase();
    if (familyMembers[familyName]){
        res.json(familyMembers[familyName]);
    }else{
        res.json(familyMembers[unknown])
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on PORT ${PORT} !`)
})