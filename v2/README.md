## File Structure

```
./v2
├── constants
│   ├── httpCodes.js
│   ├── mailTemplates.js
│   ├── permissions.js
│   ├── regularExpressions.js
│   ├── response.js
│   ├── roles.js
│   ├── url.js
│   └── userValues.js
├── controllers
│   ├── grievances.js
│   └── users.js
├── core
│   ├── BaseController.js
│   ├── BaseException.js
│   ├── BaseExceptionHandler.js
│   ├── BaseModelOptions.js
│   ├── BaseRequest.js
│   ├── BaseResponse.js
│   └── BaseRoute.js
├── exceptions
│   ├── KYIBadRequestException.js
│   ├── KYIInternalServerException.js
│   ├── KYIResourceNotFoundException.js
│   ├── KYIUnauthorisedException.js
│   └── KYIValidationException.js
├── models
│   ├── Answer.js
│   ├── Bruteforce.js
│   ├── Condition.js
│   ├── Grievance.js
│   ├── User.js
│   └── GrievanceVote.js
├── oauth
│   ├── login.js
│   ├── models
│   │   ├── AccessToken.js
│   │   ├── Client.js
│   │   └── RequestToken.js
│   ├── login.js
│   ├── utils
│   │   ├── accessTokens.js
│   │   ├── clientSecrets.js
│   │   ├── otps.js
│   │   └── requestTokens.js
│   └── views
│       ├── index.html
│       ├── scripts
│       │   └── index.js
│       └── stylesheets
│           └── style.css
├── public
│   ├── images
│   ├── index.html
│   ├── javascripts
│   └── stylesheets
│       └── style.css
├── resources
│   ├── seeddata
│   └── templates
├── routes
│   ├── grievances.js
│   ├── index.js
│   └── users.js
├── rules
│   └── Rule.js
├── security
│   ├── UserRole.js
│   └── auth.js
└── utils
    ├── content.js
    ├── mail
    │   ├── Template.js
    │   ├── mailer.js
    │   └── templates.js
    ├── middleware.js
    └── validation.js
```

