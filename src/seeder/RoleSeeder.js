let roleModel = require('../models/role.model');
module.exports = {
    run: () =>
        new Promise((resolve) => {
            (async () => {
                let role = [
                    {
                        name: 'superadmin'
                    },
                    {
                        name: 'admin'
                    },
                    {
                        name: 'bdm'
                    },
                    {
                        name: 'bde'
                    }
                ]

                await roleModel.insertMany(role);
                resolve(true);
            })();
        }),
};
