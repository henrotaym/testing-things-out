import Toast from "./Toast";

class Toasteo {
  private _toasts: Toast[];
  private _name: string;

  public constructor() {
    console.log("constructing toasteo");
    this._toasts = [];
    this._name = Math.floor(Math.random() * 100).toFixed();
  }

  public addToast(title: string) {
    console.log("pushing toast");
    const toast = new Toast(title);
    this._toasts.push(toast);
  }

  public randomName() {
    this._name = Math.floor(Math.random() * 100).toFixed();
    console.log("random");
  }

  public get toasts() {
    return this._toasts;
  }

  public get name() {
    return this._name;
  }
}

export default Toasteo;
