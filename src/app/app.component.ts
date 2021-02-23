import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  hasil = 0;
  a = 0;
  b = 0;
  tulisanOpen: String;
  // item = {
  //   nama: "jeruk",
  //   harga: 15000,
  //   satuan: "kg"
  // };
  item = [
    {
      nama: "jeruk",
      harga: 15000,
      satuan: "kg"
    },
    {
      nama: "apel",
      harga: 5000,
      satuan: "kg"
    }
  ];
  tampil: boolean = true;

  open() {
    this.tulisanOpen = "KEBUKAAA";
    alert("dibuka");
  }

  values = "";
  onKey(event: any) {
    this.values += event.target.value + "|";
  }
}
