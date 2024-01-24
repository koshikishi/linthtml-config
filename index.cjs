module.exports = {
  'attr-name-ignore-regex': 'viewBox|preserveAspectRatio',
  rules: {
    'attr-name-style': [true, 'dash'],
    'attr-no-dup': true,
    'attr-no-unsafe-char': true,
    'attr-quote-style': [true, 'double'],
    'attr-req-value': true,
    'attr-validate': true,
    'button-req-content': true,
    'class-no-dup': true,
    'doctype-first': true,
    'doctype-html5': true,
    'fieldset-contains-legend': true,
    'fig-req-figcaption': true,
    'focusable-tabindex-style': true,
    'head-req-title': true,
    'head-valid-content-model': true,
    'html-req-lang': true,
    'html-valid-content-model': true,
    'id-no-dup': true,
    'id-style': [true, 'dash'],
    'img-req-alt': [true, 'allownull'],
    'img-req-src': true,
    'input-btn-req-value-or-title': true,
    'input-radio-req-name': true,
    'input-req-label': true,
    'label-no-enc-textarea-or-select': true,
    'lang-style': [true, 'case'],
    'link-req-noopener': true,
    'no-surrounding-whitespace': true,
    'tag-bans': [true, 'style'],
    'tag-close': true,
    'tag-name-lowercase': true,
    'tag-name-match': true,
    'tag-req-attr': [true, {
      a: [{
        name: 'href',
      }],
      time: [{
        name: 'datetime',
      }],
      source: [{
        name: 'type',
      }],
      img: [{
        name: 'width',
      }, {
        name: 'height',
      }],
      form: [{
        name: 'action',
      }],
      input: [{
        name: 'name',
      }],
      button: [{
        name: 'type',
      }],
      select: [{
        name: 'name',
      }],
      textarea: [{
        name: 'name',
      }],
      svg: [{
        name: 'width',
      }, {
        name: 'height',
      }],
    }],
    'tag-self-close': [true, 'never'],
    'title-no-dup': true,
  },
};
