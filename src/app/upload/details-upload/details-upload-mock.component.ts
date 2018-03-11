import { Component, OnInit, Input } from '@angular/core';
import { FileUpload } from '../fileupload';
import { UploadFileServiceMock } from '../upload-file-mock.service';
 
@Component({
  selector: 'details-upload-mock',
  templateUrl: './details-upload.component.html',
})
export class DetailsUploadComponentMock implements OnInit {
 
  @Input() fileUpload: FileUpload;
 
  constructor(private uploadService: UploadFileServiceMock) { }
 
  ngOnInit() {
  }
 
  deleteFileUpload(fileUpload) {
    this.uploadService.deleteFileUpload(fileUpload);
  }
}