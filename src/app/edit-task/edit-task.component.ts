import { Component, OnInit , Input} from '@angular/core';
import { HttpService } from '.././http.service';
import { ItaskList } from '.././interface_task_list';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {
	update_task_array: any;

    constructor(private http : HttpService) {}

	ngOnInit() {
		this.http.getValue().subscribe(data => {this.update_task_array = data; console.log( data ) });
	}

	submitEditTask(){
		this.http.updateTasks(this.update_task_array).subscribe();
	}

}
