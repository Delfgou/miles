import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-against-the-void',
  templateUrl: './against-the-void.component.html',
  styleUrls: ['./against-the-void.component.css'],
})
export class AgainstTheVoidComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  public downloadPdf(name: String) {
    console.log(name)
    this.http
      .get(`../assets/documents/against-the-void/${name}.pdf`, { responseType: 'blob' })
      .subscribe((response) => {
        this.downLoadFile(response, 'application/pdf');
      });
  }

  public downloadZip() {
    this.http
      .get('../assets/documents/miles-download-folder.zip', {
        responseType: 'arraybuffer',
      })
      .subscribe((response) => {
        this.downLoadFile(response, 'application/zip');
      });
  }

  downLoadFile(data: any, type: string) {
    let blob = new Blob([data], { type: type });
    let url = window.URL.createObjectURL(blob);
    window.open(url);
  }
}
