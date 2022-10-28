function foo() {
    console.log("foo");
}

function bar(myObj: any) {
    console.log("bar");
    return {
        ...myObj
    };
}

export const fooVar = foo();
export const barVar = bar({ a: "b", c: "d" });