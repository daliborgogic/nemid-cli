import  clipboardy from 'clipboardy'

if (!process.argv[2]) {
  console.log(`ou need to enter 'Bruger-id'\n Tiina136 0008`)
  process.exit(1)
}

if (!process.argv[3]) {
  console.log('You need to enter #; a four digit code.')
  process.exit(1)
}

let codes

async function getCodes() {
  try {
    if (codes) return codes
    codes = await (await import(`./lib/${process.argv[2]}.mjs`)).default
    return codes
  } catch (error) {
    console.error(`'Bruger-id' Not Found`)
    process.exit(1)
  }
}

(async () => {
  try {
    const codes = await getCodes()
    const code = codes.filter(code => code[0] === process.argv[3])[0]
    const result = !!code ? code[1] : null
    !!result
      ? [
        clipboardy.writeSync(result),
        console.log(`Copied to clipboard: ${result}`)
      ]
      : console.log('Doesn\'t Exist!')

  } catch (error) {
    console.log(error.message)
    process.exit(1)
  }
})()
