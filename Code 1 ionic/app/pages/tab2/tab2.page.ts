import { Component, OnInit } from "@angular/core";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-tab2",
  templateUrl: "./tab2.page.html",
  styleUrls: ["./tab2.page.scss"],
})
export class Tab2Page implements OnInit {
  public form = [{ val: "Prioridade", isChecked: false }];

  constructor(private alertCtrl: AlertController) {}
  async presentAlert() {
    const alert = await this.alertCtrl.create({
      cssClass: "alertatab21",
      header:
        "Agendamento Confirmado. A senha estará disponivel em seus agendamentos. ",
      subHeader: "__________________________",
      message: "<b>FI020</b>",
      mode: "ios",
      buttons: [
        {
          text: "OK",
          cssClass: "buttoncss",
        },
      ],
    });

    await alert.present();
  }

  async presentAlert2() {
    const alert = await this.alertCtrl.create({
      cssClass: "alertatab22",
      header: "heyoh",
      subHeader: "Subtitle",
      message: "james gay",
      buttons: ["Com certeza é"],
    });

    await alert.present();
  }

  ngOnInit() {}
}
