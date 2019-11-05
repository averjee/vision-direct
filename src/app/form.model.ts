export class UserModel {
  constructor(
    public name: string,
    public surname: string,
    public email: string,
    //phoneNumber is a string to allow country code prefix e.g. +44
    public phoneNumber: string,
    public age: number,
    public city: string
  ) { }
}
