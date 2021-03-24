import { Injectable } from '@nestjs/common';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';

@Injectable()
export class TaskService {
    constructor(@InjectRepository(Task) private taskRepository: Repository<Task>){}

    async findAll(): Promise<Task[]>{
        return await this.taskRepository.find()
    }

    async create(task: Task): Promise<Task>{
        return await this.taskRepository.save(task)
    }

    async update(task: Task): Promise<UpdateResult>{
        return await this.taskRepository.update(task.id, task)
    }

    async delete(id): Promise<DeleteResult>{
        return await this.taskRepository.delete(id)
    }
}
