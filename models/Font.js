module.exports = (sequelize, DataTypes) => {
  const Font = sequelize.define("Font", {
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fontName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fontSize: {
      type: DataTypes.DECIMAL(3, 0),
      allowNull: false,
    },
    fontColor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "fonts"
  },
  );

  Font.associate = (models) => {
    Font.hasMany(models.OrderItem, {
      foreignKey: {
        name: "fontId",
        allowNull: false,
        field: "font_id",
      },
      onDelete: "RESTRICT",
      onUpdate: "RESTRICT",
    });
  };

  return Font;
};
