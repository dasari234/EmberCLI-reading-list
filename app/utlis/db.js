import EmberObject from '@ember/object';
import {copy} from '@ember/object/internals'

export default EmberObject.create({

  _records: [
    { title: "El Aleph" },
    { title: "2666" },
    { title: "The Black Swan" }
  ],

  books() {
    return copy(this._records);
  },

  addBook(book) {
    this._records.push(book);
  },

  removeBook(book) {
    const index = this._records.indexOf(book);
    this._records.splice(index, 1);
  }

});