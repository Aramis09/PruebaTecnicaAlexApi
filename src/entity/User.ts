import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Operations } from "../entity/Operations"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ nullable: false })
    user: string

    @Column({ nullable: false })
    password: string


    @Column({ nullable: true })
    img_profile: string

    @OneToMany(() => Operations, (operations) => operations.user) //!creamos relacion de muchos a uno, es decir que un usuario va a tener muchas operaciones y  estas mismas no tiene que intervenir con la de otros usuarios.
    operations: Operations[]
}
