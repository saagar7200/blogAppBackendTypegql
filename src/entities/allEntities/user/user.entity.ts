import { Base } from "../../../entities/base/base.entity";
import { Gender } from "../../../constants/enum";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Role } from "../../../constants/global";

@Entity({
    name: 'user'
})
export class UserEntity extends Base {

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

    @Column({
        type: 'enum',
        name: 'role',
        default: Role.USER,
        enum: Role
    })
    role: Role

    @Column()
    password: string

    @Column({
        type: 'enum',
        name: "gender",
        default: Gender.MALE,
        enum: Gender
    })
    gender: Gender

}