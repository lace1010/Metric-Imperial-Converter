/*
 *
 *
 *       FILL IN EACH UNIT TEST BELOW COMPLETELY
 *       -----[Keep the tests in the same order!]----
 *       (if additional are added, keep them at the very end!)
 */

const chai = require("chai");
let assert = chai.assert;
const ConvertHandler = require("../controllers/convertHandler.js");

let convertHandler = new ConvertHandler();

suite("Unit Tests", () => {
  suite("Function convertHandler.getNum(input)", () => {
    test("Whole number input", (done) => {
      let input = "32L";
      assert.equal(convertHandler.getNum(input), 32);
      done();
    });

    test("Decimal Input", (done) => {
      let input = "32.3mi";
      assert.equal(convertHandler.getNum(input), 32.3);
      done();
    });

    test("Fractional Input", (done) => {
      let input = "32/5kg";
      assert.equal(convertHandler.getNum(input), 32 / 5);
      done();
    });

    test("Fractional Input w/ Decimal", (done) => {
      let input = "32.3/5kg";
      assert.equal(convertHandler.getNum(input), 32.3 / 5);
      done();
    });

    test("Invalid Input (double fraction)", (done) => {
      let input = "32.3/5/3kg";
      assert.equal(convertHandler.getNum(input), "invalid number");
      done();
    });

    test("No Numerical Input", (done) => {
      let input = "kg";
      assert.equal(convertHandler.getNum(input), 1);
      done();
    });
  });

  suite("Function convertHandler.getUnit(input)", () => {
    test("For Each Valid Unit Inputs", (done) => {
      let input = [
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
      input.forEach((ele) => {
        assert.equal(
          convertHandler.getUnit(ele),
          ele == "l" || ele == "L" ? ele.toUpperCase() : ele.toLowerCase()
        );
      });
      done();
    });

    test("Unknown Unit Input", (done) => {
      let input = "bishboy";
      assert.equal(convertHandler.getUnit(input), "invalid unit");
      done();
    });
  });

  suite("Function convertHandler.getReturnUnit(initUnit)", () => {
    test("For Each Valid Unit Inputs", (done) => {
      let input = ["gal", "l", "mi", "km", "lbs", "kg"];
      let expect = ["L", "gal", "km", "mi", "kg", "lbs"];
      input.forEach((ele, i) => {
        assert.equal(convertHandler.getReturnUnit(ele), expect[i]);
      });
      done();
    });
  });

  suite("Function convertHandler.spellOutUnit(unit)", () => {
    test("For Each Valid Unit Inputs", (done) => {
      let input = ["l", "gal", "km", "mi", "kg", "lbs"];
      let expect = [
        "liters",
        "gallons",
        "kilometers",
        "miles",
        "kilograms",
        "pounds",
      ];
      input.forEach((ele, i) => {
        assert.equal(convertHandler.spellOutUnit(ele), expect[i]);
      });
      done();
    });
  });

  suite("Function convertHandler.convert(num, unit)", () => {
    test("Gal to L", (done) => {
      let input = [5, "gal"];
      let expected = 18.9271;
      assert.approximately(
        convertHandler.convert(input[0], input[1]),
        expected,
        0.1
      ); //0.1 tolerance
      done();
    });

    test("L to Gal", (done) => {
      let input = [5, "L"];
      let expected = 1.3208608842899447;
      assert.approximately(
        convertHandler.convert(input[0], input[1]),
        expected,
        0.1
      ); //0.1 tolerance
      done();
    });

    test("Mi to Km", (done) => {
      let input = [5, "mi"];
      let expected = 8.0467;
      assert.approximately(
        convertHandler.convert(input[0], input[1]),
        expected,
        0.1
      ); //0.1 tolerance
      done();
    });

    test("Km to Mi", (done) => {
      let input = [5, "km"];
      let expected = 3.106863683249034;
      assert.approximately(
        convertHandler.convert(input[0], input[1]),
        expected,
        0.1
      ); //0.1 tolerance
      done();
    });

    test("Lbs to Kg", (done) => {
      let input = [5, "lbs"];
      let expected = 2.26796;
      assert.approximately(
        convertHandler.convert(input[0], input[1]),
        expected,
        0.1
      ); //0.1 tolerance
      done();
    });

    test("Kg to Lbs", (done) => {
      let input = [5, "kg"];
      let expected = 11.023122100918888;
      assert.approximately(
        convertHandler.convert(input[0], input[1]),
        expected,
        0.1
      ); //0.1 tolerance
      done();
    });
  });
});
