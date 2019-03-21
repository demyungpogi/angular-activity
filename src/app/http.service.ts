import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { map, filter, catchError, mergeMap } from 'rxjs/operators';
// import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {



  constructor(private _http: HttpClient){

  }

  task_array: {task_id: number, title: string, description: string}[] = [
              {
                task_id: 0,
                title: 'Title Testing one',
                description:'Description Title one'
              },
              {
                task_id: 1,
                title: 'Title Testing Second',
                description:'Description Title Second'
              }
          ]

  getAllTask(){
    let observable = this._http.get('http://localhost:3000/task_list');
        observable.subscribe();

    return observable;
  }
  addTask( newtask: any ){
    return this._http.post('http://localhost:3000/task_list', newtask);
  }
  // deleteTask( id:number ){
  //   console.log( 'http://localhost:3000/task_list/'+ id )
  //   this._http.delete('http://localhost:3000/task_list/'+ id);
  // }



  deleteTasks( data_item:any ){

    // return  this.getAllTask().filter(item => item !== data_item);

//     const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type':  'application/json',
//     'Authorization': 'my-auth-token'
//   })
// };


//   const url = `http://localhost:3000/task_list/`+ id; // DELETE api/heroes/42
//   console.log( url )
  return this._http.delete('http://localhost:3000/task_list/0')
    // .pipe(
    //   catchError(this.handleError('deleteHero'))
    // );
}

}
