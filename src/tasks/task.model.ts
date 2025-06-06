export interface ITask {
    id: string;
    title: string;
    description: string;
    status: TaskStatus;
}

enum TaskStatus {
    TODO = 'TODO',
    IN_PROGRESS = 'IN_PROGRESS',
    DONE = 'DONE'
}