import { Component, OnInit, Input } from '@angular/core';
import { FileUpload } from '../fileupload';
import { UploadFileService } from 



'../upload-file.service';
 
@Component({
  selector: 'details-upload',
  templateUrl: './details-upload.component.html',
})
export class DetailsUploadComponent implements OnInit {
 
  @Input() fileUpload: FileUpload;
 
  constructor(private uploadService: UploadFileService) { }
 
  ngOnInit() {
  }
 
  deleteFileUpload(fileUpload) {
    this.uploadService.deleteFileUpload(fileUpload);
  }
}