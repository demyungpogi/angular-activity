import { Component, OnInit } from '@angular/core';
import { HttpService } from '.././http.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {
	newtask: any;
	task_id_val : number;

	constructor( private http : HttpService ) { }

	ngOnInit() {
		this.newtask= {
			id: '',
			title:'',
			description: ''
		}
	}

	submitNewTask(){
	    let observable = this.http.addTask(  this.newtask );
	    observable.subscribe();
	}
}
