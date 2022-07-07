import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn, Unique } from "typeorm"

@Entity("users")
@Unique(["email"])

class User {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    password: string

    @Column()
    age: number

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

}

export { User }