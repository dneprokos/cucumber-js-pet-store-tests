module.exports = {
  default: `--format-options '{"snippetInterface": "synchronous"}' 
            --require-module @babel/register 
            --require step_definitions/**/*.js 
            --require support/**/*.js`
}
