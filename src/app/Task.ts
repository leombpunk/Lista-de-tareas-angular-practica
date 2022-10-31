//interfaz para darle formato a los datos recibidos
//se importara en el archivo mock-task.ts
export interface Task {
    id?: number;
    text: string;
    day: string;
    reminder: boolean;
}