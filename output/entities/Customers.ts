import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Users } from "./Users";

@Index("pk_customer_id", ["id"], { unique: true })
@Entity("customers", { schema: "public" })
export class Customers {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", {
    name: "firstname",
    nullable: true,
    length: 100,
  })
  firstname: string | null;

  @Column("character varying", {
    name: "lastname",
    nullable: true,
    length: 100,
  })
  lastname: string | null;

  @Column("integer", { name: "user_id", nullable: true })
  user_id: number | null;

  @Column("timestamp without time zone", { name: "createdat", nullable: true })
  createdat: Date | null;

  @Column("timestamp without time zone", { name: "updatedat", nullable: true })
  updatedat: Date | null;

  @ManyToOne(() => Users, (users) => users.customers, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "user_id", referencedColumnName: "id" }])
  user: Users;
}
