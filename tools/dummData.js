import Admin from '../appServer/models/admin.model';

export default function () {
  Admin.count().exec((err, count) => {
    if (count > 0) {
      return;
    }

    
    const post1 = new Admin({ name: 'Mathew', fmno: 149592 });
    const post2 = new Admin({ name: 'Jefrin', fmno: 121548 });

    Admin.create([post1, post2], (error) => {
      if (!error) {
        // console.log('ready to go....');
      }
    });
  });
}