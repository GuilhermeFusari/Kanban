// tasks.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task } from './task.model';


@Injectable()
export class TasksService {
  constructor(@InjectModel(Task.name) private taskModel: Model<Task>) {}

  async getAllTasks(): Promise<Task[]> {
    return this.taskModel.find().exec();
  }

  async createTask(description: string): Promise<Task> {
    const newTask = new this.taskModel({ description });
    return newTask.save();
  }

  async deleteTask(id: string): Promise<Task> {
    return this.taskModel.findByIdAndDelete(id).exec();
  }

  async updateTask(id: string, description: string): Promise<Task> {
    return this.taskModel.findByIdAndUpdate(id, { description }, { new: true }).exec();
  }
}
