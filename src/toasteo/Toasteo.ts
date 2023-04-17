import Toast from "./Toast";

class Toasteo {
  private _toasts: Toast[];

  public constructor() {
    console.log("constructing toasteo");
    this._toasts = [];
  }

  public addToast(title: string) {
    console.log("pushing toast");
    const toast = new Toast(title);
    this._toasts.push(toast);
    setTimeout(() => this.deleteToast(toast.uuid), 5000);
  }

  public deleteToast(uuid: string) {
    const index = this._toasts.findIndex((toast) => toast.uuid === uuid);
    if (index === -1) return;
    this._toasts.splice(index, 1);
  }

  public get toasts() {
    return this._toasts;
  }
}

export default Toasteo;
