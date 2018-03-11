import { Component, OnInit } from '@angular/core';

import { UploadFileServiceMock } from '../upload-file-mock.service';
 
@Component({
  selector: 'list-upload-mock',
  templateUrl: './list-upload.component.html'
})
export class ListUploadComponentMock implements OnInit {
 
  fileUploads: any[];
 
  constructor(private uploadService: UploadFileServiceMock) { }
 
  ngOnInit() {
    // Use snapshotChanges().map() to store the key
    this.uploadService.getFileUploads(6).snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    }).subscribe(fileUploads => {
      this.fileUploads = fileUploads;
    });
  }
 
}