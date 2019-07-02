const sentence = "hello there from lighthouse labs";
let time = 1000
const newSentence = sentence + '\n'
for (const char of newSentence) {
    setTimeout(() => {
        process.stdout.write(char)
    }, time)
    time += 50
}
