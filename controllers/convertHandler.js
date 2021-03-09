function ConvertHandler() {
  // regex variables needed throughout these functions
  let duplicateSlashRegex = /(\/).*?\1/;
  let hasNumberRegex = /(\d)/;
  let onlyLettersRegex = /[a-zA-Z]/;
  let ridsEverythingBeforeLetterRegex = /[^a-zA-z]+?(?=[a-zA-Z])/;

  this.getNum = (input) => {
    // Splits string at first letter. (an array)
    let result = input.split(onlyLettersRegex);

    // If number is a double fraction
    if (duplicateSlashRegex.test(result[0])) {
      return "invalid number";
    }
    // if there is no number entered. Just a unit. Ex: kg
    else if (!hasNumberRegex.test(result[0])) {
      return 1;
    }
    // If the number is a fraction
    else if (input.includes("/")) {
      let evaluatedFraction = result[0].split("/").reduce((n, d) => n / d);
      return evaluatedFraction;
    }
    // If number is integer or decimal (normal)
    else {
      return result[0]; // Return the number in the array.
    }
  };

  this.getUnit = (input) => {
    // returns string with only the letters in the user's input
    unit = input.replace(ridsEverythingBeforeLetterRegex, "");

    let arrayOfUnits = [
      "gal",
      "l",
      "mi",
      "km",
      "lbs",
      "kg",
      "GAL",
      "L",
      "MI",
      "KM",
      "LBS",
      "KG",
    ];
    if (arrayOfUnits.indexOf(unit) > -1) {
      // If unit is l for liter change to uppercase otherwise change to lowercase
      return unit == "l" ? unit.toUpperCase() : unit.toLowerCase();
    } else {
      return "invalid unit";
    }
  };

  this.getReturnUnit = function (initUnit) {
    let result;
    switch (initUnit) {
      case "gal":
        result = "L";
        break;
      case "l":
        result = "gal";
        break;
      case "L":
        result = "gal";
        break;
      case "mi":
        result = "km";
        break;
      case "km":
        result = "mi";
        break;
      case "lbs":
        result = "kg";
        break;
      case "kg":
        result = "lbs";
        break;
    }
    return result;
  };

  this.spellOutUnit = (unit) => {
    let spelledOutResult;
    switch (unit) {
      case "gal":
        spelledOutResult = "gallons";
        break;
      case "lbs":
        spelledOutResult = "pounds";
        break;
      case "mi":
        spelledOutResult = "miles";
        break;
      case "l":
        spelledOutResult = "liters";
        break;
      case "L":
        spelledOutResult = "liters";
        break;
      case "km":
        spelledOutResult = "kilometers";
        break;
      case "kg":
        spelledOutResult = "kilograms";
        break;
    }
    return spelledOutResult;
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let convertedResult;

    if (initUnit == "gal" || initUnit == "GAL") {
      // Converts gal to L
      convertedResult = initNum * galToL;
    } else if (initUnit == "L" || initUnit == "l") {
      convertedResult = initNum / galToL;
    } else if (initUnit == "lbs") {
      convertedResult = initNum * lbsToKg;
    } else if (initUnit == "kg") {
      convertedResult = initNum / lbsToKg;
    } else if (initUnit == "mi") {
      convertedResult = initNum * miToKm;
    } else if (initUnit == "km") {
      convertedResult = initNum / miToKm;
    } else {
      convertedResult = "invalid unit";
    }
    return convertedResult.toFixed(5);
  };

  this.getString = (initNum, initUnit, returnNum, returnUnit) => {
    let result;
    // result = "string";
    return result;
  };
}

module.exports = ConvertHandler;
