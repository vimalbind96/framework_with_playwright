import test from "@playwright/test";




test.beforeAll('before All out of describe ',async()=>{
console.log("before all out of describe hooks ");

})
test.describe.only('A',async()=>{

test.beforeAll('before All in the describe A ',async()=>{
console.log("before all in the describe A ");

});

test.afterAll('after All in the describe A ',async()=>{
console.log("after all in the describe A ");

});

test.beforeEach('firstBeforeEach A', async()=>{
    console.log("before each Discribe A");
})




test.only("testCase 1 ",async({page})=>{
console.log("testCase 1");

});

test("testCase 2 ",async({page})=>{

console.log("testCase 2");

});

test.afterEach('',async()=>{
console.log("after each Discribe A");
})
})






// test.describe('B',async()=>{

// test.beforeEach('firstBeforeEach B',async()=>{
//     console.log("before each Discribe B");
// })






// test("testCase 3 ",async({page})=>{
// console.log("testCase 3");

// });


// test("testCase 4 ",async({page})=>{
// console.log("testCase 4");

// });
// test.afterEach('B after Each',async()=>{
// console.log("after each Discribe B");

// });

// });







// test.describe('C',async()=>{




    

// test("testCase 5 ",async({page})=>{
// console.log("testCase 5");

// });


// test("testCase 6 ",async({page})=>{
// console.log("testCase 6");

// });

// })
