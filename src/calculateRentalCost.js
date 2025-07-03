/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dayCost = 40;

  if (days > 0 && days < 3) {
    return days * dayCost;
  }

  if (days >= 3 && days < 7) {
    return days * dayCost - 20;
  }

  if (days >= 7) {
    return days * dayCost - 50;
  } else {
    return 0;
  }
}

module.exports = calculateRentalCost;
