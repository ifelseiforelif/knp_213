import {
  Model,
  Table,
  Column,
  DataType,
  HasMany,
  Default,
} from "sequelize-typescript";
import { Post } from "./post-model";
import { v4 as uuidv4 } from "uuid";

enum UserRole {
  ADMIN = "admin",
  USER = "user",
  GUEST = "guest",
}

@Table({
  tableName: "users",
  timestamps: true,
  createdAt: "created_at",
  updatedAt: "updated_at",
})
export class User extends Model {
  @Default(uuidv4())
  @Column({
    type: DataType.UUID,
    primaryKey: true,
  })
  id!: string;

  @Column({
    type: DataType.STRING(20),
    allowNull: false,
    unique: true,
  })
  login!: string;

  @Column({
    type: DataType.ENUM(...Object.values(UserRole)),
    allowNull: false,
  })
  role!: UserRole;

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
