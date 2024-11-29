import {
  Model,
  Table,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { v4 as uuidv4 } from "uuid";
import { User } from "./user-model";

@Table({
  tableName: "profiles",
  createdAt: "created_at",
  updatedAt: "updated_at",
})
export class Profile extends Model {
  @Column({
    type: DataType.UUID,
    defaultValue: uuidv4(),
    primaryKey: true,
  })
  id!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  detail_info!: string;

  @ForeignKey(() => User)
  @Column({
    type: DataType.UUID,
    allowNull: false,
    unique: true,
  })
  user_id!: string;

  @BelongsTo(() => User)
  user!: User;
}
