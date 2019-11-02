"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* tslint:disable */

/*
query ArtistCollectionsRailQuery(
  $isFeaturedArtistContent: Boolean
  $size: Int
  $artistID: String
) {
  collections: marketingCollections(isFeaturedArtistContent: $isFeaturedArtistContent, size: $size, artistID: $artistID) {
    ...ArtistCollectionsRail_collections
    __id: id
  }
}

fragment ArtistCollectionsRail_collections on MarketingCollection {
  ...ArtistCollectionEntity_collection
  __id: id
}

fragment ArtistCollectionEntity_collection on MarketingCollection {
  headerImage
  slug
  title
  price_guidance
  artworks(aggregations: [TOTAL], sort: "-decayed_merch") {
    artworks_connection(first: 3) {
      edges {
        node {
          artist {
            name
            __id
          }
          title
          image {
            resized(width: 262) {
              url
            }
            __id: id
          }
          __id
        }
      }
    }
    __id
  }
  __id: id
}
*/
var node = function () {
  var v0 = [{
    "kind": "LocalArgument",
    "name": "isFeaturedArtistContent",
    "type": "Boolean",
    "defaultValue": null
  }, {
    "kind": "LocalArgument",
    "name": "size",
    "type": "Int",
    "defaultValue": null
  }, {
    "kind": "LocalArgument",
    "name": "artistID",
    "type": "String",
    "defaultValue": null
  }],
      v1 = [{
    "kind": "Variable",
    "name": "artistID",
    "variableName": "artistID",
    "type": "String"
  }, {
    "kind": "Variable",
    "name": "isFeaturedArtistContent",
    "variableName": "isFeaturedArtistContent",
    "type": "Boolean"
  }, {
    "kind": "Variable",
    "name": "size",
    "variableName": "size",
    "type": "Int"
  }],
      v2 = {
    "kind": "ScalarField",
    "alias": "__id",
    "name": "id",
    "args": null,
    "storageKey": null
  },
      v3 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "title",
    "args": null,
    "storageKey": null
  },
      v4 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "__id",
    "args": null,
    "storageKey": null
  };
  return {
    "kind": "Request",
    "operationKind": "query",
    "name": "ArtistCollectionsRailQuery",
    "id": null,
    "text": "query ArtistCollectionsRailQuery(\n  $isFeaturedArtistContent: Boolean\n  $size: Int\n  $artistID: String\n) {\n  collections: marketingCollections(isFeaturedArtistContent: $isFeaturedArtistContent, size: $size, artistID: $artistID) {\n    ...ArtistCollectionsRail_collections\n    __id: id\n  }\n}\n\nfragment ArtistCollectionsRail_collections on MarketingCollection {\n  ...ArtistCollectionEntity_collection\n  __id: id\n}\n\nfragment ArtistCollectionEntity_collection on MarketingCollection {\n  headerImage\n  slug\n  title\n  price_guidance\n  artworks(aggregations: [TOTAL], sort: \"-decayed_merch\") {\n    artworks_connection(first: 3) {\n      edges {\n        node {\n          artist {\n            name\n            __id\n          }\n          title\n          image {\n            resized(width: 262) {\n              url\n            }\n            __id: id\n          }\n          __id\n        }\n      }\n    }\n    __id\n  }\n  __id: id\n}\n",
    "metadata": {},
    "fragment": {
      "kind": "Fragment",
      "name": "ArtistCollectionsRailQuery",
      "type": "Query",
      "metadata": null,
      "argumentDefinitions": v0,
      "selections": [{
        "kind": "LinkedField",
        "alias": "collections",
        "name": "marketingCollections",
        "storageKey": null,
        "args": v1,
        "concreteType": "MarketingCollection",
        "plural": true,
        "selections": [{
          "kind": "FragmentSpread",
          "name": "ArtistCollectionsRail_collections",
          "args": null
        }, v2]
      }]
    },
    "operation": {
      "kind": "Operation",
      "name": "ArtistCollectionsRailQuery",
      "argumentDefinitions": v0,
      "selections": [{
        "kind": "LinkedField",
        "alias": "collections",
        "name": "marketingCollections",
        "storageKey": null,
        "args": v1,
        "concreteType": "MarketingCollection",
        "plural": true,
        "selections": [{
          "kind": "ScalarField",
          "alias": null,
          "name": "headerImage",
          "args": null,
          "storageKey": null
        }, {
          "kind": "ScalarField",
          "alias": null,
          "name": "slug",
          "args": null,
          "storageKey": null
        }, v3, {
          "kind": "ScalarField",
          "alias": null,
          "name": "price_guidance",
          "args": null,
          "storageKey": null
        }, {
          "kind": "LinkedField",
          "alias": null,
          "name": "artworks",
          "storageKey": "artworks(aggregations:[\"TOTAL\"],sort:\"-decayed_merch\")",
          "args": [{
            "kind": "Literal",
            "name": "aggregations",
            "value": ["TOTAL"],
            "type": "[ArtworkAggregation]"
          }, {
            "kind": "Literal",
            "name": "sort",
            "value": "-decayed_merch",
            "type": "String"
          }],
          "concreteType": "FilterArtworks",
          "plural": false,
          "selections": [{
            "kind": "LinkedField",
            "alias": null,
            "name": "artworks_connection",
            "storageKey": "artworks_connection(first:3)",
            "args": [{
              "kind": "Literal",
              "name": "first",
              "value": 3,
              "type": "Int"
            }],
            "concreteType": "ArtworkConnection",
            "plural": false,
            "selections": [{
              "kind": "LinkedField",
              "alias": null,
              "name": "edges",
              "storageKey": null,
              "args": null,
              "concreteType": "ArtworkEdge",
              "plural": true,
              "selections": [{
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "Artwork",
                "plural": false,
                "selections": [{
                  "kind": "LinkedField",
                  "alias": null,
                  "name": "artist",
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
                  }, v4]
                }, v3, {
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
                    "name": "resized",
                    "storageKey": "resized(width:262)",
                    "args": [{
                      "kind": "Literal",
                      "name": "width",
                      "value": 262,
                      "type": "Int"
                    }],
                    "concreteType": "ResizedImageUrl",
                    "plural": false,
                    "selections": [{
                      "kind": "ScalarField",
                      "alias": null,
                      "name": "url",
                      "args": null,
                      "storageKey": null
                    }]
                  }, v2]
                }, v4]
              }]
            }]
          }, v4]
        }, v2]
      }]
    }
  };
}();

node.hash = '4c7b73a48f28a78a4282cf8026947c54';
var _default = node;
exports.default = _default;
//# sourceMappingURL=ArtistCollectionsRailQuery.graphql.js.map