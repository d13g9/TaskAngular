export class Task {
    id?:number;
    tasktitle: string;
    taskdescription: string;
    status:string;

    constructor(){
        this.tasktitle = "";
        this.taskdescription = "";
        this.status= null;
    }
}