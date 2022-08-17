const semesterCount = async (semList) => {
  let sems = { semesters: [], count: 0 }

  for (let i = 3; i < semList.length; i++) {
    const current = semList[i]
    if (!sems.semesters.includes(current[1])) {
      sems.semesters.push(current[1])
      sems.count++
    }
  }

  return sems
}

module.exports = semesterCount
