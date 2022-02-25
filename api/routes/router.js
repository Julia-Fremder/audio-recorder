const {Router} = require('express');
const audioController = require('../controllers/audio.controller')


module.exports = (app) => {

    const router = Router();

    router.route('/').get((req, res)=> {
        res.send('Server is on!')
    });

    router.route('/audios')
    .post((req, res, next) => {
        audioController.audioRecord(req, res, next);
    }
        );
    
    router.route('/audios/:id').get(audioController.getAudioById)

    router.route('/audios/appointments/:idAppt').get(audioController.getAudioByAppointment)
    
    app.use('/', router);
}