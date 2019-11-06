const router = require('express').Router();
const Donor = require('../models/donor.model');

router.get('/', (_req, res) => {
    res.render('index');
});

router.post('/donate', async (req, res) => {
    try {
        const name = req.body.name;
        const phone = req.body.phone;
        const amount = req.body.amount;
        const donor = new Donor({
            name,
            phone,
            amount
        });

        await donor.save();
        res.render('donate');
    } catch (e) {
        res.json({
            success: false,
            message: e,
        });
    }
});

router.post('/validate', async (req, res) => {
    var re = /^[6789]{2}\d{8}$/;
    if (!(re.test(Number(req.body.phone))))
        res.json('Invalid Contact No.');
    else
        res.send('');
});

router.get('/donors', async (req, res) => {
    const donors = await Donor.find({}).lean();
    var response = "";
    donors.forEach((donor) => {
        response += `Name: ${donor.name}<br>Phone: ${donor.phone}<br>Amount: ${donor.amount}<br><br>`;
    })

    res.send(response);
});

module.exports = router;
