const sentence = "The quick brown fox jumps over the lazy dog.";
console.log("Type this sentence as fast as you can:");
console.log(sentence);

const startTime = new Date().getTime();

process.stdin.on("data", (data) => {
    const userInput = data.toString().trim();
    const endTime = new Date().getTime();
    const timeTaken = (endTime - startTime) / 1000; // Convert to seconds

    if (userInput === sentence) {
        console.log(`Great job! You typed the sentence correctly.`);
        console.log(`Time taken: ${timeTaken.toFixed(2)} seconds.`);
    } else {
        console.log("Oops! There's a mistake in your typing.");
    }
    process.exit();
});
