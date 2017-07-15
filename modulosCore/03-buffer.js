'use strict'

var buf = new Buffer(100),
	buf2 = new Buffer(26),
	sttr = '\u00bd + \u00bc = \u00be'


buf.write('abcd',0,4,'ascii')

console.log(
	buf,
	buf.toString('ascii'),
	sttr,
	sttr.length,
	Buffer.byteLength(sttr,'UTF-8'),
	buf2.length

	)	


for(var i = 0; i<buf2.length; i++)
{
	buf2[i] = i+97

}

console.log(buf2.toString('ascii'))