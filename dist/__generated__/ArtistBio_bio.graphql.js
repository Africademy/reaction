"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* tslint:disable */
var node = {
  "kind": "Fragment",
  "name": "ArtistBio_bio",
  "type": "Artist",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [{
    "kind": "LinkedField",
    "alias": null,
    "name": "biography_blurb",
    "storageKey": "biography_blurb(format:\"HTML\",partner_bio:true)",
    "args": [{
      "kind": "Literal",
      "name": "format",
      "value": "HTML",
      "type": "Format"
    }, {
      "kind": "Literal",
      "name": "partner_bio",
      "value": true,
      "type": "Boolean"
    }],
    "concreteType": "ArtistBlurb",
    "plural": false,
    "selections": [{
      "kind": "ScalarField",
      "alias": null,
      "name": "text",
      "args": null,
      "storageKey": null
    }]
  }, {
    "kind": "ScalarField",
    "alias": null,
    "name": "__id",
    "args": null,
    "storageKey": null
  }]
};
node.hash = 'e736551112eb378b9d7e96216c0fcb23';
var _default = node;
exports.default = _default;
//# sourceMappingURL=ArtistBio_bio.graphql.js.map