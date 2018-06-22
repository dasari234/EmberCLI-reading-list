import Route from '@ember/routing/route';
import db from '../utlis/db';

export default Route.extend({
  model() {
    return db.books();
  },
  actions: {
    addBook(book) {
      db.addBook(book);
      this.refresh();
    },
    removeBook(book) {
      db.removeBook(book);
      this.refresh();
    }

  }
});
