'use strict';

var mr  =    'margin',
    mrt =    'margin-top',
    mrr =    'margin-right',
    mrb =    'margin-bottom',
    mrl =    'margin-left'
    pd  =    'padding',
    pdt =    'padding-top',
    pdr =    'padding-right',
    pdb =    'padding-bottom',
    pdl =    'padding-left'
    ;

var atoms = exports.atoms = {
    // Positioning
    pos:    'position',
    t:      'top',
    r:      'right',
    b:      'bottom',
    l:      'left',
    z:      'z-index',

    // Layout (box model)
    d:      'display',
    vis:    'visibility',
    fl:     'float',
    w:      'width',
    h:      'height',
    minW:   'min-width',
    maxW:   'max-width',
    minH:   'min-height',
    maxH:   'max-height',
    ov:     'overflow',
    ovx:    'overflow-x',
    ovy:    'overflow-y',
    bxz:    'box-sizing',
    cl:     'clip',
    clp:    'clip-path',
    clr:    'clear',

    // Flexbox
    fl:     'flex',
    fld:    'flex-direction',
    flg:    'flex-grow',
    fls:    'flex-shrink',
    flb:    'flex-basis',
    flw:    'flex-wrap',
    jc:     'justify-content',
    ai:     'align-items',
    ac:     'align-content',
    as:     'align-self',

    // Margins
    mr,
    mrt,
    mrr,
    mrb,
    mrl,
    mar:    mr,
    mart:   mart,
    marr:   marr,
    marb:   marb,
    marl:   marl,

    // Paddings
    pd,
    pdt,
    pdr,
    pdb,
    pdl,
    pad:    pd,
    padt:   pdt,
    padr:   pdr,
    padb:   pdb,
    padl:   pdl,

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
    bgi:    'background-image',
    bgr:    'background-repeat',
    bga:    'background-attachment',
    bgp:    'background-position',
    bgs:    'background-size',
    bgo:    'background-origin',
    bgcl:   'background-clip',

    // Text
    fz:     'font-size',
    fs:     'font-style',
    fw:     'font-weight',
    ff:     'font-family',
    lh:     'line-height',
    ta:     'text-align',
    td:     'text-decoration',
    tt:     'text-transform',
    ww:     'word-wrap',
    
    // Pointer
    cur:    'cursor',
    pe:     'pointer-events',
    us:     'user-select',

    // Animations
    an:     'animation',
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
