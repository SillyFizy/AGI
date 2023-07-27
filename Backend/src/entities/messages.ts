import {BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import Conversation from "./conversation";
import User from "./user";
import Agi from "./agi";

@Entity()
export default class Message extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    text: string


    @Column()
    isUser: boolean

    @CreateDateColumn()
    sentAt: Date

    @ManyToOne(() => Conversation, (conversation) => conversation.messages)
    conversation: Conversation


    @ManyToOne(() => User, (user) => user.messages)
    user: User


    @ManyToOne(() => Agi, (agi) => agi.messages)
    agi: Agi
}