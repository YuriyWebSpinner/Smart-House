const fs = require('fs');

const saveData = (name, obj) => {
    fs.writeFileSync(name, JSON.stringify(obj));
}

export default (req, res) => {
    const {
        query = {}
    } = req;
    saveData('./lightData.json', query);
    res.statusCode = 200;
    res.json({ status: 'success' });
};
