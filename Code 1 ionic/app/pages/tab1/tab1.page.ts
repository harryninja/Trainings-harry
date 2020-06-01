import { Component, OnInit } from "@angular/core";
import { AlertController } from "@ionic/angular";
import { ToastController } from "@ionic/angular";

@Component({
  selector: "app-tab1",
  templateUrl: "./tab1.page.html",
  styleUrls: ["./tab1.page.scss"],
})
export class Tab1Page implements OnInit {
  constructor(
    private alertCtrl: AlertController,
    public toastController: ToastController
  ) {}

  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      header: "",
      message: "<b>Tem certeza que deseja <br>cancelar?</b>",
      position: "middle",
      color: "primary",
      cssClass: "my-custom-modal-css",
      mode: "ios",
      buttons: [
        {
          text: "Sim",
          cssClass: "bota",
          handler: () => {
            console.log("Favorite clicked");
          },
        },
        {
          text: "Não",
          role: "cancel",
          cssClass: "botal",
          handler: () => {
            console.log("Cancel clicked");
          },
        },
      ],
    });
    toast.present();
  }

  ngOnInit() {}
}
