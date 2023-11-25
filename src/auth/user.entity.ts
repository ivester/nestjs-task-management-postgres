import { Task } from '../tasks/task.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  // eager: true means that when we fetch a user, we will get the task data as well
  @OneToMany(() => Task, (task) => task.user, { eager: true })
  tasks: Task[];
}
