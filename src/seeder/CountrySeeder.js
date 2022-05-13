let countryModel = require('../models/country.model');
module.exports = {
    run: () =>
        new Promise((resolve) => {
            (async () => {
                // Reading xlsx file
                const reader = require('xlsx')
                const file = reader.readFile('./public/xlsx/Countrylist.xlsx') // Reading our test file
                let data = []
                const sheets = file.SheetNames
                for(let i = 0; i < sheets.length; i++)
                {
                    const temp = reader.utils.sheet_to_json(file.Sheets[file.SheetNames[i]])
                    temp.forEach((res) => {
                        data.push(res)
                    })
                }
                console.log("data",data)
                await countryModel.insertMany(data);
                resolve(true);
            })();
        }),
};
