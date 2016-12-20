![Bower version](https://img.shields.io/bower/v/rest-api.svg)
[![Build Status](https://travis-ci.org/platosha/rest-api.svg?branch=master)](https://travis-ci.org/platosha/rest-api)
[![Gitter](https://badges.gitter.im/platosha/rest-api.svg)](https://gitter.im/platosha/rest-api?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

# rest-api

A Polymer element providing declarative data bindings to REST API.

## Example

```html
<rest-api url="http://localhost:3000">
  <rest-api-resource name="books" collection="{{books}}"></rest-api-resource>
</rest-api>
```

## Documentation and Live Demo

See [API documentation](https://platosha.github.io/rest-api/components/rest-api/).

Check the [Albums Demo](http://platosha.github.io/rest-api/components/rest-api/demo/index.html), the fully declarative albums browser which uses [JSON Placeholder API](http://jsonplaceholder.typicode.com/).

## Install

This element is distributed via [Bower](http://bower.io/). You can install
Bower it with npm:

    npm install -g bower

Then use Bower to install `rest-api`:

    bower install rest-api

After running the command above, you should get `bower_components` directory
in your project, containing `rest-api` and the dependencies.

## Development Instructions

### Dependencies

Element dependencies are managed with Bower. Use this command to install the
required dependencies:

    bower install

### Running the Development Server

`<rest-api>` needs a REST API (sic) to work with. This repository includes a
very handy development server configuration with integrated backend, based on
[BrowserSync](https://www.browsersync.io/) and
[JSON Server](https://github.com/typicode/json-server). Just install npm
dependencies:

    npm install

Then you can run the server with:

    npm start

Once running, your browser should automatically navigate to the element's page.
By default, it is served from `http://localhost:3000/components/rest-api/`. Now
that you have a backend, the [JSON Server Demo](http://localhost:3000/compontents/rest-api/demo/json-server.html)
should work.

You can also browse the API at `http://localhost:3000/api/`. The mock data is
generated automatically and stored in db.json file. To regenerate the API data,
delete the db.json file and start the server again.

Press `Crtl+C` to stop the development server when it is not needed.

### Running Tests

Navigate to the `/test` directory of the element to run its tests, e.g.:
`http://localhost:3000/components/rest-api/test/`

The tests are done with the [web-component-tester](https://github.com/Polymer/web-component-tester).

## License

Copyright 2015 Anton Platonov <platosha@gmail.com>

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
