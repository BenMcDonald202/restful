 const toJson= csv => {
    const lines = csv.split('\n')
    const result = []
    const preHeader = lines[0].split(',');
    let headers = preHeader.map((each)=>{return JSON.parse(each)}); 

    lines.map(l => {
        const obj = {}
        const line = l.split(/,(?=(?:(?:[^'"]*(?:'|")){2})*[^'"]*$)/)

        headers.map((h, i) => {
            obj[h] = line[i].replace(/^"|"$/g, '')
        })

        result.push(obj)
    })

    return result;
}

const toFormatted = json => {
    let lines = [];
    json.forEach(obj => {
        let line = '';
        Object.entries(obj).forEach(([key, value]) => {
            line += `[${value}] `
            console.log(`${key} ${value}`);
        });
        lines.push(line.trim());
    });
    return lines;
}

exports.toJson = toJson;
exports.toFormatted = toFormatted;