import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
  providers: [AngularFireDatabase]
})
export class StudentComponent implements OnInit {

  itemValue = '';
  items: FirebaseListObservable<any[]>;
 
  constructor(db: AngularFireDatabase) {
    this.items = db.list('/items');
  }

  onSubmit() {
    this.items.push({content: "Student "+this.itemValue});
    this.itemValue = '';
  }

  ngOnInit() {
  }

}
