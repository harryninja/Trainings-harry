import { Component, OnInit } from "@angular/core";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-tab3",
  templateUrl: "./tab3.page.html",
  styleUrls: ["./tab3.page.scss"],
})
export class Tab3Page implements OnInit {
  public form = [{ val: "Prioridade", isChecked: false }];

  constructor(private alertCtrl: AlertController) {}
  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header:
        "Agendamento Confirmado. A senha estará disponivel em seus agendamentos.",
      subHeader: "__________________________",
      message: "<b>AC040</b>",
      mode: "ios",
      cssClass: "buttoncss",
      buttons: [
        {
          text: "OK",
        },
      ],
    });

    await alert.present();
  }
  async presentAlert2() {
    const alert = await this.alertCtrl.create({
      cssClass: "alertatab32",
      header: "heyoh",
      subHeader: "Subtitle",
      message: "This is an alert message.",
      buttons: ["OK"],
    });

    await alert.present();
  }
  ngOnInit() {}
  onSubmit() {}
}
