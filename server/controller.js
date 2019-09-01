const getHouses = (req, res) => {
    const db = req.app.get('db');
    db.get_houses() 
        .then(houses => {
            res.status(200).send(houses)
        })
        .catch((err) => {
            console.log(err)
        })
};

const createHouse = (req, res) => {
    const db = req.app.get('db');
    const { name, address, city, state, zipcode, img, mortgage, rent } = req.body
    db.create_house([name, address, city, state, zipcode, img, mortgage, rent])
        .then(() => {
            res.status(200).send('House has been created.')
        })
        .catch((err) => {
            console.log(err)
        })
};

const deleteHouse = (req, res) => {
    const db = req.app.get('db');
    const { id } = req.params;  
    db.delete_house([id])
        .then(() => {
            res.status(200).send(`House number ${id} has been deleted.`)
        })
        .catch((err) => {
            console.log(err)
        })
}; 

module.exports = {
    getHouses,
    createHouse, 
    deleteHouse
}