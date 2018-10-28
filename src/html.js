import React, { Component } from 'react'
import PropTypes from 'prop-types'

class HTML extends Component {
  render() {
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <link
            rel="shortcut icon"
            type="image/x-icon"
            href={require('./favicon.ico')}
          />
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, shrink-to-fit=no"
          />

          <meta
            name="google-site-verification"
            content="oEjuU_v9N3pyVpN__4aWjAIlYvJjlXZzI4jGXmP4oOc"
          />

          {/* Localize */}
          <script src="https://global.localizecdn.com/localize.js" />
          <script
            dangerouslySetInnerHTML={{
              __html: `!function(a){if(!a.Localize){a.Localize={};for(var e=["translate","untranslate","phrase","initialize","translatePage","setLanguage","getLanguage","detectLanguage","getAvailableLanguages","untranslatePage","bootstrap","prefetch","on","off"],t=0;t<e.length;t++)a.Localize[e[t]]=function(){}}}(window);`,
            }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                Localize.initialize({
                  key: 'fVEUj6bhUSnUp',
                  rememberLanguage: true
                });
              `,
            }}
          />

          {/* Mailchimp */}
          <script
            type="text/javascript"
            src="//downloads.mailchimp.com/js/signup-forms/popup/unique-methods/embed.js"
            data-dojo-config="usePlainJson: true, isDebug: false"
          />
          {/* <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `window.dojoRequire(["mojo/signup-forms/Loader"], function(L) { L.start({"baseUrl":"mc.us19.list-manage.com","uuid":"4a11c93b3bc3fb3fa2bb52e8b","lid":"a10b749ce9","uniqueMethods":true}) })`,
            }}
          /> */}

          {this.props.headComponents}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}

export default HTML
