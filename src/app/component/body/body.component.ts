import { Component, OnInit } from '@angular/core';

// For downloading PDF file
declare var require: any
const FileSaver = require('file-saver');

// Table static data
export interface nabpTests {
  description: string;
  preNaplex: string;
  preMpje: string;
  naplexPassed: string;
}

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  // Download/Save PDF method
  downloadPdf() {
    const pdfUrl = '../../../assets/pdf/hobbit-chapter-1.pdf';
    const pdfName = 'Test PDF Page';

    FileSaver.saveAs(pdfUrl, pdfName);
  }

  // Table static data
  displayedColumns: string[] = ['description', 'preNaplex', 'preMpje', 'naplexPassed'];

  dataSource = [
    { description: '', preNaplex: '14k', preMpje: '8k', naplexPassed: '85%'},
  ];

  constructor() { }


  ngOnInit(): void {
  }

}
