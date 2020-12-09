"use strict";
var labels = document.querySelectorAll('.form-control label');
labels.forEach(function (label) {
    label.innerHTML = label.innerText
        .split('')
        .map(function (letter, index) {
        return "<span style=\"transition-delay:" + index * 50 + "ms\">" + letter + "</span>";
    })
        .join('');
});