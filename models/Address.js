module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define(
    "Address",
    {
      billingAddress: {
        type: DataTypes.STRING,
        allowNull: false
      },
      billingPostalCode: {
        type: DataTypes.STRING,
        allowNull: false
      },
      billingSubdistrict: {
        type: DataTypes.STRING,
        allowNull: false
      },
      billingDistrict: {
        type: DataTypes.STRING,
        allowNull: false
      },
      billingProvince: {
        type: DataTypes.STRING,
        allowNull: false
      },
    },
    {
      tableName: "addresses"
    }
  )

  Address.associate = (models) => {
    Address.hasMany(models.Order, {
      foreignKey: {
        name: "addressId",
        allowNull: false,
        field: "address_id",
      },
      onDelete: "RESTRICT",
      onUpdate: "RESTRICT",
    });
  };

    return Address;
}



