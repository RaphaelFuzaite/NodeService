﻿/// <reference path="_references.js" />
module('Calculator Test Suite', {
    setup: function () {
        calculatorNamespace.initialize();
    }
});

test("Initialize Test", function () {
    expect(2);
    var expected = '0';

    equal($("#txtInput").val(), expected, 'Expected value: ' + expected + ' Actual expected ' + $("#txtInput").val());
    equal($("#txtResult").val(), expected, 'Expected value: ' + expected + ' Actual expected ' + $("#txtResult").val());
});

test("Btn5 Click Test", function () {
    expect(1);
    $("#btn5").triggerHandler('click');
    var expected = '5';
    equal($("#txtInput").val(), expected, 'Expeted value: ' + expected + ' Actual value: ' + $("#txtInput").val());
});

test("Button Click Test", function () {
    var buttonQuantity = 10;
    expect(buttonQuantity * 2);
    for (var i = 0; i < buttonQuantity; i++) {
        $("#btn" + i).triggerHandler('click');

        var result = $("#txtInput").val()[$("#txtInput").val().length - 1];
        var expected = String(i);
        equal(result, expected, 'Expected value: ' + expected + ' Actual value: ' + result);

        var expetedLength = i < 2 ? 1 : i;
        equal($("#txtInput").val().length, expetedLength, 'Expected string length: ' + expetedLength + ' Actual value: ' + $("#txtInput").val().length);
    }
});

test("Add Test", function () {
    expect(2);
    $("#txtInput").val('10');
    $("#txtResult").val('20');
    $("#btnPlus").triggerHandler('click');
    var expected = '30';
    equal($("#txtResult").val(), expected, 'Expected value: ' + expected + ' Actual value: ' + $("#txtResult").val());
    expected = '0';
    equal($("#txtInput").val(), expected, 'Expeted value: ' + expected + ' Actual value: ' + $("#txtInput").val());
});

test("Subtract Test", function () {
    expect(2);
    $("#txtInput").val('10');
    $("#txtResult").val('20');
    $("#btnMinus").triggerHandler('click');
    var expected = '10';
    equal($("#txtResult").val(), expected, 'Expected value: ' + expected + ' Actual value: ' + $("#txtResult").val());
    expected = '0';
    equal($("#txtInput").val(), expected, 'Expeted value: ' + expected + ' Actual value: ' + $("#txtInput").val());
});

test("Clear Entry Test", function () {
    expect(1);
    $("#txtInput").val('10');
    $("#btnClearEntry").triggerHandler('click');

    var expected = '0';
    equal($("#txtInput").val(), expected, 'Expeted value: ' + expected + ' Actual value: ' + $("#txtInput").val());
});

test("Clear Test", function () {
    expect(2);
    $("#txtInput").val('10');
    $("#txtResult").val('20');
    $("#btnClear").triggerHandler('click');

    var expected = '0';
    equal($("#txtInput").val(), expected, 'Expeted value: ' + expected + ' Actual value: ' + $("#txtInput").val());
    equal($("#txtResult").val(), expected, 'Expected value: ' + expected + ' Actual value: ' + $("#txtResult").val());
});