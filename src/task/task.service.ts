import { Injectable } from '@nestjs/common';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { getConnection } from 'typeorm';

@Injectable()
export class TaskService {
    //injects TaskRepository, defined in TaskModule, into TaskService
    constructor(@InjectRepository(Task) private taskRepository: Repository<Task>){}

    // fetches all tasks and provides total tasks in database
    async findAll(): Promise<Task[]>{
      const result = await getConnection()
        .createQueryBuilder(Task, "task").select("COUNT(*)", "count").getRawOne();
      const string = (result == 1) ? ' task' : ' tasks';
      console.log('Fetched ' + Object.values(result) + string);
      return await this.taskRepository.find()
    }

    // saves data related to new Task object
    async create(task: Task): Promise<Task>{
      return await this.taskRepository.save(task)
    }

    // uses task ID to modify an existing Task object
    async update(task: Task): Promise<UpdateResult>{
      return await this.taskRepository.update(task.id, task)
    }

    // uses a task ID to delete a Task object
    async delete(id): Promise<DeleteResult>{
      return await this.taskRepository.delete(id)
    }
}
