class Toast {
  private _title;
  private _uuid;

  public constructor(title: string) {
    this._title = title;
    this._uuid = crypto.randomUUID();
  }

  public get title() {
    return this._title;
  }

  public get uuid() {
    return this._uuid;
  }
}

export default Toast;
