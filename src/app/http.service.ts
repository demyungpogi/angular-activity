import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject  } from 'rxjs';
import { ItaskList } from './interface_task_list';


@Injectable({
  providedIn: 'root'
})

export class HttpService {

	constructor(private _http: HttpClient){}
	private valueObs: BehaviorSubject<string> = new BehaviorSubject<string>(null);

	getAllTask(): Observable <any> {
		return this._http.get('http://localhost:3000/task_list');
	}

	addTask( newtask: any ): Observable <any>{
		return this._http.post('http://localhost:3000/task_list', newtask);
	}

	deleteTasks( item ): Observable<any>{
		return this._http.delete('http://localhost:3000/task_list/'+ item.id );
	}

	updateTasks( task_array ): Observable<any>{
		return this._http.put('http://localhost:3000/task_list/'+ task_array.id, task_array );
	}

    setValue(task_array ):void {
        this.valueObs.next(task_array);
    }
    
    getValue():Observable<string> {
        return this.valueObs;
    }
}
