import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css'],
  providers: [AngularFireDatabase]
})
export class TeacherComponent implements OnInit {

  itemValue = '';
  items: FirebaseListObservable<any[]>;
 
  constructor(db: AngularFireDatabase) {
    this.items = db.list('/items');
  }

  onSubmit() {
    this.items.push({content: "Teacher "+this.itemValue});
    this.itemValue = '';
  }


  ngOnInit() {
  }

}
        