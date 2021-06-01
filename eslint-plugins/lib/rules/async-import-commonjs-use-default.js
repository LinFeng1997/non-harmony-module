/**
 * @fileoverview use default property when async import commonjs
 * @author yunfengxu
 */
"use strict";

// const { ESLintUtils } = require("@typescript-eslint/experimental-utils");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "use default property when async import commonjs",
            category: "Fill me in",
            recommended: false
        },
        fixable: null,  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

    create: function(context) {
        // variables should be defined here

        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------

        // any helper functions should go here or else delete this section

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------
        
        return {
            // give me methods
            ImportExpression : (node) => {
                debugger
                // const { program, esTreeNodeToTSNodeMap } = ESLintUtils.getParserServices(context);

                console.log('ImportExpression value',node.source.value)
            },
        };
    }
};
