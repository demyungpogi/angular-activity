// import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { Component, OnInit, NgZone , TemplateRef, ViewChild  } from '@angular/core';
import { HttpService } from '.././http.service';
import { ItaskList } from '.././interface_task_list';
// import { NewTaskComponent } from '../new-task/new-task.component';
import { BsModalService, BsModalRef, ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})

export class TaskListComponent implements OnInit {
	@ViewChild('editModalTemplate') editModalTemplate: ModalDirective;
	task_list: ItaskList[];
	edit_task_val: ItaskList[]; 
	modalRef: BsModalRef;
	edit_data: string;
	modalTemplate: any;
	showEditFlag: boolean;

	@ViewChild('childModal') childModal: ModalDirective;


	constructor(private http? : HttpService , private modalService?: BsModalService) {}
	
	ngOnInit() {
		this.populateTask();
	}

	public populateTask(){
		this.http.getAllTask().subscribe(data => {
			this.task_list = data;
			console.log( this.task_list )
		 });
	}
	deleteTask() {
		this.http.deleteTasks( this.edit_task_val ).subscribe((data)=>{
		     this.modalRef.hide();
		     this.populateTask();
		});
	}

	showDeleteTask(template: TemplateRef<any>, data: ItaskList[] ) {
		this.showEditFlag = true;
		this.modalRef = this.modalService.show(template);
		this.edit_task_val = data;
	}

	openModal(template: TemplateRef<any>, data: ItaskList[] ) {
		this.showEditFlag = true;
		this.modalRef = this.modalService.show(template);
		this.modalTemplate = template;
	  	this.edit_task_val = data;
	}

    hideModal(){
    	this.modalRef.hide();
    }
}