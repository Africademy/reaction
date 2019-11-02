"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* tslint:disable */

/*
query routes_SearchResultsArtistsQuery(
  $term: String!
  $page: Int
) {
  viewer {
    ...SearchResultsArtists_viewer_2iLyA0
  }
}

fragment SearchResultsArtists_viewer_2iLyA0 on Viewer {
  search(query: $term, first: 10, page: $page, entities: [ARTIST]) @principalField {
    pageInfo {
      hasNextPage
      endCursor
    }
    pageCursors {
      ...Pagination_pageCursors
    }
    edges {
      node {
        __typename
        ... on Artist {
          name
          _id
          href
          imageUrl
          bio
        }
        ... on Node {
          __id
        }
      }
    }
  }
}

fragment Pagination_pageCursors on PageCursors {
  around {
    cursor
    page
    isCurrent
  }
  first {
    cursor
    page
    isCurrent
  }
  last {
    cursor
    page
    isCurrent
  }
  previous {
    cursor
    page
  }
}
*/
var node = function () {
  var v0 = [{
    "kind": "LocalArgument",
    "name": "term",
    "type": "String!",
    "defaultValue": null
  }, {
    "kind": "LocalArgument",
    "name": "page",
    "type": "Int",
    "defaultValue": null
  }],
      v1 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "cursor",
    "args": null,
    "storageKey": null
  },
      v2 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "page",
    "args": null,
    "storageKey": null
  },
      v3 = [v1, v2, {
    "kind": "ScalarField",
    "alias": null,
    "name": "isCurrent",
    "args": null,
    "storageKey": null
  }];
  return {
    "kind": "Request",
    "operationKind": "query",
    "name": "routes_SearchResultsArtistsQuery",
    "id": null,
    "text": "query routes_SearchResultsArtistsQuery(\n  $term: String!\n  $page: Int\n) {\n  viewer {\n    ...SearchResultsArtists_viewer_2iLyA0\n  }\n}\n\nfragment SearchResultsArtists_viewer_2iLyA0 on Viewer {\n  search(query: $term, first: 10, page: $page, entities: [ARTIST]) @principalField {\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n    pageCursors {\n      ...Pagination_pageCursors\n    }\n    edges {\n      node {\n        __typename\n        ... on Artist {\n          name\n          _id\n          href\n          imageUrl\n          bio\n        }\n        ... on Node {\n          __id\n        }\n      }\n    }\n  }\n}\n\nfragment Pagination_pageCursors on PageCursors {\n  around {\n    cursor\n    page\n    isCurrent\n  }\n  first {\n    cursor\n    page\n    isCurrent\n  }\n  last {\n    cursor\n    page\n    isCurrent\n  }\n  previous {\n    cursor\n    page\n  }\n}\n",
    "metadata": {},
    "fragment": {
      "kind": "Fragment",
      "name": "routes_SearchResultsArtistsQuery",
      "type": "Query",
      "metadata": null,
      "argumentDefinitions": v0,
      "selections": [{
        "kind": "LinkedField",
        "alias": "viewer",
        "name": "__viewer_viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [{
          "kind": "FragmentSpread",
          "name": "SearchResultsArtists_viewer",
          "args": [{
            "kind": "Variable",
            "name": "page",
            "variableName": "page",
            "type": null
          }, {
            "kind": "Variable",
            "name": "term",
            "variableName": "term",
            "type": null
          }]
        }]
      }]
    },
    "operation": {
      "kind": "Operation",
      "name": "routes_SearchResultsArtistsQuery",
      "argumentDefinitions": v0,
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [{
          "kind": "LinkedField",
          "alias": null,
          "name": "search",
          "storageKey": null,
          "args": [{
            "kind": "Literal",
            "name": "entities",
            "value": ["ARTIST"],
            "type": "[SearchEntity]"
          }, {
            "kind": "Literal",
            "name": "first",
            "value": 10,
            "type": "Int"
          }, {
            "kind": "Variable",
            "name": "page",
            "variableName": "page",
            "type": "Int"
          }, {
            "kind": "Variable",
            "name": "query",
            "variableName": "term",
            "type": "String!"
          }],
          "concreteType": "SearchableConnection",
          "plural": false,
          "selections": [{
            "kind": "LinkedField",
            "alias": null,
            "name": "pageInfo",
            "storageKey": null,
            "args": null,
            "concreteType": "PageInfo",
            "plural": false,
            "selections": [{
              "kind": "ScalarField",
              "alias": null,
              "name": "hasNextPage",
              "args": null,
              "storageKey": null
            }, {
              "kind": "ScalarField",
              "alias": null,
              "name": "endCursor",
              "args": null,
              "storageKey": null
            }]
          }, {
            "kind": "LinkedField",
            "alias": null,
            "name": "pageCursors",
            "storageKey": null,
            "args": null,
            "concreteType": "PageCursors",
            "plural": false,
            "selections": [{
              "kind": "LinkedField",
              "alias": null,
              "name": "around",
              "storageKey": null,
              "args": null,
              "concreteType": "PageCursor",
              "plural": true,
              "selections": v3
            }, {
              "kind": "LinkedField",
              "alias": null,
              "name": "first",
              "storageKey": null,
              "args": null,
              "concreteType": "PageCursor",
              "plural": false,
              "selections": v3
            }, {
              "kind": "LinkedField",
              "alias": null,
              "name": "last",
              "storageKey": null,
              "args": null,
              "concreteType": "PageCursor",
              "plural": false,
              "selections": v3
            }, {
              "kind": "LinkedField",
              "alias": null,
              "name": "previous",
              "storageKey": null,
              "args": null,
              "concreteType": "PageCursor",
              "plural": false,
              "selections": [v1, v2]
            }]
          }, {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "SearchableEdge",
            "plural": true,
            "selections": [{
              "kind": "LinkedField",
              "alias": null,
              "name": "node",
              "storageKey": null,
              "args": null,
              "concreteType": null,
              "plural": false,
              "selections": [{
                "kind": "ScalarField",
                "alias": null,
                "name": "__typename",
                "args": null,
                "storageKey": null
              }, {
                "kind": "ScalarField",
                "alias": null,
                "name": "__id",
                "args": null,
                "storageKey": null
              }, {
                "kind": "InlineFragment",
                "type": "Artist",
                "selections": [{
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "name",
                  "args": null,
                  "storageKey": null
                }, {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "_id",
                  "args": null,
                  "storageKey": null
                }, {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "href",
                  "args": null,
                  "storageKey": null
                }, {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "imageUrl",
                  "args": null,
                  "storageKey": null
                }, {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "bio",
                  "args": null,
                  "storageKey": null
                }]
              }]
            }]
          }]
        }]
      }, {
        "kind": "LinkedHandle",
        "alias": null,
        "name": "viewer",
        "args": null,
        "handle": "viewer",
        "key": "",
        "filters": null
      }]
    }
  };
}();

node.hash = '1a3f143f1f7e1089dea56bcc73c2b49b';
var _default = node;
exports.default = _default;
//# sourceMappingURL=routes_SearchResultsArtistsQuery.graphql.js.map