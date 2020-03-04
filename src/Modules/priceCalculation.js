const priceCalculation = (height, width, type, dimensions, driver, axle) => {
  let minCost = 18.76
  let tapes_parathiro = 0.90
  let tapes_mpalkonoporta = 0.90
  let kouti, plaina, odhg, akson, totalCost

  if (type === 'isia' && dimensions === '14x17') {
    kouti = 13.06
    plaina = 4.30
    if (driver === true) {
      odhg = 3.76
    }
    if (axle === true) {
      akson = 2.50
    }
  }
  if (type === 'isia' && dimensions === '14x19') {
    kouti = 11.10
    plaina = 4.16
    if (driver === true) {
      odhg = 3.76
    }
    if (axle === true) {
      akson = 2.50
    }
  }
  if (type === 'isia' && dimensions === '17x17') {
    kouti = 14.70
    plaina = 5.17
    if (driver === true) {
      odhg = 3.76
    }
    if (axle === true) {
      akson = 2.50
    }
  }
  if (type === 'isia' && dimensions === '18x19') {
    kouti = 14.70
    plaina = 5.17
    if (driver === true) {
      odhg = 3.76
    }
    if (axle === true) {
      akson = 2.50
    }
  }
  if (type === 'isia' && dimensions === '20x20') {
    kouti = 18.88
    plaina = 7.30
    if (driver === true) {
      odhg = 3.76
    }
    if (axle === true) {
      akson = 2.50
    }
  }
  if (type === 'pompe' && dimensions === '14x19') {
    kouti = 11.53
    plaina = 4.20
    if (driver === true) {
      odhg = 1.83
    }
    if (axle === true) {
      akson = 1.30
    }
  }
  if (type === 'pompe' && dimensions === '15x18') {
    kouti = 14.60
    plaina = 4.80
    if (driver === true) {
      odhg = 1.83
    }
    if (axle === true) {
      akson = 1.30
    }
  }
  if (type === 'pompe' && dimensions === '18x19') {
    kouti = 14.60
    plaina = 4.80
    if (driver === true) {
      odhg = 1.83
    }
    if (axle === true) {
      akson = 1.30
    }
  }
  if (type === 'pompe' && dimensions === '20x20') {
    kouti = 19.07
    plaina = 7.80
    if (driver === true) {
      odhg = 1.83
    }
    if (axle === true) {
      akson = 1.30
    }
  }

  totalCost = minCost + tapes_parathiro + plaina + (height * kouti) + (height * akson) + (width * odhg) + (10 * height * width)

  return totalCost.toFixed(2)
}

export { priceCalculation }
