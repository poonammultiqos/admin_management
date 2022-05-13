let leadModel = require('../models/lead.model');
module.exports = {
    run: () =>
        new Promise((resolve) => {
            (async () => {
                let lead = [
                    {
                        "sales_person_name": "Poonam",
                        "client_name": "Pihu",
                        "country_id": "1",
                        "title":  "Project1",
                        "add_time":  "2022-01-01T14:56:59.301Z",
                        "close_time":  "2022-01-30T14:56:59.301Z",
                        "lost_time":  "2022-01-15T14:56:59.301Z",
                        "update_time":  "2022-01-15T14:56:59.301Z",
                        "stage_add_time":  "2022-01-01T14:56:59.301Z",
                        "stage_update_time":  "2022-01-11T14:56:59.301Z",
                        "next_activity_subject":  "activity subject",
                        "lead_type": "upbound",
                        "stage_id": "1",
                        "status": "won",
                        // "add_time":  "1/1/2022",
                        // "close_time":  "30/1/2022",
                        // "lost_time":  "15/1/2022",
                        // "update_time":  "15/1/2022",
                        // "stage_add_time": "1/1/2022",
                        // "stage_update_time": "11/1/2022",
                    },
                ]

                await leadModel.insertMany(lead);
                resolve(true);
            })();
        }),
};
