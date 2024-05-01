// tasks.controller.ts
import { Controller, Get, Post, Body, Delete, Param, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.model';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  async getAllTasks(): Promise<Task[]> {
    return this.tasksService.getAllTasks();
  }

  @Post()
  async createTask(@Body('description') description: string): Promise<Task> {
    return this.tasksService.createTask(description);
  }

  @Delete(':id')
  async deleteTask(@Param('id') id: string): Promise<Task> {
    return this.tasksService.deleteTask(id);
  }

  @Put(':id')
  async updateTask(
    @Param('id') id: string,
    @Body('description') description: string
  ): Promise<Task> {
    return this.tasksService.updateTask(id, description);
  }
}
