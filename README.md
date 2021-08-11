# Express API Template

[![Test](https://github.com/jonathangoulding/express-api-template/actions/workflows/test.yml/badge.svg)](https://github.com/jonathangoulding/express-api-template/actions/workflows/test.yml)

An express api template using Jest. 

The aim to show how test can be used in an express app. 
A combination of component and unit tests are used in an attempt to show how mocking works.

## Testing

**Manual mocks are not used**

### Unit test

> Unit tests are test that mock dependencies. 

### Component Test

> Component tests use the real dependencies where possible.
> But will mock external calls such as API calls and use in memory databases
