/// <reference path="fourslash.ts" />

// @Filename: a.ts
////export default function /*def*/[|{| "isWriteAccess": true, "isDefinition": true |}f|]() {}

// @Filename: b.ts
////import [|{| "isWriteAccess": true, "isDefinition": true |}g|] from "./a";
/////*ref*/[|g|]();

//verify.singleReferenceGroup("function f(): void");
const ranges = test.ranges();
const [r0, r1, r2] = ranges;
verify.referenceGroups(r0, [
    { definition: "function f(): void", ranges }
]);
verify.referenceGroups(r1, []);
verify.goToDefinition("ref", "def");
