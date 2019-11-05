import { UserModel } from './form.model';

export class DataService {

  users: UserModel[] = [new UserModel("Joe", "Bloggs", "joebloggs@gmail.com", "071234567", 30, "London")];
  dataToEdit;
  indexToUpdate;

  getUsers() {
    return this.users;
  }
  addUser(data: UserModel) {
    return this.users.push(data);
  }
  deleteUser(user) {
    return this.users.splice(this.users.indexOf(user), 1);
  }
  editUser(editData, i) {
    this.setIndex(i);
    return this.dataToEdit = editData;
  }
  setIndex(i) {
    return this.indexToUpdate = i
  }

  updateUser(index, user) {
    return this.users.splice(index, 1, user);
  }
}
