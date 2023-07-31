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
