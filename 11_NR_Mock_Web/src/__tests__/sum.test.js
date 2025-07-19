import { sum } from "../components/Sum";

test("This will return the sum of two number",()=>{
    const result=sum(3,4);

    //Assertion
    expect (result).toBe(7);
})