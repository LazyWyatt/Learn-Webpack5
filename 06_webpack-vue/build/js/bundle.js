/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@vue/compiler-core/dist/compiler-core.esm-bundler.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@vue/compiler-core/dist/compiler-core.esm-bundler.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateCodeFrame": () => (/* reexport safe */ _vue_shared__WEBPACK_IMPORTED_MODULE_0__.generateCodeFrame),
/* harmony export */   "BASE_TRANSITION": () => (/* binding */ BASE_TRANSITION),
/* harmony export */   "CAMELIZE": () => (/* binding */ CAMELIZE),
/* harmony export */   "CAPITALIZE": () => (/* binding */ CAPITALIZE),
/* harmony export */   "CREATE_BLOCK": () => (/* binding */ CREATE_BLOCK),
/* harmony export */   "CREATE_COMMENT": () => (/* binding */ CREATE_COMMENT),
/* harmony export */   "CREATE_SLOTS": () => (/* binding */ CREATE_SLOTS),
/* harmony export */   "CREATE_STATIC": () => (/* binding */ CREATE_STATIC),
/* harmony export */   "CREATE_TEXT": () => (/* binding */ CREATE_TEXT),
/* harmony export */   "CREATE_VNODE": () => (/* binding */ CREATE_VNODE),
/* harmony export */   "FRAGMENT": () => (/* binding */ FRAGMENT),
/* harmony export */   "IS_REF": () => (/* binding */ IS_REF),
/* harmony export */   "KEEP_ALIVE": () => (/* binding */ KEEP_ALIVE),
/* harmony export */   "MERGE_PROPS": () => (/* binding */ MERGE_PROPS),
/* harmony export */   "OPEN_BLOCK": () => (/* binding */ OPEN_BLOCK),
/* harmony export */   "POP_SCOPE_ID": () => (/* binding */ POP_SCOPE_ID),
/* harmony export */   "PUSH_SCOPE_ID": () => (/* binding */ PUSH_SCOPE_ID),
/* harmony export */   "RENDER_LIST": () => (/* binding */ RENDER_LIST),
/* harmony export */   "RENDER_SLOT": () => (/* binding */ RENDER_SLOT),
/* harmony export */   "RESOLVE_COMPONENT": () => (/* binding */ RESOLVE_COMPONENT),
/* harmony export */   "RESOLVE_DIRECTIVE": () => (/* binding */ RESOLVE_DIRECTIVE),
/* harmony export */   "RESOLVE_DYNAMIC_COMPONENT": () => (/* binding */ RESOLVE_DYNAMIC_COMPONENT),
/* harmony export */   "RESOLVE_FILTER": () => (/* binding */ RESOLVE_FILTER),
/* harmony export */   "SET_BLOCK_TRACKING": () => (/* binding */ SET_BLOCK_TRACKING),
/* harmony export */   "SUSPENSE": () => (/* binding */ SUSPENSE),
/* harmony export */   "TELEPORT": () => (/* binding */ TELEPORT),
/* harmony export */   "TO_DISPLAY_STRING": () => (/* binding */ TO_DISPLAY_STRING),
/* harmony export */   "TO_HANDLERS": () => (/* binding */ TO_HANDLERS),
/* harmony export */   "TO_HANDLER_KEY": () => (/* binding */ TO_HANDLER_KEY),
/* harmony export */   "UNREF": () => (/* binding */ UNREF),
/* harmony export */   "WITH_CTX": () => (/* binding */ WITH_CTX),
/* harmony export */   "WITH_DIRECTIVES": () => (/* binding */ WITH_DIRECTIVES),
/* harmony export */   "WITH_SCOPE_ID": () => (/* binding */ WITH_SCOPE_ID),
/* harmony export */   "advancePositionWithClone": () => (/* binding */ advancePositionWithClone),
/* harmony export */   "advancePositionWithMutation": () => (/* binding */ advancePositionWithMutation),
/* harmony export */   "assert": () => (/* binding */ assert),
/* harmony export */   "baseCompile": () => (/* binding */ baseCompile),
/* harmony export */   "baseParse": () => (/* binding */ baseParse),
/* harmony export */   "buildProps": () => (/* binding */ buildProps),
/* harmony export */   "buildSlots": () => (/* binding */ buildSlots),
/* harmony export */   "checkCompatEnabled": () => (/* binding */ checkCompatEnabled),
/* harmony export */   "createArrayExpression": () => (/* binding */ createArrayExpression),
/* harmony export */   "createAssignmentExpression": () => (/* binding */ createAssignmentExpression),
/* harmony export */   "createBlockStatement": () => (/* binding */ createBlockStatement),
/* harmony export */   "createCacheExpression": () => (/* binding */ createCacheExpression),
/* harmony export */   "createCallExpression": () => (/* binding */ createCallExpression),
/* harmony export */   "createCompilerError": () => (/* binding */ createCompilerError),
/* harmony export */   "createCompoundExpression": () => (/* binding */ createCompoundExpression),
/* harmony export */   "createConditionalExpression": () => (/* binding */ createConditionalExpression),
/* harmony export */   "createForLoopParams": () => (/* binding */ createForLoopParams),
/* harmony export */   "createFunctionExpression": () => (/* binding */ createFunctionExpression),
/* harmony export */   "createIfStatement": () => (/* binding */ createIfStatement),
/* harmony export */   "createInterpolation": () => (/* binding */ createInterpolation),
/* harmony export */   "createObjectExpression": () => (/* binding */ createObjectExpression),
/* harmony export */   "createObjectProperty": () => (/* binding */ createObjectProperty),
/* harmony export */   "createReturnStatement": () => (/* binding */ createReturnStatement),
/* harmony export */   "createRoot": () => (/* binding */ createRoot),
/* harmony export */   "createSequenceExpression": () => (/* binding */ createSequenceExpression),
/* harmony export */   "createSimpleExpression": () => (/* binding */ createSimpleExpression),
/* harmony export */   "createStructuralDirectiveTransform": () => (/* binding */ createStructuralDirectiveTransform),
/* harmony export */   "createTemplateLiteral": () => (/* binding */ createTemplateLiteral),
/* harmony export */   "createTransformContext": () => (/* binding */ createTransformContext),
/* harmony export */   "createVNodeCall": () => (/* binding */ createVNodeCall),
/* harmony export */   "findDir": () => (/* binding */ findDir),
/* harmony export */   "findProp": () => (/* binding */ findProp),
/* harmony export */   "generate": () => (/* binding */ generate),
/* harmony export */   "getBaseTransformPreset": () => (/* binding */ getBaseTransformPreset),
/* harmony export */   "getInnerRange": () => (/* binding */ getInnerRange),
/* harmony export */   "hasDynamicKeyVBind": () => (/* binding */ hasDynamicKeyVBind),
/* harmony export */   "hasScopeRef": () => (/* binding */ hasScopeRef),
/* harmony export */   "helperNameMap": () => (/* binding */ helperNameMap),
/* harmony export */   "injectProp": () => (/* binding */ injectProp),
/* harmony export */   "isBindKey": () => (/* binding */ isBindKey),
/* harmony export */   "isBuiltInType": () => (/* binding */ isBuiltInType),
/* harmony export */   "isCoreComponent": () => (/* binding */ isCoreComponent),
/* harmony export */   "isMemberExpression": () => (/* binding */ isMemberExpression),
/* harmony export */   "isSimpleIdentifier": () => (/* binding */ isSimpleIdentifier),
/* harmony export */   "isSlotOutlet": () => (/* binding */ isSlotOutlet),
/* harmony export */   "isStaticExp": () => (/* binding */ isStaticExp),
/* harmony export */   "isTemplateNode": () => (/* binding */ isTemplateNode),
/* harmony export */   "isText": () => (/* binding */ isText),
/* harmony export */   "isVSlot": () => (/* binding */ isVSlot),
/* harmony export */   "locStub": () => (/* binding */ locStub),
/* harmony export */   "noopDirectiveTransform": () => (/* binding */ noopDirectiveTransform),
/* harmony export */   "processExpression": () => (/* binding */ processExpression),
/* harmony export */   "processFor": () => (/* binding */ processFor),
/* harmony export */   "processIf": () => (/* binding */ processIf),
/* harmony export */   "processSlotOutlet": () => (/* binding */ processSlotOutlet),
/* harmony export */   "registerRuntimeHelpers": () => (/* binding */ registerRuntimeHelpers),
/* harmony export */   "resolveComponentType": () => (/* binding */ resolveComponentType),
/* harmony export */   "toValidAssetId": () => (/* binding */ toValidAssetId),
/* harmony export */   "trackSlotScopes": () => (/* binding */ trackSlotScopes),
/* harmony export */   "trackVForSlotScopes": () => (/* binding */ trackVForSlotScopes),
/* harmony export */   "transform": () => (/* binding */ transform),
/* harmony export */   "transformBind": () => (/* binding */ transformBind),
/* harmony export */   "transformElement": () => (/* binding */ transformElement),
/* harmony export */   "transformExpression": () => (/* binding */ transformExpression),
/* harmony export */   "transformModel": () => (/* binding */ transformModel),
/* harmony export */   "transformOn": () => (/* binding */ transformOn),
/* harmony export */   "traverseNode": () => (/* binding */ traverseNode),
/* harmony export */   "warnDeprecation": () => (/* binding */ warnDeprecation)
/* harmony export */ });
/* harmony import */ var _vue_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/shared */ "./node_modules/@vue/shared/dist/shared.esm-bundler.js");
var _errorMessages, _helperNameMap, _deprecationData;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function defaultOnError(error) {
  throw error;
}

function defaultOnWarn(msg) {
   true && console.warn("[Vue warn] ".concat(msg.message));
}

function createCompilerError(code, loc, messages, additionalMessage) {
  var msg =  true ? (messages || errorMessages)[code] + (additionalMessage || "") : 0;
  var error = new SyntaxError(String(msg));
  error.code = code;
  error.loc = loc;
  return error;
}

var errorMessages = (_errorMessages = {}, _defineProperty(_errorMessages, 0
/* ABRUPT_CLOSING_OF_EMPTY_COMMENT */
, 'Illegal comment.'), _defineProperty(_errorMessages, 1
/* CDATA_IN_HTML_CONTENT */
, 'CDATA section is allowed only in XML context.'), _defineProperty(_errorMessages, 2
/* DUPLICATE_ATTRIBUTE */
, 'Duplicate attribute.'), _defineProperty(_errorMessages, 3
/* END_TAG_WITH_ATTRIBUTES */
, 'End tag cannot have attributes.'), _defineProperty(_errorMessages, 4
/* END_TAG_WITH_TRAILING_SOLIDUS */
, "Illegal '/' in tags."), _defineProperty(_errorMessages, 5
/* EOF_BEFORE_TAG_NAME */
, 'Unexpected EOF in tag.'), _defineProperty(_errorMessages, 6
/* EOF_IN_CDATA */
, 'Unexpected EOF in CDATA section.'), _defineProperty(_errorMessages, 7
/* EOF_IN_COMMENT */
, 'Unexpected EOF in comment.'), _defineProperty(_errorMessages, 8
/* EOF_IN_SCRIPT_HTML_COMMENT_LIKE_TEXT */
, 'Unexpected EOF in script.'), _defineProperty(_errorMessages, 9
/* EOF_IN_TAG */
, 'Unexpected EOF in tag.'), _defineProperty(_errorMessages, 10
/* INCORRECTLY_CLOSED_COMMENT */
, 'Incorrectly closed comment.'), _defineProperty(_errorMessages, 11
/* INCORRECTLY_OPENED_COMMENT */
, 'Incorrectly opened comment.'), _defineProperty(_errorMessages, 12
/* INVALID_FIRST_CHARACTER_OF_TAG_NAME */
, "Illegal tag name. Use '&lt;' to print '<'."), _defineProperty(_errorMessages, 13
/* MISSING_ATTRIBUTE_VALUE */
, 'Attribute value was expected.'), _defineProperty(_errorMessages, 14
/* MISSING_END_TAG_NAME */
, 'End tag name was expected.'), _defineProperty(_errorMessages, 15
/* MISSING_WHITESPACE_BETWEEN_ATTRIBUTES */
, 'Whitespace was expected.'), _defineProperty(_errorMessages, 16
/* NESTED_COMMENT */
, "Unexpected '<!--' in comment."), _defineProperty(_errorMessages, 17
/* UNEXPECTED_CHARACTER_IN_ATTRIBUTE_NAME */
, 'Attribute name cannot contain U+0022 ("), U+0027 (\'), and U+003C (<).'), _defineProperty(_errorMessages, 18
/* UNEXPECTED_CHARACTER_IN_UNQUOTED_ATTRIBUTE_VALUE */
, 'Unquoted attribute value cannot contain U+0022 ("), U+0027 (\'), U+003C (<), U+003D (=), and U+0060 (`).'), _defineProperty(_errorMessages, 19
/* UNEXPECTED_EQUALS_SIGN_BEFORE_ATTRIBUTE_NAME */
, "Attribute name cannot start with '='."), _defineProperty(_errorMessages, 21
/* UNEXPECTED_QUESTION_MARK_INSTEAD_OF_TAG_NAME */
, "'<?' is allowed only in XML context."), _defineProperty(_errorMessages, 20
/* UNEXPECTED_NULL_CHARACTER */
, "Unexpected null cahracter."), _defineProperty(_errorMessages, 22
/* UNEXPECTED_SOLIDUS_IN_TAG */
, "Illegal '/' in tags."), _defineProperty(_errorMessages, 23
/* X_INVALID_END_TAG */
, 'Invalid end tag.'), _defineProperty(_errorMessages, 24
/* X_MISSING_END_TAG */
, 'Element is missing end tag.'), _defineProperty(_errorMessages, 25
/* X_MISSING_INTERPOLATION_END */
, 'Interpolation end sign was not found.'), _defineProperty(_errorMessages, 26
/* X_MISSING_DYNAMIC_DIRECTIVE_ARGUMENT_END */
, 'End bracket for dynamic directive argument was not found. ' + 'Note that dynamic directive argument cannot contain spaces.'), _defineProperty(_errorMessages, 27
/* X_V_IF_NO_EXPRESSION */
, "v-if/v-else-if is missing expression."), _defineProperty(_errorMessages, 28
/* X_V_IF_SAME_KEY */
, "v-if/else branches must use unique keys."), _defineProperty(_errorMessages, 29
/* X_V_ELSE_NO_ADJACENT_IF */
, "v-else/v-else-if has no adjacent v-if."), _defineProperty(_errorMessages, 30
/* X_V_FOR_NO_EXPRESSION */
, "v-for is missing expression."), _defineProperty(_errorMessages, 31
/* X_V_FOR_MALFORMED_EXPRESSION */
, "v-for has invalid expression."), _defineProperty(_errorMessages, 32
/* X_V_FOR_TEMPLATE_KEY_PLACEMENT */
, "<template v-for> key should be placed on the <template> tag."), _defineProperty(_errorMessages, 33
/* X_V_BIND_NO_EXPRESSION */
, "v-bind is missing expression."), _defineProperty(_errorMessages, 34
/* X_V_ON_NO_EXPRESSION */
, "v-on is missing expression."), _defineProperty(_errorMessages, 35
/* X_V_SLOT_UNEXPECTED_DIRECTIVE_ON_SLOT_OUTLET */
, "Unexpected custom directive on <slot> outlet."), _defineProperty(_errorMessages, 36
/* X_V_SLOT_MIXED_SLOT_USAGE */
, "Mixed v-slot usage on both the component and nested <template>." + "When there are multiple named slots, all slots should use <template> " + "syntax to avoid scope ambiguity."), _defineProperty(_errorMessages, 37
/* X_V_SLOT_DUPLICATE_SLOT_NAMES */
, "Duplicate slot names found. "), _defineProperty(_errorMessages, 38
/* X_V_SLOT_EXTRANEOUS_DEFAULT_SLOT_CHILDREN */
, "Extraneous children found when component already has explicitly named " + "default slot. These children will be ignored."), _defineProperty(_errorMessages, 39
/* X_V_SLOT_MISPLACED */
, "v-slot can only be used on components or <template> tags."), _defineProperty(_errorMessages, 40
/* X_V_MODEL_NO_EXPRESSION */
, "v-model is missing expression."), _defineProperty(_errorMessages, 41
/* X_V_MODEL_MALFORMED_EXPRESSION */
, "v-model value must be a valid JavaScript member expression."), _defineProperty(_errorMessages, 42
/* X_V_MODEL_ON_SCOPE_VARIABLE */
, "v-model cannot be used on v-for or v-slot scope variables because they are not writable."), _defineProperty(_errorMessages, 43
/* X_INVALID_EXPRESSION */
, "Error parsing JavaScript expression: "), _defineProperty(_errorMessages, 44
/* X_KEEP_ALIVE_INVALID_CHILDREN */
, "<KeepAlive> expects exactly one child component."), _defineProperty(_errorMessages, 45
/* X_PREFIX_ID_NOT_SUPPORTED */
, "\"prefixIdentifiers\" option is not supported in this build of compiler."), _defineProperty(_errorMessages, 46
/* X_MODULE_MODE_NOT_SUPPORTED */
, "ES module mode is not supported in this build of compiler."), _defineProperty(_errorMessages, 47
/* X_CACHE_HANDLER_NOT_SUPPORTED */
, "\"cacheHandlers\" option is only supported when the \"prefixIdentifiers\" option is enabled."), _defineProperty(_errorMessages, 48
/* X_SCOPE_ID_NOT_SUPPORTED */
, "\"scopeId\" option is only supported in module mode."), _defineProperty(_errorMessages, 49
/* __EXTEND_POINT__ */
, ""), _errorMessages);
var FRAGMENT = Symbol( true ? "Fragment" : 0);
var TELEPORT = Symbol( true ? "Teleport" : 0);
var SUSPENSE = Symbol( true ? "Suspense" : 0);
var KEEP_ALIVE = Symbol( true ? "KeepAlive" : 0);
var BASE_TRANSITION = Symbol( true ? "BaseTransition" : 0);
var OPEN_BLOCK = Symbol( true ? "openBlock" : 0);
var CREATE_BLOCK = Symbol( true ? "createBlock" : 0);
var CREATE_VNODE = Symbol( true ? "createVNode" : 0);
var CREATE_COMMENT = Symbol( true ? "createCommentVNode" : 0);
var CREATE_TEXT = Symbol( true ? "createTextVNode" : 0);
var CREATE_STATIC = Symbol( true ? "createStaticVNode" : 0);
var RESOLVE_COMPONENT = Symbol( true ? "resolveComponent" : 0);
var RESOLVE_DYNAMIC_COMPONENT = Symbol( true ? "resolveDynamicComponent" : 0);
var RESOLVE_DIRECTIVE = Symbol( true ? "resolveDirective" : 0);
var RESOLVE_FILTER = Symbol( true ? "resolveFilter" : 0);
var WITH_DIRECTIVES = Symbol( true ? "withDirectives" : 0);
var RENDER_LIST = Symbol( true ? "renderList" : 0);
var RENDER_SLOT = Symbol( true ? "renderSlot" : 0);
var CREATE_SLOTS = Symbol( true ? "createSlots" : 0);
var TO_DISPLAY_STRING = Symbol( true ? "toDisplayString" : 0);
var MERGE_PROPS = Symbol( true ? "mergeProps" : 0);
var TO_HANDLERS = Symbol( true ? "toHandlers" : 0);
var CAMELIZE = Symbol( true ? "camelize" : 0);
var CAPITALIZE = Symbol( true ? "capitalize" : 0);
var TO_HANDLER_KEY = Symbol( true ? "toHandlerKey" : 0);
var SET_BLOCK_TRACKING = Symbol( true ? "setBlockTracking" : 0);
var PUSH_SCOPE_ID = Symbol( true ? "pushScopeId" : 0);
var POP_SCOPE_ID = Symbol( true ? "popScopeId" : 0);
var WITH_SCOPE_ID = Symbol( true ? "withScopeId" : 0);
var WITH_CTX = Symbol( true ? "withCtx" : 0);
var UNREF = Symbol( true ? "unref" : 0);
var IS_REF = Symbol( true ? "isRef" : 0); // Name mapping for runtime helpers that need to be imported from 'vue' in
// generated code. Make sure these are correctly exported in the runtime!
// Using `any` here because TS doesn't allow symbols as index type.

var helperNameMap = (_helperNameMap = {}, _defineProperty(_helperNameMap, FRAGMENT, "Fragment"), _defineProperty(_helperNameMap, TELEPORT, "Teleport"), _defineProperty(_helperNameMap, SUSPENSE, "Suspense"), _defineProperty(_helperNameMap, KEEP_ALIVE, "KeepAlive"), _defineProperty(_helperNameMap, BASE_TRANSITION, "BaseTransition"), _defineProperty(_helperNameMap, OPEN_BLOCK, "openBlock"), _defineProperty(_helperNameMap, CREATE_BLOCK, "createBlock"), _defineProperty(_helperNameMap, CREATE_VNODE, "createVNode"), _defineProperty(_helperNameMap, CREATE_COMMENT, "createCommentVNode"), _defineProperty(_helperNameMap, CREATE_TEXT, "createTextVNode"), _defineProperty(_helperNameMap, CREATE_STATIC, "createStaticVNode"), _defineProperty(_helperNameMap, RESOLVE_COMPONENT, "resolveComponent"), _defineProperty(_helperNameMap, RESOLVE_DYNAMIC_COMPONENT, "resolveDynamicComponent"), _defineProperty(_helperNameMap, RESOLVE_DIRECTIVE, "resolveDirective"), _defineProperty(_helperNameMap, RESOLVE_FILTER, "resolveFilter"), _defineProperty(_helperNameMap, WITH_DIRECTIVES, "withDirectives"), _defineProperty(_helperNameMap, RENDER_LIST, "renderList"), _defineProperty(_helperNameMap, RENDER_SLOT, "renderSlot"), _defineProperty(_helperNameMap, CREATE_SLOTS, "createSlots"), _defineProperty(_helperNameMap, TO_DISPLAY_STRING, "toDisplayString"), _defineProperty(_helperNameMap, MERGE_PROPS, "mergeProps"), _defineProperty(_helperNameMap, TO_HANDLERS, "toHandlers"), _defineProperty(_helperNameMap, CAMELIZE, "camelize"), _defineProperty(_helperNameMap, CAPITALIZE, "capitalize"), _defineProperty(_helperNameMap, TO_HANDLER_KEY, "toHandlerKey"), _defineProperty(_helperNameMap, SET_BLOCK_TRACKING, "setBlockTracking"), _defineProperty(_helperNameMap, PUSH_SCOPE_ID, "pushScopeId"), _defineProperty(_helperNameMap, POP_SCOPE_ID, "popScopeId"), _defineProperty(_helperNameMap, WITH_SCOPE_ID, "withScopeId"), _defineProperty(_helperNameMap, WITH_CTX, "withCtx"), _defineProperty(_helperNameMap, UNREF, "unref"), _defineProperty(_helperNameMap, IS_REF, "isRef"), _helperNameMap);

function registerRuntimeHelpers(helpers) {
  Object.getOwnPropertySymbols(helpers).forEach(function (s) {
    helperNameMap[s] = helpers[s];
  });
} // AST Utilities ---------------------------------------------------------------
// Some expressions, e.g. sequence and conditional expressions, are never
// associated with template nodes, so their source locations are just a stub.
// Container types like CompoundExpression also don't need a real location.


var locStub = {
  source: '',
  start: {
    line: 1,
    column: 1,
    offset: 0
  },
  end: {
    line: 1,
    column: 1,
    offset: 0
  }
};

function createRoot(children) {
  var loc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : locStub;
  return {
    type: 0
    /* ROOT */
    ,
    children: children,
    helpers: [],
    components: [],
    directives: [],
    hoists: [],
    imports: [],
    cached: 0,
    temps: 0,
    codegenNode: undefined,
    loc: loc
  };
}

function createVNodeCall(context, tag, props, children, patchFlag, dynamicProps, directives) {
  var isBlock = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;
  var disableTracking = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : false;
  var loc = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : locStub;

  if (context) {
    if (isBlock) {
      context.helper(OPEN_BLOCK);
      context.helper(CREATE_BLOCK);
    } else {
      context.helper(CREATE_VNODE);
    }

    if (directives) {
      context.helper(WITH_DIRECTIVES);
    }
  }

  return {
    type: 13
    /* VNODE_CALL */
    ,
    tag: tag,
    props: props,
    children: children,
    patchFlag: patchFlag,
    dynamicProps: dynamicProps,
    directives: directives,
    isBlock: isBlock,
    disableTracking: disableTracking,
    loc: loc
  };
}

function createArrayExpression(elements) {
  var loc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : locStub;
  return {
    type: 17
    /* JS_ARRAY_EXPRESSION */
    ,
    loc: loc,
    elements: elements
  };
}

function createObjectExpression(properties) {
  var loc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : locStub;
  return {
    type: 15
    /* JS_OBJECT_EXPRESSION */
    ,
    loc: loc,
    properties: properties
  };
}

function createObjectProperty(key, value) {
  return {
    type: 16
    /* JS_PROPERTY */
    ,
    loc: locStub,
    key: (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(key) ? createSimpleExpression(key, true) : key,
    value: value
  };
}

function createSimpleExpression(content, isStatic)
/* NOT_CONSTANT */
{
  var loc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : locStub;
  var constType = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  return {
    type: 4
    /* SIMPLE_EXPRESSION */
    ,
    loc: loc,
    content: content,
    isStatic: isStatic,
    constType: isStatic ? 3
    /* CAN_STRINGIFY */
    : constType
  };
}

function createInterpolation(content, loc) {
  return {
    type: 5
    /* INTERPOLATION */
    ,
    loc: loc,
    content: (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(content) ? createSimpleExpression(content, false, loc) : content
  };
}

function createCompoundExpression(children) {
  var loc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : locStub;
  return {
    type: 8
    /* COMPOUND_EXPRESSION */
    ,
    loc: loc,
    children: children
  };
}

function createCallExpression(callee) {
  var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var loc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : locStub;
  return {
    type: 14
    /* JS_CALL_EXPRESSION */
    ,
    loc: loc,
    callee: callee,
    arguments: args
  };
}

function createFunctionExpression(params) {
  var returns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
  var newline = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var isSlot = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var loc = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : locStub;
  return {
    type: 18
    /* JS_FUNCTION_EXPRESSION */
    ,
    params: params,
    returns: returns,
    newline: newline,
    isSlot: isSlot,
    loc: loc
  };
}

function createConditionalExpression(test, consequent, alternate) {
  var newline = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  return {
    type: 19
    /* JS_CONDITIONAL_EXPRESSION */
    ,
    test: test,
    consequent: consequent,
    alternate: alternate,
    newline: newline,
    loc: locStub
  };
}

function createCacheExpression(index, value) {
  var isVNode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  return {
    type: 20
    /* JS_CACHE_EXPRESSION */
    ,
    index: index,
    value: value,
    isVNode: isVNode,
    loc: locStub
  };
}

function createBlockStatement(body) {
  return {
    type: 21
    /* JS_BLOCK_STATEMENT */
    ,
    body: body,
    loc: locStub
  };
}

function createTemplateLiteral(elements) {
  return {
    type: 22
    /* JS_TEMPLATE_LITERAL */
    ,
    elements: elements,
    loc: locStub
  };
}

function createIfStatement(test, consequent, alternate) {
  return {
    type: 23
    /* JS_IF_STATEMENT */
    ,
    test: test,
    consequent: consequent,
    alternate: alternate,
    loc: locStub
  };
}

function createAssignmentExpression(left, right) {
  return {
    type: 24
    /* JS_ASSIGNMENT_EXPRESSION */
    ,
    left: left,
    right: right,
    loc: locStub
  };
}

function createSequenceExpression(expressions) {
  return {
    type: 25
    /* JS_SEQUENCE_EXPRESSION */
    ,
    expressions: expressions,
    loc: locStub
  };
}

function createReturnStatement(returns) {
  return {
    type: 26
    /* JS_RETURN_STATEMENT */
    ,
    returns: returns,
    loc: locStub
  };
}

var isStaticExp = function isStaticExp(p) {
  return p.type === 4
  /* SIMPLE_EXPRESSION */
  && p.isStatic;
};

var isBuiltInType = function isBuiltInType(tag, expected) {
  return tag === expected || tag === (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.hyphenate)(expected);
};

function isCoreComponent(tag) {
  if (isBuiltInType(tag, 'Teleport')) {
    return TELEPORT;
  } else if (isBuiltInType(tag, 'Suspense')) {
    return SUSPENSE;
  } else if (isBuiltInType(tag, 'KeepAlive')) {
    return KEEP_ALIVE;
  } else if (isBuiltInType(tag, 'BaseTransition')) {
    return BASE_TRANSITION;
  }
}

var nonIdentifierRE = /^\d|[^\$\w]/;

var isSimpleIdentifier = function isSimpleIdentifier(name) {
  return !nonIdentifierRE.test(name);
};

var validFirstIdentCharRE = /[A-Za-z_$\xA0-\uFFFF]/;
var validIdentCharRE = /[\.\w$\xA0-\uFFFF]/;
var whitespaceRE = /\s+[.[]\s*|\s*[.[]\s+/g;
/**
 * Simple lexer to check if an expression is a member expression. This is
 * lax and only checks validity at the root level (i.e. does not validate exps
 * inside square brackets), but it's ok since these are only used on template
 * expressions and false positives are invalid expressions in the first place.
 */

var isMemberExpression = function isMemberExpression(path) {
  // remove whitespaces around . or [ first
  path = path.trim().replace(whitespaceRE, function (s) {
    return s.trim();
  });
  var state = 0
  /* inMemberExp */
  ;
  var prevState = 0
  /* inMemberExp */
  ;
  var currentOpenBracketCount = 0;
  var currentStringType = null;

  for (var i = 0; i < path.length; i++) {
    var _char = path.charAt(i);

    switch (state) {
      case 0
      /* inMemberExp */
      :
        if (_char === '[') {
          prevState = state;
          state = 1
          /* inBrackets */
          ;
          currentOpenBracketCount++;
        } else if (!(i === 0 ? validFirstIdentCharRE : validIdentCharRE).test(_char)) {
          return false;
        }

        break;

      case 1
      /* inBrackets */
      :
        if (_char === "'" || _char === "\"" || _char === '`') {
          prevState = state;
          state = 2
          /* inString */
          ;
          currentStringType = _char;
        } else if (_char === "[") {
          currentOpenBracketCount++;
        } else if (_char === "]") {
          if (! --currentOpenBracketCount) {
            state = prevState;
          }
        }

        break;

      case 2
      /* inString */
      :
        if (_char === currentStringType) {
          state = prevState;
          currentStringType = null;
        }

        break;
    }
  }

  return !currentOpenBracketCount;
};

function getInnerRange(loc, offset, length) {
  var source = loc.source.substr(offset, length);
  var newLoc = {
    source: source,
    start: advancePositionWithClone(loc.start, loc.source, offset),
    end: loc.end
  };

  if (length != null) {
    newLoc.end = advancePositionWithClone(loc.start, loc.source, offset + length);
  }

  return newLoc;
}

function advancePositionWithClone(pos, source) {
  var numberOfCharacters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : source.length;
  return advancePositionWithMutation((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.extend)({}, pos), source, numberOfCharacters);
} // advance by mutation without cloning (for performance reasons), since this
// gets called a lot in the parser


function advancePositionWithMutation(pos, source) {
  var numberOfCharacters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : source.length;
  var linesCount = 0;
  var lastNewLinePos = -1;

  for (var i = 0; i < numberOfCharacters; i++) {
    if (source.charCodeAt(i) === 10
    /* newline char code */
    ) {
        linesCount++;
        lastNewLinePos = i;
      }
  }

  pos.offset += numberOfCharacters;
  pos.line += linesCount;
  pos.column = lastNewLinePos === -1 ? pos.column + numberOfCharacters : numberOfCharacters - lastNewLinePos;
  return pos;
}

function assert(condition, msg) {
  /* istanbul ignore if */
  if (!condition) {
    throw new Error(msg || "unexpected compiler condition");
  }
}

function findDir(node, name) {
  var allowEmpty = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  for (var i = 0; i < node.props.length; i++) {
    var p = node.props[i];

    if (p.type === 7
    /* DIRECTIVE */
    && (allowEmpty || p.exp) && ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(name) ? p.name === name : name.test(p.name))) {
      return p;
    }
  }
}

function findProp(node, name) {
  var dynamicOnly = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var allowEmpty = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  for (var i = 0; i < node.props.length; i++) {
    var p = node.props[i];

    if (p.type === 6
    /* ATTRIBUTE */
    ) {
        if (dynamicOnly) continue;

        if (p.name === name && (p.value || allowEmpty)) {
          return p;
        }
      } else if (p.name === 'bind' && (p.exp || allowEmpty) && isBindKey(p.arg, name)) {
      return p;
    }
  }
}

function isBindKey(arg, name) {
  return !!(arg && isStaticExp(arg) && arg.content === name);
}

function hasDynamicKeyVBind(node) {
  return node.props.some(function (p) {
    return p.type === 7
    /* DIRECTIVE */
    && p.name === 'bind' && (!p.arg || // v-bind="obj"
    p.arg.type !== 4
    /* SIMPLE_EXPRESSION */
    || // v-bind:[_ctx.foo]
    !p.arg.isStatic);
  } // v-bind:[foo]
  );
}

function isText(node) {
  return node.type === 5
  /* INTERPOLATION */
  || node.type === 2
  /* TEXT */
  ;
}

function isVSlot(p) {
  return p.type === 7
  /* DIRECTIVE */
  && p.name === 'slot';
}

function isTemplateNode(node) {
  return node.type === 1
  /* ELEMENT */
  && node.tagType === 3
  /* TEMPLATE */
  ;
}

function isSlotOutlet(node) {
  return node.type === 1
  /* ELEMENT */
  && node.tagType === 2
  /* SLOT */
  ;
}

function injectProp(node, prop, context) {
  var propsWithInjection;
  var props = node.type === 13
  /* VNODE_CALL */
  ? node.props : node.arguments[2];

  if (props == null || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(props)) {
    propsWithInjection = createObjectExpression([prop]);
  } else if (props.type === 14
  /* JS_CALL_EXPRESSION */
  ) {
      // merged props... add ours
      // only inject key to object literal if it's the first argument so that
      // if doesn't override user provided keys
      var first = props.arguments[0];

      if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(first) && first.type === 15
      /* JS_OBJECT_EXPRESSION */
      ) {
          first.properties.unshift(prop);
        } else {
        if (props.callee === TO_HANDLERS) {
          // #2366
          propsWithInjection = createCallExpression(context.helper(MERGE_PROPS), [createObjectExpression([prop]), props]);
        } else {
          props.arguments.unshift(createObjectExpression([prop]));
        }
      }

      !propsWithInjection && (propsWithInjection = props);
    } else if (props.type === 15
  /* JS_OBJECT_EXPRESSION */
  ) {
      var alreadyExists = false; // check existing key to avoid overriding user provided keys

      if (prop.key.type === 4
      /* SIMPLE_EXPRESSION */
      ) {
          var propKeyName = prop.key.content;
          alreadyExists = props.properties.some(function (p) {
            return p.key.type === 4
            /* SIMPLE_EXPRESSION */
            && p.key.content === propKeyName;
          });
        }

      if (!alreadyExists) {
        props.properties.unshift(prop);
      }

      propsWithInjection = props;
    } else {
    // single v-bind with expression, return a merged replacement
    propsWithInjection = createCallExpression(context.helper(MERGE_PROPS), [createObjectExpression([prop]), props]);
  }

  if (node.type === 13
  /* VNODE_CALL */
  ) {
      node.props = propsWithInjection;
    } else {
    node.arguments[2] = propsWithInjection;
  }
}

function toValidAssetId(name, type) {
  return "_".concat(type, "_").concat(name.replace(/[^\w]/g, '_'));
} // Check if a node contains expressions that reference current context scope ids


function hasScopeRef(node, ids) {
  if (!node || Object.keys(ids).length === 0) {
    return false;
  }

  switch (node.type) {
    case 1
    /* ELEMENT */
    :
      for (var i = 0; i < node.props.length; i++) {
        var p = node.props[i];

        if (p.type === 7
        /* DIRECTIVE */
        && (hasScopeRef(p.arg, ids) || hasScopeRef(p.exp, ids))) {
          return true;
        }
      }

      return node.children.some(function (c) {
        return hasScopeRef(c, ids);
      });

    case 11
    /* FOR */
    :
      if (hasScopeRef(node.source, ids)) {
        return true;
      }

      return node.children.some(function (c) {
        return hasScopeRef(c, ids);
      });

    case 9
    /* IF */
    :
      return node.branches.some(function (b) {
        return hasScopeRef(b, ids);
      });

    case 10
    /* IF_BRANCH */
    :
      if (hasScopeRef(node.condition, ids)) {
        return true;
      }

      return node.children.some(function (c) {
        return hasScopeRef(c, ids);
      });

    case 4
    /* SIMPLE_EXPRESSION */
    :
      return !node.isStatic && isSimpleIdentifier(node.content) && !!ids[node.content];

    case 8
    /* COMPOUND_EXPRESSION */
    :
      return node.children.some(function (c) {
        return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isObject)(c) && hasScopeRef(c, ids);
      });

    case 5
    /* INTERPOLATION */
    :
    case 12
    /* TEXT_CALL */
    :
      return hasScopeRef(node.content, ids);

    case 2
    /* TEXT */
    :
    case 3
    /* COMMENT */
    :
      return false;

    default:
      if (true) ;
      return false;
  }
}

var deprecationData = (_deprecationData = {}, _defineProperty(_deprecationData, "COMPILER_IS_ON_ELEMENT"
/* COMPILER_IS_ON_ELEMENT */
, {
  message: "Platform-native elements with \"is\" prop will no longer be " + "treated as components in Vue 3 unless the \"is\" value is explicitly " + "prefixed with \"vue:\".",
  link: "https://v3.vuejs.org/guide/migration/custom-elements-interop.html"
}), _defineProperty(_deprecationData, "COMPILER_V_BIND_SYNC"
/* COMPILER_V_BIND_SYNC */
, {
  message: function message(key) {
    return ".sync modifier for v-bind has been removed. Use v-model with " + "argument instead. `v-bind:".concat(key, ".sync` should be changed to ") + "`v-model:".concat(key, "`.");
  },
  link: "https://v3.vuejs.org/guide/migration/v-model.html"
}), _defineProperty(_deprecationData, "COMPILER_V_BIND_PROP"
/* COMPILER_V_BIND_PROP */
, {
  message: ".prop modifier for v-bind has been removed and no longer necessary. " + "Vue 3 will automatically set a binding as DOM property when appropriate."
}), _defineProperty(_deprecationData, "COMPILER_V_BIND_OBJECT_ORDER"
/* COMPILER_V_BIND_OBJECT_ORDER */
, {
  message: "v-bind=\"obj\" usage is now order sensitive and behaves like JavaScript " + "object spread: it will now overwrite an existing non-mergeable attribute " + "that appears before v-bind in the case of conflict. " + "To retain 2.x behavior, move v-bind to make it the first attribute. " + "You can also suppress this warning if the usage is intended.",
  link: "https://v3.vuejs.org/guide/migration/v-bind.html"
}), _defineProperty(_deprecationData, "COMPILER_V_ON_NATIVE"
/* COMPILER_V_ON_NATIVE */
, {
  message: ".native modifier for v-on has been removed as is no longer necessary.",
  link: "https://v3.vuejs.org/guide/migration/v-on-native-modifier-removed.html"
}), _defineProperty(_deprecationData, "COMPILER_V_IF_V_FOR_PRECEDENCE"
/* COMPILER_V_IF_V_FOR_PRECEDENCE */
, {
  message: "v-if / v-for precedence when used on the same element has changed " + "in Vue 3: v-if now takes higher precedence and will no longer have " + "access to v-for scope variables. It is best to avoid the ambiguity " + "with <template> tags or use a computed property that filters v-for " + "data source.",
  link: "https://v3.vuejs.org/guide/migration/v-if-v-for.html"
}), _defineProperty(_deprecationData, "COMPILER_V_FOR_REF"
/* COMPILER_V_FOR_REF */
, {
  message: "Ref usage on v-for no longer creates array ref values in Vue 3. " + "Consider using function refs or refactor to avoid ref usage altogether.",
  link: "https://v3.vuejs.org/guide/migration/array-refs.html"
}), _defineProperty(_deprecationData, "COMPILER_NATIVE_TEMPLATE"
/* COMPILER_NATIVE_TEMPLATE */
, {
  message: "<template> with no special directives will render as a native template " + "element instead of its inner content in Vue 3."
}), _defineProperty(_deprecationData, "COMPILER_INLINE_TEMPLATE"
/* COMPILER_INLINE_TEMPLATE */
, {
  message: "\"inline-template\" has been removed in Vue 3.",
  link: "https://v3.vuejs.org/guide/migration/inline-template-attribute.html"
}), _defineProperty(_deprecationData, "COMPILER_FILTER"
/* COMPILER_FILTERS */
, {
  message: "filters have been removed in Vue 3. " + "The \"|\" symbol will be treated as native JavaScript bitwise OR operator. " + "Use method calls or computed properties instead.",
  link: "https://v3.vuejs.org/guide/migration/filters.html"
}), _deprecationData);

function getCompatValue(key, context) {
  var config = context.options ? context.options.compatConfig : context.compatConfig;
  var value = config && config[key];

  if (key === 'MODE') {
    return value || 3; // compiler defaults to v3 behavior
  } else {
    return value;
  }
}

function isCompatEnabled(key, context) {
  var mode = getCompatValue('MODE', context);
  var value = getCompatValue(key, context); // in v3 mode, only enable if explicitly set to true
  // otherwise enable for any non-false value

  return mode === 3 ? value === true : value !== false;
}

function checkCompatEnabled(key, context, loc) {
  var enabled = isCompatEnabled(key, context);

  if ( true && enabled) {
    for (var _len = arguments.length, args = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
      args[_key - 3] = arguments[_key];
    }

    warnDeprecation.apply(void 0, [key, context, loc].concat(args));
  }

  return enabled;
}

function warnDeprecation(key, context, loc) {
  var val = getCompatValue(key, context);

  if (val === 'suppress-warning') {
    return;
  }

  var _deprecationData$key = deprecationData[key],
      message = _deprecationData$key.message,
      link = _deprecationData$key.link;

  for (var _len2 = arguments.length, args = new Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
    args[_key2 - 3] = arguments[_key2];
  }

  var msg = "(deprecation ".concat(key, ") ").concat(typeof message === 'function' ? message.apply(void 0, args) : message).concat(link ? "\n  Details: ".concat(link) : "");
  var err = new SyntaxError(msg);
  err.code = key;
  if (loc) err.loc = loc;
  context.onWarn(err);
} // The default decoder only provides escapes for characters reserved as part of
// the template syntax, and is only used if the custom renderer did not provide
// a platform-specific decoder.


var decodeRE = /&(gt|lt|amp|apos|quot);/g;
var decodeMap = {
  gt: '>',
  lt: '<',
  amp: '&',
  apos: "'",
  quot: '"'
};
var defaultParserOptions = {
  delimiters: ["{{", "}}"],
  getNamespace: function getNamespace() {
    return 0;
  }
  /* HTML */
  ,
  getTextMode: function getTextMode() {
    return 0;
  }
  /* DATA */
  ,
  isVoidTag: _vue_shared__WEBPACK_IMPORTED_MODULE_0__.NO,
  isPreTag: _vue_shared__WEBPACK_IMPORTED_MODULE_0__.NO,
  isCustomElement: _vue_shared__WEBPACK_IMPORTED_MODULE_0__.NO,
  decodeEntities: function decodeEntities(rawText) {
    return rawText.replace(decodeRE, function (_, p1) {
      return decodeMap[p1];
    });
  },
  onError: defaultOnError,
  onWarn: defaultOnWarn,
  comments: false
};

function baseParse(content) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var context = createParserContext(content, options);
  var start = getCursor(context);
  return createRoot(parseChildren(context, 0
  /* DATA */
  , []), getSelection(context, start));
}

function createParserContext(content, rawOptions) {
  var options = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.extend)({}, defaultParserOptions);

  for (var key in rawOptions) {
    // @ts-ignore
    options[key] = rawOptions[key] || defaultParserOptions[key];
  }

  return {
    options: options,
    column: 1,
    line: 1,
    offset: 0,
    originalSource: content,
    source: content,
    inPre: false,
    inVPre: false,
    onWarn: options.onWarn
  };
}

function parseChildren(context, mode, ancestors) {
  var parent = last(ancestors);
  var ns = parent ? parent.ns : 0
  /* HTML */
  ;
  var nodes = [];

  while (!isEnd(context, mode, ancestors)) {
    var s = context.source;
    var node = undefined;

    if (mode === 0
    /* DATA */
    || mode === 1
    /* RCDATA */
    ) {
        if (!context.inVPre && startsWith(s, context.options.delimiters[0])) {
          // '{{'
          node = parseInterpolation(context, mode);
        } else if (mode === 0
        /* DATA */
        && s[0] === '<') {
          // https://html.spec.whatwg.org/multipage/parsing.html#tag-open-state
          if (s.length === 1) {
            emitError(context, 5
            /* EOF_BEFORE_TAG_NAME */
            , 1);
          } else if (s[1] === '!') {
            // https://html.spec.whatwg.org/multipage/parsing.html#markup-declaration-open-state
            if (startsWith(s, '<!--')) {
              node = parseComment(context);
            } else if (startsWith(s, '<!DOCTYPE')) {
              // Ignore DOCTYPE by a limitation.
              node = parseBogusComment(context);
            } else if (startsWith(s, '<![CDATA[')) {
              if (ns !== 0
              /* HTML */
              ) {
                  node = parseCDATA(context, ancestors);
                } else {
                emitError(context, 1
                /* CDATA_IN_HTML_CONTENT */
                );
                node = parseBogusComment(context);
              }
            } else {
              emitError(context, 11
              /* INCORRECTLY_OPENED_COMMENT */
              );
              node = parseBogusComment(context);
            }
          } else if (s[1] === '/') {
            // https://html.spec.whatwg.org/multipage/parsing.html#end-tag-open-state
            if (s.length === 2) {
              emitError(context, 5
              /* EOF_BEFORE_TAG_NAME */
              , 2);
            } else if (s[2] === '>') {
              emitError(context, 14
              /* MISSING_END_TAG_NAME */
              , 2);
              advanceBy(context, 3);
              continue;
            } else if (/[a-z]/i.test(s[2])) {
              emitError(context, 23
              /* X_INVALID_END_TAG */
              );
              parseTag(context, 1
              /* End */
              , parent);
              continue;
            } else {
              emitError(context, 12
              /* INVALID_FIRST_CHARACTER_OF_TAG_NAME */
              , 2);
              node = parseBogusComment(context);
            }
          } else if (/[a-z]/i.test(s[1])) {
            node = parseElement(context, ancestors); // 2.x <template> with no directive compat

            if (isCompatEnabled("COMPILER_NATIVE_TEMPLATE"
            /* COMPILER_NATIVE_TEMPLATE */
            , context) && node && node.tag === 'template' && !node.props.some(function (p) {
              return p.type === 7
              /* DIRECTIVE */
              && isSpecialTemplateDirective(p.name);
            })) {
               true && warnDeprecation("COMPILER_NATIVE_TEMPLATE"
              /* COMPILER_NATIVE_TEMPLATE */
              , context, node.loc);
              node = node.children;
            }
          } else if (s[1] === '?') {
            emitError(context, 21
            /* UNEXPECTED_QUESTION_MARK_INSTEAD_OF_TAG_NAME */
            , 1);
            node = parseBogusComment(context);
          } else {
            emitError(context, 12
            /* INVALID_FIRST_CHARACTER_OF_TAG_NAME */
            , 1);
          }
        }
      }

    if (!node) {
      node = parseText(context, mode);
    }

    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(node)) {
      for (var i = 0; i < node.length; i++) {
        pushNode(nodes, node[i]);
      }
    } else {
      pushNode(nodes, node);
    }
  } // Whitespace handling strategy like v2


  var removedWhitespace = false;

  if (mode !== 2
  /* RAWTEXT */
  && mode !== 1
  /* RCDATA */
  ) {
      var preserve = context.options.whitespace === 'preserve';

      for (var _i = 0; _i < nodes.length; _i++) {
        var _node2 = nodes[_i];

        if (!context.inPre && _node2.type === 2
        /* TEXT */
        ) {
            if (!/[^\t\r\n\f ]/.test(_node2.content)) {
              var prev = nodes[_i - 1];
              var next = nodes[_i + 1]; // Remove if:
              // - the whitespace is the first or last node, or:
              // - (condense mode) the whitespace is adjacent to a comment, or:
              // - (condense mode) the whitespace is between two elements AND contains newline

              if (!prev || !next || !preserve && (prev.type === 3
              /* COMMENT */
              || next.type === 3
              /* COMMENT */
              || prev.type === 1
              /* ELEMENT */
              && next.type === 1
              /* ELEMENT */
              && /[\r\n]/.test(_node2.content))) {
                removedWhitespace = true;
                nodes[_i] = null;
              } else {
                // Otherwise, the whitespace is condensed into a single space
                _node2.content = ' ';
              }
            } else if (!preserve) {
              // in condense mode, consecutive whitespaces in text are condensed
              // down to a single space.
              _node2.content = _node2.content.replace(/[\t\r\n\f ]+/g, ' ');
            }
          } // also remove comment nodes in prod by default


        if (false) {}
      }

      if (context.inPre && parent && context.options.isPreTag(parent.tag)) {
        // remove leading newline per html spec
        // https://html.spec.whatwg.org/multipage/grouping-content.html#the-pre-element
        var first = nodes[0];

        if (first && first.type === 2
        /* TEXT */
        ) {
            first.content = first.content.replace(/^\r?\n/, '');
          }
      }
    }

  return removedWhitespace ? nodes.filter(Boolean) : nodes;
}

function pushNode(nodes, node) {
  if (node.type === 2
  /* TEXT */
  ) {
      var prev = last(nodes); // Merge if both this and the previous node are text and those are
      // consecutive. This happens for cases like "a < b".

      if (prev && prev.type === 2
      /* TEXT */
      && prev.loc.end.offset === node.loc.start.offset) {
        prev.content += node.content;
        prev.loc.end = node.loc.end;
        prev.loc.source += node.loc.source;
        return;
      }
    }

  nodes.push(node);
}

function parseCDATA(context, ancestors) {
  advanceBy(context, 9);
  var nodes = parseChildren(context, 3
  /* CDATA */
  , ancestors);

  if (context.source.length === 0) {
    emitError(context, 6
    /* EOF_IN_CDATA */
    );
  } else {
    advanceBy(context, 3);
  }

  return nodes;
}

function parseComment(context) {
  var start = getCursor(context);
  var content; // Regular comment.

  var match = /--(\!)?>/.exec(context.source);

  if (!match) {
    content = context.source.slice(4);
    advanceBy(context, context.source.length);
    emitError(context, 7
    /* EOF_IN_COMMENT */
    );
  } else {
    if (match.index <= 3) {
      emitError(context, 0
      /* ABRUPT_CLOSING_OF_EMPTY_COMMENT */
      );
    }

    if (match[1]) {
      emitError(context, 10
      /* INCORRECTLY_CLOSED_COMMENT */
      );
    }

    content = context.source.slice(4, match.index); // Advancing with reporting nested comments.

    var s = context.source.slice(0, match.index);
    var prevIndex = 1,
        nestedIndex = 0;

    while ((nestedIndex = s.indexOf('<!--', prevIndex)) !== -1) {
      advanceBy(context, nestedIndex - prevIndex + 1);

      if (nestedIndex + 4 < s.length) {
        emitError(context, 16
        /* NESTED_COMMENT */
        );
      }

      prevIndex = nestedIndex + 1;
    }

    advanceBy(context, match.index + match[0].length - prevIndex + 1);
  }

  return {
    type: 3
    /* COMMENT */
    ,
    content: content,
    loc: getSelection(context, start)
  };
}

function parseBogusComment(context) {
  var start = getCursor(context);
  var contentStart = context.source[1] === '?' ? 1 : 2;
  var content;
  var closeIndex = context.source.indexOf('>');

  if (closeIndex === -1) {
    content = context.source.slice(contentStart);
    advanceBy(context, context.source.length);
  } else {
    content = context.source.slice(contentStart, closeIndex);
    advanceBy(context, closeIndex + 1);
  }

  return {
    type: 3
    /* COMMENT */
    ,
    content: content,
    loc: getSelection(context, start)
  };
}

function parseElement(context, ancestors) {
  // Start tag.
  var wasInPre = context.inPre;
  var wasInVPre = context.inVPre;
  var parent = last(ancestors);
  var element = parseTag(context, 0
  /* Start */
  , parent);
  var isPreBoundary = context.inPre && !wasInPre;
  var isVPreBoundary = context.inVPre && !wasInVPre;

  if (element.isSelfClosing || context.options.isVoidTag(element.tag)) {
    // #4030 self-closing <pre> tag
    if (context.options.isPreTag(element.tag)) {
      context.inPre = false;
    }

    return element;
  } // Children.


  ancestors.push(element);
  var mode = context.options.getTextMode(element, parent);
  var children = parseChildren(context, mode, ancestors);
  ancestors.pop(); // 2.x inline-template compat

  {
    var inlineTemplateProp = element.props.find(function (p) {
      return p.type === 6
      /* ATTRIBUTE */
      && p.name === 'inline-template';
    });

    if (inlineTemplateProp && checkCompatEnabled("COMPILER_INLINE_TEMPLATE"
    /* COMPILER_INLINE_TEMPLATE */
    , context, inlineTemplateProp.loc)) {
      var loc = getSelection(context, element.loc.end);
      inlineTemplateProp.value = {
        type: 2
        /* TEXT */
        ,
        content: loc.source,
        loc: loc
      };
    }
  }
  element.children = children; // End tag.

  if (startsWithEndTagOpen(context.source, element.tag)) {
    parseTag(context, 1
    /* End */
    , parent);
  } else {
    emitError(context, 24
    /* X_MISSING_END_TAG */
    , 0, element.loc.start);

    if (context.source.length === 0 && element.tag.toLowerCase() === 'script') {
      var first = children[0];

      if (first && startsWith(first.loc.source, '<!--')) {
        emitError(context, 8
        /* EOF_IN_SCRIPT_HTML_COMMENT_LIKE_TEXT */
        );
      }
    }
  }

  element.loc = getSelection(context, element.loc.start);

  if (isPreBoundary) {
    context.inPre = false;
  }

  if (isVPreBoundary) {
    context.inVPre = false;
  }

  return element;
}

var isSpecialTemplateDirective = /*#__PURE__*/(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.makeMap)("if,else,else-if,for,slot");

function parseTag(context, type, parent) {
  // Tag open.
  var start = getCursor(context);
  var match = /^<\/?([a-z][^\t\r\n\f />]*)/i.exec(context.source);
  var tag = match[1];
  var ns = context.options.getNamespace(tag, parent);
  advanceBy(context, match[0].length);
  advanceSpaces(context); // save current state in case we need to re-parse attributes with v-pre

  var cursor = getCursor(context);
  var currentSource = context.source; // check <pre> tag

  var isPreTag = context.options.isPreTag(tag);

  if (isPreTag) {
    context.inPre = true;
  } // Attributes.


  var props = parseAttributes(context, type); // check v-pre

  if (type === 0
  /* Start */
  && !context.inVPre && props.some(function (p) {
    return p.type === 7
    /* DIRECTIVE */
    && p.name === 'pre';
  })) {
    context.inVPre = true; // reset context

    (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.extend)(context, cursor);
    context.source = currentSource; // re-parse attrs and filter out v-pre itself

    props = parseAttributes(context, type).filter(function (p) {
      return p.name !== 'v-pre';
    });
  } // Tag close.


  var isSelfClosing = false;

  if (context.source.length === 0) {
    emitError(context, 9
    /* EOF_IN_TAG */
    );
  } else {
    isSelfClosing = startsWith(context.source, '/>');

    if (type === 1
    /* End */
    && isSelfClosing) {
      emitError(context, 4
      /* END_TAG_WITH_TRAILING_SOLIDUS */
      );
    }

    advanceBy(context, isSelfClosing ? 2 : 1);
  }

  if (type === 1
  /* End */
  ) {
      return;
    } // 2.x deprecation checks


  if ( true && isCompatEnabled("COMPILER_V_IF_V_FOR_PRECEDENCE"
  /* COMPILER_V_IF_V_FOR_PRECEDENCE */
  , context)) {
    var hasIf = false;
    var hasFor = false;

    for (var i = 0; i < props.length; i++) {
      var p = props[i];

      if (p.type === 7
      /* DIRECTIVE */
      ) {
          if (p.name === 'if') {
            hasIf = true;
          } else if (p.name === 'for') {
            hasFor = true;
          }
        }

      if (hasIf && hasFor) {
        warnDeprecation("COMPILER_V_IF_V_FOR_PRECEDENCE"
        /* COMPILER_V_IF_V_FOR_PRECEDENCE */
        , context, getSelection(context, start));
      }
    }
  }

  var tagType = 0
  /* ELEMENT */
  ;

  if (!context.inVPre) {
    if (tag === 'slot') {
      tagType = 2
      /* SLOT */
      ;
    } else if (tag === 'template') {
      if (props.some(function (p) {
        return p.type === 7
        /* DIRECTIVE */
        && isSpecialTemplateDirective(p.name);
      })) {
        tagType = 3
        /* TEMPLATE */
        ;
      }
    } else if (isComponent(tag, props, context)) {
      tagType = 1
      /* COMPONENT */
      ;
    }
  }

  return {
    type: 1
    /* ELEMENT */
    ,
    ns: ns,
    tag: tag,
    tagType: tagType,
    props: props,
    isSelfClosing: isSelfClosing,
    children: [],
    loc: getSelection(context, start),
    codegenNode: undefined // to be created during transform phase

  };
}

function isComponent(tag, props, context) {
  var options = context.options;

  if (options.isCustomElement(tag)) {
    return false;
  }

  if (tag === 'component' || /^[A-Z]/.test(tag) || isCoreComponent(tag) || options.isBuiltInComponent && options.isBuiltInComponent(tag) || options.isNativeTag && !options.isNativeTag(tag)) {
    return true;
  } // at this point the tag should be a native tag, but check for potential "is"
  // casting


  for (var i = 0; i < props.length; i++) {
    var p = props[i];

    if (p.type === 6
    /* ATTRIBUTE */
    ) {
        if (p.name === 'is' && p.value) {
          if (p.value.content.startsWith('vue:')) {
            return true;
          } else if (checkCompatEnabled("COMPILER_IS_ON_ELEMENT"
          /* COMPILER_IS_ON_ELEMENT */
          , context, p.loc)) {
            return true;
          }
        }
      } else {
      // directive
      // v-is (TODO Deprecate)
      if (p.name === 'is') {
        return true;
      } else if ( // :is on plain element - only treat as component in compat mode
      p.name === 'bind' && isBindKey(p.arg, 'is') && true && checkCompatEnabled("COMPILER_IS_ON_ELEMENT"
      /* COMPILER_IS_ON_ELEMENT */
      , context, p.loc)) {
        return true;
      }
    }
  }
}

function parseAttributes(context, type) {
  var props = [];
  var attributeNames = new Set();

  while (context.source.length > 0 && !startsWith(context.source, '>') && !startsWith(context.source, '/>')) {
    if (startsWith(context.source, '/')) {
      emitError(context, 22
      /* UNEXPECTED_SOLIDUS_IN_TAG */
      );
      advanceBy(context, 1);
      advanceSpaces(context);
      continue;
    }

    if (type === 1
    /* End */
    ) {
        emitError(context, 3
        /* END_TAG_WITH_ATTRIBUTES */
        );
      }

    var attr = parseAttribute(context, attributeNames);

    if (type === 0
    /* Start */
    ) {
        props.push(attr);
      }

    if (/^[^\t\r\n\f />]/.test(context.source)) {
      emitError(context, 15
      /* MISSING_WHITESPACE_BETWEEN_ATTRIBUTES */
      );
    }

    advanceSpaces(context);
  }

  return props;
}

function parseAttribute(context, nameSet) {
  // Name.
  var start = getCursor(context);
  var match = /^[^\t\r\n\f />][^\t\r\n\f />=]*/.exec(context.source);
  var name = match[0];

  if (nameSet.has(name)) {
    emitError(context, 2
    /* DUPLICATE_ATTRIBUTE */
    );
  }

  nameSet.add(name);

  if (name[0] === '=') {
    emitError(context, 19
    /* UNEXPECTED_EQUALS_SIGN_BEFORE_ATTRIBUTE_NAME */
    );
  }

  {
    var pattern = /["'<]/g;
    var m;

    while (m = pattern.exec(name)) {
      emitError(context, 17
      /* UNEXPECTED_CHARACTER_IN_ATTRIBUTE_NAME */
      , m.index);
    }
  }
  advanceBy(context, name.length); // Value

  var value = undefined;

  if (/^[\t\r\n\f ]*=/.test(context.source)) {
    advanceSpaces(context);
    advanceBy(context, 1);
    advanceSpaces(context);
    value = parseAttributeValue(context);

    if (!value) {
      emitError(context, 13
      /* MISSING_ATTRIBUTE_VALUE */
      );
    }
  }

  var loc = getSelection(context, start);

  if (!context.inVPre && /^(v-|:|@|#)/.test(name)) {
    var _match = /(?:^v-([a-z0-9-]+))?(?:(?::|^@|^#)(\[[^\]]+\]|[^\.]+))?(.+)?$/i.exec(name);

    var dirName = _match[1] || (startsWith(name, ':') ? 'bind' : startsWith(name, '@') ? 'on' : 'slot');
    var arg;

    if (_match[2]) {
      var isSlot = dirName === 'slot';
      var startOffset = name.lastIndexOf(_match[2]);

      var _loc = getSelection(context, getNewPosition(context, start, startOffset), getNewPosition(context, start, startOffset + _match[2].length + (isSlot && _match[3] || '').length));

      var content = _match[2];
      var isStatic = true;

      if (content.startsWith('[')) {
        isStatic = false;

        if (!content.endsWith(']')) {
          emitError(context, 26
          /* X_MISSING_DYNAMIC_DIRECTIVE_ARGUMENT_END */
          );
        }

        content = content.substr(1, content.length - 2);
      } else if (isSlot) {
        // #1241 special case for v-slot: vuetify relies extensively on slot
        // names containing dots. v-slot doesn't have any modifiers and Vue 2.x
        // supports such usage so we are keeping it consistent with 2.x.
        content += _match[3] || '';
      }

      arg = {
        type: 4
        /* SIMPLE_EXPRESSION */
        ,
        content: content,
        isStatic: isStatic,
        constType: isStatic ? 3
        /* CAN_STRINGIFY */
        : 0
        /* NOT_CONSTANT */
        ,
        loc: _loc
      };
    }

    if (value && value.isQuoted) {
      var valueLoc = value.loc;
      valueLoc.start.offset++;
      valueLoc.start.column++;
      valueLoc.end = advancePositionWithClone(valueLoc.start, value.content);
      valueLoc.source = valueLoc.source.slice(1, -1);
    }

    var modifiers = _match[3] ? _match[3].substr(1).split('.') : []; // 2.x compat v-bind:foo.sync -> v-model:foo

    if (dirName === 'bind' && arg) {
      if (modifiers.includes('sync') && checkCompatEnabled("COMPILER_V_BIND_SYNC"
      /* COMPILER_V_BIND_SYNC */
      , context, loc, arg.loc.source)) {
        dirName = 'model';
        modifiers.splice(modifiers.indexOf('sync'), 1);
      }

      if ( true && modifiers.includes('prop')) {
        checkCompatEnabled("COMPILER_V_BIND_PROP"
        /* COMPILER_V_BIND_PROP */
        , context, loc);
      }
    }

    return {
      type: 7
      /* DIRECTIVE */
      ,
      name: dirName,
      exp: value && {
        type: 4
        /* SIMPLE_EXPRESSION */
        ,
        content: value.content,
        isStatic: false,
        // Treat as non-constant by default. This can be potentially set to
        // other values by `transformExpression` to make it eligible for hoisting.
        constType: 0
        /* NOT_CONSTANT */
        ,
        loc: value.loc
      },
      arg: arg,
      modifiers: modifiers,
      loc: loc
    };
  }

  return {
    type: 6
    /* ATTRIBUTE */
    ,
    name: name,
    value: value && {
      type: 2
      /* TEXT */
      ,
      content: value.content,
      loc: value.loc
    },
    loc: loc
  };
}

function parseAttributeValue(context) {
  var start = getCursor(context);
  var content;
  var quote = context.source[0];
  var isQuoted = quote === "\"" || quote === "'";

  if (isQuoted) {
    // Quoted value.
    advanceBy(context, 1);
    var endIndex = context.source.indexOf(quote);

    if (endIndex === -1) {
      content = parseTextData(context, context.source.length, 4
      /* ATTRIBUTE_VALUE */
      );
    } else {
      content = parseTextData(context, endIndex, 4
      /* ATTRIBUTE_VALUE */
      );
      advanceBy(context, 1);
    }
  } else {
    // Unquoted
    var match = /^[^\t\r\n\f >]+/.exec(context.source);

    if (!match) {
      return undefined;
    }

    var unexpectedChars = /["'<=`]/g;
    var m;

    while (m = unexpectedChars.exec(match[0])) {
      emitError(context, 18
      /* UNEXPECTED_CHARACTER_IN_UNQUOTED_ATTRIBUTE_VALUE */
      , m.index);
    }

    content = parseTextData(context, match[0].length, 4
    /* ATTRIBUTE_VALUE */
    );
  }

  return {
    content: content,
    isQuoted: isQuoted,
    loc: getSelection(context, start)
  };
}

function parseInterpolation(context, mode) {
  var _context$options$deli = _slicedToArray(context.options.delimiters, 2),
      open = _context$options$deli[0],
      close = _context$options$deli[1];

  var closeIndex = context.source.indexOf(close, open.length);

  if (closeIndex === -1) {
    emitError(context, 25
    /* X_MISSING_INTERPOLATION_END */
    );
    return undefined;
  }

  var start = getCursor(context);
  advanceBy(context, open.length);
  var innerStart = getCursor(context);
  var innerEnd = getCursor(context);
  var rawContentLength = closeIndex - open.length;
  var rawContent = context.source.slice(0, rawContentLength);
  var preTrimContent = parseTextData(context, rawContentLength, mode);
  var content = preTrimContent.trim();
  var startOffset = preTrimContent.indexOf(content);

  if (startOffset > 0) {
    advancePositionWithMutation(innerStart, rawContent, startOffset);
  }

  var endOffset = rawContentLength - (preTrimContent.length - content.length - startOffset);
  advancePositionWithMutation(innerEnd, rawContent, endOffset);
  advanceBy(context, close.length);
  return {
    type: 5
    /* INTERPOLATION */
    ,
    content: {
      type: 4
      /* SIMPLE_EXPRESSION */
      ,
      isStatic: false,
      // Set `isConstant` to false by default and will decide in transformExpression
      constType: 0
      /* NOT_CONSTANT */
      ,
      content: content,
      loc: getSelection(context, innerStart, innerEnd)
    },
    loc: getSelection(context, start)
  };
}

function parseText(context, mode) {
  var endTokens = ['<', context.options.delimiters[0]];

  if (mode === 3
  /* CDATA */
  ) {
      endTokens.push(']]>');
    }

  var endIndex = context.source.length;

  for (var i = 0; i < endTokens.length; i++) {
    var index = context.source.indexOf(endTokens[i], 1);

    if (index !== -1 && endIndex > index) {
      endIndex = index;
    }
  }

  var start = getCursor(context);
  var content = parseTextData(context, endIndex, mode);
  return {
    type: 2
    /* TEXT */
    ,
    content: content,
    loc: getSelection(context, start)
  };
}
/**
 * Get text data with a given length from the current location.
 * This translates HTML entities in the text data.
 */


function parseTextData(context, length, mode) {
  var rawText = context.source.slice(0, length);
  advanceBy(context, length);

  if (mode === 2
  /* RAWTEXT */
  || mode === 3
  /* CDATA */
  || rawText.indexOf('&') === -1) {
    return rawText;
  } else {
    // DATA or RCDATA containing "&"". Entity decoding required.
    return context.options.decodeEntities(rawText, mode === 4
    /* ATTRIBUTE_VALUE */
    );
  }
}

function getCursor(context) {
  var column = context.column,
      line = context.line,
      offset = context.offset;
  return {
    column: column,
    line: line,
    offset: offset
  };
}

function getSelection(context, start, end) {
  end = end || getCursor(context);
  return {
    start: start,
    end: end,
    source: context.originalSource.slice(start.offset, end.offset)
  };
}

function last(xs) {
  return xs[xs.length - 1];
}

function startsWith(source, searchString) {
  return source.startsWith(searchString);
}

function advanceBy(context, numberOfCharacters) {
  var source = context.source;
  advancePositionWithMutation(context, source, numberOfCharacters);
  context.source = source.slice(numberOfCharacters);
}

function advanceSpaces(context) {
  var match = /^[\t\r\n\f ]+/.exec(context.source);

  if (match) {
    advanceBy(context, match[0].length);
  }
}

function getNewPosition(context, start, numberOfCharacters) {
  return advancePositionWithClone(start, context.originalSource.slice(start.offset, numberOfCharacters), numberOfCharacters);
}

function emitError(context, code, offset) {
  var loc = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : getCursor(context);

  if (offset) {
    loc.offset += offset;
    loc.column += offset;
  }

  context.options.onError(createCompilerError(code, {
    start: loc,
    end: loc,
    source: ''
  }));
}

function isEnd(context, mode, ancestors) {
  var s = context.source;

  switch (mode) {
    case 0
    /* DATA */
    :
      if (startsWith(s, '</')) {
        // TODO: probably bad performance
        for (var i = ancestors.length - 1; i >= 0; --i) {
          if (startsWithEndTagOpen(s, ancestors[i].tag)) {
            return true;
          }
        }
      }

      break;

    case 1
    /* RCDATA */
    :
    case 2
    /* RAWTEXT */
    :
      {
        var parent = last(ancestors);

        if (parent && startsWithEndTagOpen(s, parent.tag)) {
          return true;
        }

        break;
      }

    case 3
    /* CDATA */
    :
      if (startsWith(s, ']]>')) {
        return true;
      }

      break;
  }

  return !s;
}

function startsWithEndTagOpen(source, tag) {
  return startsWith(source, '</') && source.substr(2, tag.length).toLowerCase() === tag.toLowerCase() && /[\t\r\n\f />]/.test(source[2 + tag.length] || '>');
}

function hoistStatic(root, context) {
  walk(root, context, // Root node is unfortunately non-hoistable due to potential parent
  // fallthrough attributes.
  isSingleElementRoot(root, root.children[0]));
}

function isSingleElementRoot(root, child) {
  var children = root.children;
  return children.length === 1 && child.type === 1
  /* ELEMENT */
  && !isSlotOutlet(child);
}

function walk(node, context) {
  var doNotHoistNode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var hasHoistedNode = false; // Some transforms, e.g. transformAssetUrls from @vue/compiler-sfc, replaces
  // static bindings with expressions. These expressions are guaranteed to be
  // constant so they are still eligible for hoisting, but they are only
  // available at runtime and therefore cannot be evaluated ahead of time.
  // This is only a concern for pre-stringification (via transformHoist by
  // @vue/compiler-dom), but doing it here allows us to perform only one full
  // walk of the AST and allow `stringifyStatic` to stop walking as soon as its
  // stringficiation threshold is met.

  var canStringify = true;
  var children = node.children;

  for (var i = 0; i < children.length; i++) {
    var child = children[i]; // only plain elements & text calls are eligible for hoisting.

    if (child.type === 1
    /* ELEMENT */
    && child.tagType === 0
    /* ELEMENT */
    ) {
        var constantType = doNotHoistNode ? 0
        /* NOT_CONSTANT */
        : getConstantType(child, context);

        if (constantType > 0
        /* NOT_CONSTANT */
        ) {
            if (constantType < 3
            /* CAN_STRINGIFY */
            ) {
                canStringify = false;
              }

            if (constantType >= 2
            /* CAN_HOIST */
            ) {
                child.codegenNode.patchFlag = -1
                /* HOISTED */
                + ( true ? " /* HOISTED */" : 0);
                child.codegenNode = context.hoist(child.codegenNode);
                hasHoistedNode = true;
                continue;
              }
          } else {
          // node may contain dynamic children, but its props may be eligible for
          // hoisting.
          var codegenNode = child.codegenNode;

          if (codegenNode.type === 13
          /* VNODE_CALL */
          ) {
              var flag = getPatchFlag(codegenNode);

              if ((!flag || flag === 512
              /* NEED_PATCH */
              || flag === 1
              /* TEXT */
              ) && getGeneratedPropsConstantType(child, context) >= 2
              /* CAN_HOIST */
              ) {
                  var props = getNodeProps(child);

                  if (props) {
                    codegenNode.props = context.hoist(props);
                  }
                }
            }
        }
      } else if (child.type === 12
    /* TEXT_CALL */
    ) {
        var contentType = getConstantType(child.content, context);

        if (contentType > 0) {
          if (contentType < 3
          /* CAN_STRINGIFY */
          ) {
              canStringify = false;
            }

          if (contentType >= 2
          /* CAN_HOIST */
          ) {
              child.codegenNode = context.hoist(child.codegenNode);
              hasHoistedNode = true;
            }
        }
      } // walk further


    if (child.type === 1
    /* ELEMENT */
    ) {
        var _isComponent = child.tagType === 1
        /* COMPONENT */
        ;

        if (_isComponent) {
          context.scopes.vSlot++;
        }

        walk(child, context);

        if (_isComponent) {
          context.scopes.vSlot--;
        }
      } else if (child.type === 11
    /* FOR */
    ) {
        // Do not hoist v-for single child because it has to be a block
        walk(child, context, child.children.length === 1);
      } else if (child.type === 9
    /* IF */
    ) {
        for (var _i2 = 0; _i2 < child.branches.length; _i2++) {
          // Do not hoist v-if single child because it has to be a block
          walk(child.branches[_i2], context, child.branches[_i2].children.length === 1);
        }
      }
  }

  if (canStringify && hasHoistedNode && context.transformHoist) {
    context.transformHoist(children, context, node);
  }
}

function getConstantType(node, context) {
  var constantCache = context.constantCache;

  switch (node.type) {
    case 1
    /* ELEMENT */
    :
      if (node.tagType !== 0
      /* ELEMENT */
      ) {
          return 0
          /* NOT_CONSTANT */
          ;
        }

      var cached = constantCache.get(node);

      if (cached !== undefined) {
        return cached;
      }

      var codegenNode = node.codegenNode;

      if (codegenNode.type !== 13
      /* VNODE_CALL */
      ) {
          return 0
          /* NOT_CONSTANT */
          ;
        }

      var flag = getPatchFlag(codegenNode);

      if (!flag) {
        var _returnType = 3
        /* CAN_STRINGIFY */
        ; // Element itself has no patch flag. However we still need to check:
        // 1. Even for a node with no patch flag, it is possible for it to contain
        // non-hoistable expressions that refers to scope variables, e.g. compiler
        // injected keys or cached event handlers. Therefore we need to always
        // check the codegenNode's props to be sure.

        var generatedPropsType = getGeneratedPropsConstantType(node, context);

        if (generatedPropsType === 0
        /* NOT_CONSTANT */
        ) {
            constantCache.set(node, 0
            /* NOT_CONSTANT */
            );
            return 0
            /* NOT_CONSTANT */
            ;
          }

        if (generatedPropsType < _returnType) {
          _returnType = generatedPropsType;
        } // 2. its children.


        for (var i = 0; i < node.children.length; i++) {
          var childType = getConstantType(node.children[i], context);

          if (childType === 0
          /* NOT_CONSTANT */
          ) {
              constantCache.set(node, 0
              /* NOT_CONSTANT */
              );
              return 0
              /* NOT_CONSTANT */
              ;
            }

          if (childType < _returnType) {
            _returnType = childType;
          }
        } // 3. if the type is not already CAN_SKIP_PATCH which is the lowest non-0
        // type, check if any of the props can cause the type to be lowered
        // we can skip can_patch because it's guaranteed by the absence of a
        // patchFlag.


        if (_returnType > 1
        /* CAN_SKIP_PATCH */
        ) {
            for (var _i3 = 0; _i3 < node.props.length; _i3++) {
              var p = node.props[_i3];

              if (p.type === 7
              /* DIRECTIVE */
              && p.name === 'bind' && p.exp) {
                var expType = getConstantType(p.exp, context);

                if (expType === 0
                /* NOT_CONSTANT */
                ) {
                    constantCache.set(node, 0
                    /* NOT_CONSTANT */
                    );
                    return 0
                    /* NOT_CONSTANT */
                    ;
                  }

                if (expType < _returnType) {
                  _returnType = expType;
                }
              }
            }
          } // only svg/foreignObject could be block here, however if they are
        // static then they don't need to be blocks since there will be no
        // nested updates.


        if (codegenNode.isBlock) {
          context.removeHelper(OPEN_BLOCK);
          context.removeHelper(CREATE_BLOCK);
          codegenNode.isBlock = false;
          context.helper(CREATE_VNODE);
        }

        constantCache.set(node, _returnType);
        return _returnType;
      } else {
        constantCache.set(node, 0
        /* NOT_CONSTANT */
        );
        return 0
        /* NOT_CONSTANT */
        ;
      }

    case 2
    /* TEXT */
    :
    case 3
    /* COMMENT */
    :
      return 3
      /* CAN_STRINGIFY */
      ;

    case 9
    /* IF */
    :
    case 11
    /* FOR */
    :
    case 10
    /* IF_BRANCH */
    :
      return 0
      /* NOT_CONSTANT */
      ;

    case 5
    /* INTERPOLATION */
    :
    case 12
    /* TEXT_CALL */
    :
      return getConstantType(node.content, context);

    case 4
    /* SIMPLE_EXPRESSION */
    :
      return node.constType;

    case 8
    /* COMPOUND_EXPRESSION */
    :
      var returnType = 3
      /* CAN_STRINGIFY */
      ;

      for (var _i4 = 0; _i4 < node.children.length; _i4++) {
        var child = node.children[_i4];

        if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(child) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isSymbol)(child)) {
          continue;
        }

        var _childType = getConstantType(child, context);

        if (_childType === 0
        /* NOT_CONSTANT */
        ) {
            return 0
            /* NOT_CONSTANT */
            ;
          } else if (_childType < returnType) {
          returnType = _childType;
        }
      }

      return returnType;

    default:
      if (true) ;
      return 0
      /* NOT_CONSTANT */
      ;
  }
}

function getGeneratedPropsConstantType(node, context) {
  var returnType = 3
  /* CAN_STRINGIFY */
  ;
  var props = getNodeProps(node);

  if (props && props.type === 15
  /* JS_OBJECT_EXPRESSION */
  ) {
      var properties = props.properties;

      for (var i = 0; i < properties.length; i++) {
        var _properties$i = properties[i],
            key = _properties$i.key,
            value = _properties$i.value;
        var keyType = getConstantType(key, context);

        if (keyType === 0
        /* NOT_CONSTANT */
        ) {
            return keyType;
          }

        if (keyType < returnType) {
          returnType = keyType;
        }

        if (value.type !== 4
        /* SIMPLE_EXPRESSION */
        ) {
            return 0
            /* NOT_CONSTANT */
            ;
          }

        var valueType = getConstantType(value, context);

        if (valueType === 0
        /* NOT_CONSTANT */
        ) {
            return valueType;
          }

        if (valueType < returnType) {
          returnType = valueType;
        }
      }
    }

  return returnType;
}

function getNodeProps(node) {
  var codegenNode = node.codegenNode;

  if (codegenNode.type === 13
  /* VNODE_CALL */
  ) {
      return codegenNode.props;
    }
}

function getPatchFlag(node) {
  var flag = node.patchFlag;
  return flag ? parseInt(flag, 10) : undefined;
}

function createTransformContext(root, _ref) {
  var _ref$filename = _ref.filename,
      filename = _ref$filename === void 0 ? '' : _ref$filename,
      _ref$prefixIdentifier = _ref.prefixIdentifiers,
      prefixIdentifiers = _ref$prefixIdentifier === void 0 ? false : _ref$prefixIdentifier,
      _ref$hoistStatic = _ref.hoistStatic,
      hoistStatic = _ref$hoistStatic === void 0 ? false : _ref$hoistStatic,
      _ref$cacheHandlers = _ref.cacheHandlers,
      cacheHandlers = _ref$cacheHandlers === void 0 ? false : _ref$cacheHandlers,
      _ref$nodeTransforms = _ref.nodeTransforms,
      nodeTransforms = _ref$nodeTransforms === void 0 ? [] : _ref$nodeTransforms,
      _ref$directiveTransfo = _ref.directiveTransforms,
      directiveTransforms = _ref$directiveTransfo === void 0 ? {} : _ref$directiveTransfo,
      _ref$transformHoist = _ref.transformHoist,
      transformHoist = _ref$transformHoist === void 0 ? null : _ref$transformHoist,
      _ref$isBuiltInCompone = _ref.isBuiltInComponent,
      isBuiltInComponent = _ref$isBuiltInCompone === void 0 ? _vue_shared__WEBPACK_IMPORTED_MODULE_0__.NOOP : _ref$isBuiltInCompone,
      _ref$isCustomElement = _ref.isCustomElement,
      isCustomElement = _ref$isCustomElement === void 0 ? _vue_shared__WEBPACK_IMPORTED_MODULE_0__.NOOP : _ref$isCustomElement,
      _ref$expressionPlugin = _ref.expressionPlugins,
      expressionPlugins = _ref$expressionPlugin === void 0 ? [] : _ref$expressionPlugin,
      _ref$scopeId = _ref.scopeId,
      scopeId = _ref$scopeId === void 0 ? null : _ref$scopeId,
      _ref$slotted = _ref.slotted,
      slotted = _ref$slotted === void 0 ? true : _ref$slotted,
      _ref$ssr = _ref.ssr,
      ssr = _ref$ssr === void 0 ? false : _ref$ssr,
      _ref$ssrCssVars = _ref.ssrCssVars,
      ssrCssVars = _ref$ssrCssVars === void 0 ? "" : _ref$ssrCssVars,
      _ref$bindingMetadata = _ref.bindingMetadata,
      bindingMetadata = _ref$bindingMetadata === void 0 ? _vue_shared__WEBPACK_IMPORTED_MODULE_0__.EMPTY_OBJ : _ref$bindingMetadata,
      _ref$inline = _ref.inline,
      inline = _ref$inline === void 0 ? false : _ref$inline,
      _ref$isTS = _ref.isTS,
      isTS = _ref$isTS === void 0 ? false : _ref$isTS,
      _ref$onError = _ref.onError,
      onError = _ref$onError === void 0 ? defaultOnError : _ref$onError,
      _ref$onWarn = _ref.onWarn,
      onWarn = _ref$onWarn === void 0 ? defaultOnWarn : _ref$onWarn,
      compatConfig = _ref.compatConfig;
  var nameMatch = filename.replace(/\?.*$/, '').match(/([^/\\]+)\.\w+$/);
  var context = {
    // options
    selfName: nameMatch && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.capitalize)((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.camelize)(nameMatch[1])),
    prefixIdentifiers: prefixIdentifiers,
    hoistStatic: hoistStatic,
    cacheHandlers: cacheHandlers,
    nodeTransforms: nodeTransforms,
    directiveTransforms: directiveTransforms,
    transformHoist: transformHoist,
    isBuiltInComponent: isBuiltInComponent,
    isCustomElement: isCustomElement,
    expressionPlugins: expressionPlugins,
    scopeId: scopeId,
    slotted: slotted,
    ssr: ssr,
    ssrCssVars: ssrCssVars,
    bindingMetadata: bindingMetadata,
    inline: inline,
    isTS: isTS,
    onError: onError,
    onWarn: onWarn,
    compatConfig: compatConfig,
    // state
    root: root,
    helpers: new Map(),
    components: new Set(),
    directives: new Set(),
    hoists: [],
    imports: [],
    constantCache: new Map(),
    temps: 0,
    cached: 0,
    identifiers: Object.create(null),
    scopes: {
      vFor: 0,
      vSlot: 0,
      vPre: 0,
      vOnce: 0
    },
    parent: null,
    currentNode: root,
    childIndex: 0,
    // methods
    helper: function helper(name) {
      var count = context.helpers.get(name) || 0;
      context.helpers.set(name, count + 1);
      return name;
    },
    removeHelper: function removeHelper(name) {
      var count = context.helpers.get(name);

      if (count) {
        var currentCount = count - 1;

        if (!currentCount) {
          context.helpers["delete"](name);
        } else {
          context.helpers.set(name, currentCount);
        }
      }
    },
    helperString: function helperString(name) {
      return "_".concat(helperNameMap[context.helper(name)]);
    },
    replaceNode: function replaceNode(node) {
      /* istanbul ignore if */
      if (true) {
        if (!context.currentNode) {
          throw new Error("Node being replaced is already removed.");
        }

        if (!context.parent) {
          throw new Error("Cannot replace root node.");
        }
      }

      context.parent.children[context.childIndex] = context.currentNode = node;
    },
    removeNode: function removeNode(node) {
      if ( true && !context.parent) {
        throw new Error("Cannot remove root node.");
      }

      var list = context.parent.children;
      var removalIndex = node ? list.indexOf(node) : context.currentNode ? context.childIndex : -1;
      /* istanbul ignore if */

      if ( true && removalIndex < 0) {
        throw new Error("node being removed is not a child of current parent");
      }

      if (!node || node === context.currentNode) {
        // current node removed
        context.currentNode = null;
        context.onNodeRemoved();
      } else {
        // sibling node removed
        if (context.childIndex > removalIndex) {
          context.childIndex--;
          context.onNodeRemoved();
        }
      }

      context.parent.children.splice(removalIndex, 1);
    },
    onNodeRemoved: function onNodeRemoved() {},
    addIdentifiers: function addIdentifiers(exp) {},
    removeIdentifiers: function removeIdentifiers(exp) {},
    hoist: function hoist(exp) {
      context.hoists.push(exp);
      var identifier = createSimpleExpression("_hoisted_".concat(context.hoists.length), false, exp.loc, 2
      /* CAN_HOIST */
      );
      identifier.hoisted = exp;
      return identifier;
    },
    cache: function cache(exp) {
      var isVNode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return createCacheExpression(++context.cached, exp, isVNode);
    }
  };
  {
    context.filters = new Set();
  }
  return context;
}

function transform(root, options) {
  var context = createTransformContext(root, options);
  traverseNode(root, context);

  if (options.hoistStatic) {
    hoistStatic(root, context);
  }

  if (!options.ssr) {
    createRootCodegen(root, context);
  } // finalize meta information


  root.helpers = _toConsumableArray(context.helpers.keys());
  root.components = _toConsumableArray(context.components);
  root.directives = _toConsumableArray(context.directives);
  root.imports = context.imports;
  root.hoists = context.hoists;
  root.temps = context.temps;
  root.cached = context.cached;
  {
    root.filters = _toConsumableArray(context.filters);
  }
}

function createRootCodegen(root, context) {
  var helper = context.helper,
      removeHelper = context.removeHelper;
  var children = root.children;

  if (children.length === 1) {
    var child = children[0]; // if the single child is an element, turn it into a block.

    if (isSingleElementRoot(root, child) && child.codegenNode) {
      // single element root is never hoisted so codegenNode will never be
      // SimpleExpressionNode
      var codegenNode = child.codegenNode;

      if (codegenNode.type === 13
      /* VNODE_CALL */
      ) {
          if (!codegenNode.isBlock) {
            removeHelper(CREATE_VNODE);
            codegenNode.isBlock = true;
            helper(OPEN_BLOCK);
            helper(CREATE_BLOCK);
          }
        }

      root.codegenNode = codegenNode;
    } else {
      // - single <slot/>, IfNode, ForNode: already blocks.
      // - single text node: always patched.
      // root codegen falls through via genNode()
      root.codegenNode = child;
    }
  } else if (children.length > 1) {
    // root has multiple nodes - return a fragment block.
    var patchFlag = 64
    /* STABLE_FRAGMENT */
    ;
    var patchFlagText = _vue_shared__WEBPACK_IMPORTED_MODULE_0__.PatchFlagNames[64]; // check if the fragment actually contains a single valid child with
    // the rest being comments

    if ( true && children.filter(function (c) {
      return c.type !== 3;
    }
    /* COMMENT */
    ).length === 1) {
      patchFlag |= 2048
      /* DEV_ROOT_FRAGMENT */
      ;
      patchFlagText += ", ".concat(_vue_shared__WEBPACK_IMPORTED_MODULE_0__.PatchFlagNames[2048]);
    }

    root.codegenNode = createVNodeCall(context, helper(FRAGMENT), undefined, root.children, patchFlag + ( true ? " /* ".concat(patchFlagText, " */") : 0), undefined, undefined, true);
  } else ;
}

function traverseChildren(parent, context) {
  var i = 0;

  var nodeRemoved = function nodeRemoved() {
    i--;
  };

  for (; i < parent.children.length; i++) {
    var child = parent.children[i];
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(child)) continue;
    context.parent = parent;
    context.childIndex = i;
    context.onNodeRemoved = nodeRemoved;
    traverseNode(child, context);
  }
}

function traverseNode(node, context) {
  context.currentNode = node; // apply transform plugins

  var nodeTransforms = context.nodeTransforms;
  var exitFns = [];

  for (var _i5 = 0; _i5 < nodeTransforms.length; _i5++) {
    var onExit = nodeTransforms[_i5](node, context);

    if (onExit) {
      if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(onExit)) {
        exitFns.push.apply(exitFns, _toConsumableArray(onExit));
      } else {
        exitFns.push(onExit);
      }
    }

    if (!context.currentNode) {
      // node was removed
      return;
    } else {
      // node may have been replaced
      node = context.currentNode;
    }
  }

  switch (node.type) {
    case 3
    /* COMMENT */
    :
      if (!context.ssr) {
        // inject import for the Comment symbol, which is needed for creating
        // comment nodes with `createVNode`
        context.helper(CREATE_COMMENT);
      }

      break;

    case 5
    /* INTERPOLATION */
    :
      // no need to traverse, but we need to inject toString helper
      if (!context.ssr) {
        context.helper(TO_DISPLAY_STRING);
      }

      break;
    // for container types, further traverse downwards

    case 9
    /* IF */
    :
      for (var _i6 = 0; _i6 < node.branches.length; _i6++) {
        traverseNode(node.branches[_i6], context);
      }

      break;

    case 10
    /* IF_BRANCH */
    :
    case 11
    /* FOR */
    :
    case 1
    /* ELEMENT */
    :
    case 0
    /* ROOT */
    :
      traverseChildren(node, context);
      break;
  } // exit transforms


  context.currentNode = node;
  var i = exitFns.length;

  while (i--) {
    exitFns[i]();
  }
}

function createStructuralDirectiveTransform(name, fn) {
  var matches = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(name) ? function (n) {
    return n === name;
  } : function (n) {
    return name.test(n);
  };
  return function (node, context) {
    if (node.type === 1
    /* ELEMENT */
    ) {
        var props = node.props; // structural directive transforms are not concerned with slots
        // as they are handled separately in vSlot.ts

        if (node.tagType === 3
        /* TEMPLATE */
        && props.some(isVSlot)) {
          return;
        }

        var exitFns = [];

        for (var i = 0; i < props.length; i++) {
          var prop = props[i];

          if (prop.type === 7
          /* DIRECTIVE */
          && matches(prop.name)) {
            // structural directives are removed to avoid infinite recursion
            // also we remove them *before* applying so that it can further
            // traverse itself in case it moves the node around
            props.splice(i, 1);
            i--;
            var onExit = fn(node, prop, context);
            if (onExit) exitFns.push(onExit);
          }
        }

        return exitFns;
      }
  };
}

var PURE_ANNOTATION = "/*#__PURE__*/";

function createCodegenContext(ast, _ref2) {
  var _ref2$mode = _ref2.mode,
      mode = _ref2$mode === void 0 ? 'function' : _ref2$mode,
      _ref2$prefixIdentifie = _ref2.prefixIdentifiers,
      prefixIdentifiers = _ref2$prefixIdentifie === void 0 ? mode === 'module' : _ref2$prefixIdentifie,
      _ref2$sourceMap = _ref2.sourceMap,
      sourceMap = _ref2$sourceMap === void 0 ? false : _ref2$sourceMap,
      _ref2$filename = _ref2.filename,
      filename = _ref2$filename === void 0 ? "template.vue.html" : _ref2$filename,
      _ref2$scopeId = _ref2.scopeId,
      scopeId = _ref2$scopeId === void 0 ? null : _ref2$scopeId,
      _ref2$optimizeImports = _ref2.optimizeImports,
      optimizeImports = _ref2$optimizeImports === void 0 ? false : _ref2$optimizeImports,
      _ref2$runtimeGlobalNa = _ref2.runtimeGlobalName,
      runtimeGlobalName = _ref2$runtimeGlobalNa === void 0 ? "Vue" : _ref2$runtimeGlobalNa,
      _ref2$runtimeModuleNa = _ref2.runtimeModuleName,
      runtimeModuleName = _ref2$runtimeModuleNa === void 0 ? "vue" : _ref2$runtimeModuleNa,
      _ref2$ssr = _ref2.ssr,
      ssr = _ref2$ssr === void 0 ? false : _ref2$ssr,
      _ref2$isTS = _ref2.isTS,
      isTS = _ref2$isTS === void 0 ? false : _ref2$isTS;
  var context = {
    mode: mode,
    prefixIdentifiers: prefixIdentifiers,
    sourceMap: sourceMap,
    filename: filename,
    scopeId: scopeId,
    optimizeImports: optimizeImports,
    runtimeGlobalName: runtimeGlobalName,
    runtimeModuleName: runtimeModuleName,
    ssr: ssr,
    isTS: isTS,
    source: ast.loc.source,
    code: "",
    column: 1,
    line: 1,
    offset: 0,
    indentLevel: 0,
    pure: false,
    map: undefined,
    helper: function helper(key) {
      return "_".concat(helperNameMap[key]);
    },
    push: function push(code, node) {
      context.code += code;
    },
    indent: function indent() {
      _newline(++context.indentLevel);
    },
    deindent: function deindent() {
      var withoutNewLine = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (withoutNewLine) {
        --context.indentLevel;
      } else {
        _newline(--context.indentLevel);
      }
    },
    newline: function newline() {
      _newline(context.indentLevel);
    }
  };

  function _newline(n) {
    context.push('\n' + "  ".repeat(n));
  }

  return context;
}

function generate(ast) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var context = createCodegenContext(ast, options);
  if (options.onContextCreated) options.onContextCreated(context);
  var mode = context.mode,
      push = context.push,
      prefixIdentifiers = context.prefixIdentifiers,
      indent = context.indent,
      deindent = context.deindent,
      newline = context.newline,
      scopeId = context.scopeId,
      ssr = context.ssr;
  var hasHelpers = ast.helpers.length > 0;
  var useWithBlock = !prefixIdentifiers && mode !== 'module'; // preambles
  // in setup() inline mode, the preamble is generated in a sub context
  // and returned separately.

  var preambleContext = context;
  {
    genFunctionPreamble(ast, preambleContext);
  } // enter render function

  var functionName = ssr ? "ssrRender" : "render";
  var args = ssr ? ['_ctx', '_push', '_parent', '_attrs'] : ['_ctx', '_cache'];
  var signature = args.join(', ');
  {
    push("function ".concat(functionName, "(").concat(signature, ") {"));
  }
  indent();

  if (useWithBlock) {
    push("with (_ctx) {");
    indent(); // function mode const declarations should be inside with block
    // also they should be renamed to avoid collision with user properties

    if (hasHelpers) {
      push("const { ".concat(ast.helpers.map(function (s) {
        return "".concat(helperNameMap[s], ": _").concat(helperNameMap[s]);
      }).join(', '), " } = _Vue"));
      push("\n");
      newline();
    }
  } // generate asset resolution statements


  if (ast.components.length) {
    genAssets(ast.components, 'component', context);

    if (ast.directives.length || ast.temps > 0) {
      newline();
    }
  }

  if (ast.directives.length) {
    genAssets(ast.directives, 'directive', context);

    if (ast.temps > 0) {
      newline();
    }
  }

  if (ast.filters && ast.filters.length) {
    newline();
    genAssets(ast.filters, 'filter', context);
    newline();
  }

  if (ast.temps > 0) {
    push("let ");

    for (var i = 0; i < ast.temps; i++) {
      push("".concat(i > 0 ? ", " : "", "_temp").concat(i));
    }
  }

  if (ast.components.length || ast.directives.length || ast.temps) {
    push("\n");
    newline();
  } // generate the VNode tree expression


  if (!ssr) {
    push("return ");
  }

  if (ast.codegenNode) {
    genNode(ast.codegenNode, context);
  } else {
    push("null");
  }

  if (useWithBlock) {
    deindent();
    push("}");
  }

  deindent();
  push("}");
  return {
    ast: ast,
    code: context.code,
    preamble: "",
    // SourceMapGenerator does have toJSON() method but it's not in the types
    map: context.map ? context.map.toJSON() : undefined
  };
}

function genFunctionPreamble(ast, context) {
  var ssr = context.ssr,
      prefixIdentifiers = context.prefixIdentifiers,
      push = context.push,
      newline = context.newline,
      runtimeModuleName = context.runtimeModuleName,
      runtimeGlobalName = context.runtimeGlobalName;
  var VueBinding = runtimeGlobalName;

  var aliasHelper = function aliasHelper(s) {
    return "".concat(helperNameMap[s], ": _").concat(helperNameMap[s]);
  }; // Generate const declaration for helpers
  // In prefix mode, we place the const declaration at top so it's done
  // only once; But if we not prefixing, we place the declaration inside the
  // with block so it doesn't incur the `in` check cost for every helper access.


  if (ast.helpers.length > 0) {
    {
      // "with" mode.
      // save Vue in a separate variable to avoid collision
      push("const _Vue = ".concat(VueBinding, "\n")); // in "with" mode, helpers are declared inside the with block to avoid
      // has check cost, but hoists are lifted out of the function - we need
      // to provide the helper here.

      if (ast.hoists.length) {
        var staticHelpers = [CREATE_VNODE, CREATE_COMMENT, CREATE_TEXT, CREATE_STATIC].filter(function (helper) {
          return ast.helpers.includes(helper);
        }).map(aliasHelper).join(', ');
        push("const { ".concat(staticHelpers, " } = _Vue\n"));
      }
    }
  }

  genHoists(ast.hoists, context);
  newline();
  push("return ");
}

function genAssets(assets, type, _ref3) {
  var helper = _ref3.helper,
      push = _ref3.push,
      newline = _ref3.newline,
      isTS = _ref3.isTS;
  var resolver = helper(type === 'filter' ? RESOLVE_FILTER : type === 'component' ? RESOLVE_COMPONENT : RESOLVE_DIRECTIVE);

  for (var i = 0; i < assets.length; i++) {
    var id = assets[i]; // potential component implicit self-reference inferred from SFC filename

    var maybeSelfReference = id.endsWith('__self');

    if (maybeSelfReference) {
      id = id.slice(0, -6);
    }

    push("const ".concat(toValidAssetId(id, type), " = ").concat(resolver, "(").concat(JSON.stringify(id)).concat(maybeSelfReference ? ", true" : "", ")").concat(isTS ? "!" : ""));

    if (i < assets.length - 1) {
      newline();
    }
  }
}

function genHoists(hoists, context) {
  if (!hoists.length) {
    return;
  }

  context.pure = true;
  var push = context.push,
      newline = context.newline,
      helper = context.helper,
      scopeId = context.scopeId,
      mode = context.mode;
  newline();
  hoists.forEach(function (exp, i) {
    if (exp) {
      push("const _hoisted_".concat(i + 1, " = "));
      genNode(exp, context);
      newline();
    }
  });
  context.pure = false;
}

function isText$1(n) {
  return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(n) || n.type === 4
  /* SIMPLE_EXPRESSION */
  || n.type === 2
  /* TEXT */
  || n.type === 5
  /* INTERPOLATION */
  || n.type === 8
  /* COMPOUND_EXPRESSION */
  ;
}

function genNodeListAsArray(nodes, context) {
  var multilines = nodes.length > 3 ||  true && nodes.some(function (n) {
    return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(n) || !isText$1(n);
  });
  context.push("[");
  multilines && context.indent();
  genNodeList(nodes, context, multilines);
  multilines && context.deindent();
  context.push("]");
}

function genNodeList(nodes, context) {
  var multilines = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var comma = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  var push = context.push,
      newline = context.newline;

  for (var i = 0; i < nodes.length; i++) {
    var node = nodes[i];

    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(node)) {
      push(node);
    } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(node)) {
      genNodeListAsArray(node, context);
    } else {
      genNode(node, context);
    }

    if (i < nodes.length - 1) {
      if (multilines) {
        comma && push(',');
        newline();
      } else {
        comma && push(', ');
      }
    }
  }
}

function genNode(node, context) {
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(node)) {
    context.push(node);
    return;
  }

  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isSymbol)(node)) {
    context.push(context.helper(node));
    return;
  }

  switch (node.type) {
    case 1
    /* ELEMENT */
    :
    case 9
    /* IF */
    :
    case 11
    /* FOR */
    :
       true && assert(node.codegenNode != null, "Codegen node is missing for element/if/for node. " + "Apply appropriate transforms first.");
      genNode(node.codegenNode, context);
      break;

    case 2
    /* TEXT */
    :
      genText(node, context);
      break;

    case 4
    /* SIMPLE_EXPRESSION */
    :
      genExpression(node, context);
      break;

    case 5
    /* INTERPOLATION */
    :
      genInterpolation(node, context);
      break;

    case 12
    /* TEXT_CALL */
    :
      genNode(node.codegenNode, context);
      break;

    case 8
    /* COMPOUND_EXPRESSION */
    :
      genCompoundExpression(node, context);
      break;

    case 3
    /* COMMENT */
    :
      genComment(node, context);
      break;

    case 13
    /* VNODE_CALL */
    :
      genVNodeCall(node, context);
      break;

    case 14
    /* JS_CALL_EXPRESSION */
    :
      genCallExpression(node, context);
      break;

    case 15
    /* JS_OBJECT_EXPRESSION */
    :
      genObjectExpression(node, context);
      break;

    case 17
    /* JS_ARRAY_EXPRESSION */
    :
      genArrayExpression(node, context);
      break;

    case 18
    /* JS_FUNCTION_EXPRESSION */
    :
      genFunctionExpression(node, context);
      break;

    case 19
    /* JS_CONDITIONAL_EXPRESSION */
    :
      genConditionalExpression(node, context);
      break;

    case 20
    /* JS_CACHE_EXPRESSION */
    :
      genCacheExpression(node, context);
      break;
    // SSR only types

    case 21
    /* JS_BLOCK_STATEMENT */
    :
      break;

    case 22
    /* JS_TEMPLATE_LITERAL */
    :
      break;

    case 23
    /* JS_IF_STATEMENT */
    :
      break;

    case 24
    /* JS_ASSIGNMENT_EXPRESSION */
    :
      break;

    case 25
    /* JS_SEQUENCE_EXPRESSION */
    :
      break;

    case 26
    /* JS_RETURN_STATEMENT */
    :
      break;

    /* istanbul ignore next */

    case 10
    /* IF_BRANCH */
    :
      // noop
      break;

    default:
      if (true) {
        assert(false, "unhandled codegen node type: ".concat(node.type)); // make sure we exhaust all possible types

        var exhaustiveCheck = node;
        return exhaustiveCheck;
      }

  }
}

function genText(node, context) {
  context.push(JSON.stringify(node.content), node);
}

function genExpression(node, context) {
  var content = node.content,
      isStatic = node.isStatic;
  context.push(isStatic ? JSON.stringify(content) : content, node);
}

function genInterpolation(node, context) {
  var push = context.push,
      helper = context.helper,
      pure = context.pure;
  if (pure) push(PURE_ANNOTATION);
  push("".concat(helper(TO_DISPLAY_STRING), "("));
  genNode(node.content, context);
  push(")");
}

function genCompoundExpression(node, context) {
  for (var i = 0; i < node.children.length; i++) {
    var child = node.children[i];

    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(child)) {
      context.push(child);
    } else {
      genNode(child, context);
    }
  }
}

function genExpressionAsPropertyKey(node, context) {
  var push = context.push;

  if (node.type === 8
  /* COMPOUND_EXPRESSION */
  ) {
      push("[");
      genCompoundExpression(node, context);
      push("]");
    } else if (node.isStatic) {
    // only quote keys if necessary
    var text = isSimpleIdentifier(node.content) ? node.content : JSON.stringify(node.content);
    push(text, node);
  } else {
    push("[".concat(node.content, "]"), node);
  }
}

function genComment(node, context) {
  var push = context.push,
      helper = context.helper,
      pure = context.pure;

  if (pure) {
    push(PURE_ANNOTATION);
  }

  push("".concat(helper(CREATE_COMMENT), "(").concat(JSON.stringify(node.content), ")"), node);
}

function genVNodeCall(node, context) {
  var push = context.push,
      helper = context.helper,
      pure = context.pure;
  var tag = node.tag,
      props = node.props,
      children = node.children,
      patchFlag = node.patchFlag,
      dynamicProps = node.dynamicProps,
      directives = node.directives,
      isBlock = node.isBlock,
      disableTracking = node.disableTracking;

  if (directives) {
    push(helper(WITH_DIRECTIVES) + "(");
  }

  if (isBlock) {
    push("(".concat(helper(OPEN_BLOCK), "(").concat(disableTracking ? "true" : "", "), "));
  }

  if (pure) {
    push(PURE_ANNOTATION);
  }

  push(helper(isBlock ? CREATE_BLOCK : CREATE_VNODE) + "(", node);
  genNodeList(genNullableArgs([tag, props, children, patchFlag, dynamicProps]), context);
  push(")");

  if (isBlock) {
    push(")");
  }

  if (directives) {
    push(", ");
    genNode(directives, context);
    push(")");
  }
}

function genNullableArgs(args) {
  var i = args.length;

  while (i--) {
    if (args[i] != null) break;
  }

  return args.slice(0, i + 1).map(function (arg) {
    return arg || "null";
  });
} // JavaScript


function genCallExpression(node, context) {
  var push = context.push,
      helper = context.helper,
      pure = context.pure;
  var callee = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(node.callee) ? node.callee : helper(node.callee);

  if (pure) {
    push(PURE_ANNOTATION);
  }

  push(callee + "(", node);
  genNodeList(node.arguments, context);
  push(")");
}

function genObjectExpression(node, context) {
  var push = context.push,
      indent = context.indent,
      deindent = context.deindent,
      newline = context.newline;
  var properties = node.properties;

  if (!properties.length) {
    push("{}", node);
    return;
  }

  var multilines = properties.length > 1 ||  true && properties.some(function (p) {
    return p.value.type !== 4;
  }
  /* SIMPLE_EXPRESSION */
  );
  push(multilines ? "{" : "{ ");
  multilines && indent();

  for (var i = 0; i < properties.length; i++) {
    var _properties$i2 = properties[i],
        key = _properties$i2.key,
        value = _properties$i2.value; // key

    genExpressionAsPropertyKey(key, context);
    push(": "); // value

    genNode(value, context);

    if (i < properties.length - 1) {
      // will only reach this if it's multilines
      push(",");
      newline();
    }
  }

  multilines && deindent();
  push(multilines ? "}" : " }");
}

function genArrayExpression(node, context) {
  genNodeListAsArray(node.elements, context);
}

function genFunctionExpression(node, context) {
  var push = context.push,
      indent = context.indent,
      deindent = context.deindent,
      scopeId = context.scopeId,
      mode = context.mode;
  var params = node.params,
      returns = node.returns,
      body = node.body,
      newline = node.newline,
      isSlot = node.isSlot;

  if (isSlot) {
    // wrap slot functions with owner context
    push("_".concat(helperNameMap[WITH_CTX], "("));
  }

  push("(", node);

  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(params)) {
    genNodeList(params, context);
  } else if (params) {
    genNode(params, context);
  }

  push(") => ");

  if (newline || body) {
    push("{");
    indent();
  }

  if (returns) {
    if (newline) {
      push("return ");
    }

    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(returns)) {
      genNodeListAsArray(returns, context);
    } else {
      genNode(returns, context);
    }
  } else if (body) {
    genNode(body, context);
  }

  if (newline || body) {
    deindent();
    push("}");
  }

  if (isSlot) {
    if (node.isNonScopedSlot) {
      push(", undefined, true");
    }

    push(")");
  }
}

function genConditionalExpression(node, context) {
  var test = node.test,
      consequent = node.consequent,
      alternate = node.alternate,
      needNewline = node.newline;
  var push = context.push,
      indent = context.indent,
      deindent = context.deindent,
      newline = context.newline;

  if (test.type === 4
  /* SIMPLE_EXPRESSION */
  ) {
      var needsParens = !isSimpleIdentifier(test.content);
      needsParens && push("(");
      genExpression(test, context);
      needsParens && push(")");
    } else {
    push("(");
    genNode(test, context);
    push(")");
  }

  needNewline && indent();
  context.indentLevel++;
  needNewline || push(" ");
  push("? ");
  genNode(consequent, context);
  context.indentLevel--;
  needNewline && newline();
  needNewline || push(" ");
  push(": ");
  var isNested = alternate.type === 19
  /* JS_CONDITIONAL_EXPRESSION */
  ;

  if (!isNested) {
    context.indentLevel++;
  }

  genNode(alternate, context);

  if (!isNested) {
    context.indentLevel--;
  }

  needNewline && deindent(true
  /* without newline */
  );
}

function genCacheExpression(node, context) {
  var push = context.push,
      helper = context.helper,
      indent = context.indent,
      deindent = context.deindent,
      newline = context.newline;
  push("_cache[".concat(node.index, "] || ("));

  if (node.isVNode) {
    indent();
    push("".concat(helper(SET_BLOCK_TRACKING), "(-1),"));
    newline();
  }

  push("_cache[".concat(node.index, "] = "));
  genNode(node.value, context);

  if (node.isVNode) {
    push(",");
    newline();
    push("".concat(helper(SET_BLOCK_TRACKING), "(1),"));
    newline();
    push("_cache[".concat(node.index, "]"));
    deindent();
  }

  push(")");
} // these keywords should not appear inside expressions, but operators like
// typeof, instanceof and in are allowed


var prohibitedKeywordRE = new RegExp('\\b' + ('do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' + 'super,throw,while,yield,delete,export,import,return,switch,default,' + 'extends,finally,continue,debugger,function,arguments,typeof,void').split(',').join('\\b|\\b') + '\\b'); // strip strings in expressions

var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;
/**
 * Validate a non-prefixed expression.
 * This is only called when using the in-browser runtime compiler since it
 * doesn't prefix expressions.
 */

function validateBrowserExpression(node, context) {
  var asParams = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var asRawStatements = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var exp = node.content; // empty expressions are validated per-directive since some directives
  // do allow empty expressions.

  if (!exp.trim()) {
    return;
  }

  try {
    new Function(asRawStatements ? " ".concat(exp, " ") : "return ".concat(asParams ? "(".concat(exp, ") => {}") : "(".concat(exp, ")")));
  } catch (e) {
    var message = e.message;
    var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);

    if (keywordMatch) {
      message = "avoid using JavaScript keyword as property name: \"".concat(keywordMatch[0], "\"");
    }

    context.onError(createCompilerError(43
    /* X_INVALID_EXPRESSION */
    , node.loc, undefined, message));
  }
}

var transformExpression = function transformExpression(node, context) {
  if (node.type === 5
  /* INTERPOLATION */
  ) {
      node.content = processExpression(node.content, context);
    } else if (node.type === 1
  /* ELEMENT */
  ) {
      // handle directives on element
      for (var i = 0; i < node.props.length; i++) {
        var dir = node.props[i]; // do not process for v-on & v-for since they are special handled

        if (dir.type === 7
        /* DIRECTIVE */
        && dir.name !== 'for') {
          var exp = dir.exp;
          var arg = dir.arg; // do not process exp if this is v-on:arg - we need special handling
          // for wrapping inline statements.

          if (exp && exp.type === 4
          /* SIMPLE_EXPRESSION */
          && !(dir.name === 'on' && arg)) {
            dir.exp = processExpression(exp, context, // slot args must be processed as function params
            dir.name === 'slot');
          }

          if (arg && arg.type === 4
          /* SIMPLE_EXPRESSION */
          && !arg.isStatic) {
            dir.arg = processExpression(arg, context);
          }
        }
      }
    }
}; // Important: since this function uses Node.js only dependencies, it should
// always be used with a leading !true check so that it can be
// tree-shaken from the browser build.


function processExpression(node, context) {
  var asParams = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var asRawStatements = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  {
    if (true) {
      // simple in-browser validation (same logic in 2.x)
      validateBrowserExpression(node, context, asParams, asRawStatements);
    }

    return node;
  }
}

var transformIf = createStructuralDirectiveTransform(/^(if|else|else-if)$/, function (node, dir, context) {
  return processIf(node, dir, context, function (ifNode, branch, isRoot) {
    // #1587: We need to dynamically increment the key based on the current
    // node's sibling nodes, since chained v-if/else branches are
    // rendered at the same depth
    var siblings = context.parent.children;
    var i = siblings.indexOf(ifNode);
    var key = 0;

    while (i-- >= 0) {
      var sibling = siblings[i];

      if (sibling && sibling.type === 9
      /* IF */
      ) {
          key += sibling.branches.length;
        }
    } // Exit callback. Complete the codegenNode when all children have been
    // transformed.


    return function () {
      if (isRoot) {
        ifNode.codegenNode = createCodegenNodeForBranch(branch, key, context);
      } else {
        // attach this branch's codegen node to the v-if root.
        var parentCondition = getParentCondition(ifNode.codegenNode);
        parentCondition.alternate = createCodegenNodeForBranch(branch, key + ifNode.branches.length - 1, context);
      }
    };
  });
}); // target-agnostic transform used for both Client and SSR

function processIf(node, dir, context, processCodegen) {
  if (dir.name !== 'else' && (!dir.exp || !dir.exp.content.trim())) {
    var loc = dir.exp ? dir.exp.loc : node.loc;
    context.onError(createCompilerError(27
    /* X_V_IF_NO_EXPRESSION */
    , dir.loc));
    dir.exp = createSimpleExpression("true", false, loc);
  }

  if ( true && dir.exp) {
    validateBrowserExpression(dir.exp, context);
  }

  if (dir.name === 'if') {
    var branch = createIfBranch(node, dir);
    var ifNode = {
      type: 9
      /* IF */
      ,
      loc: node.loc,
      branches: [branch]
    };
    context.replaceNode(ifNode);

    if (processCodegen) {
      return processCodegen(ifNode, branch, true);
    }
  } else {
    // locate the adjacent v-if
    var siblings = context.parent.children;
    var comments = [];
    var i = siblings.indexOf(node);

    while (i-- >= -1) {
      var sibling = siblings[i];

      if ( true && sibling && sibling.type === 3
      /* COMMENT */
      ) {
          context.removeNode(sibling);
          comments.unshift(sibling);
          continue;
        }

      if (sibling && sibling.type === 2
      /* TEXT */
      && !sibling.content.trim().length) {
        context.removeNode(sibling);
        continue;
      }

      if (sibling && sibling.type === 9
      /* IF */
      ) {
          (function () {
            // move the node to the if node's branches
            context.removeNode();
            var branch = createIfBranch(node, dir);

            if ( true && comments.length && // #3619 ignore comments if the v-if is direct child of <transition>
            !(context.parent && context.parent.type === 1
            /* ELEMENT */
            && isBuiltInType(context.parent.tag, 'transition'))) {
              branch.children = [].concat(comments, _toConsumableArray(branch.children));
            } // check if user is forcing same key on different branches


            if (true) {
              var key = branch.userKey;

              if (key) {
                sibling.branches.forEach(function (_ref4) {
                  var userKey = _ref4.userKey;

                  if (isSameKey(userKey, key)) {
                    context.onError(createCompilerError(28
                    /* X_V_IF_SAME_KEY */
                    , branch.userKey.loc));
                  }
                });
              }
            }

            sibling.branches.push(branch);
            var onExit = processCodegen && processCodegen(sibling, branch, false); // since the branch was removed, it will not be traversed.
            // make sure to traverse here.

            traverseNode(branch, context); // call on exit

            if (onExit) onExit(); // make sure to reset currentNode after traversal to indicate this
            // node has been removed.

            context.currentNode = null;
          })();
        } else {
        context.onError(createCompilerError(29
        /* X_V_ELSE_NO_ADJACENT_IF */
        , node.loc));
      }

      break;
    }
  }
}

function createIfBranch(node, dir) {
  return {
    type: 10
    /* IF_BRANCH */
    ,
    loc: node.loc,
    condition: dir.name === 'else' ? undefined : dir.exp,
    children: node.tagType === 3
    /* TEMPLATE */
    && !findDir(node, 'for') ? node.children : [node],
    userKey: findProp(node, "key")
  };
}

function createCodegenNodeForBranch(branch, keyIndex, context) {
  if (branch.condition) {
    return createConditionalExpression(branch.condition, createChildrenCodegenNode(branch, keyIndex, context), // make sure to pass in asBlock: true so that the comment node call
    // closes the current block.
    createCallExpression(context.helper(CREATE_COMMENT), [ true ? '"v-if"' : 0, 'true']));
  } else {
    return createChildrenCodegenNode(branch, keyIndex, context);
  }
}

function createChildrenCodegenNode(branch, keyIndex, context) {
  var helper = context.helper,
      removeHelper = context.removeHelper;
  var keyProperty = createObjectProperty("key", createSimpleExpression("".concat(keyIndex), false, locStub, 2
  /* CAN_HOIST */
  ));
  var children = branch.children;
  var firstChild = children[0];
  var needFragmentWrapper = children.length !== 1 || firstChild.type !== 1
  /* ELEMENT */
  ;

  if (needFragmentWrapper) {
    if (children.length === 1 && firstChild.type === 11
    /* FOR */
    ) {
        // optimize away nested fragments when child is a ForNode
        var vnodeCall = firstChild.codegenNode;
        injectProp(vnodeCall, keyProperty, context);
        return vnodeCall;
      } else {
      var patchFlag = 64
      /* STABLE_FRAGMENT */
      ;
      var patchFlagText = _vue_shared__WEBPACK_IMPORTED_MODULE_0__.PatchFlagNames[64]; // check if the fragment actually contains a single valid child with
      // the rest being comments

      if ( true && children.filter(function (c) {
        return c.type !== 3;
      }
      /* COMMENT */
      ).length === 1) {
        patchFlag |= 2048
        /* DEV_ROOT_FRAGMENT */
        ;
        patchFlagText += ", ".concat(_vue_shared__WEBPACK_IMPORTED_MODULE_0__.PatchFlagNames[2048]);
      }

      return createVNodeCall(context, helper(FRAGMENT), createObjectExpression([keyProperty]), children, patchFlag + ( true ? " /* ".concat(patchFlagText, " */") : 0), undefined, undefined, true, false, branch.loc);
    }
  } else {
    var _vnodeCall = firstChild.codegenNode; // Change createVNode to createBlock.

    if (_vnodeCall.type === 13
    /* VNODE_CALL */
    && !_vnodeCall.isBlock) {
      removeHelper(CREATE_VNODE);
      _vnodeCall.isBlock = true;
      helper(OPEN_BLOCK);
      helper(CREATE_BLOCK);
    } // inject branch key


    injectProp(_vnodeCall, keyProperty, context);
    return _vnodeCall;
  }
}

function isSameKey(a, b) {
  if (!a || a.type !== b.type) {
    return false;
  }

  if (a.type === 6
  /* ATTRIBUTE */
  ) {
      if (a.value.content !== b.value.content) {
        return false;
      }
    } else {
    // directive
    var exp = a.exp;
    var branchExp = b.exp;

    if (exp.type !== branchExp.type) {
      return false;
    }

    if (exp.type !== 4
    /* SIMPLE_EXPRESSION */
    || exp.isStatic !== branchExp.isStatic || exp.content !== branchExp.content) {
      return false;
    }
  }

  return true;
}

function getParentCondition(node) {
  while (true) {
    if (node.type === 19
    /* JS_CONDITIONAL_EXPRESSION */
    ) {
        if (node.alternate.type === 19
        /* JS_CONDITIONAL_EXPRESSION */
        ) {
            node = node.alternate;
          } else {
          return node;
        }
      } else if (node.type === 20
    /* JS_CACHE_EXPRESSION */
    ) {
        node = node.value;
      }
  }
}

var transformFor = createStructuralDirectiveTransform('for', function (node, dir, context) {
  var helper = context.helper,
      removeHelper = context.removeHelper;
  return processFor(node, dir, context, function (forNode) {
    // create the loop render function expression now, and add the
    // iterator on exit after all children have been traversed
    var renderExp = createCallExpression(helper(RENDER_LIST), [forNode.source]);
    var keyProp = findProp(node, "key");
    var keyProperty = keyProp ? createObjectProperty("key", keyProp.type === 6
    /* ATTRIBUTE */
    ? createSimpleExpression(keyProp.value.content, true) : keyProp.exp) : null;
    var isStableFragment = forNode.source.type === 4
    /* SIMPLE_EXPRESSION */
    && forNode.source.constType > 0
    /* NOT_CONSTANT */
    ;
    var fragmentFlag = isStableFragment ? 64
    /* STABLE_FRAGMENT */
    : keyProp ? 128
    /* KEYED_FRAGMENT */
    : 256
    /* UNKEYED_FRAGMENT */
    ;
    forNode.codegenNode = createVNodeCall(context, helper(FRAGMENT), undefined, renderExp, fragmentFlag + ( true ? " /* ".concat(_vue_shared__WEBPACK_IMPORTED_MODULE_0__.PatchFlagNames[fragmentFlag], " */") : 0), undefined, undefined, true
    /* isBlock */
    , !isStableFragment
    /* disableTracking */
    , node.loc);
    return function () {
      // finish the codegen now that all children have been traversed
      var childBlock;
      var isTemplate = isTemplateNode(node);
      var children = forNode.children; // check <template v-for> key placement

      if (( true) && isTemplate) {
        node.children.some(function (c) {
          if (c.type === 1
          /* ELEMENT */
          ) {
              var key = findProp(c, 'key');

              if (key) {
                context.onError(createCompilerError(32
                /* X_V_FOR_TEMPLATE_KEY_PLACEMENT */
                , key.loc));
                return true;
              }
            }
        });
      }

      var needFragmentWrapper = children.length !== 1 || children[0].type !== 1
      /* ELEMENT */
      ;
      var slotOutlet = isSlotOutlet(node) ? node : isTemplate && node.children.length === 1 && isSlotOutlet(node.children[0]) ? node.children[0] // api-extractor somehow fails to infer this
      : null;

      if (slotOutlet) {
        // <slot v-for="..."> or <template v-for="..."><slot/></template>
        childBlock = slotOutlet.codegenNode;

        if (isTemplate && keyProperty) {
          // <template v-for="..." :key="..."><slot/></template>
          // we need to inject the key to the renderSlot() call.
          // the props for renderSlot is passed as the 3rd argument.
          injectProp(childBlock, keyProperty, context);
        }
      } else if (needFragmentWrapper) {
        // <template v-for="..."> with text or multi-elements
        // should generate a fragment block for each loop
        childBlock = createVNodeCall(context, helper(FRAGMENT), keyProperty ? createObjectExpression([keyProperty]) : undefined, node.children, 64
        /* STABLE_FRAGMENT */
        + ( true ? " /* ".concat(_vue_shared__WEBPACK_IMPORTED_MODULE_0__.PatchFlagNames[64], " */") : 0), undefined, undefined, true);
      } else {
        // Normal element v-for. Directly use the child's codegenNode
        // but mark it as a block.
        childBlock = children[0].codegenNode;

        if (isTemplate && keyProperty) {
          injectProp(childBlock, keyProperty, context);
        }

        if (childBlock.isBlock !== !isStableFragment) {
          if (childBlock.isBlock) {
            // switch from block to vnode
            removeHelper(OPEN_BLOCK);
            removeHelper(CREATE_BLOCK);
          } else {
            // switch from vnode to block
            removeHelper(CREATE_VNODE);
          }
        }

        childBlock.isBlock = !isStableFragment;

        if (childBlock.isBlock) {
          helper(OPEN_BLOCK);
          helper(CREATE_BLOCK);
        } else {
          helper(CREATE_VNODE);
        }
      }

      renderExp.arguments.push(createFunctionExpression(createForLoopParams(forNode.parseResult), childBlock, true
      /* force newline */
      ));
    };
  });
}); // target-agnostic transform used for both Client and SSR

function processFor(node, dir, context, processCodegen) {
  if (!dir.exp) {
    context.onError(createCompilerError(30
    /* X_V_FOR_NO_EXPRESSION */
    , dir.loc));
    return;
  }

  var parseResult = parseForExpression( // can only be simple expression because vFor transform is applied
  // before expression transform.
  dir.exp, context);

  if (!parseResult) {
    context.onError(createCompilerError(31
    /* X_V_FOR_MALFORMED_EXPRESSION */
    , dir.loc));
    return;
  }

  var addIdentifiers = context.addIdentifiers,
      removeIdentifiers = context.removeIdentifiers,
      scopes = context.scopes;
  var source = parseResult.source,
      value = parseResult.value,
      key = parseResult.key,
      index = parseResult.index;
  var forNode = {
    type: 11
    /* FOR */
    ,
    loc: dir.loc,
    source: source,
    valueAlias: value,
    keyAlias: key,
    objectIndexAlias: index,
    parseResult: parseResult,
    children: isTemplateNode(node) ? node.children : [node]
  };
  context.replaceNode(forNode); // bookkeeping

  scopes.vFor++;
  var onExit = processCodegen && processCodegen(forNode);
  return function () {
    scopes.vFor--;
    if (onExit) onExit();
  };
}

var forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/; // This regex doesn't cover the case if key or index aliases have destructuring,
// but those do not make sense in the first place, so this works in practice.

var forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
var stripParensRE = /^\(|\)$/g;

function parseForExpression(input, context) {
  var loc = input.loc;
  var exp = input.content;
  var inMatch = exp.match(forAliasRE);
  if (!inMatch) return;

  var _inMatch = _slicedToArray(inMatch, 3),
      LHS = _inMatch[1],
      RHS = _inMatch[2];

  var result = {
    source: createAliasExpression(loc, RHS.trim(), exp.indexOf(RHS, LHS.length)),
    value: undefined,
    key: undefined,
    index: undefined
  };

  if (true) {
    validateBrowserExpression(result.source, context);
  }

  var valueContent = LHS.trim().replace(stripParensRE, '').trim();
  var trimmedOffset = LHS.indexOf(valueContent);
  var iteratorMatch = valueContent.match(forIteratorRE);

  if (iteratorMatch) {
    valueContent = valueContent.replace(forIteratorRE, '').trim();
    var keyContent = iteratorMatch[1].trim();
    var keyOffset;

    if (keyContent) {
      keyOffset = exp.indexOf(keyContent, trimmedOffset + valueContent.length);
      result.key = createAliasExpression(loc, keyContent, keyOffset);

      if (true) {
        validateBrowserExpression(result.key, context, true);
      }
    }

    if (iteratorMatch[2]) {
      var indexContent = iteratorMatch[2].trim();

      if (indexContent) {
        result.index = createAliasExpression(loc, indexContent, exp.indexOf(indexContent, result.key ? keyOffset + keyContent.length : trimmedOffset + valueContent.length));

        if (true) {
          validateBrowserExpression(result.index, context, true);
        }
      }
    }
  }

  if (valueContent) {
    result.value = createAliasExpression(loc, valueContent, trimmedOffset);

    if (true) {
      validateBrowserExpression(result.value, context, true);
    }
  }

  return result;
}

function createAliasExpression(range, content, offset) {
  return createSimpleExpression(content, false, getInnerRange(range, offset, content.length));
}

function createForLoopParams(_ref5) {
  var value = _ref5.value,
      key = _ref5.key,
      index = _ref5.index;
  var params = [];

  if (value) {
    params.push(value);
  }

  if (key) {
    if (!value) {
      params.push(createSimpleExpression("_", false));
    }

    params.push(key);
  }

  if (index) {
    if (!key) {
      if (!value) {
        params.push(createSimpleExpression("_", false));
      }

      params.push(createSimpleExpression("__", false));
    }

    params.push(index);
  }

  return params;
}

var defaultFallback = createSimpleExpression("undefined", false); // A NodeTransform that:
// 1. Tracks scope identifiers for scoped slots so that they don't get prefixed
//    by transformExpression. This is only applied in non-browser builds with
//    { prefixIdentifiers: true }.
// 2. Track v-slot depths so that we know a slot is inside another slot.
//    Note the exit callback is executed before buildSlots() on the same node,
//    so only nested slots see positive numbers.

var trackSlotScopes = function trackSlotScopes(node, context) {
  if (node.type === 1
  /* ELEMENT */
  && (node.tagType === 1
  /* COMPONENT */
  || node.tagType === 3
  /* TEMPLATE */
  )) {
    // We are only checking non-empty v-slot here
    // since we only care about slots that introduce scope variables.
    var vSlot = findDir(node, 'slot');

    if (vSlot) {
      vSlot.exp;
      context.scopes.vSlot++;
      return function () {
        context.scopes.vSlot--;
      };
    }
  }
}; // A NodeTransform that tracks scope identifiers for scoped slots with v-for.
// This transform is only applied in non-browser builds with { prefixIdentifiers: true }


var trackVForSlotScopes = function trackVForSlotScopes(node, context) {
  var vFor;

  if (isTemplateNode(node) && node.props.some(isVSlot) && (vFor = findDir(node, 'for'))) {
    var result = vFor.parseResult = parseForExpression(vFor.exp, context);

    if (result) {
      var value = result.value,
          key = result.key,
          index = result.index;
      var addIdentifiers = context.addIdentifiers,
          removeIdentifiers = context.removeIdentifiers;
      value && addIdentifiers(value);
      key && addIdentifiers(key);
      index && addIdentifiers(index);
      return function () {
        value && removeIdentifiers(value);
        key && removeIdentifiers(key);
        index && removeIdentifiers(index);
      };
    }
  }
};

var buildClientSlotFn = function buildClientSlotFn(props, children, loc) {
  return createFunctionExpression(props, children, false
  /* newline */
  , true
  /* isSlot */
  , children.length ? children[0].loc : loc);
}; // Instead of being a DirectiveTransform, v-slot processing is called during
// transformElement to build the slots object for a component.


function buildSlots(node, context) {
  var buildSlotFn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : buildClientSlotFn;
  context.helper(WITH_CTX);
  var children = node.children,
      loc = node.loc;
  var slotsProperties = [];
  var dynamicSlots = []; // If the slot is inside a v-for or another v-slot, force it to be dynamic
  // since it likely uses a scope variable.

  var hasDynamicSlots = context.scopes.vSlot > 0 || context.scopes.vFor > 0; // 1. Check for slot with slotProps on component itself.
  //    <Comp v-slot="{ prop }"/>

  var onComponentSlot = findDir(node, 'slot', true);

  if (onComponentSlot) {
    var arg = onComponentSlot.arg,
        exp = onComponentSlot.exp;

    if (arg && !isStaticExp(arg)) {
      hasDynamicSlots = true;
    }

    slotsProperties.push(createObjectProperty(arg || createSimpleExpression('default', true), buildSlotFn(exp, children, loc)));
  } // 2. Iterate through children and check for template slots
  //    <template v-slot:foo="{ prop }">


  var hasTemplateSlots = false;
  var hasNamedDefaultSlot = false;
  var implicitDefaultChildren = [];
  var seenSlotNames = new Set();

  for (var i = 0; i < children.length; i++) {
    var slotElement = children[i];
    var slotDir = void 0;

    if (!isTemplateNode(slotElement) || !(slotDir = findDir(slotElement, 'slot', true))) {
      // not a <template v-slot>, skip.
      if (slotElement.type !== 3
      /* COMMENT */
      ) {
          implicitDefaultChildren.push(slotElement);
        }

      continue;
    }

    if (onComponentSlot) {
      // already has on-component slot - this is incorrect usage.
      context.onError(createCompilerError(36
      /* X_V_SLOT_MIXED_SLOT_USAGE */
      , slotDir.loc));
      break;
    }

    hasTemplateSlots = true;
    var slotChildren = slotElement.children,
        slotLoc = slotElement.loc;
    var _slotDir = slotDir,
        _slotDir$arg = _slotDir.arg,
        slotName = _slotDir$arg === void 0 ? createSimpleExpression("default", true) : _slotDir$arg,
        slotProps = _slotDir.exp,
        dirLoc = _slotDir.loc; // check if name is dynamic.

    var staticSlotName = void 0;

    if (isStaticExp(slotName)) {
      staticSlotName = slotName ? slotName.content : "default";
    } else {
      hasDynamicSlots = true;
    }

    var slotFunction = buildSlotFn(slotProps, slotChildren, slotLoc); // check if this slot is conditional (v-if/v-for)

    var vIf = void 0;
    var vElse = void 0;
    var vFor = void 0;

    if (vIf = findDir(slotElement, 'if')) {
      hasDynamicSlots = true;
      dynamicSlots.push(createConditionalExpression(vIf.exp, buildDynamicSlot(slotName, slotFunction), defaultFallback));
    } else if (vElse = findDir(slotElement, /^else(-if)?$/, true
    /* allowEmpty */
    )) {
      // find adjacent v-if
      var j = i;
      var prev = void 0;

      while (j--) {
        prev = children[j];

        if (prev.type !== 3
        /* COMMENT */
        ) {
            break;
          }
      }

      if (prev && isTemplateNode(prev) && findDir(prev, 'if')) {
        // remove node
        children.splice(i, 1);
        i--; // attach this slot to previous conditional

        var conditional = dynamicSlots[dynamicSlots.length - 1];

        while (conditional.alternate.type === 19
        /* JS_CONDITIONAL_EXPRESSION */
        ) {
          conditional = conditional.alternate;
        }

        conditional.alternate = vElse.exp ? createConditionalExpression(vElse.exp, buildDynamicSlot(slotName, slotFunction), defaultFallback) : buildDynamicSlot(slotName, slotFunction);
      } else {
        context.onError(createCompilerError(29
        /* X_V_ELSE_NO_ADJACENT_IF */
        , vElse.loc));
      }
    } else if (vFor = findDir(slotElement, 'for')) {
      hasDynamicSlots = true;
      var parseResult = vFor.parseResult || parseForExpression(vFor.exp, context);

      if (parseResult) {
        // Render the dynamic slots as an array and add it to the createSlot()
        // args. The runtime knows how to handle it appropriately.
        dynamicSlots.push(createCallExpression(context.helper(RENDER_LIST), [parseResult.source, createFunctionExpression(createForLoopParams(parseResult), buildDynamicSlot(slotName, slotFunction), true
        /* force newline */
        )]));
      } else {
        context.onError(createCompilerError(31
        /* X_V_FOR_MALFORMED_EXPRESSION */
        , vFor.loc));
      }
    } else {
      // check duplicate static names
      if (staticSlotName) {
        if (seenSlotNames.has(staticSlotName)) {
          context.onError(createCompilerError(37
          /* X_V_SLOT_DUPLICATE_SLOT_NAMES */
          , dirLoc));
          continue;
        }

        seenSlotNames.add(staticSlotName);

        if (staticSlotName === 'default') {
          hasNamedDefaultSlot = true;
        }
      }

      slotsProperties.push(createObjectProperty(slotName, slotFunction));
    }
  }

  if (!onComponentSlot) {
    var buildDefaultSlotProperty = function buildDefaultSlotProperty(props, children) {
      var fn = buildSlotFn(props, children, loc);

      if (context.compatConfig) {
        fn.isNonScopedSlot = true;
      }

      return createObjectProperty("default", fn);
    };

    if (!hasTemplateSlots) {
      // implicit default slot (on component)
      slotsProperties.push(buildDefaultSlotProperty(undefined, children));
    } else if (implicitDefaultChildren.length && // #3766
    // with whitespace: 'preserve', whitespaces between slots will end up in
    // implicitDefaultChildren. Ignore if all implicit children are whitespaces.
    implicitDefaultChildren.some(function (node) {
      return isNonWhitespaceContent(node);
    })) {
      // implicit default slot (mixed with named slots)
      if (hasNamedDefaultSlot) {
        context.onError(createCompilerError(38
        /* X_V_SLOT_EXTRANEOUS_DEFAULT_SLOT_CHILDREN */
        , implicitDefaultChildren[0].loc));
      } else {
        slotsProperties.push(buildDefaultSlotProperty(undefined, implicitDefaultChildren));
      }
    }
  }

  var slotFlag = hasDynamicSlots ? 2
  /* DYNAMIC */
  : hasForwardedSlots(node.children) ? 3
  /* FORWARDED */
  : 1
  /* STABLE */
  ;
  var slots = createObjectExpression(slotsProperties.concat(createObjectProperty("_", // 2 = compiled but dynamic = can skip normalization, but must run diff
  // 1 = compiled and static = can skip normalization AND diff as optimized
  createSimpleExpression(slotFlag + ( true ? " /* ".concat(_vue_shared__WEBPACK_IMPORTED_MODULE_0__.slotFlagsText[slotFlag], " */") : 0), false))), loc);

  if (dynamicSlots.length) {
    slots = createCallExpression(context.helper(CREATE_SLOTS), [slots, createArrayExpression(dynamicSlots)]);
  }

  return {
    slots: slots,
    hasDynamicSlots: hasDynamicSlots
  };
}

function buildDynamicSlot(name, fn) {
  return createObjectExpression([createObjectProperty("name", name), createObjectProperty("fn", fn)]);
}

function hasForwardedSlots(children) {
  for (var i = 0; i < children.length; i++) {
    var child = children[i];

    switch (child.type) {
      case 1
      /* ELEMENT */
      :
        if (child.tagType === 2
        /* SLOT */
        || child.tagType === 0
        /* ELEMENT */
        && hasForwardedSlots(child.children)) {
          return true;
        }

        break;

      case 9
      /* IF */
      :
        if (hasForwardedSlots(child.branches)) return true;
        break;

      case 10
      /* IF_BRANCH */
      :
      case 11
      /* FOR */
      :
        if (hasForwardedSlots(child.children)) return true;
        break;
    }
  }

  return false;
}

function isNonWhitespaceContent(node) {
  if (node.type !== 2
  /* TEXT */
  && node.type !== 12
  /* TEXT_CALL */
  ) return true;
  return node.type === 2
  /* TEXT */
  ? !!node.content.trim() : isNonWhitespaceContent(node.content);
} // some directive transforms (e.g. v-model) may return a symbol for runtime
// import, which should be used instead of a resolveDirective call.


var directiveImportMap = new WeakMap(); // generate a JavaScript AST for this element's codegen

var transformElement = function transformElement(node, context) {
  // perform the work on exit, after all child expressions have been
  // processed and merged.
  return function postTransformElement() {
    node = context.currentNode;

    if (!(node.type === 1
    /* ELEMENT */
    && (node.tagType === 0
    /* ELEMENT */
    || node.tagType === 1
    /* COMPONENT */
    ))) {
      return;
    }

    var _node3 = node,
        tag = _node3.tag,
        props = _node3.props;
    var isComponent = node.tagType === 1
    /* COMPONENT */
    ; // The goal of the transform is to create a codegenNode implementing the
    // VNodeCall interface.

    var vnodeTag = isComponent ? resolveComponentType(node, context) : "\"".concat(tag, "\"");
    var isDynamicComponent = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isObject)(vnodeTag) && vnodeTag.callee === RESOLVE_DYNAMIC_COMPONENT;
    var vnodeProps;
    var vnodeChildren;
    var vnodePatchFlag;
    var patchFlag = 0;
    var vnodeDynamicProps;
    var dynamicPropNames;
    var vnodeDirectives;
    var shouldUseBlock = // dynamic component may resolve to plain elements
    isDynamicComponent || vnodeTag === TELEPORT || vnodeTag === SUSPENSE || !isComponent && ( // <svg> and <foreignObject> must be forced into blocks so that block
    // updates inside get proper isSVG flag at runtime. (#639, #643)
    // This is technically web-specific, but splitting the logic out of core
    // leads to too much unnecessary complexity.
    tag === 'svg' || tag === 'foreignObject' || // #938: elements with dynamic keys should be forced into blocks
    findProp(node, 'key', true)); // props

    if (props.length > 0) {
      var propsBuildResult = buildProps(node, context);
      vnodeProps = propsBuildResult.props;
      patchFlag = propsBuildResult.patchFlag;
      dynamicPropNames = propsBuildResult.dynamicPropNames;
      var directives = propsBuildResult.directives;
      vnodeDirectives = directives && directives.length ? createArrayExpression(directives.map(function (dir) {
        return buildDirectiveArgs(dir, context);
      })) : undefined;
    } // children


    if (node.children.length > 0) {
      if (vnodeTag === KEEP_ALIVE) {
        // Although a built-in component, we compile KeepAlive with raw children
        // instead of slot functions so that it can be used inside Transition
        // or other Transition-wrapping HOCs.
        // To ensure correct updates with block optimizations, we need to:
        // 1. Force keep-alive into a block. This avoids its children being
        //    collected by a parent block.
        shouldUseBlock = true; // 2. Force keep-alive to always be updated, since it uses raw children.

        patchFlag |= 1024
        /* DYNAMIC_SLOTS */
        ;

        if ( true && node.children.length > 1) {
          context.onError(createCompilerError(44
          /* X_KEEP_ALIVE_INVALID_CHILDREN */
          , {
            start: node.children[0].loc.start,
            end: node.children[node.children.length - 1].loc.end,
            source: ''
          }));
        }
      }

      var shouldBuildAsSlots = isComponent && // Teleport is not a real component and has dedicated runtime handling
      vnodeTag !== TELEPORT && // explained above.
      vnodeTag !== KEEP_ALIVE;

      if (shouldBuildAsSlots) {
        var _buildSlots = buildSlots(node, context),
            slots = _buildSlots.slots,
            hasDynamicSlots = _buildSlots.hasDynamicSlots;

        vnodeChildren = slots;

        if (hasDynamicSlots) {
          patchFlag |= 1024
          /* DYNAMIC_SLOTS */
          ;
        }
      } else if (node.children.length === 1 && vnodeTag !== TELEPORT) {
        var child = node.children[0];
        var type = child.type; // check for dynamic text children

        var hasDynamicTextChild = type === 5
        /* INTERPOLATION */
        || type === 8
        /* COMPOUND_EXPRESSION */
        ;

        if (hasDynamicTextChild && getConstantType(child, context) === 0
        /* NOT_CONSTANT */
        ) {
            patchFlag |= 1
            /* TEXT */
            ;
          } // pass directly if the only child is a text node
        // (plain / interpolation / expression)


        if (hasDynamicTextChild || type === 2
        /* TEXT */
        ) {
            vnodeChildren = child;
          } else {
          vnodeChildren = node.children;
        }
      } else {
        vnodeChildren = node.children;
      }
    } // patchFlag & dynamicPropNames


    if (patchFlag !== 0) {
      if (true) {
        if (patchFlag < 0) {
          // special flags (negative and mutually exclusive)
          vnodePatchFlag = patchFlag + " /* ".concat(_vue_shared__WEBPACK_IMPORTED_MODULE_0__.PatchFlagNames[patchFlag], " */");
        } else {
          // bitwise flags
          var flagNames = Object.keys(_vue_shared__WEBPACK_IMPORTED_MODULE_0__.PatchFlagNames).map(Number).filter(function (n) {
            return n > 0 && patchFlag & n;
          }).map(function (n) {
            return _vue_shared__WEBPACK_IMPORTED_MODULE_0__.PatchFlagNames[n];
          }).join(", ");
          vnodePatchFlag = patchFlag + " /* ".concat(flagNames, " */");
        }
      } else {}

      if (dynamicPropNames && dynamicPropNames.length) {
        vnodeDynamicProps = stringifyDynamicPropNames(dynamicPropNames);
      }
    }

    node.codegenNode = createVNodeCall(context, vnodeTag, vnodeProps, vnodeChildren, vnodePatchFlag, vnodeDynamicProps, vnodeDirectives, !!shouldUseBlock, false
    /* disableTracking */
    , node.loc);
  };
};

function resolveComponentType(node, context) {
  var ssr = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var tag = node.tag; // 1. dynamic component

  var isExplicitDynamic = isComponentTag(tag);
  var isProp = findProp(node, 'is');

  if (isProp) {
    if (isExplicitDynamic || isCompatEnabled("COMPILER_IS_ON_ELEMENT"
    /* COMPILER_IS_ON_ELEMENT */
    , context)) {
      var exp = isProp.type === 6
      /* ATTRIBUTE */
      ? isProp.value && createSimpleExpression(isProp.value.content, true) : isProp.exp;

      if (exp) {
        return createCallExpression(context.helper(RESOLVE_DYNAMIC_COMPONENT), [exp]);
      }
    } else if (isProp.type === 6
    /* ATTRIBUTE */
    && isProp.value.content.startsWith('vue:')) {
      // <button is="vue:xxx">
      // if not <component>, only is value that starts with "vue:" will be
      // treated as component by the parse phase and reach here, unless it's
      // compat mode where all is values are considered components
      tag = isProp.value.content.slice(4);
    }
  } // 1.5 v-is (TODO: Deprecate)


  var isDir = !isExplicitDynamic && findDir(node, 'is');

  if (isDir && isDir.exp) {
    return createCallExpression(context.helper(RESOLVE_DYNAMIC_COMPONENT), [isDir.exp]);
  } // 2. built-in components (Teleport, Transition, KeepAlive, Suspense...)


  var builtIn = isCoreComponent(tag) || context.isBuiltInComponent(tag);

  if (builtIn) {
    // built-ins are simply fallthroughs / have special handling during ssr
    // so we don't need to import their runtime equivalents
    if (!ssr) context.helper(builtIn);
    return builtIn;
  } // 5. user component (resolve)


  context.helper(RESOLVE_COMPONENT);
  context.components.add(tag);
  return toValidAssetId(tag, "component");
}

function buildProps(node, context) {
  var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : node.props;
  var ssr = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var tag = node.tag,
      elementLoc = node.loc;
  var isComponent = node.tagType === 1
  /* COMPONENT */
  ;
  var properties = [];
  var mergeArgs = [];
  var runtimeDirectives = []; // patchFlag analysis

  var patchFlag = 0;
  var hasRef = false;
  var hasClassBinding = false;
  var hasStyleBinding = false;
  var hasHydrationEventBinding = false;
  var hasDynamicKeys = false;
  var hasVnodeHook = false;
  var dynamicPropNames = [];

  var analyzePatchFlag = function analyzePatchFlag(_ref6) {
    var key = _ref6.key,
        value = _ref6.value;

    if (isStaticExp(key)) {
      var name = key.content;
      var isEventHandler = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isOn)(name);

      if (!isComponent && isEventHandler && // omit the flag for click handlers because hydration gives click
      // dedicated fast path.
      name.toLowerCase() !== 'onclick' && // omit v-model handlers
      name !== 'onUpdate:modelValue' && // omit onVnodeXXX hooks
      !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isReservedProp)(name)) {
        hasHydrationEventBinding = true;
      }

      if (isEventHandler && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isReservedProp)(name)) {
        hasVnodeHook = true;
      }

      if (value.type === 20
      /* JS_CACHE_EXPRESSION */
      || (value.type === 4
      /* SIMPLE_EXPRESSION */
      || value.type === 8
      /* COMPOUND_EXPRESSION */
      ) && getConstantType(value, context) > 0) {
        // skip if the prop is a cached handler or has constant value
        return;
      }

      if (name === 'ref') {
        hasRef = true;
      } else if (name === 'class' && !isComponent) {
        hasClassBinding = true;
      } else if (name === 'style' && !isComponent) {
        hasStyleBinding = true;
      } else if (name !== 'key' && !dynamicPropNames.includes(name)) {
        dynamicPropNames.push(name);
      }
    } else {
      hasDynamicKeys = true;
    }
  };

  for (var i = 0; i < props.length; i++) {
    // static attribute
    var prop = props[i];

    if (prop.type === 6
    /* ATTRIBUTE */
    ) {
        var loc = prop.loc,
            name = prop.name,
            value = prop.value;
        var isStatic = true;

        if (name === 'ref') {
          hasRef = true;
        } // skip is on <component>, or is="vue:xxx"


        if (name === 'is' && (isComponentTag(tag) || value && value.content.startsWith('vue:') || isCompatEnabled("COMPILER_IS_ON_ELEMENT"
        /* COMPILER_IS_ON_ELEMENT */
        , context))) {
          continue;
        }

        properties.push(createObjectProperty(createSimpleExpression(name, true, getInnerRange(loc, 0, name.length)), createSimpleExpression(value ? value.content : '', isStatic, value ? value.loc : loc)));
      } else {
      // directives
      var _name = prop.name,
          arg = prop.arg,
          exp = prop.exp,
          _loc2 = prop.loc;
      var isVBind = _name === 'bind';
      var isVOn = _name === 'on'; // skip v-slot - it is handled by its dedicated transform.

      if (_name === 'slot') {
        if (!isComponent) {
          context.onError(createCompilerError(39
          /* X_V_SLOT_MISPLACED */
          , _loc2));
        }

        continue;
      } // skip v-once - it is handled by its dedicated transform.


      if (_name === 'once') {
        continue;
      } // skip v-is and :is on <component>


      if (_name === 'is' || isVBind && isBindKey(arg, 'is') && (isComponentTag(tag) || isCompatEnabled("COMPILER_IS_ON_ELEMENT"
      /* COMPILER_IS_ON_ELEMENT */
      , context))) {
        continue;
      } // skip v-on in SSR compilation


      if (isVOn && ssr) {
        continue;
      } // special case for v-bind and v-on with no argument


      if (!arg && (isVBind || isVOn)) {
        hasDynamicKeys = true;

        if (exp) {
          if (properties.length) {
            mergeArgs.push(createObjectExpression(dedupeProperties(properties), elementLoc));
            properties = [];
          }

          if (isVBind) {
            {
              // 2.x v-bind object order compat
              if (true) {
                var hasOverridableKeys = mergeArgs.some(function (arg) {
                  if (arg.type === 15
                  /* JS_OBJECT_EXPRESSION */
                  ) {
                      return arg.properties.some(function (_ref7) {
                        var key = _ref7.key;

                        if (key.type !== 4
                        /* SIMPLE_EXPRESSION */
                        || !key.isStatic) {
                          return true;
                        }

                        return key.content !== 'class' && key.content !== 'style' && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isOn)(key.content);
                      });
                    } else {
                    // dynamic expression
                    return true;
                  }
                });

                if (hasOverridableKeys) {
                  checkCompatEnabled("COMPILER_V_BIND_OBJECT_ORDER"
                  /* COMPILER_V_BIND_OBJECT_ORDER */
                  , context, _loc2);
                }
              }

              if (isCompatEnabled("COMPILER_V_BIND_OBJECT_ORDER"
              /* COMPILER_V_BIND_OBJECT_ORDER */
              , context)) {
                mergeArgs.unshift(exp);
                continue;
              }
            }
            mergeArgs.push(exp);
          } else {
            // v-on="obj" -> toHandlers(obj)
            mergeArgs.push({
              type: 14
              /* JS_CALL_EXPRESSION */
              ,
              loc: _loc2,
              callee: context.helper(TO_HANDLERS),
              arguments: [exp]
            });
          }
        } else {
          context.onError(createCompilerError(isVBind ? 33
          /* X_V_BIND_NO_EXPRESSION */
          : 34
          /* X_V_ON_NO_EXPRESSION */
          , _loc2));
        }

        continue;
      }

      var directiveTransform = context.directiveTransforms[_name];

      if (directiveTransform) {
        var _properties;

        // has built-in directive transform.
        var _directiveTransform = directiveTransform(prop, node, context),
            _props = _directiveTransform.props,
            needRuntime = _directiveTransform.needRuntime;

        !ssr && _props.forEach(analyzePatchFlag);

        (_properties = properties).push.apply(_properties, _toConsumableArray(_props));

        if (needRuntime) {
          runtimeDirectives.push(prop);

          if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isSymbol)(needRuntime)) {
            directiveImportMap.set(prop, needRuntime);
          }
        }
      } else {
        // no built-in transform, this is a user custom directive.
        runtimeDirectives.push(prop);
      }
    }

    if (prop.type === 6
    /* ATTRIBUTE */
    && prop.name === 'ref' && context.scopes.vFor > 0 && checkCompatEnabled("COMPILER_V_FOR_REF"
    /* COMPILER_V_FOR_REF */
    , context, prop.loc)) {
      properties.push(createObjectProperty(createSimpleExpression('refInFor', true), createSimpleExpression('true', false)));
    }
  }

  var propsExpression = undefined; // has v-bind="object" or v-on="object", wrap with mergeProps

  if (mergeArgs.length) {
    if (properties.length) {
      mergeArgs.push(createObjectExpression(dedupeProperties(properties), elementLoc));
    }

    if (mergeArgs.length > 1) {
      propsExpression = createCallExpression(context.helper(MERGE_PROPS), mergeArgs, elementLoc);
    } else {
      // single v-bind with nothing else - no need for a mergeProps call
      propsExpression = mergeArgs[0];
    }
  } else if (properties.length) {
    propsExpression = createObjectExpression(dedupeProperties(properties), elementLoc);
  } // patchFlag analysis


  if (hasDynamicKeys) {
    patchFlag |= 16
    /* FULL_PROPS */
    ;
  } else {
    if (hasClassBinding) {
      patchFlag |= 2
      /* CLASS */
      ;
    }

    if (hasStyleBinding) {
      patchFlag |= 4
      /* STYLE */
      ;
    }

    if (dynamicPropNames.length) {
      patchFlag |= 8
      /* PROPS */
      ;
    }

    if (hasHydrationEventBinding) {
      patchFlag |= 32
      /* HYDRATE_EVENTS */
      ;
    }
  }

  if ((patchFlag === 0 || patchFlag === 32
  /* HYDRATE_EVENTS */
  ) && (hasRef || hasVnodeHook || runtimeDirectives.length > 0)) {
    patchFlag |= 512
    /* NEED_PATCH */
    ;
  }

  return {
    props: propsExpression,
    directives: runtimeDirectives,
    patchFlag: patchFlag,
    dynamicPropNames: dynamicPropNames
  };
} // Dedupe props in an object literal.
// Literal duplicated attributes would have been warned during the parse phase,
// however, it's possible to encounter duplicated `onXXX` handlers with different
// modifiers. We also need to merge static and dynamic class / style attributes.
// - onXXX handlers / style: merge into array
// - class: merge into single expression with concatenation


function dedupeProperties(properties) {
  var knownProps = new Map();
  var deduped = [];

  for (var i = 0; i < properties.length; i++) {
    var prop = properties[i]; // dynamic keys are always allowed

    if (prop.key.type === 8
    /* COMPOUND_EXPRESSION */
    || !prop.key.isStatic) {
      deduped.push(prop);
      continue;
    }

    var name = prop.key.content;
    var existing = knownProps.get(name);

    if (existing) {
      if (name === 'style' || name === 'class' || name.startsWith('on')) {
        mergeAsArray(existing, prop);
      } // unexpected duplicate, should have emitted error during parse

    } else {
      knownProps.set(name, prop);
      deduped.push(prop);
    }
  }

  return deduped;
}

function mergeAsArray(existing, incoming) {
  if (existing.value.type === 17
  /* JS_ARRAY_EXPRESSION */
  ) {
      existing.value.elements.push(incoming.value);
    } else {
    existing.value = createArrayExpression([existing.value, incoming.value], existing.loc);
  }
}

function buildDirectiveArgs(dir, context) {
  var dirArgs = [];
  var runtime = directiveImportMap.get(dir);

  if (runtime) {
    // built-in directive with runtime
    dirArgs.push(context.helperString(runtime));
  } else {
    {
      // inject statement for resolving directive
      context.helper(RESOLVE_DIRECTIVE);
      context.directives.add(dir.name);
      dirArgs.push(toValidAssetId(dir.name, "directive"));
    }
  }

  var loc = dir.loc;
  if (dir.exp) dirArgs.push(dir.exp);

  if (dir.arg) {
    if (!dir.exp) {
      dirArgs.push("void 0");
    }

    dirArgs.push(dir.arg);
  }

  if (Object.keys(dir.modifiers).length) {
    if (!dir.arg) {
      if (!dir.exp) {
        dirArgs.push("void 0");
      }

      dirArgs.push("void 0");
    }

    var trueExpression = createSimpleExpression("true", false, loc);
    dirArgs.push(createObjectExpression(dir.modifiers.map(function (modifier) {
      return createObjectProperty(modifier, trueExpression);
    }), loc));
  }

  return createArrayExpression(dirArgs, dir.loc);
}

function stringifyDynamicPropNames(props) {
  var propsNamesString = "[";

  for (var i = 0, l = props.length; i < l; i++) {
    propsNamesString += JSON.stringify(props[i]);
    if (i < l - 1) propsNamesString += ', ';
  }

  return propsNamesString + "]";
}

function isComponentTag(tag) {
  return tag[0].toLowerCase() + tag.slice(1) === 'component';
}

 true ? Object.freeze({}) : 0;
 true ? Object.freeze([]) : 0;

var cacheStringFunction = function cacheStringFunction(fn) {
  var cache = Object.create(null);
  return function (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
};

var camelizeRE = /-(\w)/g;
/**
 * @private
 */

var camelize = cacheStringFunction(function (str) {
  return str.replace(camelizeRE, function (_, c) {
    return c ? c.toUpperCase() : '';
  });
});

var transformSlotOutlet = function transformSlotOutlet(node, context) {
  if (isSlotOutlet(node)) {
    var children = node.children,
        loc = node.loc;

    var _processSlotOutlet = processSlotOutlet(node, context),
        slotName = _processSlotOutlet.slotName,
        slotProps = _processSlotOutlet.slotProps;

    var slotArgs = [context.prefixIdentifiers ? "_ctx.$slots" : "$slots", slotName];

    if (slotProps) {
      slotArgs.push(slotProps);
    }

    if (children.length) {
      if (!slotProps) {
        slotArgs.push("{}");
      }

      slotArgs.push(createFunctionExpression([], children, false, false, loc));
    }

    if (context.scopeId && !context.slotted) {
      if (!slotProps) {
        slotArgs.push("{}");
      }

      if (!children.length) {
        slotArgs.push("undefined");
      }

      slotArgs.push("true");
    }

    node.codegenNode = createCallExpression(context.helper(RENDER_SLOT), slotArgs, loc);
  }
};

function processSlotOutlet(node, context) {
  var slotName = "\"default\"";
  var slotProps = undefined;
  var nonNameProps = [];

  for (var i = 0; i < node.props.length; i++) {
    var p = node.props[i];

    if (p.type === 6
    /* ATTRIBUTE */
    ) {
        if (p.value) {
          if (p.name === 'name') {
            slotName = JSON.stringify(p.value.content);
          } else {
            p.name = camelize(p.name);
            nonNameProps.push(p);
          }
        }
      } else {
      if (p.name === 'bind' && isBindKey(p.arg, 'name')) {
        if (p.exp) slotName = p.exp;
      } else {
        if (p.name === 'bind' && p.arg && isStaticExp(p.arg)) {
          p.arg.content = camelize(p.arg.content);
        }

        nonNameProps.push(p);
      }
    }
  }

  if (nonNameProps.length > 0) {
    var _buildProps = buildProps(node, context, nonNameProps),
        props = _buildProps.props,
        directives = _buildProps.directives;

    slotProps = props;

    if (directives.length) {
      context.onError(createCompilerError(35
      /* X_V_SLOT_UNEXPECTED_DIRECTIVE_ON_SLOT_OUTLET */
      , directives[0].loc));
    }
  }

  return {
    slotName: slotName,
    slotProps: slotProps
  };
}

var fnExpRE = /^\s*([\w$_]+|\([^)]*?\))\s*=>|^\s*function(?:\s+[\w$]+)?\s*\(/;

var transformOn = function transformOn(dir, node, context, augmentor) {
  var loc = dir.loc,
      modifiers = dir.modifiers,
      arg = dir.arg;

  if (!dir.exp && !modifiers.length) {
    context.onError(createCompilerError(34
    /* X_V_ON_NO_EXPRESSION */
    , loc));
  }

  var eventName;

  if (arg.type === 4
  /* SIMPLE_EXPRESSION */
  ) {
      if (arg.isStatic) {
        var rawName = arg.content; // for all event listeners, auto convert it to camelCase. See issue #2249

        eventName = createSimpleExpression((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.toHandlerKey)((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.camelize)(rawName)), true, arg.loc);
      } else {
        // #2388
        eventName = createCompoundExpression(["".concat(context.helperString(TO_HANDLER_KEY), "("), arg, ")"]);
      }
    } else {
    // already a compound expression.
    eventName = arg;
    eventName.children.unshift("".concat(context.helperString(TO_HANDLER_KEY), "("));
    eventName.children.push(")");
  } // handler processing


  var exp = dir.exp;

  if (exp && !exp.content.trim()) {
    exp = undefined;
  }

  var shouldCache = context.cacheHandlers && !exp;

  if (exp) {
    var isMemberExp = isMemberExpression(exp.content);
    var isInlineStatement = !(isMemberExp || fnExpRE.test(exp.content));
    var hasMultipleStatements = exp.content.includes(";");

    if (true) {
      validateBrowserExpression(exp, context, false, hasMultipleStatements);
    }

    if (isInlineStatement || shouldCache && isMemberExp) {
      // wrap inline statement in a function expression
      exp = createCompoundExpression(["".concat(isInlineStatement ? "$event" : "".concat("", "(...args)"), " => ").concat(hasMultipleStatements ? "{" : "("), exp, hasMultipleStatements ? "}" : ")"]);
    }
  }

  var ret = {
    props: [createObjectProperty(eventName, exp || createSimpleExpression("() => {}", false, loc))]
  }; // apply extended compiler augmentor

  if (augmentor) {
    ret = augmentor(ret);
  }

  if (shouldCache) {
    // cache handlers so that it's always the same handler being passed down.
    // this avoids unnecessary re-renders when users use inline handlers on
    // components.
    ret.props[0].value = context.cache(ret.props[0].value);
  }

  return ret;
}; // v-bind without arg is handled directly in ./transformElements.ts due to it affecting
// codegen for the entire props object. This transform here is only for v-bind
// *with* args.


var transformBind = function transformBind(dir, _node, context) {
  var exp = dir.exp,
      modifiers = dir.modifiers,
      loc = dir.loc;
  var arg = dir.arg;

  if (arg.type !== 4
  /* SIMPLE_EXPRESSION */
  ) {
      arg.children.unshift("(");
      arg.children.push(") || \"\"");
    } else if (!arg.isStatic) {
    arg.content = "".concat(arg.content, " || \"\"");
  } // .prop is no longer necessary due to new patch behavior
  // .sync is replaced by v-model:arg


  if (modifiers.includes('camel')) {
    if (arg.type === 4
    /* SIMPLE_EXPRESSION */
    ) {
        if (arg.isStatic) {
          arg.content = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.camelize)(arg.content);
        } else {
          arg.content = "".concat(context.helperString(CAMELIZE), "(").concat(arg.content, ")");
        }
      } else {
      arg.children.unshift("".concat(context.helperString(CAMELIZE), "("));
      arg.children.push(")");
    }
  }

  if (!exp || exp.type === 4
  /* SIMPLE_EXPRESSION */
  && !exp.content.trim()) {
    context.onError(createCompilerError(33
    /* X_V_BIND_NO_EXPRESSION */
    , loc));
    return {
      props: [createObjectProperty(arg, createSimpleExpression('', true, loc))]
    };
  }

  return {
    props: [createObjectProperty(arg, exp)]
  };
}; // Merge adjacent text nodes and expressions into a single expression
// e.g. <div>abc {{ d }} {{ e }}</div> should have a single expression node as child.


var transformText = function transformText(node, context) {
  if (node.type === 0
  /* ROOT */
  || node.type === 1
  /* ELEMENT */
  || node.type === 11
  /* FOR */
  || node.type === 10
  /* IF_BRANCH */
  ) {
      // perform the transform on node exit so that all expressions have already
      // been processed.
      return function () {
        var children = node.children;
        var currentContainer = undefined;
        var hasText = false;

        for (var i = 0; i < children.length; i++) {
          var child = children[i];

          if (isText(child)) {
            hasText = true;

            for (var j = i + 1; j < children.length; j++) {
              var next = children[j];

              if (isText(next)) {
                if (!currentContainer) {
                  currentContainer = children[i] = {
                    type: 8
                    /* COMPOUND_EXPRESSION */
                    ,
                    loc: child.loc,
                    children: [child]
                  };
                } // merge adjacent text node into current


                currentContainer.children.push(" + ", next);
                children.splice(j, 1);
                j--;
              } else {
                currentContainer = undefined;
                break;
              }
            }
          }
        }

        if (!hasText || // if this is a plain element with a single text child, leave it
        // as-is since the runtime has dedicated fast path for this by directly
        // setting textContent of the element.
        // for component root it's always normalized anyway.
        children.length === 1 && (node.type === 0
        /* ROOT */
        || node.type === 1
        /* ELEMENT */
        && node.tagType === 0
        /* ELEMENT */
        && // #3756
        // custom directives can potentially add DOM elements arbitrarily,
        // we need to avoid setting textContent of the element at runtime
        // to avoid accidentally overwriting the DOM elements added
        // by the user through custom directives.
        !node.props.find(function (p) {
          return p.type === 7
          /* DIRECTIVE */
          && !context.directiveTransforms[p.name];
        }) && // in compat mode, <template> tags with no special directives
        // will be rendered as a fragment so its children must be
        // converted into vnodes.
        !(node.tag === 'template'))) {
          return;
        } // pre-convert text nodes into createTextVNode(text) calls to avoid
        // runtime normalization.


        for (var _i7 = 0; _i7 < children.length; _i7++) {
          var _child = children[_i7];

          if (isText(_child) || _child.type === 8
          /* COMPOUND_EXPRESSION */
          ) {
              var callArgs = []; // createTextVNode defaults to single whitespace, so if it is a
              // single space the code could be an empty call to save bytes.

              if (_child.type !== 2
              /* TEXT */
              || _child.content !== ' ') {
                callArgs.push(_child);
              } // mark dynamic text with flag so it gets patched inside a block


              if (!context.ssr && getConstantType(_child, context) === 0
              /* NOT_CONSTANT */
              ) {
                  callArgs.push(1
                  /* TEXT */
                  + ( true ? " /* ".concat(_vue_shared__WEBPACK_IMPORTED_MODULE_0__.PatchFlagNames[1], " */") : 0));
                }

              children[_i7] = {
                type: 12
                /* TEXT_CALL */
                ,
                content: _child,
                loc: _child.loc,
                codegenNode: createCallExpression(context.helper(CREATE_TEXT), callArgs)
              };
            }
        }
      };
    }
};

var seen = new WeakSet();

var transformOnce = function transformOnce(node, context) {
  if (node.type === 1
  /* ELEMENT */
  && findDir(node, 'once', true)) {
    if (seen.has(node)) {
      return;
    }

    seen.add(node);
    context.helper(SET_BLOCK_TRACKING);
    return function () {
      var cur = context.currentNode;

      if (cur.codegenNode) {
        cur.codegenNode = context.cache(cur.codegenNode, true
        /* isVNode */
        );
      }
    };
  }
};

var transformModel = function transformModel(dir, node, context) {
  var exp = dir.exp,
      arg = dir.arg;

  if (!exp) {
    context.onError(createCompilerError(40
    /* X_V_MODEL_NO_EXPRESSION */
    , dir.loc));
    return createTransformProps();
  }

  var rawExp = exp.loc.source;
  var expString = exp.type === 4
  /* SIMPLE_EXPRESSION */
  ? exp.content : rawExp; // im SFC <script setup> inline mode, the exp may have been transformed into
  // _unref(exp)

  context.bindingMetadata[rawExp];
  var maybeRef = !true
  /* SETUP_CONST */
  ;

  if (!expString.trim() || !isMemberExpression(expString) && !maybeRef) {
    context.onError(createCompilerError(41
    /* X_V_MODEL_MALFORMED_EXPRESSION */
    , exp.loc));
    return createTransformProps();
  }

  var propName = arg ? arg : createSimpleExpression('modelValue', true);
  var eventName = arg ? isStaticExp(arg) ? "onUpdate:".concat(arg.content) : createCompoundExpression(['"onUpdate:" + ', arg]) : "onUpdate:modelValue";
  var assignmentExp;
  var eventArg = context.isTS ? "($event: any)" : "$event";
  {
    assignmentExp = createCompoundExpression(["".concat(eventArg, " => ("), exp, " = $event)"]);
  }
  var props = [// modelValue: foo
  createObjectProperty(propName, dir.exp), // "onUpdate:modelValue": $event => (foo = $event)
  createObjectProperty(eventName, assignmentExp)]; // modelModifiers: { foo: true, "bar-baz": true }

  if (dir.modifiers.length && node.tagType === 1
  /* COMPONENT */
  ) {
      var modifiers = dir.modifiers.map(function (m) {
        return (isSimpleIdentifier(m) ? m : JSON.stringify(m)) + ": true";
      }).join(", ");
      var modifiersKey = arg ? isStaticExp(arg) ? "".concat(arg.content, "Modifiers") : createCompoundExpression([arg, ' + "Modifiers"']) : "modelModifiers";
      props.push(createObjectProperty(modifiersKey, createSimpleExpression("{ ".concat(modifiers, " }"), false, dir.loc, 2
      /* CAN_HOIST */
      )));
    }

  return createTransformProps(props);
};

function createTransformProps() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return {
    props: props
  };
}

var validDivisionCharRE = /[\w).+\-_$\]]/;

var transformFilter = function transformFilter(node, context) {
  if (!isCompatEnabled("COMPILER_FILTER"
  /* COMPILER_FILTERS */
  , context)) {
    return;
  }

  if (node.type === 5
  /* INTERPOLATION */
  ) {
      // filter rewrite is applied before expression transform so only
      // simple expressions are possible at this stage
      rewriteFilter(node.content, context);
    }

  if (node.type === 1
  /* ELEMENT */
  ) {
      node.props.forEach(function (prop) {
        if (prop.type === 7
        /* DIRECTIVE */
        && prop.name !== 'for' && prop.exp) {
          rewriteFilter(prop.exp, context);
        }
      });
    }
};

function rewriteFilter(node, context) {
  if (node.type === 4
  /* SIMPLE_EXPRESSION */
  ) {
      parseFilter(node, context);
    } else {
    for (var i = 0; i < node.children.length; i++) {
      var child = node.children[i];
      if (_typeof(child) !== 'object') continue;

      if (child.type === 4
      /* SIMPLE_EXPRESSION */
      ) {
          parseFilter(child, context);
        } else if (child.type === 8
      /* COMPOUND_EXPRESSION */
      ) {
          rewriteFilter(node, context);
        } else if (child.type === 5
      /* INTERPOLATION */
      ) {
          rewriteFilter(child.content, context);
        }
    }
  }
}

function parseFilter(node, context) {
  var exp = node.content;
  var inSingle = false;
  var inDouble = false;
  var inTemplateString = false;
  var inRegex = false;
  var curly = 0;
  var square = 0;
  var paren = 0;
  var lastFilterIndex = 0;
  var c,
      prev,
      i,
      expression,
      filters = [];

  for (i = 0; i < exp.length; i++) {
    prev = c;
    c = exp.charCodeAt(i);

    if (inSingle) {
      if (c === 0x27 && prev !== 0x5c) inSingle = false;
    } else if (inDouble) {
      if (c === 0x22 && prev !== 0x5c) inDouble = false;
    } else if (inTemplateString) {
      if (c === 0x60 && prev !== 0x5c) inTemplateString = false;
    } else if (inRegex) {
      if (c === 0x2f && prev !== 0x5c) inRegex = false;
    } else if (c === 0x7c && // pipe
    exp.charCodeAt(i + 1) !== 0x7c && exp.charCodeAt(i - 1) !== 0x7c && !curly && !square && !paren) {
      if (expression === undefined) {
        // first filter, end of expression
        lastFilterIndex = i + 1;
        expression = exp.slice(0, i).trim();
      } else {
        pushFilter();
      }
    } else {
      switch (c) {
        case 0x22:
          inDouble = true;
          break;
        // "

        case 0x27:
          inSingle = true;
          break;
        // '

        case 0x60:
          inTemplateString = true;
          break;
        // `

        case 0x28:
          paren++;
          break;
        // (

        case 0x29:
          paren--;
          break;
        // )

        case 0x5b:
          square++;
          break;
        // [

        case 0x5d:
          square--;
          break;
        // ]

        case 0x7b:
          curly++;
          break;
        // {

        case 0x7d:
          curly--;
          break;
        // }
      }

      if (c === 0x2f) {
        // /
        var j = i - 1;
        var p = void 0; // find first non-whitespace prev char

        for (; j >= 0; j--) {
          p = exp.charAt(j);
          if (p !== ' ') break;
        }

        if (!p || !validDivisionCharRE.test(p)) {
          inRegex = true;
        }
      }
    }
  }

  if (expression === undefined) {
    expression = exp.slice(0, i).trim();
  } else if (lastFilterIndex !== 0) {
    pushFilter();
  }

  function pushFilter() {
    filters.push(exp.slice(lastFilterIndex, i).trim());
    lastFilterIndex = i + 1;
  }

  if (filters.length) {
     true && warnDeprecation("COMPILER_FILTER"
    /* COMPILER_FILTERS */
    , context, node.loc);

    for (i = 0; i < filters.length; i++) {
      expression = wrapFilter(expression, filters[i], context);
    }

    node.content = expression;
  }
}

function wrapFilter(exp, filter, context) {
  context.helper(RESOLVE_FILTER);
  var i = filter.indexOf('(');

  if (i < 0) {
    context.filters.add(filter);
    return "".concat(toValidAssetId(filter, 'filter'), "(").concat(exp, ")");
  } else {
    var name = filter.slice(0, i);
    var args = filter.slice(i + 1);
    context.filters.add(name);
    return "".concat(toValidAssetId(name, 'filter'), "(").concat(exp).concat(args !== ')' ? ',' + args : args);
  }
}

function getBaseTransformPreset(prefixIdentifiers) {
  return [[transformOnce, transformIf, transformFor].concat([transformFilter], _toConsumableArray( true ? [transformExpression] : 0), [transformSlotOutlet, transformElement, trackSlotScopes, transformText]), {
    on: transformOn,
    bind: transformBind,
    model: transformModel
  }];
} // we name it `baseCompile` so that higher order compilers like
// @vue/compiler-dom can export `compile` while re-exporting everything else.


function baseCompile(template) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var onError = options.onError || defaultOnError;
  var isModuleMode = options.mode === 'module';
  /* istanbul ignore if */

  {
    if (options.prefixIdentifiers === true) {
      onError(createCompilerError(45
      /* X_PREFIX_ID_NOT_SUPPORTED */
      ));
    } else if (isModuleMode) {
      onError(createCompilerError(46
      /* X_MODULE_MODE_NOT_SUPPORTED */
      ));
    }
  }
  var prefixIdentifiers = !true;

  if (options.cacheHandlers) {
    onError(createCompilerError(47
    /* X_CACHE_HANDLER_NOT_SUPPORTED */
    ));
  }

  if (options.scopeId && !isModuleMode) {
    onError(createCompilerError(48
    /* X_SCOPE_ID_NOT_SUPPORTED */
    ));
  }

  var ast = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(template) ? baseParse(template, options) : template;

  var _getBaseTransformPres = getBaseTransformPreset(),
      _getBaseTransformPres2 = _slicedToArray(_getBaseTransformPres, 2),
      nodeTransforms = _getBaseTransformPres2[0],
      directiveTransforms = _getBaseTransformPres2[1];

  transform(ast, (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.extend)({}, options, {
    prefixIdentifiers: prefixIdentifiers,
    nodeTransforms: [].concat(_toConsumableArray(nodeTransforms), _toConsumableArray(options.nodeTransforms || [])),
    directiveTransforms: (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.extend)({}, directiveTransforms, options.directiveTransforms || {} // user transforms
    )
  }));
  return generate(ast, (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.extend)({}, options, {
    prefixIdentifiers: prefixIdentifiers
  }));
}

var noopDirectiveTransform = function noopDirectiveTransform() {
  return {
    props: []
  };
};



/***/ }),

/***/ "./node_modules/@vue/compiler-dom/dist/compiler-dom.esm-bundler.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@vue/compiler-dom/dist/compiler-dom.esm-bundler.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BASE_TRANSITION": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.BASE_TRANSITION),
/* harmony export */   "CAMELIZE": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.CAMELIZE),
/* harmony export */   "CAPITALIZE": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.CAPITALIZE),
/* harmony export */   "CREATE_BLOCK": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.CREATE_BLOCK),
/* harmony export */   "CREATE_COMMENT": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.CREATE_COMMENT),
/* harmony export */   "CREATE_SLOTS": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.CREATE_SLOTS),
/* harmony export */   "CREATE_STATIC": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.CREATE_STATIC),
/* harmony export */   "CREATE_TEXT": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.CREATE_TEXT),
/* harmony export */   "CREATE_VNODE": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.CREATE_VNODE),
/* harmony export */   "FRAGMENT": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.FRAGMENT),
/* harmony export */   "IS_REF": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.IS_REF),
/* harmony export */   "KEEP_ALIVE": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.KEEP_ALIVE),
/* harmony export */   "MERGE_PROPS": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.MERGE_PROPS),
/* harmony export */   "OPEN_BLOCK": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.OPEN_BLOCK),
/* harmony export */   "POP_SCOPE_ID": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.POP_SCOPE_ID),
/* harmony export */   "PUSH_SCOPE_ID": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.PUSH_SCOPE_ID),
/* harmony export */   "RENDER_LIST": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.RENDER_LIST),
/* harmony export */   "RENDER_SLOT": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.RENDER_SLOT),
/* harmony export */   "RESOLVE_COMPONENT": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.RESOLVE_COMPONENT),
/* harmony export */   "RESOLVE_DIRECTIVE": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.RESOLVE_DIRECTIVE),
/* harmony export */   "RESOLVE_DYNAMIC_COMPONENT": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.RESOLVE_DYNAMIC_COMPONENT),
/* harmony export */   "RESOLVE_FILTER": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.RESOLVE_FILTER),
/* harmony export */   "SET_BLOCK_TRACKING": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.SET_BLOCK_TRACKING),
/* harmony export */   "SUSPENSE": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.SUSPENSE),
/* harmony export */   "TELEPORT": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.TELEPORT),
/* harmony export */   "TO_DISPLAY_STRING": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.TO_DISPLAY_STRING),
/* harmony export */   "TO_HANDLERS": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.TO_HANDLERS),
/* harmony export */   "TO_HANDLER_KEY": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.TO_HANDLER_KEY),
/* harmony export */   "UNREF": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.UNREF),
/* harmony export */   "WITH_CTX": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.WITH_CTX),
/* harmony export */   "WITH_DIRECTIVES": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.WITH_DIRECTIVES),
/* harmony export */   "WITH_SCOPE_ID": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.WITH_SCOPE_ID),
/* harmony export */   "advancePositionWithClone": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.advancePositionWithClone),
/* harmony export */   "advancePositionWithMutation": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.advancePositionWithMutation),
/* harmony export */   "assert": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.assert),
/* harmony export */   "baseCompile": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.baseCompile),
/* harmony export */   "baseParse": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.baseParse),
/* harmony export */   "buildProps": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.buildProps),
/* harmony export */   "buildSlots": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.buildSlots),
/* harmony export */   "checkCompatEnabled": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.checkCompatEnabled),
/* harmony export */   "createArrayExpression": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createArrayExpression),
/* harmony export */   "createAssignmentExpression": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createAssignmentExpression),
/* harmony export */   "createBlockStatement": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createBlockStatement),
/* harmony export */   "createCacheExpression": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createCacheExpression),
/* harmony export */   "createCallExpression": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createCallExpression),
/* harmony export */   "createCompilerError": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createCompilerError),
/* harmony export */   "createCompoundExpression": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createCompoundExpression),
/* harmony export */   "createConditionalExpression": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createConditionalExpression),
/* harmony export */   "createForLoopParams": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createForLoopParams),
/* harmony export */   "createFunctionExpression": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createFunctionExpression),
/* harmony export */   "createIfStatement": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createIfStatement),
/* harmony export */   "createInterpolation": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createInterpolation),
/* harmony export */   "createObjectExpression": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createObjectExpression),
/* harmony export */   "createObjectProperty": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createObjectProperty),
/* harmony export */   "createReturnStatement": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createReturnStatement),
/* harmony export */   "createRoot": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createRoot),
/* harmony export */   "createSequenceExpression": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createSequenceExpression),
/* harmony export */   "createSimpleExpression": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createSimpleExpression),
/* harmony export */   "createStructuralDirectiveTransform": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createStructuralDirectiveTransform),
/* harmony export */   "createTemplateLiteral": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createTemplateLiteral),
/* harmony export */   "createTransformContext": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createTransformContext),
/* harmony export */   "createVNodeCall": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createVNodeCall),
/* harmony export */   "findDir": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.findDir),
/* harmony export */   "findProp": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.findProp),
/* harmony export */   "generate": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.generate),
/* harmony export */   "generateCodeFrame": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.generateCodeFrame),
/* harmony export */   "getBaseTransformPreset": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.getBaseTransformPreset),
/* harmony export */   "getInnerRange": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.getInnerRange),
/* harmony export */   "hasDynamicKeyVBind": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.hasDynamicKeyVBind),
/* harmony export */   "hasScopeRef": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.hasScopeRef),
/* harmony export */   "helperNameMap": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.helperNameMap),
/* harmony export */   "injectProp": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.injectProp),
/* harmony export */   "isBindKey": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isBindKey),
/* harmony export */   "isBuiltInType": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isBuiltInType),
/* harmony export */   "isCoreComponent": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isCoreComponent),
/* harmony export */   "isMemberExpression": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isMemberExpression),
/* harmony export */   "isSimpleIdentifier": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isSimpleIdentifier),
/* harmony export */   "isSlotOutlet": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isSlotOutlet),
/* harmony export */   "isStaticExp": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isStaticExp),
/* harmony export */   "isTemplateNode": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isTemplateNode),
/* harmony export */   "isText": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isText),
/* harmony export */   "isVSlot": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isVSlot),
/* harmony export */   "locStub": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.locStub),
/* harmony export */   "noopDirectiveTransform": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.noopDirectiveTransform),
/* harmony export */   "processExpression": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.processExpression),
/* harmony export */   "processFor": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.processFor),
/* harmony export */   "processIf": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.processIf),
/* harmony export */   "processSlotOutlet": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.processSlotOutlet),
/* harmony export */   "registerRuntimeHelpers": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.registerRuntimeHelpers),
/* harmony export */   "resolveComponentType": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.resolveComponentType),
/* harmony export */   "toValidAssetId": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.toValidAssetId),
/* harmony export */   "trackSlotScopes": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.trackSlotScopes),
/* harmony export */   "trackVForSlotScopes": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.trackVForSlotScopes),
/* harmony export */   "transform": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.transform),
/* harmony export */   "transformBind": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.transformBind),
/* harmony export */   "transformElement": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.transformElement),
/* harmony export */   "transformExpression": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.transformExpression),
/* harmony export */   "transformModel": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.transformModel),
/* harmony export */   "transformOn": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.transformOn),
/* harmony export */   "traverseNode": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.traverseNode),
/* harmony export */   "warnDeprecation": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.warnDeprecation),
/* harmony export */   "DOMDirectiveTransforms": () => (/* binding */ DOMDirectiveTransforms),
/* harmony export */   "DOMNodeTransforms": () => (/* binding */ DOMNodeTransforms),
/* harmony export */   "TRANSITION": () => (/* binding */ TRANSITION),
/* harmony export */   "TRANSITION_GROUP": () => (/* binding */ TRANSITION_GROUP),
/* harmony export */   "V_MODEL_CHECKBOX": () => (/* binding */ V_MODEL_CHECKBOX),
/* harmony export */   "V_MODEL_DYNAMIC": () => (/* binding */ V_MODEL_DYNAMIC),
/* harmony export */   "V_MODEL_RADIO": () => (/* binding */ V_MODEL_RADIO),
/* harmony export */   "V_MODEL_SELECT": () => (/* binding */ V_MODEL_SELECT),
/* harmony export */   "V_MODEL_TEXT": () => (/* binding */ V_MODEL_TEXT),
/* harmony export */   "V_ON_WITH_KEYS": () => (/* binding */ V_ON_WITH_KEYS),
/* harmony export */   "V_ON_WITH_MODIFIERS": () => (/* binding */ V_ON_WITH_MODIFIERS),
/* harmony export */   "V_SHOW": () => (/* binding */ V_SHOW),
/* harmony export */   "compile": () => (/* binding */ compile),
/* harmony export */   "createDOMCompilerError": () => (/* binding */ createDOMCompilerError),
/* harmony export */   "parse": () => (/* binding */ parse),
/* harmony export */   "parserOptions": () => (/* binding */ parserOptions),
/* harmony export */   "transformStyle": () => (/* binding */ transformStyle)
/* harmony export */ });
/* harmony import */ var _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/compiler-core */ "./node_modules/@vue/compiler-core/dist/compiler-core.esm-bundler.js");
/* harmony import */ var _vue_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/shared */ "./node_modules/@vue/shared/dist/shared.esm-bundler.js");
var _registerRuntimeHelpe, _DOMErrorMessages;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var V_MODEL_RADIO = Symbol( true ? "vModelRadio" : 0);
var V_MODEL_CHECKBOX = Symbol( true ? "vModelCheckbox" : 0);
var V_MODEL_TEXT = Symbol( true ? "vModelText" : 0);
var V_MODEL_SELECT = Symbol( true ? "vModelSelect" : 0);
var V_MODEL_DYNAMIC = Symbol( true ? "vModelDynamic" : 0);
var V_ON_WITH_MODIFIERS = Symbol( true ? "vOnModifiersGuard" : 0);
var V_ON_WITH_KEYS = Symbol( true ? "vOnKeysGuard" : 0);
var V_SHOW = Symbol( true ? "vShow" : 0);
var TRANSITION = Symbol( true ? "Transition" : 0);
var TRANSITION_GROUP = Symbol( true ? "TransitionGroup" : 0);
(0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.registerRuntimeHelpers)((_registerRuntimeHelpe = {}, _defineProperty(_registerRuntimeHelpe, V_MODEL_RADIO, "vModelRadio"), _defineProperty(_registerRuntimeHelpe, V_MODEL_CHECKBOX, "vModelCheckbox"), _defineProperty(_registerRuntimeHelpe, V_MODEL_TEXT, "vModelText"), _defineProperty(_registerRuntimeHelpe, V_MODEL_SELECT, "vModelSelect"), _defineProperty(_registerRuntimeHelpe, V_MODEL_DYNAMIC, "vModelDynamic"), _defineProperty(_registerRuntimeHelpe, V_ON_WITH_MODIFIERS, "withModifiers"), _defineProperty(_registerRuntimeHelpe, V_ON_WITH_KEYS, "withKeys"), _defineProperty(_registerRuntimeHelpe, V_SHOW, "vShow"), _defineProperty(_registerRuntimeHelpe, TRANSITION, "Transition"), _defineProperty(_registerRuntimeHelpe, TRANSITION_GROUP, "TransitionGroup"), _registerRuntimeHelpe));
/* eslint-disable no-restricted-globals */

var decoder;

function decodeHtmlBrowser(raw) {
  var asAttr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (!decoder) {
    decoder = document.createElement('div');
  }

  if (asAttr) {
    decoder.innerHTML = "<div foo=\"".concat(raw.replace(/"/g, '&quot;'), "\">");
    return decoder.children[0].getAttribute('foo');
  } else {
    decoder.innerHTML = raw;
    return decoder.textContent;
  }
}

var isRawTextContainer = /*#__PURE__*/(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.makeMap)('style,iframe,script,noscript', true);
var parserOptions = {
  isVoidTag: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.isVoidTag,
  isNativeTag: function isNativeTag(tag) {
    return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isHTMLTag)(tag) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isSVGTag)(tag);
  },
  isPreTag: function isPreTag(tag) {
    return tag === 'pre';
  },
  decodeEntities: decodeHtmlBrowser,
  isBuiltInComponent: function isBuiltInComponent(tag) {
    if ((0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isBuiltInType)(tag, "Transition")) {
      return TRANSITION;
    } else if ((0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isBuiltInType)(tag, "TransitionGroup")) {
      return TRANSITION_GROUP;
    }
  },
  // https://html.spec.whatwg.org/multipage/parsing.html#tree-construction-dispatcher
  getNamespace: function getNamespace(tag, parent) {
    var ns = parent ? parent.ns : 0
    /* HTML */
    ;

    if (parent && ns === 2
    /* MATH_ML */
    ) {
        if (parent.tag === 'annotation-xml') {
          if (tag === 'svg') {
            return 1
            /* SVG */
            ;
          }

          if (parent.props.some(function (a) {
            return a.type === 6
            /* ATTRIBUTE */
            && a.name === 'encoding' && a.value != null && (a.value.content === 'text/html' || a.value.content === 'application/xhtml+xml');
          })) {
            ns = 0
            /* HTML */
            ;
          }
        } else if (/^m(?:[ions]|text)$/.test(parent.tag) && tag !== 'mglyph' && tag !== 'malignmark') {
          ns = 0
          /* HTML */
          ;
        }
      } else if (parent && ns === 1
    /* SVG */
    ) {
        if (parent.tag === 'foreignObject' || parent.tag === 'desc' || parent.tag === 'title') {
          ns = 0
          /* HTML */
          ;
        }
      }

    if (ns === 0
    /* HTML */
    ) {
        if (tag === 'svg') {
          return 1
          /* SVG */
          ;
        }

        if (tag === 'math') {
          return 2
          /* MATH_ML */
          ;
        }
      }

    return ns;
  },
  // https://html.spec.whatwg.org/multipage/parsing.html#parsing-html-fragments
  getTextMode: function getTextMode(_ref) {
    var tag = _ref.tag,
        ns = _ref.ns;

    if (ns === 0
    /* HTML */
    ) {
        if (tag === 'textarea' || tag === 'title') {
          return 1
          /* RCDATA */
          ;
        }

        if (isRawTextContainer(tag)) {
          return 2
          /* RAWTEXT */
          ;
        }
      }

    return 0
    /* DATA */
    ;
  }
}; // Parse inline CSS strings for static style attributes into an object.
// This is a NodeTransform since it works on the static `style` attribute and
// converts it into a dynamic equivalent:
// style="color: red" -> :style='{ "color": "red" }'
// It is then processed by `transformElement` and included in the generated
// props.

var transformStyle = function transformStyle(node) {
  if (node.type === 1
  /* ELEMENT */
  ) {
      node.props.forEach(function (p, i) {
        if (p.type === 6
        /* ATTRIBUTE */
        && p.name === 'style' && p.value) {
          // replace p with an expression node
          node.props[i] = {
            type: 7
            /* DIRECTIVE */
            ,
            name: "bind",
            arg: (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createSimpleExpression)("style", true, p.loc),
            exp: parseInlineCSS(p.value.content, p.loc),
            modifiers: [],
            loc: p.loc
          };
        }
      });
    }
};

var parseInlineCSS = function parseInlineCSS(cssText, loc) {
  var normalized = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.parseStringStyle)(cssText);
  return (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createSimpleExpression)(JSON.stringify(normalized), false, loc, 3
  /* CAN_STRINGIFY */
  );
};

function createDOMCompilerError(code, loc) {
  return (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createCompilerError)(code, loc,  true ? DOMErrorMessages : 0);
}

var DOMErrorMessages = (_DOMErrorMessages = {}, _defineProperty(_DOMErrorMessages, 49
/* X_V_HTML_NO_EXPRESSION */
, "v-html is missing expression."), _defineProperty(_DOMErrorMessages, 50
/* X_V_HTML_WITH_CHILDREN */
, "v-html will override element children."), _defineProperty(_DOMErrorMessages, 51
/* X_V_TEXT_NO_EXPRESSION */
, "v-text is missing expression."), _defineProperty(_DOMErrorMessages, 52
/* X_V_TEXT_WITH_CHILDREN */
, "v-text will override element children."), _defineProperty(_DOMErrorMessages, 53
/* X_V_MODEL_ON_INVALID_ELEMENT */
, "v-model can only be used on <input>, <textarea> and <select> elements."), _defineProperty(_DOMErrorMessages, 54
/* X_V_MODEL_ARG_ON_ELEMENT */
, "v-model argument is not supported on plain elements."), _defineProperty(_DOMErrorMessages, 55
/* X_V_MODEL_ON_FILE_INPUT_ELEMENT */
, "v-model cannot be used on file inputs since they are read-only. Use a v-on:change listener instead."), _defineProperty(_DOMErrorMessages, 56
/* X_V_MODEL_UNNECESSARY_VALUE */
, "Unnecessary value binding used alongside v-model. It will interfere with v-model's behavior."), _defineProperty(_DOMErrorMessages, 57
/* X_V_SHOW_NO_EXPRESSION */
, "v-show is missing expression."), _defineProperty(_DOMErrorMessages, 58
/* X_TRANSITION_INVALID_CHILDREN */
, "<Transition> expects exactly one child element or component."), _defineProperty(_DOMErrorMessages, 59
/* X_IGNORED_SIDE_EFFECT_TAG */
, "Tags with side effect (<script> and <style>) are ignored in client component templates."), _DOMErrorMessages);

var transformVHtml = function transformVHtml(dir, node, context) {
  var exp = dir.exp,
      loc = dir.loc;

  if (!exp) {
    context.onError(createDOMCompilerError(49
    /* X_V_HTML_NO_EXPRESSION */
    , loc));
  }

  if (node.children.length) {
    context.onError(createDOMCompilerError(50
    /* X_V_HTML_WITH_CHILDREN */
    , loc));
    node.children.length = 0;
  }

  return {
    props: [(0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createObjectProperty)((0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createSimpleExpression)("innerHTML", true, loc), exp || (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createSimpleExpression)('', true))]
  };
};

var transformVText = function transformVText(dir, node, context) {
  var exp = dir.exp,
      loc = dir.loc;

  if (!exp) {
    context.onError(createDOMCompilerError(51
    /* X_V_TEXT_NO_EXPRESSION */
    , loc));
  }

  if (node.children.length) {
    context.onError(createDOMCompilerError(52
    /* X_V_TEXT_WITH_CHILDREN */
    , loc));
    node.children.length = 0;
  }

  return {
    props: [(0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createObjectProperty)((0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createSimpleExpression)("textContent", true), exp ? (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createCallExpression)(context.helperString(_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.TO_DISPLAY_STRING), [exp], loc) : (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createSimpleExpression)('', true))]
  };
};

var transformModel = function transformModel(dir, node, context) {
  var baseResult = (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.transformModel)(dir, node, context); // base transform has errors OR component v-model (only need props)

  if (!baseResult.props.length || node.tagType === 1
  /* COMPONENT */
  ) {
      return baseResult;
    }

  if (dir.arg) {
    context.onError(createDOMCompilerError(54
    /* X_V_MODEL_ARG_ON_ELEMENT */
    , dir.arg.loc));
  }

  function checkDuplicatedValue() {
    var value = (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.findProp)(node, 'value');

    if (value) {
      context.onError(createDOMCompilerError(56
      /* X_V_MODEL_UNNECESSARY_VALUE */
      , value.loc));
    }
  }

  var tag = node.tag;
  var isCustomElement = context.isCustomElement(tag);

  if (tag === 'input' || tag === 'textarea' || tag === 'select' || isCustomElement) {
    var directiveToUse = V_MODEL_TEXT;
    var isInvalidType = false;

    if (tag === 'input' || isCustomElement) {
      var type = (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.findProp)(node, "type");

      if (type) {
        if (type.type === 7
        /* DIRECTIVE */
        ) {
            // :type="foo"
            directiveToUse = V_MODEL_DYNAMIC;
          } else if (type.value) {
          switch (type.value.content) {
            case 'radio':
              directiveToUse = V_MODEL_RADIO;
              break;

            case 'checkbox':
              directiveToUse = V_MODEL_CHECKBOX;
              break;

            case 'file':
              isInvalidType = true;
              context.onError(createDOMCompilerError(55
              /* X_V_MODEL_ON_FILE_INPUT_ELEMENT */
              , dir.loc));
              break;

            default:
              // text type
               true && checkDuplicatedValue();
              break;
          }
        }
      } else if ((0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.hasDynamicKeyVBind)(node)) {
        // element has bindings with dynamic keys, which can possibly contain
        // "type".
        directiveToUse = V_MODEL_DYNAMIC;
      } else {
        // text type
         true && checkDuplicatedValue();
      }
    } else if (tag === 'select') {
      directiveToUse = V_MODEL_SELECT;
    } else {
      // textarea
       true && checkDuplicatedValue();
    } // inject runtime directive
    // by returning the helper symbol via needRuntime
    // the import will replaced a resolveDirective call.


    if (!isInvalidType) {
      baseResult.needRuntime = context.helper(directiveToUse);
    }
  } else {
    context.onError(createDOMCompilerError(53
    /* X_V_MODEL_ON_INVALID_ELEMENT */
    , dir.loc));
  } // native vmodel doesn't need the `modelValue` props since they are also
  // passed to the runtime as `binding.value`. removing it reduces code size.


  baseResult.props = baseResult.props.filter(function (p) {
    return !(p.key.type === 4
    /* SIMPLE_EXPRESSION */
    && p.key.content === 'modelValue');
  });
  return baseResult;
};

var isEventOptionModifier = /*#__PURE__*/(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.makeMap)("passive,once,capture");
var isNonKeyModifier = /*#__PURE__*/(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.makeMap)( // event propagation management
"stop,prevent,self," + // system modifiers + exact
"ctrl,shift,alt,meta,exact," + // mouse
"middle"); // left & right could be mouse or key modifiers based on event type

var maybeKeyModifier = /*#__PURE__*/(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.makeMap)('left,right');
var isKeyboardEvent = /*#__PURE__*/(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.makeMap)("onkeyup,onkeydown,onkeypress", true);

var resolveModifiers = function resolveModifiers(key, modifiers, context, loc) {
  var keyModifiers = [];
  var nonKeyModifiers = [];
  var eventOptionModifiers = [];

  for (var i = 0; i < modifiers.length; i++) {
    var modifier = modifiers[i];

    if (modifier === 'native' && (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.checkCompatEnabled)("COMPILER_V_ON_NATIVE"
    /* COMPILER_V_ON_NATIVE */
    , context, loc)) {
      eventOptionModifiers.push(modifier);
    } else if (isEventOptionModifier(modifier)) {
      // eventOptionModifiers: modifiers for addEventListener() options,
      // e.g. .passive & .capture
      eventOptionModifiers.push(modifier);
    } else {
      // runtimeModifiers: modifiers that needs runtime guards
      if (maybeKeyModifier(modifier)) {
        if ((0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isStaticExp)(key)) {
          if (isKeyboardEvent(key.content)) {
            keyModifiers.push(modifier);
          } else {
            nonKeyModifiers.push(modifier);
          }
        } else {
          keyModifiers.push(modifier);
          nonKeyModifiers.push(modifier);
        }
      } else {
        if (isNonKeyModifier(modifier)) {
          nonKeyModifiers.push(modifier);
        } else {
          keyModifiers.push(modifier);
        }
      }
    }
  }

  return {
    keyModifiers: keyModifiers,
    nonKeyModifiers: nonKeyModifiers,
    eventOptionModifiers: eventOptionModifiers
  };
};

var transformClick = function transformClick(key, event) {
  var isStaticClick = (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isStaticExp)(key) && key.content.toLowerCase() === 'onclick';
  return isStaticClick ? (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createSimpleExpression)(event, true) : key.type !== 4
  /* SIMPLE_EXPRESSION */
  ? (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createCompoundExpression)(["(", key, ") === \"onClick\" ? \"".concat(event, "\" : ("), key, ")"]) : key;
};

var transformOn = function transformOn(dir, node, context) {
  return (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.transformOn)(dir, node, context, function (baseResult) {
    var modifiers = dir.modifiers;
    if (!modifiers.length) return baseResult;
    var _baseResult$props$ = baseResult.props[0],
        key = _baseResult$props$.key,
        handlerExp = _baseResult$props$.value;

    var _resolveModifiers = resolveModifiers(key, modifiers, context, dir.loc),
        keyModifiers = _resolveModifiers.keyModifiers,
        nonKeyModifiers = _resolveModifiers.nonKeyModifiers,
        eventOptionModifiers = _resolveModifiers.eventOptionModifiers; // normalize click.right and click.middle since they don't actually fire


    if (nonKeyModifiers.includes('right')) {
      key = transformClick(key, "onContextmenu");
    }

    if (nonKeyModifiers.includes('middle')) {
      key = transformClick(key, "onMouseup");
    }

    if (nonKeyModifiers.length) {
      handlerExp = (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createCallExpression)(context.helper(V_ON_WITH_MODIFIERS), [handlerExp, JSON.stringify(nonKeyModifiers)]);
    }

    if (keyModifiers.length && ( // if event name is dynamic, always wrap with keys guard
    !(0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isStaticExp)(key) || isKeyboardEvent(key.content))) {
      handlerExp = (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createCallExpression)(context.helper(V_ON_WITH_KEYS), [handlerExp, JSON.stringify(keyModifiers)]);
    }

    if (eventOptionModifiers.length) {
      var modifierPostfix = eventOptionModifiers.map(_vue_shared__WEBPACK_IMPORTED_MODULE_1__.capitalize).join('');
      key = (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isStaticExp)(key) ? (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createSimpleExpression)("".concat(key.content).concat(modifierPostfix), true) : (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createCompoundExpression)(["(", key, ") + \"".concat(modifierPostfix, "\"")]);
    }

    return {
      props: [(0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createObjectProperty)(key, handlerExp)]
    };
  });
};

var transformShow = function transformShow(dir, node, context) {
  var exp = dir.exp,
      loc = dir.loc;

  if (!exp) {
    context.onError(createDOMCompilerError(57
    /* X_V_SHOW_NO_EXPRESSION */
    , loc));
  }

  return {
    props: [],
    needRuntime: context.helper(V_SHOW)
  };
};

var warnTransitionChildren = function warnTransitionChildren(node, context) {
  if (node.type === 1
  /* ELEMENT */
  && node.tagType === 1
  /* COMPONENT */
  ) {
      var component = context.isBuiltInComponent(node.tag);

      if (component === TRANSITION) {
        return function () {
          if (node.children.length && hasMultipleChildren(node)) {
            context.onError(createDOMCompilerError(58
            /* X_TRANSITION_INVALID_CHILDREN */
            , {
              start: node.children[0].loc.start,
              end: node.children[node.children.length - 1].loc.end,
              source: ''
            }));
          }
        };
      }
    }
};

function hasMultipleChildren(node) {
  // #1352 filter out potential comment nodes.
  var children = node.children = node.children.filter(function (c) {
    return c.type !== 3;
  }
  /* COMMENT */
  );
  var child = children[0];
  return children.length !== 1 || child.type === 11
  /* FOR */
  || child.type === 9
  /* IF */
  && child.branches.some(hasMultipleChildren);
}

var ignoreSideEffectTags = function ignoreSideEffectTags(node, context) {
  if (node.type === 1
  /* ELEMENT */
  && node.tagType === 0
  /* ELEMENT */
  && (node.tag === 'script' || node.tag === 'style')) {
    context.onError(createDOMCompilerError(59
    /* X_IGNORED_SIDE_EFFECT_TAG */
    , node.loc));
    context.removeNode();
  }
};

var DOMNodeTransforms = [transformStyle].concat(_toConsumableArray( true ? [warnTransitionChildren] : 0));
var DOMDirectiveTransforms = {
  cloak: _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.noopDirectiveTransform,
  html: transformVHtml,
  text: transformVText,
  model: transformModel,
  on: transformOn,
  show: transformShow
};

function compile(template) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.baseCompile)(template, (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({}, parserOptions, options, {
    nodeTransforms: [// ignore <script> and <tag>
    // this is not put inside DOMNodeTransforms because that list is used
    // by compiler-ssr to generate vnode fallback branches
    ignoreSideEffectTags].concat(_toConsumableArray(DOMNodeTransforms), _toConsumableArray(options.nodeTransforms || [])),
    directiveTransforms: (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({}, DOMDirectiveTransforms, options.directiveTransforms || {}),
    transformHoist: null
  }));
}

function parse(template) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.baseParse)(template, (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({}, parserOptions, options));
}



/***/ }),

/***/ "./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ITERATE_KEY": () => (/* binding */ ITERATE_KEY),
/* harmony export */   "computed": () => (/* binding */ computed),
/* harmony export */   "customRef": () => (/* binding */ customRef),
/* harmony export */   "effect": () => (/* binding */ effect),
/* harmony export */   "enableTracking": () => (/* binding */ enableTracking),
/* harmony export */   "isProxy": () => (/* binding */ isProxy),
/* harmony export */   "isReactive": () => (/* binding */ isReactive),
/* harmony export */   "isReadonly": () => (/* binding */ isReadonly),
/* harmony export */   "isRef": () => (/* binding */ isRef),
/* harmony export */   "markRaw": () => (/* binding */ markRaw),
/* harmony export */   "pauseTracking": () => (/* binding */ pauseTracking),
/* harmony export */   "proxyRefs": () => (/* binding */ proxyRefs),
/* harmony export */   "reactive": () => (/* binding */ reactive),
/* harmony export */   "readonly": () => (/* binding */ readonly),
/* harmony export */   "ref": () => (/* binding */ ref),
/* harmony export */   "resetTracking": () => (/* binding */ resetTracking),
/* harmony export */   "shallowReactive": () => (/* binding */ shallowReactive),
/* harmony export */   "shallowReadonly": () => (/* binding */ shallowReadonly),
/* harmony export */   "shallowRef": () => (/* binding */ shallowRef),
/* harmony export */   "stop": () => (/* binding */ stop),
/* harmony export */   "toRaw": () => (/* binding */ toRaw),
/* harmony export */   "toRef": () => (/* binding */ toRef),
/* harmony export */   "toRefs": () => (/* binding */ toRefs),
/* harmony export */   "track": () => (/* binding */ track),
/* harmony export */   "trigger": () => (/* binding */ trigger),
/* harmony export */   "triggerRef": () => (/* binding */ triggerRef),
/* harmony export */   "unref": () => (/* binding */ unref)
/* harmony export */ });
/* harmony import */ var _vue_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/shared */ "./node_modules/@vue/shared/dist/shared.esm-bundler.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var targetMap = new WeakMap();
var effectStack = [];
var activeEffect;
var ITERATE_KEY = Symbol( true ? 'iterate' : 0);
var MAP_KEY_ITERATE_KEY = Symbol( true ? 'Map key iterate' : 0);

function isEffect(fn) {
  return fn && fn._isEffect === true;
}

function effect(fn) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _vue_shared__WEBPACK_IMPORTED_MODULE_0__.EMPTY_OBJ;

  if (isEffect(fn)) {
    fn = fn.raw;
  }

  var effect = createReactiveEffect(fn, options);

  if (!options.lazy) {
    effect();
  }

  return effect;
}

function stop(effect) {
  if (effect.active) {
    cleanup(effect);

    if (effect.options.onStop) {
      effect.options.onStop();
    }

    effect.active = false;
  }
}

var uid = 0;

function createReactiveEffect(fn, options) {
  var effect = function reactiveEffect() {
    if (!effect.active) {
      return fn();
    }

    if (!effectStack.includes(effect)) {
      cleanup(effect);

      try {
        enableTracking();
        effectStack.push(effect);
        activeEffect = effect;
        return fn();
      } finally {
        effectStack.pop();
        resetTracking();
        activeEffect = effectStack[effectStack.length - 1];
      }
    }
  };

  effect.id = uid++;
  effect.allowRecurse = !!options.allowRecurse;
  effect._isEffect = true;
  effect.active = true;
  effect.raw = fn;
  effect.deps = [];
  effect.options = options;
  return effect;
}

function cleanup(effect) {
  var deps = effect.deps;

  if (deps.length) {
    for (var i = 0; i < deps.length; i++) {
      deps[i]["delete"](effect);
    }

    deps.length = 0;
  }
}

var shouldTrack = true;
var trackStack = [];

function pauseTracking() {
  trackStack.push(shouldTrack);
  shouldTrack = false;
}

function enableTracking() {
  trackStack.push(shouldTrack);
  shouldTrack = true;
}

function resetTracking() {
  var last = trackStack.pop();
  shouldTrack = last === undefined ? true : last;
}

function track(target, type, key) {
  if (!shouldTrack || activeEffect === undefined) {
    return;
  }

  var depsMap = targetMap.get(target);

  if (!depsMap) {
    targetMap.set(target, depsMap = new Map());
  }

  var dep = depsMap.get(key);

  if (!dep) {
    depsMap.set(key, dep = new Set());
  }

  if (!dep.has(activeEffect)) {
    dep.add(activeEffect);
    activeEffect.deps.push(dep);

    if ( true && activeEffect.options.onTrack) {
      activeEffect.options.onTrack({
        effect: activeEffect,
        target: target,
        type: type,
        key: key
      });
    }
  }
}

function trigger(target, type, key, newValue, oldValue, oldTarget) {
  var depsMap = targetMap.get(target);

  if (!depsMap) {
    // never been tracked
    return;
  }

  var effects = new Set();

  var add = function add(effectsToAdd) {
    if (effectsToAdd) {
      effectsToAdd.forEach(function (effect) {
        if (effect !== activeEffect || effect.allowRecurse) {
          effects.add(effect);
        }
      });
    }
  };

  if (type === "clear"
  /* CLEAR */
  ) {
      // collection being cleared
      // trigger all effects for target
      depsMap.forEach(add);
    } else if (key === 'length' && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(target)) {
    depsMap.forEach(function (dep, key) {
      if (key === 'length' || key >= newValue) {
        add(dep);
      }
    });
  } else {
    // schedule runs for SET | ADD | DELETE
    if (key !== void 0) {
      add(depsMap.get(key));
    } // also run for iteration key on ADD | DELETE | Map.SET


    switch (type) {
      case "add"
      /* ADD */
      :
        if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(target)) {
          add(depsMap.get(ITERATE_KEY));

          if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isMap)(target)) {
            add(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isIntegerKey)(key)) {
          // new index added to array -> length changes
          add(depsMap.get('length'));
        }

        break;

      case "delete"
      /* DELETE */
      :
        if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(target)) {
          add(depsMap.get(ITERATE_KEY));

          if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isMap)(target)) {
            add(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        }

        break;

      case "set"
      /* SET */
      :
        if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isMap)(target)) {
          add(depsMap.get(ITERATE_KEY));
        }

        break;
    }
  }

  var run = function run(effect) {
    if ( true && effect.options.onTrigger) {
      effect.options.onTrigger({
        effect: effect,
        target: target,
        key: key,
        type: type,
        newValue: newValue,
        oldValue: oldValue,
        oldTarget: oldTarget
      });
    }

    if (effect.options.scheduler) {
      effect.options.scheduler(effect);
    } else {
      effect();
    }
  };

  effects.forEach(run);
}

var isNonTrackableKeys = /*#__PURE__*/(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.makeMap)("__proto__,__v_isRef,__isVue");
var builtInSymbols = new Set(Object.getOwnPropertyNames(Symbol).map(function (key) {
  return Symbol[key];
}).filter(_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isSymbol));
var get = /*#__PURE__*/createGetter();
var shallowGet = /*#__PURE__*/createGetter(false, true);
var readonlyGet = /*#__PURE__*/createGetter(true);
var shallowReadonlyGet = /*#__PURE__*/createGetter(true, true);
var arrayInstrumentations = /*#__PURE__*/createArrayInstrumentations();

function createArrayInstrumentations() {
  var instrumentations = {};
  ['includes', 'indexOf', 'lastIndexOf'].forEach(function (key) {
    var method = Array.prototype[key];

    instrumentations[key] = function () {
      var arr = toRaw(this);

      for (var i = 0, l = this.length; i < l; i++) {
        track(arr, "get"
        /* GET */
        , i + '');
      } // we run the method using the original args first (which may be reactive)


      for (var _len = arguments.length, args = new Array(_len), _key2 = 0; _key2 < _len; _key2++) {
        args[_key2] = arguments[_key2];
      }

      var res = method.apply(arr, args);

      if (res === -1 || res === false) {
        // if that didn't work, run it again using raw values.
        return method.apply(arr, args.map(toRaw));
      } else {
        return res;
      }
    };
  });
  ['push', 'pop', 'shift', 'unshift', 'splice'].forEach(function (key) {
    var method = Array.prototype[key];

    instrumentations[key] = function () {
      pauseTracking();

      for (var _len2 = arguments.length, args = new Array(_len2), _key3 = 0; _key3 < _len2; _key3++) {
        args[_key3] = arguments[_key3];
      }

      var res = method.apply(this, args);
      resetTracking();
      return res;
    };
  });
  return instrumentations;
}

function createGetter() {
  var isReadonly = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var shallow = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return function get(target, key, receiver) {
    if (key === "__v_isReactive"
    /* IS_REACTIVE */
    ) {
        return !isReadonly;
      } else if (key === "__v_isReadonly"
    /* IS_READONLY */
    ) {
        return isReadonly;
      } else if (key === "__v_raw"
    /* RAW */
    && receiver === (isReadonly ? shallow ? shallowReadonlyMap : readonlyMap : shallow ? shallowReactiveMap : reactiveMap).get(target)) {
      return target;
    }

    var targetIsArray = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(target);

    if (!isReadonly && targetIsArray && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(arrayInstrumentations, key)) {
      return Reflect.get(arrayInstrumentations, key, receiver);
    }

    var res = Reflect.get(target, key, receiver);

    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isSymbol)(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
      return res;
    }

    if (!isReadonly) {
      track(target, "get"
      /* GET */
      , key);
    }

    if (shallow) {
      return res;
    }

    if (isRef(res)) {
      // ref unwrapping - does not apply for Array + integer key.
      var shouldUnwrap = !targetIsArray || !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isIntegerKey)(key);
      return shouldUnwrap ? res.value : res;
    }

    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isObject)(res)) {
      // Convert returned value into a proxy as well. we do the isObject check
      // here to avoid invalid value warning. Also need to lazy access readonly
      // and reactive here to avoid circular dependency.
      return isReadonly ? readonly(res) : reactive(res);
    }

    return res;
  };
}

var set = /*#__PURE__*/createSetter();
var shallowSet = /*#__PURE__*/createSetter(true);

function createSetter() {
  var shallow = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return function set(target, key, value, receiver) {
    var oldValue = target[key];

    if (!shallow) {
      value = toRaw(value);
      oldValue = toRaw(oldValue);

      if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(target) && isRef(oldValue) && !isRef(value)) {
        oldValue.value = value;
        return true;
      }
    }

    var hadKey = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(target) && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isIntegerKey)(key) ? Number(key) < target.length : (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(target, key);
    var result = Reflect.set(target, key, value, receiver); // don't trigger if target is something up in the prototype chain of original

    if (target === toRaw(receiver)) {
      if (!hadKey) {
        trigger(target, "add"
        /* ADD */
        , key, value);
      } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.hasChanged)(value, oldValue)) {
        trigger(target, "set"
        /* SET */
        , key, value, oldValue);
      }
    }

    return result;
  };
}

function deleteProperty(target, key) {
  var hadKey = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(target, key);
  var oldValue = target[key];
  var result = Reflect.deleteProperty(target, key);

  if (result && hadKey) {
    trigger(target, "delete"
    /* DELETE */
    , key, undefined, oldValue);
  }

  return result;
}

function has(target, key) {
  var result = Reflect.has(target, key);

  if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isSymbol)(key) || !builtInSymbols.has(key)) {
    track(target, "has"
    /* HAS */
    , key);
  }

  return result;
}

function ownKeys(target) {
  track(target, "iterate"
  /* ITERATE */
  , (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(target) ? 'length' : ITERATE_KEY);
  return Reflect.ownKeys(target);
}

var mutableHandlers = {
  get: get,
  set: set,
  deleteProperty: deleteProperty,
  has: has,
  ownKeys: ownKeys
};
var readonlyHandlers = {
  get: readonlyGet,
  set: function set(target, key) {
    if (true) {
      console.warn("Set operation on key \"".concat(String(key), "\" failed: target is readonly."), target);
    }

    return true;
  },
  deleteProperty: function deleteProperty(target, key) {
    if (true) {
      console.warn("Delete operation on key \"".concat(String(key), "\" failed: target is readonly."), target);
    }

    return true;
  }
};
var shallowReactiveHandlers = /*#__PURE__*/(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.extend)({}, mutableHandlers, {
  get: shallowGet,
  set: shallowSet
}); // Props handlers are special in the sense that it should not unwrap top-level
// refs (in order to allow refs to be explicitly passed down), but should
// retain the reactivity of the normal readonly object.

var shallowReadonlyHandlers = /*#__PURE__*/(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.extend)({}, readonlyHandlers, {
  get: shallowReadonlyGet
});

var toReactive = function toReactive(value) {
  return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isObject)(value) ? reactive(value) : value;
};

var toReadonly = function toReadonly(value) {
  return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isObject)(value) ? readonly(value) : value;
};

var toShallow = function toShallow(value) {
  return value;
};

var getProto = function getProto(v) {
  return Reflect.getPrototypeOf(v);
};

function get$1(target, key) {
  var isReadonly = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var isShallow = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  // #1772: readonly(reactive(Map)) should return readonly + reactive version
  // of the value
  target = target["__v_raw"
  /* RAW */
  ];
  var rawTarget = toRaw(target);
  var rawKey = toRaw(key);

  if (key !== rawKey) {
    !isReadonly && track(rawTarget, "get"
    /* GET */
    , key);
  }

  !isReadonly && track(rawTarget, "get"
  /* GET */
  , rawKey);

  var _getProto = getProto(rawTarget),
      has = _getProto.has;

  var wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;

  if (has.call(rawTarget, key)) {
    return wrap(target.get(key));
  } else if (has.call(rawTarget, rawKey)) {
    return wrap(target.get(rawKey));
  } else if (target !== rawTarget) {
    // #3602 readonly(reactive(Map))
    // ensure that the nested reactive `Map` can do tracking for itself
    target.get(key);
  }
}

function has$1(key) {
  var isReadonly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var target = this["__v_raw"
  /* RAW */
  ];
  var rawTarget = toRaw(target);
  var rawKey = toRaw(key);

  if (key !== rawKey) {
    !isReadonly && track(rawTarget, "has"
    /* HAS */
    , key);
  }

  !isReadonly && track(rawTarget, "has"
  /* HAS */
  , rawKey);
  return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
}

function size(target) {
  var isReadonly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  target = target["__v_raw"
  /* RAW */
  ];
  !isReadonly && track(toRaw(target), "iterate"
  /* ITERATE */
  , ITERATE_KEY);
  return Reflect.get(target, 'size', target);
}

function add(value) {
  value = toRaw(value);
  var target = toRaw(this);
  var proto = getProto(target);
  var hadKey = proto.has.call(target, value);

  if (!hadKey) {
    target.add(value);
    trigger(target, "add"
    /* ADD */
    , value, value);
  }

  return this;
}

function set$1(key, value) {
  value = toRaw(value);
  var target = toRaw(this);

  var _getProto2 = getProto(target),
      has = _getProto2.has,
      get = _getProto2.get;

  var hadKey = has.call(target, key);

  if (!hadKey) {
    key = toRaw(key);
    hadKey = has.call(target, key);
  } else if (true) {
    checkIdentityKeys(target, has, key);
  }

  var oldValue = get.call(target, key);
  target.set(key, value);

  if (!hadKey) {
    trigger(target, "add"
    /* ADD */
    , key, value);
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.hasChanged)(value, oldValue)) {
    trigger(target, "set"
    /* SET */
    , key, value, oldValue);
  }

  return this;
}

function deleteEntry(key) {
  var target = toRaw(this);

  var _getProto3 = getProto(target),
      has = _getProto3.has,
      get = _getProto3.get;

  var hadKey = has.call(target, key);

  if (!hadKey) {
    key = toRaw(key);
    hadKey = has.call(target, key);
  } else if (true) {
    checkIdentityKeys(target, has, key);
  }

  var oldValue = get ? get.call(target, key) : undefined; // forward the operation before queueing reactions

  var result = target["delete"](key);

  if (hadKey) {
    trigger(target, "delete"
    /* DELETE */
    , key, undefined, oldValue);
  }

  return result;
}

function clear() {
  var target = toRaw(this);
  var hadItems = target.size !== 0;
  var oldTarget =  true ? (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isMap)(target) ? new Map(target) : new Set(target) : 0; // forward the operation before queueing reactions

  var result = target.clear();

  if (hadItems) {
    trigger(target, "clear"
    /* CLEAR */
    , undefined, undefined, oldTarget);
  }

  return result;
}

function createForEach(isReadonly, isShallow) {
  return function forEach(callback, thisArg) {
    var observed = this;
    var target = observed["__v_raw"
    /* RAW */
    ];
    var rawTarget = toRaw(target);
    var wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
    !isReadonly && track(rawTarget, "iterate"
    /* ITERATE */
    , ITERATE_KEY);
    return target.forEach(function (value, key) {
      // important: make sure the callback is
      // 1. invoked with the reactive map as `this` and 3rd arg
      // 2. the value received should be a corresponding reactive/readonly.
      return callback.call(thisArg, wrap(value), wrap(key), observed);
    });
  };
}

function createIterableMethod(method, isReadonly, isShallow) {
  return function () {
    var target = this["__v_raw"
    /* RAW */
    ];
    var rawTarget = toRaw(target);
    var targetIsMap = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isMap)(rawTarget);
    var isPair = method === 'entries' || method === Symbol.iterator && targetIsMap;
    var isKeyOnly = method === 'keys' && targetIsMap;
    var innerIterator = target[method].apply(target, arguments);
    var wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
    !isReadonly && track(rawTarget, "iterate"
    /* ITERATE */
    , isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY); // return a wrapped iterator which returns observed versions of the
    // values emitted from the real iterator

    return _defineProperty({
      // iterator protocol
      next: function next() {
        var _innerIterator$next = innerIterator.next(),
            value = _innerIterator$next.value,
            done = _innerIterator$next.done;

        return done ? {
          value: value,
          done: done
        } : {
          value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
          done: done
        };
      }
    }, Symbol.iterator, function () {
      return this;
    });
  };
}

function createReadonlyMethod(type) {
  return function () {
    if (true) {
      var key = (arguments.length <= 0 ? undefined : arguments[0]) ? "on key \"".concat(arguments.length <= 0 ? undefined : arguments[0], "\" ") : "";
      console.warn("".concat((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.capitalize)(type), " operation ").concat(key, "failed: target is readonly."), toRaw(this));
    }

    return type === "delete"
    /* DELETE */
    ? false : this;
  };
}

function createInstrumentations() {
  var mutableInstrumentations = {
    get: function get(key) {
      return get$1(this, key);
    },

    get size() {
      return size(this);
    },

    has: has$1,
    add: add,
    set: set$1,
    "delete": deleteEntry,
    clear: clear,
    forEach: createForEach(false, false)
  };
  var shallowInstrumentations = {
    get: function get(key) {
      return get$1(this, key, false, true);
    },

    get size() {
      return size(this);
    },

    has: has$1,
    add: add,
    set: set$1,
    "delete": deleteEntry,
    clear: clear,
    forEach: createForEach(false, true)
  };
  var readonlyInstrumentations = {
    get: function get(key) {
      return get$1(this, key, true);
    },

    get size() {
      return size(this, true);
    },

    has: function has(key) {
      return has$1.call(this, key, true);
    },
    add: createReadonlyMethod("add"
    /* ADD */
    ),
    set: createReadonlyMethod("set"
    /* SET */
    ),
    "delete": createReadonlyMethod("delete"
    /* DELETE */
    ),
    clear: createReadonlyMethod("clear"
    /* CLEAR */
    ),
    forEach: createForEach(true, false)
  };
  var shallowReadonlyInstrumentations = {
    get: function get(key) {
      return get$1(this, key, true, true);
    },

    get size() {
      return size(this, true);
    },

    has: function has(key) {
      return has$1.call(this, key, true);
    },
    add: createReadonlyMethod("add"
    /* ADD */
    ),
    set: createReadonlyMethod("set"
    /* SET */
    ),
    "delete": createReadonlyMethod("delete"
    /* DELETE */
    ),
    clear: createReadonlyMethod("clear"
    /* CLEAR */
    ),
    forEach: createForEach(true, true)
  };
  var iteratorMethods = ['keys', 'values', 'entries', Symbol.iterator];
  iteratorMethods.forEach(function (method) {
    mutableInstrumentations[method] = createIterableMethod(method, false, false);
    readonlyInstrumentations[method] = createIterableMethod(method, true, false);
    shallowInstrumentations[method] = createIterableMethod(method, false, true);
    shallowReadonlyInstrumentations[method] = createIterableMethod(method, true, true);
  });
  return [mutableInstrumentations, readonlyInstrumentations, shallowInstrumentations, shallowReadonlyInstrumentations];
}

var _createInstrumentatio = /* #__PURE__*/createInstrumentations(),
    _createInstrumentatio2 = _slicedToArray(_createInstrumentatio, 4),
    mutableInstrumentations = _createInstrumentatio2[0],
    readonlyInstrumentations = _createInstrumentatio2[1],
    shallowInstrumentations = _createInstrumentatio2[2],
    shallowReadonlyInstrumentations = _createInstrumentatio2[3];

function createInstrumentationGetter(isReadonly, shallow) {
  var instrumentations = shallow ? isReadonly ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly ? readonlyInstrumentations : mutableInstrumentations;
  return function (target, key, receiver) {
    if (key === "__v_isReactive"
    /* IS_REACTIVE */
    ) {
        return !isReadonly;
      } else if (key === "__v_isReadonly"
    /* IS_READONLY */
    ) {
        return isReadonly;
      } else if (key === "__v_raw"
    /* RAW */
    ) {
        return target;
      }

    return Reflect.get((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
  };
}

var mutableCollectionHandlers = {
  get: /*#__PURE__*/createInstrumentationGetter(false, false)
};
var shallowCollectionHandlers = {
  get: /*#__PURE__*/createInstrumentationGetter(false, true)
};
var readonlyCollectionHandlers = {
  get: /*#__PURE__*/createInstrumentationGetter(true, false)
};
var shallowReadonlyCollectionHandlers = {
  get: /*#__PURE__*/createInstrumentationGetter(true, true)
};

function checkIdentityKeys(target, has, key) {
  var rawKey = toRaw(key);

  if (rawKey !== key && has.call(target, rawKey)) {
    var type = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.toRawType)(target);
    console.warn("Reactive ".concat(type, " contains both the raw and reactive ") + "versions of the same object".concat(type === "Map" ? " as keys" : "", ", ") + "which can lead to inconsistencies. " + "Avoid differentiating between the raw and reactive versions " + "of an object and only use the reactive version if possible.");
  }
}

var reactiveMap = new WeakMap();
var shallowReactiveMap = new WeakMap();
var readonlyMap = new WeakMap();
var shallowReadonlyMap = new WeakMap();

function targetTypeMap(rawType) {
  switch (rawType) {
    case 'Object':
    case 'Array':
      return 1
      /* COMMON */
      ;

    case 'Map':
    case 'Set':
    case 'WeakMap':
    case 'WeakSet':
      return 2
      /* COLLECTION */
      ;

    default:
      return 0
      /* INVALID */
      ;
  }
}

function getTargetType(value) {
  return value["__v_skip"
  /* SKIP */
  ] || !Object.isExtensible(value) ? 0
  /* INVALID */
  : targetTypeMap((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.toRawType)(value));
}

function reactive(target) {
  // if trying to observe a readonly proxy, return the readonly version.
  if (target && target["__v_isReadonly"
  /* IS_READONLY */
  ]) {
    return target;
  }

  return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
}
/**
 * Return a shallowly-reactive copy of the original object, where only the root
 * level properties are reactive. It also does not auto-unwrap refs (even at the
 * root level).
 */


function shallowReactive(target) {
  return createReactiveObject(target, false, shallowReactiveHandlers, shallowCollectionHandlers, shallowReactiveMap);
}
/**
 * Creates a readonly copy of the original object. Note the returned copy is not
 * made reactive, but `readonly` can be called on an already reactive object.
 */


function readonly(target) {
  return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
}
/**
 * Returns a reactive-copy of the original object, where only the root level
 * properties are readonly, and does NOT unwrap refs nor recursively convert
 * returned properties.
 * This is used for creating the props proxy object for stateful components.
 */


function shallowReadonly(target) {
  return createReactiveObject(target, true, shallowReadonlyHandlers, shallowReadonlyCollectionHandlers, shallowReadonlyMap);
}

function createReactiveObject(target, isReadonly, baseHandlers, collectionHandlers, proxyMap) {
  if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isObject)(target)) {
    if (true) {
      console.warn("value cannot be made reactive: ".concat(String(target)));
    }

    return target;
  } // target is already a Proxy, return it.
  // exception: calling readonly() on a reactive object


  if (target["__v_raw"
  /* RAW */
  ] && !(isReadonly && target["__v_isReactive"
  /* IS_REACTIVE */
  ])) {
    return target;
  } // target already has corresponding Proxy


  var existingProxy = proxyMap.get(target);

  if (existingProxy) {
    return existingProxy;
  } // only a whitelist of value types can be observed.


  var targetType = getTargetType(target);

  if (targetType === 0
  /* INVALID */
  ) {
      return target;
    }

  var proxy = new Proxy(target, targetType === 2
  /* COLLECTION */
  ? collectionHandlers : baseHandlers);
  proxyMap.set(target, proxy);
  return proxy;
}

function isReactive(value) {
  if (isReadonly(value)) {
    return isReactive(value["__v_raw"
    /* RAW */
    ]);
  }

  return !!(value && value["__v_isReactive"
  /* IS_REACTIVE */
  ]);
}

function isReadonly(value) {
  return !!(value && value["__v_isReadonly"
  /* IS_READONLY */
  ]);
}

function isProxy(value) {
  return isReactive(value) || isReadonly(value);
}

function toRaw(observed) {
  return observed && toRaw(observed["__v_raw"
  /* RAW */
  ]) || observed;
}

function markRaw(value) {
  (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.def)(value, "__v_skip"
  /* SKIP */
  , true);
  return value;
}

var convert = function convert(val) {
  return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isObject)(val) ? reactive(val) : val;
};

function isRef(r) {
  return Boolean(r && r.__v_isRef === true);
}

function ref(value) {
  return createRef(value);
}

function shallowRef(value) {
  return createRef(value, true);
}

var RefImpl = /*#__PURE__*/function () {
  function RefImpl(_rawValue, _shallow) {
    _classCallCheck(this, RefImpl);

    this._rawValue = _rawValue;
    this._shallow = _shallow;
    this.__v_isRef = true;
    this._value = _shallow ? _rawValue : convert(_rawValue);
  }

  _createClass(RefImpl, [{
    key: "value",
    get: function get() {
      track(toRaw(this), "get"
      /* GET */
      , 'value');
      return this._value;
    },
    set: function set(newVal) {
      if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.hasChanged)(toRaw(newVal), this._rawValue)) {
        this._rawValue = newVal;
        this._value = this._shallow ? newVal : convert(newVal);
        trigger(toRaw(this), "set"
        /* SET */
        , 'value', newVal);
      }
    }
  }]);

  return RefImpl;
}();

function createRef(rawValue) {
  var shallow = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (isRef(rawValue)) {
    return rawValue;
  }

  return new RefImpl(rawValue, shallow);
}

function triggerRef(ref) {
  trigger(toRaw(ref), "set"
  /* SET */
  , 'value',  true ? ref.value : 0);
}

function unref(ref) {
  return isRef(ref) ? ref.value : ref;
}

var shallowUnwrapHandlers = {
  get: function get(target, key, receiver) {
    return unref(Reflect.get(target, key, receiver));
  },
  set: function set(target, key, value, receiver) {
    var oldValue = target[key];

    if (isRef(oldValue) && !isRef(value)) {
      oldValue.value = value;
      return true;
    } else {
      return Reflect.set(target, key, value, receiver);
    }
  }
};

function proxyRefs(objectWithRefs) {
  return isReactive(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
}

var CustomRefImpl = /*#__PURE__*/function () {
  function CustomRefImpl(factory) {
    var _this = this;

    _classCallCheck(this, CustomRefImpl);

    this.__v_isRef = true;

    var _factory = factory(function () {
      return track(_this, "get"
      /* GET */
      ,
      /* GET */
      'value');
    }, function () {
      return trigger(_this, "set"
      /* SET */
      ,
      /* SET */
      'value');
    }),
        get = _factory.get,
        set = _factory.set;

    this._get = get;
    this._set = set;
  }

  _createClass(CustomRefImpl, [{
    key: "value",
    get: function get() {
      return this._get();
    },
    set: function set(newVal) {
      this._set(newVal);
    }
  }]);

  return CustomRefImpl;
}();

function customRef(factory) {
  return new CustomRefImpl(factory);
}

function toRefs(object) {
  if ( true && !isProxy(object)) {
    console.warn("toRefs() expects a reactive object but received a plain one.");
  }

  var ret = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(object) ? new Array(object.length) : {};

  for (var key in object) {
    ret[key] = toRef(object, key);
  }

  return ret;
}

var ObjectRefImpl = /*#__PURE__*/function () {
  function ObjectRefImpl(_object, _key) {
    _classCallCheck(this, ObjectRefImpl);

    this._object = _object;
    this._key = _key;
    this.__v_isRef = true;
  }

  _createClass(ObjectRefImpl, [{
    key: "value",
    get: function get() {
      return this._object[this._key];
    },
    set: function set(newVal) {
      this._object[this._key] = newVal;
    }
  }]);

  return ObjectRefImpl;
}();

function toRef(object, key) {
  return isRef(object[key]) ? object[key] : new ObjectRefImpl(object, key);
}

var ComputedRefImpl = /*#__PURE__*/function () {
  function ComputedRefImpl(getter, _setter, isReadonly) {
    var _this2 = this;

    _classCallCheck(this, ComputedRefImpl);

    this._setter = _setter;
    this._dirty = true;
    this.__v_isRef = true;
    this.effect = effect(getter, {
      lazy: true,
      scheduler: function scheduler() {
        if (!_this2._dirty) {
          _this2._dirty = true;
          trigger(toRaw(_this2), "set"
          /* SET */
          , 'value');
        }
      }
    });
    this["__v_isReadonly"
    /* IS_READONLY */
    ] = isReadonly;
  }

  _createClass(ComputedRefImpl, [{
    key: "value",
    get: function get() {
      // the computed ref may get wrapped by other proxies e.g. readonly() #3376
      var self = toRaw(this);

      if (self._dirty) {
        self._value = this.effect();
        self._dirty = false;
      }

      track(self, "get"
      /* GET */
      , 'value');
      return self._value;
    },
    set: function set(newValue) {
      this._setter(newValue);
    }
  }]);

  return ComputedRefImpl;
}();

function computed(getterOrOptions) {
  var getter;
  var setter;

  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isFunction)(getterOrOptions)) {
    getter = getterOrOptions;
    setter =  true ? function () {
      console.warn('Write operation failed: computed value is readonly');
    } : 0;
  } else {
    getter = getterOrOptions.get;
    setter = getterOrOptions.set;
  }

  return new ComputedRefImpl(getter, setter, (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isFunction)(getterOrOptions) || !getterOrOptions.set);
}



/***/ }),

/***/ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "customRef": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.customRef),
/* harmony export */   "isProxy": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isProxy),
/* harmony export */   "isReactive": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isReactive),
/* harmony export */   "isReadonly": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isReadonly),
/* harmony export */   "isRef": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isRef),
/* harmony export */   "markRaw": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.markRaw),
/* harmony export */   "proxyRefs": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.proxyRefs),
/* harmony export */   "reactive": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.reactive),
/* harmony export */   "readonly": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.readonly),
/* harmony export */   "ref": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.ref),
/* harmony export */   "shallowReactive": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.shallowReactive),
/* harmony export */   "shallowReadonly": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.shallowReadonly),
/* harmony export */   "shallowRef": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.shallowRef),
/* harmony export */   "toRaw": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw),
/* harmony export */   "toRef": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRef),
/* harmony export */   "toRefs": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRefs),
/* harmony export */   "triggerRef": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.triggerRef),
/* harmony export */   "unref": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.unref),
/* harmony export */   "camelize": () => (/* reexport safe */ _vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize),
/* harmony export */   "capitalize": () => (/* reexport safe */ _vue_shared__WEBPACK_IMPORTED_MODULE_1__.capitalize),
/* harmony export */   "toDisplayString": () => (/* reexport safe */ _vue_shared__WEBPACK_IMPORTED_MODULE_1__.toDisplayString),
/* harmony export */   "toHandlerKey": () => (/* reexport safe */ _vue_shared__WEBPACK_IMPORTED_MODULE_1__.toHandlerKey),
/* harmony export */   "BaseTransition": () => (/* binding */ BaseTransition),
/* harmony export */   "Comment": () => (/* binding */ Comment$1),
/* harmony export */   "Fragment": () => (/* binding */ Fragment),
/* harmony export */   "KeepAlive": () => (/* binding */ KeepAlive),
/* harmony export */   "Static": () => (/* binding */ Static),
/* harmony export */   "Suspense": () => (/* binding */ Suspense),
/* harmony export */   "Teleport": () => (/* binding */ Teleport),
/* harmony export */   "Text": () => (/* binding */ Text),
/* harmony export */   "callWithAsyncErrorHandling": () => (/* binding */ callWithAsyncErrorHandling),
/* harmony export */   "callWithErrorHandling": () => (/* binding */ callWithErrorHandling),
/* harmony export */   "cloneVNode": () => (/* binding */ cloneVNode),
/* harmony export */   "compatUtils": () => (/* binding */ compatUtils),
/* harmony export */   "computed": () => (/* binding */ computed),
/* harmony export */   "createBlock": () => (/* binding */ createBlock),
/* harmony export */   "createCommentVNode": () => (/* binding */ createCommentVNode),
/* harmony export */   "createHydrationRenderer": () => (/* binding */ createHydrationRenderer),
/* harmony export */   "createRenderer": () => (/* binding */ createRenderer),
/* harmony export */   "createSlots": () => (/* binding */ createSlots),
/* harmony export */   "createStaticVNode": () => (/* binding */ createStaticVNode),
/* harmony export */   "createTextVNode": () => (/* binding */ createTextVNode),
/* harmony export */   "createVNode": () => (/* binding */ createVNode),
/* harmony export */   "defineAsyncComponent": () => (/* binding */ defineAsyncComponent),
/* harmony export */   "defineComponent": () => (/* binding */ defineComponent),
/* harmony export */   "defineEmit": () => (/* binding */ defineEmit),
/* harmony export */   "defineEmits": () => (/* binding */ defineEmits),
/* harmony export */   "defineExpose": () => (/* binding */ defineExpose),
/* harmony export */   "defineProps": () => (/* binding */ defineProps),
/* harmony export */   "devtools": () => (/* binding */ devtools),
/* harmony export */   "getCurrentInstance": () => (/* binding */ getCurrentInstance),
/* harmony export */   "getTransitionRawChildren": () => (/* binding */ getTransitionRawChildren),
/* harmony export */   "h": () => (/* binding */ h),
/* harmony export */   "handleError": () => (/* binding */ handleError),
/* harmony export */   "initCustomFormatter": () => (/* binding */ initCustomFormatter),
/* harmony export */   "inject": () => (/* binding */ inject),
/* harmony export */   "isRuntimeOnly": () => (/* binding */ isRuntimeOnly),
/* harmony export */   "isVNode": () => (/* binding */ isVNode),
/* harmony export */   "mergeDefaults": () => (/* binding */ mergeDefaults),
/* harmony export */   "mergeProps": () => (/* binding */ mergeProps),
/* harmony export */   "nextTick": () => (/* binding */ nextTick),
/* harmony export */   "onActivated": () => (/* binding */ onActivated),
/* harmony export */   "onBeforeMount": () => (/* binding */ onBeforeMount),
/* harmony export */   "onBeforeUnmount": () => (/* binding */ onBeforeUnmount),
/* harmony export */   "onBeforeUpdate": () => (/* binding */ onBeforeUpdate),
/* harmony export */   "onDeactivated": () => (/* binding */ onDeactivated),
/* harmony export */   "onErrorCaptured": () => (/* binding */ onErrorCaptured),
/* harmony export */   "onMounted": () => (/* binding */ onMounted),
/* harmony export */   "onRenderTracked": () => (/* binding */ onRenderTracked),
/* harmony export */   "onRenderTriggered": () => (/* binding */ onRenderTriggered),
/* harmony export */   "onServerPrefetch": () => (/* binding */ onServerPrefetch),
/* harmony export */   "onUnmounted": () => (/* binding */ onUnmounted),
/* harmony export */   "onUpdated": () => (/* binding */ onUpdated),
/* harmony export */   "openBlock": () => (/* binding */ openBlock),
/* harmony export */   "popScopeId": () => (/* binding */ popScopeId),
/* harmony export */   "provide": () => (/* binding */ provide),
/* harmony export */   "pushScopeId": () => (/* binding */ pushScopeId),
/* harmony export */   "queuePostFlushCb": () => (/* binding */ queuePostFlushCb),
/* harmony export */   "registerRuntimeCompiler": () => (/* binding */ registerRuntimeCompiler),
/* harmony export */   "renderList": () => (/* binding */ renderList),
/* harmony export */   "renderSlot": () => (/* binding */ renderSlot),
/* harmony export */   "resolveComponent": () => (/* binding */ resolveComponent),
/* harmony export */   "resolveDirective": () => (/* binding */ resolveDirective),
/* harmony export */   "resolveDynamicComponent": () => (/* binding */ resolveDynamicComponent),
/* harmony export */   "resolveFilter": () => (/* binding */ resolveFilter),
/* harmony export */   "resolveTransitionHooks": () => (/* binding */ resolveTransitionHooks),
/* harmony export */   "setBlockTracking": () => (/* binding */ setBlockTracking),
/* harmony export */   "setDevtoolsHook": () => (/* binding */ setDevtoolsHook),
/* harmony export */   "setTransitionHooks": () => (/* binding */ setTransitionHooks),
/* harmony export */   "ssrContextKey": () => (/* binding */ ssrContextKey),
/* harmony export */   "ssrUtils": () => (/* binding */ ssrUtils),
/* harmony export */   "toHandlers": () => (/* binding */ toHandlers),
/* harmony export */   "transformVNodeArgs": () => (/* binding */ transformVNodeArgs),
/* harmony export */   "useAttrs": () => (/* binding */ useAttrs),
/* harmony export */   "useContext": () => (/* binding */ useContext),
/* harmony export */   "useSSRContext": () => (/* binding */ useSSRContext),
/* harmony export */   "useSlots": () => (/* binding */ useSlots),
/* harmony export */   "useTransitionState": () => (/* binding */ useTransitionState),
/* harmony export */   "version": () => (/* binding */ version),
/* harmony export */   "warn": () => (/* binding */ warn),
/* harmony export */   "watch": () => (/* binding */ watch),
/* harmony export */   "watchEffect": () => (/* binding */ watchEffect),
/* harmony export */   "withAsyncContext": () => (/* binding */ withAsyncContext),
/* harmony export */   "withCtx": () => (/* binding */ withCtx),
/* harmony export */   "withDefaults": () => (/* binding */ withDefaults),
/* harmony export */   "withDirectives": () => (/* binding */ withDirectives),
/* harmony export */   "withScopeId": () => (/* binding */ withScopeId)
/* harmony export */ });
/* harmony import */ var _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/reactivity */ "./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js");
/* harmony import */ var _vue_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/shared */ "./node_modules/@vue/shared/dist/shared.esm-bundler.js");
var _ErrorTypeStrings, _deprecationData;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }





var stack = [];

function pushWarningContext(vnode) {
  stack.push(vnode);
}

function popWarningContext() {
  stack.pop();
}

function warn(msg) {
  // avoid props formatting or warn handler tracking deps that might be mutated
  // during patch, leading to infinite recursion.
  (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.pauseTracking)();
  var instance = stack.length ? stack[stack.length - 1].component : null;
  var appWarnHandler = instance && instance.appContext.config.warnHandler;
  var trace = getComponentTrace();

  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  if (appWarnHandler) {
    callWithErrorHandling(appWarnHandler, instance, 11
    /* APP_WARN_HANDLER */
    , [msg + args.join(''), instance && instance.proxy, trace.map(function (_ref) {
      var vnode = _ref.vnode;
      return "at <".concat(formatComponentName(instance, vnode.type), ">");
    }).join('\n'), trace]);
  } else {
    var _console;

    var warnArgs = ["[Vue warn]: ".concat(msg)].concat(args);
    /* istanbul ignore if */

    if (trace.length && // avoid spamming console during tests
    !false) {
      warnArgs.push.apply(warnArgs, ["\n"].concat(_toConsumableArray(formatTrace(trace))));
    }

    (_console = console).warn.apply(_console, _toConsumableArray(warnArgs));
  }

  (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.resetTracking)();
}

function getComponentTrace() {
  var currentVNode = stack[stack.length - 1];

  if (!currentVNode) {
    return [];
  } // we can't just use the stack because it will be incomplete during updates
  // that did not start from the root. Re-construct the parent chain using
  // instance parent pointers.


  var normalizedStack = [];

  while (currentVNode) {
    var last = normalizedStack[0];

    if (last && last.vnode === currentVNode) {
      last.recurseCount++;
    } else {
      normalizedStack.push({
        vnode: currentVNode,
        recurseCount: 0
      });
    }

    var parentInstance = currentVNode.component && currentVNode.component.parent;
    currentVNode = parentInstance && parentInstance.vnode;
  }

  return normalizedStack;
}
/* istanbul ignore next */


function formatTrace(trace) {
  var logs = [];
  trace.forEach(function (entry, i) {
    logs.push.apply(logs, _toConsumableArray(i === 0 ? [] : ["\n"]).concat(_toConsumableArray(formatTraceEntry(entry))));
  });
  return logs;
}

function formatTraceEntry(_ref2) {
  var vnode = _ref2.vnode,
      recurseCount = _ref2.recurseCount;
  var postfix = recurseCount > 0 ? "... (".concat(recurseCount, " recursive calls)") : "";
  var isRoot = vnode.component ? vnode.component.parent == null : false;
  var open = " at <".concat(formatComponentName(vnode.component, vnode.type, isRoot));
  var close = ">" + postfix;
  return vnode.props ? [open].concat(_toConsumableArray(formatProps(vnode.props)), [close]) : [open + close];
}
/* istanbul ignore next */


function formatProps(props) {
  var res = [];
  var keys = Object.keys(props);
  keys.slice(0, 3).forEach(function (key) {
    res.push.apply(res, _toConsumableArray(formatProp(key, props[key])));
  });

  if (keys.length > 3) {
    res.push(" ...");
  }

  return res;
}
/* istanbul ignore next */


function formatProp(key, value, raw) {
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(value)) {
    value = JSON.stringify(value);
    return raw ? value : ["".concat(key, "=").concat(value)];
  } else if (typeof value === 'number' || typeof value === 'boolean' || value == null) {
    return raw ? value : ["".concat(key, "=").concat(value)];
  } else if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isRef)(value)) {
    value = formatProp(key, (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw)(value.value), true);
    return raw ? value : ["".concat(key, "=Ref<"), value, ">"];
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(value)) {
    return ["".concat(key, "=fn").concat(value.name ? "<".concat(value.name, ">") : "")];
  } else {
    value = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw)(value);
    return raw ? value : ["".concat(key, "="), value];
  }
}

var ErrorTypeStrings = (_ErrorTypeStrings = {}, _defineProperty(_ErrorTypeStrings, "sp"
/* SERVER_PREFETCH */
, 'serverPrefetch hook'), _defineProperty(_ErrorTypeStrings, "bc"
/* BEFORE_CREATE */
, 'beforeCreate hook'), _defineProperty(_ErrorTypeStrings, "c"
/* CREATED */
, 'created hook'), _defineProperty(_ErrorTypeStrings, "bm"
/* BEFORE_MOUNT */
, 'beforeMount hook'), _defineProperty(_ErrorTypeStrings, "m"
/* MOUNTED */
, 'mounted hook'), _defineProperty(_ErrorTypeStrings, "bu"
/* BEFORE_UPDATE */
, 'beforeUpdate hook'), _defineProperty(_ErrorTypeStrings, "u"
/* UPDATED */
, 'updated'), _defineProperty(_ErrorTypeStrings, "bum"
/* BEFORE_UNMOUNT */
, 'beforeUnmount hook'), _defineProperty(_ErrorTypeStrings, "um"
/* UNMOUNTED */
, 'unmounted hook'), _defineProperty(_ErrorTypeStrings, "a"
/* ACTIVATED */
, 'activated hook'), _defineProperty(_ErrorTypeStrings, "da"
/* DEACTIVATED */
, 'deactivated hook'), _defineProperty(_ErrorTypeStrings, "ec"
/* ERROR_CAPTURED */
, 'errorCaptured hook'), _defineProperty(_ErrorTypeStrings, "rtc"
/* RENDER_TRACKED */
, 'renderTracked hook'), _defineProperty(_ErrorTypeStrings, "rtg"
/* RENDER_TRIGGERED */
, 'renderTriggered hook'), _defineProperty(_ErrorTypeStrings, 0
/* SETUP_FUNCTION */
, 'setup function'), _defineProperty(_ErrorTypeStrings, 1
/* RENDER_FUNCTION */
, 'render function'), _defineProperty(_ErrorTypeStrings, 2
/* WATCH_GETTER */
, 'watcher getter'), _defineProperty(_ErrorTypeStrings, 3
/* WATCH_CALLBACK */
, 'watcher callback'), _defineProperty(_ErrorTypeStrings, 4
/* WATCH_CLEANUP */
, 'watcher cleanup function'), _defineProperty(_ErrorTypeStrings, 5
/* NATIVE_EVENT_HANDLER */
, 'native event handler'), _defineProperty(_ErrorTypeStrings, 6
/* COMPONENT_EVENT_HANDLER */
, 'component event handler'), _defineProperty(_ErrorTypeStrings, 7
/* VNODE_HOOK */
, 'vnode hook'), _defineProperty(_ErrorTypeStrings, 8
/* DIRECTIVE_HOOK */
, 'directive hook'), _defineProperty(_ErrorTypeStrings, 9
/* TRANSITION_HOOK */
, 'transition hook'), _defineProperty(_ErrorTypeStrings, 10
/* APP_ERROR_HANDLER */
, 'app errorHandler'), _defineProperty(_ErrorTypeStrings, 11
/* APP_WARN_HANDLER */
, 'app warnHandler'), _defineProperty(_ErrorTypeStrings, 12
/* FUNCTION_REF */
, 'ref function'), _defineProperty(_ErrorTypeStrings, 13
/* ASYNC_COMPONENT_LOADER */
, 'async component loader'), _defineProperty(_ErrorTypeStrings, 14
/* SCHEDULER */
, 'scheduler flush. This is likely a Vue internals bug. ' + 'Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/vue-next'), _ErrorTypeStrings);

function callWithErrorHandling(fn, instance, type, args) {
  var res;

  try {
    res = args ? fn.apply(void 0, _toConsumableArray(args)) : fn();
  } catch (err) {
    handleError(err, instance, type);
  }

  return res;
}

function callWithAsyncErrorHandling(fn, instance, type, args) {
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(fn)) {
    var res = callWithErrorHandling(fn, instance, type, args);

    if (res && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isPromise)(res)) {
      res["catch"](function (err) {
        handleError(err, instance, type);
      });
    }

    return res;
  }

  var values = [];

  for (var i = 0; i < fn.length; i++) {
    values.push(callWithAsyncErrorHandling(fn[i], instance, type, args));
  }

  return values;
}

function handleError(err, instance, type) {
  var throwInDev = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  var contextVNode = instance ? instance.vnode : null;

  if (instance) {
    var cur = instance.parent; // the exposed instance is the render proxy to keep it consistent with 2.x

    var exposedInstance = instance.proxy; // in production the hook receives only the error code

    var errorInfo =  true ? ErrorTypeStrings[type] : 0;

    while (cur) {
      var errorCapturedHooks = cur.ec;

      if (errorCapturedHooks) {
        for (var i = 0; i < errorCapturedHooks.length; i++) {
          if (errorCapturedHooks[i](err, exposedInstance, errorInfo) === false) {
            return;
          }
        }
      }

      cur = cur.parent;
    } // app-level handling


    var appErrorHandler = instance.appContext.config.errorHandler;

    if (appErrorHandler) {
      callWithErrorHandling(appErrorHandler, null, 10
      /* APP_ERROR_HANDLER */
      , [err, exposedInstance, errorInfo]);
      return;
    }
  }

  logError(err, type, contextVNode, throwInDev);
}

function logError(err, type, contextVNode) {
  var throwInDev = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

  if (true) {
    var info = ErrorTypeStrings[type];

    if (contextVNode) {
      pushWarningContext(contextVNode);
    }

    warn("Unhandled error".concat(info ? " during execution of ".concat(info) : ""));

    if (contextVNode) {
      popWarningContext();
    } // crash in dev by default so it's more noticeable


    if (throwInDev) {
      throw err;
    } else {
      console.error(err);
    }
  } else {}
}

var isFlushing = false;
var isFlushPending = false;
var queue = [];
var flushIndex = 0;
var pendingPreFlushCbs = [];
var activePreFlushCbs = null;
var preFlushIndex = 0;
var pendingPostFlushCbs = [];
var activePostFlushCbs = null;
var postFlushIndex = 0;
var resolvedPromise = Promise.resolve();
var currentFlushPromise = null;
var currentPreFlushParentJob = null;
var RECURSION_LIMIT = 100;

function nextTick(fn) {
  var p = currentFlushPromise || resolvedPromise;
  return fn ? p.then(this ? fn.bind(this) : fn) : p;
} // #2768
// Use binary-search to find a suitable position in the queue,
// so that the queue maintains the increasing order of job's id,
// which can prevent the job from being skipped and also can avoid repeated patching.


function findInsertionIndex(job) {
  // the start index should be `flushIndex + 1`
  var start = flushIndex + 1;
  var end = queue.length;
  var jobId = getId(job);

  while (start < end) {
    var middle = start + end >>> 1;
    var middleJobId = getId(queue[middle]);
    middleJobId < jobId ? start = middle + 1 : end = middle;
  }

  return start;
}

function queueJob(job) {
  // the dedupe search uses the startIndex argument of Array.includes()
  // by default the search index includes the current job that is being run
  // so it cannot recursively trigger itself again.
  // if the job is a watch() callback, the search will start with a +1 index to
  // allow it recursively trigger itself - it is the user's responsibility to
  // ensure it doesn't end up in an infinite loop.
  if ((!queue.length || !queue.includes(job, isFlushing && job.allowRecurse ? flushIndex + 1 : flushIndex)) && job !== currentPreFlushParentJob) {
    var pos = findInsertionIndex(job);

    if (pos > -1) {
      queue.splice(pos, 0, job);
    } else {
      queue.push(job);
    }

    queueFlush();
  }
}

function queueFlush() {
  if (!isFlushing && !isFlushPending) {
    isFlushPending = true;
    currentFlushPromise = resolvedPromise.then(flushJobs);
  }
}

function invalidateJob(job) {
  var i = queue.indexOf(job);

  if (i > flushIndex) {
    queue.splice(i, 1);
  }
}

function queueCb(cb, activeQueue, pendingQueue, index) {
  if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(cb)) {
    if (!activeQueue || !activeQueue.includes(cb, cb.allowRecurse ? index + 1 : index)) {
      pendingQueue.push(cb);
    }
  } else {
    // if cb is an array, it is a component lifecycle hook which can only be
    // triggered by a job, which is already deduped in the main queue, so
    // we can skip duplicate check here to improve perf
    pendingQueue.push.apply(pendingQueue, _toConsumableArray(cb));
  }

  queueFlush();
}

function queuePreFlushCb(cb) {
  queueCb(cb, activePreFlushCbs, pendingPreFlushCbs, preFlushIndex);
}

function queuePostFlushCb(cb) {
  queueCb(cb, activePostFlushCbs, pendingPostFlushCbs, postFlushIndex);
}

function flushPreFlushCbs(seen) {
  var parentJob = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  if (pendingPreFlushCbs.length) {
    currentPreFlushParentJob = parentJob;
    activePreFlushCbs = _toConsumableArray(new Set(pendingPreFlushCbs));
    pendingPreFlushCbs.length = 0;

    if (true) {
      seen = seen || new Map();
    }

    for (preFlushIndex = 0; preFlushIndex < activePreFlushCbs.length; preFlushIndex++) {
      if ( true && checkRecursiveUpdates(seen, activePreFlushCbs[preFlushIndex])) {
        continue;
      }

      activePreFlushCbs[preFlushIndex]();
    }

    activePreFlushCbs = null;
    preFlushIndex = 0;
    currentPreFlushParentJob = null; // recursively flush until it drains

    flushPreFlushCbs(seen, parentJob);
  }
}

function flushPostFlushCbs(seen) {
  if (pendingPostFlushCbs.length) {
    var deduped = _toConsumableArray(new Set(pendingPostFlushCbs));

    pendingPostFlushCbs.length = 0; // #1947 already has active queue, nested flushPostFlushCbs call

    if (activePostFlushCbs) {
      var _activePostFlushCbs;

      (_activePostFlushCbs = activePostFlushCbs).push.apply(_activePostFlushCbs, _toConsumableArray(deduped));

      return;
    }

    activePostFlushCbs = deduped;

    if (true) {
      seen = seen || new Map();
    }

    activePostFlushCbs.sort(function (a, b) {
      return getId(a) - getId(b);
    });

    for (postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++) {
      if ( true && checkRecursiveUpdates(seen, activePostFlushCbs[postFlushIndex])) {
        continue;
      }

      activePostFlushCbs[postFlushIndex]();
    }

    activePostFlushCbs = null;
    postFlushIndex = 0;
  }
}

var getId = function getId(job) {
  return job.id == null ? Infinity : job.id;
};

function flushJobs(seen) {
  isFlushPending = false;
  isFlushing = true;

  if (true) {
    seen = seen || new Map();
  }

  flushPreFlushCbs(seen); // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child so its render effect will have smaller
  //    priority number)
  // 2. If a component is unmounted during a parent component's update,
  //    its update can be skipped.

  queue.sort(function (a, b) {
    return getId(a) - getId(b);
  });

  try {
    for (flushIndex = 0; flushIndex < queue.length; flushIndex++) {
      var job = queue[flushIndex];

      if (job && job.active !== false) {
        if ( true && checkRecursiveUpdates(seen, job)) {
          continue;
        }

        callWithErrorHandling(job, null, 14
        /* SCHEDULER */
        );
      }
    }
  } finally {
    flushIndex = 0;
    queue.length = 0;
    flushPostFlushCbs(seen);
    isFlushing = false;
    currentFlushPromise = null; // some postFlushCb queued jobs!
    // keep flushing until it drains.

    if (queue.length || pendingPreFlushCbs.length || pendingPostFlushCbs.length) {
      flushJobs(seen);
    }
  }
}

function checkRecursiveUpdates(seen, fn) {
  if (!seen.has(fn)) {
    seen.set(fn, 1);
  } else {
    var count = seen.get(fn);

    if (count > RECURSION_LIMIT) {
      var instance = fn.ownerInstance;
      var componentName = instance && getComponentName(instance.type);
      warn("Maximum recursive updates exceeded".concat(componentName ? " in component <".concat(componentName, ">") : "", ". ") + "This means you have a reactive effect that is mutating its own " + "dependencies and thus recursively triggering itself. Possible sources " + "include component template, render function, updated hook or " + "watcher source function.");
      return true;
    } else {
      seen.set(fn, count + 1);
    }
  }
}
/* eslint-disable no-restricted-globals */


var isHmrUpdating = false;
var hmrDirtyComponents = new Set(); // Expose the HMR runtime on the global object
// This makes it entirely tree-shakable without polluting the exports and makes
// it easier to be used in toolings like vue-loader
// Note: for a component to be eligible for HMR it also needs the __hmrId option
// to be set so that its instances can be registered / removed.

if (true) {
  var globalObject = typeof __webpack_require__.g !== 'undefined' ? __webpack_require__.g : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : {};
  globalObject.__VUE_HMR_RUNTIME__ = {
    createRecord: tryWrap(createRecord),
    rerender: tryWrap(rerender),
    reload: tryWrap(reload)
  };
}

var map = new Map();

function registerHMR(instance) {
  var id = instance.type.__hmrId;
  var record = map.get(id);

  if (!record) {
    createRecord(id, instance.type);
    record = map.get(id);
  }

  record.instances.add(instance);
}

function unregisterHMR(instance) {
  map.get(instance.type.__hmrId).instances["delete"](instance);
}

function createRecord(id, component) {
  if (!component) {
    warn("HMR API usage is out of date.\n" + "Please upgrade vue-loader/vite/rollup-plugin-vue or other relevant " + "dependency that handles Vue SFC compilation.");
    component = {};
  }

  if (map.has(id)) {
    return false;
  }

  map.set(id, {
    component: isClassComponent(component) ? component.__vccOpts : component,
    instances: new Set()
  });
  return true;
}

function rerender(id, newRender) {
  var record = map.get(id);
  if (!record) return;
  if (newRender) record.component.render = newRender; // Array.from creates a snapshot which avoids the set being mutated during
  // updates

  Array.from(record.instances).forEach(function (instance) {
    if (newRender) {
      instance.render = newRender;
    }

    instance.renderCache = []; // this flag forces child components with slot content to update

    isHmrUpdating = true;
    instance.update();
    isHmrUpdating = false;
  });
}

function reload(id, newComp) {
  var record = map.get(id);
  if (!record) return; // Array.from creates a snapshot which avoids the set being mutated during
  // updates

  var component = record.component,
      instances = record.instances;

  if (!hmrDirtyComponents.has(component)) {
    // 1. Update existing comp definition to match new one
    newComp = isClassComponent(newComp) ? newComp.__vccOpts : newComp;
    (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(component, newComp);

    for (var key in component) {
      if (key !== '__file' && !(key in newComp)) {
        delete component[key];
      }
    } // 2. Mark component dirty. This forces the renderer to replace the component
    // on patch.


    hmrDirtyComponents.add(component); // 3. Make sure to unmark the component after the reload.

    queuePostFlushCb(function () {
      hmrDirtyComponents["delete"](component);
    });
  }

  Array.from(instances).forEach(function (instance) {
    if (instance.parent) {
      // 4. Force the parent instance to re-render. This will cause all updated
      // components to be unmounted and re-mounted. Queue the update so that we
      // don't end up forcing the same parent to re-render multiple times.
      queueJob(instance.parent.update);
    } else if (instance.appContext.reload) {
      // root instance mounted via createApp() has a reload method
      instance.appContext.reload();
    } else if (typeof window !== 'undefined') {
      // root instance inside tree created via raw render(). Force reload.
      window.location.reload();
    } else {
      console.warn('[HMR] Root or manually mounted instance modified. Full reload required.');
    }
  });
}

function tryWrap(fn) {
  return function (id, arg) {
    try {
      return fn(id, arg);
    } catch (e) {
      console.error(e);
      console.warn("[HMR] Something went wrong during Vue component hot-reload. " + "Full reload required.");
    }
  };
}

var devtools;

function setDevtoolsHook(hook) {
  devtools = hook;
}

function devtoolsInitApp(app, version) {
  // TODO queue if devtools is undefined
  if (!devtools) return;
  devtools.emit("app:init"
  /* APP_INIT */
  , app, version, {
    Fragment: Fragment,
    Text: Text,
    Comment: Comment$1,
    Static: Static
  });
}

function devtoolsUnmountApp(app) {
  if (!devtools) return;
  devtools.emit("app:unmount"
  /* APP_UNMOUNT */
  , app);
}

var devtoolsComponentAdded = /*#__PURE__*/createDevtoolsComponentHook("component:added"
/* COMPONENT_ADDED */
);
var devtoolsComponentUpdated = /*#__PURE__*/createDevtoolsComponentHook("component:updated"
/* COMPONENT_UPDATED */
);
var devtoolsComponentRemoved = /*#__PURE__*/createDevtoolsComponentHook("component:removed"
/* COMPONENT_REMOVED */
);

function createDevtoolsComponentHook(hook) {
  return function (component) {
    if (!devtools) return;
    devtools.emit(hook, component.appContext.app, component.uid, component.parent ? component.parent.uid : undefined, component);
  };
}

var devtoolsPerfStart = /*#__PURE__*/createDevtoolsPerformanceHook("perf:start"
/* PERFORMANCE_START */
);
var devtoolsPerfEnd = /*#__PURE__*/createDevtoolsPerformanceHook("perf:end"
/* PERFORMANCE_END */
);

function createDevtoolsPerformanceHook(hook) {
  return function (component, type, time) {
    if (!devtools) return;
    devtools.emit(hook, component.appContext.app, component.uid, component, type, time);
  };
}

function devtoolsComponentEmit(component, event, params) {
  if (!devtools) return;
  devtools.emit("component:emit"
  /* COMPONENT_EMIT */
  , component.appContext.app, component, event, params);
}

var deprecationData = (_deprecationData = {}, _defineProperty(_deprecationData, "GLOBAL_MOUNT"
/* GLOBAL_MOUNT */
, {
  message: "The global app bootstrapping API has changed: vm.$mount() and the \"el\" " + "option have been removed. Use createApp(RootComponent).mount() instead.",
  link: "https://v3.vuejs.org/guide/migration/global-api.html#mounting-app-instance"
}), _defineProperty(_deprecationData, "GLOBAL_MOUNT_CONTAINER"
/* GLOBAL_MOUNT_CONTAINER */
, {
  message: "Vue detected directives on the mount container. " + "In Vue 3, the container is no longer considered part of the template " + "and will not be processed/replaced.",
  link: "https://v3.vuejs.org/guide/migration/mount-changes.html"
}), _defineProperty(_deprecationData, "GLOBAL_EXTEND"
/* GLOBAL_EXTEND */
, {
  message: "Vue.extend() has been removed in Vue 3. " + "Use defineComponent() instead.",
  link: "https://v3.vuejs.org/api/global-api.html#definecomponent"
}), _defineProperty(_deprecationData, "GLOBAL_PROTOTYPE"
/* GLOBAL_PROTOTYPE */
, {
  message: "Vue.prototype is no longer available in Vue 3. " + "Use app.config.globalProperties instead.",
  link: "https://v3.vuejs.org/guide/migration/global-api.html#vue-prototype-replaced-by-config-globalproperties"
}), _defineProperty(_deprecationData, "GLOBAL_SET"
/* GLOBAL_SET */
, {
  message: "Vue.set() has been removed as it is no longer needed in Vue 3. " + "Simply use native JavaScript mutations."
}), _defineProperty(_deprecationData, "GLOBAL_DELETE"
/* GLOBAL_DELETE */
, {
  message: "Vue.delete() has been removed as it is no longer needed in Vue 3. " + "Simply use native JavaScript mutations."
}), _defineProperty(_deprecationData, "GLOBAL_OBSERVABLE"
/* GLOBAL_OBSERVABLE */
, {
  message: "Vue.observable() has been removed. " + "Use `import { reactive } from \"vue\"` from Composition API instead.",
  link: "https://v3.vuejs.org/api/basic-reactivity.html"
}), _defineProperty(_deprecationData, "GLOBAL_PRIVATE_UTIL"
/* GLOBAL_PRIVATE_UTIL */
, {
  message: "Vue.util has been removed. Please refactor to avoid its usage " + "since it was an internal API even in Vue 2."
}), _defineProperty(_deprecationData, "CONFIG_SILENT"
/* CONFIG_SILENT */
, {
  message: "config.silent has been removed because it is not good practice to " + "intentionally suppress warnings. You can use your browser console's " + "filter features to focus on relevant messages."
}), _defineProperty(_deprecationData, "CONFIG_DEVTOOLS"
/* CONFIG_DEVTOOLS */
, {
  message: "config.devtools has been removed. To enable devtools for " + "production, configure the __VUE_PROD_DEVTOOLS__ compile-time flag.",
  link: "https://github.com/vuejs/vue-next/tree/master/packages/vue#bundler-build-feature-flags"
}), _defineProperty(_deprecationData, "CONFIG_KEY_CODES"
/* CONFIG_KEY_CODES */
, {
  message: "config.keyCodes has been removed. " + "In Vue 3, you can directly use the kebab-case key names as v-on modifiers.",
  link: "https://v3.vuejs.org/guide/migration/keycode-modifiers.html"
}), _defineProperty(_deprecationData, "CONFIG_PRODUCTION_TIP"
/* CONFIG_PRODUCTION_TIP */
, {
  message: "config.productionTip has been removed.",
  link: "https://v3.vuejs.org/guide/migration/global-api.html#config-productiontip-removed"
}), _defineProperty(_deprecationData, "CONFIG_IGNORED_ELEMENTS"
/* CONFIG_IGNORED_ELEMENTS */
, {
  message: function message() {
    var msg = "config.ignoredElements has been removed.";

    if (isRuntimeOnly()) {
      msg += " Pass the \"isCustomElement\" option to @vue/compiler-dom instead.";
    } else {
      msg += " Use config.isCustomElement instead.";
    }

    return msg;
  },
  link: "https://v3.vuejs.org/guide/migration/global-api.html#config-ignoredelements-is-now-config-iscustomelement"
}), _defineProperty(_deprecationData, "CONFIG_WHITESPACE"
/* CONFIG_WHITESPACE */
, {
  // this warning is only relevant in the full build when using runtime
  // compilation, so it's put in the runtime compatConfig list.
  message: "Vue 3 compiler's whitespace option will default to \"condense\" instead of " + "\"preserve\". To suppress this warning, provide an explicit value for " + "`config.compilerOptions.whitespace`."
}), _defineProperty(_deprecationData, "CONFIG_OPTION_MERGE_STRATS"
/* CONFIG_OPTION_MERGE_STRATS */
, {
  message: "config.optionMergeStrategies no longer exposes internal strategies. " + "Use custom merge functions instead."
}), _defineProperty(_deprecationData, "INSTANCE_SET"
/* INSTANCE_SET */
, {
  message: "vm.$set() has been removed as it is no longer needed in Vue 3. " + "Simply use native JavaScript mutations."
}), _defineProperty(_deprecationData, "INSTANCE_DELETE"
/* INSTANCE_DELETE */
, {
  message: "vm.$delete() has been removed as it is no longer needed in Vue 3. " + "Simply use native JavaScript mutations."
}), _defineProperty(_deprecationData, "INSTANCE_DESTROY"
/* INSTANCE_DESTROY */
, {
  message: "vm.$destroy() has been removed. Use app.unmount() instead.",
  link: "https://v3.vuejs.org/api/application-api.html#unmount"
}), _defineProperty(_deprecationData, "INSTANCE_EVENT_EMITTER"
/* INSTANCE_EVENT_EMITTER */
, {
  message: "vm.$on/$once/$off() have been removed. " + "Use an external event emitter library instead.",
  link: "https://v3.vuejs.org/guide/migration/events-api.html"
}), _defineProperty(_deprecationData, "INSTANCE_EVENT_HOOKS"
/* INSTANCE_EVENT_HOOKS */
, {
  message: function message(event) {
    return "\"".concat(event, "\" lifecycle events are no longer supported. From templates, ") + "use the \"vnode\" prefix instead of \"hook:\". For example, @".concat(event, " ") + "should be changed to @vnode-".concat(event.slice(5), ". ") + "From JavaScript, use Composition API to dynamically register lifecycle " + "hooks.";
  },
  link: "https://v3.vuejs.org/guide/migration/vnode-lifecycle-events.html"
}), _defineProperty(_deprecationData, "INSTANCE_CHILDREN"
/* INSTANCE_CHILDREN */
, {
  message: "vm.$children has been removed. Consider refactoring your logic " + "to avoid relying on direct access to child components.",
  link: "https://v3.vuejs.org/guide/migration/children.html"
}), _defineProperty(_deprecationData, "INSTANCE_LISTENERS"
/* INSTANCE_LISTENERS */
, {
  message: "vm.$listeners has been removed. In Vue 3, parent v-on listeners are " + "included in vm.$attrs and it is no longer necessary to separately use " + "v-on=\"$listeners\" if you are already using v-bind=\"$attrs\". " + "(Note: the Vue 3 behavior only applies if this compat config is disabled)",
  link: "https://v3.vuejs.org/guide/migration/listeners-removed.html"
}), _defineProperty(_deprecationData, "INSTANCE_SCOPED_SLOTS"
/* INSTANCE_SCOPED_SLOTS */
, {
  message: "vm.$scopedSlots has been removed. Use vm.$slots instead.",
  link: "https://v3.vuejs.org/guide/migration/slots-unification.html"
}), _defineProperty(_deprecationData, "INSTANCE_ATTRS_CLASS_STYLE"
/* INSTANCE_ATTRS_CLASS_STYLE */
, {
  message: function message(componentName) {
    return "Component <".concat(componentName || 'Anonymous', "> has `inheritAttrs: false` but is ") + "relying on class/style fallthrough from parent. In Vue 3, class/style " + "are now included in $attrs and will no longer fallthrough when " + "inheritAttrs is false. If you are already using v-bind=\"$attrs\" on " + "component root it should render the same end result. " + "If you are binding $attrs to a non-root element and expecting " + "class/style to fallthrough on root, you will need to now manually bind " + "them on root via :class=\"$attrs.class\".";
  },
  link: "https://v3.vuejs.org/guide/migration/attrs-includes-class-style.html"
}), _defineProperty(_deprecationData, "OPTIONS_DATA_FN"
/* OPTIONS_DATA_FN */
, {
  message: "The \"data\" option can no longer be a plain object. " + "Always use a function.",
  link: "https://v3.vuejs.org/guide/migration/data-option.html"
}), _defineProperty(_deprecationData, "OPTIONS_DATA_MERGE"
/* OPTIONS_DATA_MERGE */
, {
  message: function message(key) {
    return "Detected conflicting key \"".concat(key, "\" when merging data option values. ") + "In Vue 3, data keys are merged shallowly and will override one another.";
  },
  link: "https://v3.vuejs.org/guide/migration/data-option.html#mixin-merge-behavior-change"
}), _defineProperty(_deprecationData, "OPTIONS_BEFORE_DESTROY"
/* OPTIONS_BEFORE_DESTROY */
, {
  message: "`beforeDestroy` has been renamed to `beforeUnmount`."
}), _defineProperty(_deprecationData, "OPTIONS_DESTROYED"
/* OPTIONS_DESTROYED */
, {
  message: "`destroyed` has been renamed to `unmounted`."
}), _defineProperty(_deprecationData, "WATCH_ARRAY"
/* WATCH_ARRAY */
, {
  message: "\"watch\" option or vm.$watch on an array value will no longer " + "trigger on array mutation unless the \"deep\" option is specified. " + "If current usage is intended, you can disable the compat behavior and " + "suppress this warning with:" + "\n\n  configureCompat({ ".concat("WATCH_ARRAY"
  /* WATCH_ARRAY */
  , ": false })\n"),
  link: "https://v3.vuejs.org/guide/migration/watch.html"
}), _defineProperty(_deprecationData, "PROPS_DEFAULT_THIS"
/* PROPS_DEFAULT_THIS */
, {
  message: function message(key) {
    return "props default value function no longer has access to \"this\". The compat " + "build only offers access to this.$options." + "(found in prop \"".concat(key, "\")");
  },
  link: "https://v3.vuejs.org/guide/migration/props-default-this.html"
}), _defineProperty(_deprecationData, "CUSTOM_DIR"
/* CUSTOM_DIR */
, {
  message: function message(legacyHook, newHook) {
    return "Custom directive hook \"".concat(legacyHook, "\" has been removed. ") + "Use \"".concat(newHook, "\" instead.");
  },
  link: "https://v3.vuejs.org/guide/migration/custom-directives.html"
}), _defineProperty(_deprecationData, "V_FOR_REF"
/* V_FOR_REF */
, {
  message: "Ref usage on v-for no longer creates array ref values in Vue 3. " + "Consider using function refs or refactor to avoid ref usage altogether.",
  link: "https://v3.vuejs.org/guide/migration/array-refs.html"
}), _defineProperty(_deprecationData, "V_ON_KEYCODE_MODIFIER"
/* V_ON_KEYCODE_MODIFIER */
, {
  message: "Using keyCode as v-on modifier is no longer supported. " + "Use kebab-case key name modifiers instead.",
  link: "https://v3.vuejs.org/guide/migration/keycode-modifiers.html"
}), _defineProperty(_deprecationData, "ATTR_FALSE_VALUE"
/* ATTR_FALSE_VALUE */
, {
  message: function message(name) {
    return "Attribute \"".concat(name, "\" with v-bind value `false` will render ") + "".concat(name, "=\"false\" instead of removing it in Vue 3. To remove the attribute, ") + "use `null` or `undefined` instead. If the usage is intended, " + "you can disable the compat behavior and suppress this warning with:" + "\n\n  configureCompat({ ".concat("ATTR_FALSE_VALUE"
    /* ATTR_FALSE_VALUE */
    , ": false })\n");
  },
  link: "https://v3.vuejs.org/guide/migration/attribute-coercion.html"
}), _defineProperty(_deprecationData, "ATTR_ENUMERATED_COERCION"
/* ATTR_ENUMERATED_COERCION */
, {
  message: function message(name, value, coerced) {
    return "Enumerated attribute \"".concat(name, "\" with v-bind value `").concat(value, "` will ") + "".concat(value === null ? "be removed" : "render the value as-is", " instead of coercing the value to \"").concat(coerced, "\" in Vue 3. ") + "Always use explicit \"true\" or \"false\" values for enumerated attributes. " + "If the usage is intended, " + "you can disable the compat behavior and suppress this warning with:" + "\n\n  configureCompat({ ".concat("ATTR_ENUMERATED_COERCION"
    /* ATTR_ENUMERATED_COERCION */
    , ": false })\n");
  },
  link: "https://v3.vuejs.org/guide/migration/attribute-coercion.html"
}), _defineProperty(_deprecationData, "TRANSITION_CLASSES"
/* TRANSITION_CLASSES */
, {
  message: "" // this feature cannot be runtime-detected

}), _defineProperty(_deprecationData, "TRANSITION_GROUP_ROOT"
/* TRANSITION_GROUP_ROOT */
, {
  message: "<TransitionGroup> no longer renders a root <span> element by " + "default if no \"tag\" prop is specified. If you do not rely on the span " + "for styling, you can disable the compat behavior and suppress this " + "warning with:" + "\n\n  configureCompat({ ".concat("TRANSITION_GROUP_ROOT"
  /* TRANSITION_GROUP_ROOT */
  , ": false })\n"),
  link: "https://v3.vuejs.org/guide/migration/transition-group.html"
}), _defineProperty(_deprecationData, "COMPONENT_ASYNC"
/* COMPONENT_ASYNC */
, {
  message: function message(comp) {
    var name = getComponentName(comp);
    return "Async component".concat(name ? " <".concat(name, ">") : "s", " should be explicitly created via `defineAsyncComponent()` ") + "in Vue 3. Plain functions will be treated as functional components in " + "non-compat build. If you have already migrated all async component " + "usage and intend to use plain functions for functional components, " + "you can disable the compat behavior and suppress this " + "warning with:" + "\n\n  configureCompat({ ".concat("COMPONENT_ASYNC"
    /* COMPONENT_ASYNC */
    , ": false })\n");
  },
  link: "https://v3.vuejs.org/guide/migration/async-components.html"
}), _defineProperty(_deprecationData, "COMPONENT_FUNCTIONAL"
/* COMPONENT_FUNCTIONAL */
, {
  message: function message(comp) {
    var name = getComponentName(comp);
    return "Functional component".concat(name ? " <".concat(name, ">") : "s", " should be defined as a plain function in Vue 3. The \"functional\" ") + "option has been removed. NOTE: Before migrating to use plain " + "functions for functional components, first make sure that all async " + "components usage have been migrated and its compat behavior has " + "been disabled.";
  },
  link: "https://v3.vuejs.org/guide/migration/functional-components.html"
}), _defineProperty(_deprecationData, "COMPONENT_V_MODEL"
/* COMPONENT_V_MODEL */
, {
  message: function message(comp) {
    var configMsg = "opt-in to " + "Vue 3 behavior on a per-component basis with `compatConfig: { ".concat("COMPONENT_V_MODEL"
    /* COMPONENT_V_MODEL */
    , ": false }`.");

    if (comp.props && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(comp.props) ? comp.props.includes('modelValue') : (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(comp.props, 'modelValue')) {
      return "Component delcares \"modelValue\" prop, which is Vue 3 usage, but " + "is running under Vue 2 compat v-model behavior. You can ".concat(configMsg);
    }

    return "v-model usage on component has changed in Vue 3. Component that expects " + "to work with v-model should now use the \"modelValue\" prop and emit the " + "\"update:modelValue\" event. You can update the usage and then ".concat(configMsg);
  },
  link: "https://v3.vuejs.org/guide/migration/v-model.html"
}), _defineProperty(_deprecationData, "RENDER_FUNCTION"
/* RENDER_FUNCTION */
, {
  message: "Vue 3's render function API has changed. " + "You can opt-in to the new API with:" + "\n\n  configureCompat({ ".concat("RENDER_FUNCTION"
  /* RENDER_FUNCTION */
  , ": false })\n") + "\n  (This can also be done per-component via the \"compatConfig\" option.)",
  link: "https://v3.vuejs.org/guide/migration/render-function-api.html"
}), _defineProperty(_deprecationData, "FILTERS"
/* FILTERS */
, {
  message: "filters have been removed in Vue 3. " + "The \"|\" symbol will be treated as native JavaScript bitwise OR operator. " + "Use method calls or computed properties instead.",
  link: "https://v3.vuejs.org/guide/migration/filters.html"
}), _defineProperty(_deprecationData, "PRIVATE_APIS"
/* PRIVATE_APIS */
, {
  message: function message(name) {
    return "\"".concat(name, "\" is a Vue 2 private API that no longer exists in Vue 3. ") + "If you are seeing this warning only due to a dependency, you can " + "suppress this warning via { PRIVATE_APIS: 'supress-warning' }.";
  }
}), _deprecationData);
var instanceWarned = Object.create(null);
var warnCount = Object.create(null);

function warnDeprecation(key, instance) {
  if (false) {}

  instance = instance || getCurrentInstance(); // check user config

  var config = getCompatConfigForKey(key, instance);

  if (config === 'suppress-warning') {
    return;
  }

  for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
    args[_key2 - 2] = arguments[_key2];
  }

  var dupKey = key + args.join('');
  var compId = instance && formatComponentName(instance, instance.type);

  if (compId === 'Anonymous' && instance) {
    compId = instance.uid;
  } // skip if the same warning is emitted for the same component type


  var componentDupKey = dupKey + compId;

  if (componentDupKey in instanceWarned) {
    return;
  }

  instanceWarned[componentDupKey] = true; // same warning, but different component. skip the long message and just
  // log the key and count.

  if (dupKey in warnCount) {
    warn("(deprecation ".concat(key, ") (").concat(++warnCount[dupKey] + 1, ")"));
    return;
  }

  warnCount[dupKey] = 0;
  var _deprecationData$key = deprecationData[key],
      message = _deprecationData$key.message,
      link = _deprecationData$key.link;
  warn("(deprecation ".concat(key, ") ").concat(typeof message === 'function' ? message.apply(void 0, args) : message).concat(link ? "\n  Details: ".concat(link) : ""));

  if (!isCompatEnabled(key, instance, true)) {
    console.error("^ The above deprecation's compat behavior is disabled and will likely " + "lead to runtime errors.");
  }
}

var globalCompatConfig = {
  MODE: 2
};

function getCompatConfigForKey(key, instance) {
  var instanceConfig = instance && instance.type.compatConfig;

  if (instanceConfig && key in instanceConfig) {
    return instanceConfig[key];
  }

  return globalCompatConfig[key];
}

function isCompatEnabled(key, instance) {
  var enableForBuiltIn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  // skip compat for built-in components
  if (!enableForBuiltIn && instance && instance.type.__isBuiltIn) {
    return false;
  }

  var rawMode = getCompatConfigForKey('MODE', instance) || 2;
  var val = getCompatConfigForKey(key, instance);
  var mode = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(rawMode) ? rawMode(instance && instance.type) : rawMode;

  if (mode === 2) {
    return val !== false;
  } else {
    return val === true || val === 'suppress-warning';
  }
}

function emit(instance, event) {
  var props = instance.vnode.props || _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ;

  for (var _len3 = arguments.length, rawArgs = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
    rawArgs[_key3 - 2] = arguments[_key3];
  }

  if (true) {
    var emitsOptions = instance.emitsOptions,
        _instance$propsOption = _slicedToArray(instance.propsOptions, 1),
        propsOptions = _instance$propsOption[0];

    if (emitsOptions) {
      if (!(event in emitsOptions) && !false) {
        if (!propsOptions || !((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toHandlerKey)(event) in propsOptions)) {
          warn("Component emitted event \"".concat(event, "\" but it is neither declared in ") + "the emits option nor as an \"".concat((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toHandlerKey)(event), "\" prop."));
        }
      } else {
        var validator = emitsOptions[event];

        if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(validator)) {
          var isValid = validator.apply(void 0, rawArgs);

          if (!isValid) {
            warn("Invalid event arguments: event validation failed for event \"".concat(event, "\"."));
          }
        }
      }
    }
  }

  var args = rawArgs;
  var isModelListener = event.startsWith('update:'); // for v-model update:xxx events, apply modifiers on args

  var modelArg = isModelListener && event.slice(7);

  if (modelArg && modelArg in props) {
    var modifiersKey = "".concat(modelArg === 'modelValue' ? 'model' : modelArg, "Modifiers");

    var _ref3 = props[modifiersKey] || _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ,
        number = _ref3.number,
        trim = _ref3.trim;

    if (trim) {
      args = rawArgs.map(function (a) {
        return a.trim();
      });
    } else if (number) {
      args = rawArgs.map(_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toNumber);
    }
  }

  if (true) {
    devtoolsComponentEmit(instance, event, args);
  }

  if (true) {
    var lowerCaseEvent = event.toLowerCase();

    if (lowerCaseEvent !== event && props[(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toHandlerKey)(lowerCaseEvent)]) {
      warn("Event \"".concat(lowerCaseEvent, "\" is emitted in component ") + "".concat(formatComponentName(instance, instance.type), " but the handler is registered for \"").concat(event, "\". ") + "Note that HTML attributes are case-insensitive and you cannot use " + "v-on to listen to camelCase events when using in-DOM templates. " + "You should probably use \"".concat((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(event), "\" instead of \"").concat(event, "\"."));
    }
  }

  var handlerName;
  var handler = props[handlerName = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toHandlerKey)(event)] || // also try camelCase event handler (#2249)
  props[handlerName = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toHandlerKey)((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(event))]; // for v-model update:xxx events, also trigger kebab-case equivalent
  // for props passed via kebab-case

  if (!handler && isModelListener) {
    handler = props[handlerName = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toHandlerKey)((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(event))];
  }

  if (handler) {
    callWithAsyncErrorHandling(handler, instance, 6
    /* COMPONENT_EVENT_HANDLER */
    , args);
  }

  var onceHandler = props[handlerName + "Once"];

  if (onceHandler) {
    if (!instance.emitted) {
      instance.emitted = {};
    } else if (instance.emitted[handlerName]) {
      return;
    }

    instance.emitted[handlerName] = true;
    callWithAsyncErrorHandling(onceHandler, instance, 6
    /* COMPONENT_EVENT_HANDLER */
    , args);
  }
}

function normalizeEmitsOptions(comp, appContext) {
  var asMixin = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var cache = appContext.emitsCache;
  var cached = cache.get(comp);

  if (cached !== undefined) {
    return cached;
  }

  var raw = comp.emits;
  var normalized = {}; // apply mixin/extends props

  var hasExtends = false;

  if ( true && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(comp)) {
    var extendEmits = function extendEmits(raw) {
      var normalizedFromExtend = normalizeEmitsOptions(raw, appContext, true);

      if (normalizedFromExtend) {
        hasExtends = true;
        (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(normalized, normalizedFromExtend);
      }
    };

    if (!asMixin && appContext.mixins.length) {
      appContext.mixins.forEach(extendEmits);
    }

    if (comp["extends"]) {
      extendEmits(comp["extends"]);
    }

    if (comp.mixins) {
      comp.mixins.forEach(extendEmits);
    }
  }

  if (!raw && !hasExtends) {
    cache.set(comp, null);
    return null;
  }

  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(raw)) {
    raw.forEach(function (key) {
      return normalized[key] = null;
    });
  } else {
    (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(normalized, raw);
  }

  cache.set(comp, normalized);
  return normalized;
} // Check if an incoming prop key is a declared emit event listener.
// e.g. With `emits: { click: null }`, props named `onClick` and `onclick` are
// both considered matched listeners.


function isEmitListener(options, key) {
  if (!options || !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isOn)(key)) {
    return false;
  }

  key = key.slice(2).replace(/Once$/, '');
  return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(options, key[0].toLowerCase() + key.slice(1)) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(options, (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(key)) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(options, key);
}
/**
 * mark the current rendering instance for asset resolution (e.g.
 * resolveComponent, resolveDirective) during render
 */


var currentRenderingInstance = null;
var currentScopeId = null;
/**
 * Note: rendering calls maybe nested. The function returns the parent rendering
 * instance if present, which should be restored after the render is done:
 *
 * ```js
 * const prev = setCurrentRenderingInstance(i)
 * // ...render
 * setCurrentRenderingInstance(prev)
 * ```
 */

function setCurrentRenderingInstance(instance) {
  var prev = currentRenderingInstance;
  currentRenderingInstance = instance;
  currentScopeId = instance && instance.type.__scopeId || null;
  return prev;
}
/**
 * Set scope id when creating hoisted vnodes.
 * @private compiler helper
 */


function pushScopeId(id) {
  currentScopeId = id;
}
/**
 * Technically we no longer need this after 3.0.8 but we need to keep the same
 * API for backwards compat w/ code generated by compilers.
 * @private
 */


function popScopeId() {
  currentScopeId = null;
}
/**
 * Only for backwards compat
 * @private
 */


var withScopeId = function withScopeId(_id) {
  return withCtx;
};
/**
 * Wrap a slot function to memoize current rendering instance
 * @private compiler helper
 */


function withCtx(fn) // false only
{
  var ctx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : currentRenderingInstance;
  var isNonScopedSlot = arguments.length > 2 ? arguments[2] : undefined;
  if (!ctx) return fn; // already normalized

  if (fn._n) {
    return fn;
  }

  var renderFnWithContext = function renderFnWithContext() {
    // If a user calls a compiled slot inside a template expression (#1745), it
    // can mess up block tracking, so by default we disable block tracking and
    // force bail out when invoking a compiled slot (indicated by the ._d flag).
    // This isn't necessary if rendering a compiled `<slot>`, so we flip the
    // ._d flag off when invoking the wrapped fn inside `renderSlot`.
    if (renderFnWithContext._d) {
      setBlockTracking(-1);
    }

    var prevInstance = setCurrentRenderingInstance(ctx);
    var res = fn.apply(void 0, arguments);
    setCurrentRenderingInstance(prevInstance);

    if (renderFnWithContext._d) {
      setBlockTracking(1);
    }

    if (true) {
      devtoolsComponentUpdated(ctx);
    }

    return res;
  }; // mark normalized to avoid duplicated wrapping


  renderFnWithContext._n = true; // mark this as compiled by default
  // this is used in vnode.ts -> normalizeChildren() to set the slot
  // rendering flag.

  renderFnWithContext._c = true; // disable block tracking by default

  renderFnWithContext._d = true;
  return renderFnWithContext;
}
/**
 * dev only flag to track whether $attrs was used during render.
 * If $attrs was used during render then the warning for failed attrs
 * fallthrough can be suppressed.
 */


var accessedAttrs = false;

function markAttrsAccessed() {
  accessedAttrs = true;
}

function renderComponentRoot(instance) {
  var Component = instance.type,
      vnode = instance.vnode,
      proxy = instance.proxy,
      withProxy = instance.withProxy,
      props = instance.props,
      _instance$propsOption2 = _slicedToArray(instance.propsOptions, 1),
      propsOptions = _instance$propsOption2[0],
      slots = instance.slots,
      attrs = instance.attrs,
      emit = instance.emit,
      render = instance.render,
      renderCache = instance.renderCache,
      data = instance.data,
      setupState = instance.setupState,
      ctx = instance.ctx,
      inheritAttrs = instance.inheritAttrs;

  var result;
  var prev = setCurrentRenderingInstance(instance);

  if (true) {
    accessedAttrs = false;
  }

  try {
    var fallthroughAttrs;

    if (vnode.shapeFlag & 4
    /* STATEFUL_COMPONENT */
    ) {
        // withProxy is a proxy with a different `has` trap only for
        // runtime-compiled render functions using `with` block.
        var proxyToUse = withProxy || proxy;
        result = normalizeVNode(render.call(proxyToUse, proxyToUse, renderCache, props, setupState, data, ctx));
        fallthroughAttrs = attrs;
      } else {
      // functional
      var _render = Component; // in dev, mark attrs accessed if optional props (attrs === props)

      if ( true && attrs === props) {
        markAttrsAccessed();
      }

      result = normalizeVNode(_render.length > 1 ? _render(props,  true ? {
        get attrs() {
          markAttrsAccessed();
          return attrs;
        },

        slots: slots,
        emit: emit
      } : 0) : _render(props, null
      /* we know it doesn't need it */
      ));
      fallthroughAttrs = Component.props ? attrs : getFunctionalFallthrough(attrs);
    } // attr merging
    // in dev mode, comments are preserved, and it's possible for a template
    // to have comments along side the root element which makes it a fragment


    var root = result;
    var setRoot = undefined;

    if ( true && result.patchFlag > 0 && result.patchFlag & 2048
    /* DEV_ROOT_FRAGMENT */
    ) {
        ;

        var _getChildRoot = getChildRoot(result);

        var _getChildRoot2 = _slicedToArray(_getChildRoot, 2);

        root = _getChildRoot2[0];
        setRoot = _getChildRoot2[1];
      }

    if (fallthroughAttrs && inheritAttrs !== false) {
      var keys = Object.keys(fallthroughAttrs);
      var _root = root,
          shapeFlag = _root.shapeFlag;

      if (keys.length) {
        if (shapeFlag & 1
        /* ELEMENT */
        || shapeFlag & 6
        /* COMPONENT */
        ) {
            if (propsOptions && keys.some(_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isModelListener)) {
              // If a v-model listener (onUpdate:xxx) has a corresponding declared
              // prop, it indicates this component expects to handle v-model and
              // it should not fallthrough.
              // related: #1543, #1643, #1989
              fallthroughAttrs = filterModelListeners(fallthroughAttrs, propsOptions);
            }

            root = cloneVNode(root, fallthroughAttrs);
          } else if ( true && !accessedAttrs && root.type !== Comment$1) {
          var allAttrs = Object.keys(attrs);
          var eventAttrs = [];
          var extraAttrs = [];

          for (var i = 0, l = allAttrs.length; i < l; i++) {
            var key = allAttrs[i];

            if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isOn)(key)) {
              // ignore v-model handlers when they fail to fallthrough
              if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isModelListener)(key)) {
                // remove `on`, lowercase first letter to reflect event casing
                // accurately
                eventAttrs.push(key[2].toLowerCase() + key.slice(3));
              }
            } else {
              extraAttrs.push(key);
            }
          }

          if (extraAttrs.length) {
            warn("Extraneous non-props attributes (" + "".concat(extraAttrs.join(', '), ") ") + "were passed to component but could not be automatically inherited " + "because component renders fragment or text root nodes.");
          }

          if (eventAttrs.length) {
            warn("Extraneous non-emits event listeners (" + "".concat(eventAttrs.join(', '), ") ") + "were passed to component but could not be automatically inherited " + "because component renders fragment or text root nodes. " + "If the listener is intended to be a component custom event listener only, " + "declare it using the \"emits\" option.");
          }
        }
      }
    }

    if (false) {} // inherit directives

    if (vnode.dirs) {
      if ( true && !isElementRoot(root)) {
        warn("Runtime directive used on component with non-element root node. " + "The directives will not function as intended.");
      }

      root.dirs = root.dirs ? root.dirs.concat(vnode.dirs) : vnode.dirs;
    } // inherit transition data


    if (vnode.transition) {
      if ( true && !isElementRoot(root)) {
        warn("Component inside <Transition> renders non-element root node " + "that cannot be animated.");
      }

      root.transition = vnode.transition;
    }

    if ( true && setRoot) {
      setRoot(root);
    } else {
      result = root;
    }
  } catch (err) {
    blockStack.length = 0;
    handleError(err, instance, 1
    /* RENDER_FUNCTION */
    );
    result = createVNode(Comment$1);
  }

  setCurrentRenderingInstance(prev);
  return result;
}
/**
 * dev only
 * In dev mode, template root level comments are rendered, which turns the
 * template into a fragment root, but we need to locate the single element
 * root for attrs and scope id processing.
 */


var getChildRoot = function getChildRoot(vnode) {
  var rawChildren = vnode.children;
  var dynamicChildren = vnode.dynamicChildren;
  var childRoot = filterSingleRoot(rawChildren);

  if (!childRoot) {
    return [vnode, undefined];
  }

  var index = rawChildren.indexOf(childRoot);
  var dynamicIndex = dynamicChildren ? dynamicChildren.indexOf(childRoot) : -1;

  var setRoot = function setRoot(updatedRoot) {
    rawChildren[index] = updatedRoot;

    if (dynamicChildren) {
      if (dynamicIndex > -1) {
        dynamicChildren[dynamicIndex] = updatedRoot;
      } else if (updatedRoot.patchFlag > 0) {
        vnode.dynamicChildren = [].concat(_toConsumableArray(dynamicChildren), [updatedRoot]);
      }
    }
  };

  return [normalizeVNode(childRoot), setRoot];
};

function filterSingleRoot(children) {
  var singleRoot;

  for (var i = 0; i < children.length; i++) {
    var child = children[i];

    if (isVNode(child)) {
      // ignore user comment
      if (child.type !== Comment$1 || child.children === 'v-if') {
        if (singleRoot) {
          // has more than 1 non-comment child, return now
          return;
        } else {
          singleRoot = child;
        }
      }
    } else {
      return;
    }
  }

  return singleRoot;
}

var getFunctionalFallthrough = function getFunctionalFallthrough(attrs) {
  var res;

  for (var key in attrs) {
    if (key === 'class' || key === 'style' || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isOn)(key)) {
      (res || (res = {}))[key] = attrs[key];
    }
  }

  return res;
};

var filterModelListeners = function filterModelListeners(attrs, props) {
  var res = {};

  for (var key in attrs) {
    if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isModelListener)(key) || !(key.slice(9) in props)) {
      res[key] = attrs[key];
    }
  }

  return res;
};

var isElementRoot = function isElementRoot(vnode) {
  return vnode.shapeFlag & 6
  /* COMPONENT */
  || vnode.shapeFlag & 1
  /* ELEMENT */
  || vnode.type === Comment$1 // potential v-if branch switch
  ;
};

function shouldUpdateComponent(prevVNode, nextVNode, optimized) {
  var prevProps = prevVNode.props,
      prevChildren = prevVNode.children,
      component = prevVNode.component;
  var nextProps = nextVNode.props,
      nextChildren = nextVNode.children,
      patchFlag = nextVNode.patchFlag;
  var emits = component.emitsOptions; // Parent component's render function was hot-updated. Since this may have
  // caused the child component's slots content to have changed, we need to
  // force the child to update as well.

  if ( true && (prevChildren || nextChildren) && isHmrUpdating) {
    return true;
  } // force child update for runtime directive or transition on component vnode.


  if (nextVNode.dirs || nextVNode.transition) {
    return true;
  }

  if (optimized && patchFlag >= 0) {
    if (patchFlag & 1024
    /* DYNAMIC_SLOTS */
    ) {
        // slot content that references values that might have changed,
        // e.g. in a v-for
        return true;
      }

    if (patchFlag & 16
    /* FULL_PROPS */
    ) {
        if (!prevProps) {
          return !!nextProps;
        } // presence of this flag indicates props are always non-null


        return hasPropsChanged(prevProps, nextProps, emits);
      } else if (patchFlag & 8
    /* PROPS */
    ) {
        var dynamicProps = nextVNode.dynamicProps;

        for (var i = 0; i < dynamicProps.length; i++) {
          var key = dynamicProps[i];

          if (nextProps[key] !== prevProps[key] && !isEmitListener(emits, key)) {
            return true;
          }
        }
      }
  } else {
    // this path is only taken by manually written render functions
    // so presence of any children leads to a forced update
    if (prevChildren || nextChildren) {
      if (!nextChildren || !nextChildren.$stable) {
        return true;
      }
    }

    if (prevProps === nextProps) {
      return false;
    }

    if (!prevProps) {
      return !!nextProps;
    }

    if (!nextProps) {
      return true;
    }

    return hasPropsChanged(prevProps, nextProps, emits);
  }

  return false;
}

function hasPropsChanged(prevProps, nextProps, emitsOptions) {
  var nextKeys = Object.keys(nextProps);

  if (nextKeys.length !== Object.keys(prevProps).length) {
    return true;
  }

  for (var i = 0; i < nextKeys.length; i++) {
    var key = nextKeys[i];

    if (nextProps[key] !== prevProps[key] && !isEmitListener(emitsOptions, key)) {
      return true;
    }
  }

  return false;
}

function updateHOCHostEl(_ref4, el // HostNode
) {
  var vnode = _ref4.vnode,
      parent = _ref4.parent;

  while (parent && parent.subTree === vnode) {
    (vnode = parent.vnode).el = el;
    parent = parent.parent;
  }
}

var isSuspense = function isSuspense(type) {
  return type.__isSuspense;
}; // Suspense exposes a component-like API, and is treated like a component
// in the compiler, but internally it's a special built-in type that hooks
// directly into the renderer.


var SuspenseImpl = {
  name: 'Suspense',
  // In order to make Suspense tree-shakable, we need to avoid importing it
  // directly in the renderer. The renderer checks for the __isSuspense flag
  // on a vnode's type and calls the `process` method, passing in renderer
  // internals.
  __isSuspense: true,
  process: function process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, // platform-specific impl passed from renderer
  rendererInternals) {
    if (n1 == null) {
      mountSuspense(n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, rendererInternals);
    } else {
      patchSuspense(n1, n2, container, anchor, parentComponent, isSVG, slotScopeIds, optimized, rendererInternals);
    }
  },
  hydrate: hydrateSuspense,
  create: createSuspenseBoundary,
  normalize: normalizeSuspenseChildren
}; // Force-casted public typing for h and TSX props inference

var Suspense = SuspenseImpl;

function triggerEvent(vnode, name) {
  var eventListener = vnode.props && vnode.props[name];

  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(eventListener)) {
    eventListener();
  }
}

function mountSuspense(vnode, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, rendererInternals) {
  var patch = rendererInternals.p,
      createElement = rendererInternals.o.createElement;
  var hiddenContainer = createElement('div');
  var suspense = vnode.suspense = createSuspenseBoundary(vnode, parentSuspense, parentComponent, container, hiddenContainer, anchor, isSVG, slotScopeIds, optimized, rendererInternals); // start mounting the content subtree in an off-dom container

  patch(null, suspense.pendingBranch = vnode.ssContent, hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds); // now check if we have encountered any async deps

  if (suspense.deps > 0) {
    // has async
    // invoke @fallback event
    triggerEvent(vnode, 'onPending');
    triggerEvent(vnode, 'onFallback'); // mount the fallback tree

    patch(null, vnode.ssFallback, container, anchor, parentComponent, null, // fallback tree will not have suspense context
    isSVG, slotScopeIds);
    setActiveBranch(suspense, vnode.ssFallback);
  } else {
    // Suspense has no async deps. Just resolve.
    suspense.resolve();
  }
}

function patchSuspense(n1, n2, container, anchor, parentComponent, isSVG, slotScopeIds, optimized, _ref5) {
  var patch = _ref5.p,
      unmount = _ref5.um,
      createElement = _ref5.o.createElement;
  var suspense = n2.suspense = n1.suspense;
  suspense.vnode = n2;
  n2.el = n1.el;
  var newBranch = n2.ssContent;
  var newFallback = n2.ssFallback;
  var activeBranch = suspense.activeBranch,
      pendingBranch = suspense.pendingBranch,
      isInFallback = suspense.isInFallback,
      isHydrating = suspense.isHydrating;

  if (pendingBranch) {
    suspense.pendingBranch = newBranch;

    if (isSameVNodeType(newBranch, pendingBranch)) {
      // same root type but content may have changed.
      patch(pendingBranch, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds, optimized);

      if (suspense.deps <= 0) {
        suspense.resolve();
      } else if (isInFallback) {
        patch(activeBranch, newFallback, container, anchor, parentComponent, null, // fallback tree will not have suspense context
        isSVG, slotScopeIds, optimized);
        setActiveBranch(suspense, newFallback);
      }
    } else {
      // toggled before pending tree is resolved
      suspense.pendingId++;

      if (isHydrating) {
        // if toggled before hydration is finished, the current DOM tree is
        // no longer valid. set it as the active branch so it will be unmounted
        // when resolved
        suspense.isHydrating = false;
        suspense.activeBranch = pendingBranch;
      } else {
        unmount(pendingBranch, parentComponent, suspense);
      } // increment pending ID. this is used to invalidate async callbacks
      // reset suspense state


      suspense.deps = 0; // discard effects from pending branch

      suspense.effects.length = 0; // discard previous container

      suspense.hiddenContainer = createElement('div');

      if (isInFallback) {
        // already in fallback state
        patch(null, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds, optimized);

        if (suspense.deps <= 0) {
          suspense.resolve();
        } else {
          patch(activeBranch, newFallback, container, anchor, parentComponent, null, // fallback tree will not have suspense context
          isSVG, slotScopeIds, optimized);
          setActiveBranch(suspense, newFallback);
        }
      } else if (activeBranch && isSameVNodeType(newBranch, activeBranch)) {
        // toggled "back" to current active branch
        patch(activeBranch, newBranch, container, anchor, parentComponent, suspense, isSVG, slotScopeIds, optimized); // force resolve

        suspense.resolve(true);
      } else {
        // switched to a 3rd branch
        patch(null, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds, optimized);

        if (suspense.deps <= 0) {
          suspense.resolve();
        }
      }
    }
  } else {
    if (activeBranch && isSameVNodeType(newBranch, activeBranch)) {
      // root did not change, just normal patch
      patch(activeBranch, newBranch, container, anchor, parentComponent, suspense, isSVG, slotScopeIds, optimized);
      setActiveBranch(suspense, newBranch);
    } else {
      // root node toggled
      // invoke @pending event
      triggerEvent(n2, 'onPending'); // mount pending branch in off-dom container

      suspense.pendingBranch = newBranch;
      suspense.pendingId++;
      patch(null, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds, optimized);

      if (suspense.deps <= 0) {
        // incoming branch has no async deps, resolve now.
        suspense.resolve();
      } else {
        var timeout = suspense.timeout,
            pendingId = suspense.pendingId;

        if (timeout > 0) {
          setTimeout(function () {
            if (suspense.pendingId === pendingId) {
              suspense.fallback(newFallback);
            }
          }, timeout);
        } else if (timeout === 0) {
          suspense.fallback(newFallback);
        }
      }
    }
  }
}

var hasWarned = false;

function createSuspenseBoundary(vnode, parent, parentComponent, container, hiddenContainer, anchor, isSVG, slotScopeIds, optimized, rendererInternals) {
  var isHydrating = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : false;

  /* istanbul ignore if */
  if ( true && !hasWarned) {
    hasWarned = true; // @ts-ignore `console.info` cannot be null error

    console[console.info ? 'info' : 'log']("<Suspense> is an experimental feature and its API will likely change.");
  }

  var patch = rendererInternals.p,
      _move = rendererInternals.m,
      _unmount2 = rendererInternals.um,
      _next = rendererInternals.n,
      _rendererInternals$o = rendererInternals.o,
      parentNode = _rendererInternals$o.parentNode,
      remove = _rendererInternals$o.remove;
  var timeout = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toNumber)(vnode.props && vnode.props.timeout);
  var suspense = {
    vnode: vnode,
    parent: parent,
    parentComponent: parentComponent,
    isSVG: isSVG,
    container: container,
    hiddenContainer: hiddenContainer,
    anchor: anchor,
    deps: 0,
    pendingId: 0,
    timeout: typeof timeout === 'number' ? timeout : -1,
    activeBranch: null,
    pendingBranch: null,
    isInFallback: true,
    isHydrating: isHydrating,
    isUnmounted: false,
    effects: [],
    resolve: function resolve() {
      var resume = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (true) {
        if (!resume && !suspense.pendingBranch) {
          throw new Error("suspense.resolve() is called without a pending branch.");
        }

        if (suspense.isUnmounted) {
          throw new Error("suspense.resolve() is called on an already unmounted suspense boundary.");
        }
      }

      var vnode = suspense.vnode,
          activeBranch = suspense.activeBranch,
          pendingBranch = suspense.pendingBranch,
          pendingId = suspense.pendingId,
          effects = suspense.effects,
          parentComponent = suspense.parentComponent,
          container = suspense.container;

      if (suspense.isHydrating) {
        suspense.isHydrating = false;
      } else if (!resume) {
        var delayEnter = activeBranch && pendingBranch.transition && pendingBranch.transition.mode === 'out-in';

        if (delayEnter) {
          activeBranch.transition.afterLeave = function () {
            if (pendingId === suspense.pendingId) {
              _move(pendingBranch, container, _anchor, 0
              /* ENTER */
              );
            }
          };
        } // this is initial anchor on mount


        var _anchor = suspense.anchor; // unmount current active tree

        if (activeBranch) {
          // if the fallback tree was mounted, it may have been moved
          // as part of a parent suspense. get the latest anchor for insertion
          _anchor = _next(activeBranch);

          _unmount2(activeBranch, parentComponent, suspense, true);
        }

        if (!delayEnter) {
          // move content from off-dom container to actual container
          _move(pendingBranch, container, _anchor, 0
          /* ENTER */
          );
        }
      }

      setActiveBranch(suspense, pendingBranch);
      suspense.pendingBranch = null;
      suspense.isInFallback = false; // flush buffered effects
      // check if there is a pending parent suspense

      var parent = suspense.parent;
      var hasUnresolvedAncestor = false;

      while (parent) {
        if (parent.pendingBranch) {
          var _parent$effects;

          // found a pending parent suspense, merge buffered post jobs
          // into that parent
          (_parent$effects = parent.effects).push.apply(_parent$effects, _toConsumableArray(effects));

          hasUnresolvedAncestor = true;
          break;
        }

        parent = parent.parent;
      } // no pending parent suspense, flush all jobs


      if (!hasUnresolvedAncestor) {
        queuePostFlushCb(effects);
      }

      suspense.effects = []; // invoke @resolve event

      triggerEvent(vnode, 'onResolve');
    },
    fallback: function fallback(fallbackVNode) {
      if (!suspense.pendingBranch) {
        return;
      }

      var vnode = suspense.vnode,
          activeBranch = suspense.activeBranch,
          parentComponent = suspense.parentComponent,
          container = suspense.container,
          isSVG = suspense.isSVG; // invoke @fallback event

      triggerEvent(vnode, 'onFallback');

      var anchor = _next(activeBranch);

      var mountFallback = function mountFallback() {
        if (!suspense.isInFallback) {
          return;
        } // mount the fallback tree


        patch(null, fallbackVNode, container, anchor, parentComponent, null, // fallback tree will not have suspense context
        isSVG, slotScopeIds, optimized);
        setActiveBranch(suspense, fallbackVNode);
      };

      var delayEnter = fallbackVNode.transition && fallbackVNode.transition.mode === 'out-in';

      if (delayEnter) {
        activeBranch.transition.afterLeave = mountFallback;
      }

      suspense.isInFallback = true; // unmount current active branch

      _unmount2(activeBranch, parentComponent, null, // no suspense so unmount hooks fire now
      true // shouldRemove
      );

      if (!delayEnter) {
        mountFallback();
      }
    },
    move: function move(container, anchor, type) {
      suspense.activeBranch && _move(suspense.activeBranch, container, anchor, type);
      suspense.container = container;
    },
    next: function next() {
      return suspense.activeBranch && _next(suspense.activeBranch);
    },
    registerDep: function registerDep(instance, setupRenderEffect) {
      var isInPendingSuspense = !!suspense.pendingBranch;

      if (isInPendingSuspense) {
        suspense.deps++;
      }

      var hydratedEl = instance.vnode.el;
      instance.asyncDep["catch"](function (err) {
        handleError(err, instance, 0
        /* SETUP_FUNCTION */
        );
      }).then(function (asyncSetupResult) {
        // retry when the setup() promise resolves.
        // component may have been unmounted before resolve.
        if (instance.isUnmounted || suspense.isUnmounted || suspense.pendingId !== instance.suspenseId) {
          return;
        } // retry from this component


        instance.asyncResolved = true;
        var vnode = instance.vnode;

        if (true) {
          pushWarningContext(vnode);
        }

        handleSetupResult(instance, asyncSetupResult, false);

        if (hydratedEl) {
          // vnode may have been replaced if an update happened before the
          // async dep is resolved.
          vnode.el = hydratedEl;
        }

        var placeholder = !hydratedEl && instance.subTree.el;
        setupRenderEffect(instance, vnode, // component may have been moved before resolve.
        // if this is not a hydration, instance.subTree will be the comment
        // placeholder.
        parentNode(hydratedEl || instance.subTree.el), // anchor will not be used if this is hydration, so only need to
        // consider the comment placeholder case.
        hydratedEl ? null : _next(instance.subTree), suspense, isSVG, optimized);

        if (placeholder) {
          remove(placeholder);
        }

        updateHOCHostEl(instance, vnode.el);

        if (true) {
          popWarningContext();
        } // only decrease deps count if suspense is not already resolved


        if (isInPendingSuspense && --suspense.deps === 0) {
          suspense.resolve();
        }
      });
    },
    unmount: function unmount(parentSuspense, doRemove) {
      suspense.isUnmounted = true;

      if (suspense.activeBranch) {
        _unmount2(suspense.activeBranch, parentComponent, parentSuspense, doRemove);
      }

      if (suspense.pendingBranch) {
        _unmount2(suspense.pendingBranch, parentComponent, parentSuspense, doRemove);
      }
    }
  };
  return suspense;
}

function hydrateSuspense(node, vnode, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, rendererInternals, hydrateNode) {
  /* eslint-disable no-restricted-globals */
  var suspense = vnode.suspense = createSuspenseBoundary(vnode, parentSuspense, parentComponent, node.parentNode, document.createElement('div'), null, isSVG, slotScopeIds, optimized, rendererInternals, true
  /* hydrating */
  ); // there are two possible scenarios for server-rendered suspense:
  // - success: ssr content should be fully resolved
  // - failure: ssr content should be the fallback branch.
  // however, on the client we don't really know if it has failed or not
  // attempt to hydrate the DOM assuming it has succeeded, but we still
  // need to construct a suspense boundary first

  var result = hydrateNode(node, suspense.pendingBranch = vnode.ssContent, parentComponent, suspense, slotScopeIds, optimized);

  if (suspense.deps === 0) {
    suspense.resolve();
  }

  return result;
  /* eslint-enable no-restricted-globals */
}

function normalizeSuspenseChildren(vnode) {
  var shapeFlag = vnode.shapeFlag,
      children = vnode.children;
  var isSlotChildren = shapeFlag & 32
  /* SLOTS_CHILDREN */
  ;
  vnode.ssContent = normalizeSuspenseSlot(isSlotChildren ? children["default"] : children);
  vnode.ssFallback = isSlotChildren ? normalizeSuspenseSlot(children.fallback) : createVNode(Comment);
}

function normalizeSuspenseSlot(s) {
  var block;

  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(s)) {
    var isCompiledSlot = s._c;

    if (isCompiledSlot) {
      // disableTracking: false
      // allow block tracking for compiled slots
      // (see ./componentRenderContext.ts)
      s._d = false;
      openBlock();
    }

    s = s();

    if (isCompiledSlot) {
      s._d = true;
      block = currentBlock;
      closeBlock();
    }
  }

  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(s)) {
    var singleChild = filterSingleRoot(s);

    if ( true && !singleChild) {
      warn("<Suspense> slots expect a single root node.");
    }

    s = singleChild;
  }

  s = normalizeVNode(s);

  if (block) {
    s.dynamicChildren = block.filter(function (c) {
      return c !== s;
    });
  }

  return s;
}

function queueEffectWithSuspense(fn, suspense) {
  if (suspense && suspense.pendingBranch) {
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(fn)) {
      var _suspense$effects;

      (_suspense$effects = suspense.effects).push.apply(_suspense$effects, _toConsumableArray(fn));
    } else {
      suspense.effects.push(fn);
    }
  } else {
    queuePostFlushCb(fn);
  }
}

function setActiveBranch(suspense, branch) {
  suspense.activeBranch = branch;
  var vnode = suspense.vnode,
      parentComponent = suspense.parentComponent;
  var el = vnode.el = branch.el; // in case suspense is the root node of a component,
  // recursively update the HOC el

  if (parentComponent && parentComponent.subTree === vnode) {
    parentComponent.vnode.el = el;
    updateHOCHostEl(parentComponent, el);
  }
}

function provide(key, value) {
  if (!currentInstance) {
    if (true) {
      warn("provide() can only be used inside setup().");
    }
  } else {
    var provides = currentInstance.provides; // by default an instance inherits its parent's provides object
    // but when it needs to provide values of its own, it creates its
    // own provides object using parent provides object as prototype.
    // this way in `inject` we can simply look up injections from direct
    // parent and let the prototype chain do the work.

    var parentProvides = currentInstance.parent && currentInstance.parent.provides;

    if (parentProvides === provides) {
      provides = currentInstance.provides = Object.create(parentProvides);
    } // TS doesn't allow symbol as index type


    provides[key] = value;
  }
}

function inject(key, defaultValue) {
  var treatDefaultAsFactory = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  // fallback to `currentRenderingInstance` so that this can be called in
  // a functional component
  var instance = currentInstance || currentRenderingInstance;

  if (instance) {
    // #2400
    // to support `app.use` plugins,
    // fallback to appContext's `provides` if the intance is at root
    var provides = instance.parent == null ? instance.vnode.appContext && instance.vnode.appContext.provides : instance.parent.provides;

    if (provides && key in provides) {
      // TS doesn't allow symbol as index type
      return provides[key];
    } else if (arguments.length > 1) {
      return treatDefaultAsFactory && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(defaultValue) ? defaultValue.call(instance.proxy) : defaultValue;
    } else if (true) {
      warn("injection \"".concat(String(key), "\" not found."));
    }
  } else if (true) {
    warn("inject() can only be used inside setup() or functional components.");
  }
} // Simple effect.


function watchEffect(effect, options) {
  return doWatch(effect, null, options);
} // initial value for watchers to trigger on undefined initial values


var INITIAL_WATCHER_VALUE = {}; // implementation

function watch(source, cb, options) {
  if ( true && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(cb)) {
    warn("`watch(fn, options?)` signature has been moved to a separate API. " + "Use `watchEffect(fn, options?)` instead. `watch` now only " + "supports `watch(source, cb, options?) signature.");
  }

  return doWatch(source, cb, options);
}

function doWatch(source, cb) {
  var _ref6 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ,
      immediate = _ref6.immediate,
      deep = _ref6.deep,
      flush = _ref6.flush,
      onTrack = _ref6.onTrack,
      onTrigger = _ref6.onTrigger;

  var instance = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : currentInstance;

  if ( true && !cb) {
    if (immediate !== undefined) {
      warn("watch() \"immediate\" option is only respected when using the " + "watch(source, callback, options?) signature.");
    }

    if (deep !== undefined) {
      warn("watch() \"deep\" option is only respected when using the " + "watch(source, callback, options?) signature.");
    }
  }

  var warnInvalidSource = function warnInvalidSource(s) {
    warn("Invalid watch source: ", s, "A watch source can only be a getter/effect function, a ref, " + "a reactive object, or an array of these types.");
  };

  var getter;
  var forceTrigger = false;
  var isMultiSource = false;

  if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isRef)(source)) {
    getter = function getter() {
      return source.value;
    };

    forceTrigger = !!source._shallow;
  } else if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isReactive)(source)) {
    getter = function getter() {
      return source;
    };

    deep = true;
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(source)) {
    isMultiSource = true;
    forceTrigger = source.some(_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isReactive);

    getter = function getter() {
      return source.map(function (s) {
        if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isRef)(s)) {
          return s.value;
        } else if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isReactive)(s)) {
          return traverse(s);
        } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(s)) {
          return callWithErrorHandling(s, instance, 2
          /* WATCH_GETTER */
          );
        } else {
           true && warnInvalidSource(s);
        }
      });
    };
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(source)) {
    if (cb) {
      // getter with cb
      getter = function getter() {
        return callWithErrorHandling(source, instance, 2
        /* WATCH_GETTER */
        );
      };
    } else {
      // no cb -> simple effect
      getter = function getter() {
        if (instance && instance.isUnmounted) {
          return;
        }

        if (cleanup) {
          cleanup();
        }

        return callWithAsyncErrorHandling(source, instance, 3
        /* WATCH_CALLBACK */
        , [onInvalidate]);
      };
    }
  } else {
    getter = _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP;
     true && warnInvalidSource(source);
  }

  if (cb && deep) {
    var baseGetter = getter;

    getter = function getter() {
      return traverse(baseGetter());
    };
  }

  var cleanup;

  var onInvalidate = function onInvalidate(fn) {
    cleanup = runner.options.onStop = function () {
      callWithErrorHandling(fn, instance, 4
      /* WATCH_CLEANUP */
      );
    };
  };

  var oldValue = isMultiSource ? [] : INITIAL_WATCHER_VALUE;

  var job = function job() {
    if (!runner.active) {
      return;
    }

    if (cb) {
      // watch(source, cb)
      var newValue = runner();

      if (deep || forceTrigger || (isMultiSource ? newValue.some(function (v, i) {
        return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasChanged)(v, oldValue[i]);
      }) : (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasChanged)(newValue, oldValue)) || false) {
        // cleanup before running cb again
        if (cleanup) {
          cleanup();
        }

        callWithAsyncErrorHandling(cb, instance, 3
        /* WATCH_CALLBACK */
        , [newValue, // pass undefined as the old value when it's changed for the first time
        oldValue === INITIAL_WATCHER_VALUE ? undefined : oldValue, onInvalidate]);
        oldValue = newValue;
      }
    } else {
      // watchEffect
      runner();
    }
  }; // important: mark the job as a watcher callback so that scheduler knows
  // it is allowed to self-trigger (#1727)


  job.allowRecurse = !!cb;
  var scheduler;

  if (flush === 'sync') {
    scheduler = job; // the scheduler function gets called directly
  } else if (flush === 'post') {
    scheduler = function scheduler() {
      return queuePostRenderEffect(job, instance && instance.suspense);
    };
  } else {
    // default: 'pre'
    scheduler = function scheduler() {
      if (!instance || instance.isMounted) {
        queuePreFlushCb(job);
      } else {
        // with 'pre' option, the first call must happen before
        // the component is mounted so it is called synchronously.
        job();
      }
    };
  }

  var runner = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.effect)(getter, {
    lazy: true,
    onTrack: onTrack,
    onTrigger: onTrigger,
    scheduler: scheduler
  });
  recordInstanceBoundEffect(runner, instance); // initial run

  if (cb) {
    if (immediate) {
      job();
    } else {
      oldValue = runner();
    }
  } else if (flush === 'post') {
    queuePostRenderEffect(runner, instance && instance.suspense);
  } else {
    runner();
  }

  return function () {
    (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.stop)(runner);

    if (instance) {
      (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.remove)(instance.effects, runner);
    }
  };
} // this.$watch


function instanceWatch(source, value, options) {
  var publicThis = this.proxy;
  var getter = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(source) ? source.includes('.') ? createPathGetter(publicThis, source) : function () {
    return publicThis[source];
  } : source.bind(publicThis, publicThis);
  var cb;

  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(value)) {
    cb = value;
  } else {
    cb = value.handler;
    options = value;
  }

  return doWatch(getter, cb.bind(publicThis), options, this);
}

function createPathGetter(ctx, path) {
  var segments = path.split('.');
  return function () {
    var cur = ctx;

    for (var i = 0; i < segments.length && cur; i++) {
      cur = cur[segments[i]];
    }

    return cur;
  };
}

function traverse(value) {
  var seen = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Set();

  if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(value) || seen.has(value) || value["__v_skip"
  /* SKIP */
  ]) {
    return value;
  }

  seen.add(value);

  if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isRef)(value)) {
    traverse(value.value, seen);
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(value)) {
    for (var i = 0; i < value.length; i++) {
      traverse(value[i], seen);
    }
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isSet)(value) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isMap)(value)) {
    value.forEach(function (v) {
      traverse(v, seen);
    });
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isPlainObject)(value)) {
    for (var key in value) {
      traverse(value[key], seen);
    }
  }

  return value;
}

function useTransitionState() {
  var state = {
    isMounted: false,
    isLeaving: false,
    isUnmounting: false,
    leavingVNodes: new Map()
  };
  onMounted(function () {
    state.isMounted = true;
  });
  onBeforeUnmount(function () {
    state.isUnmounting = true;
  });
  return state;
}

var TransitionHookValidator = [Function, Array];
var BaseTransitionImpl = {
  name: "BaseTransition",
  props: {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    // enter
    onBeforeEnter: TransitionHookValidator,
    onEnter: TransitionHookValidator,
    onAfterEnter: TransitionHookValidator,
    onEnterCancelled: TransitionHookValidator,
    // leave
    onBeforeLeave: TransitionHookValidator,
    onLeave: TransitionHookValidator,
    onAfterLeave: TransitionHookValidator,
    onLeaveCancelled: TransitionHookValidator,
    // appear
    onBeforeAppear: TransitionHookValidator,
    onAppear: TransitionHookValidator,
    onAfterAppear: TransitionHookValidator,
    onAppearCancelled: TransitionHookValidator
  },
  setup: function setup(props, _ref7) {
    var slots = _ref7.slots;
    var instance = getCurrentInstance();
    var state = useTransitionState();
    var prevTransitionKey;
    return function () {
      var children = slots["default"] && getTransitionRawChildren(slots["default"](), true);

      if (!children || !children.length) {
        return;
      } // warn multiple elements


      if ( true && children.length > 1) {
        warn('<transition> can only be used on a single element or component. Use ' + '<transition-group> for lists.');
      } // there's no need to track reactivity for these props so use the raw
      // props for a bit better perf


      var rawProps = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw)(props);
      var mode = rawProps.mode; // check mode

      if ( true && mode && !['in-out', 'out-in', 'default'].includes(mode)) {
        warn("invalid <transition> mode: ".concat(mode));
      } // at this point children has a guaranteed length of 1.


      var child = children[0];

      if (state.isLeaving) {
        return emptyPlaceholder(child);
      } // in the case of <transition><keep-alive/></transition>, we need to
      // compare the type of the kept-alive children.


      var innerChild = getKeepAliveChild(child);

      if (!innerChild) {
        return emptyPlaceholder(child);
      }

      var enterHooks = resolveTransitionHooks(innerChild, rawProps, state, instance);
      setTransitionHooks(innerChild, enterHooks);
      var oldChild = instance.subTree;
      var oldInnerChild = oldChild && getKeepAliveChild(oldChild);
      var transitionKeyChanged = false;
      var getTransitionKey = innerChild.type.getTransitionKey;

      if (getTransitionKey) {
        var key = getTransitionKey();

        if (prevTransitionKey === undefined) {
          prevTransitionKey = key;
        } else if (key !== prevTransitionKey) {
          prevTransitionKey = key;
          transitionKeyChanged = true;
        }
      } // handle mode


      if (oldInnerChild && oldInnerChild.type !== Comment$1 && (!isSameVNodeType(innerChild, oldInnerChild) || transitionKeyChanged)) {
        var leavingHooks = resolveTransitionHooks(oldInnerChild, rawProps, state, instance); // update old tree's hooks in case of dynamic transition

        setTransitionHooks(oldInnerChild, leavingHooks); // switching between different views

        if (mode === 'out-in') {
          state.isLeaving = true; // return placeholder node and queue update when leave finishes

          leavingHooks.afterLeave = function () {
            state.isLeaving = false;
            instance.update();
          };

          return emptyPlaceholder(child);
        } else if (mode === 'in-out' && innerChild.type !== Comment$1) {
          leavingHooks.delayLeave = function (el, earlyRemove, delayedLeave) {
            var leavingVNodesCache = getLeavingNodesForType(state, oldInnerChild);
            leavingVNodesCache[String(oldInnerChild.key)] = oldInnerChild; // early removal callback

            el._leaveCb = function () {
              earlyRemove();
              el._leaveCb = undefined;
              delete enterHooks.delayedLeave;
            };

            enterHooks.delayedLeave = delayedLeave;
          };
        }
      }

      return child;
    };
  }
}; // export the public type for h/tsx inference
// also to avoid inline import() in generated d.ts files

var BaseTransition = BaseTransitionImpl;

function getLeavingNodesForType(state, vnode) {
  var leavingVNodes = state.leavingVNodes;
  var leavingVNodesCache = leavingVNodes.get(vnode.type);

  if (!leavingVNodesCache) {
    leavingVNodesCache = Object.create(null);
    leavingVNodes.set(vnode.type, leavingVNodesCache);
  }

  return leavingVNodesCache;
} // The transition hooks are attached to the vnode as vnode.transition
// and will be called at appropriate timing in the renderer.


function resolveTransitionHooks(vnode, props, state, instance) {
  var appear = props.appear,
      mode = props.mode,
      _props$persisted = props.persisted,
      persisted = _props$persisted === void 0 ? false : _props$persisted,
      onBeforeEnter = props.onBeforeEnter,
      onEnter = props.onEnter,
      onAfterEnter = props.onAfterEnter,
      onEnterCancelled = props.onEnterCancelled,
      onBeforeLeave = props.onBeforeLeave,
      onLeave = props.onLeave,
      onAfterLeave = props.onAfterLeave,
      onLeaveCancelled = props.onLeaveCancelled,
      onBeforeAppear = props.onBeforeAppear,
      onAppear = props.onAppear,
      onAfterAppear = props.onAfterAppear,
      onAppearCancelled = props.onAppearCancelled;
  var key = String(vnode.key);
  var leavingVNodesCache = getLeavingNodesForType(state, vnode);

  var callHook = function callHook(hook, args) {
    hook && callWithAsyncErrorHandling(hook, instance, 9
    /* TRANSITION_HOOK */
    , args);
  };

  var hooks = {
    mode: mode,
    persisted: persisted,
    beforeEnter: function beforeEnter(el) {
      var hook = onBeforeEnter;

      if (!state.isMounted) {
        if (appear) {
          hook = onBeforeAppear || onBeforeEnter;
        } else {
          return;
        }
      } // for same element (v-show)


      if (el._leaveCb) {
        el._leaveCb(true
        /* cancelled */
        );
      } // for toggled element with same key (v-if)


      var leavingVNode = leavingVNodesCache[key];

      if (leavingVNode && isSameVNodeType(vnode, leavingVNode) && leavingVNode.el._leaveCb) {
        // force early removal (not cancelled)
        leavingVNode.el._leaveCb();
      }

      callHook(hook, [el]);
    },
    enter: function enter(el) {
      var hook = onEnter;
      var afterHook = onAfterEnter;
      var cancelHook = onEnterCancelled;

      if (!state.isMounted) {
        if (appear) {
          hook = onAppear || onEnter;
          afterHook = onAfterAppear || onAfterEnter;
          cancelHook = onAppearCancelled || onEnterCancelled;
        } else {
          return;
        }
      }

      var called = false;

      var done = el._enterCb = function (cancelled) {
        if (called) return;
        called = true;

        if (cancelled) {
          callHook(cancelHook, [el]);
        } else {
          callHook(afterHook, [el]);
        }

        if (hooks.delayedLeave) {
          hooks.delayedLeave();
        }

        el._enterCb = undefined;
      };

      if (hook) {
        hook(el, done);

        if (hook.length <= 1) {
          done();
        }
      } else {
        done();
      }
    },
    leave: function leave(el, remove) {
      var key = String(vnode.key);

      if (el._enterCb) {
        el._enterCb(true
        /* cancelled */
        );
      }

      if (state.isUnmounting) {
        return remove();
      }

      callHook(onBeforeLeave, [el]);
      var called = false;

      var done = el._leaveCb = function (cancelled) {
        if (called) return;
        called = true;
        remove();

        if (cancelled) {
          callHook(onLeaveCancelled, [el]);
        } else {
          callHook(onAfterLeave, [el]);
        }

        el._leaveCb = undefined;

        if (leavingVNodesCache[key] === vnode) {
          delete leavingVNodesCache[key];
        }
      };

      leavingVNodesCache[key] = vnode;

      if (onLeave) {
        onLeave(el, done);

        if (onLeave.length <= 1) {
          done();
        }
      } else {
        done();
      }
    },
    clone: function clone(vnode) {
      return resolveTransitionHooks(vnode, props, state, instance);
    }
  };
  return hooks;
} // the placeholder really only handles one special case: KeepAlive
// in the case of a KeepAlive in a leave phase we need to return a KeepAlive
// placeholder with empty content to avoid the KeepAlive instance from being
// unmounted.


function emptyPlaceholder(vnode) {
  if (isKeepAlive(vnode)) {
    vnode = cloneVNode(vnode);
    vnode.children = null;
    return vnode;
  }
}

function getKeepAliveChild(vnode) {
  return isKeepAlive(vnode) ? vnode.children ? vnode.children[0] : undefined : vnode;
}

function setTransitionHooks(vnode, hooks) {
  if (vnode.shapeFlag & 6
  /* COMPONENT */
  && vnode.component) {
    setTransitionHooks(vnode.component.subTree, hooks);
  } else if (vnode.shapeFlag & 128
  /* SUSPENSE */
  ) {
      vnode.ssContent.transition = hooks.clone(vnode.ssContent);
      vnode.ssFallback.transition = hooks.clone(vnode.ssFallback);
    } else {
    vnode.transition = hooks;
  }
}

function getTransitionRawChildren(children) {
  var keepComment = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var ret = [];
  var keyedFragmentCount = 0;

  for (var i = 0; i < children.length; i++) {
    var child = children[i]; // handle fragment children case, e.g. v-for

    if (child.type === Fragment) {
      if (child.patchFlag & 128
      /* KEYED_FRAGMENT */
      ) keyedFragmentCount++;
      ret = ret.concat(getTransitionRawChildren(child.children, keepComment));
    } // comment placeholders should be skipped, e.g. v-if
    else if (keepComment || child.type !== Comment$1) {
        ret.push(child);
      }
  } // #1126 if a transition children list contains multiple sub fragments, these
  // fragments will be merged into a flat children array. Since each v-for
  // fragment may contain different static bindings inside, we need to de-op
  // these children to force full diffs to ensure correct behavior.


  if (keyedFragmentCount > 1) {
    for (var _i2 = 0; _i2 < ret.length; _i2++) {
      ret[_i2].patchFlag = -2
      /* BAIL */
      ;
    }
  }

  return ret;
} // implementation, close to no-op


function defineComponent(options) {
  return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(options) ? {
    setup: options,
    name: options.name
  } : options;
}

var isAsyncWrapper = function isAsyncWrapper(i) {
  return !!i.type.__asyncLoader;
};

function defineAsyncComponent(source) {
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(source)) {
    source = {
      loader: source
    };
  }

  var _source = source,
      loader = _source.loader,
      loadingComponent = _source.loadingComponent,
      errorComponent = _source.errorComponent,
      _source$delay = _source.delay,
      delay = _source$delay === void 0 ? 200 : _source$delay,
      timeout = _source.timeout,
      _source$suspensible = _source.suspensible,
      suspensible = _source$suspensible === void 0 ? true : _source$suspensible,
      userOnError = _source.onError;
  var pendingRequest = null;
  var resolvedComp;
  var retries = 0;

  var retry = function retry() {
    retries++;
    pendingRequest = null;
    return load();
  };

  var load = function load() {
    var thisRequest;
    return pendingRequest || (thisRequest = pendingRequest = loader()["catch"](function (err) {
      err = err instanceof Error ? err : new Error(String(err));

      if (userOnError) {
        return new Promise(function (resolve, reject) {
          var userRetry = function userRetry() {
            return resolve(retry());
          };

          var userFail = function userFail() {
            return reject(err);
          };

          userOnError(err, userRetry, userFail, retries + 1);
        });
      } else {
        throw err;
      }
    }).then(function (comp) {
      if (thisRequest !== pendingRequest && pendingRequest) {
        return pendingRequest;
      }

      if ( true && !comp) {
        warn("Async component loader resolved to undefined. " + "If you are using retry(), make sure to return its return value.");
      } // interop module default


      if (comp && (comp.__esModule || comp[Symbol.toStringTag] === 'Module')) {
        comp = comp["default"];
      }

      if ( true && comp && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(comp) && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(comp)) {
        throw new Error("Invalid async component load result: ".concat(comp));
      }

      resolvedComp = comp;
      return comp;
    }));
  };

  return defineComponent({
    name: 'AsyncComponentWrapper',
    __asyncLoader: load,

    get __asyncResolved() {
      return resolvedComp;
    },

    setup: function setup() {
      var instance = currentInstance; // already resolved

      if (resolvedComp) {
        return function () {
          return createInnerComp(resolvedComp, instance);
        };
      }

      var onError = function onError(err) {
        pendingRequest = null;
        handleError(err, instance, 13
        /* ASYNC_COMPONENT_LOADER */
        , !errorComponent
        /* do not throw in dev if user provided error component */
        );
      }; // suspense-controlled or SSR.


      if (suspensible && instance.suspense || false) {
        return load().then(function (comp) {
          return function () {
            return createInnerComp(comp, instance);
          };
        })["catch"](function (err) {
          onError(err);
          return function () {
            return errorComponent ? createVNode(errorComponent, {
              error: err
            }) : null;
          };
        });
      }

      var loaded = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
      var error = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.ref)();
      var delayed = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.ref)(!!delay);

      if (delay) {
        setTimeout(function () {
          delayed.value = false;
        }, delay);
      }

      if (timeout != null) {
        setTimeout(function () {
          if (!loaded.value && !error.value) {
            var err = new Error("Async component timed out after ".concat(timeout, "ms."));
            onError(err);
            error.value = err;
          }
        }, timeout);
      }

      load().then(function () {
        loaded.value = true;

        if (instance.parent && isKeepAlive(instance.parent.vnode)) {
          // parent is keep-alive, force update so the loaded component's
          // name is taken into account
          queueJob(instance.parent.update);
        }
      })["catch"](function (err) {
        onError(err);
        error.value = err;
      });
      return function () {
        if (loaded.value && resolvedComp) {
          return createInnerComp(resolvedComp, instance);
        } else if (error.value && errorComponent) {
          return createVNode(errorComponent, {
            error: error.value
          });
        } else if (loadingComponent && !delayed.value) {
          return createVNode(loadingComponent);
        }
      };
    }
  });
}

function createInnerComp(comp, _ref8) {
  var _ref8$vnode = _ref8.vnode,
      ref = _ref8$vnode.ref,
      props = _ref8$vnode.props,
      children = _ref8$vnode.children;
  var vnode = createVNode(comp, props, children); // ensure inner component inherits the async wrapper's ref owner

  vnode.ref = ref;
  return vnode;
}

var isKeepAlive = function isKeepAlive(vnode) {
  return vnode.type.__isKeepAlive;
};

var KeepAliveImpl = {
  name: "KeepAlive",
  // Marker for special handling inside the renderer. We are not using a ===
  // check directly on KeepAlive in the renderer, because importing it directly
  // would prevent it from being tree-shaken.
  __isKeepAlive: true,
  props: {
    include: [String, RegExp, Array],
    exclude: [String, RegExp, Array],
    max: [String, Number]
  },
  setup: function setup(props, _ref9) {
    var slots = _ref9.slots;
    var instance = getCurrentInstance(); // KeepAlive communicates with the instantiated renderer via the
    // ctx where the renderer passes in its internals,
    // and the KeepAlive instance exposes activate/deactivate implementations.
    // The whole point of this is to avoid importing KeepAlive directly in the
    // renderer to facilitate tree-shaking.

    var sharedContext = instance.ctx; // if the internal renderer is not registered, it indicates that this is server-side rendering,
    // for KeepAlive, we just need to render its children

    if (!sharedContext.renderer) {
      return slots["default"];
    }

    var cache = new Map();
    var keys = new Set();
    var current = null;

    if (true) {
      instance.__v_cache = cache;
    }

    var parentSuspense = instance.suspense;
    var _sharedContext$render = sharedContext.renderer,
        patch = _sharedContext$render.p,
        move = _sharedContext$render.m,
        _unmount = _sharedContext$render.um,
        createElement = _sharedContext$render.o.createElement;
    var storageContainer = createElement('div');

    sharedContext.activate = function (vnode, container, anchor, isSVG, optimized) {
      var instance = vnode.component;
      move(vnode, container, anchor, 0
      /* ENTER */
      , parentSuspense); // in case props have changed

      patch(instance.vnode, vnode, container, anchor, instance, parentSuspense, isSVG, vnode.slotScopeIds, optimized);
      queuePostRenderEffect(function () {
        instance.isDeactivated = false;

        if (instance.a) {
          (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.invokeArrayFns)(instance.a);
        }

        var vnodeHook = vnode.props && vnode.props.onVnodeMounted;

        if (vnodeHook) {
          invokeVNodeHook(vnodeHook, instance.parent, vnode);
        }
      }, parentSuspense);

      if (true) {
        // Update components tree
        devtoolsComponentAdded(instance);
      }
    };

    sharedContext.deactivate = function (vnode) {
      var instance = vnode.component;
      move(vnode, storageContainer, null, 1
      /* LEAVE */
      , parentSuspense);
      queuePostRenderEffect(function () {
        if (instance.da) {
          (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.invokeArrayFns)(instance.da);
        }

        var vnodeHook = vnode.props && vnode.props.onVnodeUnmounted;

        if (vnodeHook) {
          invokeVNodeHook(vnodeHook, instance.parent, vnode);
        }

        instance.isDeactivated = true;
      }, parentSuspense);

      if (true) {
        // Update components tree
        devtoolsComponentAdded(instance);
      }
    };

    function unmount(vnode) {
      // reset the shapeFlag so it can be properly unmounted
      resetShapeFlag(vnode);

      _unmount(vnode, instance, parentSuspense);
    }

    function pruneCache(filter) {
      cache.forEach(function (vnode, key) {
        var name = getComponentName(vnode.type);

        if (name && (!filter || !filter(name))) {
          pruneCacheEntry(key);
        }
      });
    }

    function pruneCacheEntry(key) {
      var cached = cache.get(key);

      if (!current || cached.type !== current.type) {
        unmount(cached);
      } else if (current) {
        // current active instance should no longer be kept-alive.
        // we can't unmount it now but it might be later, so reset its flag now.
        resetShapeFlag(current);
      }

      cache["delete"](key);
      keys["delete"](key);
    } // prune cache on include/exclude prop change


    watch(function () {
      return [props.include, props.exclude];
    }, function (_ref10) {
      var _ref11 = _slicedToArray(_ref10, 2),
          include = _ref11[0],
          exclude = _ref11[1];

      include && pruneCache(function (name) {
        return matches(include, name);
      });
      exclude && pruneCache(function (name) {
        return !matches(exclude, name);
      });
    }, // prune post-render after `current` has been updated
    {
      flush: 'post',
      deep: true
    }); // cache sub tree after render

    var pendingCacheKey = null;

    var cacheSubtree = function cacheSubtree() {
      // fix #1621, the pendingCacheKey could be 0
      if (pendingCacheKey != null) {
        cache.set(pendingCacheKey, getInnerChild(instance.subTree));
      }
    };

    onMounted(cacheSubtree);
    onUpdated(cacheSubtree);
    onBeforeUnmount(function () {
      cache.forEach(function (cached) {
        var subTree = instance.subTree,
            suspense = instance.suspense;
        var vnode = getInnerChild(subTree);

        if (cached.type === vnode.type) {
          // current instance will be unmounted as part of keep-alive's unmount
          resetShapeFlag(vnode); // but invoke its deactivated hook here

          var da = vnode.component.da;
          da && queuePostRenderEffect(da, suspense);
          return;
        }

        unmount(cached);
      });
    });
    return function () {
      pendingCacheKey = null;

      if (!slots["default"]) {
        return null;
      }

      var children = slots["default"]();
      var rawVNode = children[0];

      if (children.length > 1) {
        if (true) {
          warn("KeepAlive should contain exactly one component child.");
        }

        current = null;
        return children;
      } else if (!isVNode(rawVNode) || !(rawVNode.shapeFlag & 4
      /* STATEFUL_COMPONENT */
      ) && !(rawVNode.shapeFlag & 128
      /* SUSPENSE */
      )) {
        current = null;
        return rawVNode;
      }

      var vnode = getInnerChild(rawVNode);
      var comp = vnode.type; // for async components, name check should be based in its loaded
      // inner component if available

      var name = getComponentName(isAsyncWrapper(vnode) ? vnode.type.__asyncResolved || {} : comp);
      var include = props.include,
          exclude = props.exclude,
          max = props.max;

      if (include && (!name || !matches(include, name)) || exclude && name && matches(exclude, name)) {
        current = vnode;
        return rawVNode;
      }

      var key = vnode.key == null ? comp : vnode.key;
      var cachedVNode = cache.get(key); // clone vnode if it's reused because we are going to mutate it

      if (vnode.el) {
        vnode = cloneVNode(vnode);

        if (rawVNode.shapeFlag & 128
        /* SUSPENSE */
        ) {
            rawVNode.ssContent = vnode;
          }
      } // #1513 it's possible for the returned vnode to be cloned due to attr
      // fallthrough or scopeId, so the vnode here may not be the final vnode
      // that is mounted. Instead of caching it directly, we store the pending
      // key and cache `instance.subTree` (the normalized vnode) in
      // beforeMount/beforeUpdate hooks.


      pendingCacheKey = key;

      if (cachedVNode) {
        // copy over mounted state
        vnode.el = cachedVNode.el;
        vnode.component = cachedVNode.component;

        if (vnode.transition) {
          // recursively update transition hooks on subTree
          setTransitionHooks(vnode, vnode.transition);
        } // avoid vnode being mounted as fresh


        vnode.shapeFlag |= 512
        /* COMPONENT_KEPT_ALIVE */
        ; // make this key the freshest

        keys["delete"](key);
        keys.add(key);
      } else {
        keys.add(key); // prune oldest entry

        if (max && keys.size > parseInt(max, 10)) {
          pruneCacheEntry(keys.values().next().value);
        }
      } // avoid vnode being unmounted


      vnode.shapeFlag |= 256
      /* COMPONENT_SHOULD_KEEP_ALIVE */
      ;
      current = vnode;
      return rawVNode;
    };
  }
}; // export the public type for h/tsx inference
// also to avoid inline import() in generated d.ts files

var KeepAlive = KeepAliveImpl;

function matches(pattern, name) {
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(pattern)) {
    return pattern.some(function (p) {
      return matches(p, name);
    });
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(pattern)) {
    return pattern.split(',').indexOf(name) > -1;
  } else if (pattern.test) {
    return pattern.test(name);
  }
  /* istanbul ignore next */


  return false;
}

function onActivated(hook, target) {
  registerKeepAliveHook(hook, "a"
  /* ACTIVATED */
  , target);
}

function onDeactivated(hook, target) {
  registerKeepAliveHook(hook, "da"
  /* DEACTIVATED */
  , target);
}

function registerKeepAliveHook(hook, type) {
  var target = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : currentInstance;

  // cache the deactivate branch check wrapper for injected hooks so the same
  // hook can be properly deduped by the scheduler. "__wdc" stands for "with
  // deactivation check".
  var wrappedHook = hook.__wdc || (hook.__wdc = function () {
    // only fire the hook if the target instance is NOT in a deactivated branch.
    var current = target;

    while (current) {
      if (current.isDeactivated) {
        return;
      }

      current = current.parent;
    }

    hook();
  });

  injectHook(type, wrappedHook, target); // In addition to registering it on the target instance, we walk up the parent
  // chain and register it on all ancestor instances that are keep-alive roots.
  // This avoids the need to walk the entire component tree when invoking these
  // hooks, and more importantly, avoids the need to track child components in
  // arrays.

  if (target) {
    var current = target.parent;

    while (current && current.parent) {
      if (isKeepAlive(current.parent.vnode)) {
        injectToKeepAliveRoot(wrappedHook, type, target, current);
      }

      current = current.parent;
    }
  }
}

function injectToKeepAliveRoot(hook, type, target, keepAliveRoot) {
  // injectHook wraps the original for error handling, so make sure to remove
  // the wrapped version.
  var injected = injectHook(type, hook, keepAliveRoot, true
  /* prepend */
  );
  onUnmounted(function () {
    (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.remove)(keepAliveRoot[type], injected);
  }, target);
}

function resetShapeFlag(vnode) {
  var shapeFlag = vnode.shapeFlag;

  if (shapeFlag & 256
  /* COMPONENT_SHOULD_KEEP_ALIVE */
  ) {
      shapeFlag -= 256
      /* COMPONENT_SHOULD_KEEP_ALIVE */
      ;
    }

  if (shapeFlag & 512
  /* COMPONENT_KEPT_ALIVE */
  ) {
      shapeFlag -= 512
      /* COMPONENT_KEPT_ALIVE */
      ;
    }

  vnode.shapeFlag = shapeFlag;
}

function getInnerChild(vnode) {
  return vnode.shapeFlag & 128
  /* SUSPENSE */
  ? vnode.ssContent : vnode;
}

function injectHook(type, hook) {
  var target = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : currentInstance;
  var prepend = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  if (target) {
    var hooks = target[type] || (target[type] = []); // cache the error handling wrapper for injected hooks so the same hook
    // can be properly deduped by the scheduler. "__weh" stands for "with error
    // handling".

    var wrappedHook = hook.__weh || (hook.__weh = function () {
      if (target.isUnmounted) {
        return;
      } // disable tracking inside all lifecycle hooks
      // since they can potentially be called inside effects.


      (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.pauseTracking)(); // Set currentInstance during hook invocation.
      // This assumes the hook does not synchronously trigger other hooks, which
      // can only be false when the user does something really funky.

      setCurrentInstance(target);

      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      var res = callWithAsyncErrorHandling(hook, target, type, args);
      setCurrentInstance(null);
      (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.resetTracking)();
      return res;
    });

    if (prepend) {
      hooks.unshift(wrappedHook);
    } else {
      hooks.push(wrappedHook);
    }

    return wrappedHook;
  } else if (true) {
    var apiName = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toHandlerKey)(ErrorTypeStrings[type].replace(/ hook$/, ''));
    warn("".concat(apiName, " is called when there is no active component instance to be ") + "associated with. " + "Lifecycle injection APIs can only be used during execution of setup()." + (" If you are using async setup(), make sure to register lifecycle " + "hooks before the first await statement."));
  }
}

var createHook = function createHook(lifecycle) {
  return function (hook) {
    var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : currentInstance;
    return (// post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
      (!isInSSRComponentSetup || lifecycle === "sp"
      /* SERVER_PREFETCH */
      ) && injectHook(lifecycle, hook, target)
    );
  };
};

var onBeforeMount = createHook("bm"
/* BEFORE_MOUNT */
);
var onMounted = createHook("m"
/* MOUNTED */
);
var onBeforeUpdate = createHook("bu"
/* BEFORE_UPDATE */
);
var onUpdated = createHook("u"
/* UPDATED */
);
var onBeforeUnmount = createHook("bum"
/* BEFORE_UNMOUNT */
);
var onUnmounted = createHook("um"
/* UNMOUNTED */
);
var onServerPrefetch = createHook("sp"
/* SERVER_PREFETCH */
);
var onRenderTriggered = createHook("rtg"
/* RENDER_TRIGGERED */
);
var onRenderTracked = createHook("rtc"
/* RENDER_TRACKED */
);

function onErrorCaptured(hook) {
  var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : currentInstance;
  injectHook("ec"
  /* ERROR_CAPTURED */
  , hook, target);
}

function createDuplicateChecker() {
  var cache = Object.create(null);
  return function (type, key) {
    if (cache[key]) {
      warn("".concat(type, " property \"").concat(key, "\" is already defined in ").concat(cache[key], "."));
    } else {
      cache[key] = type;
    }
  };
}

var shouldCacheAccess = true;

function applyOptions(instance) {
  var options = resolveMergedOptions(instance);
  var publicThis = instance.proxy;
  var ctx = instance.ctx; // do not cache property access on public proxy during state initialization

  shouldCacheAccess = false; // call beforeCreate first before accessing other options since
  // the hook may mutate resolved options (#2791)

  if (options.beforeCreate) {
    callHook(options.beforeCreate, instance, "bc"
    /* BEFORE_CREATE */
    );
  }

  var dataOptions = options.data,
      computedOptions = options.computed,
      methods = options.methods,
      watchOptions = options.watch,
      provideOptions = options.provide,
      injectOptions = options.inject,
      created = options.created,
      beforeMount = options.beforeMount,
      mounted = options.mounted,
      beforeUpdate = options.beforeUpdate,
      updated = options.updated,
      activated = options.activated,
      deactivated = options.deactivated,
      beforeDestroy = options.beforeDestroy,
      beforeUnmount = options.beforeUnmount,
      destroyed = options.destroyed,
      unmounted = options.unmounted,
      render = options.render,
      renderTracked = options.renderTracked,
      renderTriggered = options.renderTriggered,
      errorCaptured = options.errorCaptured,
      serverPrefetch = options.serverPrefetch,
      expose = options.expose,
      inheritAttrs = options.inheritAttrs,
      components = options.components,
      directives = options.directives,
      filters = options.filters;
  var checkDuplicateProperties =  true ? createDuplicateChecker() : 0;

  if (true) {
    var _instance$propsOption3 = _slicedToArray(instance.propsOptions, 1),
        propsOptions = _instance$propsOption3[0];

    if (propsOptions) {
      for (var key in propsOptions) {
        checkDuplicateProperties("Props"
        /* PROPS */
        , key);
      }
    }
  } // options initialization order (to be consistent with Vue 2):
  // - props (already done outside of this function)
  // - inject
  // - methods
  // - data (deferred since it relies on `this` access)
  // - computed
  // - watch (deferred since it relies on `this` access)


  if (injectOptions) {
    resolveInjections(injectOptions, ctx, checkDuplicateProperties);
  }

  if (methods) {
    for (var _key5 in methods) {
      var methodHandler = methods[_key5];

      if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(methodHandler)) {
        // In dev mode, we use the `createRenderContext` function to define methods to the proxy target,
        // and those are read-only but reconfigurable, so it needs to be redefined here
        if (true) {
          Object.defineProperty(ctx, _key5, {
            value: methodHandler.bind(publicThis),
            configurable: true,
            enumerable: true,
            writable: true
          });
        } else {}

        if (true) {
          checkDuplicateProperties("Methods"
          /* METHODS */
          , _key5);
        }
      } else if (true) {
        warn("Method \"".concat(_key5, "\" has type \"").concat(_typeof(methodHandler), "\" in the component definition. ") + "Did you reference the function correctly?");
      }
    }
  }

  if (dataOptions) {
    (function () {
      if ( true && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(dataOptions)) {
        warn("The data option must be a function. " + "Plain object usage is no longer supported.");
      }

      var data = dataOptions.call(publicThis, publicThis);

      if ( true && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isPromise)(data)) {
        warn("data() returned a Promise - note data() cannot be async; If you " + "intend to perform data fetching before component renders, use " + "async setup() + <Suspense>.");
      }

      if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(data)) {
         true && warn("data() should return an object.");
      } else {
        instance.data = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.reactive)(data);

        if (true) {
          var _loop = function _loop(_key6) {
            checkDuplicateProperties("Data"
            /* DATA */
            , _key6); // expose data on ctx during dev

            if (_key6[0] !== '$' && _key6[0] !== '_') {
              Object.defineProperty(ctx, _key6, {
                configurable: true,
                enumerable: true,
                get: function get() {
                  return data[_key6];
                },
                set: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP
              });
            }
          };

          for (var _key6 in data) {
            _loop(_key6);
          }
        }
      }
    })();
  } // state initialization complete at this point - start caching access


  shouldCacheAccess = true;

  if (computedOptions) {
    var _loop2 = function _loop2(_key7) {
      var opt = computedOptions[_key7];
      var get = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(opt) ? opt.bind(publicThis, publicThis) : (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(opt.get) ? opt.get.bind(publicThis, publicThis) : _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP;

      if ( true && get === _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP) {
        warn("Computed property \"".concat(_key7, "\" has no getter."));
      }

      var set = !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(opt) && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(opt.set) ? opt.set.bind(publicThis) :  true ? function () {
        warn("Write operation failed: computed property \"".concat(_key7, "\" is readonly."));
      } : 0;
      var c = computed({
        get: get,
        set: set
      });
      Object.defineProperty(ctx, _key7, {
        enumerable: true,
        configurable: true,
        get: function get() {
          return c.value;
        },
        set: function set(v) {
          return c.value = v;
        }
      });

      if (true) {
        checkDuplicateProperties("Computed"
        /* COMPUTED */
        , _key7);
      }
    };

    for (var _key7 in computedOptions) {
      _loop2(_key7);
    }
  }

  if (watchOptions) {
    for (var _key8 in watchOptions) {
      createWatcher(watchOptions[_key8], ctx, publicThis, _key8);
    }
  }

  if (provideOptions) {
    var provides = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(provideOptions) ? provideOptions.call(publicThis) : provideOptions;
    Reflect.ownKeys(provides).forEach(function (key) {
      provide(key, provides[key]);
    });
  }

  if (created) {
    callHook(created, instance, "c"
    /* CREATED */
    );
  }

  function registerLifecycleHook(register, hook) {
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(hook)) {
      hook.forEach(function (_hook) {
        return register(_hook.bind(publicThis));
      });
    } else if (hook) {
      register(hook.bind(publicThis));
    }
  }

  registerLifecycleHook(onBeforeMount, beforeMount);
  registerLifecycleHook(onMounted, mounted);
  registerLifecycleHook(onBeforeUpdate, beforeUpdate);
  registerLifecycleHook(onUpdated, updated);
  registerLifecycleHook(onActivated, activated);
  registerLifecycleHook(onDeactivated, deactivated);
  registerLifecycleHook(onErrorCaptured, errorCaptured);
  registerLifecycleHook(onRenderTracked, renderTracked);
  registerLifecycleHook(onRenderTriggered, renderTriggered);
  registerLifecycleHook(onBeforeUnmount, beforeUnmount);
  registerLifecycleHook(onUnmounted, unmounted);
  registerLifecycleHook(onServerPrefetch, serverPrefetch);

  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(expose)) {
    if (expose.length) {
      var exposed = instance.exposed || (instance.exposed = {});
      expose.forEach(function (key) {
        Object.defineProperty(exposed, key, {
          get: function get() {
            return publicThis[key];
          },
          set: function set(val) {
            return publicThis[key] = val;
          }
        });
      });
    } else if (!instance.exposed) {
      instance.exposed = {};
    }
  } // options that are handled when creating the instance but also need to be
  // applied from mixins


  if (render && instance.render === _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP) {
    instance.render = render;
  }

  if (inheritAttrs != null) {
    instance.inheritAttrs = inheritAttrs;
  } // asset options.


  if (components) instance.components = components;
  if (directives) instance.directives = directives;
}

function resolveInjections(injectOptions, ctx) {
  var checkDuplicateProperties = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP;

  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(injectOptions)) {
    injectOptions = normalizeInject(injectOptions);
  }

  for (var key in injectOptions) {
    var opt = injectOptions[key];

    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(opt)) {
      if ('default' in opt) {
        ctx[key] = inject(opt.from || key, opt["default"], true
        /* treat default function as factory */
        );
      } else {
        ctx[key] = inject(opt.from || key);
      }
    } else {
      ctx[key] = inject(opt);
    }

    if (true) {
      checkDuplicateProperties("Inject"
      /* INJECT */
      , key);
    }
  }
}

function callHook(hook, instance, type) {
  callWithAsyncErrorHandling((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(hook) ? hook.map(function (h) {
    return h.bind(instance.proxy);
  }) : hook.bind(instance.proxy), instance, type);
}

function createWatcher(raw, ctx, publicThis, key) {
  var getter = key.includes('.') ? createPathGetter(publicThis, key) : function () {
    return publicThis[key];
  };

  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(raw)) {
    var handler = ctx[raw];

    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(handler)) {
      watch(getter, handler);
    } else if (true) {
      warn("Invalid watch handler specified by key \"".concat(raw, "\""), handler);
    }
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(raw)) {
    watch(getter, raw.bind(publicThis));
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(raw)) {
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(raw)) {
      raw.forEach(function (r) {
        return createWatcher(r, ctx, publicThis, key);
      });
    } else {
      var _handler = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(raw.handler) ? raw.handler.bind(publicThis) : ctx[raw.handler];

      if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(_handler)) {
        watch(getter, _handler, raw);
      } else if (true) {
        warn("Invalid watch handler specified by key \"".concat(raw.handler, "\""), _handler);
      }
    }
  } else if (true) {
    warn("Invalid watch option: \"".concat(key, "\""), raw);
  }
}
/**
 * Resolve merged options and cache it on the component.
 * This is done only once per-component since the merging does not involve
 * instances.
 */


function resolveMergedOptions(instance) {
  var base = instance.type;
  var mixins = base.mixins,
      extendsOptions = base["extends"];
  var _instance$appContext = instance.appContext,
      globalMixins = _instance$appContext.mixins,
      cache = _instance$appContext.optionsCache,
      optionMergeStrategies = _instance$appContext.config.optionMergeStrategies;
  var cached = cache.get(base);
  var resolved;

  if (cached) {
    resolved = cached;
  } else if (!globalMixins.length && !mixins && !extendsOptions) {
    {
      resolved = base;
    }
  } else {
    resolved = {};

    if (globalMixins.length) {
      globalMixins.forEach(function (m) {
        return mergeOptions(resolved, m, optionMergeStrategies, true);
      });
    }

    mergeOptions(resolved, base, optionMergeStrategies);
  }

  cache.set(base, resolved);
  return resolved;
}

function mergeOptions(to, from, strats) {
  var asMixin = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var mixins = from.mixins,
      extendsOptions = from["extends"];

  if (extendsOptions) {
    mergeOptions(to, extendsOptions, strats, true);
  }

  if (mixins) {
    mixins.forEach(function (m) {
      return mergeOptions(to, m, strats, true);
    });
  }

  for (var key in from) {
    if (asMixin && key === 'expose') {
       true && warn("\"expose\" option is ignored when declared in mixins or extends. " + "It should only be declared in the base component itself.");
    } else {
      var strat = internalOptionMergeStrats[key] || strats && strats[key];
      to[key] = strat ? strat(to[key], from[key]) : from[key];
    }
  }

  return to;
}

var internalOptionMergeStrats = {
  data: mergeDataFn,
  props: mergeObjectOptions,
  emits: mergeObjectOptions,
  // objects
  methods: mergeObjectOptions,
  computed: mergeObjectOptions,
  // lifecycle
  beforeCreate: mergeAsArray,
  created: mergeAsArray,
  beforeMount: mergeAsArray,
  mounted: mergeAsArray,
  beforeUpdate: mergeAsArray,
  updated: mergeAsArray,
  beforeDestroy: mergeAsArray,
  destroyed: mergeAsArray,
  activated: mergeAsArray,
  deactivated: mergeAsArray,
  errorCaptured: mergeAsArray,
  serverPrefetch: mergeAsArray,
  // assets
  components: mergeObjectOptions,
  directives: mergeObjectOptions,
  // watch
  watch: mergeWatchOptions,
  // provide / inject
  provide: mergeDataFn,
  inject: mergeInject
};

function mergeDataFn(to, from) {
  if (!from) {
    return to;
  }

  if (!to) {
    return from;
  }

  return function mergedDataFn() {
    return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(to) ? to.call(this, this) : to, (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(from) ? from.call(this, this) : from);
  };
}

function mergeInject(to, from) {
  return mergeObjectOptions(normalizeInject(to), normalizeInject(from));
}

function normalizeInject(raw) {
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(raw)) {
    var res = {};

    for (var i = 0; i < raw.length; i++) {
      res[raw[i]] = raw[i];
    }

    return res;
  }

  return raw;
}

function mergeAsArray(to, from) {
  return to ? _toConsumableArray(new Set([].concat(to, from))) : from;
}

function mergeObjectOptions(to, from) {
  return to ? (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(Object.create(null), to), from) : from;
}

function mergeWatchOptions(to, from) {
  if (!to) return from;
  if (!from) return to;
  var merged = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(Object.create(null), to);

  for (var key in from) {
    merged[key] = mergeAsArray(to[key], from[key]);
  }

  return merged;
}

function initProps(instance, rawProps, isStateful) {
  var isSSR = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var props = {};
  var attrs = {};
  (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.def)(attrs, InternalObjectKey, 1);
  instance.propsDefaults = Object.create(null);
  setFullProps(instance, rawProps, props, attrs); // ensure all declared prop keys are present

  for (var key in instance.propsOptions[0]) {
    if (!(key in props)) {
      props[key] = undefined;
    }
  } // validation


  if (true) {
    validateProps(rawProps || {}, props, instance);
  }

  if (isStateful) {
    // stateful
    instance.props = isSSR ? props : (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.shallowReactive)(props);
  } else {
    if (!instance.type.props) {
      // functional w/ optional props, props === attrs
      instance.props = attrs;
    } else {
      // functional w/ declared props
      instance.props = props;
    }
  }

  instance.attrs = attrs;
}

function updateProps(instance, rawProps, rawPrevProps, optimized) {
  var props = instance.props,
      attrs = instance.attrs,
      patchFlag = instance.vnode.patchFlag;
  var rawCurrentProps = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw)(props);

  var _instance$propsOption4 = _slicedToArray(instance.propsOptions, 1),
      options = _instance$propsOption4[0];

  var hasAttrsChanged = false;

  if ( // always force full diff in dev
  // - #1942 if hmr is enabled with sfc component
  // - vite#872 non-sfc component used by sfc component
  !( true && (instance.type.__hmrId || instance.parent && instance.parent.type.__hmrId)) && (optimized || patchFlag > 0) && !(patchFlag & 16
  /* FULL_PROPS */
  )) {
    if (patchFlag & 8
    /* PROPS */
    ) {
        // Compiler-generated props & no keys change, just set the updated
        // the props.
        var propsToUpdate = instance.vnode.dynamicProps;

        for (var i = 0; i < propsToUpdate.length; i++) {
          var key = propsToUpdate[i]; // PROPS flag guarantees rawProps to be non-null

          var value = rawProps[key];

          if (options) {
            // attr / props separation was done on init and will be consistent
            // in this code path, so just check if attrs have it.
            if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(attrs, key)) {
              if (value !== attrs[key]) {
                attrs[key] = value;
                hasAttrsChanged = true;
              }
            } else {
              var camelizedKey = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(key);
              props[camelizedKey] = resolvePropValue(options, rawCurrentProps, camelizedKey, value, instance, false
              /* isAbsent */
              );
            }
          } else {
            if (value !== attrs[key]) {
              attrs[key] = value;
              hasAttrsChanged = true;
            }
          }
        }
      }
  } else {
    // full props update.
    if (setFullProps(instance, rawProps, props, attrs)) {
      hasAttrsChanged = true;
    } // in case of dynamic props, check if we need to delete keys from
    // the props object


    var kebabKey;

    for (var _key9 in rawCurrentProps) {
      if (!rawProps || // for camelCase
      !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(rawProps, _key9) && ( // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      (kebabKey = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(_key9)) === _key9 || !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(rawProps, kebabKey))) {
        if (options) {
          if (rawPrevProps && ( // for camelCase
          rawPrevProps[_key9] !== undefined || // for kebab-case
          rawPrevProps[kebabKey] !== undefined)) {
            props[_key9] = resolvePropValue(options, rawCurrentProps, _key9, undefined, instance, true
            /* isAbsent */
            );
          }
        } else {
          delete props[_key9];
        }
      }
    } // in the case of functional component w/o props declaration, props and
    // attrs point to the same object so it should already have been updated.


    if (attrs !== rawCurrentProps) {
      for (var _key10 in attrs) {
        if (!rawProps || !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(rawProps, _key10)) {
          delete attrs[_key10];
          hasAttrsChanged = true;
        }
      }
    }
  } // trigger updates for $attrs in case it's used in component slots


  if (hasAttrsChanged) {
    (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.trigger)(instance, "set"
    /* SET */
    , '$attrs');
  }

  if (true) {
    validateProps(rawProps || {}, props, instance);
  }
}

function setFullProps(instance, rawProps, props, attrs) {
  var _instance$propsOption5 = _slicedToArray(instance.propsOptions, 2),
      options = _instance$propsOption5[0],
      needCastKeys = _instance$propsOption5[1];

  var hasAttrsChanged = false;
  var rawCastValues;

  if (rawProps) {
    for (var key in rawProps) {
      // key, ref are reserved and never passed down
      if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isReservedProp)(key)) {
        continue;
      }

      var value = rawProps[key]; // prop option names are camelized during normalization, so to support
      // kebab -> camel conversion here we need to camelize the key.

      var camelKey = void 0;

      if (options && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(options, camelKey = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(key))) {
        if (!needCastKeys || !needCastKeys.includes(camelKey)) {
          props[camelKey] = value;
        } else {
          (rawCastValues || (rawCastValues = {}))[camelKey] = value;
        }
      } else if (!isEmitListener(instance.emitsOptions, key)) {
        if (value !== attrs[key]) {
          attrs[key] = value;
          hasAttrsChanged = true;
        }
      }
    }
  }

  if (needCastKeys) {
    var rawCurrentProps = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw)(props);
    var castValues = rawCastValues || _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ;

    for (var i = 0; i < needCastKeys.length; i++) {
      var _key11 = needCastKeys[i];
      props[_key11] = resolvePropValue(options, rawCurrentProps, _key11, castValues[_key11], instance, !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(castValues, _key11));
    }
  }

  return hasAttrsChanged;
}

function resolvePropValue(options, props, key, value, instance, isAbsent) {
  var opt = options[key];

  if (opt != null) {
    var hasDefault = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(opt, 'default'); // default values

    if (hasDefault && value === undefined) {
      var defaultValue = opt["default"];

      if (opt.type !== Function && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(defaultValue)) {
        var propsDefaults = instance.propsDefaults;

        if (key in propsDefaults) {
          value = propsDefaults[key];
        } else {
          setCurrentInstance(instance);
          value = propsDefaults[key] = defaultValue.call(null, props);
          setCurrentInstance(null);
        }
      } else {
        value = defaultValue;
      }
    } // boolean casting


    if (opt[0
    /* shouldCast */
    ]) {
      if (isAbsent && !hasDefault) {
        value = false;
      } else if (opt[1
      /* shouldCastTrue */
      ] && (value === '' || value === (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(key))) {
        value = true;
      }
    }
  }

  return value;
}

function normalizePropsOptions(comp, appContext) {
  var asMixin = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var cache = appContext.propsCache;
  var cached = cache.get(comp);

  if (cached) {
    return cached;
  }

  var raw = comp.props;
  var normalized = {};
  var needCastKeys = []; // apply mixin/extends props

  var hasExtends = false;

  if ( true && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(comp)) {
    var extendProps = function extendProps(raw) {
      hasExtends = true;

      var _normalizePropsOption = normalizePropsOptions(raw, appContext, true),
          _normalizePropsOption2 = _slicedToArray(_normalizePropsOption, 2),
          props = _normalizePropsOption2[0],
          keys = _normalizePropsOption2[1];

      (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(normalized, props);
      if (keys) needCastKeys.push.apply(needCastKeys, _toConsumableArray(keys));
    };

    if (!asMixin && appContext.mixins.length) {
      appContext.mixins.forEach(extendProps);
    }

    if (comp["extends"]) {
      extendProps(comp["extends"]);
    }

    if (comp.mixins) {
      comp.mixins.forEach(extendProps);
    }
  }

  if (!raw && !hasExtends) {
    cache.set(comp, _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_ARR);
    return _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_ARR;
  }

  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(raw)) {
    for (var i = 0; i < raw.length; i++) {
      if ( true && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(raw[i])) {
        warn("props must be strings when using array syntax.", raw[i]);
      }

      var normalizedKey = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(raw[i]);

      if (validatePropName(normalizedKey)) {
        normalized[normalizedKey] = _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ;
      }
    }
  } else if (raw) {
    if ( true && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(raw)) {
      warn("invalid props options", raw);
    }

    for (var key in raw) {
      var _normalizedKey = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(key);

      if (validatePropName(_normalizedKey)) {
        var opt = raw[key];
        var prop = normalized[_normalizedKey] = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(opt) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(opt) ? {
          type: opt
        } : opt;

        if (prop) {
          var booleanIndex = getTypeIndex(Boolean, prop.type);
          var stringIndex = getTypeIndex(String, prop.type);
          prop[0
          /* shouldCast */
          ] = booleanIndex > -1;
          prop[1
          /* shouldCastTrue */
          ] = stringIndex < 0 || booleanIndex < stringIndex; // if the prop needs boolean casting or default value

          if (booleanIndex > -1 || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(prop, 'default')) {
            needCastKeys.push(_normalizedKey);
          }
        }
      }
    }
  }

  var res = [normalized, needCastKeys];
  cache.set(comp, res);
  return res;
}

function validatePropName(key) {
  if (key[0] !== '$') {
    return true;
  } else if (true) {
    warn("Invalid prop name: \"".concat(key, "\" is a reserved property."));
  }

  return false;
} // use function string name to check type constructors
// so that it works across vms / iframes.


function getType(ctor) {
  var match = ctor && ctor.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : '';
}

function isSameType(a, b) {
  return getType(a) === getType(b);
}

function getTypeIndex(type, expectedTypes) {
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(expectedTypes)) {
    return expectedTypes.findIndex(function (t) {
      return isSameType(t, type);
    });
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1;
  }

  return -1;
}
/**
 * dev only
 */


function validateProps(rawProps, props, instance) {
  var resolvedValues = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw)(props);
  var options = instance.propsOptions[0];

  for (var key in options) {
    var opt = options[key];
    if (opt == null) continue;
    validateProp(key, resolvedValues[key], opt, !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(rawProps, key) && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(rawProps, (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(key)));
  }
}
/**
 * dev only
 */


function validateProp(name, value, prop, isAbsent) {
  var type = prop.type,
      required = prop.required,
      validator = prop.validator; // required!

  if (required && isAbsent) {
    warn('Missing required prop: "' + name + '"');
    return;
  } // missing but optional


  if (value == null && !prop.required) {
    return;
  } // type check


  if (type != null && type !== true) {
    var isValid = false;
    var types = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(type) ? type : [type];
    var expectedTypes = []; // value is valid as long as one of the specified types match

    for (var i = 0; i < types.length && !isValid; i++) {
      var _assertType = assertType(value, types[i]),
          valid = _assertType.valid,
          expectedType = _assertType.expectedType;

      expectedTypes.push(expectedType || '');
      isValid = valid;
    }

    if (!isValid) {
      warn(getInvalidTypeMessage(name, value, expectedTypes));
      return;
    }
  } // custom validator


  if (validator && !validator(value)) {
    warn('Invalid prop: custom validator check failed for prop "' + name + '".');
  }
}

var isSimpleType = /*#__PURE__*/(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.makeMap)('String,Number,Boolean,Function,Symbol,BigInt');
/**
 * dev only
 */

function assertType(value, type) {
  var valid;
  var expectedType = getType(type);

  if (isSimpleType(expectedType)) {
    var t = _typeof(value);

    valid = t === expectedType.toLowerCase(); // for primitive wrapper objects

    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(value);
  } else if (expectedType === 'Array') {
    valid = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(value);
  } else {
    valid = value instanceof type;
  }

  return {
    valid: valid,
    expectedType: expectedType
  };
}
/**
 * dev only
 */


function getInvalidTypeMessage(name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"".concat(name, "\".") + " Expected ".concat(expectedTypes.map(_vue_shared__WEBPACK_IMPORTED_MODULE_1__.capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toRawType)(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType); // check if we need to specify expected value

  if (expectedTypes.length === 1 && isExplicable(expectedType) && !isBoolean(expectedType, receivedType)) {
    message += " with value ".concat(expectedValue);
  }

  message += ", got ".concat(receivedType, " "); // check if we need to specify received value

  if (isExplicable(receivedType)) {
    message += "with value ".concat(receivedValue, ".");
  }

  return message;
}
/**
 * dev only
 */


function styleValue(value, type) {
  if (type === 'String') {
    return "\"".concat(value, "\"");
  } else if (type === 'Number') {
    return "".concat(Number(value));
  } else {
    return "".concat(value);
  }
}
/**
 * dev only
 */


function isExplicable(type) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) {
    return type.toLowerCase() === elem;
  });
}
/**
 * dev only
 */


function isBoolean() {
  for (var _len5 = arguments.length, args = new Array(_len5), _key12 = 0; _key12 < _len5; _key12++) {
    args[_key12] = arguments[_key12];
  }

  return args.some(function (elem) {
    return elem.toLowerCase() === 'boolean';
  });
}

var isInternalKey = function isInternalKey(key) {
  return key[0] === '_' || key === '$stable';
};

var normalizeSlotValue = function normalizeSlotValue(value) {
  return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(value) ? value.map(normalizeVNode) : [normalizeVNode(value)];
};

var normalizeSlot = function normalizeSlot(key, rawSlot, ctx) {
  var normalized = withCtx(function (props) {
    if ( true && currentInstance) {
      warn("Slot \"".concat(key, "\" invoked outside of the render function: ") + "this will not track dependencies used in the slot. " + "Invoke the slot function inside the render function instead.");
    }

    return normalizeSlotValue(rawSlot(props));
  }, ctx);
  normalized._c = false;
  return normalized;
};

var normalizeObjectSlots = function normalizeObjectSlots(rawSlots, slots, instance) {
  var ctx = rawSlots._ctx;

  for (var key in rawSlots) {
    if (isInternalKey(key)) continue;
    var value = rawSlots[key];

    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(value)) {
      slots[key] = normalizeSlot(key, value, ctx);
    } else if (value != null) {
      (function () {
        if (true) {
          warn("Non-function value encountered for slot \"".concat(key, "\". ") + "Prefer function slots for better performance.");
        }

        var normalized = normalizeSlotValue(value);

        slots[key] = function () {
          return normalized;
        };
      })();
    }
  }
};

var normalizeVNodeSlots = function normalizeVNodeSlots(instance, children) {
  if ( true && !isKeepAlive(instance.vnode) && !false) {
    warn("Non-function value encountered for default slot. " + "Prefer function slots for better performance.");
  }

  var normalized = normalizeSlotValue(children);

  instance.slots["default"] = function () {
    return normalized;
  };
};

var initSlots = function initSlots(instance, children) {
  if (instance.vnode.shapeFlag & 32
  /* SLOTS_CHILDREN */
  ) {
      var type = children._;

      if (type) {
        // users can get the shallow readonly version of the slots object through `this.$slots`,
        // we should avoid the proxy object polluting the slots of the internal instance
        instance.slots = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw)(children); // make compiler marker non-enumerable

        (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.def)(children, '_', type);
      } else {
        normalizeObjectSlots(children, instance.slots = {});
      }
    } else {
    instance.slots = {};

    if (children) {
      normalizeVNodeSlots(instance, children);
    }
  }

  (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.def)(instance.slots, InternalObjectKey, 1);
};

var updateSlots = function updateSlots(instance, children, optimized) {
  var vnode = instance.vnode,
      slots = instance.slots;
  var needDeletionCheck = true;
  var deletionComparisonTarget = _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ;

  if (vnode.shapeFlag & 32
  /* SLOTS_CHILDREN */
  ) {
      var type = children._;

      if (type) {
        // compiled slots.
        if ( true && isHmrUpdating) {
          // Parent was HMR updated so slot content may have changed.
          // force update slots and mark instance for hmr as well
          (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(slots, children);
        } else if (optimized && type === 1
        /* STABLE */
        ) {
            // compiled AND stable.
            // no need to update, and skip stale slots removal.
            needDeletionCheck = false;
          } else {
          // compiled but dynamic (v-if/v-for on slots) - update slots, but skip
          // normalization.
          (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(slots, children); // #2893
          // when rendering the optimized slots by manually written render function,
          // we need to delete the `slots._` flag if necessary to make subsequent updates reliable,
          // i.e. let the `renderSlot` create the bailed Fragment

          if (!optimized && type === 1
          /* STABLE */
          ) {
              delete slots._;
            }
        }
      } else {
        needDeletionCheck = !children.$stable;
        normalizeObjectSlots(children, slots);
      }

      deletionComparisonTarget = children;
    } else if (children) {
    // non slot object children (direct value) passed to a component
    normalizeVNodeSlots(instance, children);
    deletionComparisonTarget = {
      "default": 1
    };
  } // delete stale slots


  if (needDeletionCheck) {
    for (var key in slots) {
      if (!isInternalKey(key) && !(key in deletionComparisonTarget)) {
        delete slots[key];
      }
    }
  }
};
/**
Runtime helper for applying directives to a vnode. Example usage:

const comp = resolveComponent('comp')
const foo = resolveDirective('foo')
const bar = resolveDirective('bar')

return withDirectives(h(comp), [
  [foo, this.x],
  [bar, this.y]
])
*/


var isBuiltInDirective = /*#__PURE__*/(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.makeMap)('bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text');

function validateDirectiveName(name) {
  if (isBuiltInDirective(name)) {
    warn('Do not use built-in directive ids as custom directive id: ' + name);
  }
}
/**
 * Adds directives to a VNode.
 */


function withDirectives(vnode, directives) {
  var internalInstance = currentRenderingInstance;

  if (internalInstance === null) {
     true && warn("withDirectives can only be used inside render functions.");
    return vnode;
  }

  var instance = internalInstance.proxy;
  var bindings = vnode.dirs || (vnode.dirs = []);

  for (var i = 0; i < directives.length; i++) {
    var _directives$i = _slicedToArray(directives[i], 4),
        dir = _directives$i[0],
        value = _directives$i[1],
        arg = _directives$i[2],
        _directives$i$ = _directives$i[3],
        modifiers = _directives$i$ === void 0 ? _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ : _directives$i$;

    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(dir)) {
      dir = {
        mounted: dir,
        updated: dir
      };
    }

    bindings.push({
      dir: dir,
      instance: instance,
      value: value,
      oldValue: void 0,
      arg: arg,
      modifiers: modifiers
    });
  }

  return vnode;
}

function invokeDirectiveHook(vnode, prevVNode, instance, name) {
  var bindings = vnode.dirs;
  var oldBindings = prevVNode && prevVNode.dirs;

  for (var i = 0; i < bindings.length; i++) {
    var binding = bindings[i];

    if (oldBindings) {
      binding.oldValue = oldBindings[i].value;
    }

    var hook = binding.dir[name];

    if (hook) {
      // disable tracking inside all lifecycle hooks
      // since they can potentially be called inside effects.
      (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.pauseTracking)();
      callWithAsyncErrorHandling(hook, instance, 8
      /* DIRECTIVE_HOOK */
      , [vnode.el, binding, vnode, prevVNode]);
      (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.resetTracking)();
    }
  }
}

function createAppContext() {
  return {
    app: null,
    config: {
      isNativeTag: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NO,
      performance: false,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: undefined,
      warnHandler: undefined,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap()
  };
}

var uid = 0;

function createAppAPI(render, hydrate) {
  return function createApp(rootComponent) {
    var rootProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    if (rootProps != null && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(rootProps)) {
       true && warn("root props passed to app.mount() must be an object.");
      rootProps = null;
    }

    var context = createAppContext();
    var installedPlugins = new Set();
    var isMounted = false;
    var app = context.app = {
      _uid: uid++,
      _component: rootComponent,
      _props: rootProps,
      _container: null,
      _context: context,
      _instance: null,
      version: version,

      get config() {
        return context.config;
      },

      set config(v) {
        if (true) {
          warn("app.config cannot be replaced. Modify individual options instead.");
        }
      },

      use: function use(plugin) {
        for (var _len6 = arguments.length, options = new Array(_len6 > 1 ? _len6 - 1 : 0), _key13 = 1; _key13 < _len6; _key13++) {
          options[_key13 - 1] = arguments[_key13];
        }

        if (installedPlugins.has(plugin)) {
           true && warn("Plugin has already been applied to target app.");
        } else if (plugin && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(plugin.install)) {
          installedPlugins.add(plugin);
          plugin.install.apply(plugin, [app].concat(options));
        } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(plugin)) {
          installedPlugins.add(plugin);
          plugin.apply(void 0, [app].concat(options));
        } else if (true) {
          warn("A plugin must either be a function or an object with an \"install\" " + "function.");
        }

        return app;
      },
      mixin: function mixin(_mixin) {
        if (true) {
          if (!context.mixins.includes(_mixin)) {
            context.mixins.push(_mixin);
          } else if (true) {
            warn('Mixin has already been applied to target app' + (_mixin.name ? ": ".concat(_mixin.name) : ''));
          }
        } else {}

        return app;
      },
      component: function component(name, _component) {
        if (true) {
          validateComponentName(name, context.config);
        }

        if (!_component) {
          return context.components[name];
        }

        if ( true && context.components[name]) {
          warn("Component \"".concat(name, "\" has already been registered in target app."));
        }

        context.components[name] = _component;
        return app;
      },
      directive: function directive(name, _directive) {
        if (true) {
          validateDirectiveName(name);
        }

        if (!_directive) {
          return context.directives[name];
        }

        if ( true && context.directives[name]) {
          warn("Directive \"".concat(name, "\" has already been registered in target app."));
        }

        context.directives[name] = _directive;
        return app;
      },
      mount: function mount(rootContainer, isHydrate, isSVG) {
        if (!isMounted) {
          var vnode = createVNode(rootComponent, rootProps); // store app context on the root VNode.
          // this will be set on the root instance on initial mount.

          vnode.appContext = context; // HMR root reload

          if (true) {
            context.reload = function () {
              render(cloneVNode(vnode), rootContainer, isSVG);
            };
          }

          if (isHydrate && hydrate) {
            hydrate(vnode, rootContainer);
          } else {
            render(vnode, rootContainer, isSVG);
          }

          isMounted = true;
          app._container = rootContainer;
          rootContainer.__vue_app__ = app;

          if (true) {
            app._instance = vnode.component;
            devtoolsInitApp(app, version);
          }

          return vnode.component.proxy;
        } else if (true) {
          warn("App has already been mounted.\n" + "If you want to remount the same app, move your app creation logic " + "into a factory function and create fresh app instances for each " + "mount - e.g. `const createMyApp = () => createApp(App)`");
        }
      },
      unmount: function unmount() {
        if (isMounted) {
          render(null, app._container);

          if (true) {
            app._instance = null;
            devtoolsUnmountApp(app);
          }

          delete app._container.__vue_app__;
        } else if (true) {
          warn("Cannot unmount an app that is not mounted.");
        }
      },
      provide: function provide(key, value) {
        if ( true && key in context.provides) {
          warn("App already provides property with key \"".concat(String(key), "\". ") + "It will be overwritten with the new value.");
        } // TypeScript doesn't allow symbols as index type
        // https://github.com/Microsoft/TypeScript/issues/24587


        context.provides[key] = value;
        return app;
      }
    };
    return app;
  };
}

var hasMismatch = false;

var isSVGContainer = function isSVGContainer(container) {
  return /svg/.test(container.namespaceURI) && container.tagName !== 'foreignObject';
};

var isComment = function isComment(node) {
  return node.nodeType === 8;
}
/* COMMENT */
; // Note: hydration is DOM-specific
// But we have to place it in core due to tight coupling with core - splitting
// it out creates a ton of unnecessary complexity.
// Hydration also depends on some renderer internal logic which needs to be
// passed in via arguments.


function createHydrationFunctions(rendererInternals) {
  var mountComponent = rendererInternals.mt,
      patch = rendererInternals.p,
      _rendererInternals$o2 = rendererInternals.o,
      patchProp = _rendererInternals$o2.patchProp,
      nextSibling = _rendererInternals$o2.nextSibling,
      parentNode = _rendererInternals$o2.parentNode,
      remove = _rendererInternals$o2.remove,
      insert = _rendererInternals$o2.insert,
      createComment = _rendererInternals$o2.createComment;

  var hydrate = function hydrate(vnode, container) {
    if (!container.hasChildNodes()) {
       true && warn("Attempting to hydrate existing markup but container is empty. " + "Performing full mount instead.");
      patch(null, vnode, container);
      flushPostFlushCbs();
      return;
    }

    hasMismatch = false;
    hydrateNode(container.firstChild, vnode, null, null, null);
    flushPostFlushCbs();

    if (hasMismatch && !false) {
      // this error should show up in production
      console.error("Hydration completed but contains mismatches.");
    }
  };

  var hydrateNode = function hydrateNode(node, vnode, parentComponent, parentSuspense, slotScopeIds) {
    var optimized = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
    var isFragmentStart = isComment(node) && node.data === '[';

    var onMismatch = function onMismatch() {
      return handleMismatch(node, vnode, parentComponent, parentSuspense, slotScopeIds, isFragmentStart);
    };

    var type = vnode.type,
        ref = vnode.ref,
        shapeFlag = vnode.shapeFlag;
    var domType = node.nodeType;
    vnode.el = node;
    var nextNode = null;

    switch (type) {
      case Text:
        if (domType !== 3
        /* TEXT */
        ) {
            nextNode = onMismatch();
          } else {
          if (node.data !== vnode.children) {
            hasMismatch = true;
             true && warn("Hydration text mismatch:" + "\n- Client: ".concat(JSON.stringify(node.data)) + "\n- Server: ".concat(JSON.stringify(vnode.children)));
            node.data = vnode.children;
          }

          nextNode = nextSibling(node);
        }

        break;

      case Comment$1:
        if (domType !== 8
        /* COMMENT */
        || isFragmentStart) {
          nextNode = onMismatch();
        } else {
          nextNode = nextSibling(node);
        }

        break;

      case Static:
        if (domType !== 1
        /* ELEMENT */
        ) {
            nextNode = onMismatch();
          } else {
          // determine anchor, adopt content
          nextNode = node; // if the static vnode has its content stripped during build,
          // adopt it from the server-rendered HTML.

          var needToAdoptContent = !vnode.children.length;

          for (var i = 0; i < vnode.staticCount; i++) {
            if (needToAdoptContent) vnode.children += nextNode.outerHTML;

            if (i === vnode.staticCount - 1) {
              vnode.anchor = nextNode;
            }

            nextNode = nextSibling(nextNode);
          }

          return nextNode;
        }

        break;

      case Fragment:
        if (!isFragmentStart) {
          nextNode = onMismatch();
        } else {
          nextNode = hydrateFragment(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized);
        }

        break;

      default:
        if (shapeFlag & 1
        /* ELEMENT */
        ) {
            if (domType !== 1
            /* ELEMENT */
            || vnode.type.toLowerCase() !== node.tagName.toLowerCase()) {
              nextNode = onMismatch();
            } else {
              nextNode = hydrateElement(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized);
            }
          } else if (shapeFlag & 6
        /* COMPONENT */
        ) {
            // when setting up the render effect, if the initial vnode already
            // has .el set, the component will perform hydration instead of mount
            // on its sub-tree.
            vnode.slotScopeIds = slotScopeIds;
            var container = parentNode(node);
            mountComponent(vnode, container, null, parentComponent, parentSuspense, isSVGContainer(container), optimized); // component may be async, so in the case of fragments we cannot rely
            // on component's rendered output to determine the end of the fragment
            // instead, we do a lookahead to find the end anchor node.

            nextNode = isFragmentStart ? locateClosingAsyncAnchor(node) : nextSibling(node); // #3787
            // if component is async, it may get moved / unmounted before its
            // inner component is loaded, so we need to give it a placeholder
            // vnode that matches its adopted DOM.

            if (isAsyncWrapper(vnode)) {
              var subTree;

              if (isFragmentStart) {
                subTree = createVNode(Fragment);
                subTree.anchor = nextNode ? nextNode.previousSibling : container.lastChild;
              } else {
                subTree = node.nodeType === 3 ? createTextVNode('') : createVNode('div');
              }

              subTree.el = node;
              vnode.component.subTree = subTree;
            }
          } else if (shapeFlag & 64
        /* TELEPORT */
        ) {
            if (domType !== 8
            /* COMMENT */
            ) {
                nextNode = onMismatch();
              } else {
              nextNode = vnode.type.hydrate(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized, rendererInternals, hydrateChildren);
            }
          } else if (shapeFlag & 128
        /* SUSPENSE */
        ) {
            nextNode = vnode.type.hydrate(node, vnode, parentComponent, parentSuspense, isSVGContainer(parentNode(node)), slotScopeIds, optimized, rendererInternals, hydrateNode);
          } else if (true) {
          warn('Invalid HostVNode type:', type, "(".concat(_typeof(type), ")"));
        }

    }

    if (ref != null) {
      setRef(ref, null, parentSuspense, vnode);
    }

    return nextNode;
  };

  var hydrateElement = function hydrateElement(el, vnode, parentComponent, parentSuspense, slotScopeIds, optimized) {
    optimized = optimized || !!vnode.dynamicChildren;
    var type = vnode.type,
        props = vnode.props,
        patchFlag = vnode.patchFlag,
        shapeFlag = vnode.shapeFlag,
        dirs = vnode.dirs; // #4006 for form elements with non-string v-model value bindings
    // e.g. <option :value="obj">, <input type="checkbox" :true-value="1">

    var forcePatchValue = type === 'input' && dirs || type === 'option'; // skip props & children if this is hoisted static nodes

    if (forcePatchValue || patchFlag !== -1
    /* HOISTED */
    ) {
        if (dirs) {
          invokeDirectiveHook(vnode, null, parentComponent, 'created');
        } // props


        if (props) {
          if (forcePatchValue || !optimized || patchFlag & 16
          /* FULL_PROPS */
          || patchFlag & 32
          /* HYDRATE_EVENTS */
          ) {
            for (var key in props) {
              if (forcePatchValue && key.endsWith('value') || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isOn)(key) && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isReservedProp)(key)) {
                patchProp(el, key, null, props[key]);
              }
            }
          } else if (props.onClick) {
            // Fast path for click listeners (which is most often) to avoid
            // iterating through props.
            patchProp(el, 'onClick', null, props.onClick);
          }
        } // vnode / directive hooks


        var vnodeHooks;

        if (vnodeHooks = props && props.onVnodeBeforeMount) {
          invokeVNodeHook(vnodeHooks, parentComponent, vnode);
        }

        if (dirs) {
          invokeDirectiveHook(vnode, null, parentComponent, 'beforeMount');
        }

        if ((vnodeHooks = props && props.onVnodeMounted) || dirs) {
          queueEffectWithSuspense(function () {
            vnodeHooks && invokeVNodeHook(vnodeHooks, parentComponent, vnode);
            dirs && invokeDirectiveHook(vnode, null, parentComponent, 'mounted');
          }, parentSuspense);
        } // children


        if (shapeFlag & 16
        /* ARRAY_CHILDREN */
        && // skip if element has innerHTML / textContent
        !(props && (props.innerHTML || props.textContent))) {
          var next = hydrateChildren(el.firstChild, vnode, el, parentComponent, parentSuspense, slotScopeIds, optimized);
          var _hasWarned = false;

          while (next) {
            hasMismatch = true;

            if ( true && !_hasWarned) {
              warn("Hydration children mismatch in <".concat(vnode.type, ">: ") + "server rendered element contains more child nodes than client vdom.");
              _hasWarned = true;
            } // The SSRed DOM contains more nodes than it should. Remove them.


            var cur = next;
            next = next.nextSibling;
            remove(cur);
          }
        } else if (shapeFlag & 8
        /* TEXT_CHILDREN */
        ) {
            if (el.textContent !== vnode.children) {
              hasMismatch = true;
               true && warn("Hydration text content mismatch in <".concat(vnode.type, ">:\n") + "- Client: ".concat(el.textContent, "\n") + "- Server: ".concat(vnode.children));
              el.textContent = vnode.children;
            }
          }
      }

    return el.nextSibling;
  };

  var hydrateChildren = function hydrateChildren(node, parentVNode, container, parentComponent, parentSuspense, slotScopeIds, optimized) {
    optimized = optimized || !!parentVNode.dynamicChildren;
    var children = parentVNode.children;
    var l = children.length;
    var hasWarned = false;

    for (var i = 0; i < l; i++) {
      var vnode = optimized ? children[i] : children[i] = normalizeVNode(children[i]);

      if (node) {
        node = hydrateNode(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized);
      } else if (vnode.type === Text && !vnode.children) {
        continue;
      } else {
        hasMismatch = true;

        if ( true && !hasWarned) {
          warn("Hydration children mismatch in <".concat(container.tagName.toLowerCase(), ">: ") + "server rendered element contains fewer child nodes than client vdom.");
          hasWarned = true;
        } // the SSRed DOM didn't contain enough nodes. Mount the missing ones.


        patch(null, vnode, container, null, parentComponent, parentSuspense, isSVGContainer(container), slotScopeIds);
      }
    }

    return node;
  };

  var hydrateFragment = function hydrateFragment(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized) {
    var fragmentSlotScopeIds = vnode.slotScopeIds;

    if (fragmentSlotScopeIds) {
      slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
    }

    var container = parentNode(node);
    var next = hydrateChildren(nextSibling(node), vnode, container, parentComponent, parentSuspense, slotScopeIds, optimized);

    if (next && isComment(next) && next.data === ']') {
      return nextSibling(vnode.anchor = next);
    } else {
      // fragment didn't hydrate successfully, since we didn't get a end anchor
      // back. This should have led to node/children mismatch warnings.
      hasMismatch = true; // since the anchor is missing, we need to create one and insert it

      insert(vnode.anchor = createComment("]"), container, next);
      return next;
    }
  };

  var handleMismatch = function handleMismatch(node, vnode, parentComponent, parentSuspense, slotScopeIds, isFragment) {
    hasMismatch = true;
     true && warn("Hydration node mismatch:\n- Client vnode:", vnode.type, "\n- Server rendered DOM:", node, node.nodeType === 3
    /* TEXT */
    ? "(text)" : isComment(node) && node.data === '[' ? "(start of fragment)" : "");
    vnode.el = null;

    if (isFragment) {
      // remove excessive fragment nodes
      var end = locateClosingAsyncAnchor(node);

      while (true) {
        var _next2 = nextSibling(node);

        if (_next2 && _next2 !== end) {
          remove(_next2);
        } else {
          break;
        }
      }
    }

    var next = nextSibling(node);
    var container = parentNode(node);
    remove(node);
    patch(null, vnode, container, next, parentComponent, parentSuspense, isSVGContainer(container), slotScopeIds);
    return next;
  };

  var locateClosingAsyncAnchor = function locateClosingAsyncAnchor(node) {
    var match = 0;

    while (node) {
      node = nextSibling(node);

      if (node && isComment(node)) {
        if (node.data === '[') match++;

        if (node.data === ']') {
          if (match === 0) {
            return nextSibling(node);
          } else {
            match--;
          }
        }
      }
    }

    return node;
  };

  return [hydrate, hydrateNode];
}

var supported;
var perf;

function startMeasure(instance, type) {
  if (instance.appContext.config.performance && isSupported()) {
    perf.mark("vue-".concat(type, "-").concat(instance.uid));
  }

  if (true) {
    devtoolsPerfStart(instance, type, supported ? perf.now() : Date.now());
  }
}

function endMeasure(instance, type) {
  if (instance.appContext.config.performance && isSupported()) {
    var startTag = "vue-".concat(type, "-").concat(instance.uid);
    var endTag = startTag + ":end";
    perf.mark(endTag);
    perf.measure("<".concat(formatComponentName(instance, instance.type), "> ").concat(type), startTag, endTag);
    perf.clearMarks(startTag);
    perf.clearMarks(endTag);
  }

  if (true) {
    devtoolsPerfEnd(instance, type, supported ? perf.now() : Date.now());
  }
}

function isSupported() {
  if (supported !== undefined) {
    return supported;
  }
  /* eslint-disable no-restricted-globals */


  if (typeof window !== 'undefined' && window.performance) {
    supported = true;
    perf = window.performance;
  } else {
    supported = false;
  }
  /* eslint-enable no-restricted-globals */


  return supported;
}
/**
 * This is only called in esm-bundler builds.
 * It is called when a renderer is created, in `baseCreateRenderer` so that
 * importing runtime-core is side-effects free.
 *
 * istanbul-ignore-next
 */


function initFeatureFlags() {
  var needWarn = false;

  if (false) {}

  if (false) {}

  if ( true && needWarn) {
    console.warn("You are running the esm-bundler build of Vue. It is recommended to " + "configure your bundler to explicitly replace feature flag globals " + "with boolean literals to get proper tree-shaking in the final bundle. " + "See http://link.vuejs.org/feature-flags for more details.");
  }
}

var prodEffectOptions = {
  scheduler: queueJob,
  // #1801, #2043 component render effects should allow recursive updates
  allowRecurse: true
};

function createDevEffectOptions(instance) {
  return {
    scheduler: queueJob,
    allowRecurse: true,
    onTrack: instance.rtc ? function (e) {
      return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.invokeArrayFns)(instance.rtc, e);
    } : void 0,
    onTrigger: instance.rtg ? function (e) {
      return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.invokeArrayFns)(instance.rtg, e);
    } : void 0
  };
}

var queuePostRenderEffect = queueEffectWithSuspense;

var setRef = function setRef(rawRef, oldRawRef, parentSuspense, vnode) {
  var isUnmount = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(rawRef)) {
    rawRef.forEach(function (r, i) {
      return setRef(r, oldRawRef && ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(oldRawRef) ? oldRawRef[i] : oldRawRef), parentSuspense, vnode, isUnmount);
    });
    return;
  }

  if (isAsyncWrapper(vnode) && !isUnmount) {
    // when mounting async components, nothing needs to be done,
    // because the template ref is forwarded to inner component
    return;
  }

  var refValue = vnode.shapeFlag & 4
  /* STATEFUL_COMPONENT */
  ? getExposeProxy(vnode.component) || vnode.component.proxy : vnode.el;
  var value = isUnmount ? null : refValue;
  var owner = rawRef.i,
      ref = rawRef.r;

  if ( true && !owner) {
    warn("Missing ref owner context. ref cannot be used on hoisted vnodes. " + "A vnode with ref must be created inside the render function.");
    return;
  }

  var oldRef = oldRawRef && oldRawRef.r;
  var refs = owner.refs === _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ ? owner.refs = {} : owner.refs;
  var setupState = owner.setupState; // dynamic ref changed. unset old ref

  if (oldRef != null && oldRef !== ref) {
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(oldRef)) {
      refs[oldRef] = null;

      if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(setupState, oldRef)) {
        setupState[oldRef] = null;
      }
    } else if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isRef)(oldRef)) {
      oldRef.value = null;
    }
  }

  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(ref)) {
    var doSet = function doSet() {
      {
        refs[ref] = value;
      }

      if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(setupState, ref)) {
        setupState[ref] = value;
      }
    }; // #1789: for non-null values, set them after render
    // null values means this is unmount and it should not overwrite another
    // ref with the same key


    if (value) {
      doSet.id = -1;
      queuePostRenderEffect(doSet, parentSuspense);
    } else {
      doSet();
    }
  } else if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isRef)(ref)) {
    var _doSet = function _doSet() {
      ref.value = value;
    };

    if (value) {
      _doSet.id = -1;
      queuePostRenderEffect(_doSet, parentSuspense);
    } else {
      _doSet();
    }
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(ref)) {
    callWithErrorHandling(ref, owner, 12
    /* FUNCTION_REF */
    , [value, refs]);
  } else if (true) {
    warn('Invalid template ref type:', value, "(".concat(_typeof(value), ")"));
  }
};
/**
 * The createRenderer function accepts two generic arguments:
 * HostNode and HostElement, corresponding to Node and Element types in the
 * host environment. For example, for runtime-dom, HostNode would be the DOM
 * `Node` interface and HostElement would be the DOM `Element` interface.
 *
 * Custom renderers can pass in the platform specific types like this:
 *
 * ``` js
 * const { render, createApp } = createRenderer<Node, Element>({
 *   patchProp,
 *   ...nodeOps
 * })
 * ```
 */


function createRenderer(options) {
  return baseCreateRenderer(options);
} // Separate API for creating hydration-enabled renderer.
// Hydration logic is only used when calling this function, making it
// tree-shakable.


function createHydrationRenderer(options) {
  return baseCreateRenderer(options, createHydrationFunctions);
} // implementation


function baseCreateRenderer(options, createHydrationFns) {
  // compile-time feature flags check
  {
    initFeatureFlags();
  }

  if (true) {
    var target = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.getGlobalThis)();
    target.__VUE__ = true;
    setDevtoolsHook(target.__VUE_DEVTOOLS_GLOBAL_HOOK__);
  }

  var hostInsert = options.insert,
      hostRemove = options.remove,
      hostPatchProp = options.patchProp,
      hostForcePatchProp = options.forcePatchProp,
      hostCreateElement = options.createElement,
      hostCreateText = options.createText,
      hostCreateComment = options.createComment,
      hostSetText = options.setText,
      hostSetElementText = options.setElementText,
      hostParentNode = options.parentNode,
      hostNextSibling = options.nextSibling,
      _options$setScopeId = options.setScopeId,
      hostSetScopeId = _options$setScopeId === void 0 ? _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP : _options$setScopeId,
      hostCloneNode = options.cloneNode,
      hostInsertStaticContent = options.insertStaticContent; // Note: functions inside this closure should use `const xxx = () => {}`
  // style in order to prevent being inlined by minifiers.

  var patch = function patch(n1, n2, container) {
    var anchor = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
    var parentComponent = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
    var parentSuspense = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
    var isSVG = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
    var slotScopeIds = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : null;
    var optimized = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : false;

    // patching & not same type, unmount old tree
    if (n1 && !isSameVNodeType(n1, n2)) {
      anchor = getNextHostNode(n1);
      unmount(n1, parentComponent, parentSuspense, true);
      n1 = null;
    }

    if (n2.patchFlag === -2
    /* BAIL */
    ) {
        optimized = false;
        n2.dynamicChildren = null;
      }

    var type = n2.type,
        ref = n2.ref,
        shapeFlag = n2.shapeFlag;

    switch (type) {
      case Text:
        processText(n1, n2, container, anchor);
        break;

      case Comment$1:
        processCommentNode(n1, n2, container, anchor);
        break;

      case Static:
        if (n1 == null) {
          mountStaticNode(n2, container, anchor, isSVG);
        } else if (true) {
          patchStaticNode(n1, n2, container, isSVG);
        }

        break;

      case Fragment:
        processFragment(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        break;

      default:
        if (shapeFlag & 1
        /* ELEMENT */
        ) {
            processElement(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          } else if (shapeFlag & 6
        /* COMPONENT */
        ) {
            processComponent(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          } else if (shapeFlag & 64
        /* TELEPORT */
        ) {
            type.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals);
          } else if (shapeFlag & 128
        /* SUSPENSE */
        ) {
            type.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals);
          } else if (true) {
          warn('Invalid VNode type:', type, "(".concat(_typeof(type), ")"));
        }

    } // set ref


    if (ref != null && parentComponent) {
      setRef(ref, n1 && n1.ref, parentSuspense, n2 || n1, !n2);
    }
  };

  var processText = function processText(n1, n2, container, anchor) {
    if (n1 == null) {
      hostInsert(n2.el = hostCreateText(n2.children), container, anchor);
    } else {
      var el = n2.el = n1.el;

      if (n2.children !== n1.children) {
        hostSetText(el, n2.children);
      }
    }
  };

  var processCommentNode = function processCommentNode(n1, n2, container, anchor) {
    if (n1 == null) {
      hostInsert(n2.el = hostCreateComment(n2.children || ''), container, anchor);
    } else {
      // there's no support for dynamic comments
      n2.el = n1.el;
    }
  };

  var mountStaticNode = function mountStaticNode(n2, container, anchor, isSVG) {
    // static nodes are only present when used with compiler-dom/runtime-dom
    // which guarantees presence of hostInsertStaticContent.
    var nodes = hostInsertStaticContent(n2.children, container, anchor, isSVG, // pass cached nodes if the static node is being mounted multiple times
    // so that runtime-dom can simply cloneNode() instead of inserting new
    // HTML
    n2.staticCache); // first mount - this is the orignal hoisted vnode. cache nodes.

    if (!n2.el) {
      n2.staticCache = nodes;
    }

    n2.el = nodes[0];
    n2.anchor = nodes[nodes.length - 1];
  };
  /**
   * Dev / HMR only
   */


  var patchStaticNode = function patchStaticNode(n1, n2, container, isSVG) {
    // static nodes are only patched during dev for HMR
    if (n2.children !== n1.children) {
      var anchor = hostNextSibling(n1.anchor); // remove existing

      removeStaticNode(n1);

      var _hostInsertStaticCont = hostInsertStaticContent(n2.children, container, anchor, isSVG);

      var _hostInsertStaticCont2 = _slicedToArray(_hostInsertStaticCont, 2);

      n2.el = _hostInsertStaticCont2[0];
      n2.anchor = _hostInsertStaticCont2[1];
    } else {
      n2.el = n1.el;
      n2.anchor = n1.anchor;
    }
  };

  var moveStaticNode = function moveStaticNode(_ref12, container, nextSibling) {
    var el = _ref12.el,
        anchor = _ref12.anchor;
    var next;

    while (el && el !== anchor) {
      next = hostNextSibling(el);
      hostInsert(el, container, nextSibling);
      el = next;
    }

    hostInsert(anchor, container, nextSibling);
  };

  var removeStaticNode = function removeStaticNode(_ref13) {
    var el = _ref13.el,
        anchor = _ref13.anchor;
    var next;

    while (el && el !== anchor) {
      next = hostNextSibling(el);
      hostRemove(el);
      el = next;
    }

    hostRemove(anchor);
  };

  var processElement = function processElement(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) {
    isSVG = isSVG || n2.type === 'svg';

    if (n1 == null) {
      mountElement(n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
    } else {
      patchElement(n1, n2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
    }
  };

  var mountElement = function mountElement(vnode, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) {
    var el;
    var vnodeHook;
    var type = vnode.type,
        props = vnode.props,
        shapeFlag = vnode.shapeFlag,
        transition = vnode.transition,
        patchFlag = vnode.patchFlag,
        dirs = vnode.dirs;

    if (false
    /* HOISTED */
    ) {} else {
      el = vnode.el = hostCreateElement(vnode.type, isSVG, props && props.is, props); // mount children first, since some props may rely on child content
      // being already rendered, e.g. `<select value>`

      if (shapeFlag & 8
      /* TEXT_CHILDREN */
      ) {
          hostSetElementText(el, vnode.children);
        } else if (shapeFlag & 16
      /* ARRAY_CHILDREN */
      ) {
          mountChildren(vnode.children, el, null, parentComponent, parentSuspense, isSVG && type !== 'foreignObject', slotScopeIds, optimized || !!vnode.dynamicChildren);
        }

      if (dirs) {
        invokeDirectiveHook(vnode, null, parentComponent, 'created');
      } // props


      if (props) {
        for (var key in props) {
          if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isReservedProp)(key)) {
            hostPatchProp(el, key, null, props[key], isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
          }
        }

        if (vnodeHook = props.onVnodeBeforeMount) {
          invokeVNodeHook(vnodeHook, parentComponent, vnode);
        }
      } // scopeId


      setScopeId(el, vnode, vnode.scopeId, slotScopeIds, parentComponent);
    }

    if (true) {
      Object.defineProperty(el, '__vnode', {
        value: vnode,
        enumerable: false
      });
      Object.defineProperty(el, '__vueParentComponent', {
        value: parentComponent,
        enumerable: false
      });
    }

    if (dirs) {
      invokeDirectiveHook(vnode, null, parentComponent, 'beforeMount');
    } // #1583 For inside suspense + suspense not resolved case, enter hook should call when suspense resolved
    // #1689 For inside suspense + suspense resolved case, just call it


    var needCallTransitionHooks = (!parentSuspense || parentSuspense && !parentSuspense.pendingBranch) && transition && !transition.persisted;

    if (needCallTransitionHooks) {
      transition.beforeEnter(el);
    }

    hostInsert(el, container, anchor);

    if ((vnodeHook = props && props.onVnodeMounted) || needCallTransitionHooks || dirs) {
      queuePostRenderEffect(function () {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
        needCallTransitionHooks && transition.enter(el);
        dirs && invokeDirectiveHook(vnode, null, parentComponent, 'mounted');
      }, parentSuspense);
    }
  };

  var setScopeId = function setScopeId(el, vnode, scopeId, slotScopeIds, parentComponent) {
    if (scopeId) {
      hostSetScopeId(el, scopeId);
    }

    if (slotScopeIds) {
      for (var i = 0; i < slotScopeIds.length; i++) {
        hostSetScopeId(el, slotScopeIds[i]);
      }
    }

    if (parentComponent) {
      var subTree = parentComponent.subTree;

      if ( true && subTree.patchFlag > 0 && subTree.patchFlag & 2048
      /* DEV_ROOT_FRAGMENT */
      ) {
          subTree = filterSingleRoot(subTree.children) || subTree;
        }

      if (vnode === subTree) {
        var parentVNode = parentComponent.vnode;
        setScopeId(el, parentVNode, parentVNode.scopeId, parentVNode.slotScopeIds, parentComponent.parent);
      }
    }
  };

  var mountChildren = function mountChildren(children, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) {
    var start = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 0;

    for (var i = start; i < children.length; i++) {
      var child = children[i] = optimized ? cloneIfMounted(children[i]) : normalizeVNode(children[i]);
      patch(null, child, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
    }
  };

  var patchElement = function patchElement(n1, n2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) {
    var el = n2.el = n1.el;
    var patchFlag = n2.patchFlag,
        dynamicChildren = n2.dynamicChildren,
        dirs = n2.dirs; // #1426 take the old vnode's patch flag into account since user may clone a
    // compiler-generated vnode, which de-opts to FULL_PROPS

    patchFlag |= n1.patchFlag & 16
    /* FULL_PROPS */
    ;
    var oldProps = n1.props || _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ;
    var newProps = n2.props || _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ;
    var vnodeHook;

    if (vnodeHook = newProps.onVnodeBeforeUpdate) {
      invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
    }

    if (dirs) {
      invokeDirectiveHook(n2, n1, parentComponent, 'beforeUpdate');
    }

    if ( true && isHmrUpdating) {
      // HMR updated, force full diff
      patchFlag = 0;
      optimized = false;
      dynamicChildren = null;
    }

    if (patchFlag > 0) {
      // the presence of a patchFlag means this element's render code was
      // generated by the compiler and can take the fast path.
      // in this path old node and new node are guaranteed to have the same shape
      // (i.e. at the exact same position in the source template)
      if (patchFlag & 16
      /* FULL_PROPS */
      ) {
          // element props contain dynamic keys, full diff needed
          patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG);
        } else {
        // class
        // this flag is matched when the element has dynamic class bindings.
        if (patchFlag & 2
        /* CLASS */
        ) {
            if (oldProps["class"] !== newProps["class"]) {
              hostPatchProp(el, 'class', null, newProps["class"], isSVG);
            }
          } // style
        // this flag is matched when the element has dynamic style bindings


        if (patchFlag & 4
        /* STYLE */
        ) {
            hostPatchProp(el, 'style', oldProps.style, newProps.style, isSVG);
          } // props
        // This flag is matched when the element has dynamic prop/attr bindings
        // other than class and style. The keys of dynamic prop/attrs are saved for
        // faster iteration.
        // Note dynamic keys like :[foo]="bar" will cause this optimization to
        // bail out and go through a full diff because we need to unset the old key


        if (patchFlag & 8
        /* PROPS */
        ) {
            // if the flag is present then dynamicProps must be non-null
            var propsToUpdate = n2.dynamicProps;

            for (var i = 0; i < propsToUpdate.length; i++) {
              var key = propsToUpdate[i];
              var prev = oldProps[key];
              var next = newProps[key];

              if (next !== prev || hostForcePatchProp && hostForcePatchProp(el, key)) {
                hostPatchProp(el, key, prev, next, isSVG, n1.children, parentComponent, parentSuspense, unmountChildren);
              }
            }
          }
      } // text
      // This flag is matched when the element has only dynamic text children.


      if (patchFlag & 1
      /* TEXT */
      ) {
          if (n1.children !== n2.children) {
            hostSetElementText(el, n2.children);
          }
        }
    } else if (!optimized && dynamicChildren == null) {
      // unoptimized, full diff
      patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG);
    }

    var areChildrenSVG = isSVG && n2.type !== 'foreignObject';

    if (dynamicChildren) {
      patchBlockChildren(n1.dynamicChildren, dynamicChildren, el, parentComponent, parentSuspense, areChildrenSVG, slotScopeIds);

      if ( true && parentComponent && parentComponent.type.__hmrId) {
        traverseStaticChildren(n1, n2);
      }
    } else if (!optimized) {
      // full diff
      patchChildren(n1, n2, el, null, parentComponent, parentSuspense, areChildrenSVG, slotScopeIds, false);
    }

    if ((vnodeHook = newProps.onVnodeUpdated) || dirs) {
      queuePostRenderEffect(function () {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
        dirs && invokeDirectiveHook(n2, n1, parentComponent, 'updated');
      }, parentSuspense);
    }
  }; // The fast path for blocks.


  var patchBlockChildren = function patchBlockChildren(oldChildren, newChildren, fallbackContainer, parentComponent, parentSuspense, isSVG, slotScopeIds) {
    for (var i = 0; i < newChildren.length; i++) {
      var oldVNode = oldChildren[i];
      var newVNode = newChildren[i]; // Determine the container (parent element) for the patch.

      var container = // oldVNode may be an errored async setup() component inside Suspense
      // which will not have a mounted element
      oldVNode.el && ( // - In the case of a Fragment, we need to provide the actual parent
      // of the Fragment itself so it can move its children.
      oldVNode.type === Fragment || // - In the case of different nodes, there is going to be a replacement
      // which also requires the correct parent container
      !isSameVNodeType(oldVNode, newVNode) || // - In the case of a component, it could contain anything.
      oldVNode.shapeFlag & 6
      /* COMPONENT */
      || oldVNode.shapeFlag & 64
      /* TELEPORT */
      ) ? hostParentNode(oldVNode.el) : // In other cases, the parent container is not actually used so we
      // just pass the block element here to avoid a DOM parentNode call.
      fallbackContainer;
      patch(oldVNode, newVNode, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, true);
    }
  };

  var patchProps = function patchProps(el, vnode, oldProps, newProps, parentComponent, parentSuspense, isSVG) {
    if (oldProps !== newProps) {
      for (var key in newProps) {
        // empty string is not valid prop
        if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isReservedProp)(key)) continue;
        var next = newProps[key];
        var prev = oldProps[key];

        if (next !== prev || hostForcePatchProp && hostForcePatchProp(el, key)) {
          hostPatchProp(el, key, prev, next, isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
        }
      }

      if (oldProps !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ) {
        for (var _key14 in oldProps) {
          if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isReservedProp)(_key14) && !(_key14 in newProps)) {
            hostPatchProp(el, _key14, oldProps[_key14], null, isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
          }
        }
      }
    }
  };

  var processFragment = function processFragment(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) {
    var fragmentStartAnchor = n2.el = n1 ? n1.el : hostCreateText('');
    var fragmentEndAnchor = n2.anchor = n1 ? n1.anchor : hostCreateText('');
    var patchFlag = n2.patchFlag,
        dynamicChildren = n2.dynamicChildren,
        fragmentSlotScopeIds = n2.slotScopeIds;

    if (dynamicChildren) {
      optimized = true;
    } // check if this is a slot fragment with :slotted scope ids


    if (fragmentSlotScopeIds) {
      slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
    }

    if ( true && isHmrUpdating) {
      // HMR updated, force full diff
      patchFlag = 0;
      optimized = false;
      dynamicChildren = null;
    }

    if (n1 == null) {
      hostInsert(fragmentStartAnchor, container, anchor);
      hostInsert(fragmentEndAnchor, container, anchor); // a fragment can only have array children
      // since they are either generated by the compiler, or implicitly created
      // from arrays.

      mountChildren(n2.children, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
    } else {
      if (patchFlag > 0 && patchFlag & 64
      /* STABLE_FRAGMENT */
      && dynamicChildren && // #2715 the previous fragment could've been a BAILed one as a result
      // of renderSlot() with no valid children
      n1.dynamicChildren) {
        // a stable fragment (template root or <template v-for>) doesn't need to
        // patch children order, but it may contain dynamicChildren.
        patchBlockChildren(n1.dynamicChildren, dynamicChildren, container, parentComponent, parentSuspense, isSVG, slotScopeIds);

        if ( true && parentComponent && parentComponent.type.__hmrId) {
          traverseStaticChildren(n1, n2);
        } else if ( // #2080 if the stable fragment has a key, it's a <template v-for> that may
        //  get moved around. Make sure all root level vnodes inherit el.
        // #2134 or if it's a component root, it may also get moved around
        // as the component is being moved.
        n2.key != null || parentComponent && n2 === parentComponent.subTree) {
          traverseStaticChildren(n1, n2, true
          /* shallow */
          );
        }
      } else {
        // keyed / unkeyed, or manual fragments.
        // for keyed & unkeyed, since they are compiler generated from v-for,
        // each child is guaranteed to be a block so the fragment will never
        // have dynamicChildren.
        patchChildren(n1, n2, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
      }
    }
  };

  var processComponent = function processComponent(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) {
    n2.slotScopeIds = slotScopeIds;

    if (n1 == null) {
      if (n2.shapeFlag & 512
      /* COMPONENT_KEPT_ALIVE */
      ) {
          parentComponent.ctx.activate(n2, container, anchor, isSVG, optimized);
        } else {
        mountComponent(n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
      }
    } else {
      updateComponent(n1, n2, optimized);
    }
  };

  var mountComponent = function mountComponent(initialVNode, container, anchor, parentComponent, parentSuspense, isSVG, optimized) {
    var instance = initialVNode.component = createComponentInstance(initialVNode, parentComponent, parentSuspense);

    if ( true && instance.type.__hmrId) {
      registerHMR(instance);
    }

    if (true) {
      pushWarningContext(initialVNode);
      startMeasure(instance, "mount");
    } // inject renderer internals for keepAlive


    if (isKeepAlive(initialVNode)) {
      instance.ctx.renderer = internals;
    } // resolve props and slots for setup context


    {
      if (true) {
        startMeasure(instance, "init");
      }

      setupComponent(instance);

      if (true) {
        endMeasure(instance, "init");
      }
    } // setup() is async. This component relies on async logic to be resolved
    // before proceeding

    if (instance.asyncDep) {
      parentSuspense && parentSuspense.registerDep(instance, setupRenderEffect); // Give it a placeholder if this is not hydration
      // TODO handle self-defined fallback

      if (!initialVNode.el) {
        var placeholder = instance.subTree = createVNode(Comment$1);
        processCommentNode(null, placeholder, container, anchor);
      }

      return;
    }

    setupRenderEffect(instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized);

    if (true) {
      popWarningContext();
      endMeasure(instance, "mount");
    }
  };

  var updateComponent = function updateComponent(n1, n2, optimized) {
    var instance = n2.component = n1.component;

    if (shouldUpdateComponent(n1, n2, optimized)) {
      if (instance.asyncDep && !instance.asyncResolved) {
        // async & still pending - just update props and slots
        // since the component's reactive effect for render isn't set-up yet
        if (true) {
          pushWarningContext(n2);
        }

        updateComponentPreRender(instance, n2, optimized);

        if (true) {
          popWarningContext();
        }

        return;
      } else {
        // normal update
        instance.next = n2; // in case the child component is also queued, remove it to avoid
        // double updating the same child component in the same flush.

        invalidateJob(instance.update); // instance.update is the reactive effect runner.

        instance.update();
      }
    } else {
      // no update needed. just copy over properties
      n2.component = n1.component;
      n2.el = n1.el;
      instance.vnode = n2;
    }
  };

  var setupRenderEffect = function setupRenderEffect(instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized) {
    // create reactive effect for rendering
    instance.update = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.effect)(function componentEffect() {
      if (!instance.isMounted) {
        var vnodeHook;
        var _initialVNode = initialVNode,
            el = _initialVNode.el,
            props = _initialVNode.props;
        var bm = instance.bm,
            m = instance.m,
            parent = instance.parent; // beforeMount hook

        if (bm) {
          (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.invokeArrayFns)(bm);
        } // onVnodeBeforeMount


        if (vnodeHook = props && props.onVnodeBeforeMount) {
          invokeVNodeHook(vnodeHook, parent, initialVNode);
        }

        if (el && hydrateNode) {
          // vnode has adopted host node - perform hydration instead of mount.
          var hydrateSubTree = function hydrateSubTree() {
            if (true) {
              startMeasure(instance, "render");
            }

            instance.subTree = renderComponentRoot(instance);

            if (true) {
              endMeasure(instance, "render");
            }

            if (true) {
              startMeasure(instance, "hydrate");
            }

            hydrateNode(el, instance.subTree, instance, parentSuspense, null);

            if (true) {
              endMeasure(instance, "hydrate");
            }
          };

          if (isAsyncWrapper(initialVNode)) {
            initialVNode.type.__asyncLoader().then( // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            function () {
              return !instance.isUnmounted && hydrateSubTree();
            });
          } else {
            hydrateSubTree();
          }
        } else {
          if (true) {
            startMeasure(instance, "render");
          }

          var subTree = instance.subTree = renderComponentRoot(instance);

          if (true) {
            endMeasure(instance, "render");
          }

          if (true) {
            startMeasure(instance, "patch");
          }

          patch(null, subTree, container, anchor, instance, parentSuspense, isSVG);

          if (true) {
            endMeasure(instance, "patch");
          }

          initialVNode.el = subTree.el;
        } // mounted hook


        if (m) {
          queuePostRenderEffect(m, parentSuspense);
        } // onVnodeMounted


        if (vnodeHook = props && props.onVnodeMounted) {
          var scopedInitialVNode = initialVNode;
          queuePostRenderEffect(function () {
            return invokeVNodeHook(vnodeHook, parent, scopedInitialVNode);
          }, parentSuspense);
        } // activated hook for keep-alive roots.
        // #1742 activated hook must be accessed after first render
        // since the hook may be injected by a child keep-alive


        if (initialVNode.shapeFlag & 256
        /* COMPONENT_SHOULD_KEEP_ALIVE */
        ) {
            instance.a && queuePostRenderEffect(instance.a, parentSuspense);
          }

        instance.isMounted = true;

        if (true) {
          devtoolsComponentAdded(instance);
        } // #2458: deference mount-only object parameters to prevent memleaks


        initialVNode = container = anchor = null;
      } else {
        // updateComponent
        // This is triggered by mutation of component's own state (next: null)
        // OR parent calling processComponent (next: VNode)
        var next = instance.next,
            bu = instance.bu,
            u = instance.u,
            _parent = instance.parent,
            vnode = instance.vnode;
        var originNext = next;

        var _vnodeHook;

        if (true) {
          pushWarningContext(next || instance.vnode);
        }

        if (next) {
          next.el = vnode.el;
          updateComponentPreRender(instance, next, optimized);
        } else {
          next = vnode;
        } // beforeUpdate hook


        if (bu) {
          (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.invokeArrayFns)(bu);
        } // onVnodeBeforeUpdate


        if (_vnodeHook = next.props && next.props.onVnodeBeforeUpdate) {
          invokeVNodeHook(_vnodeHook, _parent, next, vnode);
        } // render


        if (true) {
          startMeasure(instance, "render");
        }

        var nextTree = renderComponentRoot(instance);

        if (true) {
          endMeasure(instance, "render");
        }

        var prevTree = instance.subTree;
        instance.subTree = nextTree;

        if (true) {
          startMeasure(instance, "patch");
        }

        patch(prevTree, nextTree, // parent may have changed if it's in a teleport
        hostParentNode(prevTree.el), // anchor may have changed if it's in a fragment
        getNextHostNode(prevTree), instance, parentSuspense, isSVG);

        if (true) {
          endMeasure(instance, "patch");
        }

        next.el = nextTree.el;

        if (originNext === null) {
          // self-triggered update. In case of HOC, update parent component
          // vnode el. HOC is indicated by parent instance's subTree pointing
          // to child component's vnode
          updateHOCHostEl(instance, nextTree.el);
        } // updated hook


        if (u) {
          queuePostRenderEffect(u, parentSuspense);
        } // onVnodeUpdated


        if (_vnodeHook = next.props && next.props.onVnodeUpdated) {
          queuePostRenderEffect(function () {
            return invokeVNodeHook(_vnodeHook, _parent, next, vnode);
          }, parentSuspense);
        }

        if (true) {
          devtoolsComponentUpdated(instance);
        }

        if (true) {
          popWarningContext();
        }
      }
    },  true ? createDevEffectOptions(instance) : 0);

    if (true) {
      // @ts-ignore
      instance.update.ownerInstance = instance;
    }
  };

  var updateComponentPreRender = function updateComponentPreRender(instance, nextVNode, optimized) {
    nextVNode.component = instance;
    var prevProps = instance.vnode.props;
    instance.vnode = nextVNode;
    instance.next = null;
    updateProps(instance, nextVNode.props, prevProps, optimized);
    updateSlots(instance, nextVNode.children, optimized);
    (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.pauseTracking)(); // props update may have triggered pre-flush watchers.
    // flush them before the render update.

    flushPreFlushCbs(undefined, instance.update);
    (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.resetTracking)();
  };

  var patchChildren = function patchChildren(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds) {
    var optimized = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : false;
    var c1 = n1 && n1.children;
    var prevShapeFlag = n1 ? n1.shapeFlag : 0;
    var c2 = n2.children;
    var patchFlag = n2.patchFlag,
        shapeFlag = n2.shapeFlag; // fast path

    if (patchFlag > 0) {
      if (patchFlag & 128
      /* KEYED_FRAGMENT */
      ) {
          // this could be either fully-keyed or mixed (some keyed some not)
          // presence of patchFlag means children are guaranteed to be arrays
          patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          return;
        } else if (patchFlag & 256
      /* UNKEYED_FRAGMENT */
      ) {
          // unkeyed
          patchUnkeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          return;
        }
    } // children has 3 possibilities: text, array or no children.


    if (shapeFlag & 8
    /* TEXT_CHILDREN */
    ) {
        // text children fast path
        if (prevShapeFlag & 16
        /* ARRAY_CHILDREN */
        ) {
            unmountChildren(c1, parentComponent, parentSuspense);
          }

        if (c2 !== c1) {
          hostSetElementText(container, c2);
        }
      } else {
      if (prevShapeFlag & 16
      /* ARRAY_CHILDREN */
      ) {
          // prev children was array
          if (shapeFlag & 16
          /* ARRAY_CHILDREN */
          ) {
              // two arrays, cannot assume anything, do full diff
              patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
            } else {
            // no new children, just unmount old
            unmountChildren(c1, parentComponent, parentSuspense, true);
          }
        } else {
        // prev children was text OR null
        // new children is array OR null
        if (prevShapeFlag & 8
        /* TEXT_CHILDREN */
        ) {
            hostSetElementText(container, '');
          } // mount new if array


        if (shapeFlag & 16
        /* ARRAY_CHILDREN */
        ) {
            mountChildren(c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          }
      }
    }
  };

  var patchUnkeyedChildren = function patchUnkeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) {
    c1 = c1 || _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_ARR;
    c2 = c2 || _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_ARR;
    var oldLength = c1.length;
    var newLength = c2.length;
    var commonLength = Math.min(oldLength, newLength);
    var i;

    for (i = 0; i < commonLength; i++) {
      var nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
      patch(c1[i], nextChild, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
    }

    if (oldLength > newLength) {
      // remove old
      unmountChildren(c1, parentComponent, parentSuspense, true, false, commonLength);
    } else {
      // mount new
      mountChildren(c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, commonLength);
    }
  }; // can be all-keyed or mixed


  var patchKeyedChildren = function patchKeyedChildren(c1, c2, container, parentAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) {
    var i = 0;
    var l2 = c2.length;
    var e1 = c1.length - 1; // prev ending index

    var e2 = l2 - 1; // next ending index
    // 1. sync from start
    // (a b) c
    // (a b) d e

    while (i <= e1 && i <= e2) {
      var n1 = c1[i];
      var n2 = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);

      if (isSameVNodeType(n1, n2)) {
        patch(n1, n2, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
      } else {
        break;
      }

      i++;
    } // 2. sync from end
    // a (b c)
    // d e (b c)


    while (i <= e1 && i <= e2) {
      var _n2 = c1[e1];

      var _n3 = c2[e2] = optimized ? cloneIfMounted(c2[e2]) : normalizeVNode(c2[e2]);

      if (isSameVNodeType(_n2, _n3)) {
        patch(_n2, _n3, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
      } else {
        break;
      }

      e1--;
      e2--;
    } // 3. common sequence + mount
    // (a b)
    // (a b) c
    // i = 2, e1 = 1, e2 = 2
    // (a b)
    // c (a b)
    // i = 0, e1 = -1, e2 = 0


    if (i > e1) {
      if (i <= e2) {
        var nextPos = e2 + 1;
        var anchor = nextPos < l2 ? c2[nextPos].el : parentAnchor;

        while (i <= e2) {
          patch(null, c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]), container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          i++;
        }
      }
    } // 4. common sequence + unmount
    // (a b) c
    // (a b)
    // i = 2, e1 = 2, e2 = 1
    // a (b c)
    // (b c)
    // i = 0, e1 = 0, e2 = -1
    else if (i > e2) {
        while (i <= e1) {
          unmount(c1[i], parentComponent, parentSuspense, true);
          i++;
        }
      } // 5. unknown sequence
      // [i ... e1 + 1]: a b [c d e] f g
      // [i ... e2 + 1]: a b [e d c h] f g
      // i = 2, e1 = 4, e2 = 5
      else {
          var s1 = i; // prev starting index

          var s2 = i; // next starting index
          // 5.1 build key:index map for newChildren

          var keyToNewIndexMap = new Map();

          for (i = s2; i <= e2; i++) {
            var nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);

            if (nextChild.key != null) {
              if ( true && keyToNewIndexMap.has(nextChild.key)) {
                warn("Duplicate keys found during update:", JSON.stringify(nextChild.key), "Make sure keys are unique.");
              }

              keyToNewIndexMap.set(nextChild.key, i);
            }
          } // 5.2 loop through old children left to be patched and try to patch
          // matching nodes & remove nodes that are no longer present


          var j;
          var patched = 0;
          var toBePatched = e2 - s2 + 1;
          var moved = false; // used to track whether any node has moved

          var maxNewIndexSoFar = 0; // works as Map<newIndex, oldIndex>
          // Note that oldIndex is offset by +1
          // and oldIndex = 0 is a special value indicating the new node has
          // no corresponding old node.
          // used for determining longest stable subsequence

          var newIndexToOldIndexMap = new Array(toBePatched);

          for (i = 0; i < toBePatched; i++) {
            newIndexToOldIndexMap[i] = 0;
          }

          for (i = s1; i <= e1; i++) {
            var prevChild = c1[i];

            if (patched >= toBePatched) {
              // all new children have been patched so this can only be a removal
              unmount(prevChild, parentComponent, parentSuspense, true);
              continue;
            }

            var newIndex = void 0;

            if (prevChild.key != null) {
              newIndex = keyToNewIndexMap.get(prevChild.key);
            } else {
              // key-less node, try to locate a key-less node of the same type
              for (j = s2; j <= e2; j++) {
                if (newIndexToOldIndexMap[j - s2] === 0 && isSameVNodeType(prevChild, c2[j])) {
                  newIndex = j;
                  break;
                }
              }
            }

            if (newIndex === undefined) {
              unmount(prevChild, parentComponent, parentSuspense, true);
            } else {
              newIndexToOldIndexMap[newIndex - s2] = i + 1;

              if (newIndex >= maxNewIndexSoFar) {
                maxNewIndexSoFar = newIndex;
              } else {
                moved = true;
              }

              patch(prevChild, c2[newIndex], container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
              patched++;
            }
          } // 5.3 move and mount
          // generate longest stable subsequence only when nodes have moved


          var increasingNewIndexSequence = moved ? getSequence(newIndexToOldIndexMap) : _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_ARR;
          j = increasingNewIndexSequence.length - 1; // looping backwards so that we can use last patched node as anchor

          for (i = toBePatched - 1; i >= 0; i--) {
            var nextIndex = s2 + i;
            var _nextChild = c2[nextIndex];

            var _anchor2 = nextIndex + 1 < l2 ? c2[nextIndex + 1].el : parentAnchor;

            if (newIndexToOldIndexMap[i] === 0) {
              // mount new
              patch(null, _nextChild, container, _anchor2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
            } else if (moved) {
              // move if:
              // There is no stable subsequence (e.g. a reverse)
              // OR current node is not among the stable sequence
              if (j < 0 || i !== increasingNewIndexSequence[j]) {
                move(_nextChild, container, _anchor2, 2
                /* REORDER */
                );
              } else {
                j--;
              }
            }
          }
        }
  };

  var move = function move(vnode, container, anchor, moveType) {
    var parentSuspense = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
    var el = vnode.el,
        type = vnode.type,
        transition = vnode.transition,
        children = vnode.children,
        shapeFlag = vnode.shapeFlag;

    if (shapeFlag & 6
    /* COMPONENT */
    ) {
        move(vnode.component.subTree, container, anchor, moveType);
        return;
      }

    if (shapeFlag & 128
    /* SUSPENSE */
    ) {
        vnode.suspense.move(container, anchor, moveType);
        return;
      }

    if (shapeFlag & 64
    /* TELEPORT */
    ) {
        type.move(vnode, container, anchor, internals);
        return;
      }

    if (type === Fragment) {
      hostInsert(el, container, anchor);

      for (var i = 0; i < children.length; i++) {
        move(children[i], container, anchor, moveType);
      }

      hostInsert(vnode.anchor, container, anchor);
      return;
    }

    if (type === Static) {
      moveStaticNode(vnode, container, anchor);
      return;
    } // single nodes


    var needTransition = moveType !== 2
    /* REORDER */
    && shapeFlag & 1
    /* ELEMENT */
    && transition;

    if (needTransition) {
      if (moveType === 0
      /* ENTER */
      ) {
          transition.beforeEnter(el);
          hostInsert(el, container, anchor);
          queuePostRenderEffect(function () {
            return transition.enter(el);
          }, parentSuspense);
        } else {
        var leave = transition.leave,
            delayLeave = transition.delayLeave,
            afterLeave = transition.afterLeave;

        var _remove = function _remove() {
          return hostInsert(el, container, anchor);
        };

        var performLeave = function performLeave() {
          leave(el, function () {
            _remove();

            afterLeave && afterLeave();
          });
        };

        if (delayLeave) {
          delayLeave(el, _remove, performLeave);
        } else {
          performLeave();
        }
      }
    } else {
      hostInsert(el, container, anchor);
    }
  };

  var unmount = function unmount(vnode, parentComponent, parentSuspense) {
    var doRemove = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    var optimized = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
    var type = vnode.type,
        props = vnode.props,
        ref = vnode.ref,
        children = vnode.children,
        dynamicChildren = vnode.dynamicChildren,
        shapeFlag = vnode.shapeFlag,
        patchFlag = vnode.patchFlag,
        dirs = vnode.dirs; // unset ref

    if (ref != null) {
      setRef(ref, null, parentSuspense, vnode, true);
    }

    if (shapeFlag & 256
    /* COMPONENT_SHOULD_KEEP_ALIVE */
    ) {
        parentComponent.ctx.deactivate(vnode);
        return;
      }

    var shouldInvokeDirs = shapeFlag & 1
    /* ELEMENT */
    && dirs;
    var vnodeHook;

    if (vnodeHook = props && props.onVnodeBeforeUnmount) {
      invokeVNodeHook(vnodeHook, parentComponent, vnode);
    }

    if (shapeFlag & 6
    /* COMPONENT */
    ) {
        unmountComponent(vnode.component, parentSuspense, doRemove);
      } else {
      if (shapeFlag & 128
      /* SUSPENSE */
      ) {
          vnode.suspense.unmount(parentSuspense, doRemove);
          return;
        }

      if (shouldInvokeDirs) {
        invokeDirectiveHook(vnode, null, parentComponent, 'beforeUnmount');
      }

      if (shapeFlag & 64
      /* TELEPORT */
      ) {
          vnode.type.remove(vnode, parentComponent, parentSuspense, optimized, internals, doRemove);
        } else if (dynamicChildren && ( // #1153: fast path should not be taken for non-stable (v-for) fragments
      type !== Fragment || patchFlag > 0 && patchFlag & 64
      /* STABLE_FRAGMENT */
      )) {
        // fast path for block nodes: only need to unmount dynamic children.
        unmountChildren(dynamicChildren, parentComponent, parentSuspense, false, true);
      } else if (type === Fragment && (patchFlag & 128
      /* KEYED_FRAGMENT */
      || patchFlag & 256
      /* UNKEYED_FRAGMENT */
      ) || !optimized && shapeFlag & 16
      /* ARRAY_CHILDREN */
      ) {
        unmountChildren(children, parentComponent, parentSuspense);
      }

      if (doRemove) {
        remove(vnode);
      }
    }

    if ((vnodeHook = props && props.onVnodeUnmounted) || shouldInvokeDirs) {
      queuePostRenderEffect(function () {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
        shouldInvokeDirs && invokeDirectiveHook(vnode, null, parentComponent, 'unmounted');
      }, parentSuspense);
    }
  };

  var remove = function remove(vnode) {
    var type = vnode.type,
        el = vnode.el,
        anchor = vnode.anchor,
        transition = vnode.transition;

    if (type === Fragment) {
      removeFragment(el, anchor);
      return;
    }

    if (type === Static) {
      removeStaticNode(vnode);
      return;
    }

    var performRemove = function performRemove() {
      hostRemove(el);

      if (transition && !transition.persisted && transition.afterLeave) {
        transition.afterLeave();
      }
    };

    if (vnode.shapeFlag & 1
    /* ELEMENT */
    && transition && !transition.persisted) {
      var leave = transition.leave,
          delayLeave = transition.delayLeave;

      var performLeave = function performLeave() {
        return leave(el, performRemove);
      };

      if (delayLeave) {
        delayLeave(vnode.el, performRemove, performLeave);
      } else {
        performLeave();
      }
    } else {
      performRemove();
    }
  };

  var removeFragment = function removeFragment(cur, end) {
    // For fragments, directly remove all contained DOM nodes.
    // (fragment child nodes cannot have transition)
    var next;

    while (cur !== end) {
      next = hostNextSibling(cur);
      hostRemove(cur);
      cur = next;
    }

    hostRemove(end);
  };

  var unmountComponent = function unmountComponent(instance, parentSuspense, doRemove) {
    if ( true && instance.type.__hmrId) {
      unregisterHMR(instance);
    }

    var bum = instance.bum,
        effects = instance.effects,
        update = instance.update,
        subTree = instance.subTree,
        um = instance.um; // beforeUnmount hook

    if (bum) {
      (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.invokeArrayFns)(bum);
    }

    if (effects) {
      for (var i = 0; i < effects.length; i++) {
        (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.stop)(effects[i]);
      }
    } // update may be null if a component is unmounted before its async
    // setup has resolved.


    if (update) {
      (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.stop)(update);
      unmount(subTree, instance, parentSuspense, doRemove);
    } // unmounted hook


    if (um) {
      queuePostRenderEffect(um, parentSuspense);
    }

    queuePostRenderEffect(function () {
      instance.isUnmounted = true;
    }, parentSuspense); // A component with async dep inside a pending suspense is unmounted before
    // its async dep resolves. This should remove the dep from the suspense, and
    // cause the suspense to resolve immediately if that was the last dep.

    if (parentSuspense && parentSuspense.pendingBranch && !parentSuspense.isUnmounted && instance.asyncDep && !instance.asyncResolved && instance.suspenseId === parentSuspense.pendingId) {
      parentSuspense.deps--;

      if (parentSuspense.deps === 0) {
        parentSuspense.resolve();
      }
    }

    if (true) {
      devtoolsComponentRemoved(instance);
    }
  };

  var unmountChildren = function unmountChildren(children, parentComponent, parentSuspense) {
    var doRemove = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    var optimized = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
    var start = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

    for (var i = start; i < children.length; i++) {
      unmount(children[i], parentComponent, parentSuspense, doRemove, optimized);
    }
  };

  var getNextHostNode = function getNextHostNode(vnode) {
    if (vnode.shapeFlag & 6
    /* COMPONENT */
    ) {
        return getNextHostNode(vnode.component.subTree);
      }

    if (vnode.shapeFlag & 128
    /* SUSPENSE */
    ) {
        return vnode.suspense.next();
      }

    return hostNextSibling(vnode.anchor || vnode.el);
  };

  var render = function render(vnode, container, isSVG) {
    if (vnode == null) {
      if (container._vnode) {
        unmount(container._vnode, null, null, true);
      }
    } else {
      patch(container._vnode || null, vnode, container, null, null, null, isSVG);
    }

    flushPostFlushCbs();
    container._vnode = vnode;
  };

  var internals = {
    p: patch,
    um: unmount,
    m: move,
    r: remove,
    mt: mountComponent,
    mc: mountChildren,
    pc: patchChildren,
    pbc: patchBlockChildren,
    n: getNextHostNode,
    o: options
  };
  var hydrate;
  var hydrateNode;

  if (createHydrationFns) {
    var _createHydrationFns = createHydrationFns(internals);

    var _createHydrationFns2 = _slicedToArray(_createHydrationFns, 2);

    hydrate = _createHydrationFns2[0];
    hydrateNode = _createHydrationFns2[1];
  }

  return {
    render: render,
    hydrate: hydrate,
    createApp: createAppAPI(render, hydrate)
  };
}

function invokeVNodeHook(hook, instance, vnode) {
  var prevVNode = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  callWithAsyncErrorHandling(hook, instance, 7
  /* VNODE_HOOK */
  , [vnode, prevVNode]);
}
/**
 * #1156
 * When a component is HMR-enabled, we need to make sure that all static nodes
 * inside a block also inherit the DOM element from the previous tree so that
 * HMR updates (which are full updates) can retrieve the element for patching.
 *
 * #2080
 * Inside keyed `template` fragment static children, if a fragment is moved,
 * the children will always moved so that need inherit el form previous nodes
 * to ensure correct moved position.
 */


function traverseStaticChildren(n1, n2) {
  var shallow = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var ch1 = n1.children;
  var ch2 = n2.children;

  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(ch1) && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(ch2)) {
    for (var i = 0; i < ch1.length; i++) {
      // this is only called in the optimized path so array children are
      // guaranteed to be vnodes
      var c1 = ch1[i];
      var c2 = ch2[i];

      if (c2.shapeFlag & 1
      /* ELEMENT */
      && !c2.dynamicChildren) {
        if (c2.patchFlag <= 0 || c2.patchFlag === 32
        /* HYDRATE_EVENTS */
        ) {
            c2 = ch2[i] = cloneIfMounted(ch2[i]);
            c2.el = c1.el;
          }

        if (!shallow) traverseStaticChildren(c1, c2);
      } // also inherit for comment nodes, but not placeholders (e.g. v-if which
      // would have received .el during block patch)


      if ( true && c2.type === Comment$1 && !c2.el) {
        c2.el = c1.el;
      }
    }
  }
} // https://en.wikipedia.org/wiki/Longest_increasing_subsequence


function getSequence(arr) {
  var p = arr.slice();
  var result = [0];
  var i, j, u, v, c;
  var len = arr.length;

  for (i = 0; i < len; i++) {
    var arrI = arr[i];

    if (arrI !== 0) {
      j = result[result.length - 1];

      if (arr[j] < arrI) {
        p[i] = j;
        result.push(i);
        continue;
      }

      u = 0;
      v = result.length - 1;

      while (u < v) {
        c = (u + v) / 2 | 0;

        if (arr[result[c]] < arrI) {
          u = c + 1;
        } else {
          v = c;
        }
      }

      if (arrI < arr[result[u]]) {
        if (u > 0) {
          p[i] = result[u - 1];
        }

        result[u] = i;
      }
    }
  }

  u = result.length;
  v = result[u - 1];

  while (u-- > 0) {
    result[u] = v;
    v = p[v];
  }

  return result;
}

var isTeleport = function isTeleport(type) {
  return type.__isTeleport;
};

var isTeleportDisabled = function isTeleportDisabled(props) {
  return props && (props.disabled || props.disabled === '');
};

var isTargetSVG = function isTargetSVG(target) {
  return typeof SVGElement !== 'undefined' && target instanceof SVGElement;
};

var resolveTarget = function resolveTarget(props, select) {
  var targetSelector = props && props.to;

  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(targetSelector)) {
    if (!select) {
       true && warn("Current renderer does not support string target for Teleports. " + "(missing querySelector renderer option)");
      return null;
    } else {
      var target = select(targetSelector);

      if (!target) {
         true && warn("Failed to locate Teleport target with selector \"".concat(targetSelector, "\". ") + "Note the target element must exist before the component is mounted - " + "i.e. the target cannot be rendered by the component itself, and " + "ideally should be outside of the entire Vue component tree.");
      }

      return target;
    }
  } else {
    if ( true && !targetSelector && !isTeleportDisabled(props)) {
      warn("Invalid Teleport target: ".concat(targetSelector));
    }

    return targetSelector;
  }
};

var TeleportImpl = {
  __isTeleport: true,
  process: function (_process) {
    function process(_x, _x2, _x3, _x4, _x5, _x6, _x7, _x8, _x9, _x10) {
      return _process.apply(this, arguments);
    }

    process.toString = function () {
      return _process.toString();
    };

    return process;
  }(function (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals) {
    var mountChildren = internals.mc,
        patchChildren = internals.pc,
        patchBlockChildren = internals.pbc,
        _internals$o = internals.o,
        insert = _internals$o.insert,
        querySelector = _internals$o.querySelector,
        createText = _internals$o.createText,
        createComment = _internals$o.createComment;
    var disabled = isTeleportDisabled(n2.props);
    var shapeFlag = n2.shapeFlag,
        children = n2.children,
        dynamicChildren = n2.dynamicChildren; // #3302
    // HMR updated, force full diff

    if ( true && isHmrUpdating) {
      optimized = false;
      dynamicChildren = null;
    }

    if (n1 == null) {
      // insert anchors in the main view
      var placeholder = n2.el =  true ? createComment('teleport start') : 0;
      var mainAnchor = n2.anchor =  true ? createComment('teleport end') : 0;
      insert(placeholder, container, anchor);
      insert(mainAnchor, container, anchor);
      var target = n2.target = resolveTarget(n2.props, querySelector);
      var targetAnchor = n2.targetAnchor = createText('');

      if (target) {
        insert(targetAnchor, target); // #2652 we could be teleporting from a non-SVG tree into an SVG tree

        isSVG = isSVG || isTargetSVG(target);
      } else if ( true && !disabled) {
        warn('Invalid Teleport target on mount:', target, "(".concat(_typeof(target), ")"));
      }

      var mount = function mount(container, anchor) {
        // Teleport *always* has Array children. This is enforced in both the
        // compiler and vnode children normalization.
        if (shapeFlag & 16
        /* ARRAY_CHILDREN */
        ) {
            mountChildren(children, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          }
      };

      if (disabled) {
        mount(container, mainAnchor);
      } else if (target) {
        mount(target, targetAnchor);
      }
    } else {
      // update content
      n2.el = n1.el;

      var _mainAnchor = n2.anchor = n1.anchor;

      var _target = n2.target = n1.target;

      var _targetAnchor = n2.targetAnchor = n1.targetAnchor;

      var wasDisabled = isTeleportDisabled(n1.props);
      var currentContainer = wasDisabled ? container : _target;
      var currentAnchor = wasDisabled ? _mainAnchor : _targetAnchor;
      isSVG = isSVG || isTargetSVG(_target);

      if (dynamicChildren) {
        // fast path when the teleport happens to be a block root
        patchBlockChildren(n1.dynamicChildren, dynamicChildren, currentContainer, parentComponent, parentSuspense, isSVG, slotScopeIds); // even in block tree mode we need to make sure all root-level nodes
        // in the teleport inherit previous DOM references so that they can
        // be moved in future patches.

        traverseStaticChildren(n1, n2, true);
      } else if (!optimized) {
        patchChildren(n1, n2, currentContainer, currentAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, false);
      }

      if (disabled) {
        if (!wasDisabled) {
          // enabled -> disabled
          // move into main container
          moveTeleport(n2, container, _mainAnchor, internals, 1
          /* TOGGLE */
          );
        }
      } else {
        // target changed
        if ((n2.props && n2.props.to) !== (n1.props && n1.props.to)) {
          var nextTarget = n2.target = resolveTarget(n2.props, querySelector);

          if (nextTarget) {
            moveTeleport(n2, nextTarget, null, internals, 0
            /* TARGET_CHANGE */
            );
          } else if (true) {
            warn('Invalid Teleport target on update:', _target, "(".concat(_typeof(_target), ")"));
          }
        } else if (wasDisabled) {
          // disabled -> enabled
          // move into teleport target
          moveTeleport(n2, _target, _targetAnchor, internals, 1
          /* TOGGLE */
          );
        }
      }
    }
  }),
  remove: function remove(vnode, parentComponent, parentSuspense, optimized, _ref14, doRemove) {
    var unmount = _ref14.um,
        hostRemove = _ref14.o.remove;
    var shapeFlag = vnode.shapeFlag,
        children = vnode.children,
        anchor = vnode.anchor,
        targetAnchor = vnode.targetAnchor,
        target = vnode.target,
        props = vnode.props;

    if (target) {
      hostRemove(targetAnchor);
    } // an unmounted teleport should always remove its children if not disabled


    if (doRemove || !isTeleportDisabled(props)) {
      hostRemove(anchor);

      if (shapeFlag & 16
      /* ARRAY_CHILDREN */
      ) {
          for (var i = 0; i < children.length; i++) {
            var child = children[i];
            unmount(child, parentComponent, parentSuspense, true, !!child.dynamicChildren);
          }
        }
    }
  },
  move: moveTeleport,
  hydrate: hydrateTeleport
};

function moveTeleport(vnode, container, parentAnchor, _ref15)
/* REORDER */
{
  var insert = _ref15.o.insert,
      move = _ref15.m;
  var moveType = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 2;

  // move target anchor if this is a target change.
  if (moveType === 0
  /* TARGET_CHANGE */
  ) {
      insert(vnode.targetAnchor, container, parentAnchor);
    }

  var el = vnode.el,
      anchor = vnode.anchor,
      shapeFlag = vnode.shapeFlag,
      children = vnode.children,
      props = vnode.props;
  var isReorder = moveType === 2
  /* REORDER */
  ; // move main view anchor if this is a re-order.

  if (isReorder) {
    insert(el, container, parentAnchor);
  } // if this is a re-order and teleport is enabled (content is in target)
  // do not move children. So the opposite is: only move children if this
  // is not a reorder, or the teleport is disabled


  if (!isReorder || isTeleportDisabled(props)) {
    // Teleport has either Array children or no children.
    if (shapeFlag & 16
    /* ARRAY_CHILDREN */
    ) {
        for (var i = 0; i < children.length; i++) {
          move(children[i], container, parentAnchor, 2
          /* REORDER */
          );
        }
      }
  } // move main view anchor if this is a re-order.


  if (isReorder) {
    insert(anchor, container, parentAnchor);
  }
}

function hydrateTeleport(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized, _ref16, hydrateChildren) {
  var _ref16$o = _ref16.o,
      nextSibling = _ref16$o.nextSibling,
      parentNode = _ref16$o.parentNode,
      querySelector = _ref16$o.querySelector;
  var target = vnode.target = resolveTarget(vnode.props, querySelector);

  if (target) {
    // if multiple teleports rendered to the same target element, we need to
    // pick up from where the last teleport finished instead of the first node
    var targetNode = target._lpa || target.firstChild;

    if (vnode.shapeFlag & 16
    /* ARRAY_CHILDREN */
    ) {
        if (isTeleportDisabled(vnode.props)) {
          vnode.anchor = hydrateChildren(nextSibling(node), vnode, parentNode(node), parentComponent, parentSuspense, slotScopeIds, optimized);
          vnode.targetAnchor = targetNode;
        } else {
          vnode.anchor = nextSibling(node);
          vnode.targetAnchor = hydrateChildren(targetNode, vnode, target, parentComponent, parentSuspense, slotScopeIds, optimized);
        }

        target._lpa = vnode.targetAnchor && nextSibling(vnode.targetAnchor);
      }
  }

  return vnode.anchor && nextSibling(vnode.anchor);
} // Force-casted public typing for h and TSX props inference


var Teleport = TeleportImpl;
var COMPONENTS = 'components';
var DIRECTIVES = 'directives';
/**
 * @private
 */

function resolveComponent(name, maybeSelfReference) {
  return resolveAsset(COMPONENTS, name, true, maybeSelfReference) || name;
}

var NULL_DYNAMIC_COMPONENT = Symbol();
/**
 * @private
 */

function resolveDynamicComponent(component) {
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(component)) {
    return resolveAsset(COMPONENTS, component, false) || component;
  } else {
    // invalid types will fallthrough to createVNode and raise warning
    return component || NULL_DYNAMIC_COMPONENT;
  }
}
/**
 * @private
 */


function resolveDirective(name) {
  return resolveAsset(DIRECTIVES, name);
} // implementation


function resolveAsset(type, name) {
  var warnMissing = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var maybeSelfReference = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var instance = currentRenderingInstance || currentInstance;

  if (instance) {
    var Component = instance.type; // explicit self name has highest priority

    if (type === COMPONENTS) {
      var selfName = getComponentName(Component);

      if (selfName && (selfName === name || selfName === (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(name) || selfName === (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.capitalize)((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(name)))) {
        return Component;
      }
    }

    var res = // local registration
    // check instance[type] first which is resolved for options API
    resolve(instance[type] || Component[type], name) || // global registration
    resolve(instance.appContext[type], name);

    if (!res && maybeSelfReference) {
      // fallback to implicit self-reference
      return Component;
    }

    if ( true && warnMissing && !res) {
      warn("Failed to resolve ".concat(type.slice(0, -1), ": ").concat(name));
    }

    return res;
  } else if (true) {
    warn("resolve".concat((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.capitalize)(type.slice(0, -1)), " ") + "can only be used in render() or setup().");
  }
}

function resolve(registry, name) {
  return registry && (registry[name] || registry[(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(name)] || registry[(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.capitalize)((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(name))]);
}

var Fragment = Symbol( true ? 'Fragment' : 0);
var Text = Symbol( true ? 'Text' : 0);
var Comment$1 = Symbol( true ? 'Comment' : 0);
var Static = Symbol( true ? 'Static' : 0); // Since v-if and v-for are the two possible ways node structure can dynamically
// change, once we consider v-if branches and each v-for fragment a block, we
// can divide a template into nested blocks, and within each block the node
// structure would be stable. This allows us to skip most children diffing
// and only worry about the dynamic nodes (indicated by patch flags).

var blockStack = [];
var currentBlock = null;
/**
 * Open a block.
 * This must be called before `createBlock`. It cannot be part of `createBlock`
 * because the children of the block are evaluated before `createBlock` itself
 * is called. The generated code typically looks like this:
 *
 * ```js
 * function render() {
 *   return (openBlock(),createBlock('div', null, [...]))
 * }
 * ```
 * disableTracking is true when creating a v-for fragment block, since a v-for
 * fragment always diffs its children.
 *
 * @private
 */

function openBlock() {
  var disableTracking = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  blockStack.push(currentBlock = disableTracking ? null : []);
}

function closeBlock() {
  blockStack.pop();
  currentBlock = blockStack[blockStack.length - 1] || null;
} // Whether we should be tracking dynamic child nodes inside a block.
// Only tracks when this value is > 0
// We are not using a simple boolean because this value may need to be
// incremented/decremented by nested usage of v-once (see below)


var isBlockTreeEnabled = 1;
/**
 * Block tracking sometimes needs to be disabled, for example during the
 * creation of a tree that needs to be cached by v-once. The compiler generates
 * code like this:
 *
 * ``` js
 * _cache[1] || (
 *   setBlockTracking(-1),
 *   _cache[1] = createVNode(...),
 *   setBlockTracking(1),
 *   _cache[1]
 * )
 * ```
 *
 * @private
 */

function setBlockTracking(value) {
  isBlockTreeEnabled += value;
}
/**
 * Create a block root vnode. Takes the same exact arguments as `createVNode`.
 * A block root keeps track of dynamic nodes within the block in the
 * `dynamicChildren` array.
 *
 * @private
 */


function createBlock(type, props, children, patchFlag, dynamicProps) {
  var vnode = createVNode(type, props, children, patchFlag, dynamicProps, true
  /* isBlock: prevent a block from tracking itself */
  ); // save current block children on the block vnode

  vnode.dynamicChildren = isBlockTreeEnabled > 0 ? currentBlock || _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_ARR : null; // close block

  closeBlock(); // a block is always going to be patched, so track it as a child of its
  // parent block

  if (isBlockTreeEnabled > 0 && currentBlock) {
    currentBlock.push(vnode);
  }

  return vnode;
}

function isVNode(value) {
  return value ? value.__v_isVNode === true : false;
}

function isSameVNodeType(n1, n2) {
  if ( true && n2.shapeFlag & 6
  /* COMPONENT */
  && hmrDirtyComponents.has(n2.type)) {
    // HMR only: if the component has been hot-updated, force a reload.
    return false;
  }

  return n1.type === n2.type && n1.key === n2.key;
}

var vnodeArgsTransformer;
/**
 * Internal API for registering an arguments transform for createVNode
 * used for creating stubs in the test-utils
 * It is *internal* but needs to be exposed for test-utils to pick up proper
 * typings
 */

function transformVNodeArgs(transformer) {
  vnodeArgsTransformer = transformer;
}

var createVNodeWithArgsTransform = function createVNodeWithArgsTransform() {
  for (var _len7 = arguments.length, args = new Array(_len7), _key15 = 0; _key15 < _len7; _key15++) {
    args[_key15] = arguments[_key15];
  }

  return _createVNode.apply(void 0, _toConsumableArray(vnodeArgsTransformer ? vnodeArgsTransformer(args, currentRenderingInstance) : args));
};

var InternalObjectKey = "__vInternal";

var normalizeKey = function normalizeKey(_ref17) {
  var key = _ref17.key;
  return key != null ? key : null;
};

var normalizeRef = function normalizeRef(_ref18) {
  var ref = _ref18.ref;
  return ref != null ? (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(ref) || (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isRef)(ref) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(ref) ? {
    i: currentRenderingInstance,
    r: ref
  } : ref : null;
};

var createVNode =  true ? createVNodeWithArgsTransform : 0;

function _createVNode(type) {
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var children = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var patchFlag = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var dynamicProps = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
  var isBlockNode = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;

  if (!type || type === NULL_DYNAMIC_COMPONENT) {
    if ( true && !type) {
      warn("Invalid vnode type when creating vnode: ".concat(type, "."));
    }

    type = Comment$1;
  }

  if (isVNode(type)) {
    // createVNode receiving an existing vnode. This happens in cases like
    // <component :is="vnode"/>
    // #2078 make sure to merge refs during the clone instead of overwriting it
    var cloned = cloneVNode(type, props, true
    /* mergeRef: true */
    );

    if (children) {
      normalizeChildren(cloned, children);
    }

    return cloned;
  } // class component normalization.


  if (isClassComponent(type)) {
    type = type.__vccOpts;
  } // class & style normalization.


  if (props) {
    // for reactive or proxy objects, we need to clone it to enable mutation.
    if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isProxy)(props) || InternalObjectKey in props) {
      props = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({}, props);
    }

    var _props = props,
        klass = _props["class"],
        style = _props.style;

    if (klass && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(klass)) {
      props["class"] = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.normalizeClass)(klass);
    }

    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(style)) {
      // reactive state objects need to be cloned since they are likely to be
      // mutated
      if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isProxy)(style) && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(style)) {
        style = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({}, style);
      }

      props.style = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.normalizeStyle)(style);
    }
  } // encode the vnode type information into a bitmap


  var shapeFlag = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(type) ? 1
  /* ELEMENT */
  : isSuspense(type) ? 128
  /* SUSPENSE */
  : isTeleport(type) ? 64
  /* TELEPORT */
  : (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(type) ? 4
  /* STATEFUL_COMPONENT */
  : (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(type) ? 2
  /* FUNCTIONAL_COMPONENT */
  : 0;

  if ( true && shapeFlag & 4
  /* STATEFUL_COMPONENT */
  && (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isProxy)(type)) {
    type = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw)(type);
    warn("Vue received a Component which was made a reactive object. This can " + "lead to unnecessary performance overhead, and should be avoided by " + "marking the component with `markRaw` or using `shallowRef` " + "instead of `ref`.", "\nComponent that was made reactive: ", type);
  }

  var vnode = {
    __v_isVNode: true,
    __v_skip: true,
    type: type,
    props: props,
    key: props && normalizeKey(props),
    ref: props && normalizeRef(props),
    scopeId: currentScopeId,
    slotScopeIds: null,
    children: null,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    shapeFlag: shapeFlag,
    patchFlag: patchFlag,
    dynamicProps: dynamicProps,
    dynamicChildren: null,
    appContext: null
  }; // validate key

  if ( true && vnode.key !== vnode.key) {
    warn("VNode created with invalid key (NaN). VNode type:", vnode.type);
  }

  normalizeChildren(vnode, children); // normalize suspense children

  if (shapeFlag & 128
  /* SUSPENSE */
  ) {
      type.normalize(vnode);
    }

  if (isBlockTreeEnabled > 0 && // avoid a block node from tracking itself
  !isBlockNode && // has current parent block
  currentBlock && ( // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  patchFlag > 0 || shapeFlag & 6
  /* COMPONENT */
  ) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  patchFlag !== 32
  /* HYDRATE_EVENTS */
  ) {
      currentBlock.push(vnode);
    }

  return vnode;
}

function cloneVNode(vnode, extraProps) {
  var mergeRef = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  // This is intentionally NOT using spread or extend to avoid the runtime
  // key enumeration cost.
  var props = vnode.props,
      ref = vnode.ref,
      patchFlag = vnode.patchFlag,
      children = vnode.children;
  var mergedProps = extraProps ? mergeProps(props || {}, extraProps) : props;
  var cloned = {
    __v_isVNode: true,
    __v_skip: true,
    type: vnode.type,
    props: mergedProps,
    key: mergedProps && normalizeKey(mergedProps),
    ref: extraProps && extraProps.ref ? // #2078 in the case of <component :is="vnode" ref="extra"/>
    // if the vnode itself already has a ref, cloneVNode will need to merge
    // the refs so the single vnode can be set on multiple refs
    mergeRef && ref ? (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(ref) ? ref.concat(normalizeRef(extraProps)) : [ref, normalizeRef(extraProps)] : normalizeRef(extraProps) : ref,
    scopeId: vnode.scopeId,
    slotScopeIds: vnode.slotScopeIds,
    children:  true && patchFlag === -1
    /* HOISTED */
    && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(children) ? children.map(deepCloneVNode) : children,
    target: vnode.target,
    targetAnchor: vnode.targetAnchor,
    staticCount: vnode.staticCount,
    staticCache: vnode.staticCache,
    shapeFlag: vnode.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: perserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: extraProps && vnode.type !== Fragment ? patchFlag === -1 // hoisted node
    ? 16
    /* FULL_PROPS */
    : patchFlag | 16
    /* FULL_PROPS */
    : patchFlag,
    dynamicProps: vnode.dynamicProps,
    dynamicChildren: vnode.dynamicChildren,
    appContext: vnode.appContext,
    dirs: vnode.dirs,
    transition: vnode.transition,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: vnode.component,
    suspense: vnode.suspense,
    ssContent: vnode.ssContent && cloneVNode(vnode.ssContent),
    ssFallback: vnode.ssFallback && cloneVNode(vnode.ssFallback),
    el: vnode.el,
    anchor: vnode.anchor
  };
  return cloned;
}
/**
 * Dev only, for HMR of hoisted vnodes reused in v-for
 * https://github.com/vitejs/vite/issues/2022
 */


function deepCloneVNode(vnode) {
  var cloned = cloneVNode(vnode);

  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(vnode.children)) {
    cloned.children = vnode.children.map(deepCloneVNode);
  }

  return cloned;
}
/**
 * @private
 */


function createTextVNode() {
  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ' ';
  var flag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return createVNode(Text, null, text, flag);
}
/**
 * @private
 */


function createStaticVNode(content, numberOfNodes) {
  // A static vnode can contain multiple stringified elements, and the number
  // of elements is necessary for hydration.
  var vnode = createVNode(Static, null, content);
  vnode.staticCount = numberOfNodes;
  return vnode;
}
/**
 * @private
 */


function createCommentVNode() {
  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var asBlock = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return asBlock ? (openBlock(), createBlock(Comment$1, null, text)) : createVNode(Comment$1, null, text);
}

function normalizeVNode(child) {
  if (child == null || typeof child === 'boolean') {
    // empty placeholder
    return createVNode(Comment$1);
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(child)) {
    // fragment
    return createVNode(Fragment, null, // #3666, avoid reference pollution when reusing vnode
    child.slice());
  } else if (_typeof(child) === 'object') {
    // already vnode, this should be the most common since compiled templates
    // always produce all-vnode children arrays
    return cloneIfMounted(child);
  } else {
    // strings and numbers
    return createVNode(Text, null, String(child));
  }
} // optimized normalization for template-compiled render fns


function cloneIfMounted(child) {
  return child.el === null ? child : cloneVNode(child);
}

function normalizeChildren(vnode, children) {
  var type = 0;
  var shapeFlag = vnode.shapeFlag;

  if (children == null) {
    children = null;
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(children)) {
    type = 16
    /* ARRAY_CHILDREN */
    ;
  } else if (_typeof(children) === 'object') {
    if (shapeFlag & 1
    /* ELEMENT */
    || shapeFlag & 64
    /* TELEPORT */
    ) {
        // Normalize slot to plain children for plain element and Teleport
        var slot = children["default"];

        if (slot) {
          // _c marker is added by withCtx() indicating this is a compiled slot
          slot._c && (slot._d = false);
          normalizeChildren(vnode, slot());
          slot._c && (slot._d = true);
        }

        return;
      } else {
      type = 32
      /* SLOTS_CHILDREN */
      ;
      var slotFlag = children._;

      if (!slotFlag && !(InternalObjectKey in children)) {
        children._ctx = currentRenderingInstance;
      } else if (slotFlag === 3
      /* FORWARDED */
      && currentRenderingInstance) {
        // a child component receives forwarded slots from the parent.
        // its slot type is determined by its parent's slot type.
        if (currentRenderingInstance.slots._ === 1
        /* STABLE */
        ) {
            children._ = 1
            /* STABLE */
            ;
          } else {
          children._ = 2
          /* DYNAMIC */
          ;
          vnode.patchFlag |= 1024
          /* DYNAMIC_SLOTS */
          ;
        }
      }
    }
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(children)) {
    children = {
      "default": children,
      _ctx: currentRenderingInstance
    };
    type = 32
    /* SLOTS_CHILDREN */
    ;
  } else {
    children = String(children); // force teleport children to array so it can be moved around

    if (shapeFlag & 64
    /* TELEPORT */
    ) {
        type = 16
        /* ARRAY_CHILDREN */
        ;
        children = [createTextVNode(children)];
      } else {
      type = 8
      /* TEXT_CHILDREN */
      ;
    }
  }

  vnode.children = children;
  vnode.shapeFlag |= type;
}

function mergeProps() {
  var ret = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({}, arguments.length <= 0 ? undefined : arguments[0]);

  for (var i = 1; i < arguments.length; i++) {
    var toMerge = i < 0 || arguments.length <= i ? undefined : arguments[i];

    for (var key in toMerge) {
      if (key === 'class') {
        if (ret["class"] !== toMerge["class"]) {
          ret["class"] = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.normalizeClass)([ret["class"], toMerge["class"]]);
        }
      } else if (key === 'style') {
        ret.style = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.normalizeStyle)([ret.style, toMerge.style]);
      } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isOn)(key)) {
        var existing = ret[key];
        var incoming = toMerge[key];

        if (existing !== incoming) {
          ret[key] = existing ? [].concat(existing, incoming) : incoming;
        }
      } else if (key !== '') {
        ret[key] = toMerge[key];
      }
    }
  }

  return ret;
}
/**
 * Actual implementation
 */


function renderList(source, renderItem) {
  var ret;

  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(source) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(source)) {
    ret = new Array(source.length);

    for (var i = 0, l = source.length; i < l; i++) {
      ret[i] = renderItem(source[i], i);
    }
  } else if (typeof source === 'number') {
    if ( true && !Number.isInteger(source)) {
      warn("The v-for range expect an integer value but got ".concat(source, "."));
      return [];
    }

    ret = new Array(source);

    for (var _i3 = 0; _i3 < source; _i3++) {
      ret[_i3] = renderItem(_i3 + 1, _i3);
    }
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(source)) {
    if (source[Symbol.iterator]) {
      ret = Array.from(source, renderItem);
    } else {
      var keys = Object.keys(source);
      ret = new Array(keys.length);

      for (var _i4 = 0, _l = keys.length; _i4 < _l; _i4++) {
        var key = keys[_i4];
        ret[_i4] = renderItem(source[key], key, _i4);
      }
    }
  } else {
    ret = [];
  }

  return ret;
}
/**
 * Compiler runtime helper for creating dynamic slots object
 * @private
 */


function createSlots(slots, dynamicSlots) {
  for (var i = 0; i < dynamicSlots.length; i++) {
    var slot = dynamicSlots[i]; // array of dynamic slot generated by <template v-for="..." #[...]>

    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(slot)) {
      for (var j = 0; j < slot.length; j++) {
        slots[slot[j].name] = slot[j].fn;
      }
    } else if (slot) {
      // conditional single slot generated by <template v-if="..." #foo>
      slots[slot.name] = slot.fn;
    }
  }

  return slots;
}
/**
 * Compiler runtime helper for rendering `<slot/>`
 * @private
 */


function renderSlot(slots, name) {
  var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var // this is not a user-facing function, so the fallback is always generated by
  // the compiler and guaranteed to be a function returning an array
  fallback = arguments.length > 3 ? arguments[3] : undefined;
  var noSlotted = arguments.length > 4 ? arguments[4] : undefined;
  var slot = slots[name];

  if ( true && slot && slot.length > 1) {
    warn("SSR-optimized slot function detected in a non-SSR-optimized render " + "function. You need to mark this component with $dynamic-slots in the " + "parent template.");

    slot = function slot() {
      return [];
    };
  } // a compiled slot disables block tracking by default to avoid manual
  // invocation interfering with template-based block tracking, but in
  // `renderSlot` we can be sure that it's template-based so we can force
  // enable it.


  if (slot && slot._c) {
    slot._d = false;
  }

  openBlock();
  var validSlotContent = slot && ensureValidVNode(slot(props));
  var rendered = createBlock(Fragment, {
    key: props.key || "_".concat(name)
  }, validSlotContent || (fallback ? fallback() : []), validSlotContent && slots._ === 1
  /* STABLE */
  ? 64
  /* STABLE_FRAGMENT */
  : -2
  /* BAIL */
  );

  if (!noSlotted && rendered.scopeId) {
    rendered.slotScopeIds = [rendered.scopeId + '-s'];
  }

  if (slot && slot._c) {
    slot._d = true;
  }

  return rendered;
}

function ensureValidVNode(vnodes) {
  return vnodes.some(function (child) {
    if (!isVNode(child)) return true;
    if (child.type === Comment$1) return false;
    if (child.type === Fragment && !ensureValidVNode(child.children)) return false;
    return true;
  }) ? vnodes : null;
}
/**
 * For prefixing keys in v-on="obj" with "on"
 * @private
 */


function toHandlers(obj) {
  var ret = {};

  if ( true && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(obj)) {
    warn("v-on with no argument expects an object value.");
    return ret;
  }

  for (var key in obj) {
    ret[(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toHandlerKey)(key)] = obj[key];
  }

  return ret;
}
/**
 * #2437 In Vue 3, functional components do not have a public instance proxy but
 * they exist in the internal parent chain. For code that relies on traversing
 * public $parent chains, skip functional ones and go to the parent instead.
 */


var getPublicInstance = function getPublicInstance(i) {
  if (!i) return null;
  if (isStatefulComponent(i)) return getExposeProxy(i) || i.proxy;
  return getPublicInstance(i.parent);
};

var publicPropertiesMap = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(Object.create(null), {
  $: function $(i) {
    return i;
  },
  $el: function $el(i) {
    return i.vnode.el;
  },
  $data: function $data(i) {
    return i.data;
  },
  $props: function $props(i) {
    return  true ? (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.shallowReadonly)(i.props) : 0;
  },
  $attrs: function $attrs(i) {
    return  true ? (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.shallowReadonly)(i.attrs) : 0;
  },
  $slots: function $slots(i) {
    return  true ? (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.shallowReadonly)(i.slots) : 0;
  },
  $refs: function $refs(i) {
    return  true ? (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.shallowReadonly)(i.refs) : 0;
  },
  $parent: function $parent(i) {
    return getPublicInstance(i.parent);
  },
  $root: function $root(i) {
    return getPublicInstance(i.root);
  },
  $emit: function $emit(i) {
    return i.emit;
  },
  $options: function $options(i) {
    return  true ? resolveMergedOptions(i) : 0;
  },
  $forceUpdate: function $forceUpdate(i) {
    return function () {
      return queueJob(i.update);
    };
  },
  $nextTick: function $nextTick(i) {
    return nextTick.bind(i.proxy);
  },
  $watch: function $watch(i) {
    return  true ? instanceWatch.bind(i) : 0;
  }
});
var PublicInstanceProxyHandlers = {
  get: function get(_ref19, key) {
    var instance = _ref19._;
    var ctx = instance.ctx,
        setupState = instance.setupState,
        data = instance.data,
        props = instance.props,
        accessCache = instance.accessCache,
        type = instance.type,
        appContext = instance.appContext; // for internal formatters to know that this is a Vue instance

    if ( true && key === '__isVue') {
      return true;
    } // prioritize <script setup> bindings during dev.
    // this allows even properties that start with _ or $ to be used - so that
    // it aligns with the production behavior where the render fn is inlined and
    // indeed has access to all declared variables.


    if ( true && setupState !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ && setupState.__isScriptSetup && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(setupState, key)) {
      return setupState[key];
    } // data / props / ctx
    // This getter gets called for every property access on the render context
    // during render and is a major hotspot. The most expensive part of this
    // is the multiple hasOwn() calls. It's much faster to do a simple property
    // access on a plain object, so we use an accessCache object (with null
    // prototype) to memoize what access type a key corresponds to.


    var normalizedProps;

    if (key[0] !== '$') {
      var n = accessCache[key];

      if (n !== undefined) {
        switch (n) {
          case 0
          /* SETUP */
          :
            return setupState[key];

          case 1
          /* DATA */
          :
            return data[key];

          case 3
          /* CONTEXT */
          :
            return ctx[key];

          case 2
          /* PROPS */
          :
            return props[key];
          // default: just fallthrough
        }
      } else if (setupState !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(setupState, key)) {
        accessCache[key] = 0
        /* SETUP */
        ;
        return setupState[key];
      } else if (data !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(data, key)) {
        accessCache[key] = 1
        /* DATA */
        ;
        return data[key];
      } else if ( // only cache other properties when instance has declared (thus stable)
      // props
      (normalizedProps = instance.propsOptions[0]) && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(normalizedProps, key)) {
        accessCache[key] = 2
        /* PROPS */
        ;
        return props[key];
      } else if (ctx !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(ctx, key)) {
        accessCache[key] = 3
        /* CONTEXT */
        ;
        return ctx[key];
      } else if ( false || shouldCacheAccess) {
        accessCache[key] = 4
        /* OTHER */
        ;
      }
    }

    var publicGetter = publicPropertiesMap[key];
    var cssModule, globalProperties; // public $xxx properties

    if (publicGetter) {
      if (key === '$attrs') {
        (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.track)(instance, "get"
        /* GET */
        , key);
         true && markAttrsAccessed();
      }

      return publicGetter(instance);
    } else if ( // css module (injected by vue-loader)
    (cssModule = type.__cssModules) && (cssModule = cssModule[key])) {
      return cssModule;
    } else if (ctx !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(ctx, key)) {
      // user may set custom properties to `this` that start with `$`
      accessCache[key] = 3
      /* CONTEXT */
      ;
      return ctx[key];
    } else if ( // global properties
    globalProperties = appContext.config.globalProperties, (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(globalProperties, key)) {
      {
        return globalProperties[key];
      }
    } else if ( true && currentRenderingInstance && (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(key) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    key.indexOf('__v') !== 0)) {
      if (data !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ && (key[0] === '$' || key[0] === '_') && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(data, key)) {
        warn("Property ".concat(JSON.stringify(key), " must be accessed via $data because it starts with a reserved ") + "character (\"$\" or \"_\") and is not proxied on the render context.");
      } else if (instance === currentRenderingInstance) {
        warn("Property ".concat(JSON.stringify(key), " was accessed during render ") + "but is not defined on instance.");
      }
    }
  },
  set: function set(_ref20, key, value) {
    var instance = _ref20._;
    var data = instance.data,
        setupState = instance.setupState,
        ctx = instance.ctx;

    if (setupState !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(setupState, key)) {
      setupState[key] = value;
    } else if (data !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(data, key)) {
      data[key] = value;
    } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(instance.props, key)) {
       true && warn("Attempting to mutate prop \"".concat(key, "\". Props are readonly."), instance);
      return false;
    }

    if (key[0] === '$' && key.slice(1) in instance) {
       true && warn("Attempting to mutate public property \"".concat(key, "\". ") + "Properties starting with $ are reserved and readonly.", instance);
      return false;
    } else {
      if ( true && key in instance.appContext.config.globalProperties) {
        Object.defineProperty(ctx, key, {
          enumerable: true,
          configurable: true,
          value: value
        });
      } else {
        ctx[key] = value;
      }
    }

    return true;
  },
  has: function has(_ref21, key) {
    var _ref21$_ = _ref21._,
        data = _ref21$_.data,
        setupState = _ref21$_.setupState,
        accessCache = _ref21$_.accessCache,
        ctx = _ref21$_.ctx,
        appContext = _ref21$_.appContext,
        propsOptions = _ref21$_.propsOptions;
    var normalizedProps;
    return accessCache[key] !== undefined || data !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(data, key) || setupState !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(setupState, key) || (normalizedProps = propsOptions[0]) && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(normalizedProps, key) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(ctx, key) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(publicPropertiesMap, key) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(appContext.config.globalProperties, key);
  }
};

if (true) {
  PublicInstanceProxyHandlers.ownKeys = function (target) {
    warn("Avoid app logic that relies on enumerating keys on a component instance. " + "The keys will be empty in production mode to avoid performance overhead.");
    return Reflect.ownKeys(target);
  };
}

var RuntimeCompiledPublicInstanceProxyHandlers = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({}, PublicInstanceProxyHandlers, {
  get: function get(target, key) {
    // fast path for unscopables when using `with` block
    if (key === Symbol.unscopables) {
      return;
    }

    return PublicInstanceProxyHandlers.get(target, key, target);
  },
  has: function has(_, key) {
    var has = key[0] !== '_' && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isGloballyWhitelisted)(key);

    if ( true && !has && PublicInstanceProxyHandlers.has(_, key)) {
      warn("Property ".concat(JSON.stringify(key), " should not start with _ which is a reserved prefix for Vue internals."));
    }

    return has;
  }
}); // In dev mode, the proxy target exposes the same properties as seen on `this`
// for easier console inspection. In prod mode it will be an empty object so
// these properties definitions can be skipped.

function createRenderContext(instance) {
  var target = {}; // expose internal instance for proxy handlers

  Object.defineProperty(target, "_", {
    configurable: true,
    enumerable: false,
    get: function get() {
      return instance;
    }
  }); // expose public properties

  Object.keys(publicPropertiesMap).forEach(function (key) {
    Object.defineProperty(target, key, {
      configurable: true,
      enumerable: false,
      get: function get() {
        return publicPropertiesMap[key](instance);
      },
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP
    });
  });
  return target;
} // dev only


function exposePropsOnRenderContext(instance) {
  var ctx = instance.ctx,
      _instance$propsOption6 = _slicedToArray(instance.propsOptions, 1),
      propsOptions = _instance$propsOption6[0];

  if (propsOptions) {
    Object.keys(propsOptions).forEach(function (key) {
      Object.defineProperty(ctx, key, {
        enumerable: true,
        configurable: true,
        get: function get() {
          return instance.props[key];
        },
        set: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP
      });
    });
  }
} // dev only


function exposeSetupStateOnRenderContext(instance) {
  var ctx = instance.ctx,
      setupState = instance.setupState;
  Object.keys((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw)(setupState)).forEach(function (key) {
    if (!setupState.__isScriptSetup && (key[0] === '$' || key[0] === '_')) {
      warn("setup() return property ".concat(JSON.stringify(key), " should not start with \"$\" or \"_\" ") + "which are reserved prefixes for Vue internals.");
      return;
    }

    Object.defineProperty(ctx, key, {
      enumerable: true,
      configurable: true,
      get: function get() {
        return setupState[key];
      },
      set: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP
    });
  });
}

var emptyAppContext = createAppContext();
var uid$1 = 0;

function createComponentInstance(vnode, parent, suspense) {
  var type = vnode.type; // inherit parent app context - or - if root, adopt from root vnode

  var appContext = (parent ? parent.appContext : vnode.appContext) || emptyAppContext;
  var instance = {
    uid: uid$1++,
    vnode: vnode,
    type: type,
    parent: parent,
    appContext: appContext,
    root: null,
    next: null,
    subTree: null,
    update: null,
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    effects: null,
    provides: parent ? parent.provides : Object.create(appContext.provides),
    accessCache: null,
    renderCache: [],
    // local resovled assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: normalizePropsOptions(type, appContext),
    emitsOptions: normalizeEmitsOptions(type, appContext),
    // emit
    emit: null,
    emitted: null,
    // props default value
    propsDefaults: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ,
    // inheritAttrs
    inheritAttrs: type.inheritAttrs,
    // state
    ctx: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ,
    data: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ,
    props: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ,
    attrs: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ,
    slots: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ,
    refs: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ,
    setupState: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ,
    setupContext: null,
    // suspense related
    suspense: suspense,
    suspenseId: suspense ? suspense.pendingId : 0,
    asyncDep: null,
    asyncResolved: false,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: false,
    isUnmounted: false,
    isDeactivated: false,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };

  if (true) {
    instance.ctx = createRenderContext(instance);
  } else {}

  instance.root = parent ? parent.root : instance;
  instance.emit = emit.bind(null, instance);
  return instance;
}

var currentInstance = null;

var getCurrentInstance = function getCurrentInstance() {
  return currentInstance || currentRenderingInstance;
};

var setCurrentInstance = function setCurrentInstance(instance) {
  currentInstance = instance;
};

var isBuiltInTag = /*#__PURE__*/(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.makeMap)('slot,component');

function validateComponentName(name, config) {
  var appIsNativeTag = config.isNativeTag || _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NO;

  if (isBuiltInTag(name) || appIsNativeTag(name)) {
    warn('Do not use built-in or reserved HTML elements as component id: ' + name);
  }
}

function isStatefulComponent(instance) {
  return instance.vnode.shapeFlag & 4
  /* STATEFUL_COMPONENT */
  ;
}

var isInSSRComponentSetup = false;

function setupComponent(instance) {
  var isSSR = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  isInSSRComponentSetup = isSSR;
  var _instance$vnode = instance.vnode,
      props = _instance$vnode.props,
      children = _instance$vnode.children;
  var isStateful = isStatefulComponent(instance);
  initProps(instance, props, isStateful, isSSR);
  initSlots(instance, children);
  var setupResult = isStateful ? setupStatefulComponent(instance, isSSR) : undefined;
  isInSSRComponentSetup = false;
  return setupResult;
}

function setupStatefulComponent(instance, isSSR) {
  var Component = instance.type;

  if (true) {
    if (Component.name) {
      validateComponentName(Component.name, instance.appContext.config);
    }

    if (Component.components) {
      var names = Object.keys(Component.components);

      for (var i = 0; i < names.length; i++) {
        validateComponentName(names[i], instance.appContext.config);
      }
    }

    if (Component.directives) {
      var _names = Object.keys(Component.directives);

      for (var _i5 = 0; _i5 < _names.length; _i5++) {
        validateDirectiveName(_names[_i5]);
      }
    }

    if (Component.compilerOptions && isRuntimeOnly()) {
      warn("\"compilerOptions\" is only supported when using a build of Vue that " + "includes the runtime compiler. Since you are using a runtime-only " + "build, the options should be passed via your build tool config instead.");
    }
  } // 0. create render proxy property access cache


  instance.accessCache = Object.create(null); // 1. create public instance / render proxy
  // also mark it raw so it's never observed

  instance.proxy = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.markRaw)(new Proxy(instance.ctx, PublicInstanceProxyHandlers));

  if (true) {
    exposePropsOnRenderContext(instance);
  } // 2. call setup()


  var setup = Component.setup;

  if (setup) {
    var setupContext = instance.setupContext = setup.length > 1 ? createSetupContext(instance) : null;
    currentInstance = instance;
    (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.pauseTracking)();
    var setupResult = callWithErrorHandling(setup, instance, 0
    /* SETUP_FUNCTION */
    , [ true ? (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.shallowReadonly)(instance.props) : 0, setupContext]);
    (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.resetTracking)();
    currentInstance = null;

    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isPromise)(setupResult)) {
      var unsetInstance = function unsetInstance() {
        currentInstance = null;
      };

      setupResult.then(unsetInstance, unsetInstance);

      if (isSSR) {
        // return the promise so server-renderer can wait on it
        return setupResult.then(function (resolvedResult) {
          handleSetupResult(instance, resolvedResult, isSSR);
        })["catch"](function (e) {
          handleError(e, instance, 0
          /* SETUP_FUNCTION */
          );
        });
      } else {
        // async setup returned Promise.
        // bail here and wait for re-entry.
        instance.asyncDep = setupResult;
      }
    } else {
      handleSetupResult(instance, setupResult, isSSR);
    }
  } else {
    finishComponentSetup(instance, isSSR);
  }
}

function handleSetupResult(instance, setupResult, isSSR) {
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(setupResult)) {
    // setup returned an inline render function
    {
      instance.render = setupResult;
    }
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(setupResult)) {
    if ( true && isVNode(setupResult)) {
      warn("setup() should not return VNodes directly - " + "return a render function instead.");
    } // setup returned bindings.
    // assuming a render function compiled from template is present.


    if (true) {
      instance.devtoolsRawSetupState = setupResult;
    }

    instance.setupState = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.proxyRefs)(setupResult);

    if (true) {
      exposeSetupStateOnRenderContext(instance);
    }
  } else if ( true && setupResult !== undefined) {
    warn("setup() should return an object. Received: ".concat(setupResult === null ? 'null' : _typeof(setupResult)));
  }

  finishComponentSetup(instance, isSSR);
}

var compile; // dev only

var isRuntimeOnly = function isRuntimeOnly() {
  return !compile;
};
/**
 * For runtime-dom to register the compiler.
 * Note the exported method uses any to avoid d.ts relying on the compiler types.
 */


function registerRuntimeCompiler(_compile) {
  compile = _compile;
}

function finishComponentSetup(instance, isSSR, skipOptions) {
  var Component = instance.type; // template / render function normalization

  if (!instance.render) {
    // could be set from setup()
    if (compile && !Component.render) {
      var template = Component.template;

      if (template) {
        if (true) {
          startMeasure(instance, "compile");
        }

        var _instance$appContext$ = instance.appContext.config,
            isCustomElement = _instance$appContext$.isCustomElement,
            compilerOptions = _instance$appContext$.compilerOptions;
        var delimiters = Component.delimiters,
            componentCompilerOptions = Component.compilerOptions;
        var finalCompilerOptions = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({
          isCustomElement: isCustomElement,
          delimiters: delimiters
        }, compilerOptions), componentCompilerOptions);
        Component.render = compile(template, finalCompilerOptions);

        if (true) {
          endMeasure(instance, "compile");
        }
      }
    }

    instance.render = Component.render || _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP; // for runtime-compiled render functions using `with` blocks, the render
    // proxy used needs a different `has` handler which is more performant and
    // also only allows a whitelist of globals to fallthrough.

    if (instance.render._rc) {
      instance.withProxy = new Proxy(instance.ctx, RuntimeCompiledPublicInstanceProxyHandlers);
    }
  } // support for 2.x options


  if (true) {
    currentInstance = instance;
    (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.pauseTracking)();
    applyOptions(instance);
    (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.resetTracking)();
    currentInstance = null;
  } // warn missing template/render
  // the runtime compilation of template in SSR is done by server-render


  if ( true && !Component.render && instance.render === _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP && !isSSR) {
    /* istanbul ignore if */
    if (!compile && Component.template) {
      warn("Component provided template option but " + "runtime compilation is not supported in this build of Vue." + " Configure your bundler to alias \"vue\" to \"vue/dist/vue.esm-bundler.js\"."
      /* should not happen */
      );
    } else {
      warn("Component is missing template or render function.");
    }
  }
}

var attrDevProxyHandlers = {
  get: function get(target, key) {
    markAttrsAccessed();
    return target[key];
  },
  set: function set() {
    warn("setupContext.attrs is readonly.");
    return false;
  },
  deleteProperty: function deleteProperty() {
    warn("setupContext.attrs is readonly.");
    return false;
  }
};

function createSetupContext(instance) {
  var expose = function expose(exposed) {
    if ( true && instance.exposed) {
      warn("expose() should be called only once per setup().");
    }

    instance.exposed = exposed || {};
  };

  if (true) {
    var attrs; // We use getters in dev in case libs like test-utils overwrite instance
    // properties (overwrites should not be done in prod)

    return Object.freeze({
      get attrs() {
        return attrs || (attrs = new Proxy(instance.attrs, attrDevProxyHandlers));
      },

      get slots() {
        return (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.shallowReadonly)(instance.slots);
      },

      get emit() {
        return function (event) {
          for (var _len8 = arguments.length, args = new Array(_len8 > 1 ? _len8 - 1 : 0), _key16 = 1; _key16 < _len8; _key16++) {
            args[_key16 - 1] = arguments[_key16];
          }

          return instance.emit.apply(instance, [event].concat(args));
        };
      },

      expose: expose
    });
  } else {}
}

function getExposeProxy(instance) {
  if (instance.exposed) {
    return instance.exposeProxy || (instance.exposeProxy = new Proxy((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.proxyRefs)((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.markRaw)(instance.exposed)), {
      get: function get(target, key) {
        if (key in target) {
          return target[key];
        } else if (key in publicPropertiesMap) {
          return publicPropertiesMap[key](instance);
        }
      }
    }));
  }
} // record effects created during a component's setup() so that they can be
// stopped when the component unmounts


function recordInstanceBoundEffect(effect) {
  var instance = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : currentInstance;

  if (instance) {
    (instance.effects || (instance.effects = [])).push(effect);
  }
}

var classifyRE = /(?:^|[-_])(\w)/g;

var classify = function classify(str) {
  return str.replace(classifyRE, function (c) {
    return c.toUpperCase();
  }).replace(/[-_]/g, '');
};

function getComponentName(Component) {
  return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(Component) ? Component.displayName || Component.name : Component.name;
}
/* istanbul ignore next */


function formatComponentName(instance, Component) {
  var isRoot = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var name = getComponentName(Component);

  if (!name && Component.__file) {
    var match = Component.__file.match(/([^/\\]+)\.\w+$/);

    if (match) {
      name = match[1];
    }
  }

  if (!name && instance && instance.parent) {
    // try to infer the name based on reverse resolution
    var inferFromRegistry = function inferFromRegistry(registry) {
      for (var key in registry) {
        if (registry[key] === Component) {
          return key;
        }
      }
    };

    name = inferFromRegistry(instance.components || instance.parent.type.components) || inferFromRegistry(instance.appContext.components);
  }

  return name ? classify(name) : isRoot ? "App" : "Anonymous";
}

function isClassComponent(value) {
  return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(value) && '__vccOpts' in value;
}

function computed(getterOrOptions) {
  var c = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.computed)(getterOrOptions);
  recordInstanceBoundEffect(c.effect);
  return c;
}

 true ? Object.freeze({}) : 0;
 true ? Object.freeze([]) : 0;

var isFunction = function isFunction(val) {
  return typeof val === 'function';
};

var isObject = function isObject(val) {
  return val !== null && _typeof(val) === 'object';
};

var isPromise = function isPromise(val) {
  return isObject(val) && isFunction(val.then) && isFunction(val["catch"]);
}; // dev only


var warnRuntimeUsage = function warnRuntimeUsage(method) {
  return warn("".concat(method, "() is a compiler-hint helper that is only usable inside ") + "<script setup> of a single file component. Its arguments should be " + "compiled away and passing it at runtime has no effect.");
}; // implementation


function defineProps() {
  if (true) {
    warnRuntimeUsage("defineProps");
  }

  return null;
} // implementation


function defineEmits() {
  if (true) {
    warnRuntimeUsage("defineEmits");
  }

  return null;
}
/**
 * @deprecated use `defineEmits` instead.
 */


var defineEmit = defineEmits;
/**
 * Vue `<script setup>` compiler macro for declaring a component's exposed
 * instance properties when it is accessed by a parent component via template
 * refs.
 *
 * `<script setup>` components are closed by default - i.e. varaibles inside
 * the `<script setup>` scope is not exposed to parent unless explicitly exposed
 * via `defineExpose`.
 *
 * This is only usable inside `<script setup>`, is compiled away in the
 * output and should **not** be actually called at runtime.
 */

function defineExpose(exposed) {
  if (true) {
    warnRuntimeUsage("defineExpose");
  }
}
/**
 * Vue `<script setup>` compiler macro for providing props default values when
 * using type-based `defineProps` decalration.
 *
 * Example usage:
 * ```ts
 * withDefaults(defineProps<{
 *   size?: number
 *   labels?: string[]
 * }>(), {
 *   size: 3,
 *   labels: () => ['default label']
 * })
 * ```
 *
 * This is only usable inside `<script setup>`, is compiled away in the output
 * and should **not** be actually called at runtime.
 */


function withDefaults(props, defaults) {
  if (true) {
    warnRuntimeUsage("withDefaults");
  }

  return null;
}
/**
 * @deprecated use `useSlots` and `useAttrs` instead.
 */


function useContext() {
  if (true) {
    warn("`useContext()` has been deprecated and will be removed in the " + "next minor release. Use `useSlots()` and `useAttrs()` instead.");
  }

  return getContext();
}

function useSlots() {
  return getContext().slots;
}

function useAttrs() {
  return getContext().attrs;
}

function getContext() {
  var i = getCurrentInstance();

  if ( true && !i) {
    warn("useContext() called without active instance.");
  }

  return i.setupContext || (i.setupContext = createSetupContext(i));
}
/**
 * Runtime helper for merging default declarations. Imported by compiled code
 * only.
 * @internal
 */


function mergeDefaults( // the base props is compiler-generated and guaranteed to be in this shape.
props, defaults) {
  for (var key in defaults) {
    var val = props[key];

    if (val) {
      val["default"] = defaults[key];
    } else if (val === null) {
      props[key] = {
        "default": defaults[key]
      };
    } else if (true) {
      warn("props default key \"".concat(key, "\" has no corresponding declaration."));
    }
  }

  return props;
}
/**
 * Runtime helper for storing and resuming current instance context in
 * async setup().
 */


function withAsyncContext(awaitable) {
  var ctx = getCurrentInstance();
  setCurrentInstance(null); // unset after storing instance

  if ( true && !ctx) {
    warn("withAsyncContext() called when there is no active context instance.");
  }

  return isPromise(awaitable) ? awaitable.then(function (res) {
    setCurrentInstance(ctx);
    return res;
  }, function (err) {
    setCurrentInstance(ctx);
    throw err;
  }) : awaitable;
} // Actual implementation


function h(type, propsOrChildren, children) {
  var l = arguments.length;

  if (l === 2) {
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(propsOrChildren) && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(propsOrChildren)) {
      // single vnode without props
      if (isVNode(propsOrChildren)) {
        return createVNode(type, null, [propsOrChildren]);
      } // props without children


      return createVNode(type, propsOrChildren);
    } else {
      // omit props
      return createVNode(type, null, propsOrChildren);
    }
  } else {
    if (l > 3) {
      children = Array.prototype.slice.call(arguments, 2);
    } else if (l === 3 && isVNode(children)) {
      children = [children];
    }

    return createVNode(type, propsOrChildren, children);
  }
}

var ssrContextKey = Symbol( true ? "ssrContext" : 0);

var useSSRContext = function useSSRContext() {
  {
    var ctx = inject(ssrContextKey);

    if (!ctx) {
      warn("Server rendering context not provided. Make sure to only call " + "useSSRContext() conditionally in the server build.");
    }

    return ctx;
  }
};

function initCustomFormatter() {
  /* eslint-disable no-restricted-globals */
  if ( false || typeof window === 'undefined') {
    return;
  }

  var vueStyle = {
    style: 'color:#3ba776'
  };
  var numberStyle = {
    style: 'color:#0b1bc9'
  };
  var stringStyle = {
    style: 'color:#b62e24'
  };
  var keywordStyle = {
    style: 'color:#9d288c'
  }; // custom formatter for Chrome
  // https://www.mattzeunert.com/2016/02/19/custom-chrome-devtools-object-formatters.html

  var formatter = {
    header: function header(obj) {
      // TODO also format ComponentPublicInstance & ctx.slots/attrs in setup
      if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(obj)) {
        return null;
      }

      if (obj.__isVue) {
        return ['div', vueStyle, "VueInstance"];
      } else if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isRef)(obj)) {
        return ['div', {}, ['span', vueStyle, genRefFlag(obj)], '<', formatValue(obj.value), ">"];
      } else if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isReactive)(obj)) {
        return ['div', {}, ['span', vueStyle, 'Reactive'], '<', formatValue(obj), ">".concat((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isReadonly)(obj) ? " (readonly)" : "")];
      } else if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isReadonly)(obj)) {
        return ['div', {}, ['span', vueStyle, 'Readonly'], '<', formatValue(obj), '>'];
      }

      return null;
    },
    hasBody: function hasBody(obj) {
      return obj && obj.__isVue;
    },
    body: function body(obj) {
      if (obj && obj.__isVue) {
        return ['div', {}].concat(_toConsumableArray(formatInstance(obj.$)));
      }
    }
  };

  function formatInstance(instance) {
    var blocks = [];

    if (instance.type.props && instance.props) {
      blocks.push(createInstanceBlock('props', (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw)(instance.props)));
    }

    if (instance.setupState !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ) {
      blocks.push(createInstanceBlock('setup', instance.setupState));
    }

    if (instance.data !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ) {
      blocks.push(createInstanceBlock('data', (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw)(instance.data)));
    }

    var computed = extractKeys(instance, 'computed');

    if (computed) {
      blocks.push(createInstanceBlock('computed', computed));
    }

    var injected = extractKeys(instance, 'inject');

    if (injected) {
      blocks.push(createInstanceBlock('injected', injected));
    }

    blocks.push(['div', {}, ['span', {
      style: keywordStyle.style + ';opacity:0.66'
    }, '$ (internal): '], ['object', {
      object: instance
    }]]);
    return blocks;
  }

  function createInstanceBlock(type, target) {
    target = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({}, target);

    if (!Object.keys(target).length) {
      return ['span', {}];
    }

    return ['div', {
      style: 'line-height:1.25em;margin-bottom:0.6em'
    }, ['div', {
      style: 'color:#476582'
    }, type], ['div', {
      style: 'padding-left:1.25em'
    }].concat(_toConsumableArray(Object.keys(target).map(function (key) {
      return ['div', {}, ['span', keywordStyle, key + ': '], formatValue(target[key], false)];
    })))];
  }

  function formatValue(v) {
    var asRaw = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    if (typeof v === 'number') {
      return ['span', numberStyle, v];
    } else if (typeof v === 'string') {
      return ['span', stringStyle, JSON.stringify(v)];
    } else if (typeof v === 'boolean') {
      return ['span', keywordStyle, v];
    } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(v)) {
      return ['object', {
        object: asRaw ? (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw)(v) : v
      }];
    } else {
      return ['span', stringStyle, String(v)];
    }
  }

  function extractKeys(instance, type) {
    var Comp = instance.type;

    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(Comp)) {
      return;
    }

    var extracted = {};

    for (var key in instance.ctx) {
      if (isKeyOfType(Comp, key, type)) {
        extracted[key] = instance.ctx[key];
      }
    }

    return extracted;
  }

  function isKeyOfType(Comp, key, type) {
    var opts = Comp[type];

    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(opts) && opts.includes(key) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(opts) && key in opts) {
      return true;
    }

    if (Comp["extends"] && isKeyOfType(Comp["extends"], key, type)) {
      return true;
    }

    if (Comp.mixins && Comp.mixins.some(function (m) {
      return isKeyOfType(m, key, type);
    })) {
      return true;
    }
  }

  function genRefFlag(v) {
    if (v._shallow) {
      return "ShallowRef";
    }

    if (v.effect) {
      return "ComputedRef";
    }

    return "Ref";
  }

  if (window.devtoolsFormatters) {
    window.devtoolsFormatters.push(formatter);
  } else {
    window.devtoolsFormatters = [formatter];
  }
} // Core API ------------------------------------------------------------------


var version = "3.1.4";
/**
 * SSR utils for \@vue/server-renderer. Only exposed in cjs builds.
 * @internal
 */

var ssrUtils = null;
/**
 * @internal only exposed in compat builds
 */

var resolveFilter = null;
/**
 * @internal only exposed in compat builds.
 */

var compatUtils = null;


/***/ }),

/***/ "./node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseTransition": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.BaseTransition),
/* harmony export */   "Comment": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Comment),
/* harmony export */   "Fragment": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Fragment),
/* harmony export */   "KeepAlive": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.KeepAlive),
/* harmony export */   "Static": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Static),
/* harmony export */   "Suspense": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Suspense),
/* harmony export */   "Teleport": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Teleport),
/* harmony export */   "Text": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Text),
/* harmony export */   "callWithAsyncErrorHandling": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.callWithAsyncErrorHandling),
/* harmony export */   "callWithErrorHandling": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.callWithErrorHandling),
/* harmony export */   "camelize": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.camelize),
/* harmony export */   "capitalize": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.capitalize),
/* harmony export */   "cloneVNode": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.cloneVNode),
/* harmony export */   "compatUtils": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.compatUtils),
/* harmony export */   "computed": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.computed),
/* harmony export */   "createBlock": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createBlock),
/* harmony export */   "createCommentVNode": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode),
/* harmony export */   "createHydrationRenderer": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createHydrationRenderer),
/* harmony export */   "createRenderer": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createRenderer),
/* harmony export */   "createSlots": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createSlots),
/* harmony export */   "createStaticVNode": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode),
/* harmony export */   "createTextVNode": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createTextVNode),
/* harmony export */   "createVNode": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createVNode),
/* harmony export */   "customRef": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.customRef),
/* harmony export */   "defineAsyncComponent": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent),
/* harmony export */   "defineComponent": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.defineComponent),
/* harmony export */   "defineEmit": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.defineEmit),
/* harmony export */   "defineEmits": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.defineEmits),
/* harmony export */   "defineExpose": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.defineExpose),
/* harmony export */   "defineProps": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.defineProps),
/* harmony export */   "devtools": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.devtools),
/* harmony export */   "getCurrentInstance": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance),
/* harmony export */   "getTransitionRawChildren": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.getTransitionRawChildren),
/* harmony export */   "h": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.h),
/* harmony export */   "handleError": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.handleError),
/* harmony export */   "initCustomFormatter": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.initCustomFormatter),
/* harmony export */   "inject": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.inject),
/* harmony export */   "isProxy": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.isProxy),
/* harmony export */   "isReactive": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.isReactive),
/* harmony export */   "isReadonly": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.isReadonly),
/* harmony export */   "isRef": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.isRef),
/* harmony export */   "isRuntimeOnly": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.isRuntimeOnly),
/* harmony export */   "isVNode": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.isVNode),
/* harmony export */   "markRaw": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.markRaw),
/* harmony export */   "mergeDefaults": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.mergeDefaults),
/* harmony export */   "mergeProps": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.mergeProps),
/* harmony export */   "nextTick": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.nextTick),
/* harmony export */   "onActivated": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onActivated),
/* harmony export */   "onBeforeMount": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onBeforeMount),
/* harmony export */   "onBeforeUnmount": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onBeforeUnmount),
/* harmony export */   "onBeforeUpdate": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onBeforeUpdate),
/* harmony export */   "onDeactivated": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onDeactivated),
/* harmony export */   "onErrorCaptured": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onErrorCaptured),
/* harmony export */   "onMounted": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onMounted),
/* harmony export */   "onRenderTracked": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onRenderTracked),
/* harmony export */   "onRenderTriggered": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onRenderTriggered),
/* harmony export */   "onServerPrefetch": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onServerPrefetch),
/* harmony export */   "onUnmounted": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onUnmounted),
/* harmony export */   "onUpdated": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onUpdated),
/* harmony export */   "openBlock": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.openBlock),
/* harmony export */   "popScopeId": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.popScopeId),
/* harmony export */   "provide": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.provide),
/* harmony export */   "proxyRefs": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.proxyRefs),
/* harmony export */   "pushScopeId": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.pushScopeId),
/* harmony export */   "queuePostFlushCb": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.queuePostFlushCb),
/* harmony export */   "reactive": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.reactive),
/* harmony export */   "readonly": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.readonly),
/* harmony export */   "ref": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.ref),
/* harmony export */   "registerRuntimeCompiler": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.registerRuntimeCompiler),
/* harmony export */   "renderList": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.renderList),
/* harmony export */   "renderSlot": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.renderSlot),
/* harmony export */   "resolveComponent": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.resolveComponent),
/* harmony export */   "resolveDirective": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.resolveDirective),
/* harmony export */   "resolveDynamicComponent": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent),
/* harmony export */   "resolveFilter": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.resolveFilter),
/* harmony export */   "resolveTransitionHooks": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.resolveTransitionHooks),
/* harmony export */   "setBlockTracking": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.setBlockTracking),
/* harmony export */   "setDevtoolsHook": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.setDevtoolsHook),
/* harmony export */   "setTransitionHooks": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.setTransitionHooks),
/* harmony export */   "shallowReactive": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.shallowReactive),
/* harmony export */   "shallowReadonly": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.shallowReadonly),
/* harmony export */   "shallowRef": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.shallowRef),
/* harmony export */   "ssrContextKey": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.ssrContextKey),
/* harmony export */   "ssrUtils": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.ssrUtils),
/* harmony export */   "toDisplayString": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.toDisplayString),
/* harmony export */   "toHandlerKey": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.toHandlerKey),
/* harmony export */   "toHandlers": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.toHandlers),
/* harmony export */   "toRaw": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.toRaw),
/* harmony export */   "toRef": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.toRef),
/* harmony export */   "toRefs": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.toRefs),
/* harmony export */   "transformVNodeArgs": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.transformVNodeArgs),
/* harmony export */   "triggerRef": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.triggerRef),
/* harmony export */   "unref": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.unref),
/* harmony export */   "useAttrs": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.useAttrs),
/* harmony export */   "useContext": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.useContext),
/* harmony export */   "useSSRContext": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.useSSRContext),
/* harmony export */   "useSlots": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.useSlots),
/* harmony export */   "useTransitionState": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.useTransitionState),
/* harmony export */   "version": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.version),
/* harmony export */   "warn": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn),
/* harmony export */   "watch": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.watch),
/* harmony export */   "watchEffect": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.watchEffect),
/* harmony export */   "withAsyncContext": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.withAsyncContext),
/* harmony export */   "withCtx": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.withCtx),
/* harmony export */   "withDefaults": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.withDefaults),
/* harmony export */   "withDirectives": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.withDirectives),
/* harmony export */   "withScopeId": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.withScopeId),
/* harmony export */   "Transition": () => (/* binding */ Transition),
/* harmony export */   "TransitionGroup": () => (/* binding */ TransitionGroup),
/* harmony export */   "createApp": () => (/* binding */ createApp),
/* harmony export */   "createSSRApp": () => (/* binding */ createSSRApp),
/* harmony export */   "hydrate": () => (/* binding */ hydrate),
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "useCssModule": () => (/* binding */ useCssModule),
/* harmony export */   "useCssVars": () => (/* binding */ useCssVars),
/* harmony export */   "vModelCheckbox": () => (/* binding */ vModelCheckbox),
/* harmony export */   "vModelDynamic": () => (/* binding */ vModelDynamic),
/* harmony export */   "vModelRadio": () => (/* binding */ vModelRadio),
/* harmony export */   "vModelSelect": () => (/* binding */ vModelSelect),
/* harmony export */   "vModelText": () => (/* binding */ vModelText),
/* harmony export */   "vShow": () => (/* binding */ vShow),
/* harmony export */   "withKeys": () => (/* binding */ withKeys),
/* harmony export */   "withModifiers": () => (/* binding */ withModifiers)
/* harmony export */ });
/* harmony import */ var _vue_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/shared */ "./node_modules/@vue/shared/dist/shared.esm-bundler.js");
/* harmony import */ var _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/runtime-core */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");
/* harmony import */ var _vue_runtime_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vue/runtime-core */ "./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




var svgNS = 'http://www.w3.org/2000/svg';
var doc = typeof document !== 'undefined' ? document : null;
var nodeOps = {
  insert: function insert(child, parent, anchor) {
    parent.insertBefore(child, anchor || null);
  },
  remove: function remove(child) {
    var parent = child.parentNode;

    if (parent) {
      parent.removeChild(child);
    }
  },
  createElement: function createElement(tag, isSVG, is, props) {
    var el = isSVG ? doc.createElementNS(svgNS, tag) : doc.createElement(tag, is ? {
      is: is
    } : undefined);

    if (tag === 'select' && props && props.multiple != null) {
      el.setAttribute('multiple', props.multiple);
    }

    return el;
  },
  createText: function createText(text) {
    return doc.createTextNode(text);
  },
  createComment: function createComment(text) {
    return doc.createComment(text);
  },
  setText: function setText(node, text) {
    node.nodeValue = text;
  },
  setElementText: function setElementText(el, text) {
    el.textContent = text;
  },
  parentNode: function parentNode(node) {
    return node.parentNode;
  },
  nextSibling: function nextSibling(node) {
    return node.nextSibling;
  },
  querySelector: function querySelector(selector) {
    return doc.querySelector(selector);
  },
  setScopeId: function setScopeId(el, id) {
    el.setAttribute(id, '');
  },
  cloneNode: function cloneNode(el) {
    var cloned = el.cloneNode(true); // #3072
    // - in `patchDOMProp`, we store the actual value in the `el._value` property.
    // - normally, elements using `:value` bindings will not be hoisted, but if
    //   the bound value is a constant, e.g. `:value="true"` - they do get
    //   hoisted.
    // - in production, hoisted nodes are cloned when subsequent inserts, but
    //   cloneNode() does not copy the custom property we attached.
    // - This may need to account for other custom DOM properties we attach to
    //   elements in addition to `_value` in the future.

    if ("_value" in el) {
      cloned._value = el._value;
    }

    return cloned;
  },
  // __UNSAFE__
  // Reason: insertAdjacentHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent: function insertStaticContent(content, parent, anchor, isSVG, cached) {
    if (cached) {
      var _first;

      var _last;

      var i = 0;
      var l = cached.length;

      for (; i < l; i++) {
        var node = cached[i].cloneNode(true);
        if (i === 0) _first = node;
        if (i === l - 1) _last = node;
        parent.insertBefore(node, anchor);
      }

      return [_first, _last];
    } // <parent> before | first ... last | anchor </parent>


    var before = anchor ? anchor.previousSibling : parent.lastChild;

    if (anchor) {
      var insertionPoint;
      var usingTempInsertionPoint = false;

      if (anchor instanceof Element) {
        insertionPoint = anchor;
      } else {
        // insertAdjacentHTML only works for elements but the anchor is not an
        // element...
        usingTempInsertionPoint = true;
        insertionPoint = isSVG ? doc.createElementNS(svgNS, 'g') : doc.createElement('div');
        parent.insertBefore(insertionPoint, anchor);
      }

      insertionPoint.insertAdjacentHTML('beforebegin', content);

      if (usingTempInsertionPoint) {
        parent.removeChild(insertionPoint);
      }
    } else {
      parent.insertAdjacentHTML('beforeend', content);
    }

    var first = before ? before.nextSibling : parent.firstChild;
    var last = anchor ? anchor.previousSibling : parent.lastChild;
    var ret = [];

    while (first) {
      ret.push(first);
      if (first === last) break;
      first = first.nextSibling;
    }

    return ret;
  }
}; // compiler should normalize class + :class bindings on the same element
// into a single binding ['staticClass', dynamic]

function patchClass(el, value, isSVG) {
  if (value == null) {
    value = '';
  }

  if (isSVG) {
    el.setAttribute('class', value);
  } else {
    // directly setting className should be faster than setAttribute in theory
    // if this is an element during a transition, take the temporary transition
    // classes into account.
    var transitionClasses = el._vtc;

    if (transitionClasses) {
      value = (value ? [value].concat(_toConsumableArray(transitionClasses)) : _toConsumableArray(transitionClasses)).join(' ');
    }

    el.className = value;
  }
}

function patchStyle(el, prev, next) {
  var style = el.style;

  if (!next) {
    el.removeAttribute('style');
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(next)) {
    if (prev !== next) {
      var current = style.display;
      style.cssText = next; // indicates that the `display` of the element is controlled by `v-show`,
      // so we always keep the current `display` value regardless of the `style` value,
      // thus handing over control to `v-show`.

      if ('_vod' in el) {
        style.display = current;
      }
    }
  } else {
    for (var key in next) {
      setStyle(style, key, next[key]);
    }

    if (prev && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(prev)) {
      for (var _key in prev) {
        if (next[_key] == null) {
          setStyle(style, _key, '');
        }
      }
    }
  }
}

var importantRE = /\s*!important$/;

function setStyle(style, name, val) {
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(val)) {
    val.forEach(function (v) {
      return setStyle(style, name, v);
    });
  } else {
    if (name.startsWith('--')) {
      // custom property definition
      style.setProperty(name, val);
    } else {
      var prefixed = autoPrefix(style, name);

      if (importantRE.test(val)) {
        // !important
        style.setProperty((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(prefixed), val.replace(importantRE, ''), 'important');
      } else {
        style[prefixed] = val;
      }
    }
  }
}

var prefixes = ['Webkit', 'Moz', 'ms'];
var prefixCache = {};

function autoPrefix(style, rawName) {
  var cached = prefixCache[rawName];

  if (cached) {
    return cached;
  }

  var name = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(rawName);

  if (name !== 'filter' && name in style) {
    return prefixCache[rawName] = name;
  }

  name = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.capitalize)(name);

  for (var i = 0; i < prefixes.length; i++) {
    var prefixed = prefixes[i] + name;

    if (prefixed in style) {
      return prefixCache[rawName] = prefixed;
    }
  }

  return rawName;
}

var xlinkNS = 'http://www.w3.org/1999/xlink';

function patchAttr(el, key, value, isSVG, instance) {
  if (isSVG && key.startsWith('xlink:')) {
    if (value == null) {
      el.removeAttributeNS(xlinkNS, key.slice(6, key.length));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    // note we are only checking boolean attributes that don't have a
    // corresponding dom prop of the same name here.
    var isBoolean = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isSpecialBooleanAttr)(key);

    if (value == null || isBoolean && value === false) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, isBoolean ? '' : value);
    }
  }
} // __UNSAFE__
// functions. The user is responsible for using them with only trusted content.


function patchDOMProp(el, key, value, // the following args are passed only due to potential innerHTML/textContent
// overriding existing VNodes, in which case the old tree must be properly
// unmounted.
prevChildren, parentComponent, parentSuspense, unmountChildren) {
  if (key === 'innerHTML' || key === 'textContent') {
    if (prevChildren) {
      unmountChildren(prevChildren, parentComponent, parentSuspense);
    }

    el[key] = value == null ? '' : value;
    return;
  }

  if (key === 'value' && el.tagName !== 'PROGRESS') {
    // store value as _value as well since
    // non-string values will be stringified.
    el._value = value;
    var newValue = value == null ? '' : value;

    if (el.value !== newValue) {
      el.value = newValue;
    }

    if (value == null) {
      el.removeAttribute(key);
    }

    return;
  }

  if (value === '' || value == null) {
    var type = _typeof(el[key]);

    if (value === '' && type === 'boolean') {
      // e.g. <select multiple> compiles to { multiple: '' }
      el[key] = true;
      return;
    } else if (value == null && type === 'string') {
      // e.g. <div :id="null">
      el[key] = '';
      el.removeAttribute(key);
      return;
    } else if (type === 'number') {
      // e.g. <img :width="null">
      el[key] = 0;
      el.removeAttribute(key);
      return;
    }
  } // some properties perform value validation and throw


  try {
    el[key] = value;
  } catch (e) {
    if (true) {
      (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)("Failed setting prop \"".concat(key, "\" on <").concat(el.tagName.toLowerCase(), ">: ") + "value ".concat(value, " is invalid."), e);
    }
  }
} // Async edge case fix requires storing an event listener's attach timestamp.


var _getNow = Date.now;
var skipTimestampCheck = false;

if (typeof window !== 'undefined') {
  // Determine what event timestamp the browser is using. Annoyingly, the
  // timestamp can either be hi-res (relative to page load) or low-res
  // (relative to UNIX epoch), so in order to compare time we have to use the
  // same timestamp type when saving the flush timestamp.
  if (_getNow() > document.createEvent('Event').timeStamp) {
    // if the low-res timestamp which is bigger than the event timestamp
    // (which is evaluated AFTER) it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listeners as well.
    _getNow = function _getNow() {
      return performance.now();
    };
  } // #3485: Firefox <= 53 has incorrect Event.timeStamp implementation
  // and does not fire microtasks in between event propagation, so safe to exclude.


  var ffMatch = navigator.userAgent.match(/firefox\/(\d+)/i);
  skipTimestampCheck = !!(ffMatch && Number(ffMatch[1]) <= 53);
} // To avoid the overhead of repeatedly calling performance.now(), we cache
// and use the same timestamp for all event listeners attached in the same tick.


var cachedNow = 0;
var p = Promise.resolve();

var reset = function reset() {
  cachedNow = 0;
};

var getNow = function getNow() {
  return cachedNow || (p.then(reset), cachedNow = _getNow());
};

function addEventListener(el, event, handler, options) {
  el.addEventListener(event, handler, options);
}

function removeEventListener(el, event, handler, options) {
  el.removeEventListener(event, handler, options);
}

function patchEvent(el, rawName, prevValue, nextValue) {
  var instance = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
  // vei = vue event invokers
  var invokers = el._vei || (el._vei = {});
  var existingInvoker = invokers[rawName];

  if (nextValue && existingInvoker) {
    // patch
    existingInvoker.value = nextValue;
  } else {
    var _parseName = parseName(rawName),
        _parseName2 = _slicedToArray(_parseName, 2),
        name = _parseName2[0],
        options = _parseName2[1];

    if (nextValue) {
      // add
      var invoker = invokers[rawName] = createInvoker(nextValue, instance);
      addEventListener(el, name, invoker, options);
    } else if (existingInvoker) {
      // remove
      removeEventListener(el, name, existingInvoker, options);
      invokers[rawName] = undefined;
    }
  }
}

var optionsModifierRE = /(?:Once|Passive|Capture)$/;

function parseName(name) {
  var options;

  if (optionsModifierRE.test(name)) {
    options = {};
    var m;

    while (m = name.match(optionsModifierRE)) {
      name = name.slice(0, name.length - m[0].length);
      options[m[0].toLowerCase()] = true;
    }
  }

  return [(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(name.slice(2)), options];
}

function createInvoker(initialValue, instance) {
  var invoker = function invoker(e) {
    // async edge case #6566: inner click event triggers patch, event handler
    // attached to outer element during patch, and triggered again. This
    // happens because browsers fire microtask ticks between event propagation.
    // the solution is simple: we save the timestamp when a handler is attached,
    // and the handler would only fire if the event passed to it was fired
    // AFTER it was attached.
    var timeStamp = e.timeStamp || _getNow();

    if (skipTimestampCheck || timeStamp >= invoker.attached - 1) {
      (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.callWithAsyncErrorHandling)(patchStopImmediatePropagation(e, invoker.value), instance, 5
      /* NATIVE_EVENT_HANDLER */
      , [e]);
    }
  };

  invoker.value = initialValue;
  invoker.attached = getNow();
  return invoker;
}

function patchStopImmediatePropagation(e, value) {
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(value)) {
    var originalStop = e.stopImmediatePropagation;

    e.stopImmediatePropagation = function () {
      originalStop.call(e);
      e._stopped = true;
    };

    return value.map(function (fn) {
      return function (e) {
        return !e._stopped && fn(e);
      };
    });
  } else {
    return value;
  }
}

var nativeOnRE = /^on[a-z]/;

var forcePatchProp = function forcePatchProp(_, key) {
  return key === 'value';
};

var patchProp = function patchProp(el, key, prevValue, nextValue) {
  var isSVG = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var prevChildren = arguments.length > 5 ? arguments[5] : undefined;
  var parentComponent = arguments.length > 6 ? arguments[6] : undefined;
  var parentSuspense = arguments.length > 7 ? arguments[7] : undefined;
  var unmountChildren = arguments.length > 8 ? arguments[8] : undefined;

  switch (key) {
    // special
    case 'class':
      patchClass(el, nextValue, isSVG);
      break;

    case 'style':
      patchStyle(el, prevValue, nextValue);
      break;

    default:
      if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isOn)(key)) {
        // ignore v-model listeners
        if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isModelListener)(key)) {
          patchEvent(el, key, prevValue, nextValue, parentComponent);
        }
      } else if (shouldSetAsProp(el, key, nextValue, isSVG)) {
        patchDOMProp(el, key, nextValue, prevChildren, parentComponent, parentSuspense, unmountChildren);
      } else {
        // special case for <input v-model type="checkbox"> with
        // :true-value & :false-value
        // store value as dom properties since non-string values will be
        // stringified.
        if (key === 'true-value') {
          el._trueValue = nextValue;
        } else if (key === 'false-value') {
          el._falseValue = nextValue;
        }

        patchAttr(el, key, nextValue, isSVG);
      }

      break;
  }
};

function shouldSetAsProp(el, key, value, isSVG) {
  if (isSVG) {
    // most keys must be set as attribute on svg elements to work
    // ...except innerHTML
    if (key === 'innerHTML') {
      return true;
    } // or native onclick with function values


    if (key in el && nativeOnRE.test(key) && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(value)) {
      return true;
    }

    return false;
  } // spellcheck and draggable are numerated attrs, however their
  // corresponding DOM properties are actually booleans - this leads to
  // setting it with a string "false" value leading it to be coerced to
  // `true`, so we need to always treat them as attributes.
  // Note that `contentEditable` doesn't have this problem: its DOM
  // property is also enumerated string values.


  if (key === 'spellcheck' || key === 'draggable') {
    return false;
  } // #1787, #2840 form property on form elements is readonly and must be set as
  // attribute.


  if (key === 'form') {
    return false;
  } // #1526 <input list> must be set as attribute


  if (key === 'list' && el.tagName === 'INPUT') {
    return false;
  } // #2766 <textarea type> must be set as attribute


  if (key === 'type' && el.tagName === 'TEXTAREA') {
    return false;
  } // native onclick with string value, must be set as attribute


  if (nativeOnRE.test(key) && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(value)) {
    return false;
  }

  return key in el;
}

function useCssModule() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '$style';

  /* istanbul ignore else */
  {
    var instance = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance)();

    if (!instance) {
       true && (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)("useCssModule must be called inside setup()");
      return _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ;
    }

    var modules = instance.type.__cssModules;

    if (!modules) {
       true && (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)("Current instance does not have CSS modules injected.");
      return _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ;
    }

    var mod = modules[name];

    if (!mod) {
       true && (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)("Current instance does not have CSS module named \"".concat(name, "\"."));
      return _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ;
    }

    return mod;
  }
}
/**
 * Runtime helper for SFC's CSS variable injection feature.
 * @private
 */


function useCssVars(getter) {
  var instance = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance)();
  /* istanbul ignore next */

  if (!instance) {
     true && (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)("useCssVars is called without current active component instance.");
    return;
  }

  var setVars = function setVars() {
    return setVarsOnVNode(instance.subTree, getter(instance.proxy));
  };

  (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
    return (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.watchEffect)(setVars, {
      flush: 'post'
    });
  });
  (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onUpdated)(setVars);
}

function setVarsOnVNode(vnode, vars) {
  if (vnode.shapeFlag & 128
  /* SUSPENSE */
  ) {
      var suspense = vnode.suspense;
      vnode = suspense.activeBranch;

      if (suspense.pendingBranch && !suspense.isHydrating) {
        suspense.effects.push(function () {
          setVarsOnVNode(suspense.activeBranch, vars);
        });
      }
    } // drill down HOCs until it's a non-component vnode


  while (vnode.component) {
    vnode = vnode.component.subTree;
  }

  if (vnode.shapeFlag & 1
  /* ELEMENT */
  && vnode.el) {
    var style = vnode.el.style;

    for (var key in vars) {
      style.setProperty("--".concat(key), vars[key]);
    }
  } else if (vnode.type === _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Fragment) {
    vnode.children.forEach(function (c) {
      return setVarsOnVNode(c, vars);
    });
  }
}

var TRANSITION = 'transition';
var ANIMATION = 'animation'; // DOM Transition is a higher-order-component based on the platform-agnostic
// base Transition component, with DOM-specific logic.

var Transition = function Transition(props, _ref) {
  var slots = _ref.slots;
  return (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.h)(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.BaseTransition, resolveTransitionProps(props), slots);
};

Transition.displayName = 'Transition';
var DOMTransitionPropsValidators = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    "default": true
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
};
var TransitionPropsValidators = Transition.props = /*#__PURE__*/(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({}, _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.BaseTransition.props, DOMTransitionPropsValidators);
/**
 * #3227 Incoming hooks may be merged into arrays when wrapping Transition
 * with custom HOCs.
 */

var callHook = function callHook(hook) {
  var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(hook)) {
    hook.forEach(function (h) {
      return h.apply(void 0, _toConsumableArray(args));
    });
  } else if (hook) {
    hook.apply(void 0, _toConsumableArray(args));
  }
};
/**
 * Check if a hook expects a callback (2nd arg), which means the user
 * intends to explicitly control the end of the transition.
 */


var hasExplicitCallback = function hasExplicitCallback(hook) {
  return hook ? (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(hook) ? hook.some(function (h) {
    return h.length > 1;
  }) : hook.length > 1 : false;
};

function resolveTransitionProps(rawProps) {
  var baseProps = {};

  for (var key in rawProps) {
    if (!(key in DOMTransitionPropsValidators)) {
      baseProps[key] = rawProps[key];
    }
  }

  if (rawProps.css === false) {
    return baseProps;
  }

  var _rawProps$name = rawProps.name,
      name = _rawProps$name === void 0 ? 'v' : _rawProps$name,
      type = rawProps.type,
      duration = rawProps.duration,
      _rawProps$enterFromCl = rawProps.enterFromClass,
      enterFromClass = _rawProps$enterFromCl === void 0 ? "".concat(name, "-enter-from") : _rawProps$enterFromCl,
      _rawProps$enterActive = rawProps.enterActiveClass,
      enterActiveClass = _rawProps$enterActive === void 0 ? "".concat(name, "-enter-active") : _rawProps$enterActive,
      _rawProps$enterToClas = rawProps.enterToClass,
      enterToClass = _rawProps$enterToClas === void 0 ? "".concat(name, "-enter-to") : _rawProps$enterToClas,
      _rawProps$appearFromC = rawProps.appearFromClass,
      appearFromClass = _rawProps$appearFromC === void 0 ? enterFromClass : _rawProps$appearFromC,
      _rawProps$appearActiv = rawProps.appearActiveClass,
      appearActiveClass = _rawProps$appearActiv === void 0 ? enterActiveClass : _rawProps$appearActiv,
      _rawProps$appearToCla = rawProps.appearToClass,
      appearToClass = _rawProps$appearToCla === void 0 ? enterToClass : _rawProps$appearToCla,
      _rawProps$leaveFromCl = rawProps.leaveFromClass,
      leaveFromClass = _rawProps$leaveFromCl === void 0 ? "".concat(name, "-leave-from") : _rawProps$leaveFromCl,
      _rawProps$leaveActive = rawProps.leaveActiveClass,
      leaveActiveClass = _rawProps$leaveActive === void 0 ? "".concat(name, "-leave-active") : _rawProps$leaveActive,
      _rawProps$leaveToClas = rawProps.leaveToClass,
      leaveToClass = _rawProps$leaveToClas === void 0 ? "".concat(name, "-leave-to") : _rawProps$leaveToClas;
  var durations = normalizeDuration(duration);
  var enterDuration = durations && durations[0];
  var leaveDuration = durations && durations[1];

  var _onBeforeEnter = baseProps.onBeforeEnter,
      onEnter = baseProps.onEnter,
      _onEnterCancelled = baseProps.onEnterCancelled,
      _onLeave = baseProps.onLeave,
      _onLeaveCancelled = baseProps.onLeaveCancelled,
      _baseProps$onBeforeAp = baseProps.onBeforeAppear,
      _onBeforeAppear = _baseProps$onBeforeAp === void 0 ? _onBeforeEnter : _baseProps$onBeforeAp,
      _baseProps$onAppear = baseProps.onAppear,
      onAppear = _baseProps$onAppear === void 0 ? onEnter : _baseProps$onAppear,
      _baseProps$onAppearCa = baseProps.onAppearCancelled,
      _onAppearCancelled = _baseProps$onAppearCa === void 0 ? _onEnterCancelled : _baseProps$onAppearCa;

  var finishEnter = function finishEnter(el, isAppear, done) {
    removeTransitionClass(el, isAppear ? appearToClass : enterToClass);
    removeTransitionClass(el, isAppear ? appearActiveClass : enterActiveClass);
    done && done();
  };

  var finishLeave = function finishLeave(el, done) {
    removeTransitionClass(el, leaveToClass);
    removeTransitionClass(el, leaveActiveClass);
    done && done();
  };

  var makeEnterHook = function makeEnterHook(isAppear) {
    return function (el, done) {
      var hook = isAppear ? onAppear : onEnter;

      var resolve = function resolve() {
        return finishEnter(el, isAppear, done);
      };

      callHook(hook, [el, resolve]);
      nextFrame(function () {
        removeTransitionClass(el, isAppear ? appearFromClass : enterFromClass);
        addTransitionClass(el, isAppear ? appearToClass : enterToClass);

        if (!hasExplicitCallback(hook)) {
          whenTransitionEnds(el, type, enterDuration, resolve);
        }
      });
    };
  };

  return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(baseProps, {
    onBeforeEnter: function onBeforeEnter(el) {
      callHook(_onBeforeEnter, [el]);
      addTransitionClass(el, enterFromClass);
      addTransitionClass(el, enterActiveClass);
    },
    onBeforeAppear: function onBeforeAppear(el) {
      callHook(_onBeforeAppear, [el]);
      addTransitionClass(el, appearFromClass);
      addTransitionClass(el, appearActiveClass);
    },
    onEnter: makeEnterHook(false),
    onAppear: makeEnterHook(true),
    onLeave: function onLeave(el, done) {
      var resolve = function resolve() {
        return finishLeave(el, done);
      };

      addTransitionClass(el, leaveFromClass); // force reflow so *-leave-from classes immediately take effect (#2593)

      forceReflow();
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        removeTransitionClass(el, leaveFromClass);
        addTransitionClass(el, leaveToClass);

        if (!hasExplicitCallback(_onLeave)) {
          whenTransitionEnds(el, type, leaveDuration, resolve);
        }
      });
      callHook(_onLeave, [el, resolve]);
    },
    onEnterCancelled: function onEnterCancelled(el) {
      finishEnter(el, false);
      callHook(_onEnterCancelled, [el]);
    },
    onAppearCancelled: function onAppearCancelled(el) {
      finishEnter(el, true);
      callHook(_onAppearCancelled, [el]);
    },
    onLeaveCancelled: function onLeaveCancelled(el) {
      finishLeave(el);
      callHook(_onLeaveCancelled, [el]);
    }
  });
}

function normalizeDuration(duration) {
  if (duration == null) {
    return null;
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(duration)) {
    return [NumberOf(duration.enter), NumberOf(duration.leave)];
  } else {
    var n = NumberOf(duration);
    return [n, n];
  }
}

function NumberOf(val) {
  var res = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toNumber)(val);
  if (true) validateDuration(res);
  return res;
}

function validateDuration(val) {
  if (typeof val !== 'number') {
    (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)("<transition> explicit duration is not a valid number - " + "got ".concat(JSON.stringify(val), "."));
  } else if (isNaN(val)) {
    (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)("<transition> explicit duration is NaN - " + 'the duration expression might be incorrect.');
  }
}

function addTransitionClass(el, cls) {
  cls.split(/\s+/).forEach(function (c) {
    return c && el.classList.add(c);
  });
  (el._vtc || (el._vtc = new Set())).add(cls);
}

function removeTransitionClass(el, cls) {
  cls.split(/\s+/).forEach(function (c) {
    return c && el.classList.remove(c);
  });
  var _vtc = el._vtc;

  if (_vtc) {
    _vtc["delete"](cls);

    if (!_vtc.size) {
      el._vtc = undefined;
    }
  }
}

function nextFrame(cb) {
  requestAnimationFrame(function () {
    requestAnimationFrame(cb);
  });
}

var endId = 0;

function whenTransitionEnds(el, expectedType, explicitTimeout, resolve) {
  var id = el._endId = ++endId;

  var resolveIfNotStale = function resolveIfNotStale() {
    if (id === el._endId) {
      resolve();
    }
  };

  if (explicitTimeout) {
    return setTimeout(resolveIfNotStale, explicitTimeout);
  }

  var _getTransitionInfo = getTransitionInfo(el, expectedType),
      type = _getTransitionInfo.type,
      timeout = _getTransitionInfo.timeout,
      propCount = _getTransitionInfo.propCount;

  if (!type) {
    return resolve();
  }

  var endEvent = type + 'end';
  var ended = 0;

  var end = function end() {
    el.removeEventListener(endEvent, onEnd);
    resolveIfNotStale();
  };

  var onEnd = function onEnd(e) {
    if (e.target === el && ++ended >= propCount) {
      end();
    }
  };

  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(endEvent, onEnd);
}

function getTransitionInfo(el, expectedType) {
  var styles = window.getComputedStyle(el); // JSDOM may return undefined for transition properties

  var getStyleProperties = function getStyleProperties(key) {
    return (styles[key] || '').split(', ');
  };

  var transitionDelays = getStyleProperties(TRANSITION + 'Delay');
  var transitionDurations = getStyleProperties(TRANSITION + 'Duration');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = getStyleProperties(ANIMATION + 'Delay');
  var animationDurations = getStyleProperties(ANIMATION + 'Duration');
  var animationTimeout = getTimeout(animationDelays, animationDurations);
  var type = null;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */

  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
    propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
  }

  var hasTransform = type === TRANSITION && /\b(transform|all)(,|$)/.test(styles[TRANSITION + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  };
}

function getTimeout(delays, durations) {
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(Math, _toConsumableArray(durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i]);
  })));
} // Old versions of Chromium (below 61.0.3163.100) formats floating pointer
// numbers in a locale-dependent way, using a comma instead of a dot.
// If comma is not replaced with a dot, the input will be rounded down
// (i.e. acting as a floor function) causing unexpected behaviors


function toMs(s) {
  return Number(s.slice(0, -1).replace(',', '.')) * 1000;
} // synchronously force layout to put elements into a certain state


function forceReflow() {
  return document.body.offsetHeight;
}

var positionMap = new WeakMap();
var newPositionMap = new WeakMap();
var TransitionGroupImpl = {
  name: 'TransitionGroup',
  props: /*#__PURE__*/(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({}, TransitionPropsValidators, {
    tag: String,
    moveClass: String
  }),
  setup: function setup(props, _ref2) {
    var slots = _ref2.slots;
    var instance = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance)();
    var state = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.useTransitionState)();
    var prevChildren;
    var children;
    (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onUpdated)(function () {
      // children is guaranteed to exist after initial render
      if (!prevChildren.length) {
        return;
      }

      var moveClass = props.moveClass || "".concat(props.name || 'v', "-move");

      if (!hasCSSTransform(prevChildren[0].el, instance.vnode.el, moveClass)) {
        return;
      } // we divide the work into three loops to avoid mixing DOM reads and writes
      // in each iteration - which helps prevent layout thrashing.


      prevChildren.forEach(callPendingCbs);
      prevChildren.forEach(recordPosition);
      var movedChildren = prevChildren.filter(applyTranslation); // force reflow to put everything in position

      forceReflow();
      movedChildren.forEach(function (c) {
        var el = c.el;
        var style = el.style;
        addTransitionClass(el, moveClass);
        style.transform = style.webkitTransform = style.transitionDuration = '';

        var cb = el._moveCb = function (e) {
          if (e && e.target !== el) {
            return;
          }

          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener('transitionend', cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        };

        el.addEventListener('transitionend', cb);
      });
    });
    return function () {
      var rawProps = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_2__.toRaw)(props);
      var cssTransitionProps = resolveTransitionProps(rawProps);
      var tag = rawProps.tag || _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Fragment;
      prevChildren = children;
      children = slots["default"] ? (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.getTransitionRawChildren)(slots["default"]()) : [];

      for (var i = 0; i < children.length; i++) {
        var child = children[i];

        if (child.key != null) {
          (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.setTransitionHooks)(child, (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.resolveTransitionHooks)(child, cssTransitionProps, state, instance));
        } else if (true) {
          (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)("<TransitionGroup> children must be keyed.");
        }
      }

      if (prevChildren) {
        for (var _i2 = 0; _i2 < prevChildren.length; _i2++) {
          var _child = prevChildren[_i2];
          (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.setTransitionHooks)(_child, (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.resolveTransitionHooks)(_child, cssTransitionProps, state, instance));
          positionMap.set(_child, _child.el.getBoundingClientRect());
        }
      }

      return (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createVNode)(tag, null, children);
    };
  }
};
var TransitionGroup = TransitionGroupImpl;

function callPendingCbs(c) {
  var el = c.el;

  if (el._moveCb) {
    el._moveCb();
  }

  if (el._enterCb) {
    el._enterCb();
  }
}

function recordPosition(c) {
  newPositionMap.set(c, c.el.getBoundingClientRect());
}

function applyTranslation(c) {
  var oldPos = positionMap.get(c);
  var newPos = newPositionMap.get(c);
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;

  if (dx || dy) {
    var s = c.el.style;
    s.transform = s.webkitTransform = "translate(".concat(dx, "px,").concat(dy, "px)");
    s.transitionDuration = '0s';
    return c;
  }
}

function hasCSSTransform(el, root, moveClass) {
  // Detect whether an element with the move class applied has
  // CSS transitions. Since the element may be inside an entering
  // transition at this very moment, we make a clone of it and remove
  // all other transition classes applied to ensure only the move class
  // is applied.
  var clone = el.cloneNode();

  if (el._vtc) {
    el._vtc.forEach(function (cls) {
      cls.split(/\s+/).forEach(function (c) {
        return c && clone.classList.remove(c);
      });
    });
  }

  moveClass.split(/\s+/).forEach(function (c) {
    return c && clone.classList.add(c);
  });
  clone.style.display = 'none';
  var container = root.nodeType === 1 ? root : root.parentNode;
  container.appendChild(clone);

  var _getTransitionInfo2 = getTransitionInfo(clone),
      hasTransform = _getTransitionInfo2.hasTransform;

  container.removeChild(clone);
  return hasTransform;
}

var getModelAssigner = function getModelAssigner(vnode) {
  var fn = vnode.props['onUpdate:modelValue'];
  return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(fn) ? function (value) {
    return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.invokeArrayFns)(fn, value);
  } : fn;
};

function onCompositionStart(e) {
  e.target.composing = true;
}

function onCompositionEnd(e) {
  var target = e.target;

  if (target.composing) {
    target.composing = false;
    trigger(target, 'input');
  }
}

function trigger(el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
} // We are exporting the v-model runtime directly as vnode hooks so that it can
// be tree-shaken in case v-model is never used.


var vModelText = {
  created: function created(el, _ref3, vnode) {
    var _ref3$modifiers = _ref3.modifiers,
        lazy = _ref3$modifiers.lazy,
        trim = _ref3$modifiers.trim,
        number = _ref3$modifiers.number;
    el._assign = getModelAssigner(vnode);
    var castToNumber = number || el.type === 'number';
    addEventListener(el, lazy ? 'change' : 'input', function (e) {
      if (e.target.composing) return;
      var domValue = el.value;

      if (trim) {
        domValue = domValue.trim();
      } else if (castToNumber) {
        domValue = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toNumber)(domValue);
      }

      el._assign(domValue);
    });

    if (trim) {
      addEventListener(el, 'change', function () {
        el.value = el.value.trim();
      });
    }

    if (!lazy) {
      addEventListener(el, 'compositionstart', onCompositionStart);
      addEventListener(el, 'compositionend', onCompositionEnd); // Safari < 10.2 & UIWebView doesn't fire compositionend when
      // switching focus before confirming composition choice
      // this also fixes the issue where some browsers e.g. iOS Chrome
      // fires "change" instead of "input" on autocomplete.

      addEventListener(el, 'change', onCompositionEnd);
    }
  },
  // set value on mounted so it's after min/max for type="range"
  mounted: function mounted(el, _ref4) {
    var value = _ref4.value;
    el.value = value == null ? '' : value;
  },
  beforeUpdate: function beforeUpdate(el, _ref5, vnode) {
    var value = _ref5.value,
        _ref5$modifiers = _ref5.modifiers,
        trim = _ref5$modifiers.trim,
        number = _ref5$modifiers.number;
    el._assign = getModelAssigner(vnode); // avoid clearing unresolved text. #2302

    if (el.composing) return;

    if (document.activeElement === el) {
      if (trim && el.value.trim() === value) {
        return;
      }

      if ((number || el.type === 'number') && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toNumber)(el.value) === value) {
        return;
      }
    }

    var newValue = value == null ? '' : value;

    if (el.value !== newValue) {
      el.value = newValue;
    }
  }
};
var vModelCheckbox = {
  created: function created(el, _, vnode) {
    el._assign = getModelAssigner(vnode);
    addEventListener(el, 'change', function () {
      var modelValue = el._modelValue;
      var elementValue = getValue(el);
      var checked = el.checked;
      var assign = el._assign;

      if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(modelValue)) {
        var index = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.looseIndexOf)(modelValue, elementValue);
        var found = index !== -1;

        if (checked && !found) {
          assign(modelValue.concat(elementValue));
        } else if (!checked && found) {
          var filtered = _toConsumableArray(modelValue);

          filtered.splice(index, 1);
          assign(filtered);
        }
      } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isSet)(modelValue)) {
        var cloned = new Set(modelValue);

        if (checked) {
          cloned.add(elementValue);
        } else {
          cloned["delete"](elementValue);
        }

        assign(cloned);
      } else {
        assign(getCheckboxValue(el, checked));
      }
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: setChecked,
  beforeUpdate: function beforeUpdate(el, binding, vnode) {
    el._assign = getModelAssigner(vnode);
    setChecked(el, binding, vnode);
  }
};

function setChecked(el, _ref6, vnode) {
  var value = _ref6.value,
      oldValue = _ref6.oldValue;
  el._modelValue = value;

  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(value)) {
    el.checked = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.looseIndexOf)(value, vnode.props.value) > -1;
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isSet)(value)) {
    el.checked = value.has(vnode.props.value);
  } else if (value !== oldValue) {
    el.checked = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.looseEqual)(value, getCheckboxValue(el, true));
  }
}

var vModelRadio = {
  created: function created(el, _ref7, vnode) {
    var value = _ref7.value;
    el.checked = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.looseEqual)(value, vnode.props.value);
    el._assign = getModelAssigner(vnode);
    addEventListener(el, 'change', function () {
      el._assign(getValue(el));
    });
  },
  beforeUpdate: function beforeUpdate(el, _ref8, vnode) {
    var value = _ref8.value,
        oldValue = _ref8.oldValue;
    el._assign = getModelAssigner(vnode);

    if (value !== oldValue) {
      el.checked = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.looseEqual)(value, vnode.props.value);
    }
  }
};
var vModelSelect = {
  created: function created(el, _ref9, vnode) {
    var value = _ref9.value,
        number = _ref9.modifiers.number;
    var isSetModel = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isSet)(value);
    addEventListener(el, 'change', function () {
      var selectedVal = Array.prototype.filter.call(el.options, function (o) {
        return o.selected;
      }).map(function (o) {
        return number ? (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toNumber)(getValue(o)) : getValue(o);
      });

      el._assign(el.multiple ? isSetModel ? new Set(selectedVal) : selectedVal : selectedVal[0]);
    });
    el._assign = getModelAssigner(vnode);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted: function mounted(el, _ref10) {
    var value = _ref10.value;
    setSelected(el, value);
  },
  beforeUpdate: function beforeUpdate(el, _binding, vnode) {
    el._assign = getModelAssigner(vnode);
  },
  updated: function updated(el, _ref11) {
    var value = _ref11.value;
    setSelected(el, value);
  }
};

function setSelected(el, value) {
  var isMultiple = el.multiple;

  if (isMultiple && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(value) && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isSet)(value)) {
     true && (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)("<select multiple v-model> expects an Array or Set value for its binding, " + "but got ".concat(Object.prototype.toString.call(value).slice(8, -1), "."));
    return;
  }

  for (var i = 0, l = el.options.length; i < l; i++) {
    var option = el.options[i];
    var optionValue = getValue(option);

    if (isMultiple) {
      if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(value)) {
        option.selected = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.looseIndexOf)(value, optionValue) > -1;
      } else {
        option.selected = value.has(optionValue);
      }
    } else {
      if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.looseEqual)(getValue(option), value)) {
        if (el.selectedIndex !== i) el.selectedIndex = i;
        return;
      }
    }
  }

  if (!isMultiple && el.selectedIndex !== -1) {
    el.selectedIndex = -1;
  }
} // retrieve raw value set via :value bindings


function getValue(el) {
  return '_value' in el ? el._value : el.value;
} // retrieve raw value for true-value and false-value set via :true-value or :false-value bindings


function getCheckboxValue(el, checked) {
  var key = checked ? '_trueValue' : '_falseValue';
  return key in el ? el[key] : checked;
}

var vModelDynamic = {
  created: function created(el, binding, vnode) {
    callModelHook(el, binding, vnode, null, 'created');
  },
  mounted: function mounted(el, binding, vnode) {
    callModelHook(el, binding, vnode, null, 'mounted');
  },
  beforeUpdate: function beforeUpdate(el, binding, vnode, prevVNode) {
    callModelHook(el, binding, vnode, prevVNode, 'beforeUpdate');
  },
  updated: function updated(el, binding, vnode, prevVNode) {
    callModelHook(el, binding, vnode, prevVNode, 'updated');
  }
};

function callModelHook(el, binding, vnode, prevVNode, hook) {
  var modelToUse;

  switch (el.tagName) {
    case 'SELECT':
      modelToUse = vModelSelect;
      break;

    case 'TEXTAREA':
      modelToUse = vModelText;
      break;

    default:
      switch (vnode.props && vnode.props.type) {
        case 'checkbox':
          modelToUse = vModelCheckbox;
          break;

        case 'radio':
          modelToUse = vModelRadio;
          break;

        default:
          modelToUse = vModelText;
      }

  }

  var fn = modelToUse[hook];
  fn && fn(el, binding, vnode, prevVNode);
}

var systemModifiers = ['ctrl', 'shift', 'alt', 'meta'];
var modifierGuards = {
  stop: function stop(e) {
    return e.stopPropagation();
  },
  prevent: function prevent(e) {
    return e.preventDefault();
  },
  self: function self(e) {
    return e.target !== e.currentTarget;
  },
  ctrl: function ctrl(e) {
    return !e.ctrlKey;
  },
  shift: function shift(e) {
    return !e.shiftKey;
  },
  alt: function alt(e) {
    return !e.altKey;
  },
  meta: function meta(e) {
    return !e.metaKey;
  },
  left: function left(e) {
    return 'button' in e && e.button !== 0;
  },
  middle: function middle(e) {
    return 'button' in e && e.button !== 1;
  },
  right: function right(e) {
    return 'button' in e && e.button !== 2;
  },
  exact: function exact(e, modifiers) {
    return systemModifiers.some(function (m) {
      return e["".concat(m, "Key")] && !modifiers.includes(m);
    });
  }
};
/**
 * @private
 */

var withModifiers = function withModifiers(fn, modifiers) {
  return function (event) {
    for (var i = 0; i < modifiers.length; i++) {
      var guard = modifierGuards[modifiers[i]];
      if (guard && guard(event, modifiers)) return;
    }

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key2 = 1; _key2 < _len; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    return fn.apply(void 0, [event].concat(args));
  };
}; // Kept for 2.x compat.
// Note: IE11 compat for `spacebar` and `del` is removed for now.


var keyNames = {
  esc: 'escape',
  space: ' ',
  up: 'arrow-up',
  left: 'arrow-left',
  right: 'arrow-right',
  down: 'arrow-down',
  "delete": 'backspace'
};
/**
 * @private
 */

var withKeys = function withKeys(fn, modifiers) {
  return function (event) {
    if (!('key' in event)) {
      return;
    }

    var eventKey = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(event.key);

    if (modifiers.some(function (k) {
      return k === eventKey || keyNames[k] === eventKey;
    })) {
      return fn(event);
    }
  };
};

var vShow = {
  beforeMount: function beforeMount(el, _ref12, _ref13) {
    var value = _ref12.value;
    var transition = _ref13.transition;
    el._vod = el.style.display === 'none' ? '' : el.style.display;

    if (transition && value) {
      transition.beforeEnter(el);
    } else {
      setDisplay(el, value);
    }
  },
  mounted: function mounted(el, _ref14, _ref15) {
    var value = _ref14.value;
    var transition = _ref15.transition;

    if (transition && value) {
      transition.enter(el);
    }
  },
  updated: function updated(el, _ref16, _ref17) {
    var value = _ref16.value,
        oldValue = _ref16.oldValue;
    var transition = _ref17.transition;
    if (!value === !oldValue) return;

    if (transition) {
      if (value) {
        transition.beforeEnter(el);
        setDisplay(el, true);
        transition.enter(el);
      } else {
        transition.leave(el, function () {
          setDisplay(el, false);
        });
      }
    } else {
      setDisplay(el, value);
    }
  },
  beforeUnmount: function beforeUnmount(el, _ref18) {
    var value = _ref18.value;
    setDisplay(el, value);
  }
};

function setDisplay(el, value) {
  el.style.display = value ? el._vod : 'none';
}

var rendererOptions = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({
  patchProp: patchProp,
  forcePatchProp: forcePatchProp
}, nodeOps); // lazy create the renderer - this makes core renderer logic tree-shakable
// in case the user only imports reactivity utilities from Vue.

var renderer;
var enabledHydration = false;

function ensureRenderer() {
  return renderer || (renderer = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createRenderer)(rendererOptions));
}

function ensureHydrationRenderer() {
  renderer = enabledHydration ? renderer : (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createHydrationRenderer)(rendererOptions);
  enabledHydration = true;
  return renderer;
} // use explicit type casts here to avoid import() calls in rolled-up d.ts


var render = function render() {
  var _ensureRenderer;

  (_ensureRenderer = ensureRenderer()).render.apply(_ensureRenderer, arguments);
};

var hydrate = function hydrate() {
  var _ensureHydrationRende;

  (_ensureHydrationRende = ensureHydrationRenderer()).hydrate.apply(_ensureHydrationRende, arguments);
};

var createApp = function createApp() {
  var _ensureRenderer2;

  var app = (_ensureRenderer2 = ensureRenderer()).createApp.apply(_ensureRenderer2, arguments);

  if (true) {
    injectNativeTagCheck(app);
    injectCompilerOptionsCheck(app);
  }

  var mount = app.mount;

  app.mount = function (containerOrSelector) {
    var container = normalizeContainer(containerOrSelector);
    if (!container) return;
    var component = app._component;

    if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(component) && !component.render && !component.template) {
      // __UNSAFE__
      // Reason: potential execution of JS expressions in in-DOM template.
      // The user must make sure the in-DOM template is trusted. If it's
      // rendered by the server, the template should not contain any user data.
      component.template = container.innerHTML;
    } // clear content before mounting


    container.innerHTML = '';
    var proxy = mount(container, false, container instanceof SVGElement);

    if (container instanceof Element) {
      container.removeAttribute('v-cloak');
      container.setAttribute('data-v-app', '');
    }

    return proxy;
  };

  return app;
};

var createSSRApp = function createSSRApp() {
  var _ensureHydrationRende2;

  var app = (_ensureHydrationRende2 = ensureHydrationRenderer()).createApp.apply(_ensureHydrationRende2, arguments);

  if (true) {
    injectNativeTagCheck(app);
    injectCompilerOptionsCheck(app);
  }

  var mount = app.mount;

  app.mount = function (containerOrSelector) {
    var container = normalizeContainer(containerOrSelector);

    if (container) {
      return mount(container, true, container instanceof SVGElement);
    }
  };

  return app;
};

function injectNativeTagCheck(app) {
  // Inject `isNativeTag`
  // this is used for component name validation (dev only)
  Object.defineProperty(app.config, 'isNativeTag', {
    value: function value(tag) {
      return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isHTMLTag)(tag) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isSVGTag)(tag);
    },
    writable: false
  });
} // dev only


function injectCompilerOptionsCheck(app) {
  if ((0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.isRuntimeOnly)()) {
    var isCustomElement = app.config.isCustomElement;
    Object.defineProperty(app.config, 'isCustomElement', {
      get: function get() {
        return isCustomElement;
      },
      set: function set() {
        (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)("The `isCustomElement` config option is deprecated. Use " + "`compilerOptions.isCustomElement` instead.");
      }
    });
    var compilerOptions = app.config.compilerOptions;
    var msg = "The `compilerOptions` config option is only respected when using " + "a build of Vue.js that includes the runtime compiler (aka \"full build\"). " + "Since you are using the runtime-only build, `compilerOptions` " + "must be passed to `@vue/compiler-dom` in the build setup instead.\n" + "- For vue-loader: pass it via vue-loader's `compilerOptions` loader option.\n" + "- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n" + "- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom";
    Object.defineProperty(app.config, 'compilerOptions', {
      get: function get() {
        (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)(msg);
        return compilerOptions;
      },
      set: function set() {
        (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)(msg);
      }
    });
  }
}

function normalizeContainer(container) {
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(container)) {
    var res = document.querySelector(container);

    if ( true && !res) {
      (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)("Failed to mount app: mount target selector \"".concat(container, "\" returned null."));
    }

    return res;
  }

  if ( true && container instanceof window.ShadowRoot && container.mode === 'closed') {
    (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)("mounting on a ShadowRoot with `{mode: \"closed\"}` may lead to unpredictable bugs");
  }

  return container;
}



/***/ }),

/***/ "./node_modules/@vue/shared/dist/shared.esm-bundler.js":
/*!*************************************************************!*\
  !*** ./node_modules/@vue/shared/dist/shared.esm-bundler.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EMPTY_ARR": () => (/* binding */ EMPTY_ARR),
/* harmony export */   "EMPTY_OBJ": () => (/* binding */ EMPTY_OBJ),
/* harmony export */   "NO": () => (/* binding */ NO),
/* harmony export */   "NOOP": () => (/* binding */ NOOP),
/* harmony export */   "PatchFlagNames": () => (/* binding */ PatchFlagNames),
/* harmony export */   "babelParserDefaultPlugins": () => (/* binding */ babelParserDefaultPlugins),
/* harmony export */   "camelize": () => (/* binding */ camelize),
/* harmony export */   "capitalize": () => (/* binding */ capitalize),
/* harmony export */   "def": () => (/* binding */ def),
/* harmony export */   "escapeHtml": () => (/* binding */ escapeHtml),
/* harmony export */   "escapeHtmlComment": () => (/* binding */ escapeHtmlComment),
/* harmony export */   "extend": () => (/* binding */ extend),
/* harmony export */   "generateCodeFrame": () => (/* binding */ generateCodeFrame),
/* harmony export */   "getGlobalThis": () => (/* binding */ getGlobalThis),
/* harmony export */   "hasChanged": () => (/* binding */ hasChanged),
/* harmony export */   "hasOwn": () => (/* binding */ hasOwn),
/* harmony export */   "hyphenate": () => (/* binding */ hyphenate),
/* harmony export */   "invokeArrayFns": () => (/* binding */ invokeArrayFns),
/* harmony export */   "isArray": () => (/* binding */ isArray),
/* harmony export */   "isBooleanAttr": () => (/* binding */ isBooleanAttr),
/* harmony export */   "isDate": () => (/* binding */ isDate),
/* harmony export */   "isFunction": () => (/* binding */ isFunction),
/* harmony export */   "isGloballyWhitelisted": () => (/* binding */ isGloballyWhitelisted),
/* harmony export */   "isHTMLTag": () => (/* binding */ isHTMLTag),
/* harmony export */   "isIntegerKey": () => (/* binding */ isIntegerKey),
/* harmony export */   "isKnownAttr": () => (/* binding */ isKnownAttr),
/* harmony export */   "isMap": () => (/* binding */ isMap),
/* harmony export */   "isModelListener": () => (/* binding */ isModelListener),
/* harmony export */   "isNoUnitNumericStyleProp": () => (/* binding */ isNoUnitNumericStyleProp),
/* harmony export */   "isObject": () => (/* binding */ isObject),
/* harmony export */   "isOn": () => (/* binding */ isOn),
/* harmony export */   "isPlainObject": () => (/* binding */ isPlainObject),
/* harmony export */   "isPromise": () => (/* binding */ isPromise),
/* harmony export */   "isReservedProp": () => (/* binding */ isReservedProp),
/* harmony export */   "isSSRSafeAttrName": () => (/* binding */ isSSRSafeAttrName),
/* harmony export */   "isSVGTag": () => (/* binding */ isSVGTag),
/* harmony export */   "isSet": () => (/* binding */ isSet),
/* harmony export */   "isSpecialBooleanAttr": () => (/* binding */ isSpecialBooleanAttr),
/* harmony export */   "isString": () => (/* binding */ isString),
/* harmony export */   "isSymbol": () => (/* binding */ isSymbol),
/* harmony export */   "isVoidTag": () => (/* binding */ isVoidTag),
/* harmony export */   "looseEqual": () => (/* binding */ looseEqual),
/* harmony export */   "looseIndexOf": () => (/* binding */ looseIndexOf),
/* harmony export */   "makeMap": () => (/* binding */ makeMap),
/* harmony export */   "normalizeClass": () => (/* binding */ normalizeClass),
/* harmony export */   "normalizeStyle": () => (/* binding */ normalizeStyle),
/* harmony export */   "objectToString": () => (/* binding */ objectToString),
/* harmony export */   "parseStringStyle": () => (/* binding */ parseStringStyle),
/* harmony export */   "propsToAttrMap": () => (/* binding */ propsToAttrMap),
/* harmony export */   "remove": () => (/* binding */ remove),
/* harmony export */   "slotFlagsText": () => (/* binding */ slotFlagsText),
/* harmony export */   "stringifyStyle": () => (/* binding */ stringifyStyle),
/* harmony export */   "toDisplayString": () => (/* binding */ toDisplayString),
/* harmony export */   "toHandlerKey": () => (/* binding */ toHandlerKey),
/* harmony export */   "toNumber": () => (/* binding */ toNumber),
/* harmony export */   "toRawType": () => (/* binding */ toRawType),
/* harmony export */   "toTypeString": () => (/* binding */ toTypeString)
/* harmony export */ });
var _PatchFlagNames, _slotFlagsText;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 * IMPORTANT: all calls of this function must be prefixed with
 * \/\*#\_\_PURE\_\_\*\/
 * So that rollup can tree-shake them if necessary.
 */
function makeMap(str, expectsLowerCase) {
  var map = Object.create(null);
  var list = str.split(',');

  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }

  return expectsLowerCase ? function (val) {
    return !!map[val.toLowerCase()];
  } : function (val) {
    return !!map[val];
  };
}
/**
 * dev only flag -> name mapping
 */


var PatchFlagNames = (_PatchFlagNames = {}, _defineProperty(_PatchFlagNames, 1
/* TEXT */
, "TEXT"), _defineProperty(_PatchFlagNames, 2
/* CLASS */
, "CLASS"), _defineProperty(_PatchFlagNames, 4
/* STYLE */
, "STYLE"), _defineProperty(_PatchFlagNames, 8
/* PROPS */
, "PROPS"), _defineProperty(_PatchFlagNames, 16
/* FULL_PROPS */
, "FULL_PROPS"), _defineProperty(_PatchFlagNames, 32
/* HYDRATE_EVENTS */
, "HYDRATE_EVENTS"), _defineProperty(_PatchFlagNames, 64
/* STABLE_FRAGMENT */
, "STABLE_FRAGMENT"), _defineProperty(_PatchFlagNames, 128
/* KEYED_FRAGMENT */
, "KEYED_FRAGMENT"), _defineProperty(_PatchFlagNames, 256
/* UNKEYED_FRAGMENT */
, "UNKEYED_FRAGMENT"), _defineProperty(_PatchFlagNames, 512
/* NEED_PATCH */
, "NEED_PATCH"), _defineProperty(_PatchFlagNames, 1024
/* DYNAMIC_SLOTS */
, "DYNAMIC_SLOTS"), _defineProperty(_PatchFlagNames, 2048
/* DEV_ROOT_FRAGMENT */
, "DEV_ROOT_FRAGMENT"), _defineProperty(_PatchFlagNames, -1
/* HOISTED */
, "HOISTED"), _defineProperty(_PatchFlagNames, -2
/* BAIL */
, "BAIL"), _PatchFlagNames);
/**
 * Dev only
 */

var slotFlagsText = (_slotFlagsText = {}, _defineProperty(_slotFlagsText, 1
/* STABLE */
, 'STABLE'), _defineProperty(_slotFlagsText, 2
/* DYNAMIC */
, 'DYNAMIC'), _defineProperty(_slotFlagsText, 3
/* FORWARDED */
, 'FORWARDED'), _slotFlagsText);
var GLOBALS_WHITE_LISTED = 'Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,' + 'decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,' + 'Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt';
var isGloballyWhitelisted = /*#__PURE__*/makeMap(GLOBALS_WHITE_LISTED);
var range = 2;

function generateCodeFrame(source) {
  var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : source.length;
  var lines = source.split(/\r?\n/);
  var count = 0;
  var res = [];

  for (var i = 0; i < lines.length; i++) {
    count += lines[i].length + 1;

    if (count >= start) {
      for (var j = i - range; j <= i + range || end > count; j++) {
        if (j < 0 || j >= lines.length) continue;
        var line = j + 1;
        res.push("".concat(line).concat(' '.repeat(Math.max(3 - String(line).length, 0)), "|  ").concat(lines[j]));
        var lineLength = lines[j].length;

        if (j === i) {
          // push underline
          var pad = start - (count - lineLength) + 1;
          var length = Math.max(1, end > count ? lineLength - pad : end - start);
          res.push("   |  " + ' '.repeat(pad) + '^'.repeat(length));
        } else if (j > i) {
          if (end > count) {
            var _length = Math.max(Math.min(end - count, lineLength), 1);

            res.push("   |  " + '^'.repeat(_length));
          }

          count += lineLength + 1;
        }
      }

      break;
    }
  }

  return res.join('\n');
}
/**
 * On the client we only need to offer special cases for boolean attributes that
 * have different names from their corresponding dom properties:
 * - itemscope -> N/A
 * - allowfullscreen -> allowFullscreen
 * - formnovalidate -> formNoValidate
 * - ismap -> isMap
 * - nomodule -> noModule
 * - novalidate -> noValidate
 * - readonly -> readOnly
 */


var specialBooleanAttrs = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly";
var isSpecialBooleanAttr = /*#__PURE__*/makeMap(specialBooleanAttrs);
/**
 * The full list is needed during SSR to produce the correct initial markup.
 */

var isBooleanAttr = /*#__PURE__*/makeMap(specialBooleanAttrs + ",async,autofocus,autoplay,controls,default,defer,disabled,hidden," + "loop,open,required,reversed,scoped,seamless," + "checked,muted,multiple,selected");
var unsafeAttrCharRE = /[>/="'\u0009\u000a\u000c\u0020]/;
var attrValidationCache = {};

function isSSRSafeAttrName(name) {
  if (attrValidationCache.hasOwnProperty(name)) {
    return attrValidationCache[name];
  }

  var isUnsafe = unsafeAttrCharRE.test(name);

  if (isUnsafe) {
    console.error("unsafe attribute name: ".concat(name));
  }

  return attrValidationCache[name] = !isUnsafe;
}

var propsToAttrMap = {
  acceptCharset: 'accept-charset',
  className: 'class',
  htmlFor: 'for',
  httpEquiv: 'http-equiv'
};
/**
 * CSS properties that accept plain numbers
 */

var isNoUnitNumericStyleProp = /*#__PURE__*/makeMap("animation-iteration-count,border-image-outset,border-image-slice," + "border-image-width,box-flex,box-flex-group,box-ordinal-group,column-count," + "columns,flex,flex-grow,flex-positive,flex-shrink,flex-negative,flex-order," + "grid-row,grid-row-end,grid-row-span,grid-row-start,grid-column," + "grid-column-end,grid-column-span,grid-column-start,font-weight,line-clamp," + "line-height,opacity,order,orphans,tab-size,widows,z-index,zoom," + // SVG
"fill-opacity,flood-opacity,stop-opacity,stroke-dasharray,stroke-dashoffset," + "stroke-miterlimit,stroke-opacity,stroke-width");
/**
 * Known attributes, this is used for stringification of runtime static nodes
 * so that we don't stringify bindings that cannot be set from HTML.
 * Don't also forget to allow `data-*` and `aria-*`!
 * Generated from https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes
 */

var isKnownAttr = /*#__PURE__*/makeMap("accept,accept-charset,accesskey,action,align,allow,alt,async," + "autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor," + "border,buffered,capture,challenge,charset,checked,cite,class,code," + "codebase,color,cols,colspan,content,contenteditable,contextmenu,controls," + "coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname," + "disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form," + "formaction,formenctype,formmethod,formnovalidate,formtarget,headers," + "height,hidden,high,href,hreflang,http-equiv,icon,id,importance,integrity," + "ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low," + "manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate," + "open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly," + "referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped," + "selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset," + "start,step,style,summary,tabindex,target,title,translate,type,usemap," + "value,width,wrap");

function normalizeStyle(value) {
  if (isArray(value)) {
    var res = {};

    for (var i = 0; i < value.length; i++) {
      var item = value[i];
      var normalized = normalizeStyle(isString(item) ? parseStringStyle(item) : item);

      if (normalized) {
        for (var key in normalized) {
          res[key] = normalized[key];
        }
      }
    }

    return res;
  } else if (isObject(value)) {
    return value;
  }
}

var listDelimiterRE = /;(?![^(]*\))/g;
var propertyDelimiterRE = /:(.+)/;

function parseStringStyle(cssText) {
  var ret = {};
  cssText.split(listDelimiterRE).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiterRE);
      tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return ret;
}

function stringifyStyle(styles) {
  var ret = '';

  if (!styles) {
    return ret;
  }

  for (var key in styles) {
    var value = styles[key];
    var normalizedKey = key.startsWith("--") ? key : hyphenate(key);

    if (isString(value) || typeof value === 'number' && isNoUnitNumericStyleProp(normalizedKey)) {
      // only render valid values
      ret += "".concat(normalizedKey, ":").concat(value, ";");
    }
  }

  return ret;
}

function normalizeClass(value) {
  var res = '';

  if (isString(value)) {
    res = value;
  } else if (isArray(value)) {
    for (var i = 0; i < value.length; i++) {
      var normalized = normalizeClass(value[i]);

      if (normalized) {
        res += normalized + ' ';
      }
    }
  } else if (isObject(value)) {
    for (var name in value) {
      if (value[name]) {
        res += name + ' ';
      }
    }
  }

  return res.trim();
} // These tag configs are shared between compiler-dom and runtime-dom, so they
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element


var HTML_TAGS = 'html,body,base,head,link,meta,style,title,address,article,aside,footer,' + 'header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,' + 'figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,' + 'data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,' + 'time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,' + 'canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,' + 'th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,' + 'option,output,progress,select,textarea,details,dialog,menu,' + 'summary,template,blockquote,iframe,tfoot'; // https://developer.mozilla.org/en-US/docs/Web/SVG/Element

var SVG_TAGS = 'svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,' + 'defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,' + 'feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,' + 'feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,' + 'feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,' + 'fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,' + 'foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,' + 'mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,' + 'polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,' + 'text,textPath,title,tspan,unknown,use,view';
var VOID_TAGS = 'area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr';
var isHTMLTag = /*#__PURE__*/makeMap(HTML_TAGS);
var isSVGTag = /*#__PURE__*/makeMap(SVG_TAGS);
var isVoidTag = /*#__PURE__*/makeMap(VOID_TAGS);
var escapeRE = /["'&<>]/;

function escapeHtml(string) {
  var str = '' + string;
  var match = escapeRE.exec(str);

  if (!match) {
    return str;
  }

  var html = '';
  var escaped;
  var index;
  var lastIndex = 0;

  for (index = match.index; index < str.length; index++) {
    switch (str.charCodeAt(index)) {
      case 34:
        // "
        escaped = '&quot;';
        break;

      case 38:
        // &
        escaped = '&amp;';
        break;

      case 39:
        // '
        escaped = '&#39;';
        break;

      case 60:
        // <
        escaped = '&lt;';
        break;

      case 62:
        // >
        escaped = '&gt;';
        break;

      default:
        continue;
    }

    if (lastIndex !== index) {
      html += str.substring(lastIndex, index);
    }

    lastIndex = index + 1;
    html += escaped;
  }

  return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
} // https://www.w3.org/TR/html52/syntax.html#comments


var commentStripRE = /^-?>|<!--|-->|--!>|<!-$/g;

function escapeHtmlComment(src) {
  return src.replace(commentStripRE, '');
}

function looseCompareArrays(a, b) {
  if (a.length !== b.length) return false;
  var equal = true;

  for (var i = 0; equal && i < a.length; i++) {
    equal = looseEqual(a[i], b[i]);
  }

  return equal;
}

function looseEqual(a, b) {
  if (a === b) return true;
  var aValidType = isDate(a);
  var bValidType = isDate(b);

  if (aValidType || bValidType) {
    return aValidType && bValidType ? a.getTime() === b.getTime() : false;
  }

  aValidType = isArray(a);
  bValidType = isArray(b);

  if (aValidType || bValidType) {
    return aValidType && bValidType ? looseCompareArrays(a, b) : false;
  }

  aValidType = isObject(a);
  bValidType = isObject(b);

  if (aValidType || bValidType) {
    /* istanbul ignore if: this if will probably never be called */
    if (!aValidType || !bValidType) {
      return false;
    }

    var aKeysCount = Object.keys(a).length;
    var bKeysCount = Object.keys(b).length;

    if (aKeysCount !== bKeysCount) {
      return false;
    }

    for (var key in a) {
      var aHasKey = a.hasOwnProperty(key);
      var bHasKey = b.hasOwnProperty(key);

      if (aHasKey && !bHasKey || !aHasKey && bHasKey || !looseEqual(a[key], b[key])) {
        return false;
      }
    }
  }

  return String(a) === String(b);
}

function looseIndexOf(arr, val) {
  return arr.findIndex(function (item) {
    return looseEqual(item, val);
  });
}
/**
 * For converting {{ interpolation }} values to displayed strings.
 * @private
 */


var toDisplayString = function toDisplayString(val) {
  return val == null ? '' : isObject(val) ? JSON.stringify(val, replacer, 2) : String(val);
};

var replacer = function replacer(_key, val) {
  if (isMap(val)) {
    return _defineProperty({}, "Map(".concat(val.size, ")"), _toConsumableArray(val.entries()).reduce(function (entries, _ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          key = _ref2[0],
          val = _ref2[1];

      entries["".concat(key, " =>")] = val;
      return entries;
    }, {}));
  } else if (isSet(val)) {
    return _defineProperty({}, "Set(".concat(val.size, ")"), _toConsumableArray(val.values()));
  } else if (isObject(val) && !isArray(val) && !isPlainObject(val)) {
    return String(val);
  }

  return val;
};
/**
 * List of @babel/parser plugins that are used for template expression
 * transforms and SFC script transforms. By default we enable proposals slated
 * for ES2020. This will need to be updated as the spec moves forward.
 * Full list at https://babeljs.io/docs/en/next/babel-parser#plugins
 */


var babelParserDefaultPlugins = ['bigInt', 'optionalChaining', 'nullishCoalescingOperator'];
var EMPTY_OBJ =  true ? Object.freeze({}) : 0;
var EMPTY_ARR =  true ? Object.freeze([]) : 0;

var NOOP = function NOOP() {};
/**
 * Always return false.
 */


var NO = function NO() {
  return false;
};

var onRE = /^on[^a-z]/;

var isOn = function isOn(key) {
  return onRE.test(key);
};

var isModelListener = function isModelListener(key) {
  return key.startsWith('onUpdate:');
};

var extend = Object.assign;

var remove = function remove(arr, el) {
  var i = arr.indexOf(el);

  if (i > -1) {
    arr.splice(i, 1);
  }
};

var hasOwnProperty = Object.prototype.hasOwnProperty;

var hasOwn = function hasOwn(val, key) {
  return hasOwnProperty.call(val, key);
};

var isArray = Array.isArray;

var isMap = function isMap(val) {
  return toTypeString(val) === '[object Map]';
};

var isSet = function isSet(val) {
  return toTypeString(val) === '[object Set]';
};

var isDate = function isDate(val) {
  return val instanceof Date;
};

var isFunction = function isFunction(val) {
  return typeof val === 'function';
};

var isString = function isString(val) {
  return typeof val === 'string';
};

var isSymbol = function isSymbol(val) {
  return _typeof(val) === 'symbol';
};

var isObject = function isObject(val) {
  return val !== null && _typeof(val) === 'object';
};

var isPromise = function isPromise(val) {
  return isObject(val) && isFunction(val.then) && isFunction(val["catch"]);
};

var objectToString = Object.prototype.toString;

var toTypeString = function toTypeString(value) {
  return objectToString.call(value);
};

var toRawType = function toRawType(value) {
  // extract "RawType" from strings like "[object RawType]"
  return toTypeString(value).slice(8, -1);
};

var isPlainObject = function isPlainObject(val) {
  return toTypeString(val) === '[object Object]';
};

var isIntegerKey = function isIntegerKey(key) {
  return isString(key) && key !== 'NaN' && key[0] !== '-' && '' + parseInt(key, 10) === key;
};

var isReservedProp = /*#__PURE__*/makeMap( // the leading comma is intentional so empty string "" is also included
',key,ref,' + 'onVnodeBeforeMount,onVnodeMounted,' + 'onVnodeBeforeUpdate,onVnodeUpdated,' + 'onVnodeBeforeUnmount,onVnodeUnmounted');

var cacheStringFunction = function cacheStringFunction(fn) {
  var cache = Object.create(null);
  return function (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
};

var camelizeRE = /-(\w)/g;
/**
 * @private
 */

var camelize = cacheStringFunction(function (str) {
  return str.replace(camelizeRE, function (_, c) {
    return c ? c.toUpperCase() : '';
  });
});
var hyphenateRE = /\B([A-Z])/g;
/**
 * @private
 */

var hyphenate = cacheStringFunction(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase();
});
/**
 * @private
 */

var capitalize = cacheStringFunction(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
});
/**
 * @private
 */

var toHandlerKey = cacheStringFunction(function (str) {
  return str ? "on".concat(capitalize(str)) : "";
}); // compare whether a value has changed, accounting for NaN.

var hasChanged = function hasChanged(value, oldValue) {
  return value !== oldValue && (value === value || oldValue === oldValue);
};

var invokeArrayFns = function invokeArrayFns(fns, arg) {
  for (var i = 0; i < fns.length; i++) {
    fns[i](arg);
  }
};

var def = function def(obj, key, value) {
  Object.defineProperty(obj, key, {
    configurable: true,
    enumerable: false,
    value: value
  });
};

var toNumber = function toNumber(val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n;
};

var _globalThis;

var getGlobalThis = function getGlobalThis() {
  return _globalThis || (_globalThis = typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof __webpack_require__.g !== 'undefined' ? __webpack_require__.g : {});
};



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names

module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";


function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url["default"] : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[11].use[0]!./src/vue/App.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[11].use[0]!./src/vue/App.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _HelloWorld_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HelloWorld.vue */ "./src/vue/HelloWorld.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    // HelloWorld: HelloWorld,
    HelloWorld: _HelloWorld_vue__WEBPACK_IMPORTED_MODULE_0__.default
  },
  data: function data() {
    return {
      title: 'Hello world',
      message: '哈哈哈'
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[11].use[0]!./src/vue/HelloWorld.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[11].use[0]!./src/vue/HelloWorld.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {};
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[11].use[0]!./src/vue/App.vue?vue&type=template&id=5e019a2f":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[11].use[0]!./src/vue/App.vue?vue&type=template&id=5e019a2f ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h2", null, "我是Vue渲染出來的", -1
/* HOISTED */
);

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h2", null, "title", -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_hello_world = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("hello-world");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [_hoisted_1, _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_hello_world)], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[11].use[0]!./src/vue/HelloWorld.vue?vue&type=template&id=7d22bc7c":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[11].use[0]!./src/vue/HelloWorld.vue?vue&type=template&id=7d22bc7c ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("h2", null, "我是HelloWorld");
}

/***/ }),

/***/ "./node_modules/vue/dist/vue.esm-bundler.js":
/*!**************************************************!*\
  !*** ./node_modules/vue/dist/vue.esm-bundler.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseTransition": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.BaseTransition),
/* harmony export */   "Comment": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.Comment),
/* harmony export */   "Fragment": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.Fragment),
/* harmony export */   "KeepAlive": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.KeepAlive),
/* harmony export */   "Static": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.Static),
/* harmony export */   "Suspense": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.Suspense),
/* harmony export */   "Teleport": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.Teleport),
/* harmony export */   "Text": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.Text),
/* harmony export */   "Transition": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.Transition),
/* harmony export */   "TransitionGroup": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.TransitionGroup),
/* harmony export */   "callWithAsyncErrorHandling": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.callWithAsyncErrorHandling),
/* harmony export */   "callWithErrorHandling": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.callWithErrorHandling),
/* harmony export */   "camelize": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.camelize),
/* harmony export */   "capitalize": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.capitalize),
/* harmony export */   "cloneVNode": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.cloneVNode),
/* harmony export */   "compatUtils": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.compatUtils),
/* harmony export */   "computed": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.computed),
/* harmony export */   "createApp": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createApp),
/* harmony export */   "createBlock": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createBlock),
/* harmony export */   "createCommentVNode": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode),
/* harmony export */   "createHydrationRenderer": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createHydrationRenderer),
/* harmony export */   "createRenderer": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createRenderer),
/* harmony export */   "createSSRApp": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createSSRApp),
/* harmony export */   "createSlots": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createSlots),
/* harmony export */   "createStaticVNode": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode),
/* harmony export */   "createTextVNode": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createTextVNode),
/* harmony export */   "createVNode": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createVNode),
/* harmony export */   "customRef": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.customRef),
/* harmony export */   "defineAsyncComponent": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent),
/* harmony export */   "defineComponent": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.defineComponent),
/* harmony export */   "defineEmit": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.defineEmit),
/* harmony export */   "defineEmits": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.defineEmits),
/* harmony export */   "defineExpose": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.defineExpose),
/* harmony export */   "defineProps": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.defineProps),
/* harmony export */   "devtools": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.devtools),
/* harmony export */   "getCurrentInstance": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance),
/* harmony export */   "getTransitionRawChildren": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.getTransitionRawChildren),
/* harmony export */   "h": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.h),
/* harmony export */   "handleError": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.handleError),
/* harmony export */   "hydrate": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.hydrate),
/* harmony export */   "initCustomFormatter": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.initCustomFormatter),
/* harmony export */   "inject": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.inject),
/* harmony export */   "isProxy": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.isProxy),
/* harmony export */   "isReactive": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.isReactive),
/* harmony export */   "isReadonly": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.isReadonly),
/* harmony export */   "isRef": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.isRef),
/* harmony export */   "isRuntimeOnly": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.isRuntimeOnly),
/* harmony export */   "isVNode": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.isVNode),
/* harmony export */   "markRaw": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.markRaw),
/* harmony export */   "mergeDefaults": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.mergeDefaults),
/* harmony export */   "mergeProps": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.mergeProps),
/* harmony export */   "nextTick": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.nextTick),
/* harmony export */   "onActivated": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onActivated),
/* harmony export */   "onBeforeMount": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onBeforeMount),
/* harmony export */   "onBeforeUnmount": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onBeforeUnmount),
/* harmony export */   "onBeforeUpdate": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onBeforeUpdate),
/* harmony export */   "onDeactivated": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onDeactivated),
/* harmony export */   "onErrorCaptured": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onErrorCaptured),
/* harmony export */   "onMounted": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onMounted),
/* harmony export */   "onRenderTracked": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onRenderTracked),
/* harmony export */   "onRenderTriggered": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onRenderTriggered),
/* harmony export */   "onServerPrefetch": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onServerPrefetch),
/* harmony export */   "onUnmounted": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onUnmounted),
/* harmony export */   "onUpdated": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onUpdated),
/* harmony export */   "openBlock": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.openBlock),
/* harmony export */   "popScopeId": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.popScopeId),
/* harmony export */   "provide": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.provide),
/* harmony export */   "proxyRefs": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.proxyRefs),
/* harmony export */   "pushScopeId": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.pushScopeId),
/* harmony export */   "queuePostFlushCb": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.queuePostFlushCb),
/* harmony export */   "reactive": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.reactive),
/* harmony export */   "readonly": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.readonly),
/* harmony export */   "ref": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.ref),
/* harmony export */   "registerRuntimeCompiler": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.registerRuntimeCompiler),
/* harmony export */   "render": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "renderList": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.renderList),
/* harmony export */   "renderSlot": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.renderSlot),
/* harmony export */   "resolveComponent": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.resolveComponent),
/* harmony export */   "resolveDirective": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.resolveDirective),
/* harmony export */   "resolveDynamicComponent": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent),
/* harmony export */   "resolveFilter": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.resolveFilter),
/* harmony export */   "resolveTransitionHooks": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.resolveTransitionHooks),
/* harmony export */   "setBlockTracking": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.setBlockTracking),
/* harmony export */   "setDevtoolsHook": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.setDevtoolsHook),
/* harmony export */   "setTransitionHooks": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.setTransitionHooks),
/* harmony export */   "shallowReactive": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.shallowReactive),
/* harmony export */   "shallowReadonly": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.shallowReadonly),
/* harmony export */   "shallowRef": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.shallowRef),
/* harmony export */   "ssrContextKey": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.ssrContextKey),
/* harmony export */   "ssrUtils": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.ssrUtils),
/* harmony export */   "toDisplayString": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.toDisplayString),
/* harmony export */   "toHandlerKey": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.toHandlerKey),
/* harmony export */   "toHandlers": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.toHandlers),
/* harmony export */   "toRaw": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.toRaw),
/* harmony export */   "toRef": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.toRef),
/* harmony export */   "toRefs": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.toRefs),
/* harmony export */   "transformVNodeArgs": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.transformVNodeArgs),
/* harmony export */   "triggerRef": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.triggerRef),
/* harmony export */   "unref": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.unref),
/* harmony export */   "useAttrs": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.useAttrs),
/* harmony export */   "useContext": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.useContext),
/* harmony export */   "useCssModule": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.useCssModule),
/* harmony export */   "useCssVars": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.useCssVars),
/* harmony export */   "useSSRContext": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.useSSRContext),
/* harmony export */   "useSlots": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.useSlots),
/* harmony export */   "useTransitionState": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.useTransitionState),
/* harmony export */   "vModelCheckbox": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox),
/* harmony export */   "vModelDynamic": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.vModelDynamic),
/* harmony export */   "vModelRadio": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.vModelRadio),
/* harmony export */   "vModelSelect": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.vModelSelect),
/* harmony export */   "vModelText": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.vModelText),
/* harmony export */   "vShow": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.vShow),
/* harmony export */   "version": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.version),
/* harmony export */   "warn": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.warn),
/* harmony export */   "watch": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.watch),
/* harmony export */   "watchEffect": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.watchEffect),
/* harmony export */   "withAsyncContext": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.withAsyncContext),
/* harmony export */   "withCtx": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.withCtx),
/* harmony export */   "withDefaults": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.withDefaults),
/* harmony export */   "withDirectives": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.withDirectives),
/* harmony export */   "withKeys": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.withKeys),
/* harmony export */   "withModifiers": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.withModifiers),
/* harmony export */   "withScopeId": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.withScopeId),
/* harmony export */   "compile": () => (/* binding */ compileToFunction)
/* harmony export */ });
/* harmony import */ var _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/runtime-dom */ "./node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js");
/* harmony import */ var _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vue/runtime-dom */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");
/* harmony import */ var _vue_compiler_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vue/compiler-dom */ "./node_modules/@vue/compiler-dom/dist/compiler-dom.esm-bundler.js");
/* harmony import */ var _vue_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/shared */ "./node_modules/@vue/shared/dist/shared.esm-bundler.js");






function initDev() {
  {
    (0,_vue_runtime_dom__WEBPACK_IMPORTED_MODULE_2__.initCustomFormatter)();
  }
} // This entry is the "full-build" that includes both the runtime


if (true) {
  initDev();
}

var compileCache = Object.create(null);

function compileToFunction(template, options) {
  if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(template)) {
    if (template.nodeType) {
      template = template.innerHTML;
    } else {
       true && (0,_vue_runtime_dom__WEBPACK_IMPORTED_MODULE_2__.warn)("invalid template option: ", template);
      return _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP;
    }
  }

  var key = template;
  var cached = compileCache[key];

  if (cached) {
    return cached;
  }

  if (template[0] === '#') {
    var el = document.querySelector(template);

    if ( true && !el) {
      (0,_vue_runtime_dom__WEBPACK_IMPORTED_MODULE_2__.warn)("Template element not found or is empty: ".concat(template));
    } // __UNSAFE__
    // Reason: potential execution of JS expressions in in-DOM template.
    // The user must make sure the in-DOM template is trusted. If it's rendered
    // by the server, the template should not contain any user data.


    template = el ? el.innerHTML : "";
  }

  var _compile = (0,_vue_compiler_dom__WEBPACK_IMPORTED_MODULE_3__.compile)(template, (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({
    hoistStatic: true,
    onError:  true ? onError : 0,
    onWarn:  true ? function (e) {
      return onError(e, true);
    } : 0
  }, options)),
      code = _compile.code;

  function onError(err) {
    var asWarning = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var message = asWarning ? err.message : "Template compilation error: ".concat(err.message);
    var codeFrame = err.loc && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.generateCodeFrame)(template, err.loc.start.offset, err.loc.end.offset);
    (0,_vue_runtime_dom__WEBPACK_IMPORTED_MODULE_2__.warn)(codeFrame ? "".concat(message, "\n").concat(codeFrame) : message);
  } // The wildcard import results in a huge object with every export
  // with keys that cannot be mangled, and can be quite heavy size-wise.
  // In the global build we know `Vue` is available globally so we can avoid
  // the wildcard object.


  var render = new Function('Vue', code)(_vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__);
  render._rc = true;
  return compileCache[key] = render;
}

(0,_vue_runtime_dom__WEBPACK_IMPORTED_MODULE_2__.registerRuntimeCompiler)(compileToFunction);


/***/ }),

/***/ "./node_modules/vue/dist/vue.runtime.esm-bundler.js":
/*!**********************************************************!*\
  !*** ./node_modules/vue/dist/vue.runtime.esm-bundler.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseTransition": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.BaseTransition),
/* harmony export */   "Comment": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.Comment),
/* harmony export */   "Fragment": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.Fragment),
/* harmony export */   "KeepAlive": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.KeepAlive),
/* harmony export */   "Static": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.Static),
/* harmony export */   "Suspense": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.Suspense),
/* harmony export */   "Teleport": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.Teleport),
/* harmony export */   "Text": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.Text),
/* harmony export */   "Transition": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.Transition),
/* harmony export */   "TransitionGroup": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.TransitionGroup),
/* harmony export */   "callWithAsyncErrorHandling": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.callWithAsyncErrorHandling),
/* harmony export */   "callWithErrorHandling": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.callWithErrorHandling),
/* harmony export */   "camelize": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.camelize),
/* harmony export */   "capitalize": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.capitalize),
/* harmony export */   "cloneVNode": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.cloneVNode),
/* harmony export */   "compatUtils": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.compatUtils),
/* harmony export */   "computed": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.computed),
/* harmony export */   "createApp": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createApp),
/* harmony export */   "createBlock": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createBlock),
/* harmony export */   "createCommentVNode": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode),
/* harmony export */   "createHydrationRenderer": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createHydrationRenderer),
/* harmony export */   "createRenderer": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createRenderer),
/* harmony export */   "createSSRApp": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createSSRApp),
/* harmony export */   "createSlots": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createSlots),
/* harmony export */   "createStaticVNode": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode),
/* harmony export */   "createTextVNode": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createTextVNode),
/* harmony export */   "createVNode": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createVNode),
/* harmony export */   "customRef": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.customRef),
/* harmony export */   "defineAsyncComponent": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent),
/* harmony export */   "defineComponent": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.defineComponent),
/* harmony export */   "defineEmit": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.defineEmit),
/* harmony export */   "defineEmits": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.defineEmits),
/* harmony export */   "defineExpose": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.defineExpose),
/* harmony export */   "defineProps": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.defineProps),
/* harmony export */   "devtools": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.devtools),
/* harmony export */   "getCurrentInstance": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance),
/* harmony export */   "getTransitionRawChildren": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.getTransitionRawChildren),
/* harmony export */   "h": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.h),
/* harmony export */   "handleError": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.handleError),
/* harmony export */   "hydrate": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.hydrate),
/* harmony export */   "initCustomFormatter": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.initCustomFormatter),
/* harmony export */   "inject": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.inject),
/* harmony export */   "isProxy": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.isProxy),
/* harmony export */   "isReactive": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.isReactive),
/* harmony export */   "isReadonly": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.isReadonly),
/* harmony export */   "isRef": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.isRef),
/* harmony export */   "isRuntimeOnly": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.isRuntimeOnly),
/* harmony export */   "isVNode": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.isVNode),
/* harmony export */   "markRaw": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.markRaw),
/* harmony export */   "mergeDefaults": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.mergeDefaults),
/* harmony export */   "mergeProps": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.mergeProps),
/* harmony export */   "nextTick": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.nextTick),
/* harmony export */   "onActivated": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onActivated),
/* harmony export */   "onBeforeMount": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onBeforeMount),
/* harmony export */   "onBeforeUnmount": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onBeforeUnmount),
/* harmony export */   "onBeforeUpdate": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onBeforeUpdate),
/* harmony export */   "onDeactivated": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onDeactivated),
/* harmony export */   "onErrorCaptured": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onErrorCaptured),
/* harmony export */   "onMounted": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onMounted),
/* harmony export */   "onRenderTracked": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onRenderTracked),
/* harmony export */   "onRenderTriggered": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onRenderTriggered),
/* harmony export */   "onServerPrefetch": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onServerPrefetch),
/* harmony export */   "onUnmounted": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onUnmounted),
/* harmony export */   "onUpdated": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onUpdated),
/* harmony export */   "openBlock": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.openBlock),
/* harmony export */   "popScopeId": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.popScopeId),
/* harmony export */   "provide": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.provide),
/* harmony export */   "proxyRefs": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.proxyRefs),
/* harmony export */   "pushScopeId": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.pushScopeId),
/* harmony export */   "queuePostFlushCb": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.queuePostFlushCb),
/* harmony export */   "reactive": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.reactive),
/* harmony export */   "readonly": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.readonly),
/* harmony export */   "ref": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.ref),
/* harmony export */   "registerRuntimeCompiler": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.registerRuntimeCompiler),
/* harmony export */   "render": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "renderList": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.renderList),
/* harmony export */   "renderSlot": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.renderSlot),
/* harmony export */   "resolveComponent": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.resolveComponent),
/* harmony export */   "resolveDirective": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.resolveDirective),
/* harmony export */   "resolveDynamicComponent": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent),
/* harmony export */   "resolveFilter": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.resolveFilter),
/* harmony export */   "resolveTransitionHooks": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.resolveTransitionHooks),
/* harmony export */   "setBlockTracking": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.setBlockTracking),
/* harmony export */   "setDevtoolsHook": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.setDevtoolsHook),
/* harmony export */   "setTransitionHooks": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.setTransitionHooks),
/* harmony export */   "shallowReactive": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.shallowReactive),
/* harmony export */   "shallowReadonly": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.shallowReadonly),
/* harmony export */   "shallowRef": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.shallowRef),
/* harmony export */   "ssrContextKey": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.ssrContextKey),
/* harmony export */   "ssrUtils": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.ssrUtils),
/* harmony export */   "toDisplayString": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.toDisplayString),
/* harmony export */   "toHandlerKey": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.toHandlerKey),
/* harmony export */   "toHandlers": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.toHandlers),
/* harmony export */   "toRaw": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.toRaw),
/* harmony export */   "toRef": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.toRef),
/* harmony export */   "toRefs": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.toRefs),
/* harmony export */   "transformVNodeArgs": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.transformVNodeArgs),
/* harmony export */   "triggerRef": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.triggerRef),
/* harmony export */   "unref": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.unref),
/* harmony export */   "useAttrs": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.useAttrs),
/* harmony export */   "useContext": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.useContext),
/* harmony export */   "useCssModule": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.useCssModule),
/* harmony export */   "useCssVars": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.useCssVars),
/* harmony export */   "useSSRContext": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.useSSRContext),
/* harmony export */   "useSlots": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.useSlots),
/* harmony export */   "useTransitionState": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.useTransitionState),
/* harmony export */   "vModelCheckbox": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox),
/* harmony export */   "vModelDynamic": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.vModelDynamic),
/* harmony export */   "vModelRadio": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.vModelRadio),
/* harmony export */   "vModelSelect": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.vModelSelect),
/* harmony export */   "vModelText": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.vModelText),
/* harmony export */   "vShow": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.vShow),
/* harmony export */   "version": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.version),
/* harmony export */   "warn": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.warn),
/* harmony export */   "watch": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.watch),
/* harmony export */   "watchEffect": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.watchEffect),
/* harmony export */   "withAsyncContext": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.withAsyncContext),
/* harmony export */   "withCtx": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.withCtx),
/* harmony export */   "withDefaults": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.withDefaults),
/* harmony export */   "withDirectives": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.withDirectives),
/* harmony export */   "withKeys": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.withKeys),
/* harmony export */   "withModifiers": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.withModifiers),
/* harmony export */   "withScopeId": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.withScopeId),
/* harmony export */   "compile": () => (/* binding */ compile)
/* harmony export */ });
/* harmony import */ var _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/runtime-dom */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");
/* harmony import */ var _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/runtime-dom */ "./node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js");



function initDev() {
  {
    (0,_vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.initCustomFormatter)();
  }
} // This entry exports the runtime only, and is built as


if (true) {
  initDev();
}

var compile = function compile() {
  if (true) {
    (0,_vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.warn)("Runtime compilation is not supported in this build of Vue." + " Configure your bundler to alias \"vue\" to \"vue/dist/vue.esm-bundler.js\"."
    /* should not happen */
    );
  }
};



/***/ }),

/***/ "./src/js/element.js":
/*!***************************!*\
  !*** ./src/js/element.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ "./src/css/style.css");
/* harmony import */ var _css_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/style.scss */ "./src/css/style.scss");
/* harmony import */ var _css_image_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/image.css */ "./src/css/image.css");
/* harmony import */ var _fonts_icofont_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fonts/icofont.css */ "./src/fonts/icofont.css");
/* harmony import */ var _img_02_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/02.jpg */ "./src/img/02.jpg");





var divEl = document.createElement('div');
divEl.className = 'title';
divEl.innerHTML = '你好呀'; //設置背景圖片

var bgDivEl = document.createElement('div');
bgDivEl.className = 'image-bg'; // 設置img元素的src

var imgEl = document.createElement('img');
imgEl.src = _img_02_jpg__WEBPACK_IMPORTED_MODULE_4__; //i元素

var iEl = document.createElement('i');
iEl.className = 'IcoFont icofont-bathtub';
document.body.appendChild(divEl);
document.body.appendChild(bgDivEl);
document.body.appendChild(imgEl);
document.body.appendChild(iEl);

/***/ }),

/***/ "./src/js/format.js":
/*!**************************!*\
  !*** ./src/js/format.js ***!
  \**************************/
/***/ ((module) => {

var priceFormat = function priceFormat() {
  return '99.98';
}; //CommonJS導出


module.exports = {
  priceFormat: priceFormat
};

/***/ }),

/***/ "./src/js/math.js":
/*!************************!*\
  !*** ./src/js/math.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sum": () => (/* binding */ sum)
/* harmony export */ });
//ES module的導出
function sum(num1, num2) {
  return num1 + num2;
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/css/image.css":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/css/image.css ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _img_01_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/01.png */ "./src/img/01.png");
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_img_01_png__WEBPACK_IMPORTED_MODULE_3__);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".image-bg {\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  width: 200px;\r\n  height: 200px;\r\n  background-size: contain;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/css/image.css"],"names":[],"mappings":"AAAA;EACE,yDAAsC;EACtC,YAAY;EACZ,aAAa;EACb,wBAAwB;AAC1B","sourcesContent":[".image-bg {\r\n  background-image: url('../img/01.png');\r\n  width: 200px;\r\n  height: 200px;\r\n  background-size: contain;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/css/style.css":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/css/style.css ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".title {\r\n  color: rgba(18,52,86,0.47059);\r\n  font-weight: 700;\r\n  font-size: 30px;\r\n\r\n  -webkit-user-select: none;\r\n\r\n  -moz-user-select: none;\r\n\r\n  -ms-user-select: none;\r\n\r\n  user-select: none;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"AAAA;EACE,6BAAgB;EAChB,gBAAgB;EAChB,eAAe;;EAEf,yBAAyB;;EAEzB,sBAAsB;;EAEtB,qBAAqB;;EAErB,iBAAiB;AACnB","sourcesContent":[".title {\r\n  color: #12345678;\r\n  font-weight: 700;\r\n  font-size: 30px;\r\n\r\n  -webkit-user-select: none;\r\n\r\n  -moz-user-select: none;\r\n\r\n  -ms-user-select: none;\r\n\r\n  user-select: none;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/css/style.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/css/style.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "$bgColor: orange;\r\n$textDecoration: underline;\r\n\r\n.title {\r\n  background: $bgColor;\r\n  -webkit-text-decoration: $textDecoration;\r\n          text-decoration: $textDecoration;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/css/style.scss"],"names":[],"mappings":"AAAA,gBAAgB;AAChB,0BAA0B;;AAE1B;EACE,oBAAoB;EACpB,wCAAwC;UAChC,gCAAgC;AAC1C","sourcesContent":["$bgColor: orange;\r\n$textDecoration: underline;\r\n\r\n.title {\r\n  background: $bgColor;\r\n  -webkit-text-decoration: $textDecoration;\r\n          text-decoration: $textDecoration;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/fonts/icofont.css":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/fonts/icofont.css ***!
  \***************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _icofont_woff2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icofont.woff2 */ "./src/fonts/icofont.woff2");
/* harmony import */ var _icofont_woff__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icofont.woff */ "./src/fonts/icofont.woff");
// Imports





var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_icofont_woff2__WEBPACK_IMPORTED_MODULE_3__);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_icofont_woff__WEBPACK_IMPORTED_MODULE_4__);
// Module
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[11].use[0]!./src/vue/App.vue?vue&type=style&index=0&id=5e019a2f&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[11].use[0]!./src/vue/App.vue?vue&type=style&index=0&id=5e019a2f&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\nh2 {\r\n  color: red;\n}\r\n", "",{"version":3,"sources":["webpack://./src/vue/App.vue"],"names":[],"mappings":";AAuBA;EACE,UAAU;AACZ","sourcesContent":["<template>\r\n  <h2>我是Vue渲染出來的</h2>\r\n  <h2>title</h2>\r\n  <hello-world></hello-world>\r\n</template>\r\n\r\n<script>\r\nimport HelloWorld from './HelloWorld.vue'\r\nexport default {\r\n  components: {\r\n    // HelloWorld: HelloWorld,\r\n    HelloWorld,\r\n  },\r\n  data() {\r\n    return {\r\n      title: 'Hello world',\r\n      message: '哈哈哈',\r\n    }\r\n  },\r\n}\r\n</script>\r\n\r\n<style>\r\nh2 {\r\n  color: red;\r\n}\r\n</style>\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/css/image.css":
/*!***************************!*\
  !*** ./src/css/image.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/getTarget.js */ "./node_modules/style-loader/dist/runtime/getTarget.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_image_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!./image.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/css/image.css");

      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = function(css, style){
      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
      while (style.firstChild) {
        style.removeChild(style.firstChild);
      }

      style.appendChild(document.createTextNode(css));
    }
  };
options.setAttributes = function(style) {
        var nonce =
           true ? __webpack_require__.nc : 0;

        if (nonce) {
          style.setAttribute("nonce", nonce);
        }
      };
options.insert = function(style){
    var target = _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default()("head");

    if (!target) {
      throw new Error(
        "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
      );
    }

    target.appendChild(style);
  };
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_image_css__WEBPACK_IMPORTED_MODULE_4__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_image_css__WEBPACK_IMPORTED_MODULE_4__.default && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_image_css__WEBPACK_IMPORTED_MODULE_4__.default.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_image_css__WEBPACK_IMPORTED_MODULE_4__.default.locals : undefined);


/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/getTarget.js */ "./node_modules/style-loader/dist/runtime/getTarget.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/css/style.css");

      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = function(css, style){
      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
      while (style.firstChild) {
        style.removeChild(style.firstChild);
      }

      style.appendChild(document.createTextNode(css));
    }
  };
options.setAttributes = function(style) {
        var nonce =
           true ? __webpack_require__.nc : 0;

        if (nonce) {
          style.setAttribute("nonce", nonce);
        }
      };
options.insert = function(style){
    var target = _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default()("head");

    if (!target) {
      throw new Error(
        "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
      );
    }

    target.appendChild(style);
  };
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default.locals : undefined);


/***/ }),

/***/ "./src/css/style.scss":
/*!****************************!*\
  !*** ./src/css/style.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/getTarget.js */ "./node_modules/style-loader/dist/runtime/getTarget.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/css/style.scss");

      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = function(css, style){
      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
      while (style.firstChild) {
        style.removeChild(style.firstChild);
      }

      style.appendChild(document.createTextNode(css));
    }
  };
options.setAttributes = function(style) {
        var nonce =
           true ? __webpack_require__.nc : 0;

        if (nonce) {
          style.setAttribute("nonce", nonce);
        }
      };
options.insert = function(style){
    var target = _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default()("head");

    if (!target) {
      throw new Error(
        "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
      );
    }

    target.appendChild(style);
  };
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_4__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_4__.default && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_4__.default.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_4__.default.locals : undefined);


/***/ }),

/***/ "./src/fonts/icofont.css":
/*!*******************************!*\
  !*** ./src/fonts/icofont.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/getTarget.js */ "./node_modules/style-loader/dist/runtime/getTarget.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_icofont_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!./icofont.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/fonts/icofont.css");

      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = function(css, style){
      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
      while (style.firstChild) {
        style.removeChild(style.firstChild);
      }

      style.appendChild(document.createTextNode(css));
    }
  };
options.setAttributes = function(style) {
        var nonce =
           true ? __webpack_require__.nc : 0;

        if (nonce) {
          style.setAttribute("nonce", nonce);
        }
      };
options.insert = function(style){
    var target = _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default()("head");

    if (!target) {
      throw new Error(
        "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
      );
    }

    target.appendChild(style);
  };
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_icofont_css__WEBPACK_IMPORTED_MODULE_4__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_icofont_css__WEBPACK_IMPORTED_MODULE_4__.default && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_icofont_css__WEBPACK_IMPORTED_MODULE_4__.default.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_icofont_css__WEBPACK_IMPORTED_MODULE_4__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[11].use[0]!./src/vue/App.vue?vue&type=style&index=0&id=5e019a2f&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[11].use[0]!./src/vue/App.vue?vue&type=style&index=0&id=5e019a2f&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/getTarget.js */ "./node_modules/style-loader/dist/runtime/getTarget.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_11_use_0_App_vue_vue_type_style_index_0_id_5e019a2f_lang_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[11].use[0]!./App.vue?vue&type=style&index=0&id=5e019a2f&lang=css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[11].use[0]!./src/vue/App.vue?vue&type=style&index=0&id=5e019a2f&lang=css");

      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = function(css, style){
      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
      while (style.firstChild) {
        style.removeChild(style.firstChild);
      }

      style.appendChild(document.createTextNode(css));
    }
  };
options.setAttributes = function(style) {
        var nonce =
           true ? __webpack_require__.nc : 0;

        if (nonce) {
          style.setAttribute("nonce", nonce);
        }
      };
options.insert = function(style){
    var target = _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default()("head");

    if (!target) {
      throw new Error(
        "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
      );
    }

    target.appendChild(style);
  };
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_11_use_0_App_vue_vue_type_style_index_0_id_5e019a2f_lang_css__WEBPACK_IMPORTED_MODULE_4__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_11_use_0_App_vue_vue_type_style_index_0_id_5e019a2f_lang_css__WEBPACK_IMPORTED_MODULE_4__.default && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_11_use_0_App_vue_vue_type_style_index_0_id_5e019a2f_lang_css__WEBPACK_IMPORTED_MODULE_4__.default.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_11_use_0_App_vue_vue_type_style_index_0_id_5e019a2f_lang_css__WEBPACK_IMPORTED_MODULE_4__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/getTarget.js":
/*!*************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/getTarget.js ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}

module.exports = getTarget;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./src/vue/App.vue":
/*!*************************!*\
  !*** ./src/vue/App.vue ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _App_vue_vue_type_template_id_5e019a2f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=5e019a2f */ "./src/vue/App.vue?vue&type=template&id=5e019a2f");
/* harmony import */ var _App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js */ "./src/vue/App.vue?vue&type=script&lang=js");
/* harmony import */ var _App_vue_vue_type_style_index_0_id_5e019a2f_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=5e019a2f&lang=css */ "./src/vue/App.vue?vue&type=style&index=0&id=5e019a2f&lang=css");




;
_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _App_vue_vue_type_template_id_5e019a2f__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "src/vue/App.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./src/vue/HelloWorld.vue":
/*!********************************!*\
  !*** ./src/vue/HelloWorld.vue ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _HelloWorld_vue_vue_type_template_id_7d22bc7c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HelloWorld.vue?vue&type=template&id=7d22bc7c */ "./src/vue/HelloWorld.vue?vue&type=template&id=7d22bc7c");
/* harmony import */ var _HelloWorld_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HelloWorld.vue?vue&type=script&lang=js */ "./src/vue/HelloWorld.vue?vue&type=script&lang=js");



_HelloWorld_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _HelloWorld_vue_vue_type_template_id_7d22bc7c__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_HelloWorld_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "src/vue/HelloWorld.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_HelloWorld_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./src/vue/App.vue?vue&type=script&lang=js":
/*!*************************************************!*\
  !*** ./src/vue/App.vue?vue&type=script&lang=js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_11_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_11_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[11].use[0]!./App.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[11].use[0]!./src/vue/App.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/vue/HelloWorld.vue?vue&type=script&lang=js":
/*!********************************************************!*\
  !*** ./src/vue/HelloWorld.vue?vue&type=script&lang=js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_11_use_0_HelloWorld_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_11_use_0_HelloWorld_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[11].use[0]!./HelloWorld.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[11].use[0]!./src/vue/HelloWorld.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/vue/App.vue?vue&type=template&id=5e019a2f":
/*!*******************************************************!*\
  !*** ./src/vue/App.vue?vue&type=template&id=5e019a2f ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_11_use_0_App_vue_vue_type_template_id_5e019a2f__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_11_use_0_App_vue_vue_type_template_id_5e019a2f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[11].use[0]!./App.vue?vue&type=template&id=5e019a2f */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[11].use[0]!./src/vue/App.vue?vue&type=template&id=5e019a2f");


/***/ }),

/***/ "./src/vue/HelloWorld.vue?vue&type=template&id=7d22bc7c":
/*!**************************************************************!*\
  !*** ./src/vue/HelloWorld.vue?vue&type=template&id=7d22bc7c ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_11_use_0_HelloWorld_vue_vue_type_template_id_7d22bc7c__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_11_use_0_HelloWorld_vue_vue_type_template_id_7d22bc7c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[11].use[0]!./HelloWorld.vue?vue&type=template&id=7d22bc7c */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[11].use[0]!./src/vue/HelloWorld.vue?vue&type=template&id=7d22bc7c");


/***/ }),

/***/ "./src/vue/App.vue?vue&type=style&index=0&id=5e019a2f&lang=css":
/*!*********************************************************************!*\
  !*** ./src/vue/App.vue?vue&type=style&index=0&id=5e019a2f&lang=css ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_11_use_0_App_vue_vue_type_style_index_0_id_5e019a2f_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader/dist/cjs.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[11].use[0]!./App.vue?vue&type=style&index=0&id=5e019a2f&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[11].use[0]!./src/vue/App.vue?vue&type=style&index=0&id=5e019a2f&lang=css");


/***/ }),

/***/ "./src/fonts/icofont.woff":
/*!********************************!*\
  !*** ./src/fonts/icofont.woff ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/icofont_dad3ac.woff";

/***/ }),

/***/ "./src/fonts/icofont.woff2":
/*!*********************************!*\
  !*** ./src/fonts/icofont.woff2 ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/icofont_9c3351.woff2";

/***/ }),

/***/ "./src/img/01.png":
/*!************************!*\
  !*** ./src/img/01.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/01_84eb3e.png";

/***/ }),

/***/ "./src/img/02.jpg":
/*!************************!*\
  !*** ./src/img/02.jpg ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/jpeg;base64,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/wCtGi/Cc6fL8dczkGpmVnFhLchP6KmKV0oJ3h3f2THe5COy5/o+K5GXXiw2mfYNO3I1m+39ErpDkFlo7kk0zXacP2NL95Fjb7nckkCi4EFGtUVbEXNa89pjrmveFKOHa390+NRQ/wA6EsEzn6PsSpH/AAYba/rxX5/l0P8A2he1Yu2P+tGisV5T++iIHciGlD/v6dSYMsk3lpPI/iXGd2MFMA8o2/6C0u7oHiy/sTKsk7v8Gz4rkYYTWKW2xb2kXTvQLJDUPzivwuyPufTKw2zWW4S2xQeOUon/AKBoV2k4Tizo02dSn+gWhhb151/ppgIuXZRUjP1Gh9g939yJZs7p4vRNrrg3fL9l/lHRK2vdx9kfcd+QLaY+MBbhKp8/yEzQWmizpT9dEpbiEL2/60aKpuUQ0NnJ372md8pVvsJoXvSPkI+Qj5CGz8qEN+WJoeBewiKW2WUQUy2+fx7Fu0IcNKW019RUxfnLTifqz4rmhzp8t6RZbjOazLmrUjCJA0CmUSnz2pcURotoDf8AC5XMDhoi5NuJds48NOE4S0Ly2eH6OT/oUGTUeQvumb1wnjW7L+Hh9/Iyd0tw0RP8ERfkQCHxBw5XsII9bZ4EJvZbLcJy/sqMejhHKG/dk7y/dmvfAwqNlDZWgSXsDHsb2q/P8j4/h9bXB0xLtIaRY667CHU6IA2Rvu//AE/6osINhW8bGxqeE/emiXc+XX+n74fvh++H74Ous8f6tluhxLB40uh2NLYg3a+vcjeluOmyH3FBfHkKHlNe3UwwwwxGRdmmMei2juM7t/UekQn6qkTw1KIH9Tn7CfAwnCSLX4kZZF19CVCTSWGk1Ee9Lx3uLLfNFROLZh93YeH3uT3Q+zQawnLcWt70b4+ZEdhoh2dsolx4XTLmd5Wm51hkHxp8oVp7562i93QMqOBt9wv/AARU5evD2z9hfpVOGFbCXb/4ZP/aAAwDAAABEQIRAAAQ8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888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";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/math */ "./src/js/math.js");
/* harmony import */ var _js_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/element */ "./src/js/element.js");
/* harmony import */ var vue_dist_vue_esm_bundler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue/dist/vue.esm-bundler */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _vue_App_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vue/App.vue */ "./src/vue/App.vue");
//ES module
 //CommonJS導出

var _require = __webpack_require__(/*! ./js/format */ "./src/js/format.js"),
    priceFormat = _require.priceFormat;


console.log((0,_js_math__WEBPACK_IMPORTED_MODULE_0__.sum)(10, 20));
console.log(priceFormat('123'));
var message = 'Hello World';
var names = ['abc', 'cba', 'aaa'];
names.forEach(function (item) {
  return console.log(item);
}); //Vue

 // const app = createApp({
//   template: `<h2>我是Vue渲染出來的</h2>`,
//   data() {
//     return {
//       title: 'Hello world',
//       message: '哈哈哈',
//     }
//   },
// })


var app = (0,vue_dist_vue_esm_bundler__WEBPACK_IMPORTED_MODULE_2__.createApp)(_vue_App_vue__WEBPACK_IMPORTED_MODULE_3__.default);
app.mount('#app');
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map