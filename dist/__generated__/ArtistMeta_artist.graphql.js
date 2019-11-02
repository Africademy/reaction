"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* tslint:disable */
var node = function () {
  var v0 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "title",
    "args": null,
    "storageKey": null
  },
      v1 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "description",
    "args": null,
    "storageKey": null
  },
      v2 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "href",
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
    "alias": "large",
    "name": "url",
    "args": [{
      "kind": "Literal",
      "name": "version",
      "value": "large",
      "type": "[String]"
    }],
    "storageKey": "url(version:\"large\")"
  },
      v5 = {
    "kind": "ScalarField",
    "alias": "__id",
    "name": "id",
    "args": null,
    "storageKey": null
  },
      v6 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "major",
    "args": null,
    "storageKey": null
  },
      v7 = [v6, {
    "kind": "ScalarField",
    "alias": null,
    "name": "currencyCode",
    "args": null,
    "storageKey": null
  }],
      v8 = {
    "kind": "LinkedField",
    "alias": null,
    "name": "image",
    "storageKey": null,
    "args": null,
    "concreteType": "Image",
    "plural": false,
    "selections": [{
      "kind": "ScalarField",
      "alias": "small",
      "name": "url",
      "args": [{
        "kind": "Literal",
        "name": "version",
        "value": "small",
        "type": "[String]"
      }],
      "storageKey": "url(version:\"small\")"
    }, v4, v5]
  },
      v9 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "__id",
    "args": null,
    "storageKey": null
  };
  return {
    "kind": "Fragment",
    "name": "ArtistMeta_artist",
    "type": "Artist",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "name": "meta",
      "storageKey": null,
      "args": null,
      "concreteType": "ArtistMeta",
      "plural": false,
      "selections": [v0, v1]
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "nationality",
      "args": null,
      "storageKey": null
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "birthday",
      "args": null,
      "storageKey": null
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "deathday",
      "args": null,
      "storageKey": null
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "gender",
      "args": null,
      "storageKey": null
    }, v2, v3, {
      "kind": "ScalarField",
      "alias": null,
      "name": "alternate_names",
      "args": null,
      "storageKey": null
    }, {
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
        "name": "versions",
        "args": null,
        "storageKey": null
      }, v4, {
        "kind": "ScalarField",
        "alias": "square",
        "name": "url",
        "args": [{
          "kind": "Literal",
          "name": "version",
          "value": "square",
          "type": "[String]"
        }],
        "storageKey": "url(version:\"square\")"
      }, v5]
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
        "name": "artworks",
        "args": null,
        "storageKey": null
      }]
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "blurb",
      "args": null,
      "storageKey": null
    }, {
      "kind": "LinkedField",
      "alias": null,
      "name": "artworks_connection",
      "storageKey": "artworks_connection(filter:\"IS_FOR_SALE\",first:10,published:true)",
      "args": [{
        "kind": "Literal",
        "name": "filter",
        "value": "IS_FOR_SALE",
        "type": "[ArtistArtworksFilters]"
      }, {
        "kind": "Literal",
        "name": "first",
        "value": 10,
        "type": "Int"
      }, {
        "kind": "Literal",
        "name": "published",
        "value": true,
        "type": "Boolean"
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
            "name": "listPrice",
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
              "kind": "InlineFragment",
              "type": "Money",
              "selections": v7
            }, {
              "kind": "InlineFragment",
              "type": "PriceRange",
              "selections": [{
                "kind": "LinkedField",
                "alias": null,
                "name": "minPrice",
                "storageKey": null,
                "args": null,
                "concreteType": "Money",
                "plural": false,
                "selections": [v6]
              }, {
                "kind": "LinkedField",
                "alias": null,
                "name": "maxPrice",
                "storageKey": null,
                "args": null,
                "concreteType": "Money",
                "plural": false,
                "selections": v7
              }]
            }]
          }, v0, v1, {
            "kind": "ScalarField",
            "alias": null,
            "name": "category",
            "args": null,
            "storageKey": null
          }, {
            "kind": "ScalarField",
            "alias": null,
            "name": "price_currency",
            "args": null,
            "storageKey": null
          }, {
            "kind": "ScalarField",
            "alias": null,
            "name": "date",
            "args": null,
            "storageKey": null
          }, {
            "kind": "ScalarField",
            "alias": null,
            "name": "availability",
            "args": null,
            "storageKey": null
          }, v2, v8, {
            "kind": "LinkedField",
            "alias": null,
            "name": "partner",
            "storageKey": null,
            "args": null,
            "concreteType": "Partner",
            "plural": false,
            "selections": [v3, v2, {
              "kind": "LinkedField",
              "alias": null,
              "name": "profile",
              "storageKey": null,
              "args": null,
              "concreteType": "Profile",
              "plural": false,
              "selections": [v8, v9]
            }, v9]
          }, v9]
        }]
      }]
    }, v9]
  };
}();

node.hash = 'd39c9878d26bce0520f066843a619884';
var _default = node;
exports.default = _default;
//# sourceMappingURL=ArtistMeta_artist.graphql.js.map