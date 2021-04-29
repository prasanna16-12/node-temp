//file sysyem

const { readFileSync, writeFileSync } = require('fs');

const content_1 = readFileSync('./file-system/content.txt','utf-8');
const content_2 = readFileSync('./file-system/second.txt', 'utf-8');

console.log(`content file \n${content_1}\nsecond file \n${content_2}`);
/* content file
hello prasanna here in content folder
second file
this is second txt file */


writeFileSync(
    './file-system/result.txt',
`content of both file 
file one :
${content_1}
file two :
${content_2}`,
{flag: 'a'} // this flag will append data
)
// if file is present at this location then it will write (overwrite)other wise it will create new file at that location

/* o/p
content of both file
file one:
hello prasanna here in content folder
file two:
this is second txt file */