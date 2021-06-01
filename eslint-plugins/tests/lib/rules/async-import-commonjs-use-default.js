/**
 * @fileoverview use default property when async import commonjs
 * @author yunfengxu
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/async-import-commonjs-use-default"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

RuleTester.setDefaultConfig({
    parser: 'babel-eslint',
    ecmaFeatures: {
      ecmaVersion: 6,
      ecmaFeatures: {
        dynamicImport: true
      }
    }
  });

var ruleTester = new RuleTester();
ruleTester.run("async-import-commonjs-use-default", rule, {

    valid: [
        // give me some code that won't trigger a warning
        // "console.log(1)"
    ],

    invalid: [
        {
            code: `
            async function fn() {
                const module = await import("file-saver");
            }
            `,
            errors: [{
                message: "Fill me in.",
                type: "Me too"
            }]
        }
    ]
});
