import {
    BaseEntity,
    BeforeInsert,
    BeforeUpdate,
    Column,
    Entity,
    JoinColumn, ManyToMany, OneToMany,
    OneToOne,
    PrimaryGeneratedColumn
} from "typeorm";
import Agi from "./agi";
import Messages from "./messages";
import Message from "./messages";
import Conversation from "./conversation";

@Entity()
export default class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: Number

    @Column({unique: true})
    username: string

    @Column({select: false})
    password: string

    @Column({select: false})
    authToken: string


    @OneToMany(() => Message, (message) => message.user)
    messages: Message[]

}
    //
    // @ManyToMany(()=>Conversation,(conversation)=>conversation.users)
    // conversations: Conversation[]
