var request = require('superagent')
var riot = require('riot')
var hello_world = require('./hello-world.tag')
var register_form = require('./register-form.tag')

riot.mount(register_form, { title: 'Register'});
riot.mount(hello_world, { title: 'Hello!'});
