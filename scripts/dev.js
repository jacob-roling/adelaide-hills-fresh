
/**
 * @type {import("bun").SpawnOptions.OptionsObject}
 */
const spawnOptions = {
  stdin: "inherit",
  stdout: "inherit",
  stderr: "inherit",
}

const run = async () => {
  Bun.spawn(["bun", "run", "dev:astro"], spawnOptions)
  Bun.spawn(["bun", "run", "dev:stackbit"], spawnOptions)

  process.on("SIGINT", async () => {
    console.log("Cleaning up...")
    // Bun.spawn(["bun", "run", "db:down"])
  })
}

run()