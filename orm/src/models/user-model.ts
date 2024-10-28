import {
  Model,
  Table,
  Column,
  DataType,
  HasMany,
  Default,
} from "sequelize-typescript";
import { Post } from "./post-model";
import { Col } from "sequelize/types/utils";

@Table({
  tableName: "users",
  timestamps: true,
  createdAt: "created_at",
  updatedAt: "updated_at",
})
export class User extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id!: number;

  @Column({
    type: DataType.STRING(20),
    allowNull: false,
    unique: true,
  })
  login!: string;

  @Default(DataType.NOW)
  @Column({
    type: DataType.DATE,
  })
  created_at!: Date;

  @Default(DataType.NOW)
  @Column({
    type: DataType.DATE,
  })
  updated_at!: Date;

  @HasMany(() => Post)
  posts!: Post[];
}
