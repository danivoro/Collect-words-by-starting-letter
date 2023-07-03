import {collectByLetter, collectByLetterNoDuplicates} from "./index";

test("basic tests of v1 function", () => {
    expect(collectByLetter(["shall", "i", "compare", "thee", "to", "a", "summer's"])).toEqual({
        s: ["shall", "summer's"],
        c: ["compare"],
        t: ["thee", "to"],
        i: ["i"],
        a: ["a"]
    });
    expect(collectByLetter(["i", "am", "testing", "my", "javascript", "function"])).toEqual({
        i: ["i"],
        a: ["am"],
        t: ["testing"],
        m: ["my"],
        j: ["javascript"],
        f: ["function"]
    })
})

test("basic tests of v2 function", () => {
    expect(collectByLetterNoDuplicates(["shall", "shall", "compare", "compare", "to", "a"])).toEqual({
        s: ["shall"],
        c: ["compare"],
        t: ["to"],
        a: ["a"]
    });
    expect(collectByLetterNoDuplicates(["i", "am", "testing", "my", "javascript", "function", "i"])).toEqual({
        i: ["i"],
        a: ["am"],
        t: ["testing"],
        m: ["my"],
        j: ["javascript"],
        f: ["function"]
    })
})
