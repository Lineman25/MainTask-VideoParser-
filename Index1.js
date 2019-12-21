
/* eslint-disable no-console */
/*
var Nightmare = require('nightmare')
var nightmare = Nightmare({ show: true,
certificateSubjectName: 'tester'})
nightmare
   .viewport(800, 600)
   .useragent('hoge2')
  .goto('https://www.udemy.com/course/learn-flutter-dart-to-build-ios-android-apps/?src=sac&kw=Learn+Flutter+%26+dart')
  .click('preview-course')// <div class="play-button styles--play-button--akRnc"></div>
  .wait('#main')
  .evaluate(function() {
    return document.querySelector('#main .searchCenterMiddle li a').href
  })
  .end()
  .then(function(result) {
    console.log(result)
  })
  .catch(function(error) {
    console.error('Search failed:', error)
  })*/

const puppeteer = require('puppeteer');
const osmosis = require('osmosis');
var url;

const chromeOptions = {
  slowMo:300,
  headless:false,
  defaultViewport: null};
(async function main() {
  const browser = await puppeteer.launch(chromeOptions);
  const page = await browser.newPage();
  await page.goto('https://www.udemy.com/course/learn-flutter-dart-to-build-ios-android-apps/');
  await page.focus('.preview-text');
  await page.click('.preview-text');
  page.setDefaultTimeout(500);
  await page.waitFor(2000);
  await page.click('.styles--preview__title--1WiOA');
    await page.waitFor(10000);
    await page.evaluate(() => {
    var url = document.querySelectorAll('.vjs-tech');
});
const page1 = await browser.newPage();
await page1.goto('https://a.udemycdn.com/2019-07-02_07-41-01-4f82a6c529143333779a40684f7ba2d0/WebHD_720p.mp4?nva=20191219191144&token=04236011a07e7fc3c2e6d');
console.log(url);
})()

