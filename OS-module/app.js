const os = require('os');

//info about user
const user = os.userInfo();
console.log(user);
/**
{
  uid: -1,
  gid: -1,
  username: 'prasa',
  homedir: 'C:\\Users\\prasa',
  shell: null
}
 */

//systen up time
console.log(`systen uptime - ${os.uptime()} in sec`);
/**
systen uptime - 884894 in sec
 */

//overall os functioality

const currentOs = {
    name:os.type(),
    release:os.release(),
    totaMem:os.totalmem(),
    freeMem:os.freemem(),
}
console.log(currentOs);
/* 
{
  name: 'Windows_NT',
  release: '10.0.19042',
  totaMem: 7461904384,
  freeMem: 1496203264
} */


