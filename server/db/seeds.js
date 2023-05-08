use slot_machine;
db.dropDatabase();


db.users.insertMany([
    {
        "name": "Tim Bart",
        "balance": 0.00,
        "transactions": [
            {
            "game_number": 300422,
            "profit": 2.00,
            "loss": 0
            }
        ]
    },
    {
        "name": "Nina Sampson",
        "balance": 0.00,
    },
    {
        "name": "Aubrey John",
        "balance": 0.00,
    },
    {
        "name": "Matilda Beagle",
        "balance": 0.00,
    }
])

// db.wheelsets.insertMany([
//     {
//     "fruit": [{
//             "symbol_name": "banana",
//             "value": 8,
//             "image_url": "urlhere"
//             },
//             {
//             "symbol_name": "aubergine",
//             "value": 10,
//             "image_url": "urlhere" 
//             },
//             {
//             "symbol_name": "green apple",
//             "value": 4,
//             "image_url": "urlhere"
//             },
//             {
//             "symbol_name": "peach",
//             "value": 6,
//             "image_url": "urlhere"
//             }]
//     }
// ])