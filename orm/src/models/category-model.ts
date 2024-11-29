import { Model, Column, DataType, Table, HasMany } from "sequelize-typescript";
import { Product } from "./product-model";

@Table({
  timestamps: false,
  tableName: "category",
})
export class Category extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title!: string;

  @HasMany(() => Product)
  products!: Product[];
}
