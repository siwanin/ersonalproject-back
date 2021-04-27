module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      phoneNumber: {
        type: DataTypes.STRING,
        field: "phone_number",
      },
      birthDate: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "birth_date",
      },
      gender:DataTypes.STRING,
      profileImg: DataTypes.STRING,
      role: {
        type: DataTypes.STRING,
        default:"user"
      },
    },
    {
      timestamps: true,
      createAt:true,
      tableName: 'users'
    }
  );

  User.associate = (models) => {
    User.hasMany(models.Order,{ 
        foreignKey: {
        name: 'UserId',
        allowNull:false,
        field: 'User_id'
      },
      onDelete: 'RESTRICT',
      onUpdate: 'RESTRICT'

    })
  }
  return User;
};
