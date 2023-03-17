import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Customers } from "./Customers";
import { Orders } from "./Orders";

@Index("pk_user_id", ["id"], { unique: true })
@Entity("users", { schema: "public" })
export class Users {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", {
    name: "username",
    nullable: true,
    length: 100,
  })
  username: string | null;

  @Column("text", { name: "password", nullable: true })
  password: string | null;

  @Column("timestamp without time zone", { name: "createdat", nullable: true })
  createdat: Date | null;

  @Column("timestamp without time zone", { name: "updatedat", nullable: true })
  updatedat: Date | null;

  @OneToMany(() => Customers, (customers) => customers.user)
  customers: Customers[];

  @OneToMany(() => Orders, (orders) => orders.user)
  orders: Orders[];
}
