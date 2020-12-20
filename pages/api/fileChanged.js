const fs = require('fs');

function saveFileSync(path, data) {
    let list = path.split(/[\\\/]/);
    let filename = list.pop();
    let filepath = list.join('/');
    fs.mkdirSync(filepath, { recursive: true }, (err) => {
        if (err) throw err;
    });
    fs.writeFileSync(path, data);
}

const saveData = (name, obj) => {
    saveFileSync(name, JSON.stringify(obj));
}

export default (req, res) => {
    const {
        query = {}
    } = req;
    saveData('res-json/lightData.json', query);
    res.statusCode = 200;
    res.json({ status: 'success' });
};
