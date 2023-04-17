"use strict";

function Parser(string){
    //let [ _, ksiega, rozdzial, wers ] = /(\w+)(\d)()/.exec(string);
    let [ _, ksiega, rozdzial, wers ] = /(^\d*\w+[a-zA-Z])(\d*)()/.exec(string);
    //console.log({ string, _, ksiega, rozdzial, wers });
    return { _, ksiega, rozdzial, wers };
}

export default Parser;
