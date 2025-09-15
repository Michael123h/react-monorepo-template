import type { Linter } from "eslint";

import { interopDefault } from "../util";

export async function perfectionist(): Promise<Linter.Config[]> {
  const perfectionistPlugin = await interopDefault(
    import("eslint-plugin-perfectionist")
  );

  return [
    perfectionistPlugin.configs["recommended-natural"],
    {
      rules: {
        "perfectionist/sort-exports": [
          "error",
          {
            order: "asc",
            type: "natural",
          },
        ],
        "perfectionist/sort-imports": [
          "error",
          {
            customGroups: {
              type: {
                "react-type": ["^react$", "^react-.+", "^@react/.+"],
              },
              value: {
                monoreponame: ["^@monoreponame/.+"],
                react: ["^react$", "^react-.+", "^@react/.+"],
              },
            },
            environment: "node",
            groups: [
              ["external-type", "builtin-type", "type"],
              "react-type",
              ["parent-type", "sibling-type", "index-type"],
              ["internal-type"],
              "builtin",
              "react",
              "monoreponame",
              "external",
              "internal",
              ["parent", "sibling", "index"],
              "side-effect",
              "side-effect-style",
              "style",
              "object",
              "unknown",
            ],
            internalPattern: ["^#/.+"],
            newlinesBetween: "always",
            order: "asc",
            type: "natural",
          },
        ],
        "perfectionist/sort-modules": "off",
        "perfectionist/sort-named-exports": [
          "error",
          {
            order: "asc",
            type: "natural",
          },
        ],
        "perfectionist/sort-objects": [
          "off",
          {
            customGroups: {
              items: "items",
              list: "list",
              children: "children",
            },
            groups: ["unknown", "items", "list", "children"],
            ignorePattern: ["children"],
            order: "asc",
            type: "natural",
          },
        ],
      },
    },
  ];
}
