import { Component, Input, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})

export class TestComponent implements OnInit{

  ngOnInit(): void {
    
  }

 

  constructor(
    private router: Router
  ) { 
  
  }

  irSucursales() {
    this.router.navigate(['/test2']);
  }



  }

  
  


