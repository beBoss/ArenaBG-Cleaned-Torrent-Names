// ==UserScript==
// @name          ArenaBG Cleaned Torrent Names
// @namespace     http://arenabg.com
// @description   Replace "." and "_" with blank space
// @include       http://arenabg.com/*
// @include       http://*.arenabg.com/
// @require       http://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js
// @author        beBoss
// @version       3.0
// ==/UserScript==

// Torrents page
$('tbody tr td:nth-child(2) div:nth-child(2) a').each(function () {
    $(this).text($(this).text().replace(/(?:(v\d+(?:\.\d+)+) *)?[._ -]+/g, "$1 "));
});

// Top 10
$('table.torrents-present.table-bordered.table-striped tbody tr td:nth-child(2) a').each(function () {
    $(this).text($(this).text().replace(/(?:(v\d+(?:\.\d+)+) *)?[._ -]+/g, "$1 "));
});

// Last for online watch with subtitles
$('table.torrents-online.table-bordered.table-striped tbody tr td:nth-child(2) a').each(function () {
    $(this).text($(this).text().replace(/(?:(v\d+(?:\.\d+)+) *)?[._ -]+/g, "$1 "));
});

// Torrent details link
$('table.table-striped.table-details tbody tr td:nth-child(2) a').each(function () {
    $(this).text($(this).text().replace(/(?:(v\d+(?:\.\d+)+) *)?[._ -]+/g, "$1 "));
});

// Torrent details link 2
$('.col-xs-12.col-sm-12.col-md-12.col-lg-12 .text-normal a').each(function () {
    $(this).text($(this).text().replace(/(?:(v\d+(?:\.\d+)+) *)?[._ -]+/g, "$1 "));
});
