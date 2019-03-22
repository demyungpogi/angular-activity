import { Component, OnInit , Input, OnChanges, TemplateRef, EventEmitter, Output } from '@angular/core';
import { HttpService } from '.././http.service';
import { TaskListComponent } from '../task-list/task-list.component';

// import { TaskListComponent } from '.././task-list/task-list.component';



import { ItaskList } from '.././interface_task_list';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-manage-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {
	newtask: any;
	 @Input() data: any;
	 @Input() isEdit: boolean;
	 @Input() modalTemplate: any;
	 @Input() modalId:BsModalRef;
	 @Output() saveDone: EventEmitter<any> = new EventEmitter<any>();



	constructor( private http : HttpService, private itemList: TaskListComponent) {
	}

	ngOnInit() {
		if( !this.isEdit ){
			this.data= {
				id: 0,
				title:'',
				description: ''
			}
		}


	}

	submitManageTask(){
		if(this.isEdit){ /*if edit task*/
			this.http.updateTasks(this.data).subscribe();
			this.saveDone.emit();
		}
		else{ /*if new task*/
			// this.http.addTask( this.data ).subscribe((data)=>{
			// 	// this.task_list().populateTask();
			// 	new TaskListComponent();
			// 	// list.populateTask();
			// });	


			this.http.addTask( this.data ).subscribe((data)=>{

				this.itemList.populateTask()

				// let list = new TaskListComponent(this.http);
				// 	list.populateTask();
				// let list = new TaskListComponent(); 
		     // this.populateTask();
		});	
		}
	}
}


