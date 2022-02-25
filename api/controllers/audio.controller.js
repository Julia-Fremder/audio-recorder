const audioService = require('../services/audio.service');

const audioRecord = async (req, res, next) => {
  try {
    const body = req.body;
    console.log(body, 'body no controler, req.body')
    const data = await audioService.recordAudio(body);
    return res.status(200).send({
     data}
    );
  } catch (error) {
    console.log(req, 'request')
    return res.status(500).send({
      message: 'Something went wrong in audioRecord function.',
      error,
    });
  }
};

const getAudioById = async (req, res, next) => {
  console.log(req.params)
  try {
    const {id} = req.params;
    const data = await audioService.getAudioById(id)
    return res.status(200).send(data)
  } catch (error) {
    return res.status(500).send({
      message: 'Something went wrong at getAudioById on the controller',
      error,
    })
    
  }
};

const getAudioByAppointment = async (req, res, next) => {
  try {
    const {idAppt} = req.params;
    const data = await audioService.getAudioByAppointment(idAppt)
    return res.status(200).send(data)
  } catch (error) {
    return res.status(500).send({
      message: 'Something went wrong at getAudioByAppointment on the controller',
      error,
    })
  }

}

module.exports = {
  audioRecord,
  getAudioById,
  getAudioByAppointment
};
