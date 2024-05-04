import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { User } from "../entity/User"

@Entity()
export class Operations {

  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: false })
  name: string

  @Column({ nullable: false })
  ticker: string


  @Column({ nullable: false })
  price: number


  @Column({ nullable: false })
  purchase_amount: number

  @ManyToOne(() => User, (user) => user.operations)
  user: User

}