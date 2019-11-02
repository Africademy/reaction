"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* tslint:disable */

/*
query ArtworkRelatedArtistsPaginationQuery(
  $count: Int!
  $cursor: String
  $artworkID: String!
) {
  artwork(id: $artworkID) {
    ...ArtworkRelatedArtists_artwork_1G22uz
    __id
  }
}

fragment ArtworkRelatedArtists_artwork_1G22uz on Artwork {
  id
  artist {
    href
    related {
      artists(kind: MAIN, first: $count, after: $cursor) {
        pageInfo {
          hasNextPage
          endCursor
        }
        edges {
          node {
            ...ArtistCard_artist
            __id
            __typename
          }
          cursor
        }
      }
    }
    __id
  }
  __id
}

fragment ArtistCard_artist on Artist {
  name
  id
  href
  image {
    cropped(width: 400, height: 300) {
      url
    }
    __id: id
  }
  formatted_nationality_and_birthday
  ...FollowArtistButton_artist
  __id
}

fragment FollowArtistButton_artist on Artist {
  __id
  name
  id
  is_followed
  counts {
    follows
  }
}
*/
var node = function () {
  var v0 = [{
    "kind": "LocalArgument",
    "name": "count",
    "type": "Int!",
    "defaultValue": null
  }, {
    "kind": "LocalArgument",
    "name": "cursor",
    "type": "String",
    "defaultValue": null
  }, {
    "kind": "LocalArgument",
    "name": "artworkID",
    "type": "String!",
    "defaultValue": null
  }],
      v1 = [{
    "kind": "Variable",
    "name": "id",
    "variableName": "artworkID",
    "type": "String!"
  }],
      v2 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "__id",
    "args": null,
    "storageKey": null
  },
      v3 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "id",
    "args": null,
    "storageKey": null
  },
      v4 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "href",
    "args": null,
    "storageKey": null
  };
  return {
    "kind": "Request",
    "operationKind": "query",
    "name": "ArtworkRelatedArtistsPaginationQuery",
    "id": null,
    "text": "query ArtworkRelatedArtistsPaginationQuery(\n  $count: Int!\n  $cursor: String\n  $artworkID: String!\n) {\n  artwork(id: $artworkID) {\n    ...ArtworkRelatedArtists_artwork_1G22uz\n    __id\n  }\n}\n\nfragment ArtworkRelatedArtists_artwork_1G22uz on Artwork {\n  id\n  artist {\n    href\n    related {\n      artists(kind: MAIN, first: $count, after: $cursor) {\n        pageInfo {\n          hasNextPage\n          endCursor\n        }\n        edges {\n          node {\n            ...ArtistCard_artist\n            __id\n            __typename\n          }\n          cursor\n        }\n      }\n    }\n    __id\n  }\n  __id\n}\n\nfragment ArtistCard_artist on Artist {\n  name\n  id\n  href\n  image {\n    cropped(width: 400, height: 300) {\n      url\n    }\n    __id: id\n  }\n  formatted_nationality_and_birthday\n  ...FollowArtistButton_artist\n  __id\n}\n\nfragment FollowArtistButton_artist on Artist {\n  __id\n  name\n  id\n  is_followed\n  counts {\n    follows\n  }\n}\n",
    "metadata": {},
    "fragment": {
      "kind": "Fragment",
      "name": "ArtworkRelatedArtistsPaginationQuery",
      "type": "Query",
      "metadata": null,
      "argumentDefinitions": v0,
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "name": "artwork",
        "storageKey": null,
        "args": v1,
        "concreteType": "Artwork",
        "plural": false,
        "selections": [{
          "kind": "FragmentSpread",
          "name": "ArtworkRelatedArtists_artwork",
          "args": [{
            "kind": "Variable",
            "name": "count",
            "variableName": "count",
            "type": null
          }, {
            "kind": "Variable",
            "name": "cursor",
            "variableName": "cursor",
            "type": null
          }]
        }, v2]
      }]
    },
    "operation": {
      "kind": "Operation",
      "name": "ArtworkRelatedArtistsPaginationQuery",
      "argumentDefinitions": v0,
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "name": "artwork",
        "storageKey": null,
        "args": v1,
        "concreteType": "Artwork",
        "plural": false,
        "selections": [v3, {
          "kind": "LinkedField",
          "alias": null,
          "name": "artist",
          "storageKey": null,
          "args": null,
          "concreteType": "Artist",
          "plural": false,
          "selections": [v4, {
            "kind": "LinkedField",
            "alias": null,
            "name": "related",
            "storageKey": null,
            "args": null,
            "concreteType": "ArtistRelatedData",
            "plural": false,
            "selections": [{
              "kind": "LinkedField",
              "alias": null,
              "name": "artists",
              "storageKey": null,
              "args": [{
                "kind": "Variable",
                "name": "after",
                "variableName": "cursor",
                "type": "String"
              }, {
                "kind": "Variable",
                "name": "first",
                "variableName": "count",
                "type": "Int"
              }, {
                "kind": "Literal",
                "name": "kind",
                "value": "MAIN",
                "type": "RelatedArtistsKind"
              }],
              "concreteType": "ArtistConnection",
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
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "ArtistEdge",
                "plural": true,
                "selections": [{
                  "kind": "LinkedField",
                  "alias": null,
                  "name": "node",
                  "storageKey": null,
                  "args": null,
                  "concreteType": "Artist",
                  "plural": false,
                  "selections": [{
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "name",
                    "args": null,
                    "storageKey": null
                  }, v3, v4, {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "image",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Image",
                    "plural": false,
                    "selections": [{
                      "kind": "LinkedField",
                      "alias": null,
                      "name": "cropped",
                      "storageKey": "cropped(height:300,width:400)",
                      "args": [{
                        "kind": "Literal",
                        "name": "height",
                        "value": 300,
                        "type": "Int!"
                      }, {
                        "kind": "Literal",
                        "name": "width",
                        "value": 400,
                        "type": "Int!"
                      }],
                      "concreteType": "CroppedImageUrl",
                      "plural": false,
                      "selections": [{
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "url",
                        "args": null,
                        "storageKey": null
                      }]
                    }, {
                      "kind": "ScalarField",
                      "alias": "__id",
                      "name": "id",
                      "args": null,
                      "storageKey": null
                    }]
                  }, {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "formatted_nationality_and_birthday",
                    "args": null,
                    "storageKey": null
                  }, v2, {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "is_followed",
                    "args": null,
                    "storageKey": null
                  }, {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "counts",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "ArtistCounts",
                    "plural": false,
                    "selections": [{
                      "kind": "ScalarField",
                      "alias": null,
                      "name": "follows",
                      "args": null,
                      "storageKey": null
                    }]
                  }, {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "__typename",
                    "args": null,
                    "storageKey": null
                  }]
                }, {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "cursor",
                  "args": null,
                  "storageKey": null
                }]
              }]
            }, {
              "kind": "LinkedHandle",
              "alias": null,
              "name": "artists",
              "args": [{
                "kind": "Variable",
                "name": "after",
                "variableName": "cursor",
                "type": "String"
              }, {
                "kind": "Variable",
                "name": "first",
                "variableName": "count",
                "type": "Int"
              }, {
                "kind": "Literal",
                "name": "kind",
                "value": "MAIN",
                "type": "RelatedArtistsKind"
              }],
              "handle": "connection",
              "key": "ArtworkRelatedArtists_artists",
              "filters": ["kind"]
            }]
          }, v2]
        }, v2]
      }]
    }
  };
}();

node.hash = '13d2fdc8bc0e1a6015918727e1fa807f';
var _default = node;
exports.default = _default;
//# sourceMappingURL=ArtworkRelatedArtistsPaginationQuery.graphql.js.map