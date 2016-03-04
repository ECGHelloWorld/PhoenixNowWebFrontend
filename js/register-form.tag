<register-form>
  <h3>{opts.title}</h3> <!-- this div uses the object we pass to mount the tag -->

  <input name="nameInput" placeholder="Enter your name">
  <input name="emailInput" placeholder="Enter your email">
  <input name="passwordInput" placeholder="Enter your password">
  <button class="register" onclick="{ register }">Register</button> 
  <button class="login" onclick="{ login }">Login</button> 
  <br />
  <br />
  <textarea name="requestInput" rows="4" cols="50">
  </textarea>
  <input name="locationInput" placeholder="Enter your endpoint">
  <button class="request" onclick="{ POST }">Make POST request</button> 
  <button class="request" onclick="{ GET }">Make GET request</button> 
  <h4>{message}</h4>
  <h4>{header}</h4>

  <script type='text/es6'>
  var request = require('superagent')
  this.message = ''
  this.header = ''
  var self = this
  var url = 'http://helloworldapi.nickendo.com'

  this.POST = (e) => {
      if (this.locationInput.value && this.requestInput.value) {
          request
              .post(url + this.locationInput.value)
              .accept('json')
              .send(JSON.parse(this.requestInput.value))
              .set('Authorization', this.header)
              .end(function(err, res){
                  self.message = JSON.stringify(res.body)
                  self.update()
              })
      }
  };

  this.GET = (e) => {
      if (this.locationInput.value) {
          request
              .get(url + this.locationInput.value)
              .accept('json')
              .set('Authorization', this.header)
              .end(function(err, res){
                  self.message = JSON.stringify(res.body)
                  self.update()
              })
      }
  };

  this.register = (e) => {
      if (this.nameInput.value && this.emailInput.value && this.passwordInput.value) {
          request
              .post(url + '/register')
              .accept('json')
              .send({ name: this.nameInput.value, email: this.emailInput.value,
                  password: this.passwordInput.value })
              .end(function(err, res){
                  console.log(JSON.stringify(res.body))
                  self.message = JSON.stringify(res.body)
                  self.header = res.header['authorization']
                  auth = res.header['authorizaiton']
                  self.update()
              })
      }
  };

  this.login = (e) => {
      if (this.emailInput.value && this.passwordInput.value) {
          request
              .post(url + '/login')
              .accept('json')
              .send({ email: this.emailInput.value,
                  password: this.passwordInput.value })
              .end(function(err, res){
                  console.log(JSON.stringify(res.body))
                  self.message = JSON.stringify(res.body)
                  self.header = res.header['authorization']
                  self.update()
              })
      }
  };
  </script>
  <style>
    .myButton {
      background-color:#44c767;
      -moz-border-radius:18px;
      -webkit-border-radius:18px;
      border-radius:18px;
      border:1px solid #18ab29;
      display:inline-block;
      cursor:pointer;
      color:#ffffff;
      font-family:Arial;
      font-size:17px;
      padding:6px 21px;
      text-decoration:none;
      text-shadow:0px 1px 0px #2f6627;
    }
    .myButton:hover {
      background-color:#5cbf2a;
    }
    .myButton:active:enabled {
      position:relative;
      top:1px;
      cursor: pointer;
    }
  </style>
</register-form>
