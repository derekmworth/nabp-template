import { Component, OnInit } from '@angular/core';

// For downloading PDF file
declare var require: any
const FileSaver = require('file-saver');

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  // Download/Save PDF method
  downloadPdf() {
    const pdfUrl = '../../../assets/pdf/hobbit-chapter-1.pdf';
    const pdfName = 'The Hobbit, Page One';

    FileSaver.saveAs(pdfUrl, pdfName);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
