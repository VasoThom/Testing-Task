const { aufgabe1, aufgabe2 } = require("./index");

test("aufgabe1 is a function", () => {
  expect(aufgabe1).toBeInstanceOf(Function);
});

test("Werden keine Argumente übergeben, soll die Funktion false zurückgeben", () => {
  expect(aufgabe1()).toBe(false);
});
test("Wird ein Argument übergeben, soll es mit sich selbst multipliziert und das Ergebnis zurückgegeben werden a*a", () => {
  expect(aufgabe1(5)).toBe(25);
});
test("Ist das Argument keine ganze Zahl (Integer), soll  false zurückgegeben werden.", () => {
  expect(aufgabe1(5.05)).toBe(false);
});
test("Werden zwei Argumente übergeben, sollen sie multipliziert und das Ergebnis zurückgegeben werden (a * b)", () => {
  expect(aufgabe1(5, 2)).toBe(10);
});
test("Werden beliebig viele Argumente übergeben, sollen sie alle multipliziert und das Ergebnis zurückgegeben werden (a * b * c * ...).", () => {
  expect(aufgabe1(2, 2, 2)).toBe(8);
});

test("aufgabe2 is a function", () => {
  expect(aufgabe2).toBeInstanceOf(Function);
});
test("Die Funktion benötigt exakt zwei Argumente. Werden sie nicht übergeben, soll ein Fehler geworfen werden.", () => {
  expect(() => aufgabe2(3)).toThrow(Error);
});
test("2. Die Argumente müssen positive Zahlen sein. Falls nicht, soll ein Fehler geworfen werden", () => {
  expect(() => aufgabe2(-5, 5)).toThrow(Error);
});
test(" Mit den zwei Argumenten soll der Satz des Pythagoras abgebildet werden: a^2 + b^2 = c^2. Die Funktion soll c ausgeben.", () => {
  expect(aufgabe2(3, 4)).toBe(5);
});
