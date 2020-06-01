import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agendar',
  templateUrl: './agendar.page.html',
  styleUrls: ['./agendar.page.scss'],
})
export class AgendarPage implements OnInit {
  public form = [
    { val: 'Piedade', isChecked: false },
    { val: 'Boa viagem', isChecked: false }
  ];
  constructor() { }

  ngOnInit() {
  }

}
