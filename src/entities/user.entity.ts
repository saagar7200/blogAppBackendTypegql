import { GENDER } from "../constants/enum";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: 'user'
})
export class UserEntity extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
    id: string

    @Column({ name: "email", unique: true })
    email: string

    @Column({
        name: 'first_name'
    })
    firstName: string

    @Column({
        name: 'middle_name',
        nullable: true


    })
    middleName: string


    @Column({
        name: 'last_name'
    })
    lastName: string

    @Column()
    password: string

    @Column({
        type: 'enum',
        name: "gender",
        default: GENDER.MALE,
        enum: GENDER
    })
    gender: GENDER

}