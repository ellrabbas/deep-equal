function getIsDeepEqual(obj1, obj2) {

    if ((typeof obj1 === 'object') && (typeof obj2 === 'object')) {
        if (Object.keys(obj1).length == Object.keys(obj2).length) {
            if (Object.keys(obj1).sort().toString() === Object.keys(obj2).sort().toString()) {
                if (Object.values(obj1).length == Object.values(obj2).length) {
                    if (Object.values(obj1).sort().toString() === Object.values(obj2).sort().toString()) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }
                else {
                    return false;
                }
            }
            else {
                return false;
            }
        }


        else if (Object.keys(obj1) instanceof Object === Object.keys(obj2) instanceof Object) {
            let objects = [obj1, obj2];

            let value1 = objects[0];
            let value2 = objects[1];

            if (Object.keys(value1).length === Object.keys(value2).length) {
                if (Object.keys(value1).sort().toString() === Object.keys(value2).sort().toString()) {
                    if (Object.values(value1).length === Object.values(value2).length) {
                        if (Object.values(value1).sort().toString() === Object.values(value2).sort().toString()) {
                            return true;
                        }
                        else {
                            return false;
                        }
                    }
                    else {
                        return false;
                    }
                }
                else {
                    return false;
                }
            }

            else if (Array.isArray(obj1) == Array.isArray(obj2)) {
                if ((obj1.length == obj2.length) && (obj1.sort().toString() == obj2.sort().toString())) {
                    return true;
                }
                else {
                    return false;
                }
            }

            else {
                return false;
            }
        }

        else {
            return false;
        }
    }
    else {
        return false;
    }

}

let result1 = getIsDeepEqual({ a: 1, b: 2 }, { a: 1, b: 2 }); // true
let result2 = getIsDeepEqual({ a: 1, b: 2 }, { a: 1, b: 3 }); // false
let result3 = getIsDeepEqual({ a: 1, b: 2, obj: { test: "12" } }, { a: 1, b: 2, obj: { test: "12" } });  // true
let result4 = getIsDeepEqual({ at: 1, bt: 2, test: [1, 2], obj: { test: "12" } }, { at: 1, bt: 2, test: [1, 2, 3], obj: { test: "12", }, }); // true getIsDeepEqual( { at: 1, bt: 2, test: [1,2], obj: { test: "12" } } , { at: 1, bt: 2, test: [1,2,3], obj: { test: "12" } });  // false
let result5 = getIsDeepEqual({ at: 1, bt: 2, test: [1, 2, 3, { hi: "hi" }], obj: { test: "12" } }, { at: 1, bt: 2, test: [1, 2, 3, { hi: "hello" }], obj: { test: "12" } }); // false
let result6 = getIsDeepEqual({ at: 1, test: [1, 2, 3, { hi: "hello" }, null], obj: { test: "12" } }, { at: 1, test: [1, 2, 3, { hi: "hello" }, null], obj: { test: "12" } }); // true
let result7 = getIsDeepEqual({ test: [1, 2, 3, { hi: "hello" }, undefined], obj: { test: "12" } }, { test: [1, 2, 3, { hi: "hello" }, null], obj: { test: "12" } }); // false
console.log(result7);



//let result = GetisEqual({ a: { test: "45" }, }, { obj: { test: 47 }, });
// let result = GetisEqual({ a: 1, b: 2 }, { a: 1, b: 2 });
// let result = GetisEqual({ a: 1, b: 2 }, { a: 1, b: 3 });
// let result = GetisEqual({ at: 1, bt: 2, test: [1, 2, true, 123] }, { at: 1, bt: 2, test: [1, 2, true] }); // false
//console.log(result);
// let obj1 = { obj: { test: "hello" } };
// let obj2 = { obj: { test: "95" } };
// let merged = [obj1, obj2];
// let value1 = merged[0];
// let value2 = merged[1];
// console.log(value1)
// for (let val in value1) {
//     console.log(value1[val]);
// }

//console.log(Object.keys(value1).every(key => (obj1[key] == obj2[key])));
//console.log(merged);
// if ((typeof Object.keys(obj1) === 'object') && (typeof Object.keys(obj2) === 'object')) {
//     let objects = [obj1, obj2];

//     let value1 = objects[0];
//     let value2 = objects[1];

//     console.log(Array.isArray(Object.values(value1)));

//     if (Object.keys(value1).length == Object.keys(value2).length) {
//         if (Object.keys(value1).sort().toString() === Object.keys(value2).sort().toString()) {
//             if (Object.values(value1).length === Object.values(value2).length) {
//                 if (Object.values(value1).sort().toString() === Object.values(value2).sort().toString()) {
//                     if (Object.values(value1) === 'object')
//                         return true;
//                 }
//                 else {
//                     return false;
//                 }
//             }
//             else {
//                 return false;
//             }
//         }

//         else {
//             return false;
//         }
//     }

//     else {
//         return false;
//     }
// }



// if (Object.keys(obj1).length == Object.keys(obj2).length) {
//     if (Object.keys(obj1).sort().toString() === Object.keys(obj2).sort().toString()) {
//         if (Object.values(obj1).length == Object.values(obj2).length) {
//             if (Object.values(obj1).sort().toString() === Object.values(obj2).sort().toString()) {
//                 return true;
//             } else {
//                 return false;
//             }
//         }
//     }
// }