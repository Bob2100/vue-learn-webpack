let p = {
  name: 'bob',
  msg: 'dd123',
  friends: ['jack', 'rose'],
  sayHello() {
    let s = {
      msg: 'dd',
      ss: () => {
        console.log(this.msg);
      }
    }
    s.ss();
  },
  sayHello2: () => {
    console.log(this.name);
  }
}
p.sayHello();
// p.sayHello2();