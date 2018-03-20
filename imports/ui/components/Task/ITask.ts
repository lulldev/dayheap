export interface ITask {
  task: {_id: string, category: string, text: string };
}

export enum TaskViewMode {
  default,
  edit,
  fulltext,
}

export interface ITaskState {
  isShowFullText: boolean;
  taskViewMode: TaskViewMode;
}
