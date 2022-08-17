const e = require('express')
const { text } = require('express')
const puppeteer = require('puppeteer')
const { Button } = require('selenium-webdriver')

async function run() {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('http://lms.uaf.edu.pk/login/index.php')

  //   let data = await page.evaluate(() => {
  //     // let input = document.getElementById('REG') // gets the input field
  //     // let btn = document.querySelector('input[value=Result]') //gets the button
  //   })

  await page.type('#REG', '2020-ag-8322')

  await Promise.all([
    page.click('input[value=Result]'),
    page.waitForNavigation(),
  ])

  let data = await page.evaluate(() => {
    let values = []
    let tableRows = document.querySelectorAll('tr')

    tableRows.forEach((row) => {
      let children = {}
      let index = 0
      row.childNodes.forEach((child) => {
        if (child.innerText != null) {
          children[index] = child.innerText
          index++
        }
      })
      values.push(children)
    })

    return values
  })

  return data

  await browser.close()
}

module.exports = run
