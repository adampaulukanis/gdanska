'use strict';

function getDate(today) {
    let now = new Date();
    if (today) {
        now = new Date(today);
    }
    today = [
        String(now.getMonth() + 1).padStart(2, "0"),
        String(now.getDate()).padStart(2, "0"),
    ].join("-");

    return today;
};

module.exports = getDate;
