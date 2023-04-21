"use strict";

/*
 * biblia.json wygląda tak:
 * rozdział: [
 *      wers0,
 *      wers1,
 *      ...
 *      wersN
 * ]
*/
function Parser(string, debug = false){
    //let re = /([\p{L}\p{N}]+)(,\d)*/gu;
    let re = /^([\p{L}\p{N}]+)(-\d+)*(,\d+)*(-\d+)*/gu;
    //let re = /^(\w+)(-\d+)*(,\d+)*(-\d+)*/gu;
    let [ _, rozdzial, rozdzialDo, wers, wersDo ] = re.exec(string);

    if (debug)
        console.log({ _, rozdzial, rozdzialDo, wers, wersDo });

    let rozdzialy = [ rozdzial ];
    let wersy = [];

    if (wers) {
        wers = wers.replace(",", "");
        wersy.push(wers);
    }

    return {
        _,
        rozdzialy,
        wersy,
    };
}

export default Parser;
