const puppeteer = require('puppeteer')

async function getData(regNumber) {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('http://lms.uaf.edu.pk/login/index.php')

  await page.type('#REG', regNumber)

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

  await browser.close()

  return data
}

module.exports = getData
