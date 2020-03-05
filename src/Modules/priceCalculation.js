const priceCalculation = (height, width, type, dimensions, driver, axle) => {
  let minCost = 18.76
  let tapes_parathiro = 0.90
  let tapes_mpalkonoporta = 0.90
  let kouti = 0
  let plaina = 0
  let odhg = 0
  let akson = 0
  let totalCost

  if (type === 'isio') {
    if (dimensions === '14x17') {
      kouti = 13.06
      plaina = 4.30
      driver === true && (odhg = 3.76)
      axle === true && (akson = 2.50)
    }
    else if (dimensions === '14x19') {
      kouti = 11.10
      plaina = 4.16
      driver === true && (odhg = 3.76)
      axle === true && (akson = 2.50)
    }
    else if (dimensions === '17x17') {
      kouti = 14.70
      plaina = 5.17
      driver === true && (odhg = 3.76)
      axle === true && (akson = 2.50)
    }
    else if (dimensions === '18x19') {
      kouti = 14.70
      plaina = 5.17
      driver === true && (odhg = 3.76)
      axle === true && (akson = 2.50)
    }
    else if (dimensions === '20.6x20.6') {
      kouti = 18.88
      plaina = 7.30
      driver === true && (odhg = 3.76)
      axle === true && (akson = 2.50)
    }
  }
  else if (type === 'pompe') {
    if (dimensions === '14x19') {
      kouti = 11.53
      plaina = 4.20
      driver === true && (odhg = 1.83)
      axle === true && (akson = 1.30)
    }
    else if (dimensions === '15.5x18.5') {
      kouti = 14.60
      plaina = 4.80
      driver === true && (odhg = 1.83)
      axle === true && (akson = 1.30)
    }
    else if (dimensions === '18x19') {
      kouti = 14.60
      plaina = 4.80
      driver === true && (odhg = 1.83)
      axle === true && (akson = 1.30)
    }
    else if (dimensions === '20.6x20.6') {
      kouti = 19.07
      plaina = 7.80
      driver === true && (odhg = 1.83)
      axle === true && (akson = 1.30)
    }
  }

  totalCost = minCost + tapes_parathiro + plaina + (height * kouti) + (height * akson) + (width * odhg) + (10 * height * width)

  return totalCost.toFixed(2)
}

export { priceCalculation }
