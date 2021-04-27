module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define(
      "Order",
      {
        status: {
          type: DataTypes.ENUM,
          values: ['WAITING', 'PROCESSING', 'APPOVED'],
          allowNull: false
        },
        paymentMethod: DataTypes.STRING,
        slipPayment:DataTypes.STRING,
        paymentDate: DataTypes.DATE,

        phoneNumber: {
          type: DataTypes.STRING,
          field: "phone_number",
          allowNull: false
        },
        date: {
          type: DataTypes.DATEONLY,
          allowNull: false,
        },
      },
      {
        timestamps: false,
        tableName: "orders",
      }
    )


    Order.associate = (models) => {
      Order.belongsTo(models.User,{
        foreignKey: {
          name: "userId",
          field: "user_id",
        },
        onDelete: "RESTRICT",
        onUpdate: "RESTRICT",
      }),
      Order.belongsTo(models.Address,{
        foreignKey: {
          name: "addressId",
          field: "address_id",
        },
        onDelete: "RESTRICT",
        onUpdate: "RESTRICT",
      }),
      Order.belongsTo(models.Promotion,{
        foreignKey: {
          name: "promotionId",
          field: "promotion_id",
        },
        onDelete: "RESTRICT",
        onUpdate: "RESTRICT",
      })
    }

    Order.associate = (models) => {
      Order.hasMany(models.OrderItem,{
        foreignKey: {
          name: "orderId",
          field: "order_id",
        },
        onDelete: "RESTRICT",
        onUpdate: "RESTRICT",
      })
    }

      return Order;
  }

  
  
    