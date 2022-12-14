import { createEnum } from "../../helpers";

export const nodeTypes = createEnum([
  "Root",
  "Expression",
  "Term",
  "Print",
  "Call",
  "CallTerm",
  "Number",
  "String",
  "Add",
  "Subtract",
  "UMinus",
  "Multiply",
  "Divide",
  "Paren",
  "Dim",
  "FunctionDecl",
  "FunctionCall",
  "FunctionReturn",
  "FunctionTerm",
  "VariableList",
  "ExpressionList",
  "ArrayList",
  "ArrayLookup",
  "Assign",
  "ArrayAssign",
  "And",
  "Or",
  "Not",
  "Relation",
  "While",
  "If",
  "For",
  "In",
  "To"
]);

export default nodeTypes;
