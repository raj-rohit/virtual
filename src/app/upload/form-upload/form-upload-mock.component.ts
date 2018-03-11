import { Component, OnInit } from '@angular/core';
import { UploadFileServiceMock } from '../upload-file-mock.service';
import { FileUpload } from '../fileupload';
 
@Component({
  selector: 'form-upload-mock',
  templateUrl: './form-upload.component.html',

})
export class FormUploadComponentMock implements OnInit {
 
  selectedFiles: FileList;
  currentFileUpload: FileUpload;
  progress: { percentage: number } = { percentage: 0 };
 
  constructor(private uploadService: UploadFileServiceMock) { }
 
  ngOnInit() {
  }
 
  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
 
  upload() {
    const file = this.selectedFiles.item(0);
    this.selectedFiles = undefined;
 
    this.currentFileUpload = new FileUpload(file);
    this.uploadService.pushFileToStorage(this.currentFileUpload, this.progress);
  }
}



