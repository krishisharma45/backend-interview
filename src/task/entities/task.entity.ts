import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('task')
export class Task{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    taskString: string;

    @Column()
    assigned: Date;

    @Column()
    completed: boolean;
}
