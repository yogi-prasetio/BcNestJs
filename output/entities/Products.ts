import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { OrderDetails } from "./OrderDetails";
import { Categories } from "./Categories";

@Index("pk_product_id", ["id"], { unique: true })
@Entity("products", { schema: "public" })
export class Products {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "name", nullable: true, length: 100 })
  name: string | null;

  @Column("character varying", {
    name: "description",
    nullable: true,
    length: 200,
  })
  description: string | null;

  @Column("numeric", { name: "price", nullable: true })
  price: number | null;

  @Column("character varying", { name: "image", nullable: true, length: 200 })
  image: string | null;

  @Column("numeric", { name: "category_id", nullable: true })
  category_id: number | null;

  @Column("timestamp without time zone", { name: "createdat", nullable: true })
  createdat: Date | null;

  @Column("timestamp without time zone", { name: "updatedat", nullable: true })
  updatedat: Date | null;

  @OneToMany(() => OrderDetails, (orderDetails) => orderDetails.product)
  orderDetails: OrderDetails[];

  @ManyToOne(() => Categories, (categories) => categories.products, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "category_id", referencedColumnName: "id" }])
  category: Categories;
}
