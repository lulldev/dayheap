export interface ITask {
  task: {_id: string, category: string, text: string };
}

export interface ITaskState {
  isShowFullText: boolean;
  isTaskEditMode: boolean;
}
