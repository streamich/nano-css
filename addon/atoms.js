'use strict';

var pos =    'position',
    t =      'top',
    r =      'right',
    b =      'bottom',
    l =      'left',
    w =     'width',
    h =     'height',
    ov =     'overflow',
    ovx =    ov + '-x',
    ovy =    ov + '-y',
    mr  =    'margin',
    mrt =    mr + '-' + t,
    mrr =    mr + '-' + r,
    mrb =    mr + '-' + b,
    mrl =    mr + '-' + l,
    pd  =    'padding',
    pdt =    pd + '-' + t,
    pdr =    pd + '-' + r,
    pdb =    pd + '-' + b,
    pdl =    pd + '-' + l,
    bd =     'border',
    bdt =    bd + '-' + t,
    bdr =    bd + '-' + r,
    bdb =    bd + '-' + b,
    bdl =    bd + '-' + l,
    bdrad =  bd + '-radius',
    bg =     'background',
    bgc =    bg + '-color',
    bgi =    bg + '-image',
    bgr =    bg + '-repeat',
    bga =    bg + '-attachment',
    bgp =    bg + '-position',
    bgs =    bg + '-size',
    bgo =    bg + '-origin',
    bgcl =   bg + '-clip',
    f =      'font',
    fz =     f + '-size',
    fs =     f + '-style',
    fw =     f + '-weight',
    ff =     f + '-family'
    st =     'stroke',
    stw =    st + '-width',
    stl =    st + '-linecap'
    ;

var atoms = exports.atoms = {
    // Positioning
    pos,
    t,
    r,
    b,
    l,
    z:      'z-index',

    // Layout (box model)
    d:      'display',
    vis:    'visibility',
    fl:     'float',
    w,
    h,
    minW:   'min-' + w,
    maxW:   'max-' + w,
    minH:   'min-' + h,
    maxH:   'max-' + h,
    ov,
    ovx,
    ovy,
    bxz:    'box-sizing',
    cl:     'clip',
    clp:    'clip-path',
    clr:    'clear',
    tbl:    'table-layout',

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
    bd,
    bdt,
    bdr,
    bdb,
    bdl,
    bdrad,
    out:    'outline',
    bxsh:   'box-shadow',

    // Colors
    col:    'color',
    op:     'opacity',
    bg,
    bgc,
    bgi,
    bgr,
    bga,
    bgp,
    bgs,
    bgo,
    bgcl,
    bdfl:   'backdrop-filter',
    bfvis:  'backface-visibility',

    // Text
    f,
    fz,
    fs,
    fw,
    ff,
    ta:     'text-align',
    td:     'text-decoration',
    tt:     'text-transform',
    ts:     'text-shadow',
    tov:    'text-overflow',
    ww:     'word-wrap',
    lts:    'letter-spacing',
    ws:     'white-space',
    lh:     'line-' + h,
    va:     'vertical-align',
    
    // Pointer
    cur:    'cursor',
    pe:     'pointer-events',
    us:     'user-select',

    // Animations
    an:     'animation',
    trs:    'transition',
    tr:     'transform',

    // SVG
    st,
    stw,
    stl,

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
