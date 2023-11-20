'use strict';

var atoms = exports.atoms = {
    // Layout
    d:      'display',
    bxz:    'box-sizing',
    ov:     'overflow',
    pos:    'position',
    fl:     'float',
    w:      'width',
    h:      'height',
    minW:   'min-width',
    maxW:   'max-width',
    minH:   'min-height',
    maxH:   'max-height',
    vis:    'visibility',
    z:      'z-index',

    // Margins
    mar:    'margin',
    mart:   'margin-top',
    marr:   'margin-right',
    marb:   'margin-bottom',
    marl:   'margin-left',

    // Paddings
    pad:    'padding',
    padt:   'padding-top',
    padr:   'padding-right',
    padb:   'padding-bottom',
    padl:   'padding-left',

    // Borders
    bd:     'border',
    bdt:    'border-top',
    bdr:    'border-right',
    bdb:    'border-bottom',
    bdl:    'border-left',
    bdrad:  'border-radius',
    out:    'outline',

    // Colors
    col:    'color',
    op:     'opacity',
    bg:     'background',
    bgc:    'background-color',

    // Text
    fz:     'font-size',
    fs:     'font-style',
    fw:     'font-weight',
    ff:     'font-family',
    lh:     'line-height',
    ta:     'text-align',
    td:     'text-decoration',
    ww:     'word-wrap',
    
    // Pointer
    cur:    'cursor',

    // Animations
    trs:    'transition',
    tr:     'transform',

    // Other
    ls:     'list-style',
    con:    'content',
};

exports.addon = function (renderer) {
    var originalDecl = renderer.decl;
    renderer.decl = function (key, value) {
        return originalDecl(atoms[key] || key, value);
    };
};
