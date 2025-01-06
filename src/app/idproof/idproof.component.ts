import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ViewIDProofComponent } from '../view-idproof/view-idproof.component';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-idproof',
  standalone: true,
  imports: [],
  templateUrl: './idproof.component.html',
  styleUrl: './idproof.component.css'
})
export class IDProofComponent {
  isIDProofComponentVisible : boolean = false;
  IDProof : any [] =[];
  constructor(private http: HttpClient){
    this.GetIDProof();
  }

  GetIDProof(){
    debugger;
    this.http.get("https://localhost:7007/api/IDProof").subscribe((result: any)=>{
      this.IDProof = result;
    })
  }
}
