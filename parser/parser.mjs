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
function Parser(string){
    let re = /([\p{L}\p{N}]+)(,\d)*/gu;
    let [ _, rozdzial, wers ] = re.exec(string);

    if (wers) wers = wers.replace(",", "");

    return {
        _,
        rozdzial,
        wers,
    };
}

export default Parser;
