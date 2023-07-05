it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({ amount: 41445, years: 6, rate: 7.1 })).toEqual('24521.63');
});

it("should return a result with 2 decimal places", function () {
  expect(calculateMonthlyPayment({ amount: 10000, years: 5, rate: 6 })).toEqual('5000.00');
});

/// etc
