"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* tslint:disable */

/*
query ArtworkSidebarArtistsStoryQuery {
  artwork(id: "unused") {
    ...ArtworkSidebarArtists_artwork
    __id
  }
}

fragment ArtworkSidebarArtists_artwork on Artwork {
  cultural_maker
  artists {
    __id
    _id
    id
    name
    href
    ...FollowArtistButton_artist_2eN9lh
  }
  __id
}

fragment FollowArtistButton_artist_2eN9lh on Artist {
  __id
  name
  id
  is_followed
  counts {
    follows
  }
  ...FollowArtistPopover_artist
}

fragment FollowArtistPopover_artist on Artist {
  related {
    suggested(first: 3, exclude_followed_artists: true) {
      edges {
        node {
          __id
          _id
          ...FollowArtistPopoverRow_artist
        }
      }
    }
  }
  __id
}

fragment FollowArtistPopoverRow_artist on Artist {
  _id
  name
  image {
    cropped(width: 45, height: 45) {
      url
    }
    __id: id
  }
  __id
}
*/
var node = function () {
  var v0 = [{
    "kind": "Literal",
    "name": "id",
    "value": "unused",
    "type": "String!"
  }],
      v1 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "__id",
    "args": null,
    "storageKey": null
  },
      v2 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "_id",
    "args": null,
    "storageKey": null
  },
      v3 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "name",
    "args": null,
    "storageKey": null
  };
  return {
    "kind": "Request",
    "operationKind": "query",
    "name": "ArtworkSidebarArtistsStoryQuery",
    "id": null,
    "text": "query ArtworkSidebarArtistsStoryQuery {\n  artwork(id: \"unused\") {\n    ...ArtworkSidebarArtists_artwork\n    __id\n  }\n}\n\nfragment ArtworkSidebarArtists_artwork on Artwork {\n  cultural_maker\n  artists {\n    __id\n    _id\n    id\n    name\n    href\n    ...FollowArtistButton_artist_2eN9lh\n  }\n  __id\n}\n\nfragment FollowArtistButton_artist_2eN9lh on Artist {\n  __id\n  name\n  id\n  is_followed\n  counts {\n    follows\n  }\n  ...FollowArtistPopover_artist\n}\n\nfragment FollowArtistPopover_artist on Artist {\n  related {\n    suggested(first: 3, exclude_followed_artists: true) {\n      edges {\n        node {\n          __id\n          _id\n          ...FollowArtistPopoverRow_artist\n        }\n      }\n    }\n  }\n  __id\n}\n\nfragment FollowArtistPopoverRow_artist on Artist {\n  _id\n  name\n  image {\n    cropped(width: 45, height: 45) {\n      url\n    }\n    __id: id\n  }\n  __id\n}\n",
    "metadata": {},
    "fragment": {
      "kind": "Fragment",
      "name": "ArtworkSidebarArtistsStoryQuery",
      "type": "Query",
      "metadata": null,
      "argumentDefinitions": [],
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "name": "artwork",
        "storageKey": "artwork(id:\"unused\")",
        "args": v0,
        "concreteType": "Artwork",
        "plural": false,
        "selections": [{
          "kind": "FragmentSpread",
          "name": "ArtworkSidebarArtists_artwork",
          "args": null
        }, v1]
      }]
    },
    "operation": {
      "kind": "Operation",
      "name": "ArtworkSidebarArtistsStoryQuery",
      "argumentDefinitions": [],
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "name": "artwork",
        "storageKey": "artwork(id:\"unused\")",
        "args": v0,
        "concreteType": "Artwork",
        "plural": false,
        "selections": [{
          "kind": "ScalarField",
          "alias": null,
          "name": "cultural_maker",
          "args": null,
          "storageKey": null
        }, {
          "kind": "LinkedField",
          "alias": null,
          "name": "artists",
          "storageKey": null,
          "args": null,
          "concreteType": "Artist",
          "plural": true,
          "selections": [v1, v2, {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }, v3, {
            "kind": "ScalarField",
            "alias": null,
            "name": "href",
            "args": null,
            "storageKey": null
          }, {
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
              "name": "suggested",
              "storageKey": "suggested(exclude_followed_artists:true,first:3)",
              "args": [{
                "kind": "Literal",
                "name": "exclude_followed_artists",
                "value": true,
                "type": "Boolean"
              }, {
                "kind": "Literal",
                "name": "first",
                "value": 3,
                "type": "Int"
              }],
              "concreteType": "ArtistConnection",
              "plural": false,
              "selections": [{
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
                  "selections": [v1, v2, v3, {
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
                      "storageKey": "cropped(height:45,width:45)",
                      "args": [{
                        "kind": "Literal",
                        "name": "height",
                        "value": 45,
                        "type": "Int!"
                      }, {
                        "kind": "Literal",
                        "name": "width",
                        "value": 45,
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
                  }]
                }]
              }]
            }]
          }]
        }, v1]
      }]
    }
  };
}();

node.hash = '10a85c51b418620bdb4ff642aa3d068a';
var _default = node;
exports.default = _default;
//# sourceMappingURL=ArtworkSidebarArtistsStoryQuery.graphql.js.map