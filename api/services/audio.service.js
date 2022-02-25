const db = require('../models');

let audioList = [];

const recordAudio = async (form) => {

  const idAws = "getIdAudioFileAwsLater"
  
try {
  const audioFile = {
   idAppointment: form.idAppt,
   idAwsAudioFile: idAws,
    audio: form.audio,
  };

 const data = await db.audio.create(audioFile)
 return data 
} catch (error) {
  console.log(error);
} 
};

const getAudioById = async (id) => {
  try {
    const data =  await db.audio.findOne({where: {id: id}})
    return data
  } catch (error) {
    console.log(error);
    
  }
}

const getAudioByAppointment = async (idAppt) => {
  try {
    const data =  await db.audio.findAll({where: {idAppointment: idAppt}})
    return data
  } catch (error) {
    console.log(error);
    
  }
}

module.exports = {
  recordAudio,
  getAudioById,
  getAudioByAppointment,
  audioList
};
