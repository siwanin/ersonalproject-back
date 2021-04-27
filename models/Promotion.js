module.exports = (sequelize, DataTypes) => {
  const Promotion = sequelize.define("Promotion", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    promotionCode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    expiredDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
  },
  {
    tableName: "promotions"
  }
  );

  Promotion.associate = (models) => {
    Promotion.hasMany(models.Order, {
      foreignKey: {
        name: "orderId",
        allowNull: false,
        field: "order_id",
      },
      onDelete: "RESTRICT",
      onUpdate: "RESTRICT",
    });
  };

  return Promotion;
};
