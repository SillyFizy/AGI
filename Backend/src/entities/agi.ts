import {BaseEntity, Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import User from "./user";
import Message from "./messages";


@Entity()
export default class Agi extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    aginame: string

    @OneToMany(() => Message, (message) => message.agi)
    messages: Message[];

}