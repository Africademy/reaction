"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* tslint:disable */

/*
query CollectionsHubRailsStoryQuery(
  $collectionID: String!
) {
  marketingCollection(slug: $collectionID) {
    linkedCollections {
      ...CollectionsHubRails_linkedCollections
    }
    __id: id
  }
}

fragment CollectionsHubRails_linkedCollections on MarketingCollectionGroup {
  groupType
  ...FeaturedCollectionsRails_collectionGroup
  ...OtherCollectionsRail_collectionGroup
  ...ArtistSeriesRail_collectionGroup
}

fragment FeaturedCollectionsRails_collectionGroup on MarketingCollectionGroup {
  groupType
  name
  members {
    id
    slug
    title
    description
    price_guidance
    thumbnail
    __id: id
  }
}

fragment OtherCollectionsRail_collectionGroup on MarketingCollectionGroup {
  groupType
  name
  members {
    ...OtherCollectionEntity_member
    __id: id
  }
}

fragment ArtistSeriesRail_collectionGroup on MarketingCollectionGroup {
  groupType
  name
  members {
    ...ArtistSeriesEntity_member
    __id: id
  }
}

fragment ArtistSeriesEntity_member on MarketingCollection {
  slug
  headerImage
  thumbnail
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
            url(version: "small")
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

fragment OtherCollectionEntity_member on MarketingCollection {
  slug
  thumbnail
  title
  __id: id
}
*/
var node = function () {
  var v0 = [{
    "kind": "LocalArgument",
    "name": "collectionID",
    "type": "String!",
    "defaultValue": null
  }],
      v1 = [{
    "kind": "Variable",
    "name": "slug",
    "variableName": "collectionID",
    "type": "String!"
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
    "name": "name",
    "args": null,
    "storageKey": null
  },
      v4 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "title",
    "args": null,
    "storageKey": null
  },
      v5 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "__id",
    "args": null,
    "storageKey": null
  };
  return {
    "kind": "Request",
    "operationKind": "query",
    "name": "CollectionsHubRailsStoryQuery",
    "id": null,
    "text": "query CollectionsHubRailsStoryQuery(\n  $collectionID: String!\n) {\n  marketingCollection(slug: $collectionID) {\n    linkedCollections {\n      ...CollectionsHubRails_linkedCollections\n    }\n    __id: id\n  }\n}\n\nfragment CollectionsHubRails_linkedCollections on MarketingCollectionGroup {\n  groupType\n  ...FeaturedCollectionsRails_collectionGroup\n  ...OtherCollectionsRail_collectionGroup\n  ...ArtistSeriesRail_collectionGroup\n}\n\nfragment FeaturedCollectionsRails_collectionGroup on MarketingCollectionGroup {\n  groupType\n  name\n  members {\n    id\n    slug\n    title\n    description\n    price_guidance\n    thumbnail\n    __id: id\n  }\n}\n\nfragment OtherCollectionsRail_collectionGroup on MarketingCollectionGroup {\n  groupType\n  name\n  members {\n    ...OtherCollectionEntity_member\n    __id: id\n  }\n}\n\nfragment ArtistSeriesRail_collectionGroup on MarketingCollectionGroup {\n  groupType\n  name\n  members {\n    ...ArtistSeriesEntity_member\n    __id: id\n  }\n}\n\nfragment ArtistSeriesEntity_member on MarketingCollection {\n  slug\n  headerImage\n  thumbnail\n  title\n  price_guidance\n  artworks(aggregations: [TOTAL], sort: \"-decayed_merch\") {\n    artworks_connection(first: 3) {\n      edges {\n        node {\n          artist {\n            name\n            __id\n          }\n          title\n          image {\n            url(version: \"small\")\n            __id: id\n          }\n          __id\n        }\n      }\n    }\n    __id\n  }\n  __id: id\n}\n\nfragment OtherCollectionEntity_member on MarketingCollection {\n  slug\n  thumbnail\n  title\n  __id: id\n}\n",
    "metadata": {},
    "fragment": {
      "kind": "Fragment",
      "name": "CollectionsHubRailsStoryQuery",
      "type": "Query",
      "metadata": null,
      "argumentDefinitions": v0,
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "name": "marketingCollection",
        "storageKey": null,
        "args": v1,
        "concreteType": "MarketingCollection",
        "plural": false,
        "selections": [{
          "kind": "LinkedField",
          "alias": null,
          "name": "linkedCollections",
          "storageKey": null,
          "args": null,
          "concreteType": "MarketingCollectionGroup",
          "plural": true,
          "selections": [{
            "kind": "FragmentSpread",
            "name": "CollectionsHubRails_linkedCollections",
            "args": null
          }]
        }, v2]
      }]
    },
    "operation": {
      "kind": "Operation",
      "name": "CollectionsHubRailsStoryQuery",
      "argumentDefinitions": v0,
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "name": "marketingCollection",
        "storageKey": null,
        "args": v1,
        "concreteType": "MarketingCollection",
        "plural": false,
        "selections": [{
          "kind": "LinkedField",
          "alias": null,
          "name": "linkedCollections",
          "storageKey": null,
          "args": null,
          "concreteType": "MarketingCollectionGroup",
          "plural": true,
          "selections": [{
            "kind": "ScalarField",
            "alias": null,
            "name": "groupType",
            "args": null,
            "storageKey": null
          }, v3, {
            "kind": "LinkedField",
            "alias": null,
            "name": "members",
            "storageKey": null,
            "args": null,
            "concreteType": "MarketingCollection",
            "plural": true,
            "selections": [{
              "kind": "ScalarField",
              "alias": null,
              "name": "id",
              "args": null,
              "storageKey": null
            }, {
              "kind": "ScalarField",
              "alias": null,
              "name": "slug",
              "args": null,
              "storageKey": null
            }, v4, {
              "kind": "ScalarField",
              "alias": null,
              "name": "description",
              "args": null,
              "storageKey": null
            }, {
              "kind": "ScalarField",
              "alias": null,
              "name": "price_guidance",
              "args": null,
              "storageKey": null
            }, {
              "kind": "ScalarField",
              "alias": null,
              "name": "thumbnail",
              "args": null,
              "storageKey": null
            }, v2, {
              "kind": "ScalarField",
              "alias": null,
              "name": "headerImage",
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
                      "selections": [v3, v5]
                    }, v4, {
                      "kind": "LinkedField",
                      "alias": null,
                      "name": "image",
                      "storageKey": null,
                      "args": null,
                      "concreteType": "Image",
                      "plural": false,
                      "selections": [{
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "url",
                        "args": [{
                          "kind": "Literal",
                          "name": "version",
                          "value": "small",
                          "type": "[String]"
                        }],
                        "storageKey": "url(version:\"small\")"
                      }, v2]
                    }, v5]
                  }]
                }]
              }, v5]
            }]
          }]
        }, v2]
      }]
    }
  };
}();

node.hash = '681df4bd4ecb21df42a6e2c835b1b433';
var _default = node;
exports.default = _default;
//# sourceMappingURL=CollectionsHubRailsStoryQuery.graphql.js.map