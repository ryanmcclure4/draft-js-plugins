'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _immutable = require('immutable');

var _lodash = require('lodash.keys');

var _lodash2 = _interopRequireDefault(_lodash);

var _decorateComponentWithProps = require('decorate-component-with-props');

var _decorateComponentWithProps2 = _interopRequireDefault(_decorateComponentWithProps);

var _draftJs = require('draft-js');

var _Emoji = require('./components/Emoji');

var _Emoji2 = _interopRequireDefault(_Emoji);

var _EmojiSuggestions = require('./components/EmojiSuggestions');

var _EmojiSuggestions2 = _interopRequireDefault(_EmojiSuggestions);

var _EmojiSuggestionsPortal = require('./components/EmojiSuggestionsPortal');

var _EmojiSuggestionsPortal2 = _interopRequireDefault(_EmojiSuggestionsPortal);

var _EmojiSelect = require('./components/EmojiSelect');

var _EmojiSelect2 = _interopRequireDefault(_EmojiSelect);

var _emojiStrategy = require('./emojiStrategy');

var _emojiStrategy2 = _interopRequireDefault(_emojiStrategy);

var _emojiSuggestionsStrategy = require('./emojiSuggestionsStrategy');

var _emojiSuggestionsStrategy2 = _interopRequireDefault(_emojiSuggestionsStrategy);

var _emojiStyles = {
  "emoji": "draftJsEmojiPlugin__emoji__2oqBk"
};

var _emojiStyles2 = _interopRequireDefault(_emojiStyles);

var _emojiSuggestionsStyles = {
  "emojiSuggestions": "draftJsEmojiPlugin__emojiSuggestions__2ffcV"
};

var _emojiSuggestionsStyles2 = _interopRequireDefault(_emojiSuggestionsStyles);

var _emojiSuggestionsEntryStyles = {
  "emojiSuggestionsEntry": "draftJsEmojiPlugin__emojiSuggestionsEntry__2-2p_",
  "emojiSuggestionsEntryFocused": "draftJsEmojiPlugin__emojiSuggestionsEntryFocused__XDntY draftJsEmojiPlugin__emojiSuggestionsEntry__2-2p_",
  "emojiSuggestionsEntryText": "draftJsEmojiPlugin__emojiSuggestionsEntryText__2sPjk",
  "emojiSuggestionsEntryIcon": "draftJsEmojiPlugin__emojiSuggestionsEntryIcon__1qC2V"
};

var _emojiSuggestionsEntryStyles2 = _interopRequireDefault(_emojiSuggestionsEntryStyles);

var _emojiSelectStyles = {
  "emojiSelect": "draftJsEmojiPlugin__emojiSelect__34S1B",
  "emojiSelectButton": "draftJsEmojiPlugin__emojiSelectButton__3sPol",
  "emojiSelectButtonPressed": "draftJsEmojiPlugin__emojiSelectButtonPressed__2Tezu",
  "emojiSelectPopover": "draftJsEmojiPlugin__emojiSelectPopover__1J1s0",
  "emojiSelectPopoverClosed": "draftJsEmojiPlugin__emojiSelectPopoverClosed__3Kxxq",
  "emojiSelectPopoverTitle": "draftJsEmojiPlugin__emojiSelectPopoverTitle__3tpXz",
  "emojiSelectPopoverGroups": "draftJsEmojiPlugin__emojiSelectPopoverGroups__35t9m",
  "emojiSelectPopoverGroup": "draftJsEmojiPlugin__emojiSelectPopoverGroup__3zwcE",
  "emojiSelectPopoverGroupTitle": "draftJsEmojiPlugin__emojiSelectPopoverGroupTitle__2pC51",
  "emojiSelectPopoverGroupList": "draftJsEmojiPlugin__emojiSelectPopoverGroupList__HQ8_y",
  "emojiSelectPopoverGroupItem": "draftJsEmojiPlugin__emojiSelectPopoverGroupItem__2pFOS",
  "emojiSelectPopoverToneSelect": "draftJsEmojiPlugin__emojiSelectPopoverToneSelect__28bny",
  "emojiSelectPopoverToneSelectList": "draftJsEmojiPlugin__emojiSelectPopoverToneSelectList__haFSJ",
  "emojiSelectPopoverToneSelectItem": "draftJsEmojiPlugin__emojiSelectPopoverToneSelectItem__2SgvL",
  "emojiSelectPopoverEntry": "draftJsEmojiPlugin__emojiSelectPopoverEntry__1ErDJ",
  "emojiSelectPopoverEntryFocused": "draftJsEmojiPlugin__emojiSelectPopoverEntryFocused__M28XS",
  "emojiSelectPopoverEntryIcon": "draftJsEmojiPlugin__emojiSelectPopoverEntryIcon__1yNaC",
  "emojiSelectPopoverNav": "draftJsEmojiPlugin__emojiSelectPopoverNav__1Nzd7",
  "emojiSelectPopoverNavItem": "draftJsEmojiPlugin__emojiSelectPopoverNavItem__qydCX",
  "emojiSelectPopoverNavEntry": "draftJsEmojiPlugin__emojiSelectPopoverNavEntry__1OiGB",
  "emojiSelectPopoverNavEntryActive": "draftJsEmojiPlugin__emojiSelectPopoverNavEntryActive__2j-Vk",
  "emojiSelectPopoverScrollbar": "draftJsEmojiPlugin__emojiSelectPopoverScrollbar__1Xjc6",
  "emojiSelectPopoverScrollbarThumb": "draftJsEmojiPlugin__emojiSelectPopoverScrollbarThumb__jGYdG"
};

var _emojiSelectStyles2 = _interopRequireDefault(_emojiSelectStyles);

var _attachImmutableEntitiesToEmojis = require('./modifiers/attachImmutableEntitiesToEmojis');

var _attachImmutableEntitiesToEmojis2 = _interopRequireDefault(_attachImmutableEntitiesToEmojis);

var _positionSuggestions = require('./utils/positionSuggestions');

var _positionSuggestions2 = _interopRequireDefault(_positionSuggestions);

var _emojiList = require('./utils/emojiList');

var _emojiList2 = _interopRequireDefault(_emojiList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultImagePath = '//cdn.jsdelivr.net/emojione/assets/svg/';
var defaultImageType = 'svg';
var defaultCacheBustParam = '?v=2.2.7';

// TODO activate/deactivate different the conversion or search part

exports.default = function () {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var defaultTheme = {
    emoji: _emojiStyles2.default.emoji,

    emojiSuggestions: _emojiSuggestionsStyles2.default.emojiSuggestions,

    emojiSuggestionsEntry: _emojiSuggestionsEntryStyles2.default.emojiSuggestionsEntry,
    emojiSuggestionsEntryFocused: _emojiSuggestionsEntryStyles2.default.emojiSuggestionsEntryFocused,
    emojiSuggestionsEntryText: _emojiSuggestionsEntryStyles2.default.emojiSuggestionsEntryText,
    emojiSuggestionsEntryIcon: _emojiSuggestionsEntryStyles2.default.emojiSuggestionsEntryIcon,

    emojiSelect: _emojiSelectStyles2.default.emojiSelect,

    emojiSelectButton: _emojiSelectStyles2.default.emojiSelectButton,
    emojiSelectButtonPressed: _emojiSelectStyles2.default.emojiSelectButtonPressed,

    emojiSelectPopover: _emojiSelectStyles2.default.emojiSelectPopover,
    emojiSelectPopoverClosed: _emojiSelectStyles2.default.emojiSelectPopoverClosed,
    emojiSelectPopoverTitle: _emojiSelectStyles2.default.emojiSelectPopoverTitle,
    emojiSelectPopoverGroups: _emojiSelectStyles2.default.emojiSelectPopoverGroups,

    emojiSelectPopoverGroup: _emojiSelectStyles2.default.emojiSelectPopoverGroup,
    emojiSelectPopoverGroupTitle: _emojiSelectStyles2.default.emojiSelectPopoverGroupTitle,
    emojiSelectPopoverGroupList: _emojiSelectStyles2.default.emojiSelectPopoverGroupList,
    emojiSelectPopoverGroupItem: _emojiSelectStyles2.default.emojiSelectPopoverGroupItem,

    emojiSelectPopoverToneSelect: _emojiSelectStyles2.default.emojiSelectPopoverToneSelect,
    emojiSelectPopoverToneSelectList: _emojiSelectStyles2.default.emojiSelectPopoverToneSelectList,
    emojiSelectPopoverToneSelectItem: _emojiSelectStyles2.default.emojiSelectPopoverToneSelectItem,

    emojiSelectPopoverEntry: _emojiSelectStyles2.default.emojiSelectPopoverEntry,
    emojiSelectPopoverEntryFocused: _emojiSelectStyles2.default.emojiSelectPopoverEntryFocused,
    emojiSelectPopoverEntryIcon: _emojiSelectStyles2.default.emojiSelectPopoverEntryIcon,

    emojiSelectPopoverNav: _emojiSelectStyles2.default.emojiSelectPopoverNav,
    emojiSelectPopoverNavItem: _emojiSelectStyles2.default.emojiSelectPopoverNavItem,
    emojiSelectPopoverNavEntry: _emojiSelectStyles2.default.emojiSelectPopoverNavEntry,
    emojiSelectPopoverNavEntryActive: _emojiSelectStyles2.default.emojiSelectPopoverNavEntryActive,

    emojiSelectPopoverScrollbar: _emojiSelectStyles2.default.emojiSelectPopoverScrollbar,
    emojiSelectPopoverScrollbarThumb: _emojiSelectStyles2.default.emojiSelectPopoverScrollbarThumb
  };

  var callbacks = {
    keyBindingFn: undefined,
    handleKeyCommand: undefined,
    onDownArrow: undefined,
    onUpArrow: undefined,
    onTab: undefined,
    onEscape: undefined,
    handleReturn: undefined,
    onChange: undefined
  };

  var ariaProps = {
    ariaHasPopup: 'false',
    ariaExpanded: false,
    ariaOwneeID: undefined,
    ariaActiveDescendantID: undefined
  };

  var searches = (0, _immutable.Map)();
  var escapedSearch = void 0;
  var clientRectFunctions = (0, _immutable.Map)();

  var store = {
    getEditorState: undefined,
    setEditorState: undefined,
    getPortalClientRect: function getPortalClientRect(offsetKey) {
      return clientRectFunctions.get(offsetKey)();
    },
    getAllSearches: function getAllSearches() {
      return searches;
    },
    isEscaped: function isEscaped(offsetKey) {
      return escapedSearch === offsetKey;
    },
    escapeSearch: function escapeSearch(offsetKey) {
      escapedSearch = offsetKey;
    },

    resetEscapedSearch: function resetEscapedSearch() {
      escapedSearch = undefined;
    },

    register: function register(offsetKey) {
      searches = searches.set(offsetKey, offsetKey);
    },

    updatePortalClientRect: function updatePortalClientRect(offsetKey, func) {
      clientRectFunctions = clientRectFunctions.set(offsetKey, func);
    },

    unregister: function unregister(offsetKey) {
      searches = searches.delete(offsetKey);
      clientRectFunctions = clientRectFunctions.delete(offsetKey);
    }
  };

  // Styles are overwritten instead of merged as merging causes a lot of confusion.
  //
  // Why? Because when merging a developer needs to know all of the underlying
  // styles which needs a deep dive into the code. Merging also makes it prone to
  // errors when upgrading as basically every styling change would become a major
  // breaking change. 1px of an increased padding can break a whole layout.
  var _config$theme = config.theme,
      theme = _config$theme === undefined ? defaultTheme : _config$theme,
      _config$imagePath = config.imagePath,
      imagePath = _config$imagePath === undefined ? defaultImagePath : _config$imagePath,
      _config$imageType = config.imageType,
      imageType = _config$imageType === undefined ? defaultImageType : _config$imageType,
      allowImageCache = config.allowImageCache,
      _config$positionSugge = config.positionSuggestions,
      positionSuggestions = _config$positionSugge === undefined ? _positionSuggestions2.default : _config$positionSugge,
      priorityList = config.priorityList,
      selectGroups = config.selectGroups,
      selectButtonContent = config.selectButtonContent,
      toneSelectOpenDelay = config.toneSelectOpenDelay,
      useNativeArt = config.useNativeArt;


  var cacheBustParam = allowImageCache ? '' : defaultCacheBustParam;

  // if priorityList is configured in config then set priorityList
  if (priorityList) _emojiList2.default.setPriorityList(priorityList);
  var suggestionsProps = {
    ariaProps: ariaProps,
    cacheBustParam: cacheBustParam,
    callbacks: callbacks,
    imagePath: imagePath,
    imageType: imageType,
    theme: theme,
    store: store,
    positionSuggestions: positionSuggestions,
    shortNames: (0, _immutable.List)((0, _lodash2.default)(_emojiList2.default.list)),
    useNativeArt: useNativeArt
  };
  var selectProps = {
    cacheBustParam: cacheBustParam,
    imagePath: imagePath,
    imageType: imageType,
    theme: theme,
    store: store,
    selectGroups: selectGroups,
    selectButtonContent: selectButtonContent,
    toneSelectOpenDelay: toneSelectOpenDelay,
    useNativeArt: useNativeArt
  };
  return {
    EmojiSuggestions: (0, _decorateComponentWithProps2.default)(_EmojiSuggestions2.default, suggestionsProps),
    EmojiSelect: (0, _decorateComponentWithProps2.default)(_EmojiSelect2.default, selectProps),
    decorators: [{
      strategy: _emojiStrategy2.default,
      component: (0, _decorateComponentWithProps2.default)(_Emoji2.default, { theme: theme, imagePath: imagePath, imageType: imageType, cacheBustParam: cacheBustParam, useNativeArt: useNativeArt })
    }, {
      strategy: _emojiSuggestionsStrategy2.default,
      component: (0, _decorateComponentWithProps2.default)(_EmojiSuggestionsPortal2.default, { store: store })
    }],
    getAccessibilityProps: function getAccessibilityProps() {
      return {
        role: 'combobox',
        ariaAutoComplete: 'list',
        ariaHasPopup: ariaProps.ariaHasPopup,
        ariaExpanded: ariaProps.ariaExpanded,
        ariaActiveDescendantID: ariaProps.ariaActiveDescendantID,
        ariaOwneeID: ariaProps.ariaOwneeID
      };
    },

    initialize: function initialize(_ref) {
      var getEditorState = _ref.getEditorState,
          setEditorState = _ref.setEditorState;

      store.getEditorState = getEditorState;
      store.setEditorState = setEditorState;
    },

    onDownArrow: function onDownArrow(keyboardEvent) {
      return callbacks.onDownArrow && callbacks.onDownArrow(keyboardEvent);
    },
    onTab: function onTab(keyboardEvent) {
      return callbacks.onTab && callbacks.onTab(keyboardEvent);
    },
    onUpArrow: function onUpArrow(keyboardEvent) {
      return callbacks.onUpArrow && callbacks.onUpArrow(keyboardEvent);
    },
    onEscape: function onEscape(keyboardEvent) {
      return callbacks.onEscape && callbacks.onEscape(keyboardEvent);
    },
    handleReturn: function handleReturn(keyboardEvent) {
      return callbacks.handleReturn && callbacks.handleReturn(keyboardEvent);
    },
    onChange: function onChange(editorState) {
      var newEditorState = (0, _attachImmutableEntitiesToEmojis2.default)(editorState);

      if (!newEditorState.getCurrentContent().equals(editorState.getCurrentContent())) {
        // Forcing the current selection ensures that it will be at it's right place.
        // This solves the issue where inserting an Emoji on OSX with Apple's Emoji
        // selector led to the right selection the data, but wrong position in
        // the contenteditable.
        newEditorState = _draftJs.EditorState.forceSelection(newEditorState, newEditorState.getSelection());
      }

      if (callbacks.onChange) return callbacks.onChange(newEditorState);
      return newEditorState;
    }
  };
};