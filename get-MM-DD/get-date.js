'use strict';

function getDate(today) {
    let now = new Date();
    if (today) {
        now = new Date(today);
    }
    return today = [
        String(now.getMonth() + 1).padStart(2, "0"),
        String(now.getDate()).padStart(2, "0"),
    ].join("-");
};

module.exports = getDate;
