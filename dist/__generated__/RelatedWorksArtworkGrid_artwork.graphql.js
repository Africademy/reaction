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
    "name": "name",
    "args": null,
    "storageKey": null
  },
      v1 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "id",
    "args": null,
    "storageKey": null
  },
      v2 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "__id",
    "args": null,
    "storageKey": null
  };
  return {
    "kind": "Fragment",
    "name": "RelatedWorksArtworkGrid_artwork",
    "type": "Artwork",
    "metadata": null,
    "argumentDefinitions": [{
      "kind": "LocalArgument",
      "name": "layerId",
      "type": "String",
      "defaultValue": null
    }],
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "name": "layers",
      "storageKey": null,
      "args": null,
      "concreteType": "ArtworkLayer",
      "plural": true,
      "selections": [v0, v1, v2]
    }, v1, {
      "kind": "LinkedField",
      "alias": null,
      "name": "layer",
      "storageKey": null,
      "args": [{
        "kind": "Variable",
        "name": "id",
        "variableName": "layerId",
        "type": "String"
      }],
      "concreteType": "ArtworkLayer",
      "plural": false,
      "selections": [v0, {
        "kind": "LinkedField",
        "alias": null,
        "name": "artworksConnection",
        "storageKey": "artworksConnection(first:8)",
        "args": [{
          "kind": "Literal",
          "name": "first",
          "value": 8,
          "type": "Int"
        }],
        "concreteType": "ArtworkConnection",
        "plural": false,
        "selections": [{
          "kind": "FragmentSpread",
          "name": "ArtworkGrid_artworks",
          "args": null
        }, {
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
            "selections": [v1, v2]
          }]
        }]
      }, v2]
    }, v2]
  };
}();

node.hash = '87cc1f280132a9c1649775ae146cec4d';
var _default = node;
exports.default = _default;
//# sourceMappingURL=RelatedWorksArtworkGrid_artwork.graphql.js.map