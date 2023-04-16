let net = require("net")
let readline = require("readline")

const client = new net.Socket()
client.connect(0812, process.argv[2] ?? "localhost", () => {
  console.log("Connected to server")
})
client.on("data", (data) => {
  console.log(data.toString("utf-8"))
})

const reader = readline.createInterface({ input: process.stdin })
reader.on("line", (line) => {
  client.write(`${line}\n`)
})
reader.on("close", () => {
  client.end()
})