const fs = require('fs')
const path = require('path')
const mjml2html = require('mjml')
const { registerComponent } = require('mjml-core')

const components = [
  require('./components/MjMeridianHeader'),
  require('./components/MjMeridianHero'),
  require('./components/MjMeridianFeature'),
  require('./components/MjMeridianSnapshot'),
  require('./components/MjMeridianChecklistCta'),
  require('./components/MjMeridianUpcoming'),
  require('./components/MjMeridianPrimaryCta'),
  require('./components/MjMeridianFooter'),
]

const compile = async () => {
  components.forEach((component) => {
    registerComponent(component, { registerDependencies: true })
  })

  const inputPath = path.join(__dirname, 'meridian-advisory.mjml')
  const outputPath = path.join(__dirname, 'meridian-advisory.html')
  const source = fs.readFileSync(inputPath, 'utf8')
  const result = await mjml2html(source, {
    filePath: inputPath,
    validationLevel: 'soft',
  })

  if (result.errors.length) {
    result.errors.forEach((error) => {
      process.stderr.write(`${error.formattedMessage || error.message}\n`)
    })
  }

  fs.writeFileSync(outputPath, result.html)
  process.stdout.write(`Compiled ${path.relative(process.cwd(), inputPath)} -> ${path.relative(process.cwd(), outputPath)}\n`)
}

compile().catch((error) => {
  process.stderr.write(`${error.stack || error.message}\n`)
  process.exitCode = 1
})
