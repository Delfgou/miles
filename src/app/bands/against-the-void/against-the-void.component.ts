import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-against-the-void',
  templateUrl: './against-the-void.component.html',
  styleUrls: ['./against-the-void.component.css']
})
export class AgainstTheVoidComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  public download() {
    this.http.get('../assets/documents/miles_doc.pdf', {responseType: 'blob'})
    .subscribe(response => {
      this.downLoadFile(response, "application/pdf")
    });
  }

  downLoadFile(data: any, type: string) {
    let blob = new Blob([data], { type: type});
    let url = window.URL.createObjectURL(blob);
    window.open(url);
  }
}
