/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type TwoFactorAuthentication_me = {
    readonly hasSecondFactorEnabled: boolean;
    readonly appSecondFactors: ReadonlyArray<{
        readonly name?: string | null;
    } | null> | null;
    readonly smsSecondFactors: ReadonlyArray<{
        readonly formattedPhoneNumber?: string | null;
    } | null> | null;
    readonly backupSecondFactors: ReadonlyArray<({
        readonly __typename: "BackupSecondFactor";
    } | {
        /*This will never be '%other', but we need some
        value in case none of the concrete values match.*/
        readonly __typename: "%other";
    }) | null> | null;
    readonly " $refType": "TwoFactorAuthentication_me";
};
export type TwoFactorAuthentication_me$data = TwoFactorAuthentication_me;
export type TwoFactorAuthentication_me$key = {
    readonly " $data"?: TwoFactorAuthentication_me$data;
    readonly " $fragmentRefs": FragmentRefs<"TwoFactorAuthentication_me">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "TwoFactorAuthentication_me",
  "type": "Me",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "hasSecondFactorEnabled",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": "appSecondFactors",
      "name": "secondFactors",
      "storageKey": "secondFactors(kinds:[\"app\"])",
      "args": [
        {
          "kind": "Literal",
          "name": "kinds",
          "value": [
            "app"
          ]
        }
      ],
      "concreteType": null,
      "plural": true,
      "selections": [
        {
          "kind": "InlineFragment",
          "type": "AppSecondFactor",
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "name",
              "args": null,
              "storageKey": null
            }
          ]
        }
      ]
    },
    {
      "kind": "LinkedField",
      "alias": "smsSecondFactors",
      "name": "secondFactors",
      "storageKey": "secondFactors(kinds:[\"sms\"])",
      "args": [
        {
          "kind": "Literal",
          "name": "kinds",
          "value": [
            "sms"
          ]
        }
      ],
      "concreteType": null,
      "plural": true,
      "selections": [
        {
          "kind": "InlineFragment",
          "type": "SmsSecondFactor",
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "formattedPhoneNumber",
              "args": null,
              "storageKey": null
            }
          ]
        }
      ]
    },
    {
      "kind": "LinkedField",
      "alias": "backupSecondFactors",
      "name": "secondFactors",
      "storageKey": "secondFactors(kinds:[\"backup\"])",
      "args": [
        {
          "kind": "Literal",
          "name": "kinds",
          "value": [
            "backup"
          ]
        }
      ],
      "concreteType": null,
      "plural": true,
      "selections": [
        {
          "kind": "InlineFragment",
          "type": "BackupSecondFactor",
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "__typename",
              "args": null,
              "storageKey": null
            }
          ]
        }
      ]
    }
  ]
};
(node as any).hash = '69f781d22dff05170a3200697c7ed96c';
export default node;
