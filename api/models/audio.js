module.exports = (sequelize, DataTypes) => {
  const audio = sequelize.define(
    'audio',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
        allowNull: false,
      },
      idAppointment: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      idAwsAudioFile: {
        type: DataTypes.TEXT,
        allowNull: false,
              },
      audio: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      },
    },
    {
      undescored: true,
      paranoid: true,
      tableName: 'audio',
      timestamps: false,
    }
  );
  return audio;
};
