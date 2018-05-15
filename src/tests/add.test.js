const add = (a,b) => a + b;
const generateGreeting = (name) => `Hello ${name}!`;

test('should add two numbers', () => {
    const result = add(3, 4);

    // if(result !== 7) {
    //     throw new Error(`You added 4 and 3.Actual Result is ${result}.Expected result 7`);
    // }
    expect(result).toBe(7);
});

test('should display greeting', () => {
    const result = generateGreeting('Bino');
    expect(result).toBe('Hello Bino!')
})