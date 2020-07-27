var newArray = [
    [12, 13, 55],
    ['a', 'b', 'c'],
    [3, 5, 8],
];
var myData = newArray[1][1];
console.log(myData);

newArray.push([111, 222, 333]);
console.log(newArray);

var removeArray = newArray.pop();
console.log(newArray);

var shiftArray = newArray.shift();
console.log(newArray);

newArray.unshift(["aaa", "bbb"]);
console.log(newArray);

function letsAdd(a, b) {
    console.log(a + b);
}

letsAdd(10, 15);

var outerWear = 'Tshirt';

function myOutfit() {
    var outerWear = 'gloves';
    outerWear += " best"
    return outerWear;
}

console.log(myOutfit());

function minusSeven(num) {
    return num - 7
}
console.log(minusSeven(10));

function multiply(num) {
    return num * 5;
}
console.log(multiply(5));

sum = 0

function addFive() {
    sum += 5
    return sum;
}
console.log(addFive());

var change = 0

function changed(num) {
    return (num - 5) / 2;
}
change = changed(10);
console.log(change);

function nextInLine(arr, item) {
    arr.push(item)
    return arr.shift();
}

var testArr = [1, 2, 3, 4, 5];

console.log("Before:" + JSON.stringify(testArr));
console.log("We pulled out " + nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

function testEqual(val) {
    if (val == 12) {
        return "Equal";
    }
    return "not equal";
}

console.log(testEqual(10))


function notEqual(val) {
    if (val != 5) {
        return "Not Equal";
    }
    return "Equal"
}

console.log(notEqual(5));

function greatThan(val) {
    if (val >= 25) {
        return "25 or Over";
    }
    if (val >= 10)
        return "10 or over";
}
console.log(greatThan(22));


function dualCheck(val) {
    if (val <= 50 && val >= 25) {
        return "yes";
    }
    return "no";
}
console.log(dualCheck(2))

function elseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    } else if (val < 5) {
        return "Smaller than 5";
    } else {
        return "Between 5 and 10"
    }
}
console.log(elseIf(1));

function testsize(num) {
    if (num < 5) {
        return "tiny"
    } else if (num < 10) {
        return "small"
    } else if (num < 15) {
        return "Medium"
    } else {
        return "Large"
    }

}
console.log(testsize(20));

var names = ["holeInOne", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home"]

function golfScore(par, strokes) {
    if (strokes == 1) {
        return names[0]
    } else if (strokes <= par - 2) {
        return names[1]
    } else if (strokes <= par - 1) {
        return names[2]
    } else if (strokes == par) {
        return names[3]
    } else if (strokes == par + 1) {
        return names[4]
    } else if (strokes == par + 2) {
        return names[5]
    } else if (strokes >= par + 3) {
        return names[6]
    }
}
console.log(golfScore(5, 4));

function returnBoo(a, b) {
    return a < b
}
console.log(returnBoo(1, 7));

function abTest(a, b) {
    if (a < 0 || b < 0) {
        return undefined
    }
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
console.log(abTest(1, 2));

var count = 0

function cc(card) {
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--
            break;

    }
    var holdbet = 'Hold'
    if (count > 0) {
        holdbet = 'bet'
    }
    return count + " " + holdbet;
}
cc(2);
cc('K');
cc(10);
cc('K');
cc('A');
console.log(cc(4))

var obo = {
    "firstname": "KK",
    "secondname": "B",
    "kids": 3,
    "friends": ["hh", "hk", "ff"]

};

var propvalue = obo.firstname;
var namevalue = obo.secondname;
var bacha = obo["kids"];
var dost = obo['friends'];

var myDog = {
    name: "pappu",
    height: 1,
    colour: "black",
};
myDog.name = "munna";
myDog.type = "bulldog";
delete myDog.type;
console.log(myDog);

function phoneticLookup(val) {
    var result = "";

    var lookUp = {
        "alpha": "Adams",
        "beta": "boston",
        "charlie": "chicago",
        "delta": "denver",
        "echo": "easy",
    };
    result = lookUp[val];
    return result;
}
console.log(phoneticLookup("charlie"));

var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh",
};

function checkObj(checkProp) {
    if (myObj.hasOwnProperty(checkProp)) {
        return myObj[checkProp];
    } else {
        return "Not Found"
    }
}
console.log(checkObj("hello"));

var musicobj = {
    artist: "sonu",
    release_year: 1999,
    title: "dil se",
    formats: ["cd", "cassette", "floppy"],
}
var showartist = musicobj.artist;
console.log(showartist);

var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack",
        }
    }
}
var gloveBoxContent = myStorage.car.inside["glove box"];
console.log(gloveBoxContent);

var myPlants = [{
        type: "flowers",
        list: ["rose", "geranium", "laveander"]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }

]

var secondTree = myPlants[1].list[1];
console.log(secondTree);

var collection = {
    "2548": {
        "album": "Slippery when",
        "artist": "bon jovi",
        "tracks": ["Let it rock", "You give love a bad"]
    },
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": ["Little Red", "1999"]
    },
    "1245": {
        "artist": "Rob",
        "tracks": []

    },
    "5489": {
        "album": "ABBA"
    }
};

var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value) {
    if (value === "") {
        delete collection[id][prop];
    } else if (prop === "tracks") {
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    } else {
        collection[id][prop] = value;
    }
    return collection;

}
updateRecords(2468, "tracks", "nayaWala");
console.log(updateRecords(5489, "artist", "ABBA "));

var myArray = [];
var i = 0;
while (i < 5) {
    myArray.push(i);
    i++

}
console.log(myArray);

var newArray = [];
for (var i = 10; i > 0; i -= 1) {
    newArray.push(i);
}
console.log(newArray);

var myArr = [1, 2, 3, 4, 5];
var totalArray = 0;
for (var i = 0; i < myArr.length; i++) {
    totalArray += myArr[i]
}
console.log(totalArray);

function multiplyAll(arr) {
    var product = 1;
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }
    }
    return product;
}

var product = multiplyAll([
    [1, 2],
    [3, 4],
    [5, 6, 7]
]);
console.log(product);