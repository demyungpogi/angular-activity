import { Component, OnInit } from '@angular/core';
import { HttpService } from '.././http.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  task_list: any;
  constructor(private http : HttpService) {
  		

    	
   }

  ngOnInit() {
  	this.populateTask();
  }

 /*get data fom service*/
  populateTask(){
	// this.http.getAllTask().subscribe(data => {this.task_list = data; });

	  let observable = this.http.getAllTask();
        observable.subscribe( data => {this.task_list = data; } );


  }
  deleteTask( item: any ) { 
  console.log( item ) 	
	this.http.deleteTasks( item );
  }

//   deleteArticleById(articleId: string): Observable<number> {
//     // let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
//     // let options = new RequestOptions({ headers: cpHeaders });
  
// } 
}
