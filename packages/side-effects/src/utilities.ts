function bar(myObj: any) {
    console.log("bar");
    return {
        ...myObj
    };
}

export const barVar = bar({ a: "b", c: "d" });

function foo() {
    console.log("foo");
}

export const fooVar = foo();
