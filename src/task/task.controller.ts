import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { Task } from './entities/task.entity';
import { TaskService } from './task.service';

// contains routing information for app
@Controller('task')
export class TaskController {
    constructor(private taskService: TaskService){}

    // routing information to fetch all tasks
    @Get()
    async index(): Promise<Task[]>{
      return this.taskService.findAll()
    }

    // routing information to create a new task
    @Post('create')
    async create(@Body() taskData: Task): Promise<any>{
      console.log('Created a new task');
      return this.taskService.create(taskData)
    }

    // routing information to update a task using a task ID
    @Put(':id/update')
    async update(@Param('id') id, @Body() taskData: Task): Promise<any>{
      taskData.id = Number(id);
      console.log('Updated task #' + taskData.id);
      return this.taskService.update(taskData)
    }

    // routing information to delete all information for a task using a task ID
    @Delete(':id/delete')
    async delete(@Param('id') id): Promise<any>{
      console.log('Deleted task #' + id);
      return this.taskService.delete(id);
    }
}
