const qualityPoints = require('../utils/qpHelper')
const {
  creditsCalculator,
  gpaCalculator,
  cgpaCalculator,
} = require('../utils/semesterCount')
const data = require('../data')

test('handles two credit subjects', async () => {
  const subject = {
    0: '13',
    1: 'Winter Semester 2020-2021',
    2: 'Naveed Irshad',
    3: 'SSH-302',
    4: 'Pakistan Studies',
    5: '2(2-0)',
    6: '9',
    7: '4',
    8: '22',
    9: '0',
    10: '35',
    11: 'A',
  }
  expect(await qualityPoints(subject)).toBe(8)
})

test('handles 3 credit subjects', async () => {
  const subject = {
    0: '18',
    1: 'Winter Semester 2021-2022',
    2: 'Hassan Tariq',
    3: 'CS-305',
    4: 'Introduction to Information and Communication Technologies',
    5: '3(2-1)',
    6: '11.6',
    7: '3',
    8: '21',
    9: '14',
    10: '50',
    11: 'A',
  }
  expect(await qualityPoints(subject)).toBe(12)
})

test('tests if credit calculator works correctly', () => {
  const subject = {
    0: '18',
    1: 'Winter Semester 2021-2022',
    2: 'Hassan Tariq',
    3: 'CS-305',
    4: 'Introduction to Information and Communication Technologies',
    5: '3(2-1)',
    6: '11.6',
    7: '3',
    8: '21',
    9: '14',
    10: '50',
    11: 'A',
  }
  expect(creditsCalculator(subject)).toBe(3)
})
