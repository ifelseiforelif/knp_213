import {
  Model,
  Table,
  Column,
  DataType,
  HasMany,
  HasOne,
} from "sequelize-typescript";
import { Post } from "./post-model";
import { v4 as uuidv4 } from "uuid";
import { Profile } from "./profile-model";

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
  @Column({
    type: DataType.UUID,
    defaultValue: uuidv4(),
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
    defaultValue: UserRole.GUEST,
    allowNull: false,
  })
  role!: UserRole;

  @Column({
    type: DataType.DATE,
    defaultValue: DataType.NOW,
  })
  created_at!: Date;

  @Column({
    type: DataType.DATE,
    defaultValue: DataType.NOW,
  })
  updated_at!: Date;

  @HasMany(() => Post)
  posts!: Post[];

  @HasOne(() => Profile)
  profile!: Profile;
}
