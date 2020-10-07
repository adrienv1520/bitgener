const path = require('path');
const bitgener = require('../../lib');

(async () => {
  try {
    const ret = await bitgener({
      data: 'Bitgener',
      type: 'datamatrix',
      output: path.join(__dirname, 'bitgener.svg'),
      encoding: 'utf8',
      rectangular: true,
      padding: 0,
      width: 250,
      height: 250,
      original2DSize: false,
      color: 'black',
      opacity: 1,
      bgColor: '#F7931A',
      bgOpacity: 0,
      hri: {
        show: true,
        fontFamily: 'Courier New',
        fontSize: 15,
        marginTop: 0,
      },
    });

    console.log(ret);
  } catch (e) {
    console.error(e.toString());
  }
})();
