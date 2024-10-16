"use strict";

var processPayment = function processPayment(req, res) {
  var _req$body = req.body,
      swiftCode = _req$body.swiftCode,
      amount = _req$body.amount,
      currency = _req$body.currency,
      beneficiaryName = _req$body.beneficiaryName; // Validate SWIFT code

  var swiftRegex = /^[A-Z]{4}[A-Z]{2}[A-Z0-9]{2}([A-Z0-9]{3})?$/;

  if (!swiftRegex.test(swiftCode)) {
    return res.status(400).json({
      message: 'Invalid SWIFT code'
    });
  } // Validate amount


  if (amount <= 0) {
    return res.status(400).json({
      message: 'Invalid amount'
    });
  } // Process payment (mock)


  res.status(200).json({
    message: 'Payment processed successfully',
    transactionId: '12345'
  });
};

module.exports = {
  processPayment: processPayment
};
//# sourceMappingURL=payments.dev.js.map
