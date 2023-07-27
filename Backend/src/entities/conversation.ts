import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    JoinTable,
    ManyToMany,
    OneToMany,
    PrimaryGeneratedColumn
} from "typeorm";
import Message from "./messages";
import User from "./user";

@Entity()
export default class Conversation extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    text: string

    @CreateDateColumn()
    createdAt: Date

    @OneToMany(() => Message, (message) => message.conversation)
    messages: Message[]
}
    //
    // @ManyToMany(()=>User,(user)=>user.conversations)
    // @JoinTable()
    // users: User[]
