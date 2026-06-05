import gulp from 'gulp'
import babel from 'gulp-babel'
import watch from 'gulp-watch'
import log from 'fancy-log'
import fs from 'fs'
import path from 'path'
import mjml2html from 'mjml'
import { registerComponent } from 'mjml-core'

const walkSync = (dir, filelist = []) => {
  fs.readdirSync(dir).forEach(file => {
    filelist = fs.statSync(path.join(dir, file)).isDirectory()
      ? walkSync(path.join(dir, file), filelist)
      : filelist.concat(path.join(dir, file))
  })
  return filelist
}

const watchedComponents = walkSync('./components')

const compile = () => {
  return gulp
    .src(path.normalize('components/**/*.js'))
    .pipe(babel({
      presets: ['@babel/preset-env'],
    }))
    .on('error', log)
    .pipe(gulp.dest('lib'))
    .on('end', async () => {
      watchedComponents.forEach(compPath => {
        const fullPath = path.join(process.cwd(), compPath.replace(/^components/, 'lib'))
        delete require.cache[fullPath]
        registerComponent(require(fullPath).default)
      })

      const mjmlEntries = fs
        .readdirSync(process.cwd())
        .filter((file) => file.endsWith('.mjml'))

      for (const file of mjmlEntries) {
        const inputPath = path.normalize(`./${file}`)
        const outputPath = path.normalize(`./${file.replace(/\.mjml$/, '.html')}`)
        const data = fs.readFileSync(inputPath, 'utf8')
        const result = await mjml2html(data)
        if (result.errors && result.errors.length) {
          result.errors.forEach((e) => {
            log.error(e.formattedMessage || e.message)
          })
        }
        fs.writeFileSync(outputPath, result.html)
        log.info(`Compiled ${file} → ${path.basename(outputPath)}`)
      }
    })
}

gulp.task('build', compile)

gulp.task('watch', () => {
  compile()
  return watch(
    [path.normalize('components/**/*.js'), path.normalize('*.mjml')],
    compile,
  )
})
