let stageModel = require('../models/stage.model');
module.exports = {
    run: () =>
        new Promise((resolve) => {
            (async () => {
                let stage = [
                    {
                        name:'Waiting for client\'s reply'
                    },
                    {
                        name:'Interview scheduled'
                    },
                    {
                        name:'Interview Done'
                    },
                    {
                        name:'Scope Sent'
                    },
                    {
                        name:'Proposal Sent'
                    },
                ]

                await stageModel.insertMany(stage);
                resolve(true);
            })();
        }),
};

