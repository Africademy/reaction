/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
import { WorksForYouArtist_viewer$ref } from "./WorksForYouArtist_viewer.graphql";
import { WorksForYouContents_viewer$ref } from "./WorksForYouContents_viewer.graphql";
export type ArtistArtworksFilters = "IS_FOR_SALE" | "IS_NOT_FOR_SALE" | "%future added value";
export type WorksForYouQueryVariables = {
    readonly includeSelectedArtist: boolean;
    readonly artistID: string;
    readonly forSale?: boolean | null;
    readonly filter?: ReadonlyArray<ArtistArtworksFilters | null> | null;
};
export type WorksForYouQueryResponse = {
    readonly viewer: ({
        readonly " $fragmentRefs": WorksForYouContents_viewer$ref & WorksForYouArtist_viewer$ref;
    }) | null;
};



/*
query WorksForYouQuery(
  $includeSelectedArtist: Boolean!
  $artistID: String!
  $forSale: Boolean
  $filter: [ArtistArtworksFilters]
) {
  viewer {
    ...WorksForYouContents_viewer_4jSCc2 @skip(if: $includeSelectedArtist)
    ...WorksForYouArtist_viewer_45bsh6 @include(if: $includeSelectedArtist)
  }
}

fragment WorksForYouContents_viewer_4jSCc2 on Viewer {
  me {
    followsAndSaves {
      notifications: bundledArtworksByArtist(sort: PUBLISHED_AT_DESC, first: 10, for_sale: $forSale) {
        pageInfo {
          hasNextPage
          endCursor
        }
        edges {
          node {
            __id
            summary
            artists
            artworksConnection {
              ...ArtworkGrid_artworks
            }
            __typename
          }
          cursor
        }
      }
    }
    __id
  }
}

fragment WorksForYouArtist_viewer_45bsh6 on Viewer {
  artist(id: $artistID) {
    name
    artworks_connection(sort: published_at_desc, first: 10, filter: $filter) {
      pageInfo {
        hasNextPage
        endCursor
      }
      ...ArtworkGrid_artworks
      edges {
        node {
          __id
          __typename
        }
        cursor
      }
    }
    __id
  }
}

fragment ArtworkGrid_artworks on ArtworkConnection {
  edges {
    node {
      __id
      image {
        aspect_ratio
      }
      ...GridItem_artwork
    }
  }
}

fragment GridItem_artwork on Artwork {
  image {
    placeholder
    url(version: "large")
    aspect_ratio
  }
  is_biddable
  is_acquireable
  href
  ...Metadata_artwork
  ...Save_artwork
  __id
}

fragment Metadata_artwork on Artwork {
  ...Details_artwork
  ...Contact_artwork
  __id
}

fragment Save_artwork on Artwork {
  __id
  id
  is_saved
}

fragment Details_artwork on Artwork {
  href
  title
  date
  sale_message
  cultural_maker
  artists(shallow: true) {
    __id
    href
    name
  }
  collecting_institution
  partner(shallow: true) {
    name
    href
    __id
  }
  sale {
    is_auction
    is_live_open
    is_open
    is_closed
    __id
  }
  __id
}

fragment Contact_artwork on Artwork {
  _id
  href
  is_inquireable
  sale {
    is_auction
    is_live_open
    is_open
    is_closed
    __id
  }
  partner(shallow: true) {
    type
    __id
  }
  sale_artwork {
    highest_bid {
      display
      __id: id
    }
    opening_bid {
      display
    }
    counts {
      bidder_positions
    }
    __id
  }
  __id
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "includeSelectedArtist",
    "type": "Boolean!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "artistID",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "forSale",
    "type": "Boolean",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "filter",
    "type": "[ArtistArtworksFilters]",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "Literal",
  "name": "first",
  "value": 10,
  "type": "Int"
},
v3 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "pageInfo",
  "storageKey": null,
  "args": null,
  "concreteType": "PageInfo",
  "plural": false,
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "hasNextPage",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "endCursor",
      "args": null,
      "storageKey": null
    }
  ]
},
v4 = [
  {
    "kind": "Literal",
    "name": "shallow",
    "value": true,
    "type": "Boolean"
  }
],
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__id",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "href",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "artists",
  "storageKey": "artists(shallow:true)",
  "args": v4,
  "concreteType": "Artist",
  "plural": true,
  "selections": [
    v5,
    v6,
    v1
  ]
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "is_biddable",
  "args": null,
  "storageKey": null
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "is_acquireable",
  "args": null,
  "storageKey": null
},
v10 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "title",
  "args": null,
  "storageKey": null
},
v11 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "date",
  "args": null,
  "storageKey": null
},
v12 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "sale_message",
  "args": null,
  "storageKey": null
},
v13 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "cultural_maker",
  "args": null,
  "storageKey": null
},
v14 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "image",
  "storageKey": null,
  "args": null,
  "concreteType": "Image",
  "plural": false,
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "aspect_ratio",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "placeholder",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "url",
      "args": [
        {
          "kind": "Literal",
          "name": "version",
          "value": "large",
          "type": "[String]"
        }
      ],
      "storageKey": "url(version:\"large\")"
    }
  ]
},
v15 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "collecting_institution",
  "args": null,
  "storageKey": null
},
v16 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "partner",
  "storageKey": "partner(shallow:true)",
  "args": v4,
  "concreteType": "Partner",
  "plural": false,
  "selections": [
    v1,
    v6,
    v5,
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "type",
      "args": null,
      "storageKey": null
    }
  ]
},
v17 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "sale",
  "storageKey": null,
  "args": null,
  "concreteType": "Sale",
  "plural": false,
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "is_auction",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "is_live_open",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "is_open",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "is_closed",
      "args": null,
      "storageKey": null
    },
    v5
  ]
},
v18 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "_id",
  "args": null,
  "storageKey": null
},
v19 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "is_inquireable",
  "args": null,
  "storageKey": null
},
v20 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "display",
  "args": null,
  "storageKey": null
},
v21 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "sale_artwork",
  "storageKey": null,
  "args": null,
  "concreteType": "SaleArtwork",
  "plural": false,
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "highest_bid",
      "storageKey": null,
      "args": null,
      "concreteType": "SaleArtworkHighestBid",
      "plural": false,
      "selections": [
        v20,
        {
          "kind": "ScalarField",
          "alias": "__id",
          "name": "id",
          "args": null,
          "storageKey": null
        }
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "opening_bid",
      "storageKey": null,
      "args": null,
      "concreteType": "SaleArtworkOpeningBid",
      "plural": false,
      "selections": [
        v20
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "counts",
      "storageKey": null,
      "args": null,
      "concreteType": "SaleArtworkCounts",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "bidder_positions",
          "args": null,
          "storageKey": null
        }
      ]
    },
    v5
  ]
},
v22 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v23 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "is_saved",
  "args": null,
  "storageKey": null
},
v24 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__typename",
  "args": null,
  "storageKey": null
},
v25 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "cursor",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "WorksForYouQuery",
  "id": null,
  "text": "query WorksForYouQuery(\n  $includeSelectedArtist: Boolean!\n  $artistID: String!\n  $forSale: Boolean\n  $filter: [ArtistArtworksFilters]\n) {\n  viewer {\n    ...WorksForYouContents_viewer_4jSCc2 @skip(if: $includeSelectedArtist)\n    ...WorksForYouArtist_viewer_45bsh6 @include(if: $includeSelectedArtist)\n  }\n}\n\nfragment WorksForYouContents_viewer_4jSCc2 on Viewer {\n  me {\n    followsAndSaves {\n      notifications: bundledArtworksByArtist(sort: PUBLISHED_AT_DESC, first: 10, for_sale: $forSale) {\n        pageInfo {\n          hasNextPage\n          endCursor\n        }\n        edges {\n          node {\n            __id\n            summary\n            artists\n            artworksConnection {\n              ...ArtworkGrid_artworks\n            }\n            __typename\n          }\n          cursor\n        }\n      }\n    }\n    __id\n  }\n}\n\nfragment WorksForYouArtist_viewer_45bsh6 on Viewer {\n  artist(id: $artistID) {\n    name\n    artworks_connection(sort: published_at_desc, first: 10, filter: $filter) {\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n      ...ArtworkGrid_artworks\n      edges {\n        node {\n          __id\n          __typename\n        }\n        cursor\n      }\n    }\n    __id\n  }\n}\n\nfragment ArtworkGrid_artworks on ArtworkConnection {\n  edges {\n    node {\n      __id\n      image {\n        aspect_ratio\n      }\n      ...GridItem_artwork\n    }\n  }\n}\n\nfragment GridItem_artwork on Artwork {\n  image {\n    placeholder\n    url(version: \"large\")\n    aspect_ratio\n  }\n  is_biddable\n  is_acquireable\n  href\n  ...Metadata_artwork\n  ...Save_artwork\n  __id\n}\n\nfragment Metadata_artwork on Artwork {\n  ...Details_artwork\n  ...Contact_artwork\n  __id\n}\n\nfragment Save_artwork on Artwork {\n  __id\n  id\n  is_saved\n}\n\nfragment Details_artwork on Artwork {\n  href\n  title\n  date\n  sale_message\n  cultural_maker\n  artists(shallow: true) {\n    __id\n    href\n    name\n  }\n  collecting_institution\n  partner(shallow: true) {\n    name\n    href\n    __id\n  }\n  sale {\n    is_auction\n    is_live_open\n    is_open\n    is_closed\n    __id\n  }\n  __id\n}\n\nfragment Contact_artwork on Artwork {\n  _id\n  href\n  is_inquireable\n  sale {\n    is_auction\n    is_live_open\n    is_open\n    is_closed\n    __id\n  }\n  partner(shallow: true) {\n    type\n    __id\n  }\n  sale_artwork {\n    highest_bid {\n      display\n      __id: id\n    }\n    opening_bid {\n      display\n    }\n    counts {\n      bidder_positions\n    }\n    __id\n  }\n  __id\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "WorksForYouQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "viewer",
        "name": "__viewer_viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
          {
            "kind": "Condition",
            "passingValue": true,
            "condition": "includeSelectedArtist",
            "selections": [
              {
                "kind": "FragmentSpread",
                "name": "WorksForYouArtist_viewer",
                "args": [
                  {
                    "kind": "Variable",
                    "name": "artistID",
                    "variableName": "artistID",
                    "type": null
                  },
                  {
                    "kind": "Variable",
                    "name": "filter",
                    "variableName": "filter",
                    "type": null
                  }
                ]
              }
            ]
          },
          {
            "kind": "Condition",
            "passingValue": false,
            "condition": "includeSelectedArtist",
            "selections": [
              {
                "kind": "FragmentSpread",
                "name": "WorksForYouContents_viewer",
                "args": [
                  {
                    "kind": "Variable",
                    "name": "for_sale",
                    "variableName": "forSale",
                    "type": null
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "WorksForYouQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
          {
            "kind": "Condition",
            "passingValue": true,
            "condition": "includeSelectedArtist",
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "artist",
                "storageKey": null,
                "args": [
                  {
                    "kind": "Variable",
                    "name": "id",
                    "variableName": "artistID",
                    "type": "String!"
                  }
                ],
                "concreteType": "Artist",
                "plural": false,
                "selections": [
                  v1,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "artworks_connection",
                    "storageKey": null,
                    "args": [
                      {
                        "kind": "Variable",
                        "name": "filter",
                        "variableName": "filter",
                        "type": "[ArtistArtworksFilters]"
                      },
                      v2,
                      {
                        "kind": "Literal",
                        "name": "sort",
                        "value": "published_at_desc",
                        "type": "ArtworkSorts"
                      }
                    ],
                    "concreteType": "ArtworkConnection",
                    "plural": false,
                    "selections": [
                      v3,
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "edges",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "ArtworkEdge",
                        "plural": true,
                        "selections": [
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "node",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "Artwork",
                            "plural": false,
                            "selections": [
                              v7,
                              v5,
                              v8,
                              v9,
                              v6,
                              v10,
                              v11,
                              v12,
                              v13,
                              v14,
                              v15,
                              v16,
                              v17,
                              v18,
                              v19,
                              v21,
                              v22,
                              v23,
                              v24
                            ]
                          },
                          v25
                        ]
                      }
                    ]
                  },
                  {
                    "kind": "LinkedHandle",
                    "alias": null,
                    "name": "artworks_connection",
                    "args": [
                      {
                        "kind": "Variable",
                        "name": "filter",
                        "variableName": "filter",
                        "type": "[ArtistArtworksFilters]"
                      },
                      v2,
                      {
                        "kind": "Literal",
                        "name": "sort",
                        "value": "published_at_desc",
                        "type": "ArtworkSorts"
                      }
                    ],
                    "handle": "connection",
                    "key": "WorksForYouArtist_artworks_connection",
                    "filters": [
                      "sort",
                      "filter"
                    ]
                  },
                  v5
                ]
              }
            ]
          },
          {
            "kind": "Condition",
            "passingValue": false,
            "condition": "includeSelectedArtist",
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "me",
                "storageKey": null,
                "args": null,
                "concreteType": "Me",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "followsAndSaves",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "FollowsAndSaves",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": "notifications",
                        "name": "bundledArtworksByArtist",
                        "storageKey": null,
                        "args": [
                          v2,
                          {
                            "kind": "Variable",
                            "name": "for_sale",
                            "variableName": "forSale",
                            "type": "Boolean"
                          },
                          {
                            "kind": "Literal",
                            "name": "sort",
                            "value": "PUBLISHED_AT_DESC",
                            "type": "ArtworkSorts"
                          }
                        ],
                        "concreteType": "FollowedArtistsArtworksGroupConnection",
                        "plural": false,
                        "selections": [
                          v3,
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "edges",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "FollowedArtistsArtworksGroupEdge",
                            "plural": true,
                            "selections": [
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "node",
                                "storageKey": null,
                                "args": null,
                                "concreteType": "FollowedArtistsArtworksGroup",
                                "plural": false,
                                "selections": [
                                  v5,
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "name": "summary",
                                    "args": null,
                                    "storageKey": null
                                  },
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "name": "artists",
                                    "args": null,
                                    "storageKey": null
                                  },
                                  {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "name": "artworksConnection",
                                    "storageKey": null,
                                    "args": null,
                                    "concreteType": "ArtworkConnection",
                                    "plural": false,
                                    "selections": [
                                      {
                                        "kind": "LinkedField",
                                        "alias": null,
                                        "name": "edges",
                                        "storageKey": null,
                                        "args": null,
                                        "concreteType": "ArtworkEdge",
                                        "plural": true,
                                        "selections": [
                                          {
                                            "kind": "LinkedField",
                                            "alias": null,
                                            "name": "node",
                                            "storageKey": null,
                                            "args": null,
                                            "concreteType": "Artwork",
                                            "plural": false,
                                            "selections": [
                                              v7,
                                              v5,
                                              v8,
                                              v9,
                                              v6,
                                              v10,
                                              v11,
                                              v12,
                                              v13,
                                              v14,
                                              v15,
                                              v16,
                                              v17,
                                              v18,
                                              v19,
                                              v21,
                                              v22,
                                              v23
                                            ]
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  v24
                                ]
                              },
                              v25
                            ]
                          }
                        ]
                      },
                      {
                        "kind": "LinkedHandle",
                        "alias": "notifications",
                        "name": "bundledArtworksByArtist",
                        "args": [
                          v2,
                          {
                            "kind": "Variable",
                            "name": "for_sale",
                            "variableName": "forSale",
                            "type": "Boolean"
                          },
                          {
                            "kind": "Literal",
                            "name": "sort",
                            "value": "PUBLISHED_AT_DESC",
                            "type": "ArtworkSorts"
                          }
                        ],
                        "handle": "connection",
                        "key": "WorksForYou_notifications",
                        "filters": [
                          "sort",
                          "for_sale"
                        ]
                      }
                    ]
                  },
                  v5
                ]
              }
            ]
          }
        ]
      },
      {
        "kind": "LinkedHandle",
        "alias": null,
        "name": "viewer",
        "args": null,
        "handle": "viewer",
        "key": "",
        "filters": null
      }
    ]
  }
};
})();
(node as any).hash = '999627e386e8d9857bbd8bda3669a40a';
export default node;
