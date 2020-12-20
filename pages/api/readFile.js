const fs = require('fs');

function readFileSync(path, data) {
    let list = path.split(/[\\\/]/);
    let filename = list.pop();
    let filepath = list.join('/');
    fs.mkdirSync(filepath, { recursive: true }, (err) => {
        if (err) throw err;
    });
    const res = fs.readFileSync(path, "utf8");
    return res;
}

const readData = (name) => {
    const data = readFileSync(name);
    return data;
}

export default (req, res) => {
    const data = readData('res-json/lightData.json');
    res.statusCode = 200;
    res.json(data);
};
