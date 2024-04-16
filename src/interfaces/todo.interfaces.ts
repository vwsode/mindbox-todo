export interface Todo {
    isCompleted: boolean;
    title: string;
    id: number | string;
}

export type Filter = 'all' | 'completed' | 'active';
