'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function hydrateFactory(win, opts, results, afterHydrate, resolve) {
  var globalThis = win;
  var self = win;
  var top = win;
  var parent = win;

  var addEventListener = win.addEventListener.bind(win);
  var alert = win.alert.bind(win);
  var blur = win.blur.bind(win);
  var cancelAnimationFrame = win.cancelAnimationFrame.bind(win);
  var cancelIdleCallback = win.cancelIdleCallback.bind(win);
  var clearInterval = win.clearInterval.bind(win);
  var clearTimeout = win.clearTimeout.bind(win);
  var close = () => {};
  var confirm = win.confirm.bind(win);
  var dispatchEvent = win.dispatchEvent.bind(win);
  var focus = win.focus.bind(win);
  var getComputedStyle = win.getComputedStyle.bind(win);
  var matchMedia = win.matchMedia.bind(win);
  var open = win.open.bind(win);
  var prompt = win.prompt.bind(win);
  var removeEventListener = win.removeEventListener.bind(win);
  var requestAnimationFrame = win.requestAnimationFrame.bind(win);
  var requestIdleCallback = win.requestIdleCallback.bind(win);
  var setInterval = win.setInterval.bind(win);
  var setTimeout = win.setTimeout.bind(win);

  var CSS = win.CSS;
  var CustomEvent = win.CustomEvent;
  var Element = win.Element;
  var Event = win.Event;
  var HTMLElement = win.HTMLElement;
  var IntersectionObserver = win.IntersectionObserver;
  var KeyboardEvent = win.KeyboardEvent;
  var MouseEvent = win.MouseEvent;
  var Node = win.Node;
  var NodeList = win.NodeList;
  var URL = win.URL;

  var console = win.console;
  var customElements = win.customElements;
  var history = win.history;
  var localStorage = win.localStorage;
  var location = win.location;
  var navigator = win.navigator;
  var performance = win.performance;
  var sessionStorage = win.sessionStorage;

  var devicePixelRatio = win.devicePixelRatio;
  var innerHeight = win.innerHeight;
  var innerWidth = win.innerWidth;
  var origin = win.origin;
  var pageXOffset = win.pageXOffset;
  var pageYOffset = win.pageYOffset;
  var screen = win.screen;
  var screenLeft = win.screenLeft;
  var screenTop = win.screenTop;
  var screenX = win.screenX;
  var screenY = win.screenY;
  var scrollX = win.scrollX;
  var scrollY = win.scrollY;
  var exports = {};

  function hydrateAppClosure(window) {
    var document = window.document;


/**
 * Default style mode id
 */
/**
 * Reusable empty obj/array
 * Don't add values to these!!
 */
const EMPTY_OBJ = {};

const isDef = (v) => v != null;
const isComplexType = (o) => {
    // https://jsperf.com/typeof-fn-object/5
    o = typeof o;
    return o === 'object' || o === 'function';
};

let scopeId;
let hostTagName;
let isSvgMode = false;
const parsePropertyValue = (propValue, propType) => {
    // ensure this value is of the correct prop type
    if (propValue != null && !isComplexType(propValue)) {
        if ( propType & 2 /* Number */) {
            // force it to be a number
            return parseFloat(propValue);
        }
        if ( propType & 1 /* String */) {
            // could have been passed as a number or boolean
            // but we still want it as a string
            return String(propValue);
        }
        // redundant return here for better minification
        return propValue;
    }
    // not sure exactly what type we want
    // so no need to change to a different type
    return propValue;
};
const CONTENT_REF_ID = 'r';
const ORG_LOCATION_ID = 'o';
const SLOT_NODE_ID = 's';
const TEXT_NODE_ID = 't';
const HYDRATED_CLASS = 'hydrated';
const HYDRATE_ID = 's-id';
const HYDRATE_CHILD_ID = 'c-id';
const createTime = (fnName, tagName = '') => {
    {
        return () => { return; };
    }
};
const uniqueTime = (key, measureText) => {
    {
        return () => { return; };
    }
};
const rootAppliedStyles = new WeakMap();
const registerStyle = (scopeId, cssText, allowCS) => {
    let style = styles.get(scopeId);
    {
        style = cssText;
    }
    styles.set(scopeId, style);
};
const addStyle = (styleContainerNode, cmpMeta, mode, hostElm) => {
    let scopeId =  getScopeId(cmpMeta.$tagName$);
    let style = styles.get(scopeId);
    // if an element is NOT connected then getRootNode() will return the wrong root node
    // so the fallback is to always use the document for the root node in those cases
    styleContainerNode = (styleContainerNode.nodeType === 11 /* DocumentFragment */ ? styleContainerNode : doc);
    if (style) {
        if (typeof style === 'string') {
            styleContainerNode = styleContainerNode.head || styleContainerNode;
            let appliedStyles = rootAppliedStyles.get(styleContainerNode);
            let styleElm;
            if (!appliedStyles) {
                rootAppliedStyles.set(styleContainerNode, appliedStyles = new Set());
            }
            if (!appliedStyles.has(scopeId)) {
                {
                    {
                        styleElm = doc.createElement('style');
                        styleElm.innerHTML = style;
                    }
                    {
                        styleElm.setAttribute(HYDRATE_ID, scopeId);
                    }
                    styleContainerNode.insertBefore(styleElm, styleContainerNode.querySelector('link'));
                }
                if (appliedStyles) {
                    appliedStyles.add(scopeId);
                }
            }
        }
        else if ( !styleContainerNode.adoptedStyleSheets.includes(style)) {
            styleContainerNode.adoptedStyleSheets = [
                ...styleContainerNode.adoptedStyleSheets,
                style
            ];
        }
    }
    return scopeId;
};
const attachStyles = (elm, cmpMeta, mode) => {
    const endAttachStyles = createTime('attachStyles', cmpMeta.$tagName$);
    const scopeId = addStyle( elm.getRootNode(), cmpMeta);
    if ( cmpMeta.$flags$ & 10 /* needsScopedEncapsulation */) {
        // only required when we're NOT using native shadow dom (slot)
        // or this browser doesn't support native shadow dom
        // and this host element was NOT created with SSR
        // let's pick out the inner content for slot projection
        // create a node to represent where the original
        // content was first placed, which is useful later on
        // DOM WRITE!!
        elm['s-sc'] = scopeId;
        elm.classList.add(scopeId + '-h');
        if ( cmpMeta.$flags$ & 2 /* scopedCssEncapsulation */) {
            elm.classList.add(scopeId + '-s');
        }
    }
    endAttachStyles();
};
const getScopeId = (tagName, mode) => 'sc-' + ( tagName);
/**
 * Production h() function based on Preact by
 * Jason Miller (@developit)
 * Licensed under the MIT License
 * https://github.com/developit/preact/blob/master/LICENSE
 *
 * Modified for Stencil's compiler and vdom
 */
// const stack: any[] = [];
// export function h(nodeName: string | d.FunctionalComponent, vnodeData: d.PropsType, child?: d.ChildType): d.VNode;
// export function h(nodeName: string | d.FunctionalComponent, vnodeData: d.PropsType, ...children: d.ChildType[]): d.VNode;
const h = (nodeName, vnodeData, ...children) => {
    let child = null;
    let simple = false;
    let lastSimple = false;
    let vNodeChildren = [];
    const walk = (c) => {
        for (let i = 0; i < c.length; i++) {
            child = c[i];
            if (Array.isArray(child)) {
                walk(child);
            }
            else if (child != null && typeof child !== 'boolean') {
                if (simple = typeof nodeName !== 'function' && !isComplexType(child)) {
                    child = String(child);
                }
                if (simple && lastSimple) {
                    // If the previous child was simple (string), we merge both
                    vNodeChildren[vNodeChildren.length - 1].$text$ += child;
                }
                else {
                    // Append a new vNode, if it's text, we create a text vNode
                    vNodeChildren.push(simple ? newVNode(null, child) : child);
                }
                lastSimple = simple;
            }
        }
    };
    walk(children);
    if (vnodeData) {
        {
            const classData = vnodeData.className || vnodeData.class;
            if (classData) {
                vnodeData.class = typeof classData !== 'object'
                    ? classData
                    : Object.keys(classData)
                        .filter(k => classData[k])
                        .join(' ');
            }
        }
    }
    const vnode = newVNode(nodeName, null);
    vnode.$attrs$ = vnodeData;
    if (vNodeChildren.length > 0) {
        vnode.$children$ = vNodeChildren;
    }
    return vnode;
};
const newVNode = (tag, text) => {
    const vnode = {
        $flags$: 0,
        $tag$: tag,
        $text$: text,
        $elm$: null,
        $children$: null
    };
    {
        vnode.$attrs$ = null;
    }
    return vnode;
};
const Host = {};
const isHost = (node) => node && node.$tag$ === Host;
/**
 * Production setAccessor() function based on Preact by
 * Jason Miller (@developit)
 * Licensed under the MIT License
 * https://github.com/developit/preact/blob/master/LICENSE
 *
 * Modified for Stencil's compiler and vdom
 */
const setAccessor = (elm, memberName, oldValue, newValue, isSvg, flags) => {
    if (oldValue === newValue) {
        return;
    }
    let isProp = isMemberInElement(elm, memberName);
    let ln = memberName.toLowerCase();
    if ( memberName === 'class') {
        const classList = elm.classList;
        const oldClasses = parseClassList(oldValue);
        const newClasses = parseClassList(newValue);
        classList.remove(...oldClasses.filter(c => c && !newClasses.includes(c)));
        classList.add(...newClasses.filter(c => c && !oldClasses.includes(c)));
    }
    else if ( !isProp && memberName[0] === 'o' && memberName[1] === 'n') {
        // Event Handlers
        // so if the member name starts with "on" and the 3rd characters is
        // a capital letter, and it's not already a member on the element,
        // then we're assuming it's an event listener
        if (memberName[2] === '-') {
            // on- prefixed events
            // allows to be explicit about the dom event to listen without any magic
            // under the hood:
            // <my-cmp on-click> // listens for "click"
            // <my-cmp on-Click> // listens for "Click"
            // <my-cmp on-ionChange> // listens for "ionChange"
            // <my-cmp on-EVENTS> // listens for "EVENTS"
            memberName = memberName.slice(3);
        }
        else if (isMemberInElement(win, ln)) {
            // standard event
            // the JSX attribute could have been "onMouseOver" and the
            // member name "onmouseover" is on the window's prototype
            // so let's add the listener "mouseover", which is all lowercased
            memberName = ln.slice(2);
        }
        else {
            // custom event
            // the JSX attribute could have been "onMyCustomEvent"
            // so let's trim off the "on" prefix and lowercase the first character
            // and add the listener "myCustomEvent"
            // except for the first character, we keep the event name case
            memberName = ln[2] + memberName.slice(3);
        }
        if (oldValue) {
            plt.rel(elm, memberName, oldValue, false);
        }
        if (newValue) {
            plt.ael(elm, memberName, newValue, false);
        }
    }
    else {
        // Set property if it exists and it's not a SVG
        const isComplex = isComplexType(newValue);
        if ((isProp || (isComplex && newValue !== null)) && !isSvg) {
            try {
                if (!elm.tagName.includes('-')) {
                    let n = newValue == null ? '' : newValue;
                    // Workaround for Safari, moving the <input> caret when re-assigning the same valued
                    if (memberName === 'list') {
                        isProp = false;
                        // tslint:disable-next-line: triple-equals
                    }
                    else if (oldValue == null || elm[memberName] != n) {
                        elm[memberName] = n;
                    }
                }
                else {
                    elm[memberName] = newValue;
                }
            }
            catch (e) { }
        }
        if (newValue == null || newValue === false) {
            {
                elm.removeAttribute(memberName);
            }
        }
        else if ((!isProp || (flags & 4 /* isHost */) || isSvg) && !isComplex) {
            newValue = newValue === true ? '' : newValue;
            {
                elm.setAttribute(memberName, newValue);
            }
        }
    }
};
const parseClassListRegex = /\s/;
const parseClassList = (value) => (!value) ? [] : value.split(parseClassListRegex);
const updateElement = (oldVnode, newVnode, isSvgMode, memberName) => {
    // if the element passed in is a shadow root, which is a document fragment
    // then we want to be adding attrs/props to the shadow root's "host" element
    // if it's not a shadow root, then we add attrs/props to the same element
    const elm = (newVnode.$elm$.nodeType === 11 /* DocumentFragment */ && newVnode.$elm$.host) ? newVnode.$elm$.host : newVnode.$elm$;
    const oldVnodeAttrs = (oldVnode && oldVnode.$attrs$) || EMPTY_OBJ;
    const newVnodeAttrs = newVnode.$attrs$ || EMPTY_OBJ;
    {
        // remove attributes no longer present on the vnode by setting them to undefined
        for (memberName in oldVnodeAttrs) {
            if (!(memberName in newVnodeAttrs)) {
                setAccessor(elm, memberName, oldVnodeAttrs[memberName], undefined, isSvgMode, newVnode.$flags$);
            }
        }
    }
    // add new & update changed attributes
    for (memberName in newVnodeAttrs) {
        setAccessor(elm, memberName, oldVnodeAttrs[memberName], newVnodeAttrs[memberName], isSvgMode, newVnode.$flags$);
    }
};
const createElm = (oldParentVNode, newParentVNode, childIndex, parentElm) => {
    // tslint:disable-next-line: prefer-const
    let newVNode = newParentVNode.$children$[childIndex];
    let i = 0;
    let elm;
    let childNode;
    if ( newVNode.$text$ !== null) {
        // create text node
        elm = newVNode.$elm$ = doc.createTextNode(newVNode.$text$);
    }
    else {
        // create element
        elm = newVNode.$elm$ = ( doc.createElement( newVNode.$tag$));
        // add css classes, attrs, props, listeners, etc.
        {
            updateElement(null, newVNode, isSvgMode);
        }
        if ( isDef(scopeId) && elm['s-si'] !== scopeId) {
            // if there is a scopeId and this is the initial render
            // then let's add the scopeId as a css class
            elm.classList.add((elm['s-si'] = scopeId));
        }
        if (newVNode.$children$) {
            for (i = 0; i < newVNode.$children$.length; ++i) {
                // create the node
                childNode = createElm(oldParentVNode, newVNode, i);
                // return node could have been null
                if (childNode) {
                    // append our new node
                    elm.appendChild(childNode);
                }
            }
        }
    }
    return elm;
};
const addVnodes = (parentElm, before, parentVNode, vnodes, startIdx, endIdx) => {
    let containerElm = ( parentElm);
    let childNode;
    if ( containerElm.shadowRoot && containerElm.tagName === hostTagName) {
        containerElm = containerElm.shadowRoot;
    }
    for (; startIdx <= endIdx; ++startIdx) {
        if (vnodes[startIdx]) {
            childNode = createElm(null, parentVNode, startIdx);
            if (childNode) {
                vnodes[startIdx].$elm$ = childNode;
                containerElm.insertBefore(childNode,  before);
            }
        }
    }
};
const removeVnodes = (vnodes, startIdx, endIdx, vnode, elm) => {
    for (; startIdx <= endIdx; ++startIdx) {
        if (vnode = vnodes[startIdx]) {
            elm = vnode.$elm$;
            // remove the vnode's element from the dom
            elm.remove();
        }
    }
};
const updateChildren = (parentElm, oldCh, newVNode, newCh) => {
    let oldStartIdx = 0;
    let newStartIdx = 0;
    let oldEndIdx = oldCh.length - 1;
    let oldStartVnode = oldCh[0];
    let oldEndVnode = oldCh[oldEndIdx];
    let newEndIdx = newCh.length - 1;
    let newStartVnode = newCh[0];
    let newEndVnode = newCh[newEndIdx];
    let node;
    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
        if (oldStartVnode == null) {
            // Vnode might have been moved left
            oldStartVnode = oldCh[++oldStartIdx];
        }
        else if (oldEndVnode == null) {
            oldEndVnode = oldCh[--oldEndIdx];
        }
        else if (newStartVnode == null) {
            newStartVnode = newCh[++newStartIdx];
        }
        else if (newEndVnode == null) {
            newEndVnode = newCh[--newEndIdx];
        }
        else if (isSameVnode(oldStartVnode, newStartVnode)) {
            patch(oldStartVnode, newStartVnode);
            oldStartVnode = oldCh[++oldStartIdx];
            newStartVnode = newCh[++newStartIdx];
        }
        else if (isSameVnode(oldEndVnode, newEndVnode)) {
            patch(oldEndVnode, newEndVnode);
            oldEndVnode = oldCh[--oldEndIdx];
            newEndVnode = newCh[--newEndIdx];
        }
        else if (isSameVnode(oldStartVnode, newEndVnode)) {
            patch(oldStartVnode, newEndVnode);
            parentElm.insertBefore(oldStartVnode.$elm$, oldEndVnode.$elm$.nextSibling);
            oldStartVnode = oldCh[++oldStartIdx];
            newEndVnode = newCh[--newEndIdx];
        }
        else if (isSameVnode(oldEndVnode, newStartVnode)) {
            patch(oldEndVnode, newStartVnode);
            parentElm.insertBefore(oldEndVnode.$elm$, oldStartVnode.$elm$);
            oldEndVnode = oldCh[--oldEndIdx];
            newStartVnode = newCh[++newStartIdx];
        }
        else {
            {
                // new element
                node = createElm(oldCh && oldCh[newStartIdx], newVNode, newStartIdx);
                newStartVnode = newCh[++newStartIdx];
            }
            if (node) {
                {
                    oldStartVnode.$elm$.parentNode.insertBefore(node, oldStartVnode.$elm$);
                }
            }
        }
    }
    if (oldStartIdx > oldEndIdx) {
        addVnodes(parentElm, (newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].$elm$), newVNode, newCh, newStartIdx, newEndIdx);
    }
    else if ( newStartIdx > newEndIdx) {
        removeVnodes(oldCh, oldStartIdx, oldEndIdx);
    }
};
const isSameVnode = (vnode1, vnode2) => {
    // compare if two vnode to see if they're "technically" the same
    // need to have the same element tag, and same key to be the same
    if (vnode1.$tag$ === vnode2.$tag$) {
        return true;
    }
    return false;
};
const patch = (oldVNode, newVNode) => {
    const elm = newVNode.$elm$ = oldVNode.$elm$;
    const oldChildren = oldVNode.$children$;
    const newChildren = newVNode.$children$;
    if ( newVNode.$text$ === null) {
        // element node
        {
            {
                // either this is the first render of an element OR it's an update
                // AND we already know it's possible it could have changed
                // this updates the element's css classes, attrs, props, listeners, etc.
                updateElement(oldVNode, newVNode, isSvgMode);
            }
        }
        if ( oldChildren !== null && newChildren !== null) {
            // looks like there's child vnodes for both the old and new vnodes
            updateChildren(elm, oldChildren, newVNode, newChildren);
        }
        else if (newChildren !== null) {
            // no old child vnodes, but there are new child vnodes to add
            if ( oldVNode.$text$ !== null) {
                // the old vnode was text, so be sure to clear it out
                elm.textContent = '';
            }
            // add the new vnode children
            addVnodes(elm, null, newVNode, newChildren, 0, newChildren.length - 1);
        }
        else if ( oldChildren !== null) {
            // no new child vnodes, but there are old child vnodes to remove
            removeVnodes(oldChildren, 0, oldChildren.length - 1);
        }
    }
    else if ( oldVNode.$text$ !== newVNode.$text$) {
        // update the text content for the text only vnode
        // and also only if the text is different than before
        elm.data = newVNode.$text$;
    }
};
const renderVdom = (hostElm, hostRef, cmpMeta, renderFnResults) => {
    hostTagName = hostElm.tagName;
    const oldVNode = hostRef.$vnode$ || newVNode(null, null);
    const rootVnode = isHost(renderFnResults)
        ? renderFnResults
        : h(null, null, renderFnResults);
    rootVnode.$tag$ = null;
    rootVnode.$flags$ |= 4 /* isHost */;
    hostRef.$vnode$ = rootVnode;
    rootVnode.$elm$ = oldVNode.$elm$ = ( hostElm.shadowRoot || hostElm );
    {
        scopeId = hostElm['s-sc'];
    }
    // synchronous patch
    patch(oldVNode, rootVnode);
};
const attachToAncestor = (hostRef, ancestorComponent) => {
    if ( ancestorComponent && !hostRef.$onRenderResolve$) {
        ancestorComponent['s-p'].push(new Promise(r => hostRef.$onRenderResolve$ = r));
    }
};
const scheduleUpdate = (elm, hostRef, cmpMeta, isInitialLoad) => {
    {
        hostRef.$flags$ |= 16 /* isQueuedForUpdate */;
    }
    if ( hostRef.$flags$ & 4 /* isWaitingForChildren */) {
        hostRef.$flags$ |= 512 /* needsRerender */;
        return;
    }
    const endSchedule = createTime('scheduleUpdate', cmpMeta.$tagName$);
    const ancestorComponent = hostRef.$ancestorComponent$;
    const instance =  hostRef.$lazyInstance$ ;
    const update = () => updateComponent(elm, hostRef, cmpMeta, instance, isInitialLoad);
    attachToAncestor(hostRef, ancestorComponent);
    let promise;
    endSchedule();
    // there is no ancestorc omponent or the ancestor component
    // has already fired off its lifecycle update then
    // fire off the initial update
    return then(promise,  () => writeTask(update)
        );
};
const updateComponent = (elm, hostRef, cmpMeta, instance, isInitialLoad) => {
    // updateComponent
    const endUpdate = createTime('update', cmpMeta.$tagName$);
    const rc = elm['s-rc'];
    if ( isInitialLoad) {
        // DOM WRITE!
        attachStyles(elm, cmpMeta);
    }
    const endRender = createTime('render', cmpMeta.$tagName$);
    {
        {
            try {
                // looks like we've got child nodes to render into this host element
                // or we need to update the css class/attrs on the host element
                // DOM WRITE!
                renderVdom(elm, hostRef, cmpMeta,  instance.render() );
            }
            catch (e) {
                consoleError(e);
            }
        }
    }
    {
        hostRef.$flags$ &= ~16 /* isQueuedForUpdate */;
    }
    {
        try {
            // manually connected child components during server-side hydrate
            serverSideConnected(elm);
            if (isInitialLoad && (cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */)) {
                // using only during server-side hydrate
                elm['s-sd'] = true;
            }
        }
        catch (e) {
            consoleError(e);
        }
    }
    {
        hostRef.$flags$ |= 2 /* hasRendered */;
    }
    if ( rc) {
        // ok, so turns out there are some child host elements
        // waiting on this parent element to load
        // let's fire off all update callbacks waiting
        rc.forEach(cb => cb());
        elm['s-rc'] = undefined;
    }
    endRender();
    endUpdate();
    {
        const childrenPromises = elm['s-p'];
        const postUpdate = () => postUpdateComponent(elm, hostRef, cmpMeta);
        if (childrenPromises.length === 0) {
            postUpdate();
        }
        else {
            Promise.all(childrenPromises).then(postUpdate);
            hostRef.$flags$ |= 4 /* isWaitingForChildren */;
            childrenPromises.length = 0;
        }
    }
};
const postUpdateComponent = (elm, hostRef, cmpMeta) => {
    const endPostUpdate = createTime('postUpdate', cmpMeta.$tagName$);
    const ancestorComponent = hostRef.$ancestorComponent$;
    if (!(hostRef.$flags$ & 64 /* hasLoadedComponent */)) {
        hostRef.$flags$ |= 64 /* hasLoadedComponent */;
        {
            // DOM WRITE!
            // add the css class that this element has officially hydrated
            elm.classList.add(HYDRATED_CLASS);
        }
        endPostUpdate();
        {
            hostRef.$onReadyResolve$(elm);
            if (!ancestorComponent) {
                appDidLoad();
            }
        }
    }
    else {
        endPostUpdate();
    }
    // load events fire from bottom to top
    // the deepest elements load first then bubbles up
    {
        if (hostRef.$onRenderResolve$) {
            hostRef.$onRenderResolve$();
            hostRef.$onRenderResolve$ = undefined;
        }
        if (hostRef.$flags$ & 512 /* needsRerender */) {
            nextTick(() => scheduleUpdate(elm, hostRef, cmpMeta, false));
        }
        hostRef.$flags$ &= ~(4 /* isWaitingForChildren */ | 512 /* needsRerender */);
    }
    // ( •_•)
    // ( •_•)>⌐■-■
    // (⌐■_■)
};
const appDidLoad = (who) => {
    // on appload
    // we have finish the first big initial render
    {
        doc.documentElement.classList.add(HYDRATED_CLASS);
    }
};
const then = (promise, thenFn) => {
    return promise && promise.then ? promise.then(thenFn) : thenFn();
};
const serverSideConnected = (elm) => {
    const children = elm.children;
    if (children != null) {
        for (let i = 0, ii = children.length; i < ii; i++) {
            const childElm = children[i];
            if (typeof childElm.connectedCallback === 'function') {
                childElm.connectedCallback();
            }
            serverSideConnected(childElm);
        }
    }
};
const getValue = (ref, propName) => getHostRef(ref).$instanceValues$.get(propName);
const setValue = (ref, propName, newVal, cmpMeta) => {
    // check our new property value against our internal value
    const hostRef = getHostRef(ref);
    const elm =  hostRef.$hostElement$ ;
    const oldVal = hostRef.$instanceValues$.get(propName);
    const flags = hostRef.$flags$;
    const instance =  hostRef.$lazyInstance$ ;
    newVal = parsePropertyValue(newVal, cmpMeta.$members$[propName][0]);
    if (newVal !== oldVal && ( !(flags & 8 /* isConstructingInstance */) || oldVal === undefined)) {
        // gadzooks! the property's value has changed!!
        // set our new value!
        hostRef.$instanceValues$.set(propName, newVal);
        if ( instance) {
            if ( (flags & (2 /* hasRendered */ | 16 /* isQueuedForUpdate */)) === 2 /* hasRendered */) {
                // looks like this value actually changed, so we've got work to do!
                // but only if we've already rendered, otherwise just chill out
                // queue that we need to do an update, but don't worry about queuing
                // up millions cuz this function ensures it only runs once
                scheduleUpdate(elm, hostRef, cmpMeta, false);
            }
        }
    }
};
const proxyComponent = (Cstr, cmpMeta, flags) => {
    if ( cmpMeta.$members$) {
        // It's better to have a const than two Object.entries()
        const members = Object.entries(cmpMeta.$members$);
        const prototype = Cstr.prototype;
        members.forEach(([memberName, [memberFlags]]) => {
            if ( ((memberFlags & 31 /* Prop */) ||
                (( flags & 2 /* proxyState */) &&
                    (memberFlags & 32 /* State */)))) {
                // proxyComponent - prop
                Object.defineProperty(prototype, memberName, {
                    get() {
                        // proxyComponent, get value
                        return getValue(this, memberName);
                    },
                    set(newValue) {
                        // proxyComponent, set value
                        setValue(this, memberName, newValue, cmpMeta);
                    },
                    configurable: true,
                    enumerable: true
                });
            }
        });
        if ( ( flags & 1 /* isElementConstructor */)) {
            const attrNameToPropName = new Map();
            prototype.attributeChangedCallback = function (attrName, _oldValue, newValue) {
                plt.jmp(() => {
                    const propName = attrNameToPropName.get(attrName);
                    this[propName] = newValue === null && typeof this[propName] === 'boolean'
                        ? false
                        : newValue;
                });
            };
            // create an array of attributes to observe
            // and also create a map of html attribute name to js property name
            Cstr.observedAttributes = members
                .filter(([_, m]) => m[0] & 15 /* HasAttribute */) // filter to only keep props that should match attributes
                .map(([propName, m]) => {
                const attrName = m[1] || propName;
                attrNameToPropName.set(attrName, propName);
                return attrName;
            });
        }
    }
    return Cstr;
};
const initializeComponent = async (elm, hostRef, cmpMeta, hmrVersionId, Cstr) => {
    // initializeComponent
    if ( (hostRef.$flags$ & 32 /* hasInitializedComponent */) === 0) {
        // we haven't initialized this element yet
        hostRef.$flags$ |= 32 /* hasInitializedComponent */;
        if ( hostRef.$modeName$) {
            elm.setAttribute('s-mode', hostRef.$modeName$);
        }
        {
            // lazy loaded components
            // request the component's implementation to be
            // wired up with the host element
            Cstr = loadModule(cmpMeta);
            if (Cstr.then) {
                // Await creates a micro-task avoid if possible
                const endLoad = uniqueTime();
                Cstr = await Cstr;
                endLoad();
            }
            if ( !Cstr.isProxied) {
                proxyComponent(Cstr, cmpMeta, 2 /* proxyState */);
                Cstr.isProxied = true;
            }
            const endNewInstance = createTime('createInstance', cmpMeta.$tagName$);
            // ok, time to construct the instance
            // but let's keep track of when we start and stop
            // so that the getters/setters don't incorrectly step on data
            {
                hostRef.$flags$ |= 8 /* isConstructingInstance */;
            }
            // construct the lazy-loaded component implementation
            // passing the hostRef is very important during
            // construction in order to directly wire together the
            // host element and the lazy-loaded instance
            try {
                new Cstr(hostRef);
            }
            catch (e) {
                consoleError(e);
            }
            {
                hostRef.$flags$ &= ~8 /* isConstructingInstance */;
            }
            endNewInstance();
        }
        const scopeId =  getScopeId(cmpMeta.$tagName$);
        if ( !styles.has(scopeId) && Cstr.style) {
            const endRegisterStyles = createTime('registerStyles', cmpMeta.$tagName$);
            // this component has styles but we haven't registered them yet
            let style = Cstr.style;
            registerStyle(scopeId, style);
            endRegisterStyles();
        }
    }
    // we've successfully created a lazy instance
    const ancestorComponent = hostRef.$ancestorComponent$;
    const schedule = () => scheduleUpdate(elm, hostRef, cmpMeta, true);
    if ( ancestorComponent && ancestorComponent['s-rc']) {
        // this is the intial load and this component it has an ancestor component
        // but the ancestor component has NOT fired its will update lifecycle yet
        // so let's just cool our jets and wait for the ancestor to continue first
        // this will get fired off when the ancestor component
        // finally gets around to rendering its lazy self
        // fire off the initial update
        ancestorComponent['s-rc'].push(schedule);
    }
    else {
        schedule();
    }
};
const connectedCallback = (elm, cmpMeta) => {
    if ((plt.$flags$ & 1 /* isTmpDisconnected */) === 0) {
        const endConnected = createTime('connectedCallback', cmpMeta.$tagName$);
        // connectedCallback
        const hostRef = getHostRef(elm);
        if (!(hostRef.$flags$ & 1 /* hasConnected */)) {
            // first time this component has connected
            hostRef.$flags$ |= 1 /* hasConnected */;
            {
                // find the first ancestor component (if there is one) and register
                // this component as one of the actively loading child components for its ancestor
                let ancestorComponent = elm;
                while ((ancestorComponent = (ancestorComponent.parentNode || ancestorComponent.host))) {
                    // climb up the ancestors looking for the first
                    // component that hasn't finished its lifecycle update yet
                    if (
                        (ancestorComponent['s-p'])) {
                        // we found this components first ancestor component
                        // keep a reference to this component's ancestor component
                        attachToAncestor(hostRef, (hostRef.$ancestorComponent$ = ancestorComponent));
                        break;
                    }
                }
            }
            {
                initializeComponent(elm, hostRef, cmpMeta);
            }
        }
        endConnected();
    }
};
const createEvent = (ref, name, flags) => {
    const elm = getElement(ref);
    return {
        emit: (detail) => {
            const ev = new ( win.CustomEvent )(name, {
                bubbles: !!(flags & 4 /* Bubbles */),
                composed: !!(flags & 2 /* Composed */),
                cancelable: !!(flags & 1 /* Cancellable */),
                detail
            });
            elm.dispatchEvent(ev);
            return ev;
        }
    };
};
const getElement = (ref) =>  getHostRef(ref).$hostElement$ ;
const insertVdomAnnotations = (doc) => {
    if (doc != null) {
        const docData = {
            hostIds: 0,
            rootLevelIds: 0
        };
        const orgLocationNodes = [];
        parseVNodeAnnotations(doc, doc.body, docData, orgLocationNodes);
        orgLocationNodes.forEach(orgLocationNode => {
            if (orgLocationNode != null) {
                const nodeRef = orgLocationNode['s-nr'];
                let hostId = nodeRef['s-host-id'];
                let nodeId = nodeRef['s-node-id'];
                let childId = `${hostId}.${nodeId}`;
                if (hostId == null) {
                    hostId = 0;
                    docData.rootLevelIds++;
                    nodeId = docData.rootLevelIds;
                    childId = `${hostId}.${nodeId}`;
                    if (nodeRef.nodeType === 1 /* ElementNode */) {
                        nodeRef.setAttribute(HYDRATE_CHILD_ID, childId);
                    }
                    else if (nodeRef.nodeType === 3 /* TextNode */) {
                        if (hostId === 0) {
                            const textContent = nodeRef.nodeValue.trim();
                            if (textContent === '') {
                                // useless whitespace node at the document root
                                orgLocationNode.remove();
                                return;
                            }
                        }
                        const commentBeforeTextNode = doc.createComment(childId);
                        commentBeforeTextNode.nodeValue = `${TEXT_NODE_ID}.${childId}`;
                        nodeRef.parentNode.insertBefore(commentBeforeTextNode, nodeRef);
                    }
                }
                let orgLocationNodeId = `${ORG_LOCATION_ID}.${childId}`;
                const orgLocationParentNode = orgLocationNode.parentElement;
                if (orgLocationParentNode && orgLocationParentNode['s-sd']) {
                    // ending with a . means that the parent element
                    // of this node's original location is a shadow dom element
                    // and this node is apart of the root level light dom
                    orgLocationNodeId += `.`;
                }
                orgLocationNode.nodeValue = orgLocationNodeId;
            }
        });
    }
};
const parseVNodeAnnotations = (doc, node, docData, orgLocationNodes) => {
    if (node == null) {
        return;
    }
    if (node['s-nr'] != null) {
        orgLocationNodes.push(node);
    }
    if (node.nodeType === 1 /* ElementNode */) {
        node.childNodes.forEach(childNode => {
            const hostRef = getHostRef(childNode);
            if (hostRef != null) {
                const cmpData = {
                    nodeIds: 0
                };
                insertVNodeAnnotations(doc, childNode, hostRef.$vnode$, docData, cmpData);
            }
            parseVNodeAnnotations(doc, childNode, docData, orgLocationNodes);
        });
    }
};
const insertVNodeAnnotations = (doc, hostElm, vnode, docData, cmpData) => {
    if (vnode != null) {
        const hostId = ++docData.hostIds;
        hostElm.setAttribute(HYDRATE_ID, hostId);
        if (hostElm['s-cr'] != null) {
            hostElm['s-cr'].nodeValue = `${CONTENT_REF_ID}.${hostId}`;
        }
        if (vnode.$children$ != null) {
            const depth = 0;
            vnode.$children$.forEach((vnodeChild, index) => {
                insertChildVNodeAnnotations(doc, vnodeChild, cmpData, hostId, depth, index);
            });
        }
    }
};
const insertChildVNodeAnnotations = (doc, vnodeChild, cmpData, hostId, depth, index) => {
    const childElm = vnodeChild.$elm$;
    if (childElm == null) {
        return;
    }
    const nodeId = cmpData.nodeIds++;
    const childId = `${hostId}.${nodeId}.${depth}.${index}`;
    childElm['s-host-id'] = hostId;
    childElm['s-node-id'] = nodeId;
    if (childElm.nodeType === 1 /* ElementNode */) {
        childElm.setAttribute(HYDRATE_CHILD_ID, childId);
    }
    else if (childElm.nodeType === 3 /* TextNode */) {
        const parentNode = childElm.parentNode;
        if (parentNode.nodeName !== 'STYLE') {
            const textNodeId = `${TEXT_NODE_ID}.${childId}`;
            const commentBeforeTextNode = doc.createComment(textNodeId);
            parentNode.insertBefore(commentBeforeTextNode, childElm);
        }
    }
    else if (childElm.nodeType === 8 /* CommentNode */) {
        if (childElm['s-sr']) {
            const slotName = (childElm['s-sn'] || '');
            const slotNodeId = `${SLOT_NODE_ID}.${childId}.${slotName}`;
            childElm.nodeValue = slotNodeId;
        }
    }
    if (vnodeChild.$children$ != null) {
        const childDepth = depth + 1;
        vnodeChild.$children$.forEach((vnode, index) => {
            insertChildVNodeAnnotations(doc, vnode, cmpData, hostId, childDepth, index);
        });
    }
};

function proxyHostElement(elm, cmpMeta) {
    if (typeof elm.componentOnReady !== 'function') {
        elm.componentOnReady = componentOnReady;
    }
    if (typeof elm.forceUpdate !== 'function') {
        elm.forceUpdate = forceUpdate;
    }
    if (cmpMeta.$members$ != null) {
        const hostRef = getHostRef(elm);
        const members = Object.entries(cmpMeta.$members$);
        members.forEach(([memberName, m]) => {
            const memberFlags = m[0];
            if (memberFlags & 31) {
                const attributeName = (m[1] || memberName);
                const attrValue = elm.getAttribute(attributeName);
                if (attrValue != null) {
                    const parsedAttrValue = parsePropertyValue(attrValue, memberFlags);
                    hostRef.$instanceValues$.set(memberName, parsedAttrValue);
                }
                const ownValue = elm[memberName];
                if (ownValue !== undefined) {
                    hostRef.$instanceValues$.set(memberName, ownValue);
                    delete elm[memberName];
                }
                Object.defineProperty(elm, memberName, {
                    get() {
                        return getValue(this, memberName);
                    },
                    set(newValue) {
                        setValue(this, memberName, newValue, cmpMeta);
                    },
                    configurable: true,
                    enumerable: true
                });
            }
            else if (memberFlags & 64) {
                Object.defineProperty(elm, memberName, {
                    value() {
                        const ref = getHostRef(this);
                        const args = arguments;
                        return ref.$onInstancePromise$.then(() => ref.$lazyInstance$[memberName].apply(ref.$lazyInstance$, args)).catch(consoleError);
                    }
                });
            }
        });
    }
}
function componentOnReady() {
    return getHostRef(this).$onReadyPromise$;
}
function forceUpdate() { }

function hydrateApp(win, opts, results, afterHydrate, resolve) {
    const connectedElements = new Set();
    const createdElements = new Set();
    const orgDocumentCreateElement = win.document.createElement;
    const orgDocumentCreateElementNS = win.document.createElementNS;
    const resolved = Promise.resolve();
    let tmrId;
    function hydratedComplete() {
        global.clearTimeout(tmrId);
        createdElements.clear();
        connectedElements.clear();
        try {
            if (opts.clientHydrateAnnotations) {
                insertVdomAnnotations(win.document);
            }
            win.document.createElement = orgDocumentCreateElement;
            win.document.createElementNS = orgDocumentCreateElementNS;
        }
        catch (e) {
            renderCatchError(opts, results, e);
        }
        afterHydrate(win, opts, results, resolve);
    }
    function hydratedError(err) {
        renderCatchError(opts, results, err);
        hydratedComplete();
    }
    function timeoutExceeded() {
        hydratedError(`Hydrate exceeded timeout`);
    }
    try {
        function patchedConnectedCallback() {
            return connectElement(this);
        }
        function patchElement(elm) {
            const tagName = elm.nodeName.toLowerCase();
            if (tagName.includes('-')) {
                const Cstr = getComponent(tagName);
                if (Cstr != null && Cstr.cmpMeta != null) {
                    createdElements.add(elm);
                    elm.connectedCallback = patchedConnectedCallback;
                    registerHost(elm);
                    proxyHostElement(elm, Cstr.cmpMeta);
                }
            }
        }
        function patchChild(elm) {
            if (elm != null && elm.nodeType === 1) {
                patchElement(elm);
                const children = elm.children;
                for (let i = 0, ii = children.length; i < ii; i++) {
                    patchChild(children[i]);
                }
            }
        }
        function connectElement(elm) {
            createdElements.delete(elm);
            if (elm != null && elm.nodeType === 1 && results.hydratedCount < opts.maxHydrateCount && shouldHydrate(elm)) {
                const tagName = elm.nodeName.toLowerCase();
                if (tagName.includes('-') && !connectedElements.has(elm)) {
                    connectedElements.add(elm);
                    return hydrateComponent(win, results, tagName, elm);
                }
            }
            return resolved;
        }
        function waitLoop() {
            const toConnect = Array.from(createdElements).filter(elm => elm.parentElement);
            if (toConnect.length > 0) {
                return Promise.all(toConnect.map(connectElement))
                    .then(waitLoop);
            }
            return resolved;
        }
        win.document.createElement = function patchedCreateElement(tagName) {
            const elm = orgDocumentCreateElement.call(win.document, tagName);
            patchElement(elm);
            return elm;
        };
        win.document.createElementNS = function patchedCreateElement(namespaceURI, tagName) {
            const elm = orgDocumentCreateElementNS.call(win.document, namespaceURI, tagName);
            patchElement(elm);
            return elm;
        };
        tmrId = global.setTimeout(timeoutExceeded, opts.timeout);
        plt.$resourcesUrl$ = new URL(opts.resourcesUrl || './', doc.baseURI).href;
        patchChild(win.document.body);
        waitLoop()
            .then(hydratedComplete)
            .catch(hydratedError);
    }
    catch (e) {
        hydratedError(e);
    }
}
async function hydrateComponent(win, results, tagName, elm) {
    const Cstr = getComponent(tagName);
    if (Cstr != null) {
        const cmpMeta = Cstr.cmpMeta;
        if (cmpMeta != null) {
            try {
                connectedCallback(elm, cmpMeta);
                await elm.componentOnReady();
                results.hydratedCount++;
                const ref = getHostRef(elm);
                const modeName = !ref.$modeName$ ? '$' : ref.$modeName$;
                if (!results.components.some(c => c.tag === tagName && c.mode === modeName)) {
                    results.components.push({
                        tag: tagName,
                        mode: modeName,
                        count: 0,
                        depth: -1,
                    });
                }
            }
            catch (e) {
                win.console.error(e);
            }
        }
    }
}
function shouldHydrate(elm) {
    if (elm.nodeType === 9) {
        return true;
    }
    if (NO_HYDRATE_TAGS.has(elm.nodeName)) {
        return false;
    }
    if (elm.hasAttribute('no-prerender')) {
        return false;
    }
    const parentNode = elm.parentNode;
    if (parentNode == null) {
        return true;
    }
    return shouldHydrate(parentNode);
}
const NO_HYDRATE_TAGS = new Set([
    'CODE',
    'HEAD',
    'IFRAME',
    'INPUT',
    'OBJECT',
    'OUTPUT',
    'NOSCRIPT',
    'PRE',
    'SCRIPT',
    'SELECT',
    'STYLE',
    'TEMPLATE',
    'TEXTAREA'
]);
function renderCatchError(opts, results, err) {
    const diagnostic = {
        level: 'error',
        type: 'build',
        header: 'Hydrate Error',
        messageText: '',
        relFilePath: null,
        absFilePath: null,
        lines: []
    };
    if (opts.url) {
        try {
            const u = new URL(opts.url);
            if (u.pathname !== '/') {
                diagnostic.header += ': ' + u.pathname;
            }
        }
        catch (e) { }
    }
    if (err != null) {
        if (err.stack != null) {
            diagnostic.messageText = err.stack.toString();
        }
        else if (err.message != null) {
            diagnostic.messageText = err.message.toString();
        }
        else {
            diagnostic.messageText = err.toString();
        }
    }
    results.diagnostics.push(diagnostic);
}

const cstrs = new Map();
const loadModule = (cmpMeta, _hostRef, _hmrVersionId) => {
    return cstrs.get(cmpMeta.$tagName$);
};
const getComponent = (tagName) => {
    return cstrs.get(tagName);
};
const isMemberInElement = (elm, memberName) => {
    if (elm != null) {
        if (memberName in elm) {
            return true;
        }
        const nodeName = elm.nodeName;
        if (nodeName) {
            const hostRef = getComponent(nodeName.toLowerCase());
            if (hostRef != null && hostRef.cmpMeta != null && hostRef.cmpMeta.$members$ != null) {
                return memberName in hostRef.cmpMeta.$members$;
            }
        }
    }
    return false;
};
const registerComponents = (Cstrs) => {
    Cstrs.forEach(Cstr => {
        cstrs.set(Cstr.cmpMeta.$tagName$, Cstr);
    });
};
const win = window;
const doc = win.document;
const writeTask = (cb) => {
    process.nextTick(() => {
        try {
            cb();
        }
        catch (e) {
            consoleError(e);
        }
    });
};
const nextTick = (cb) => Promise.resolve().then(cb);
const consoleError = (e) => {
    if (e != null) {
        console.error(e.stack || e.message || e);
    }
};
const plt = {
    $flags$: 0,
    $resourcesUrl$: '',
    jmp: (h) => h(),
    raf: (h) => requestAnimationFrame(h),
    ael: (el, eventName, listener, opts) => el.addEventListener(eventName, listener, opts),
    rel: (el, eventName, listener, opts) => el.removeEventListener(eventName, listener, opts),
};
const hostRefs = new WeakMap();
const getHostRef = (ref) => hostRefs.get(ref);
const registerInstance = (lazyInstance, hostRef) => hostRefs.set(hostRef.$lazyInstance$ = lazyInstance, hostRef);
const registerHost = (elm) => {
    const hostRef = {
        $flags$: 0,
        $hostElement$: elm,
        $instanceValues$: new Map(),
        $renderCount$: 0
    };
    hostRef.$onInstancePromise$ = new Promise(r => hostRef.$onInstanceResolve$ = r);
    hostRef.$onReadyPromise$ = new Promise(r => hostRef.$onReadyResolve$ = r);
    elm['s-p'] = [];
    elm['s-rc'] = [];
    return hostRefs.set(elm, hostRef);
};
const styles = new Map();

class ComponentWithEvent {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.message = "";
        this.greeting = "Hello";
        this.handleClick = () => {
            this.newMessage.emit(`${this.greeting} ${this.message}`);
        };
        this.newMessage = createEvent(this, "new-message", 7);
    }
    render() {
        return (h("div", null, h("label", null, "Greeting"), h("input", { class: "mb-shadow-4", type: "text", onChange: (e) => (this.greeting = e.target.value), value: this.greeting }), h("h2", { class: "mb-shadow-4" }, "Greeting message will be ", this.greeting, " ", this.message), h("button", { onClick: this.handleClick }, "Announce")));
    }
    static get cmpMeta() { return {
        "$flags$": 9,
        "$tagName$": "component-with-event",
        "$members$": {
            "message": [1],
            "greeting": [32]
        },
        "$listeners$": undefined,
        "$lazyBundleIds$": "-",
        "$attrsToReflect$": []
    }; }
}

class MyComponent {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return h("div", null, "Child - ", this.childMessage, " ");
    }
    static get cmpMeta() { return {
        "$flags$": 2,
        "$tagName$": "child-component",
        "$members$": {
            "childMessage": [1, "child-message"]
        },
        "$listeners$": undefined,
        "$lazyBundleIds$": "-",
        "$attrsToReflect$": []
    }; }
}

function format(first, middle, last) {
    return ((first || '') +
        (middle ? ` ${middle}` : '') +
        (last ? ` ${last}` : ''));
}

class MyComponent$1 {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.count = this.initialCount || 100;
    }
    async click() {
        console.log("click", this.count);
        this.count++;
    }
    getText() {
        return format(this.first, this.middle, this.last);
    }
    render() {
        return (h(Host, null, "Hello, World! I'm ", this.getText(), h("div", null, h("h3", null, "Change Local State"), this.count, " -", " ", h("button", { class: "green", onClick: () => this.click() }, "Click"))));
    }
    static get cmpMeta() { return {
        "$flags$": 2,
        "$tagName$": "my-component",
        "$members$": {
            "first": [1],
            "middle": [1],
            "last": [1],
            "initialCount": [2, "initial-count"],
            "count": [32]
        },
        "$listeners$": undefined,
        "$lazyBundleIds$": "-",
        "$attrsToReflect$": []
    }; }
}

class MyComponent$2 {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", null, h("div", null, "Parent - ", this.parentMessage), h("div", null, h("child-component", { childMessage: this.childMessage }))));
    }
    static get cmpMeta() { return {
        "$flags$": 2,
        "$tagName$": "parent-component",
        "$members$": {
            "parentMessage": [1, "parent-message"],
            "childMessage": [1, "child-message"]
        },
        "$listeners$": undefined,
        "$lazyBundleIds$": "-",
        "$attrsToReflect$": []
    }; }
}

const cmps = [
  ComponentWithEvent,
  MyComponent,
  MyComponent$1,
  MyComponent$2,
];
registerComponents(cmps);
styles.set('sc-component-with-event','/*!\@:host()*/.sc-component-with-event-h{display:block}/*!\@.mb-shadow-4*/.mb-shadow-4.sc-component-with-event{margin-bottom:1rem}');
styles.set('sc-child-component','');
styles.set('sc-my-component','.sc-my-component-h{color:#303030}h3.sc-my-component{margin-top:2rem}.blue.sc-my-component{color:#00f}.green.sc-my-component{color:green}.todo-item.sc-my-component{padding:10px;border-bottom:1px solid var(--todo-item-border,#000)}');
styles.set('sc-parent-component','');

exports.hydrateApp = hydrateApp;


    hydrateApp(window, opts, results, afterHydrate, resolve);
  }

  hydrateAppClosure(win);
}

const CONTENT_REF_ID = 'r';
const ORG_LOCATION_ID = 'o';
const SLOT_NODE_ID = 's';
const TEXT_NODE_ID = 't';
const XLINK_NS = 'http://www.w3.org/1999/xlink';

class MockAttributeMap {
    constructor(caseInsensitive = false) {
        this.caseInsensitive = caseInsensitive;
        this.items = [];
    }
    get length() {
        return this.items.length;
    }
    item(index) {
        return this.items[index] || null;
    }
    setNamedItem(attr) {
        attr.namespaceURI = null;
        this.setNamedItemNS(attr);
    }
    setNamedItemNS(attr) {
        if (attr != null && attr.value != null) {
            attr.value = String(attr.value);
        }
        const existingAttr = this.items.find(a => a.name === attr.name && a.namespaceURI === attr.namespaceURI);
        if (existingAttr != null) {
            existingAttr.value = attr.value;
        }
        else {
            this.items.push(attr);
        }
    }
    getNamedItem(attrName) {
        if (this.caseInsensitive) {
            attrName = attrName.toLowerCase();
        }
        return this.getNamedItemNS(null, attrName);
    }
    getNamedItemNS(namespaceURI, attrName) {
        namespaceURI = getNamespaceURI(namespaceURI);
        return this.items.find(attr => attr.name === attrName && getNamespaceURI(attr.namespaceURI) === namespaceURI) || null;
    }
    removeNamedItem(attr) {
        this.removeNamedItemNS(attr);
    }
    removeNamedItemNS(attr) {
        for (let i = 0, ii = this.items.length; i < ii; i++) {
            if (this.items[i].name === attr.name && this.items[i].namespaceURI === attr.namespaceURI) {
                this.items.splice(i, 1);
                break;
            }
        }
    }
}
function getNamespaceURI(namespaceURI) {
    return namespaceURI === XLINK_NS ? null : namespaceURI;
}
function cloneAttributes(srcAttrs, sortByName = false) {
    const dstAttrs = new MockAttributeMap(srcAttrs.caseInsensitive);
    if (srcAttrs != null) {
        const attrLen = srcAttrs.length;
        if (sortByName && attrLen > 1) {
            const sortedAttrs = [];
            for (let i = 0; i < attrLen; i++) {
                const srcAttr = srcAttrs.item(i);
                const dstAttr = new MockAttr(srcAttr.name, srcAttr.value, srcAttr.namespaceURI);
                sortedAttrs.push(dstAttr);
            }
            sortedAttrs.sort(sortAttributes).forEach(attr => {
                dstAttrs.setNamedItemNS(attr);
            });
        }
        else {
            for (let i = 0; i < attrLen; i++) {
                const srcAttr = srcAttrs.item(i);
                const dstAttr = new MockAttr(srcAttr.name, srcAttr.value, srcAttr.namespaceURI);
                dstAttrs.setNamedItemNS(dstAttr);
            }
        }
    }
    return dstAttrs;
}
function sortAttributes(a, b) {
    if (a.name < b.name)
        return -1;
    if (a.name > b.name)
        return 1;
    return 0;
}
class MockAttr {
    constructor(attrName, attrValue, namespaceURI = null) {
        this._name = attrName;
        this._value = String(attrValue);
        this._namespaceURI = namespaceURI;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get value() {
        return this._value;
    }
    set value(value) {
        this._value = String(value);
    }
    get nodeName() {
        return this._name;
    }
    set nodeName(value) {
        this._name = value;
    }
    get nodeValue() {
        return this._value;
    }
    set nodeValue(value) {
        this._value = String(value);
    }
    get namespaceURI() {
        return this._namespaceURI;
    }
    set namespaceURI(namespaceURI) {
        this._namespaceURI = namespaceURI;
    }
}

class MockCustomElementRegistry {
    constructor(win) {
        this.win = win;
    }
    define(tagName, cstr, options) {
        if (tagName.toLowerCase() !== tagName) {
            throw new Error(`Failed to execute 'define' on 'CustomElementRegistry': "${tagName}" is not a valid custom element name`);
        }
        if (this.__registry == null) {
            this.__registry = new Map();
        }
        this.__registry.set(tagName, { cstr, options });
        if (this.__whenDefined != null) {
            const whenDefinedResolveFns = this.__whenDefined.get(tagName);
            if (whenDefinedResolveFns != null) {
                whenDefinedResolveFns.forEach(whenDefinedResolveFn => {
                    whenDefinedResolveFn();
                });
                whenDefinedResolveFns.length = 0;
                this.__whenDefined.delete(tagName);
            }
        }
        const doc = this.win.document;
        if (doc != null) {
            const hosts = doc.querySelectorAll(tagName);
            hosts.forEach(host => {
                if (upgradedElements.has(host) === false) {
                    tempDisableCallbacks.add(doc);
                    const upgradedCmp = createCustomElement(this, doc, tagName);
                    for (let i = 0; i < host.childNodes.length; i++) {
                        const childNode = host.childNodes[i];
                        childNode.remove();
                        upgradedCmp.appendChild(childNode);
                    }
                    tempDisableCallbacks.delete(doc);
                    if (proxyElements.has(host)) {
                        proxyElements.set(host, upgradedCmp);
                    }
                }
                fireConnectedCallback(host);
            });
        }
    }
    get(tagName) {
        if (this.__registry != null) {
            const def = this.__registry.get(tagName.toLowerCase());
            if (def != null) {
                return def.cstr;
            }
        }
        return undefined;
    }
    upgrade(_rootNode) {
        //
    }
    clear() {
        if (this.__registry != null) {
            this.__registry.clear();
        }
        if (this.__whenDefined != null) {
            this.__whenDefined.clear();
        }
    }
    whenDefined(tagName) {
        tagName = tagName.toLowerCase();
        if (this.__registry != null && this.__registry.has(tagName) === true) {
            return Promise.resolve();
        }
        return new Promise(resolve => {
            if (this.__whenDefined == null) {
                this.__whenDefined = new Map();
            }
            let whenDefinedResolveFns = this.__whenDefined.get(tagName);
            if (whenDefinedResolveFns == null) {
                whenDefinedResolveFns = [];
                this.__whenDefined.set(tagName, whenDefinedResolveFns);
            }
            whenDefinedResolveFns.push(resolve);
        });
    }
}
function createCustomElement(customElements, ownerDocument, tagName) {
    const Cstr = customElements.get(tagName);
    if (Cstr != null) {
        const cmp = new Cstr(ownerDocument);
        cmp.nodeName = tagName.toUpperCase();
        upgradedElements.add(cmp);
        return cmp;
    }
    const host = new Proxy({}, {
        get(obj, prop) {
            const elm = proxyElements.get(host);
            if (elm != null) {
                return elm[prop];
            }
            return obj[prop];
        },
        set(obj, prop, val) {
            const elm = proxyElements.get(host);
            if (elm != null) {
                elm[prop] = val;
            }
            else {
                obj[prop] = val;
            }
            return true;
        },
        has(obj, prop) {
            const elm = proxyElements.get(host);
            if (prop in elm) {
                return true;
            }
            if (prop in obj) {
                return true;
            }
            return false;
        }
    });
    const elm = new MockHTMLElement(ownerDocument, tagName);
    proxyElements.set(host, elm);
    return host;
}
const proxyElements = new WeakMap();
const upgradedElements = new WeakSet();
function connectNode(ownerDocument, node) {
    node.ownerDocument = ownerDocument;
    if (node.nodeType === 1 /* ELEMENT_NODE */) {
        if (ownerDocument != null && node.nodeName.includes('-')) {
            const win = ownerDocument.defaultView;
            if (win != null && win.customElements != null) {
                if (typeof node.connectedCallback === 'function' && node.isConnected) {
                    fireConnectedCallback(node);
                }
            }
            const shadowRoot = node.shadowRoot;
            if (shadowRoot != null) {
                shadowRoot.childNodes.forEach(childNode => {
                    connectNode(ownerDocument, childNode);
                });
            }
        }
        node.childNodes.forEach(childNode => {
            connectNode(ownerDocument, childNode);
        });
    }
    else {
        node.childNodes.forEach(childNode => {
            childNode.ownerDocument = ownerDocument;
        });
    }
}
function fireConnectedCallback(node) {
    if (typeof node.connectedCallback === 'function') {
        if (tempDisableCallbacks.has(node.ownerDocument) === false) {
            try {
                node.connectedCallback();
            }
            catch (e) {
                console.error(e);
            }
        }
    }
}
function disconnectNode(node) {
    if (node.nodeType === 1 /* ELEMENT_NODE */) {
        if (node.nodeName.includes('-') === true && typeof node.disconnectedCallback === 'function') {
            if (tempDisableCallbacks.has(node.ownerDocument) === false) {
                try {
                    node.disconnectedCallback();
                }
                catch (e) {
                    console.error(e);
                }
            }
        }
        node.childNodes.forEach(disconnectNode);
    }
}
function attributeChanged(node, attrName, oldValue, newValue) {
    attrName = attrName.toLowerCase();
    const observedAttributes = node.constructor.observedAttributes;
    if (Array.isArray(observedAttributes) === true && observedAttributes.some(obs => obs.toLowerCase() === attrName) === true) {
        try {
            node.attributeChangedCallback(attrName, oldValue, newValue);
        }
        catch (e) {
            console.error(e);
        }
    }
}
function checkAttributeChanged(node) {
    return (node.nodeName.includes('-') === true && typeof node.attributeChangedCallback === 'function');
}
const tempDisableCallbacks = new Set();

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var parse_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = parse;
var reName = /^(?:\\.|[\w\-\u00b0-\uFFFF])+/, reEscape = /\\([\da-f]{1,6}\s?|(\s)|.)/gi, 
//modified version of https://github.com/jquery/sizzle/blob/master/src/sizzle.js#L87
reAttr = /^\s*((?:\\.|[\w\u00b0-\uFFFF-])+)\s*(?:(\S?)=\s*(?:(['"])([^]*?)\3|(#?(?:\\.|[\w\u00b0-\uFFFF-])*)|)|)\s*(i)?\]/;
var actionTypes = {
    undefined: "exists",
    "": "equals",
    "~": "element",
    "^": "start",
    $: "end",
    "*": "any",
    "!": "not",
    "|": "hyphen"
};
var Traversals = {
    ">": "child",
    "<": "parent",
    "~": "sibling",
    "+": "adjacent"
};
var attribSelectors = {
    "#": ["id", "equals"],
    ".": ["class", "element"]
};
//pseudos, whose data-property is parsed as well
var unpackPseudos = new Set(["has", "not", "matches"]);
var stripQuotesFromPseudos = new Set(["contains", "icontains"]);
var quotes = new Set(['"', "'"]);
//unescape function taken from https://github.com/jquery/sizzle/blob/master/src/sizzle.js#L152
function funescape(_, escaped, escapedWhitespace) {
    var high = parseInt(escaped, 16) - 0x10000;
    // NaN means non-codepoint
    return high !== high || escapedWhitespace
        ? escaped
        : high < 0
            ? // BMP codepoint
                String.fromCharCode(high + 0x10000)
            : // Supplemental Plane codepoint (surrogate pair)
                String.fromCharCode((high >> 10) | 0xd800, (high & 0x3ff) | 0xdc00);
}
function unescapeCSS(str) {
    return str.replace(reEscape, funescape);
}
function isWhitespace(c) {
    return c === " " || c === "\n" || c === "\t" || c === "\f" || c === "\r";
}
function parse(selector, options) {
    var subselects = [];
    selector = parseSelector(subselects, selector + "", options);
    if (selector !== "") {
        throw new Error("Unmatched selector: " + selector);
    }
    return subselects;
}
function parseSelector(subselects, selector, options) {
    var tokens = [], sawWS = false;
    function getName() {
        var match = selector.match(reName);
        if (!match) {
            throw new Error("Expected name, found " + selector);
        }
        var sub = match[0];
        selector = selector.substr(sub.length);
        return unescapeCSS(sub);
    }
    function stripWhitespace(start) {
        while (isWhitespace(selector.charAt(start)))
            start++;
        selector = selector.substr(start);
    }
    function isEscaped(pos) {
        var slashCount = 0;
        while (selector.charAt(--pos) === "\\")
            slashCount++;
        return (slashCount & 1) === 1;
    }
    stripWhitespace(0);
    while (selector !== "") {
        var firstChar = selector.charAt(0);
        if (isWhitespace(firstChar)) {
            sawWS = true;
            stripWhitespace(1);
        }
        else if (firstChar in Traversals) {
            tokens.push({ type: Traversals[firstChar] });
            sawWS = false;
            stripWhitespace(1);
        }
        else if (firstChar === ",") {
            if (tokens.length === 0) {
                throw new Error("Empty sub-selector");
            }
            subselects.push(tokens);
            tokens = [];
            sawWS = false;
            stripWhitespace(1);
        }
        else {
            if (sawWS) {
                if (tokens.length > 0) {
                    tokens.push({ type: "descendant" });
                }
                sawWS = false;
            }
            if (firstChar === "*") {
                selector = selector.substr(1);
                tokens.push({ type: "universal" });
            }
            else if (firstChar in attribSelectors) {
                var _a = attribSelectors[firstChar], name_1 = _a[0], action = _a[1];
                selector = selector.substr(1);
                tokens.push({
                    type: "attribute",
                    name: name_1,
                    action: action,
                    value: getName(),
                    ignoreCase: false
                });
            }
            else if (firstChar === "[") {
                selector = selector.substr(1);
                var data = selector.match(reAttr);
                if (!data) {
                    throw new Error("Malformed attribute selector: " + selector);
                }
                selector = selector.substr(data[0].length);
                var name_2 = unescapeCSS(data[1]);
                if (!options ||
                    ("lowerCaseAttributeNames" in options
                        ? options.lowerCaseAttributeNames
                        : !options.xmlMode)) {
                    name_2 = name_2.toLowerCase();
                }
                tokens.push({
                    type: "attribute",
                    name: name_2,
                    action: actionTypes[data[2]],
                    value: unescapeCSS(data[4] || data[5] || ""),
                    ignoreCase: !!data[6]
                });
            }
            else if (firstChar === ":") {
                if (selector.charAt(1) === ":") {
                    selector = selector.substr(2);
                    tokens.push({
                        type: "pseudo-element",
                        name: getName().toLowerCase()
                    });
                    continue;
                }
                selector = selector.substr(1);
                var name_3 = getName().toLowerCase();
                var data = null;
                if (selector.charAt(0) === "(") {
                    if (unpackPseudos.has(name_3)) {
                        var quot = selector.charAt(1);
                        var quoted = quotes.has(quot);
                        selector = selector.substr(quoted ? 2 : 1);
                        data = [];
                        selector = parseSelector(data, selector, options);
                        if (quoted) {
                            if (selector.charAt(0) !== quot) {
                                throw new Error("Unmatched quotes in :" + name_3);
                            }
                            else {
                                selector = selector.substr(1);
                            }
                        }
                        if (selector.charAt(0) !== ")") {
                            throw new Error("Missing closing parenthesis in :" + name_3 + " (" + selector + ")");
                        }
                        selector = selector.substr(1);
                    }
                    else {
                        var pos = 1, counter = 1;
                        for (; counter > 0 && pos < selector.length; pos++) {
                            if (selector.charAt(pos) === "(" && !isEscaped(pos))
                                counter++;
                            else if (selector.charAt(pos) === ")" &&
                                !isEscaped(pos))
                                counter--;
                        }
                        if (counter) {
                            throw new Error("Parenthesis not matched");
                        }
                        data = selector.substr(1, pos - 2);
                        selector = selector.substr(pos);
                        if (stripQuotesFromPseudos.has(name_3)) {
                            var quot = data.charAt(0);
                            if (quot === data.slice(-1) && quotes.has(quot)) {
                                data = data.slice(1, -1);
                            }
                            data = unescapeCSS(data);
                        }
                    }
                }
                tokens.push({ type: "pseudo", name: name_3, data: data });
            }
            else if (reName.test(selector)) {
                var name_4 = getName();
                if (!options ||
                    ("lowerCaseTags" in options
                        ? options.lowerCaseTags
                        : !options.xmlMode)) {
                    name_4 = name_4.toLowerCase();
                }
                tokens.push({ type: "tag", name: name_4 });
            }
            else {
                if (tokens.length &&
                    tokens[tokens.length - 1].type === "descendant") {
                    tokens.pop();
                }
                addToken(subselects, tokens);
                return selector;
            }
        }
    }
    addToken(subselects, tokens);
    return selector;
}
function addToken(subselects, tokens) {
    if (subselects.length > 0 && tokens.length === 0) {
        throw new Error("Empty sub-selector");
    }
    subselects.push(tokens);
}
});

unwrapExports(parse_1);

var stringify_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
var actionTypes = {
    equals: "",
    element: "~",
    start: "^",
    end: "$",
    any: "*",
    not: "!",
    hyphen: "|"
};
var simpleSelectors = {
    child: " > ",
    parent: " < ",
    sibling: " ~ ",
    adjacent: " + ",
    descendant: " ",
    universal: "*"
};
function stringify(token) {
    return token.map(stringifySubselector).join(", ");
}
exports.default = stringify;
function stringifySubselector(token) {
    return token.map(stringifyToken).join("");
}
function stringifyToken(token) {
    if (token.type in simpleSelectors)
        return simpleSelectors[token.type];
    if (token.type === "tag")
        return escapeName(token.name);
    if (token.type === "pseudo-element")
        return "::" + escapeName(token.name);
    if (token.type === "attribute") {
        if (token.action === "exists")
            return "[" + escapeName(token.name) + "]";
        if (token.name === "id" &&
            token.action === "equals" &&
            !token.ignoreCase)
            return "#" + escapeName(token.value);
        if (token.name === "class" &&
            token.action === "element" &&
            !token.ignoreCase)
            return "." + escapeName(token.value);
        return ("[" +
            escapeName(token.name) +
            actionTypes[token.action] +
            "='" +
            escapeName(token.value) +
            "'" +
            (token.ignoreCase ? "i" : "") +
            "]");
    }
    if (token.type === "pseudo") {
        if (token.data === null)
            return ":" + escapeName(token.name);
        if (typeof token.data === "string") {
            return ":" + escapeName(token.name) + "(" + token.data + ")";
        }
        return ":" + escapeName(token.name) + "(" + stringify(token.data) + ")";
    }
    throw new Error("Unknown type");
}
function escapeName(str) {
    //TODO
    return str;
}
});

unwrapExports(stringify_1);

var lib = createCommonjsModule(function (module, exports) {
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(parse_1);
var parse_1$1 = parse_1;
exports.parse = parse_1$1.default;

exports.stringify = stringify_1.default;
});

unwrapExports(lib);
var lib_1 = lib.parse;
var lib_2 = lib.stringify;

function closest(selector, elm) {
    while (elm != null) {
        if (elm.matches(selector)) {
            return elm;
        }
        elm = elm.parentNode;
    }
    return null;
}
function matches(selector, elm) {
    const selectors = lib_1(selector);
    return matchesSelectors(selectors, elm);
}
function selectOne(selector, elm) {
    const selectors = lib_1(selector);
    return selectOneRecursion(selectors, elm);
}
function selectOneRecursion(selectors, elm) {
    const children = elm.children;
    for (let i = 0, ii = children.length; i < ii; i++) {
        if (matchesSelectors(selectors, children[i]) === true) {
            return children[i];
        }
        const childMatch = selectOneRecursion(selectors, children[i]);
        if (childMatch != null) {
            return childMatch;
        }
    }
    return null;
}
function selectAll(selector, elm) {
    const selectors = lib_1(selector);
    const foundElms = [];
    selectAllRecursion(selectors, elm, foundElms);
    return foundElms;
}
function selectAllRecursion(selectors, elm, found) {
    const children = elm.children;
    for (let i = 0, ii = children.length; i < ii; i++) {
        if (matchesSelectors(selectors, children[i]) === true) {
            found.push(children[i]);
        }
        selectAllRecursion(selectors, children[i], found);
    }
}
function matchesSelectors(selectors, elm) {
    for (let i = 0, ii = selectors.length; i < ii; i++) {
        if (matchesEverySelector(selectors[i], elm) === true) {
            return true;
        }
    }
    return false;
}
function matchesEverySelector(selectorData, elm) {
    for (let i = 0, ii = selectorData.length; i < ii; i++) {
        if (matchesSelector(selectorData[i], elm) === false) {
            return false;
        }
    }
    return true;
}
function matchesSelector(selectorData, elm) {
    switch (selectorData.type) {
        case 'tag':
            return elm.nodeName.toLowerCase() === selectorData.name.toLowerCase();
        case 'attribute':
            if (selectorData.name === 'class') {
                return elm.classList.contains(selectorData.value);
            }
            if (selectorData.action === 'exists') {
                return elm.hasAttribute(selectorData.name);
            }
            if (selectorData.action === 'equals') {
                return elm.getAttribute(selectorData.name) === selectorData.value;
            }
            return false;
        case 'child':
            // TODO
            return true;
    }
    return false;
}

class CSSStyleDeclaration {
    constructor() {
        this._styles = new Map();
    }
    setProperty(prop, value) {
        prop = jsCaseToCssCase(prop);
        if (value == null || value === '') {
            this._styles.delete(prop);
        }
        else {
            this._styles.set(prop, String(value));
        }
    }
    getPropertyValue(prop) {
        prop = jsCaseToCssCase(prop);
        return String(this._styles.get(prop) || '');
    }
    removeProperty(prop) {
        prop = jsCaseToCssCase(prop);
        this._styles.delete(prop);
    }
    get length() {
        return this._styles.size;
    }
    get cssText() {
        const cssText = [];
        this._styles.forEach((value, prop) => {
            cssText.push(`${prop}: ${value};`);
        });
        return cssText.join(' ').trim();
    }
    set cssText(cssText) {
        if (cssText == null || cssText === '') {
            this._styles.clear();
            return;
        }
        cssText.split(';').forEach(rule => {
            rule = rule.trim();
            if (rule.length > 0) {
                const splt = rule.split(':');
                if (splt.length > 1) {
                    const prop = splt[0].trim();
                    const value = splt[1].trim();
                    if (prop !== '' && value !== '') {
                        this._styles.set(jsCaseToCssCase(prop), value);
                    }
                }
            }
        });
    }
}
function createCSSStyleDeclaration() {
    return new Proxy(new CSSStyleDeclaration(), cssProxyHandler);
}
const cssProxyHandler = {
    get(cssStyle, prop) {
        if (prop in cssStyle) {
            return cssStyle[prop];
        }
        prop = cssCaseToJsCase(prop);
        return cssStyle.getPropertyValue(prop);
    },
    set(cssStyle, prop, value) {
        if (prop in cssStyle) {
            cssStyle[prop] = value;
        }
        else {
            cssStyle.setProperty(prop, value);
        }
        return true;
    }
};
function cssCaseToJsCase(str) {
    // font-size to fontSize
    if (str.length > 1 && str.includes('-') === true) {
        str = str.toLowerCase().split('-').map(segment => segment.charAt(0).toUpperCase() + segment.slice(1)).join('');
        str = str.substr(0, 1).toLowerCase() + str.substr(1);
    }
    return str;
}
function jsCaseToCssCase(str) {
    // fontSize to font-size
    if (str.length > 1 && (str.includes('-') === false && /[A-Z]/.test(str) === true)) {
        str = str.replace(/([A-Z])/g, g => ' ' + g[0]).trim().replace(/ /g, '-').toLowerCase();
    }
    return str;
}

function dataset(elm) {
    const ds = {};
    const attributes = elm.attributes;
    const attrLen = attributes.length;
    for (let i = 0; i < attrLen; i++) {
        const attr = attributes.item(i);
        const nodeName = attr.nodeName;
        if (nodeName.startsWith('data-')) {
            ds[dashToPascalCase(nodeName)] = attr.nodeValue;
        }
    }
    return new Proxy(ds, {
        get(_obj, camelCaseProp) {
            return ds[camelCaseProp];
        },
        set(_obj, camelCaseProp, value) {
            const dataAttr = toDataAttribute(camelCaseProp);
            elm.setAttribute(dataAttr, value);
            return true;
        }
    });
}
function toDataAttribute(str) {
    return 'data-' + String(str).replace(/([A-Z0-9])/g, g => ' ' + g[0]).trim().replace(/ /g, '-').toLowerCase();
}
function dashToPascalCase(str) {
    str = String(str).substr(5);
    return str.split('-').map((segment, index) => {
        if (index === 0) {
            return segment.charAt(0).toLowerCase() + segment.slice(1);
        }
        return segment.charAt(0).toUpperCase() + segment.slice(1);
    }).join('');
}

class MockClassList {
    constructor(elm) {
        this.elm = elm;
    }
    add(...classNames) {
        const clsNames = getItems(this.elm);
        let updated = false;
        classNames.forEach(className => {
            className = String(className);
            validateClass(className);
            if (clsNames.includes(className) === false) {
                clsNames.push(className);
                updated = true;
            }
        });
        if (updated) {
            this.elm.setAttributeNS(null, 'class', clsNames.join(' '));
        }
    }
    remove(...classNames) {
        const clsNames = getItems(this.elm);
        let updated = false;
        classNames.forEach(className => {
            className = String(className);
            validateClass(className);
            const index = clsNames.indexOf(className);
            if (index > -1) {
                clsNames.splice(index, 1);
                updated = true;
            }
        });
        if (updated) {
            this.elm.setAttributeNS(null, 'class', clsNames.filter(c => c.length > 0).join(' '));
        }
    }
    contains(className) {
        className = String(className);
        return getItems(this.elm).includes(className);
    }
    toggle(className) {
        className = String(className);
        if (this.contains(className) === true) {
            this.remove(className);
        }
        else {
            this.add(className);
        }
    }
    get length() {
        return getItems(this.elm).length;
    }
    item(index) {
        return getItems(this.elm)[index];
    }
    toString() {
        return getItems(this.elm).join(' ');
    }
}
function validateClass(className) {
    if (className === '') {
        throw new Error('The token provided must not be empty.');
    }
    if (/\s/.test(className)) {
        throw new Error(`The token provided ('${className}') contains HTML space characters, which are not valid in tokens.`);
    }
}
function getItems(elm) {
    const className = elm.getAttribute('class');
    if (typeof className === 'string' && className.length > 0) {
        return className.trim().split(' ').filter(c => c.length > 0);
    }
    return [];
}

class MockEvent {
    constructor(type, eventInitDict) {
        this.bubbles = false;
        this.cancelBubble = false;
        this.cancelable = false;
        this.composed = false;
        this.currentTarget = null;
        this.defaultPrevented = false;
        this.srcElement = null;
        this.target = null;
        if (typeof type !== 'string') {
            throw new Error(`Event type required`);
        }
        this.type = type;
        this.timeStamp = Date.now();
        if (eventInitDict != null) {
            Object.assign(this, eventInitDict);
        }
    }
    preventDefault() {
        this.defaultPrevented = true;
    }
    stopPropagation() {
        this.cancelBubble = true;
    }
    stopImmediatePropagation() {
        this.cancelBubble = true;
    }
}
class MockCustomEvent extends MockEvent {
    constructor(type, customEventInitDic) {
        super(type);
        this.detail = null;
        if (customEventInitDic != null) {
            Object.assign(this, customEventInitDic);
        }
    }
}
class MockKeyboardEvent extends MockEvent {
    constructor(type, keyboardEventInitDic) {
        super(type);
        this.code = '';
        this.key = '';
        this.altKey = false;
        this.ctrlKey = false;
        this.metaKey = false;
        this.shiftKey = false;
        this.location = 0;
        this.repeat = false;
        if (keyboardEventInitDic != null) {
            Object.assign(this, keyboardEventInitDic);
        }
    }
}
class MockMouseEvent extends MockEvent {
    constructor(type, mouseEventInitDic) {
        super(type);
        this.screenX = 0;
        this.screenY = 0;
        this.clientX = 0;
        this.clientY = 0;
        this.ctrlKey = false;
        this.shiftKey = false;
        this.altKey = false;
        this.metaKey = false;
        this.button = 0;
        this.buttons = 0;
        this.relatedTarget = null;
        if (mouseEventInitDic != null) {
            Object.assign(this, mouseEventInitDic);
        }
    }
}
class MockEventListener {
    constructor(type, handler) {
        this.type = type;
        this.handler = handler;
    }
}
function addEventListener(elm, type, handler) {
    const target = elm;
    if (target.__listeners == null) {
        target.__listeners = [];
    }
    target.__listeners.push(new MockEventListener(type, handler));
}
function removeEventListener(elm, type, handler) {
    const target = elm;
    if (target != null && Array.isArray(target.__listeners) === true) {
        const elmListener = target.__listeners.find(e => e.type === type && e.handler === handler);
        if (elmListener != null) {
            const index = target.__listeners.indexOf(elmListener);
            target.__listeners.splice(index, 1);
        }
    }
}
function resetEventListeners(target) {
    if (target != null && target.__listeners != null) {
        target.__listeners = null;
    }
}
function triggerEventListener(elm, ev) {
    if (elm == null || ev.cancelBubble === true) {
        return;
    }
    const target = elm;
    ev.currentTarget = elm;
    if (Array.isArray(target.__listeners) === true) {
        const listeners = target.__listeners.filter(e => e.type === ev.type);
        listeners.forEach(listener => {
            try {
                listener.handler.call(target, ev);
            }
            catch (err) {
                console.error(err);
            }
        });
    }
    if (ev.bubbles === false) {
        return;
    }
    if (elm.nodeName === "#document" /* DOCUMENT_NODE */) {
        triggerEventListener(elm.defaultView, ev);
    }
    else {
        triggerEventListener(elm.parentElement, ev);
    }
}
function dispatchEvent(currentTarget, ev) {
    ev.target = currentTarget;
    triggerEventListener(currentTarget, ev);
    return true;
}

function serializeNodeToHtml(elm, opts = {}) {
    const output = {
        currentLineWidth: 0,
        indent: 0,
        isWithinBody: false,
        text: [],
    };
    if (opts.prettyHtml) {
        if (typeof opts.indentSpaces !== 'number') {
            opts.indentSpaces = 2;
        }
        if (typeof opts.newLines !== 'boolean') {
            opts.newLines = true;
        }
        opts.approximateLineWidth = -1;
    }
    else {
        opts.prettyHtml = false;
        if (typeof opts.newLines !== 'boolean') {
            opts.newLines = false;
        }
        if (typeof opts.indentSpaces !== 'number') {
            opts.indentSpaces = 0;
        }
    }
    if (typeof opts.approximateLineWidth !== 'number') {
        opts.approximateLineWidth = -1;
    }
    if (typeof opts.removeEmptyAttributes !== 'boolean') {
        opts.removeEmptyAttributes = true;
    }
    if (typeof opts.removeAttributeQuotes !== 'boolean') {
        opts.removeAttributeQuotes = false;
    }
    if (typeof opts.removeBooleanAttributeQuotes !== 'boolean') {
        opts.removeBooleanAttributeQuotes = false;
    }
    if (typeof opts.removeHtmlComments !== 'boolean') {
        opts.removeHtmlComments = false;
    }
    if (typeof opts.serializeShadowRoot !== 'boolean') {
        opts.serializeShadowRoot = false;
    }
    if (opts.outerHtml) {
        serializeToHtml(elm, opts, output, false);
    }
    else {
        for (let i = 0, ii = elm.childNodes.length; i < ii; i++) {
            serializeToHtml(elm.childNodes[i], opts, output, false);
        }
    }
    if (output.text[0] === '\n') {
        output.text.shift();
    }
    if (output.text[output.text.length - 1] === '\n') {
        output.text.pop();
    }
    return output.text.join('');
}
function serializeToHtml(node, opts, output, isShadowRoot) {
    if (node.nodeType === 1 /* ELEMENT_NODE */ || isShadowRoot) {
        const tagName = isShadowRoot ? 'mock:shadow-root' : getTagName(node);
        if (tagName === 'body') {
            output.isWithinBody = true;
        }
        const ignoreTag = (opts.excludeTags != null && opts.excludeTags.includes(tagName));
        if (ignoreTag === false) {
            if (opts.newLines) {
                output.text.push('\n');
                output.currentLineWidth = 0;
            }
            if (opts.indentSpaces > 0) {
                for (let i = 0; i < output.indent; i++) {
                    output.text.push(' ');
                }
                output.currentLineWidth += output.indent;
            }
            output.text.push('<' + tagName);
            output.currentLineWidth += (tagName.length + 1);
            const attrsLength = node.attributes.length;
            const attributes = (opts.prettyHtml && attrsLength > 1) ?
                cloneAttributes(node.attributes, true) :
                node.attributes;
            for (let i = 0; i < attrsLength; i++) {
                const attr = attributes.item(i);
                const attrName = attr.name;
                if (attrName === 'style') {
                    continue;
                }
                let attrValue = attr.value;
                if (opts.removeEmptyAttributes && attrValue === '' && REMOVE_EMPTY_ATTR.has(attrName)) {
                    continue;
                }
                const attrNamespaceURI = attr.namespaceURI;
                if (attrNamespaceURI == null) {
                    output.currentLineWidth += (attrName.length + 1);
                    if (opts.approximateLineWidth > 0 && output.currentLineWidth > opts.approximateLineWidth) {
                        output.text.push('\n' + attrName);
                        output.currentLineWidth = 0;
                    }
                    else {
                        output.text.push(' ' + attrName);
                    }
                }
                else if (attrNamespaceURI === 'http://www.w3.org/XML/1998/namespace') {
                    output.text.push(' xml:' + attrName);
                    output.currentLineWidth += (attrName.length + 5);
                }
                else if (attrNamespaceURI === 'http://www.w3.org/2000/xmlns/') {
                    if (attrName !== 'xmlns') {
                        output.text.push(' xmlns:' + attrName);
                        output.currentLineWidth += (attrName.length + 7);
                    }
                    else {
                        output.text.push(' ' + attrName);
                        output.currentLineWidth += (attrName.length + 1);
                    }
                }
                else if (attrNamespaceURI === XLINK_NS) {
                    output.text.push(' xlink:' + attrName);
                    output.currentLineWidth += (attrName.length + 7);
                }
                else {
                    output.text.push(' ' + attrNamespaceURI + ':' + attrName);
                    output.currentLineWidth += (attrNamespaceURI.length + attrName.length + 2);
                }
                if (opts.prettyHtml && attrName === 'class') {
                    attrValue = attr.value = attrValue.split(' ').filter(t => t !== '').sort().join(' ').trim();
                }
                if (attrValue === '') {
                    if (opts.removeBooleanAttributeQuotes && BOOLEAN_ATTR.has(attrName)) {
                        continue;
                    }
                    if (opts.removeEmptyAttributes && attrName.startsWith('data-')) {
                        continue;
                    }
                }
                if (opts.removeAttributeQuotes && CAN_REMOVE_ATTR_QUOTES.test(attrValue)) {
                    output.text.push('=' + escapeString(attrValue, true));
                    output.currentLineWidth += (attrValue.length + 1);
                }
                else {
                    output.text.push('="' + escapeString(attrValue, true) + '"');
                    output.currentLineWidth += (attrValue.length + 3);
                }
            }
            if (node.hasAttribute('style')) {
                const cssText = node.style.cssText;
                if (opts.approximateLineWidth > 0 && (output.currentLineWidth + cssText.length + 10) > opts.approximateLineWidth) {
                    output.text.push(`\nstyle="${cssText}">`);
                    output.currentLineWidth = 0;
                }
                else {
                    output.text.push(` style="${cssText}">`);
                    output.currentLineWidth += (cssText.length + 10);
                }
            }
            else {
                output.text.push('>');
                output.currentLineWidth += 1;
            }
        }
        if (EMPTY_ELEMENTS.has(tagName) === false) {
            if (opts.serializeShadowRoot && node.shadowRoot != null) {
                output.indent = output.indent + opts.indentSpaces;
                serializeToHtml(node.shadowRoot, opts, output, true);
                output.indent = output.indent - opts.indentSpaces;
                if (opts.newLines && (node.childNodes.length === 0 || (node.childNodes.length === 1 && node.childNodes[0].nodeType === 3 /* TEXT_NODE */ && node.childNodes[0].nodeValue.trim() === ''))) {
                    output.text.push('\n');
                    output.currentLineWidth = 0;
                    for (let i = 0; i < output.indent; i++) {
                        output.text.push(' ');
                    }
                    output.currentLineWidth += output.indent;
                }
            }
            if (opts.excludeTagContent == null || opts.excludeTagContent.includes(tagName) === false) {
                const childNodes = tagName === 'template' ? node.content.childNodes : (node.childNodes);
                const childNodeLength = childNodes.length;
                if (childNodeLength > 0) {
                    if (childNodeLength === 1 && childNodes[0].nodeType === 3 /* TEXT_NODE */ && (typeof childNodes[0].nodeValue !== 'string' || childNodes[0].nodeValue.trim() === '')) ;
                    else {
                        if (opts.indentSpaces > 0 && ignoreTag === false) {
                            output.indent = output.indent + opts.indentSpaces;
                        }
                        for (let i = 0; i < childNodeLength; i++) {
                            serializeToHtml(childNodes[i], opts, output, false);
                        }
                        if (ignoreTag === false) {
                            if (opts.newLines) {
                                output.text.push('\n');
                                output.currentLineWidth = 0;
                            }
                            if (opts.indentSpaces > 0) {
                                output.indent = output.indent - opts.indentSpaces;
                                for (let i = 0; i < output.indent; i++) {
                                    output.text.push(' ');
                                }
                                output.currentLineWidth += output.indent;
                            }
                        }
                    }
                }
                if (ignoreTag === false) {
                    output.text.push('</' + tagName + '>');
                    output.currentLineWidth += (tagName.length + 3);
                }
            }
        }
        if (opts.approximateLineWidth > 0 && STRUCTURE_ELEMENTS.has(tagName)) {
            output.text.push('\n');
            output.currentLineWidth = 0;
        }
        if (tagName === 'body') {
            output.isWithinBody = false;
        }
    }
    else if (node.nodeType === 3 /* TEXT_NODE */) {
        let textContent = node.nodeValue;
        if (typeof textContent === 'string') {
            const trimmedTextContent = textContent.trim();
            if (trimmedTextContent === '') {
                // this text node is whitespace only
                if (isWithinWhitespaceSensitive(node)) {
                    // whitespace matters within this element
                    // just add the exact text we were given
                    output.text.push(textContent);
                    output.currentLineWidth += textContent.length;
                }
                else if (opts.approximateLineWidth > 0 && !output.isWithinBody) ;
                else if (!opts.prettyHtml) {
                    // this text node is only whitespace, and it's not
                    // within a whitespace sensitive element like <pre> or <code>
                    // so replace the entire white space with a single new line
                    output.currentLineWidth += 1;
                    if (opts.approximateLineWidth > 0 && output.currentLineWidth > opts.approximateLineWidth) {
                        // good enough for a new line
                        // for perf these are all just estimates
                        // we don't care to ensure exact line lengths
                        output.text.push('\n');
                        output.currentLineWidth = 0;
                    }
                    else {
                        // let's keep it all on the same line yet
                        output.text.push(' ');
                    }
                }
            }
            else {
                // this text node has text content
                if (opts.newLines) {
                    output.text.push('\n');
                    output.currentLineWidth = 0;
                }
                if (opts.indentSpaces > 0) {
                    for (let i = 0; i < output.indent; i++) {
                        output.text.push(' ');
                    }
                    output.currentLineWidth += output.indent;
                }
                let textContentLength = textContent.length;
                if (textContentLength > 0) {
                    // this text node has text content
                    const parentTagName = (node.parentNode != null && node.parentNode.nodeType === 1 /* ELEMENT_NODE */ ? node.parentNode.nodeName : null);
                    if (NON_ESCAPABLE_CONTENT.has(parentTagName)) {
                        // this text node cannot have its content escaped since it's going
                        // into an element like <style> or <script>
                        if (isWithinWhitespaceSensitive(node)) {
                            output.text.push(textContent);
                        }
                        else {
                            output.text.push(trimmedTextContent);
                            textContentLength = trimmedTextContent.length;
                        }
                        output.currentLineWidth += textContentLength;
                    }
                    else {
                        // this text node is going into a normal element and html can be escaped
                        if (opts.prettyHtml) {
                            // pretty print the text node
                            output.text.push(escapeString(textContent.replace(/\s\s+/g, ' ').trim(), false));
                            output.currentLineWidth += textContentLength;
                        }
                        else {
                            // not pretty printing the text node
                            if (isWithinWhitespaceSensitive(node)) {
                                output.currentLineWidth += textContentLength;
                            }
                            else {
                                // this element is not a whitespace sensitive one, like <pre> or <code> so
                                // any whitespace at the start and end can be cleaned up to just be one space
                                if (/\s/.test(textContent.charAt(0))) {
                                    textContent = ' ' + textContent.trimLeft();
                                }
                                textContentLength = textContent.length;
                                if (textContentLength > 1) {
                                    if (/\s/.test(textContent.charAt(textContentLength - 1))) {
                                        if (opts.approximateLineWidth > 0 && (output.currentLineWidth + textContentLength) > opts.approximateLineWidth) {
                                            textContent = textContent.trimRight() + '\n';
                                            output.currentLineWidth = 0;
                                        }
                                        else {
                                            textContent = textContent.trimRight() + ' ';
                                        }
                                    }
                                }
                                output.currentLineWidth += textContentLength;
                            }
                            output.text.push(escapeString(textContent, false));
                        }
                    }
                }
            }
        }
    }
    else if (node.nodeType === 8 /* COMMENT_NODE */) {
        const nodeValue = node.nodeValue;
        if (opts.removeHtmlComments) {
            const isHydrateAnnotation = nodeValue.startsWith(CONTENT_REF_ID + '.') || nodeValue.startsWith(ORG_LOCATION_ID + '.') || nodeValue.startsWith(SLOT_NODE_ID + '.') || nodeValue.startsWith(TEXT_NODE_ID + '.');
            if (!isHydrateAnnotation) {
                return;
            }
        }
        if (opts.newLines) {
            output.text.push('\n');
            output.currentLineWidth = 0;
        }
        if (opts.indentSpaces > 0) {
            for (let i = 0; i < output.indent; i++) {
                output.text.push(' ');
            }
            output.currentLineWidth += output.indent;
        }
        output.text.push('<!--' + nodeValue + '-->');
        output.currentLineWidth += (nodeValue.length + 7);
    }
    else if (node.nodeType === 10 /* DOCUMENT_TYPE_NODE */) {
        output.text.push('<!doctype html>');
    }
}
const AMP_REGEX = /&/g;
const NBSP_REGEX = /\u00a0/g;
const DOUBLE_QUOTE_REGEX = /"/g;
const LT_REGEX = /</g;
const GT_REGEX = />/g;
const CAN_REMOVE_ATTR_QUOTES = /^[^ \t\n\f\r"'`=<>\/\\-]+$/;
function getTagName(element) {
    if (element.namespaceURI === 'http://www.w3.org/1999/xhtml') {
        return element.nodeName.toLowerCase();
    }
    else {
        return element.nodeName;
    }
}
function escapeString(str, attrMode) {
    str = str.replace(AMP_REGEX, '&amp;').replace(NBSP_REGEX, '&nbsp;');
    if (attrMode) {
        return str.replace(DOUBLE_QUOTE_REGEX, '&quot;');
    }
    return str.replace(LT_REGEX, '&lt;').replace(GT_REGEX, '&gt;');
}
function isWithinWhitespaceSensitive(node) {
    while (node != null) {
        if (WHITESPACE_SENSITIVE.has(node.nodeName)) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
}
/*@__PURE__*/ const NON_ESCAPABLE_CONTENT = new Set(['STYLE', 'SCRIPT', 'IFRAME', 'NOSCRIPT', 'XMP', 'NOEMBED', 'NOFRAMES', 'PLAINTEXT']);
/*@__PURE__*/ const WHITESPACE_SENSITIVE = new Set(['CODE', 'OUTPUT', 'PLAINTEXT', 'PRE', 'TEMPLATE', 'TEXTAREA']);
/*@__PURE__*/ const EMPTY_ELEMENTS = new Set(['area', 'base', 'basefont', 'bgsound', 'br', 'col', 'embed', 'frame', 'hr', 'img', 'input', 'keygen', 'link', 'meta', 'param', 'source', 'trace', 'wbr']);
/*@__PURE__*/ const REMOVE_EMPTY_ATTR = new Set(['class', 'dir', 'id', 'lang', 'name', 'title']);
/*@__PURE__*/ const BOOLEAN_ATTR = new Set(['allowfullscreen', 'async', 'autofocus', 'autoplay', 'checked', 'compact', 'controls', 'declare', 'default', 'defaultchecked', 'defaultmuted', 'defaultselected', 'defer', 'disabled', 'enabled', 'formnovalidate', 'hidden', 'indeterminate', 'inert', 'ismap', 'itemscope', 'loop', 'multiple', 'muted', 'nohref', 'nomodule', 'noresize', 'noshade', 'novalidate', 'nowrap', 'open', 'pauseonexit', 'readonly', 'required', 'reversed', 'scoped', 'seamless', 'selected', 'sortable', 'truespeed', 'typemustmatch', 'visible']);
/*@__PURE__*/ const STRUCTURE_ELEMENTS = new Set(['html', 'body', 'head', 'iframe', 'meta', 'link', 'base', 'title', 'script', 'style']);

const parse5=/*@__PURE__*/function(e){const t=[65534,65535,131070,131071,196606,196607,262142,262143,327678,327679,393214,393215,458750,458751,524286,524287,589822,589823,655358,655359,720894,720895,786430,786431,851966,851967,917502,917503,983038,983039,1048574,1048575,1114110,1114111];var n={REPLACEMENT_CHARACTER:"�",CODE_POINTS:{EOF:-1,NULL:0,TABULATION:9,CARRIAGE_RETURN:13,LINE_FEED:10,FORM_FEED:12,SPACE:32,EXCLAMATION_MARK:33,QUOTATION_MARK:34,NUMBER_SIGN:35,AMPERSAND:38,APOSTROPHE:39,HYPHEN_MINUS:45,SOLIDUS:47,DIGIT_0:48,DIGIT_9:57,SEMICOLON:59,LESS_THAN_SIGN:60,EQUALS_SIGN:61,GREATER_THAN_SIGN:62,QUESTION_MARK:63,LATIN_CAPITAL_A:65,LATIN_CAPITAL_F:70,LATIN_CAPITAL_X:88,LATIN_CAPITAL_Z:90,RIGHT_SQUARE_BRACKET:93,GRAVE_ACCENT:96,LATIN_SMALL_A:97,LATIN_SMALL_F:102,LATIN_SMALL_X:120,LATIN_SMALL_Z:122,REPLACEMENT_CHARACTER:65533},CODE_POINT_SEQUENCES:{DASH_DASH_STRING:[45,45],DOCTYPE_STRING:[68,79,67,84,89,80,69],CDATA_START_STRING:[91,67,68,65,84,65,91],SCRIPT_STRING:[115,99,114,105,112,116],PUBLIC_STRING:[80,85,66,76,73,67],SYSTEM_STRING:[83,89,83,84,69,77]},isSurrogate:function(e){return e>=55296&&e<=57343},isSurrogatePair:function(e){return e>=56320&&e<=57343},getSurrogatePairCodePoint:function(e,t){return 1024*(e-55296)+9216+t},isControlCodePoint:function(e){return 32!==e&&10!==e&&13!==e&&9!==e&&12!==e&&e>=1&&e<=31||e>=127&&e<=159},isUndefinedCodePoint:function(e){return e>=64976&&e<=65007||t.indexOf(e)>-1}},s={controlCharacterInInputStream:"control-character-in-input-stream",noncharacterInInputStream:"noncharacter-in-input-stream",surrogateInInputStream:"surrogate-in-input-stream",nonVoidHtmlElementStartTagWithTrailingSolidus:"non-void-html-element-start-tag-with-trailing-solidus",endTagWithAttributes:"end-tag-with-attributes",endTagWithTrailingSolidus:"end-tag-with-trailing-solidus",unexpectedSolidusInTag:"unexpected-solidus-in-tag",unexpectedNullCharacter:"unexpected-null-character",unexpectedQuestionMarkInsteadOfTagName:"unexpected-question-mark-instead-of-tag-name",invalidFirstCharacterOfTagName:"invalid-first-character-of-tag-name",unexpectedEqualsSignBeforeAttributeName:"unexpected-equals-sign-before-attribute-name",missingEndTagName:"missing-end-tag-name",unexpectedCharacterInAttributeName:"unexpected-character-in-attribute-name",unknownNamedCharacterReference:"unknown-named-character-reference",missingSemicolonAfterCharacterReference:"missing-semicolon-after-character-reference",unexpectedCharacterAfterDoctypeSystemIdentifier:"unexpected-character-after-doctype-system-identifier",unexpectedCharacterInUnquotedAttributeValue:"unexpected-character-in-unquoted-attribute-value",eofBeforeTagName:"eof-before-tag-name",eofInTag:"eof-in-tag",missingAttributeValue:"missing-attribute-value",missingWhitespaceBetweenAttributes:"missing-whitespace-between-attributes",missingWhitespaceAfterDoctypePublicKeyword:"missing-whitespace-after-doctype-public-keyword",missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers:"missing-whitespace-between-doctype-public-and-system-identifiers",missingWhitespaceAfterDoctypeSystemKeyword:"missing-whitespace-after-doctype-system-keyword",missingQuoteBeforeDoctypePublicIdentifier:"missing-quote-before-doctype-public-identifier",missingQuoteBeforeDoctypeSystemIdentifier:"missing-quote-before-doctype-system-identifier",missingDoctypePublicIdentifier:"missing-doctype-public-identifier",missingDoctypeSystemIdentifier:"missing-doctype-system-identifier",abruptDoctypePublicIdentifier:"abrupt-doctype-public-identifier",abruptDoctypeSystemIdentifier:"abrupt-doctype-system-identifier",cdataInHtmlContent:"cdata-in-html-content",incorrectlyOpenedComment:"incorrectly-opened-comment",eofInScriptHtmlCommentLikeText:"eof-in-script-html-comment-like-text",eofInDoctype:"eof-in-doctype",nestedComment:"nested-comment",abruptClosingOfEmptyComment:"abrupt-closing-of-empty-comment",eofInComment:"eof-in-comment",incorrectlyClosedComment:"incorrectly-closed-comment",eofInCdata:"eof-in-cdata",absenceOfDigitsInNumericCharacterReference:"absence-of-digits-in-numeric-character-reference",nullCharacterReference:"null-character-reference",surrogateCharacterReference:"surrogate-character-reference",characterReferenceOutsideUnicodeRange:"character-reference-outside-unicode-range",controlCharacterReference:"control-character-reference",noncharacterCharacterReference:"noncharacter-character-reference",missingWhitespaceBeforeDoctypeName:"missing-whitespace-before-doctype-name",missingDoctypeName:"missing-doctype-name",invalidCharacterSequenceAfterDoctypeName:"invalid-character-sequence-after-doctype-name",duplicateAttribute:"duplicate-attribute",nonConformingDoctype:"non-conforming-doctype",missingDoctype:"missing-doctype",misplacedDoctype:"misplaced-doctype",endTagWithoutMatchingOpenElement:"end-tag-without-matching-open-element",closingOfElementWithOpenChildElements:"closing-of-element-with-open-child-elements",disallowedContentInNoscriptInHead:"disallowed-content-in-noscript-in-head",openElementsLeftAfterEof:"open-elements-left-after-eof",abandonedHeadElementChild:"abandoned-head-element-child",misplacedStartTagForHeadElement:"misplaced-start-tag-for-head-element",nestedNoscriptInHead:"nested-noscript-in-head",eofInElementThatCanContainOnlyText:"eof-in-element-that-can-contain-only-text"};const r=n.CODE_POINTS,i=65536;var o=class{constructor(){this.html=null,this.pos=-1,this.lastGapPos=-1,this.lastCharPos=-1,this.gapStack=[],this.skipNextNewLine=!1,this.lastChunkWritten=!1,this.endOfChunkHit=!1,this.bufferWaterline=i;}_err(){}_addGap(){this.gapStack.push(this.lastGapPos),this.lastGapPos=this.pos;}_processSurrogate(e){if(this.pos!==this.lastCharPos){const t=this.html.charCodeAt(this.pos+1);if(n.isSurrogatePair(t))return this.pos++,this._addGap(),n.getSurrogatePairCodePoint(e,t)}else if(!this.lastChunkWritten)return this.endOfChunkHit=!0,r.EOF;return this._err(s.surrogateInInputStream),e}dropParsedChunk(){this.pos>this.bufferWaterline&&(this.lastCharPos-=this.pos,this.html=this.html.substring(this.pos),this.pos=0,this.lastGapPos=-1,this.gapStack=[]);}write(e,t){this.html?this.html+=e:this.html=e,this.lastCharPos=this.html.length-1,this.endOfChunkHit=!1,this.lastChunkWritten=t;}insertHtmlAtCurrentPos(e){this.html=this.html.substring(0,this.pos+1)+e+this.html.substring(this.pos+1,this.html.length),this.lastCharPos=this.html.length-1,this.endOfChunkHit=!1;}advance(){if(this.pos++,this.pos>this.lastCharPos)return this.endOfChunkHit=!this.lastChunkWritten,r.EOF;let e=this.html.charCodeAt(this.pos);if(this.skipNextNewLine&&e===r.LINE_FEED)return this.skipNextNewLine=!1,this._addGap(),this.advance();if(e===r.CARRIAGE_RETURN)return this.skipNextNewLine=!0,r.LINE_FEED;return this.skipNextNewLine=!1,n.isSurrogate(e)&&(e=this._processSurrogate(e)),e>31&&e<127||e===r.LINE_FEED||e===r.CARRIAGE_RETURN||e>159&&e<64976||this._checkForProblematicCharacters(e),e}_checkForProblematicCharacters(e){n.isControlCodePoint(e)?this._err(s.controlCharacterInInputStream):n.isUndefinedCodePoint(e)&&this._err(s.noncharacterInInputStream);}retreat(){this.pos===this.lastGapPos&&(this.lastGapPos=this.gapStack.pop(),this.pos--),this.pos--;}},a=new Uint16Array([4,52,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,106,303,412,810,1432,1701,1796,1987,2114,2360,2420,2484,3170,3251,4140,4393,4575,4610,5106,5512,5728,6117,6274,6315,6345,6427,6516,7002,7910,8733,9323,9870,10170,10631,10893,11318,11386,11467,12773,13092,14474,14922,15448,15542,16419,17666,18166,18611,19004,19095,19298,19397,4,16,69,77,97,98,99,102,103,108,109,110,111,112,114,115,116,117,140,150,158,169,176,194,199,210,216,222,226,242,256,266,283,294,108,105,103,5,198,1,59,148,1,198,80,5,38,1,59,156,1,38,99,117,116,101,5,193,1,59,167,1,193,114,101,118,101,59,1,258,4,2,105,121,182,191,114,99,5,194,1,59,189,1,194,59,1,1040,114,59,3,55349,56580,114,97,118,101,5,192,1,59,208,1,192,112,104,97,59,1,913,97,99,114,59,1,256,100,59,1,10835,4,2,103,112,232,237,111,110,59,1,260,102,59,3,55349,56632,112,108,121,70,117,110,99,116,105,111,110,59,1,8289,105,110,103,5,197,1,59,264,1,197,4,2,99,115,272,277,114,59,3,55349,56476,105,103,110,59,1,8788,105,108,100,101,5,195,1,59,292,1,195,109,108,5,196,1,59,301,1,196,4,8,97,99,101,102,111,114,115,117,321,350,354,383,388,394,400,405,4,2,99,114,327,336,107,115,108,97,115,104,59,1,8726,4,2,118,119,342,345,59,1,10983,101,100,59,1,8966,121,59,1,1041,4,3,99,114,116,362,369,379,97,117,115,101,59,1,8757,110,111,117,108,108,105,115,59,1,8492,97,59,1,914,114,59,3,55349,56581,112,102,59,3,55349,56633,101,118,101,59,1,728,99,114,59,1,8492,109,112,101,113,59,1,8782,4,14,72,79,97,99,100,101,102,104,105,108,111,114,115,117,442,447,456,504,542,547,569,573,577,616,678,784,790,796,99,121,59,1,1063,80,89,5,169,1,59,454,1,169,4,3,99,112,121,464,470,497,117,116,101,59,1,262,4,2,59,105,476,478,1,8914,116,97,108,68,105,102,102,101,114,101,110,116,105,97,108,68,59,1,8517,108,101,121,115,59,1,8493,4,4,97,101,105,111,514,520,530,535,114,111,110,59,1,268,100,105,108,5,199,1,59,528,1,199,114,99,59,1,264,110,105,110,116,59,1,8752,111,116,59,1,266,4,2,100,110,553,560,105,108,108,97,59,1,184,116,101,114,68,111,116,59,1,183,114,59,1,8493,105,59,1,935,114,99,108,101,4,4,68,77,80,84,591,596,603,609,111,116,59,1,8857,105,110,117,115,59,1,8854,108,117,115,59,1,8853,105,109,101,115,59,1,8855,111,4,2,99,115,623,646,107,119,105,115,101,67,111,110,116,111,117,114,73,110,116,101,103,114,97,108,59,1,8754,101,67,117,114,108,121,4,2,68,81,658,671,111,117,98,108,101,81,117,111,116,101,59,1,8221,117,111,116,101,59,1,8217,4,4,108,110,112,117,688,701,736,753,111,110,4,2,59,101,696,698,1,8759,59,1,10868,4,3,103,105,116,709,717,722,114,117,101,110,116,59,1,8801,110,116,59,1,8751,111,117,114,73,110,116,101,103,114,97,108,59,1,8750,4,2,102,114,742,745,59,1,8450,111,100,117,99,116,59,1,8720,110,116,101,114,67,108,111,99,107,119,105,115,101,67,111,110,116,111,117,114,73,110,116,101,103,114,97,108,59,1,8755,111,115,115,59,1,10799,99,114,59,3,55349,56478,112,4,2,59,67,803,805,1,8915,97,112,59,1,8781,4,11,68,74,83,90,97,99,101,102,105,111,115,834,850,855,860,865,888,903,916,921,1011,1415,4,2,59,111,840,842,1,8517,116,114,97,104,100,59,1,10513,99,121,59,1,1026,99,121,59,1,1029,99,121,59,1,1039,4,3,103,114,115,873,879,883,103,101,114,59,1,8225,114,59,1,8609,104,118,59,1,10980,4,2,97,121,894,900,114,111,110,59,1,270,59,1,1044,108,4,2,59,116,910,912,1,8711,97,59,1,916,114,59,3,55349,56583,4,2,97,102,927,998,4,2,99,109,933,992,114,105,116,105,99,97,108,4,4,65,68,71,84,950,957,978,985,99,117,116,101,59,1,180,111,4,2,116,117,964,967,59,1,729,98,108,101,65,99,117,116,101,59,1,733,114,97,118,101,59,1,96,105,108,100,101,59,1,732,111,110,100,59,1,8900,102,101,114,101,110,116,105,97,108,68,59,1,8518,4,4,112,116,117,119,1021,1026,1048,1249,102,59,3,55349,56635,4,3,59,68,69,1034,1036,1041,1,168,111,116,59,1,8412,113,117,97,108,59,1,8784,98,108,101,4,6,67,68,76,82,85,86,1065,1082,1101,1189,1211,1236,111,110,116,111,117,114,73,110,116,101,103,114,97,108,59,1,8751,111,4,2,116,119,1089,1092,59,1,168,110,65,114,114,111,119,59,1,8659,4,2,101,111,1107,1141,102,116,4,3,65,82,84,1117,1124,1136,114,114,111,119,59,1,8656,105,103,104,116,65,114,114,111,119,59,1,8660,101,101,59,1,10980,110,103,4,2,76,82,1149,1177,101,102,116,4,2,65,82,1158,1165,114,114,111,119,59,1,10232,105,103,104,116,65,114,114,111,119,59,1,10234,105,103,104,116,65,114,114,111,119,59,1,10233,105,103,104,116,4,2,65,84,1199,1206,114,114,111,119,59,1,8658,101,101,59,1,8872,112,4,2,65,68,1218,1225,114,114,111,119,59,1,8657,111,119,110,65,114,114,111,119,59,1,8661,101,114,116,105,99,97,108,66,97,114,59,1,8741,110,4,6,65,66,76,82,84,97,1264,1292,1299,1352,1391,1408,114,114,111,119,4,3,59,66,85,1276,1278,1283,1,8595,97,114,59,1,10515,112,65,114,114,111,119,59,1,8693,114,101,118,101,59,1,785,101,102,116,4,3,82,84,86,1310,1323,1334,105,103,104,116,86,101,99,116,111,114,59,1,10576,101,101,86,101,99,116,111,114,59,1,10590,101,99,116,111,114,4,2,59,66,1345,1347,1,8637,97,114,59,1,10582,105,103,104,116,4,2,84,86,1362,1373,101,101,86,101,99,116,111,114,59,1,10591,101,99,116,111,114,4,2,59,66,1384,1386,1,8641,97,114,59,1,10583,101,101,4,2,59,65,1399,1401,1,8868,114,114,111,119,59,1,8615,114,114,111,119,59,1,8659,4,2,99,116,1421,1426,114,59,3,55349,56479,114,111,107,59,1,272,4,16,78,84,97,99,100,102,103,108,109,111,112,113,115,116,117,120,1466,1470,1478,1489,1515,1520,1525,1536,1544,1593,1609,1617,1650,1664,1668,1677,71,59,1,330,72,5,208,1,59,1476,1,208,99,117,116,101,5,201,1,59,1487,1,201,4,3,97,105,121,1497,1503,1512,114,111,110,59,1,282,114,99,5,202,1,59,1510,1,202,59,1,1069,111,116,59,1,278,114,59,3,55349,56584,114,97,118,101,5,200,1,59,1534,1,200,101,109,101,110,116,59,1,8712,4,2,97,112,1550,1555,99,114,59,1,274,116,121,4,2,83,86,1563,1576,109,97,108,108,83,113,117,97,114,101,59,1,9723,101,114,121,83,109,97,108,108,83,113,117,97,114,101,59,1,9643,4,2,103,112,1599,1604,111,110,59,1,280,102,59,3,55349,56636,115,105,108,111,110,59,1,917,117,4,2,97,105,1624,1640,108,4,2,59,84,1631,1633,1,10869,105,108,100,101,59,1,8770,108,105,98,114,105,117,109,59,1,8652,4,2,99,105,1656,1660,114,59,1,8496,109,59,1,10867,97,59,1,919,109,108,5,203,1,59,1675,1,203,4,2,105,112,1683,1689,115,116,115,59,1,8707,111,110,101,110,116,105,97,108,69,59,1,8519,4,5,99,102,105,111,115,1713,1717,1722,1762,1791,121,59,1,1060,114,59,3,55349,56585,108,108,101,100,4,2,83,86,1732,1745,109,97,108,108,83,113,117,97,114,101,59,1,9724,101,114,121,83,109,97,108,108,83,113,117,97,114,101,59,1,9642,4,3,112,114,117,1770,1775,1781,102,59,3,55349,56637,65,108,108,59,1,8704,114,105,101,114,116,114,102,59,1,8497,99,114,59,1,8497,4,12,74,84,97,98,99,100,102,103,111,114,115,116,1822,1827,1834,1848,1855,1877,1882,1887,1890,1896,1978,1984,99,121,59,1,1027,5,62,1,59,1832,1,62,109,109,97,4,2,59,100,1843,1845,1,915,59,1,988,114,101,118,101,59,1,286,4,3,101,105,121,1863,1869,1874,100,105,108,59,1,290,114,99,59,1,284,59,1,1043,111,116,59,1,288,114,59,3,55349,56586,59,1,8921,112,102,59,3,55349,56638,101,97,116,101,114,4,6,69,70,71,76,83,84,1915,1933,1944,1953,1959,1971,113,117,97,108,4,2,59,76,1925,1927,1,8805,101,115,115,59,1,8923,117,108,108,69,113,117,97,108,59,1,8807,114,101,97,116,101,114,59,1,10914,101,115,115,59,1,8823,108,97,110,116,69,113,117,97,108,59,1,10878,105,108,100,101,59,1,8819,99,114,59,3,55349,56482,59,1,8811,4,8,65,97,99,102,105,111,115,117,2005,2012,2026,2032,2036,2049,2073,2089,82,68,99,121,59,1,1066,4,2,99,116,2018,2023,101,107,59,1,711,59,1,94,105,114,99,59,1,292,114,59,1,8460,108,98,101,114,116,83,112,97,99,101,59,1,8459,4,2,112,114,2055,2059,102,59,1,8461,105,122,111,110,116,97,108,76,105,110,101,59,1,9472,4,2,99,116,2079,2083,114,59,1,8459,114,111,107,59,1,294,109,112,4,2,68,69,2097,2107,111,119,110,72,117,109,112,59,1,8782,113,117,97,108,59,1,8783,4,14,69,74,79,97,99,100,102,103,109,110,111,115,116,117,2144,2149,2155,2160,2171,2189,2194,2198,2209,2245,2307,2329,2334,2341,99,121,59,1,1045,108,105,103,59,1,306,99,121,59,1,1025,99,117,116,101,5,205,1,59,2169,1,205,4,2,105,121,2177,2186,114,99,5,206,1,59,2184,1,206,59,1,1048,111,116,59,1,304,114,59,1,8465,114,97,118,101,5,204,1,59,2207,1,204,4,3,59,97,112,2217,2219,2238,1,8465,4,2,99,103,2225,2229,114,59,1,298,105,110,97,114,121,73,59,1,8520,108,105,101,115,59,1,8658,4,2,116,118,2251,2281,4,2,59,101,2257,2259,1,8748,4,2,103,114,2265,2271,114,97,108,59,1,8747,115,101,99,116,105,111,110,59,1,8898,105,115,105,98,108,101,4,2,67,84,2293,2300,111,109,109,97,59,1,8291,105,109,101,115,59,1,8290,4,3,103,112,116,2315,2320,2325,111,110,59,1,302,102,59,3,55349,56640,97,59,1,921,99,114,59,1,8464,105,108,100,101,59,1,296,4,2,107,109,2347,2352,99,121,59,1,1030,108,5,207,1,59,2358,1,207,4,5,99,102,111,115,117,2372,2386,2391,2397,2414,4,2,105,121,2378,2383,114,99,59,1,308,59,1,1049,114,59,3,55349,56589,112,102,59,3,55349,56641,4,2,99,101,2403,2408,114,59,3,55349,56485,114,99,121,59,1,1032,107,99,121,59,1,1028,4,7,72,74,97,99,102,111,115,2436,2441,2446,2452,2467,2472,2478,99,121,59,1,1061,99,121,59,1,1036,112,112,97,59,1,922,4,2,101,121,2458,2464,100,105,108,59,1,310,59,1,1050,114,59,3,55349,56590,112,102,59,3,55349,56642,99,114,59,3,55349,56486,4,11,74,84,97,99,101,102,108,109,111,115,116,2508,2513,2520,2562,2585,2981,2986,3004,3011,3146,3167,99,121,59,1,1033,5,60,1,59,2518,1,60,4,5,99,109,110,112,114,2532,2538,2544,2548,2558,117,116,101,59,1,313,98,100,97,59,1,923,103,59,1,10218,108,97,99,101,116,114,102,59,1,8466,114,59,1,8606,4,3,97,101,121,2570,2576,2582,114,111,110,59,1,317,100,105,108,59,1,315,59,1,1051,4,2,102,115,2591,2907,116,4,10,65,67,68,70,82,84,85,86,97,114,2614,2663,2672,2728,2735,2760,2820,2870,2888,2895,4,2,110,114,2620,2633,103,108,101,66,114,97,99,107,101,116,59,1,10216,114,111,119,4,3,59,66,82,2644,2646,2651,1,8592,97,114,59,1,8676,105,103,104,116,65,114,114,111,119,59,1,8646,101,105,108,105,110,103,59,1,8968,111,4,2,117,119,2679,2692,98,108,101,66,114,97,99,107,101,116,59,1,10214,110,4,2,84,86,2699,2710,101,101,86,101,99,116,111,114,59,1,10593,101,99,116,111,114,4,2,59,66,2721,2723,1,8643,97,114,59,1,10585,108,111,111,114,59,1,8970,105,103,104,116,4,2,65,86,2745,2752,114,114,111,119,59,1,8596,101,99,116,111,114,59,1,10574,4,2,101,114,2766,2792,101,4,3,59,65,86,2775,2777,2784,1,8867,114,114,111,119,59,1,8612,101,99,116,111,114,59,1,10586,105,97,110,103,108,101,4,3,59,66,69,2806,2808,2813,1,8882,97,114,59,1,10703,113,117,97,108,59,1,8884,112,4,3,68,84,86,2829,2841,2852,111,119,110,86,101,99,116,111,114,59,1,10577,101,101,86,101,99,116,111,114,59,1,10592,101,99,116,111,114,4,2,59,66,2863,2865,1,8639,97,114,59,1,10584,101,99,116,111,114,4,2,59,66,2881,2883,1,8636,97,114,59,1,10578,114,114,111,119,59,1,8656,105,103,104,116,97,114,114,111,119,59,1,8660,115,4,6,69,70,71,76,83,84,2922,2936,2947,2956,2962,2974,113,117,97,108,71,114,101,97,116,101,114,59,1,8922,117,108,108,69,113,117,97,108,59,1,8806,114,101,97,116,101,114,59,1,8822,101,115,115,59,1,10913,108,97,110,116,69,113,117,97,108,59,1,10877,105,108,100,101,59,1,8818,114,59,3,55349,56591,4,2,59,101,2992,2994,1,8920,102,116,97,114,114,111,119,59,1,8666,105,100,111,116,59,1,319,4,3,110,112,119,3019,3110,3115,103,4,4,76,82,108,114,3030,3058,3070,3098,101,102,116,4,2,65,82,3039,3046,114,114,111,119,59,1,10229,105,103,104,116,65,114,114,111,119,59,1,10231,105,103,104,116,65,114,114,111,119,59,1,10230,101,102,116,4,2,97,114,3079,3086,114,114,111,119,59,1,10232,105,103,104,116,97,114,114,111,119,59,1,10234,105,103,104,116,97,114,114,111,119,59,1,10233,102,59,3,55349,56643,101,114,4,2,76,82,3123,3134,101,102,116,65,114,114,111,119,59,1,8601,105,103,104,116,65,114,114,111,119,59,1,8600,4,3,99,104,116,3154,3158,3161,114,59,1,8466,59,1,8624,114,111,107,59,1,321,59,1,8810,4,8,97,99,101,102,105,111,115,117,3188,3192,3196,3222,3227,3237,3243,3248,112,59,1,10501,121,59,1,1052,4,2,100,108,3202,3213,105,117,109,83,112,97,99,101,59,1,8287,108,105,110,116,114,102,59,1,8499,114,59,3,55349,56592,110,117,115,80,108,117,115,59,1,8723,112,102,59,3,55349,56644,99,114,59,1,8499,59,1,924,4,9,74,97,99,101,102,111,115,116,117,3271,3276,3283,3306,3422,3427,4120,4126,4137,99,121,59,1,1034,99,117,116,101,59,1,323,4,3,97,101,121,3291,3297,3303,114,111,110,59,1,327,100,105,108,59,1,325,59,1,1053,4,3,103,115,119,3314,3380,3415,97,116,105,118,101,4,3,77,84,86,3327,3340,3365,101,100,105,117,109,83,112,97,99,101,59,1,8203,104,105,4,2,99,110,3348,3357,107,83,112,97,99,101,59,1,8203,83,112,97,99,101,59,1,8203,101,114,121,84,104,105,110,83,112,97,99,101,59,1,8203,116,101,100,4,2,71,76,3389,3405,114,101,97,116,101,114,71,114,101,97,116,101,114,59,1,8811,101,115,115,76,101,115,115,59,1,8810,76,105,110,101,59,1,10,114,59,3,55349,56593,4,4,66,110,112,116,3437,3444,3460,3464,114,101,97,107,59,1,8288,66,114,101,97,107,105,110,103,83,112,97,99,101,59,1,160,102,59,1,8469,4,13,59,67,68,69,71,72,76,78,80,82,83,84,86,3492,3494,3517,3536,3578,3657,3685,3784,3823,3860,3915,4066,4107,1,10988,4,2,111,117,3500,3510,110,103,114,117,101,110,116,59,1,8802,112,67,97,112,59,1,8813,111,117,98,108,101,86,101,114,116,105,99,97,108,66,97,114,59,1,8742,4,3,108,113,120,3544,3552,3571,101,109,101,110,116,59,1,8713,117,97,108,4,2,59,84,3561,3563,1,8800,105,108,100,101,59,3,8770,824,105,115,116,115,59,1,8708,114,101,97,116,101,114,4,7,59,69,70,71,76,83,84,3600,3602,3609,3621,3631,3637,3650,1,8815,113,117,97,108,59,1,8817,117,108,108,69,113,117,97,108,59,3,8807,824,114,101,97,116,101,114,59,3,8811,824,101,115,115,59,1,8825,108,97,110,116,69,113,117,97,108,59,3,10878,824,105,108,100,101,59,1,8821,117,109,112,4,2,68,69,3666,3677,111,119,110,72,117,109,112,59,3,8782,824,113,117,97,108,59,3,8783,824,101,4,2,102,115,3692,3724,116,84,114,105,97,110,103,108,101,4,3,59,66,69,3709,3711,3717,1,8938,97,114,59,3,10703,824,113,117,97,108,59,1,8940,115,4,6,59,69,71,76,83,84,3739,3741,3748,3757,3764,3777,1,8814,113,117,97,108,59,1,8816,114,101,97,116,101,114,59,1,8824,101,115,115,59,3,8810,824,108,97,110,116,69,113,117,97,108,59,3,10877,824,105,108,100,101,59,1,8820,101,115,116,101,100,4,2,71,76,3795,3812,114,101,97,116,101,114,71,114,101,97,116,101,114,59,3,10914,824,101,115,115,76,101,115,115,59,3,10913,824,114,101,99,101,100,101,115,4,3,59,69,83,3838,3840,3848,1,8832,113,117,97,108,59,3,10927,824,108,97,110,116,69,113,117,97,108,59,1,8928,4,2,101,105,3866,3881,118,101,114,115,101,69,108,101,109,101,110,116,59,1,8716,103,104,116,84,114,105,97,110,103,108,101,4,3,59,66,69,3900,3902,3908,1,8939,97,114,59,3,10704,824,113,117,97,108,59,1,8941,4,2,113,117,3921,3973,117,97,114,101,83,117,4,2,98,112,3933,3952,115,101,116,4,2,59,69,3942,3945,3,8847,824,113,117,97,108,59,1,8930,101,114,115,101,116,4,2,59,69,3963,3966,3,8848,824,113,117,97,108,59,1,8931,4,3,98,99,112,3981,4e3,4045,115,101,116,4,2,59,69,3990,3993,3,8834,8402,113,117,97,108,59,1,8840,99,101,101,100,115,4,4,59,69,83,84,4015,4017,4025,4037,1,8833,113,117,97,108,59,3,10928,824,108,97,110,116,69,113,117,97,108,59,1,8929,105,108,100,101,59,3,8831,824,101,114,115,101,116,4,2,59,69,4056,4059,3,8835,8402,113,117,97,108,59,1,8841,105,108,100,101,4,4,59,69,70,84,4080,4082,4089,4100,1,8769,113,117,97,108,59,1,8772,117,108,108,69,113,117,97,108,59,1,8775,105,108,100,101,59,1,8777,101,114,116,105,99,97,108,66,97,114,59,1,8740,99,114,59,3,55349,56489,105,108,100,101,5,209,1,59,4135,1,209,59,1,925,4,14,69,97,99,100,102,103,109,111,112,114,115,116,117,118,4170,4176,4187,4205,4212,4217,4228,4253,4259,4292,4295,4316,4337,4346,108,105,103,59,1,338,99,117,116,101,5,211,1,59,4185,1,211,4,2,105,121,4193,4202,114,99,5,212,1,59,4200,1,212,59,1,1054,98,108,97,99,59,1,336,114,59,3,55349,56594,114,97,118,101,5,210,1,59,4226,1,210,4,3,97,101,105,4236,4241,4246,99,114,59,1,332,103,97,59,1,937,99,114,111,110,59,1,927,112,102,59,3,55349,56646,101,110,67,117,114,108,121,4,2,68,81,4272,4285,111,117,98,108,101,81,117,111,116,101,59,1,8220,117,111,116,101,59,1,8216,59,1,10836,4,2,99,108,4301,4306,114,59,3,55349,56490,97,115,104,5,216,1,59,4314,1,216,105,4,2,108,109,4323,4332,100,101,5,213,1,59,4330,1,213,101,115,59,1,10807,109,108,5,214,1,59,4344,1,214,101,114,4,2,66,80,4354,4380,4,2,97,114,4360,4364,114,59,1,8254,97,99,4,2,101,107,4372,4375,59,1,9182,101,116,59,1,9140,97,114,101,110,116,104,101,115,105,115,59,1,9180,4,9,97,99,102,104,105,108,111,114,115,4413,4422,4426,4431,4435,4438,4448,4471,4561,114,116,105,97,108,68,59,1,8706,121,59,1,1055,114,59,3,55349,56595,105,59,1,934,59,1,928,117,115,77,105,110,117,115,59,1,177,4,2,105,112,4454,4467,110,99,97,114,101,112,108,97,110,101,59,1,8460,102,59,1,8473,4,4,59,101,105,111,4481,4483,4526,4531,1,10939,99,101,100,101,115,4,4,59,69,83,84,4498,4500,4507,4519,1,8826,113,117,97,108,59,1,10927,108,97,110,116,69,113,117,97,108,59,1,8828,105,108,100,101,59,1,8830,109,101,59,1,8243,4,2,100,112,4537,4543,117,99,116,59,1,8719,111,114,116,105,111,110,4,2,59,97,4555,4557,1,8759,108,59,1,8733,4,2,99,105,4567,4572,114,59,3,55349,56491,59,1,936,4,4,85,102,111,115,4585,4594,4599,4604,79,84,5,34,1,59,4592,1,34,114,59,3,55349,56596,112,102,59,1,8474,99,114,59,3,55349,56492,4,12,66,69,97,99,101,102,104,105,111,114,115,117,4636,4642,4650,4681,4704,4763,4767,4771,5047,5069,5081,5094,97,114,114,59,1,10512,71,5,174,1,59,4648,1,174,4,3,99,110,114,4658,4664,4668,117,116,101,59,1,340,103,59,1,10219,114,4,2,59,116,4675,4677,1,8608,108,59,1,10518,4,3,97,101,121,4689,4695,4701,114,111,110,59,1,344,100,105,108,59,1,342,59,1,1056,4,2,59,118,4710,4712,1,8476,101,114,115,101,4,2,69,85,4722,4748,4,2,108,113,4728,4736,101,109,101,110,116,59,1,8715,117,105,108,105,98,114,105,117,109,59,1,8651,112,69,113,117,105,108,105,98,114,105,117,109,59,1,10607,114,59,1,8476,111,59,1,929,103,104,116,4,8,65,67,68,70,84,85,86,97,4792,4840,4849,4905,4912,4972,5022,5040,4,2,110,114,4798,4811,103,108,101,66,114,97,99,107,101,116,59,1,10217,114,111,119,4,3,59,66,76,4822,4824,4829,1,8594,97,114,59,1,8677,101,102,116,65,114,114,111,119,59,1,8644,101,105,108,105,110,103,59,1,8969,111,4,2,117,119,4856,4869,98,108,101,66,114,97,99,107,101,116,59,1,10215,110,4,2,84,86,4876,4887,101,101,86,101,99,116,111,114,59,1,10589,101,99,116,111,114,4,2,59,66,4898,4900,1,8642,97,114,59,1,10581,108,111,111,114,59,1,8971,4,2,101,114,4918,4944,101,4,3,59,65,86,4927,4929,4936,1,8866,114,114,111,119,59,1,8614,101,99,116,111,114,59,1,10587,105,97,110,103,108,101,4,3,59,66,69,4958,4960,4965,1,8883,97,114,59,1,10704,113,117,97,108,59,1,8885,112,4,3,68,84,86,4981,4993,5004,111,119,110,86,101,99,116,111,114,59,1,10575,101,101,86,101,99,116,111,114,59,1,10588,101,99,116,111,114,4,2,59,66,5015,5017,1,8638,97,114,59,1,10580,101,99,116,111,114,4,2,59,66,5033,5035,1,8640,97,114,59,1,10579,114,114,111,119,59,1,8658,4,2,112,117,5053,5057,102,59,1,8477,110,100,73,109,112,108,105,101,115,59,1,10608,105,103,104,116,97,114,114,111,119,59,1,8667,4,2,99,104,5087,5091,114,59,1,8475,59,1,8625,108,101,68,101,108,97,121,101,100,59,1,10740,4,13,72,79,97,99,102,104,105,109,111,113,115,116,117,5134,5150,5157,5164,5198,5203,5259,5265,5277,5283,5374,5380,5385,4,2,67,99,5140,5146,72,99,121,59,1,1065,121,59,1,1064,70,84,99,121,59,1,1068,99,117,116,101,59,1,346,4,5,59,97,101,105,121,5176,5178,5184,5190,5195,1,10940,114,111,110,59,1,352,100,105,108,59,1,350,114,99,59,1,348,59,1,1057,114,59,3,55349,56598,111,114,116,4,4,68,76,82,85,5216,5227,5238,5250,111,119,110,65,114,114,111,119,59,1,8595,101,102,116,65,114,114,111,119,59,1,8592,105,103,104,116,65,114,114,111,119,59,1,8594,112,65,114,114,111,119,59,1,8593,103,109,97,59,1,931,97,108,108,67,105,114,99,108,101,59,1,8728,112,102,59,3,55349,56650,4,2,114,117,5289,5293,116,59,1,8730,97,114,101,4,4,59,73,83,85,5306,5308,5322,5367,1,9633,110,116,101,114,115,101,99,116,105,111,110,59,1,8851,117,4,2,98,112,5329,5347,115,101,116,4,2,59,69,5338,5340,1,8847,113,117,97,108,59,1,8849,101,114,115,101,116,4,2,59,69,5358,5360,1,8848,113,117,97,108,59,1,8850,110,105,111,110,59,1,8852,99,114,59,3,55349,56494,97,114,59,1,8902,4,4,98,99,109,112,5395,5420,5475,5478,4,2,59,115,5401,5403,1,8912,101,116,4,2,59,69,5411,5413,1,8912,113,117,97,108,59,1,8838,4,2,99,104,5426,5468,101,101,100,115,4,4,59,69,83,84,5440,5442,5449,5461,1,8827,113,117,97,108,59,1,10928,108,97,110,116,69,113,117,97,108,59,1,8829,105,108,100,101,59,1,8831,84,104,97,116,59,1,8715,59,1,8721,4,3,59,101,115,5486,5488,5507,1,8913,114,115,101,116,4,2,59,69,5498,5500,1,8835,113,117,97,108,59,1,8839,101,116,59,1,8913,4,11,72,82,83,97,99,102,104,105,111,114,115,5536,5546,5552,5567,5579,5602,5607,5655,5695,5701,5711,79,82,78,5,222,1,59,5544,1,222,65,68,69,59,1,8482,4,2,72,99,5558,5563,99,121,59,1,1035,121,59,1,1062,4,2,98,117,5573,5576,59,1,9,59,1,932,4,3,97,101,121,5587,5593,5599,114,111,110,59,1,356,100,105,108,59,1,354,59,1,1058,114,59,3,55349,56599,4,2,101,105,5613,5631,4,2,114,116,5619,5627,101,102,111,114,101,59,1,8756,97,59,1,920,4,2,99,110,5637,5647,107,83,112,97,99,101,59,3,8287,8202,83,112,97,99,101,59,1,8201,108,100,101,4,4,59,69,70,84,5668,5670,5677,5688,1,8764,113,117,97,108,59,1,8771,117,108,108,69,113,117,97,108,59,1,8773,105,108,100,101,59,1,8776,112,102,59,3,55349,56651,105,112,108,101,68,111,116,59,1,8411,4,2,99,116,5717,5722,114,59,3,55349,56495,114,111,107,59,1,358,4,14,97,98,99,100,102,103,109,110,111,112,114,115,116,117,5758,5789,5805,5823,5830,5835,5846,5852,5921,5937,6089,6095,6101,6108,4,2,99,114,5764,5774,117,116,101,5,218,1,59,5772,1,218,114,4,2,59,111,5781,5783,1,8607,99,105,114,59,1,10569,114,4,2,99,101,5796,5800,121,59,1,1038,118,101,59,1,364,4,2,105,121,5811,5820,114,99,5,219,1,59,5818,1,219,59,1,1059,98,108,97,99,59,1,368,114,59,3,55349,56600,114,97,118,101,5,217,1,59,5844,1,217,97,99,114,59,1,362,4,2,100,105,5858,5905,101,114,4,2,66,80,5866,5892,4,2,97,114,5872,5876,114,59,1,95,97,99,4,2,101,107,5884,5887,59,1,9183,101,116,59,1,9141,97,114,101,110,116,104,101,115,105,115,59,1,9181,111,110,4,2,59,80,5913,5915,1,8899,108,117,115,59,1,8846,4,2,103,112,5927,5932,111,110,59,1,370,102,59,3,55349,56652,4,8,65,68,69,84,97,100,112,115,5955,5985,5996,6009,6026,6033,6044,6075,114,114,111,119,4,3,59,66,68,5967,5969,5974,1,8593,97,114,59,1,10514,111,119,110,65,114,114,111,119,59,1,8645,111,119,110,65,114,114,111,119,59,1,8597,113,117,105,108,105,98,114,105,117,109,59,1,10606,101,101,4,2,59,65,6017,6019,1,8869,114,114,111,119,59,1,8613,114,114,111,119,59,1,8657,111,119,110,97,114,114,111,119,59,1,8661,101,114,4,2,76,82,6052,6063,101,102,116,65,114,114,111,119,59,1,8598,105,103,104,116,65,114,114,111,119,59,1,8599,105,4,2,59,108,6082,6084,1,978,111,110,59,1,933,105,110,103,59,1,366,99,114,59,3,55349,56496,105,108,100,101,59,1,360,109,108,5,220,1,59,6115,1,220,4,9,68,98,99,100,101,102,111,115,118,6137,6143,6148,6152,6166,6250,6255,6261,6267,97,115,104,59,1,8875,97,114,59,1,10987,121,59,1,1042,97,115,104,4,2,59,108,6161,6163,1,8873,59,1,10982,4,2,101,114,6172,6175,59,1,8897,4,3,98,116,121,6183,6188,6238,97,114,59,1,8214,4,2,59,105,6194,6196,1,8214,99,97,108,4,4,66,76,83,84,6209,6214,6220,6231,97,114,59,1,8739,105,110,101,59,1,124,101,112,97,114,97,116,111,114,59,1,10072,105,108,100,101,59,1,8768,84,104,105,110,83,112,97,99,101,59,1,8202,114,59,3,55349,56601,112,102,59,3,55349,56653,99,114,59,3,55349,56497,100,97,115,104,59,1,8874,4,5,99,101,102,111,115,6286,6292,6298,6303,6309,105,114,99,59,1,372,100,103,101,59,1,8896,114,59,3,55349,56602,112,102,59,3,55349,56654,99,114,59,3,55349,56498,4,4,102,105,111,115,6325,6330,6333,6339,114,59,3,55349,56603,59,1,926,112,102,59,3,55349,56655,99,114,59,3,55349,56499,4,9,65,73,85,97,99,102,111,115,117,6365,6370,6375,6380,6391,6405,6410,6416,6422,99,121,59,1,1071,99,121,59,1,1031,99,121,59,1,1070,99,117,116,101,5,221,1,59,6389,1,221,4,2,105,121,6397,6402,114,99,59,1,374,59,1,1067,114,59,3,55349,56604,112,102,59,3,55349,56656,99,114,59,3,55349,56500,109,108,59,1,376,4,8,72,97,99,100,101,102,111,115,6445,6450,6457,6472,6477,6501,6505,6510,99,121,59,1,1046,99,117,116,101,59,1,377,4,2,97,121,6463,6469,114,111,110,59,1,381,59,1,1047,111,116,59,1,379,4,2,114,116,6483,6497,111,87,105,100,116,104,83,112,97,99,101,59,1,8203,97,59,1,918,114,59,1,8488,112,102,59,1,8484,99,114,59,3,55349,56501,4,16,97,98,99,101,102,103,108,109,110,111,112,114,115,116,117,119,6550,6561,6568,6612,6622,6634,6645,6672,6699,6854,6870,6923,6933,6963,6974,6983,99,117,116,101,5,225,1,59,6559,1,225,114,101,118,101,59,1,259,4,6,59,69,100,105,117,121,6582,6584,6588,6591,6600,6609,1,8766,59,3,8766,819,59,1,8767,114,99,5,226,1,59,6598,1,226,116,101,5,180,1,59,6607,1,180,59,1,1072,108,105,103,5,230,1,59,6620,1,230,4,2,59,114,6628,6630,1,8289,59,3,55349,56606,114,97,118,101,5,224,1,59,6643,1,224,4,2,101,112,6651,6667,4,2,102,112,6657,6663,115,121,109,59,1,8501,104,59,1,8501,104,97,59,1,945,4,2,97,112,6678,6692,4,2,99,108,6684,6688,114,59,1,257,103,59,1,10815,5,38,1,59,6697,1,38,4,2,100,103,6705,6737,4,5,59,97,100,115,118,6717,6719,6724,6727,6734,1,8743,110,100,59,1,10837,59,1,10844,108,111,112,101,59,1,10840,59,1,10842,4,7,59,101,108,109,114,115,122,6753,6755,6758,6762,6814,6835,6848,1,8736,59,1,10660,101,59,1,8736,115,100,4,2,59,97,6770,6772,1,8737,4,8,97,98,99,100,101,102,103,104,6790,6793,6796,6799,6802,6805,6808,6811,59,1,10664,59,1,10665,59,1,10666,59,1,10667,59,1,10668,59,1,10669,59,1,10670,59,1,10671,116,4,2,59,118,6821,6823,1,8735,98,4,2,59,100,6830,6832,1,8894,59,1,10653,4,2,112,116,6841,6845,104,59,1,8738,59,1,197,97,114,114,59,1,9084,4,2,103,112,6860,6865,111,110,59,1,261,102,59,3,55349,56658,4,7,59,69,97,101,105,111,112,6886,6888,6891,6897,6900,6904,6908,1,8776,59,1,10864,99,105,114,59,1,10863,59,1,8778,100,59,1,8779,115,59,1,39,114,111,120,4,2,59,101,6917,6919,1,8776,113,59,1,8778,105,110,103,5,229,1,59,6931,1,229,4,3,99,116,121,6941,6946,6949,114,59,3,55349,56502,59,1,42,109,112,4,2,59,101,6957,6959,1,8776,113,59,1,8781,105,108,100,101,5,227,1,59,6972,1,227,109,108,5,228,1,59,6981,1,228,4,2,99,105,6989,6997,111,110,105,110,116,59,1,8755,110,116,59,1,10769,4,16,78,97,98,99,100,101,102,105,107,108,110,111,112,114,115,117,7036,7041,7119,7135,7149,7155,7219,7224,7347,7354,7463,7489,7786,7793,7814,7866,111,116,59,1,10989,4,2,99,114,7047,7094,107,4,4,99,101,112,115,7058,7064,7073,7080,111,110,103,59,1,8780,112,115,105,108,111,110,59,1,1014,114,105,109,101,59,1,8245,105,109,4,2,59,101,7088,7090,1,8765,113,59,1,8909,4,2,118,119,7100,7105,101,101,59,1,8893,101,100,4,2,59,103,7113,7115,1,8965,101,59,1,8965,114,107,4,2,59,116,7127,7129,1,9141,98,114,107,59,1,9142,4,2,111,121,7141,7146,110,103,59,1,8780,59,1,1073,113,117,111,59,1,8222,4,5,99,109,112,114,116,7167,7181,7188,7193,7199,97,117,115,4,2,59,101,7176,7178,1,8757,59,1,8757,112,116,121,118,59,1,10672,115,105,59,1,1014,110,111,117,59,1,8492,4,3,97,104,119,7207,7210,7213,59,1,946,59,1,8502,101,101,110,59,1,8812,114,59,3,55349,56607,103,4,7,99,111,115,116,117,118,119,7241,7262,7288,7305,7328,7335,7340,4,3,97,105,117,7249,7253,7258,112,59,1,8898,114,99,59,1,9711,112,59,1,8899,4,3,100,112,116,7270,7275,7281,111,116,59,1,10752,108,117,115,59,1,10753,105,109,101,115,59,1,10754,4,2,113,116,7294,7300,99,117,112,59,1,10758,97,114,59,1,9733,114,105,97,110,103,108,101,4,2,100,117,7318,7324,111,119,110,59,1,9661,112,59,1,9651,112,108,117,115,59,1,10756,101,101,59,1,8897,101,100,103,101,59,1,8896,97,114,111,119,59,1,10509,4,3,97,107,111,7362,7436,7458,4,2,99,110,7368,7432,107,4,3,108,115,116,7377,7386,7394,111,122,101,110,103,101,59,1,10731,113,117,97,114,101,59,1,9642,114,105,97,110,103,108,101,4,4,59,100,108,114,7411,7413,7419,7425,1,9652,111,119,110,59,1,9662,101,102,116,59,1,9666,105,103,104,116,59,1,9656,107,59,1,9251,4,2,49,51,7442,7454,4,2,50,52,7448,7451,59,1,9618,59,1,9617,52,59,1,9619,99,107,59,1,9608,4,2,101,111,7469,7485,4,2,59,113,7475,7478,3,61,8421,117,105,118,59,3,8801,8421,116,59,1,8976,4,4,112,116,119,120,7499,7504,7517,7523,102,59,3,55349,56659,4,2,59,116,7510,7512,1,8869,111,109,59,1,8869,116,105,101,59,1,8904,4,12,68,72,85,86,98,100,104,109,112,116,117,118,7549,7571,7597,7619,7655,7660,7682,7708,7715,7721,7728,7750,4,4,76,82,108,114,7559,7562,7565,7568,59,1,9559,59,1,9556,59,1,9558,59,1,9555,4,5,59,68,85,100,117,7583,7585,7588,7591,7594,1,9552,59,1,9574,59,1,9577,59,1,9572,59,1,9575,4,4,76,82,108,114,7607,7610,7613,7616,59,1,9565,59,1,9562,59,1,9564,59,1,9561,4,7,59,72,76,82,104,108,114,7635,7637,7640,7643,7646,7649,7652,1,9553,59,1,9580,59,1,9571,59,1,9568,59,1,9579,59,1,9570,59,1,9567,111,120,59,1,10697,4,4,76,82,108,114,7670,7673,7676,7679,59,1,9557,59,1,9554,59,1,9488,59,1,9484,4,5,59,68,85,100,117,7694,7696,7699,7702,7705,1,9472,59,1,9573,59,1,9576,59,1,9516,59,1,9524,105,110,117,115,59,1,8863,108,117,115,59,1,8862,105,109,101,115,59,1,8864,4,4,76,82,108,114,7738,7741,7744,7747,59,1,9563,59,1,9560,59,1,9496,59,1,9492,4,7,59,72,76,82,104,108,114,7766,7768,7771,7774,7777,7780,7783,1,9474,59,1,9578,59,1,9569,59,1,9566,59,1,9532,59,1,9508,59,1,9500,114,105,109,101,59,1,8245,4,2,101,118,7799,7804,118,101,59,1,728,98,97,114,5,166,1,59,7812,1,166,4,4,99,101,105,111,7824,7829,7834,7846,114,59,3,55349,56503,109,105,59,1,8271,109,4,2,59,101,7841,7843,1,8765,59,1,8909,108,4,3,59,98,104,7855,7857,7860,1,92,59,1,10693,115,117,98,59,1,10184,4,2,108,109,7872,7885,108,4,2,59,101,7879,7881,1,8226,116,59,1,8226,112,4,3,59,69,101,7894,7896,7899,1,8782,59,1,10926,4,2,59,113,7905,7907,1,8783,59,1,8783,4,15,97,99,100,101,102,104,105,108,111,114,115,116,117,119,121,7942,8021,8075,8080,8121,8126,8157,8279,8295,8430,8446,8485,8491,8707,8726,4,3,99,112,114,7950,7956,8007,117,116,101,59,1,263,4,6,59,97,98,99,100,115,7970,7972,7977,7984,7998,8003,1,8745,110,100,59,1,10820,114,99,117,112,59,1,10825,4,2,97,117,7990,7994,112,59,1,10827,112,59,1,10823,111,116,59,1,10816,59,3,8745,65024,4,2,101,111,8013,8017,116,59,1,8257,110,59,1,711,4,4,97,101,105,117,8031,8046,8056,8061,4,2,112,114,8037,8041,115,59,1,10829,111,110,59,1,269,100,105,108,5,231,1,59,8054,1,231,114,99,59,1,265,112,115,4,2,59,115,8069,8071,1,10828,109,59,1,10832,111,116,59,1,267,4,3,100,109,110,8088,8097,8104,105,108,5,184,1,59,8095,1,184,112,116,121,118,59,1,10674,116,5,162,2,59,101,8112,8114,1,162,114,100,111,116,59,1,183,114,59,3,55349,56608,4,3,99,101,105,8134,8138,8154,121,59,1,1095,99,107,4,2,59,109,8146,8148,1,10003,97,114,107,59,1,10003,59,1,967,114,4,7,59,69,99,101,102,109,115,8174,8176,8179,8258,8261,8268,8273,1,9675,59,1,10691,4,3,59,101,108,8187,8189,8193,1,710,113,59,1,8791,101,4,2,97,100,8200,8223,114,114,111,119,4,2,108,114,8210,8216,101,102,116,59,1,8634,105,103,104,116,59,1,8635,4,5,82,83,97,99,100,8235,8238,8241,8246,8252,59,1,174,59,1,9416,115,116,59,1,8859,105,114,99,59,1,8858,97,115,104,59,1,8861,59,1,8791,110,105,110,116,59,1,10768,105,100,59,1,10991,99,105,114,59,1,10690,117,98,115,4,2,59,117,8288,8290,1,9827,105,116,59,1,9827,4,4,108,109,110,112,8305,8326,8376,8400,111,110,4,2,59,101,8313,8315,1,58,4,2,59,113,8321,8323,1,8788,59,1,8788,4,2,109,112,8332,8344,97,4,2,59,116,8339,8341,1,44,59,1,64,4,3,59,102,108,8352,8354,8358,1,8705,110,59,1,8728,101,4,2,109,120,8365,8371,101,110,116,59,1,8705,101,115,59,1,8450,4,2,103,105,8382,8395,4,2,59,100,8388,8390,1,8773,111,116,59,1,10861,110,116,59,1,8750,4,3,102,114,121,8408,8412,8417,59,3,55349,56660,111,100,59,1,8720,5,169,2,59,115,8424,8426,1,169,114,59,1,8471,4,2,97,111,8436,8441,114,114,59,1,8629,115,115,59,1,10007,4,2,99,117,8452,8457,114,59,3,55349,56504,4,2,98,112,8463,8474,4,2,59,101,8469,8471,1,10959,59,1,10961,4,2,59,101,8480,8482,1,10960,59,1,10962,100,111,116,59,1,8943,4,7,100,101,108,112,114,118,119,8507,8522,8536,8550,8600,8697,8702,97,114,114,4,2,108,114,8516,8519,59,1,10552,59,1,10549,4,2,112,115,8528,8532,114,59,1,8926,99,59,1,8927,97,114,114,4,2,59,112,8545,8547,1,8630,59,1,10557,4,6,59,98,99,100,111,115,8564,8566,8573,8587,8592,8596,1,8746,114,99,97,112,59,1,10824,4,2,97,117,8579,8583,112,59,1,10822,112,59,1,10826,111,116,59,1,8845,114,59,1,10821,59,3,8746,65024,4,4,97,108,114,118,8610,8623,8663,8672,114,114,4,2,59,109,8618,8620,1,8631,59,1,10556,121,4,3,101,118,119,8632,8651,8656,113,4,2,112,115,8639,8645,114,101,99,59,1,8926,117,99,99,59,1,8927,101,101,59,1,8910,101,100,103,101,59,1,8911,101,110,5,164,1,59,8670,1,164,101,97,114,114,111,119,4,2,108,114,8684,8690,101,102,116,59,1,8630,105,103,104,116,59,1,8631,101,101,59,1,8910,101,100,59,1,8911,4,2,99,105,8713,8721,111,110,105,110,116,59,1,8754,110,116,59,1,8753,108,99,116,121,59,1,9005,4,19,65,72,97,98,99,100,101,102,104,105,106,108,111,114,115,116,117,119,122,8773,8778,8783,8821,8839,8854,8887,8914,8930,8944,9036,9041,9058,9197,9227,9258,9281,9297,9305,114,114,59,1,8659,97,114,59,1,10597,4,4,103,108,114,115,8793,8799,8805,8809,103,101,114,59,1,8224,101,116,104,59,1,8504,114,59,1,8595,104,4,2,59,118,8816,8818,1,8208,59,1,8867,4,2,107,108,8827,8834,97,114,111,119,59,1,10511,97,99,59,1,733,4,2,97,121,8845,8851,114,111,110,59,1,271,59,1,1076,4,3,59,97,111,8862,8864,8880,1,8518,4,2,103,114,8870,8876,103,101,114,59,1,8225,114,59,1,8650,116,115,101,113,59,1,10871,4,3,103,108,109,8895,8902,8907,5,176,1,59,8900,1,176,116,97,59,1,948,112,116,121,118,59,1,10673,4,2,105,114,8920,8926,115,104,116,59,1,10623,59,3,55349,56609,97,114,4,2,108,114,8938,8941,59,1,8643,59,1,8642,4,5,97,101,103,115,118,8956,8986,8989,8996,9001,109,4,3,59,111,115,8965,8967,8983,1,8900,110,100,4,2,59,115,8975,8977,1,8900,117,105,116,59,1,9830,59,1,9830,59,1,168,97,109,109,97,59,1,989,105,110,59,1,8946,4,3,59,105,111,9009,9011,9031,1,247,100,101,5,247,2,59,111,9020,9022,1,247,110,116,105,109,101,115,59,1,8903,110,120,59,1,8903,99,121,59,1,1106,99,4,2,111,114,9048,9053,114,110,59,1,8990,111,112,59,1,8973,4,5,108,112,116,117,119,9070,9076,9081,9130,9144,108,97,114,59,1,36,102,59,3,55349,56661,4,5,59,101,109,112,115,9093,9095,9109,9116,9122,1,729,113,4,2,59,100,9102,9104,1,8784,111,116,59,1,8785,105,110,117,115,59,1,8760,108,117,115,59,1,8724,113,117,97,114,101,59,1,8865,98,108,101,98,97,114,119,101,100,103,101,59,1,8966,110,4,3,97,100,104,9153,9160,9172,114,114,111,119,59,1,8595,111,119,110,97,114,114,111,119,115,59,1,8650,97,114,112,111,111,110,4,2,108,114,9184,9190,101,102,116,59,1,8643,105,103,104,116,59,1,8642,4,2,98,99,9203,9211,107,97,114,111,119,59,1,10512,4,2,111,114,9217,9222,114,110,59,1,8991,111,112,59,1,8972,4,3,99,111,116,9235,9248,9252,4,2,114,121,9241,9245,59,3,55349,56505,59,1,1109,108,59,1,10742,114,111,107,59,1,273,4,2,100,114,9264,9269,111,116,59,1,8945,105,4,2,59,102,9276,9278,1,9663,59,1,9662,4,2,97,104,9287,9292,114,114,59,1,8693,97,114,59,1,10607,97,110,103,108,101,59,1,10662,4,2,99,105,9311,9315,121,59,1,1119,103,114,97,114,114,59,1,10239,4,18,68,97,99,100,101,102,103,108,109,110,111,112,113,114,115,116,117,120,9361,9376,9398,9439,9444,9447,9462,9495,9531,9585,9598,9614,9659,9755,9771,9792,9808,9826,4,2,68,111,9367,9372,111,116,59,1,10871,116,59,1,8785,4,2,99,115,9382,9392,117,116,101,5,233,1,59,9390,1,233,116,101,114,59,1,10862,4,4,97,105,111,121,9408,9414,9430,9436,114,111,110,59,1,283,114,4,2,59,99,9421,9423,1,8790,5,234,1,59,9428,1,234,108,111,110,59,1,8789,59,1,1101,111,116,59,1,279,59,1,8519,4,2,68,114,9453,9458,111,116,59,1,8786,59,3,55349,56610,4,3,59,114,115,9470,9472,9482,1,10906,97,118,101,5,232,1,59,9480,1,232,4,2,59,100,9488,9490,1,10902,111,116,59,1,10904,4,4,59,105,108,115,9505,9507,9515,9518,1,10905,110,116,101,114,115,59,1,9191,59,1,8467,4,2,59,100,9524,9526,1,10901,111,116,59,1,10903,4,3,97,112,115,9539,9544,9564,99,114,59,1,275,116,121,4,3,59,115,118,9554,9556,9561,1,8709,101,116,59,1,8709,59,1,8709,112,4,2,49,59,9571,9583,4,2,51,52,9577,9580,59,1,8196,59,1,8197,1,8195,4,2,103,115,9591,9594,59,1,331,112,59,1,8194,4,2,103,112,9604,9609,111,110,59,1,281,102,59,3,55349,56662,4,3,97,108,115,9622,9635,9640,114,4,2,59,115,9629,9631,1,8917,108,59,1,10723,117,115,59,1,10865,105,4,3,59,108,118,9649,9651,9656,1,949,111,110,59,1,949,59,1,1013,4,4,99,115,117,118,9669,9686,9716,9747,4,2,105,111,9675,9680,114,99,59,1,8790,108,111,110,59,1,8789,4,2,105,108,9692,9696,109,59,1,8770,97,110,116,4,2,103,108,9705,9710,116,114,59,1,10902,101,115,115,59,1,10901,4,3,97,101,105,9724,9729,9734,108,115,59,1,61,115,116,59,1,8799,118,4,2,59,68,9741,9743,1,8801,68,59,1,10872,112,97,114,115,108,59,1,10725,4,2,68,97,9761,9766,111,116,59,1,8787,114,114,59,1,10609,4,3,99,100,105,9779,9783,9788,114,59,1,8495,111,116,59,1,8784,109,59,1,8770,4,2,97,104,9798,9801,59,1,951,5,240,1,59,9806,1,240,4,2,109,114,9814,9822,108,5,235,1,59,9820,1,235,111,59,1,8364,4,3,99,105,112,9834,9838,9843,108,59,1,33,115,116,59,1,8707,4,2,101,111,9849,9859,99,116,97,116,105,111,110,59,1,8496,110,101,110,116,105,97,108,101,59,1,8519,4,12,97,99,101,102,105,106,108,110,111,112,114,115,9896,9910,9914,9921,9954,9960,9967,9989,9994,10027,10036,10164,108,108,105,110,103,100,111,116,115,101,113,59,1,8786,121,59,1,1092,109,97,108,101,59,1,9792,4,3,105,108,114,9929,9935,9950,108,105,103,59,1,64259,4,2,105,108,9941,9945,103,59,1,64256,105,103,59,1,64260,59,3,55349,56611,108,105,103,59,1,64257,108,105,103,59,3,102,106,4,3,97,108,116,9975,9979,9984,116,59,1,9837,105,103,59,1,64258,110,115,59,1,9649,111,102,59,1,402,4,2,112,114,1e4,10005,102,59,3,55349,56663,4,2,97,107,10011,10016,108,108,59,1,8704,4,2,59,118,10022,10024,1,8916,59,1,10969,97,114,116,105,110,116,59,1,10765,4,2,97,111,10042,10159,4,2,99,115,10048,10155,4,6,49,50,51,52,53,55,10062,10102,10114,10135,10139,10151,4,6,50,51,52,53,54,56,10076,10083,10086,10093,10096,10099,5,189,1,59,10081,1,189,59,1,8531,5,188,1,59,10091,1,188,59,1,8533,59,1,8537,59,1,8539,4,2,51,53,10108,10111,59,1,8532,59,1,8534,4,3,52,53,56,10122,10129,10132,5,190,1,59,10127,1,190,59,1,8535,59,1,8540,53,59,1,8536,4,2,54,56,10145,10148,59,1,8538,59,1,8541,56,59,1,8542,108,59,1,8260,119,110,59,1,8994,99,114,59,3,55349,56507,4,17,69,97,98,99,100,101,102,103,105,106,108,110,111,114,115,116,118,10206,10217,10247,10254,10268,10273,10358,10363,10374,10380,10385,10406,10458,10464,10470,10497,10610,4,2,59,108,10212,10214,1,8807,59,1,10892,4,3,99,109,112,10225,10231,10244,117,116,101,59,1,501,109,97,4,2,59,100,10239,10241,1,947,59,1,989,59,1,10886,114,101,118,101,59,1,287,4,2,105,121,10260,10265,114,99,59,1,285,59,1,1075,111,116,59,1,289,4,4,59,108,113,115,10283,10285,10288,10308,1,8805,59,1,8923,4,3,59,113,115,10296,10298,10301,1,8805,59,1,8807,108,97,110,116,59,1,10878,4,4,59,99,100,108,10318,10320,10324,10345,1,10878,99,59,1,10921,111,116,4,2,59,111,10332,10334,1,10880,4,2,59,108,10340,10342,1,10882,59,1,10884,4,2,59,101,10351,10354,3,8923,65024,115,59,1,10900,114,59,3,55349,56612,4,2,59,103,10369,10371,1,8811,59,1,8921,109,101,108,59,1,8503,99,121,59,1,1107,4,4,59,69,97,106,10395,10397,10400,10403,1,8823,59,1,10898,59,1,10917,59,1,10916,4,4,69,97,101,115,10416,10419,10434,10453,59,1,8809,112,4,2,59,112,10426,10428,1,10890,114,111,120,59,1,10890,4,2,59,113,10440,10442,1,10888,4,2,59,113,10448,10450,1,10888,59,1,8809,105,109,59,1,8935,112,102,59,3,55349,56664,97,118,101,59,1,96,4,2,99,105,10476,10480,114,59,1,8458,109,4,3,59,101,108,10489,10491,10494,1,8819,59,1,10894,59,1,10896,5,62,6,59,99,100,108,113,114,10512,10514,10527,10532,10538,10545,1,62,4,2,99,105,10520,10523,59,1,10919,114,59,1,10874,111,116,59,1,8919,80,97,114,59,1,10645,117,101,115,116,59,1,10876,4,5,97,100,101,108,115,10557,10574,10579,10599,10605,4,2,112,114,10563,10570,112,114,111,120,59,1,10886,114,59,1,10616,111,116,59,1,8919,113,4,2,108,113,10586,10592,101,115,115,59,1,8923,108,101,115,115,59,1,10892,101,115,115,59,1,8823,105,109,59,1,8819,4,2,101,110,10616,10626,114,116,110,101,113,113,59,3,8809,65024,69,59,3,8809,65024,4,10,65,97,98,99,101,102,107,111,115,121,10653,10658,10713,10718,10724,10760,10765,10786,10850,10875,114,114,59,1,8660,4,4,105,108,109,114,10668,10674,10678,10684,114,115,112,59,1,8202,102,59,1,189,105,108,116,59,1,8459,4,2,100,114,10690,10695,99,121,59,1,1098,4,3,59,99,119,10703,10705,10710,1,8596,105,114,59,1,10568,59,1,8621,97,114,59,1,8463,105,114,99,59,1,293,4,3,97,108,114,10732,10748,10754,114,116,115,4,2,59,117,10741,10743,1,9829,105,116,59,1,9829,108,105,112,59,1,8230,99,111,110,59,1,8889,114,59,3,55349,56613,115,4,2,101,119,10772,10779,97,114,111,119,59,1,10533,97,114,111,119,59,1,10534,4,5,97,109,111,112,114,10798,10803,10809,10839,10844,114,114,59,1,8703,116,104,116,59,1,8763,107,4,2,108,114,10816,10827,101,102,116,97,114,114,111,119,59,1,8617,105,103,104,116,97,114,114,111,119,59,1,8618,102,59,3,55349,56665,98,97,114,59,1,8213,4,3,99,108,116,10858,10863,10869,114,59,3,55349,56509,97,115,104,59,1,8463,114,111,107,59,1,295,4,2,98,112,10881,10887,117,108,108,59,1,8259,104,101,110,59,1,8208,4,15,97,99,101,102,103,105,106,109,110,111,112,113,115,116,117,10925,10936,10958,10977,10990,11001,11039,11045,11101,11192,11220,11226,11237,11285,11299,99,117,116,101,5,237,1,59,10934,1,237,4,3,59,105,121,10944,10946,10955,1,8291,114,99,5,238,1,59,10953,1,238,59,1,1080,4,2,99,120,10964,10968,121,59,1,1077,99,108,5,161,1,59,10975,1,161,4,2,102,114,10983,10986,59,1,8660,59,3,55349,56614,114,97,118,101,5,236,1,59,10999,1,236,4,4,59,105,110,111,11011,11013,11028,11034,1,8520,4,2,105,110,11019,11024,110,116,59,1,10764,116,59,1,8749,102,105,110,59,1,10716,116,97,59,1,8489,108,105,103,59,1,307,4,3,97,111,112,11053,11092,11096,4,3,99,103,116,11061,11065,11088,114,59,1,299,4,3,101,108,112,11073,11076,11082,59,1,8465,105,110,101,59,1,8464,97,114,116,59,1,8465,104,59,1,305,102,59,1,8887,101,100,59,1,437,4,5,59,99,102,111,116,11113,11115,11121,11136,11142,1,8712,97,114,101,59,1,8453,105,110,4,2,59,116,11129,11131,1,8734,105,101,59,1,10717,100,111,116,59,1,305,4,5,59,99,101,108,112,11154,11156,11161,11179,11186,1,8747,97,108,59,1,8890,4,2,103,114,11167,11173,101,114,115,59,1,8484,99,97,108,59,1,8890,97,114,104,107,59,1,10775,114,111,100,59,1,10812,4,4,99,103,112,116,11202,11206,11211,11216,121,59,1,1105,111,110,59,1,303,102,59,3,55349,56666,97,59,1,953,114,111,100,59,1,10812,117,101,115,116,5,191,1,59,11235,1,191,4,2,99,105,11243,11248,114,59,3,55349,56510,110,4,5,59,69,100,115,118,11261,11263,11266,11271,11282,1,8712,59,1,8953,111,116,59,1,8949,4,2,59,118,11277,11279,1,8948,59,1,8947,59,1,8712,4,2,59,105,11291,11293,1,8290,108,100,101,59,1,297,4,2,107,109,11305,11310,99,121,59,1,1110,108,5,239,1,59,11316,1,239,4,6,99,102,109,111,115,117,11332,11346,11351,11357,11363,11380,4,2,105,121,11338,11343,114,99,59,1,309,59,1,1081,114,59,3,55349,56615,97,116,104,59,1,567,112,102,59,3,55349,56667,4,2,99,101,11369,11374,114,59,3,55349,56511,114,99,121,59,1,1112,107,99,121,59,1,1108,4,8,97,99,102,103,104,106,111,115,11404,11418,11433,11438,11445,11450,11455,11461,112,112,97,4,2,59,118,11413,11415,1,954,59,1,1008,4,2,101,121,11424,11430,100,105,108,59,1,311,59,1,1082,114,59,3,55349,56616,114,101,101,110,59,1,312,99,121,59,1,1093,99,121,59,1,1116,112,102,59,3,55349,56668,99,114,59,3,55349,56512,4,23,65,66,69,72,97,98,99,100,101,102,103,104,106,108,109,110,111,112,114,115,116,117,118,11515,11538,11544,11555,11560,11721,11780,11818,11868,12136,12160,12171,12203,12208,12246,12275,12327,12509,12523,12569,12641,12732,12752,4,3,97,114,116,11523,11528,11532,114,114,59,1,8666,114,59,1,8656,97,105,108,59,1,10523,97,114,114,59,1,10510,4,2,59,103,11550,11552,1,8806,59,1,10891,97,114,59,1,10594,4,9,99,101,103,109,110,112,113,114,116,11580,11586,11594,11600,11606,11624,11627,11636,11694,117,116,101,59,1,314,109,112,116,121,118,59,1,10676,114,97,110,59,1,8466,98,100,97,59,1,955,103,4,3,59,100,108,11615,11617,11620,1,10216,59,1,10641,101,59,1,10216,59,1,10885,117,111,5,171,1,59,11634,1,171,114,4,8,59,98,102,104,108,112,115,116,11655,11657,11669,11673,11677,11681,11685,11690,1,8592,4,2,59,102,11663,11665,1,8676,115,59,1,10527,115,59,1,10525,107,59,1,8617,112,59,1,8619,108,59,1,10553,105,109,59,1,10611,108,59,1,8610,4,3,59,97,101,11702,11704,11709,1,10923,105,108,59,1,10521,4,2,59,115,11715,11717,1,10925,59,3,10925,65024,4,3,97,98,114,11729,11734,11739,114,114,59,1,10508,114,107,59,1,10098,4,2,97,107,11745,11758,99,4,2,101,107,11752,11755,59,1,123,59,1,91,4,2,101,115,11764,11767,59,1,10635,108,4,2,100,117,11774,11777,59,1,10639,59,1,10637,4,4,97,101,117,121,11790,11796,11811,11815,114,111,110,59,1,318,4,2,100,105,11802,11807,105,108,59,1,316,108,59,1,8968,98,59,1,123,59,1,1083,4,4,99,113,114,115,11828,11832,11845,11864,97,59,1,10550,117,111,4,2,59,114,11840,11842,1,8220,59,1,8222,4,2,100,117,11851,11857,104,97,114,59,1,10599,115,104,97,114,59,1,10571,104,59,1,8626,4,5,59,102,103,113,115,11880,11882,12008,12011,12031,1,8804,116,4,5,97,104,108,114,116,11895,11913,11935,11947,11996,114,114,111,119,4,2,59,116,11905,11907,1,8592,97,105,108,59,1,8610,97,114,112,111,111,110,4,2,100,117,11925,11931,111,119,110,59,1,8637,112,59,1,8636,101,102,116,97,114,114,111,119,115,59,1,8647,105,103,104,116,4,3,97,104,115,11959,11974,11984,114,114,111,119,4,2,59,115,11969,11971,1,8596,59,1,8646,97,114,112,111,111,110,115,59,1,8651,113,117,105,103,97,114,114,111,119,59,1,8621,104,114,101,101,116,105,109,101,115,59,1,8907,59,1,8922,4,3,59,113,115,12019,12021,12024,1,8804,59,1,8806,108,97,110,116,59,1,10877,4,5,59,99,100,103,115,12043,12045,12049,12070,12083,1,10877,99,59,1,10920,111,116,4,2,59,111,12057,12059,1,10879,4,2,59,114,12065,12067,1,10881,59,1,10883,4,2,59,101,12076,12079,3,8922,65024,115,59,1,10899,4,5,97,100,101,103,115,12095,12103,12108,12126,12131,112,112,114,111,120,59,1,10885,111,116,59,1,8918,113,4,2,103,113,12115,12120,116,114,59,1,8922,103,116,114,59,1,10891,116,114,59,1,8822,105,109,59,1,8818,4,3,105,108,114,12144,12150,12156,115,104,116,59,1,10620,111,111,114,59,1,8970,59,3,55349,56617,4,2,59,69,12166,12168,1,8822,59,1,10897,4,2,97,98,12177,12198,114,4,2,100,117,12184,12187,59,1,8637,4,2,59,108,12193,12195,1,8636,59,1,10602,108,107,59,1,9604,99,121,59,1,1113,4,5,59,97,99,104,116,12220,12222,12227,12235,12241,1,8810,114,114,59,1,8647,111,114,110,101,114,59,1,8990,97,114,100,59,1,10603,114,105,59,1,9722,4,2,105,111,12252,12258,100,111,116,59,1,320,117,115,116,4,2,59,97,12267,12269,1,9136,99,104,101,59,1,9136,4,4,69,97,101,115,12285,12288,12303,12322,59,1,8808,112,4,2,59,112,12295,12297,1,10889,114,111,120,59,1,10889,4,2,59,113,12309,12311,1,10887,4,2,59,113,12317,12319,1,10887,59,1,8808,105,109,59,1,8934,4,8,97,98,110,111,112,116,119,122,12345,12359,12364,12421,12446,12467,12474,12490,4,2,110,114,12351,12355,103,59,1,10220,114,59,1,8701,114,107,59,1,10214,103,4,3,108,109,114,12373,12401,12409,101,102,116,4,2,97,114,12382,12389,114,114,111,119,59,1,10229,105,103,104,116,97,114,114,111,119,59,1,10231,97,112,115,116,111,59,1,10236,105,103,104,116,97,114,114,111,119,59,1,10230,112,97,114,114,111,119,4,2,108,114,12433,12439,101,102,116,59,1,8619,105,103,104,116,59,1,8620,4,3,97,102,108,12454,12458,12462,114,59,1,10629,59,3,55349,56669,117,115,59,1,10797,105,109,101,115,59,1,10804,4,2,97,98,12480,12485,115,116,59,1,8727,97,114,59,1,95,4,3,59,101,102,12498,12500,12506,1,9674,110,103,101,59,1,9674,59,1,10731,97,114,4,2,59,108,12517,12519,1,40,116,59,1,10643,4,5,97,99,104,109,116,12535,12540,12548,12561,12564,114,114,59,1,8646,111,114,110,101,114,59,1,8991,97,114,4,2,59,100,12556,12558,1,8651,59,1,10605,59,1,8206,114,105,59,1,8895,4,6,97,99,104,105,113,116,12583,12589,12594,12597,12614,12635,113,117,111,59,1,8249,114,59,3,55349,56513,59,1,8624,109,4,3,59,101,103,12606,12608,12611,1,8818,59,1,10893,59,1,10895,4,2,98,117,12620,12623,59,1,91,111,4,2,59,114,12630,12632,1,8216,59,1,8218,114,111,107,59,1,322,5,60,8,59,99,100,104,105,108,113,114,12660,12662,12675,12680,12686,12692,12698,12705,1,60,4,2,99,105,12668,12671,59,1,10918,114,59,1,10873,111,116,59,1,8918,114,101,101,59,1,8907,109,101,115,59,1,8905,97,114,114,59,1,10614,117,101,115,116,59,1,10875,4,2,80,105,12711,12716,97,114,59,1,10646,4,3,59,101,102,12724,12726,12729,1,9667,59,1,8884,59,1,9666,114,4,2,100,117,12739,12746,115,104,97,114,59,1,10570,104,97,114,59,1,10598,4,2,101,110,12758,12768,114,116,110,101,113,113,59,3,8808,65024,69,59,3,8808,65024,4,14,68,97,99,100,101,102,104,105,108,110,111,112,115,117,12803,12809,12893,12908,12914,12928,12933,12937,13011,13025,13032,13049,13052,13069,68,111,116,59,1,8762,4,4,99,108,112,114,12819,12827,12849,12887,114,5,175,1,59,12825,1,175,4,2,101,116,12833,12836,59,1,9794,4,2,59,101,12842,12844,1,10016,115,101,59,1,10016,4,2,59,115,12855,12857,1,8614,116,111,4,4,59,100,108,117,12869,12871,12877,12883,1,8614,111,119,110,59,1,8615,101,102,116,59,1,8612,112,59,1,8613,107,101,114,59,1,9646,4,2,111,121,12899,12905,109,109,97,59,1,10793,59,1,1084,97,115,104,59,1,8212,97,115,117,114,101,100,97,110,103,108,101,59,1,8737,114,59,3,55349,56618,111,59,1,8487,4,3,99,100,110,12945,12954,12985,114,111,5,181,1,59,12952,1,181,4,4,59,97,99,100,12964,12966,12971,12976,1,8739,115,116,59,1,42,105,114,59,1,10992,111,116,5,183,1,59,12983,1,183,117,115,4,3,59,98,100,12995,12997,13e3,1,8722,59,1,8863,4,2,59,117,13006,13008,1,8760,59,1,10794,4,2,99,100,13017,13021,112,59,1,10971,114,59,1,8230,112,108,117,115,59,1,8723,4,2,100,112,13038,13044,101,108,115,59,1,8871,102,59,3,55349,56670,59,1,8723,4,2,99,116,13058,13063,114,59,3,55349,56514,112,111,115,59,1,8766,4,3,59,108,109,13077,13079,13087,1,956,116,105,109,97,112,59,1,8888,97,112,59,1,8888,4,24,71,76,82,86,97,98,99,100,101,102,103,104,105,106,108,109,111,112,114,115,116,117,118,119,13142,13165,13217,13229,13247,13330,13359,13414,13420,13508,13513,13579,13602,13626,13631,13762,13767,13855,13936,13995,14214,14285,14312,14432,4,2,103,116,13148,13152,59,3,8921,824,4,2,59,118,13158,13161,3,8811,8402,59,3,8811,824,4,3,101,108,116,13173,13200,13204,102,116,4,2,97,114,13181,13188,114,114,111,119,59,1,8653,105,103,104,116,97,114,114,111,119,59,1,8654,59,3,8920,824,4,2,59,118,13210,13213,3,8810,8402,59,3,8810,824,105,103,104,116,97,114,114,111,119,59,1,8655,4,2,68,100,13235,13241,97,115,104,59,1,8879,97,115,104,59,1,8878,4,5,98,99,110,112,116,13259,13264,13270,13275,13308,108,97,59,1,8711,117,116,101,59,1,324,103,59,3,8736,8402,4,5,59,69,105,111,112,13287,13289,13293,13298,13302,1,8777,59,3,10864,824,100,59,3,8779,824,115,59,1,329,114,111,120,59,1,8777,117,114,4,2,59,97,13316,13318,1,9838,108,4,2,59,115,13325,13327,1,9838,59,1,8469,4,2,115,117,13336,13344,112,5,160,1,59,13342,1,160,109,112,4,2,59,101,13352,13355,3,8782,824,59,3,8783,824,4,5,97,101,111,117,121,13371,13385,13391,13407,13411,4,2,112,114,13377,13380,59,1,10819,111,110,59,1,328,100,105,108,59,1,326,110,103,4,2,59,100,13399,13401,1,8775,111,116,59,3,10861,824,112,59,1,10818,59,1,1085,97,115,104,59,1,8211,4,7,59,65,97,100,113,115,120,13436,13438,13443,13466,13472,13478,13494,1,8800,114,114,59,1,8663,114,4,2,104,114,13450,13454,107,59,1,10532,4,2,59,111,13460,13462,1,8599,119,59,1,8599,111,116,59,3,8784,824,117,105,118,59,1,8802,4,2,101,105,13484,13489,97,114,59,1,10536,109,59,3,8770,824,105,115,116,4,2,59,115,13503,13505,1,8708,59,1,8708,114,59,3,55349,56619,4,4,69,101,115,116,13523,13527,13563,13568,59,3,8807,824,4,3,59,113,115,13535,13537,13559,1,8817,4,3,59,113,115,13545,13547,13551,1,8817,59,3,8807,824,108,97,110,116,59,3,10878,824,59,3,10878,824,105,109,59,1,8821,4,2,59,114,13574,13576,1,8815,59,1,8815,4,3,65,97,112,13587,13592,13597,114,114,59,1,8654,114,114,59,1,8622,97,114,59,1,10994,4,3,59,115,118,13610,13612,13623,1,8715,4,2,59,100,13618,13620,1,8956,59,1,8954,59,1,8715,99,121,59,1,1114,4,7,65,69,97,100,101,115,116,13647,13652,13656,13661,13665,13737,13742,114,114,59,1,8653,59,3,8806,824,114,114,59,1,8602,114,59,1,8229,4,4,59,102,113,115,13675,13677,13703,13725,1,8816,116,4,2,97,114,13684,13691,114,114,111,119,59,1,8602,105,103,104,116,97,114,114,111,119,59,1,8622,4,3,59,113,115,13711,13713,13717,1,8816,59,3,8806,824,108,97,110,116,59,3,10877,824,4,2,59,115,13731,13734,3,10877,824,59,1,8814,105,109,59,1,8820,4,2,59,114,13748,13750,1,8814,105,4,2,59,101,13757,13759,1,8938,59,1,8940,105,100,59,1,8740,4,2,112,116,13773,13778,102,59,3,55349,56671,5,172,3,59,105,110,13787,13789,13829,1,172,110,4,4,59,69,100,118,13800,13802,13806,13812,1,8713,59,3,8953,824,111,116,59,3,8949,824,4,3,97,98,99,13820,13823,13826,59,1,8713,59,1,8951,59,1,8950,105,4,2,59,118,13836,13838,1,8716,4,3,97,98,99,13846,13849,13852,59,1,8716,59,1,8958,59,1,8957,4,3,97,111,114,13863,13892,13899,114,4,4,59,97,115,116,13874,13876,13883,13888,1,8742,108,108,101,108,59,1,8742,108,59,3,11005,8421,59,3,8706,824,108,105,110,116,59,1,10772,4,3,59,99,101,13907,13909,13914,1,8832,117,101,59,1,8928,4,2,59,99,13920,13923,3,10927,824,4,2,59,101,13929,13931,1,8832,113,59,3,10927,824,4,4,65,97,105,116,13946,13951,13971,13982,114,114,59,1,8655,114,114,4,3,59,99,119,13961,13963,13967,1,8603,59,3,10547,824,59,3,8605,824,103,104,116,97,114,114,111,119,59,1,8603,114,105,4,2,59,101,13990,13992,1,8939,59,1,8941,4,7,99,104,105,109,112,113,117,14011,14036,14060,14080,14085,14090,14106,4,4,59,99,101,114,14021,14023,14028,14032,1,8833,117,101,59,1,8929,59,3,10928,824,59,3,55349,56515,111,114,116,4,2,109,112,14045,14050,105,100,59,1,8740,97,114,97,108,108,101,108,59,1,8742,109,4,2,59,101,14067,14069,1,8769,4,2,59,113,14075,14077,1,8772,59,1,8772,105,100,59,1,8740,97,114,59,1,8742,115,117,4,2,98,112,14098,14102,101,59,1,8930,101,59,1,8931,4,3,98,99,112,14114,14157,14171,4,4,59,69,101,115,14124,14126,14130,14133,1,8836,59,3,10949,824,59,1,8840,101,116,4,2,59,101,14141,14144,3,8834,8402,113,4,2,59,113,14151,14153,1,8840,59,3,10949,824,99,4,2,59,101,14164,14166,1,8833,113,59,3,10928,824,4,4,59,69,101,115,14181,14183,14187,14190,1,8837,59,3,10950,824,59,1,8841,101,116,4,2,59,101,14198,14201,3,8835,8402,113,4,2,59,113,14208,14210,1,8841,59,3,10950,824,4,4,103,105,108,114,14224,14228,14238,14242,108,59,1,8825,108,100,101,5,241,1,59,14236,1,241,103,59,1,8824,105,97,110,103,108,101,4,2,108,114,14254,14269,101,102,116,4,2,59,101,14263,14265,1,8938,113,59,1,8940,105,103,104,116,4,2,59,101,14279,14281,1,8939,113,59,1,8941,4,2,59,109,14291,14293,1,957,4,3,59,101,115,14301,14303,14308,1,35,114,111,59,1,8470,112,59,1,8199,4,9,68,72,97,100,103,105,108,114,115,14332,14338,14344,14349,14355,14369,14376,14408,14426,97,115,104,59,1,8877,97,114,114,59,1,10500,112,59,3,8781,8402,97,115,104,59,1,8876,4,2,101,116,14361,14365,59,3,8805,8402,59,3,62,8402,110,102,105,110,59,1,10718,4,3,65,101,116,14384,14389,14393,114,114,59,1,10498,59,3,8804,8402,4,2,59,114,14399,14402,3,60,8402,105,101,59,3,8884,8402,4,2,65,116,14414,14419,114,114,59,1,10499,114,105,101,59,3,8885,8402,105,109,59,3,8764,8402,4,3,65,97,110,14440,14445,14468,114,114,59,1,8662,114,4,2,104,114,14452,14456,107,59,1,10531,4,2,59,111,14462,14464,1,8598,119,59,1,8598,101,97,114,59,1,10535,4,18,83,97,99,100,101,102,103,104,105,108,109,111,112,114,115,116,117,118,14512,14515,14535,14560,14597,14603,14618,14643,14657,14662,14701,14741,14747,14769,14851,14877,14907,14916,59,1,9416,4,2,99,115,14521,14531,117,116,101,5,243,1,59,14529,1,243,116,59,1,8859,4,2,105,121,14541,14557,114,4,2,59,99,14548,14550,1,8858,5,244,1,59,14555,1,244,59,1,1086,4,5,97,98,105,111,115,14572,14577,14583,14587,14591,115,104,59,1,8861,108,97,99,59,1,337,118,59,1,10808,116,59,1,8857,111,108,100,59,1,10684,108,105,103,59,1,339,4,2,99,114,14609,14614,105,114,59,1,10687,59,3,55349,56620,4,3,111,114,116,14626,14630,14640,110,59,1,731,97,118,101,5,242,1,59,14638,1,242,59,1,10689,4,2,98,109,14649,14654,97,114,59,1,10677,59,1,937,110,116,59,1,8750,4,4,97,99,105,116,14672,14677,14693,14698,114,114,59,1,8634,4,2,105,114,14683,14687,114,59,1,10686,111,115,115,59,1,10683,110,101,59,1,8254,59,1,10688,4,3,97,101,105,14709,14714,14719,99,114,59,1,333,103,97,59,1,969,4,3,99,100,110,14727,14733,14736,114,111,110,59,1,959,59,1,10678,117,115,59,1,8854,112,102,59,3,55349,56672,4,3,97,101,108,14755,14759,14764,114,59,1,10679,114,112,59,1,10681,117,115,59,1,8853,4,7,59,97,100,105,111,115,118,14785,14787,14792,14831,14837,14841,14848,1,8744,114,114,59,1,8635,4,4,59,101,102,109,14802,14804,14817,14824,1,10845,114,4,2,59,111,14811,14813,1,8500,102,59,1,8500,5,170,1,59,14822,1,170,5,186,1,59,14829,1,186,103,111,102,59,1,8886,114,59,1,10838,108,111,112,101,59,1,10839,59,1,10843,4,3,99,108,111,14859,14863,14873,114,59,1,8500,97,115,104,5,248,1,59,14871,1,248,108,59,1,8856,105,4,2,108,109,14884,14893,100,101,5,245,1,59,14891,1,245,101,115,4,2,59,97,14901,14903,1,8855,115,59,1,10806,109,108,5,246,1,59,14914,1,246,98,97,114,59,1,9021,4,12,97,99,101,102,104,105,108,109,111,114,115,117,14948,14992,14996,15033,15038,15068,15090,15189,15192,15222,15427,15441,114,4,4,59,97,115,116,14959,14961,14976,14989,1,8741,5,182,2,59,108,14968,14970,1,182,108,101,108,59,1,8741,4,2,105,108,14982,14986,109,59,1,10995,59,1,11005,59,1,8706,121,59,1,1087,114,4,5,99,105,109,112,116,15009,15014,15019,15024,15027,110,116,59,1,37,111,100,59,1,46,105,108,59,1,8240,59,1,8869,101,110,107,59,1,8241,114,59,3,55349,56621,4,3,105,109,111,15046,15057,15063,4,2,59,118,15052,15054,1,966,59,1,981,109,97,116,59,1,8499,110,101,59,1,9742,4,3,59,116,118,15076,15078,15087,1,960,99,104,102,111,114,107,59,1,8916,59,1,982,4,2,97,117,15096,15119,110,4,2,99,107,15103,15115,107,4,2,59,104,15110,15112,1,8463,59,1,8462,118,59,1,8463,115,4,9,59,97,98,99,100,101,109,115,116,15140,15142,15148,15151,15156,15168,15171,15179,15184,1,43,99,105,114,59,1,10787,59,1,8862,105,114,59,1,10786,4,2,111,117,15162,15165,59,1,8724,59,1,10789,59,1,10866,110,5,177,1,59,15177,1,177,105,109,59,1,10790,119,111,59,1,10791,59,1,177,4,3,105,112,117,15200,15208,15213,110,116,105,110,116,59,1,10773,102,59,3,55349,56673,110,100,5,163,1,59,15220,1,163,4,10,59,69,97,99,101,105,110,111,115,117,15244,15246,15249,15253,15258,15334,15347,15367,15416,15421,1,8826,59,1,10931,112,59,1,10935,117,101,59,1,8828,4,2,59,99,15264,15266,1,10927,4,6,59,97,99,101,110,115,15280,15282,15290,15299,15303,15329,1,8826,112,112,114,111,120,59,1,10935,117,114,108,121,101,113,59,1,8828,113,59,1,10927,4,3,97,101,115,15311,15319,15324,112,112,114,111,120,59,1,10937,113,113,59,1,10933,105,109,59,1,8936,105,109,59,1,8830,109,101,4,2,59,115,15342,15344,1,8242,59,1,8473,4,3,69,97,115,15355,15358,15362,59,1,10933,112,59,1,10937,105,109,59,1,8936,4,3,100,102,112,15375,15378,15404,59,1,8719,4,3,97,108,115,15386,15392,15398,108,97,114,59,1,9006,105,110,101,59,1,8978,117,114,102,59,1,8979,4,2,59,116,15410,15412,1,8733,111,59,1,8733,105,109,59,1,8830,114,101,108,59,1,8880,4,2,99,105,15433,15438,114,59,3,55349,56517,59,1,968,110,99,115,112,59,1,8200,4,6,102,105,111,112,115,117,15462,15467,15472,15478,15485,15491,114,59,3,55349,56622,110,116,59,1,10764,112,102,59,3,55349,56674,114,105,109,101,59,1,8279,99,114,59,3,55349,56518,4,3,97,101,111,15499,15520,15534,116,4,2,101,105,15506,15515,114,110,105,111,110,115,59,1,8461,110,116,59,1,10774,115,116,4,2,59,101,15528,15530,1,63,113,59,1,8799,116,5,34,1,59,15540,1,34,4,21,65,66,72,97,98,99,100,101,102,104,105,108,109,110,111,112,114,115,116,117,120,15586,15609,15615,15620,15796,15855,15893,15931,15977,16001,16039,16183,16204,16222,16228,16285,16312,16318,16363,16408,16416,4,3,97,114,116,15594,15599,15603,114,114,59,1,8667,114,59,1,8658,97,105,108,59,1,10524,97,114,114,59,1,10511,97,114,59,1,10596,4,7,99,100,101,110,113,114,116,15636,15651,15656,15664,15687,15696,15770,4,2,101,117,15642,15646,59,3,8765,817,116,101,59,1,341,105,99,59,1,8730,109,112,116,121,118,59,1,10675,103,4,4,59,100,101,108,15675,15677,15680,15683,1,10217,59,1,10642,59,1,10661,101,59,1,10217,117,111,5,187,1,59,15694,1,187,114,4,11,59,97,98,99,102,104,108,112,115,116,119,15721,15723,15727,15739,15742,15746,15750,15754,15758,15763,15767,1,8594,112,59,1,10613,4,2,59,102,15733,15735,1,8677,115,59,1,10528,59,1,10547,115,59,1,10526,107,59,1,8618,112,59,1,8620,108,59,1,10565,105,109,59,1,10612,108,59,1,8611,59,1,8605,4,2,97,105,15776,15781,105,108,59,1,10522,111,4,2,59,110,15788,15790,1,8758,97,108,115,59,1,8474,4,3,97,98,114,15804,15809,15814,114,114,59,1,10509,114,107,59,1,10099,4,2,97,107,15820,15833,99,4,2,101,107,15827,15830,59,1,125,59,1,93,4,2,101,115,15839,15842,59,1,10636,108,4,2,100,117,15849,15852,59,1,10638,59,1,10640,4,4,97,101,117,121,15865,15871,15886,15890,114,111,110,59,1,345,4,2,100,105,15877,15882,105,108,59,1,343,108,59,1,8969,98,59,1,125,59,1,1088,4,4,99,108,113,115,15903,15907,15914,15927,97,59,1,10551,100,104,97,114,59,1,10601,117,111,4,2,59,114,15922,15924,1,8221,59,1,8221,104,59,1,8627,4,3,97,99,103,15939,15966,15970,108,4,4,59,105,112,115,15950,15952,15957,15963,1,8476,110,101,59,1,8475,97,114,116,59,1,8476,59,1,8477,116,59,1,9645,5,174,1,59,15975,1,174,4,3,105,108,114,15985,15991,15997,115,104,116,59,1,10621,111,111,114,59,1,8971,59,3,55349,56623,4,2,97,111,16007,16028,114,4,2,100,117,16014,16017,59,1,8641,4,2,59,108,16023,16025,1,8640,59,1,10604,4,2,59,118,16034,16036,1,961,59,1,1009,4,3,103,110,115,16047,16167,16171,104,116,4,6,97,104,108,114,115,116,16063,16081,16103,16130,16143,16155,114,114,111,119,4,2,59,116,16073,16075,1,8594,97,105,108,59,1,8611,97,114,112,111,111,110,4,2,100,117,16093,16099,111,119,110,59,1,8641,112,59,1,8640,101,102,116,4,2,97,104,16112,16120,114,114,111,119,115,59,1,8644,97,114,112,111,111,110,115,59,1,8652,105,103,104,116,97,114,114,111,119,115,59,1,8649,113,117,105,103,97,114,114,111,119,59,1,8605,104,114,101,101,116,105,109,101,115,59,1,8908,103,59,1,730,105,110,103,100,111,116,115,101,113,59,1,8787,4,3,97,104,109,16191,16196,16201,114,114,59,1,8644,97,114,59,1,8652,59,1,8207,111,117,115,116,4,2,59,97,16214,16216,1,9137,99,104,101,59,1,9137,109,105,100,59,1,10990,4,4,97,98,112,116,16238,16252,16257,16278,4,2,110,114,16244,16248,103,59,1,10221,114,59,1,8702,114,107,59,1,10215,4,3,97,102,108,16265,16269,16273,114,59,1,10630,59,3,55349,56675,117,115,59,1,10798,105,109,101,115,59,1,10805,4,2,97,112,16291,16304,114,4,2,59,103,16298,16300,1,41,116,59,1,10644,111,108,105,110,116,59,1,10770,97,114,114,59,1,8649,4,4,97,99,104,113,16328,16334,16339,16342,113,117,111,59,1,8250,114,59,3,55349,56519,59,1,8625,4,2,98,117,16348,16351,59,1,93,111,4,2,59,114,16358,16360,1,8217,59,1,8217,4,3,104,105,114,16371,16377,16383,114,101,101,59,1,8908,109,101,115,59,1,8906,105,4,4,59,101,102,108,16394,16396,16399,16402,1,9657,59,1,8885,59,1,9656,116,114,105,59,1,10702,108,117,104,97,114,59,1,10600,59,1,8478,4,19,97,98,99,100,101,102,104,105,108,109,111,112,113,114,115,116,117,119,122,16459,16466,16472,16572,16590,16672,16687,16746,16844,16850,16924,16963,16988,17115,17121,17154,17206,17614,17656,99,117,116,101,59,1,347,113,117,111,59,1,8218,4,10,59,69,97,99,101,105,110,112,115,121,16494,16496,16499,16513,16518,16531,16536,16556,16564,16569,1,8827,59,1,10932,4,2,112,114,16505,16508,59,1,10936,111,110,59,1,353,117,101,59,1,8829,4,2,59,100,16524,16526,1,10928,105,108,59,1,351,114,99,59,1,349,4,3,69,97,115,16544,16547,16551,59,1,10934,112,59,1,10938,105,109,59,1,8937,111,108,105,110,116,59,1,10771,105,109,59,1,8831,59,1,1089,111,116,4,3,59,98,101,16582,16584,16587,1,8901,59,1,8865,59,1,10854,4,7,65,97,99,109,115,116,120,16606,16611,16634,16642,16646,16652,16668,114,114,59,1,8664,114,4,2,104,114,16618,16622,107,59,1,10533,4,2,59,111,16628,16630,1,8600,119,59,1,8600,116,5,167,1,59,16640,1,167,105,59,1,59,119,97,114,59,1,10537,109,4,2,105,110,16659,16665,110,117,115,59,1,8726,59,1,8726,116,59,1,10038,114,4,2,59,111,16679,16682,3,55349,56624,119,110,59,1,8994,4,4,97,99,111,121,16697,16702,16716,16739,114,112,59,1,9839,4,2,104,121,16708,16713,99,121,59,1,1097,59,1,1096,114,116,4,2,109,112,16724,16729,105,100,59,1,8739,97,114,97,108,108,101,108,59,1,8741,5,173,1,59,16744,1,173,4,2,103,109,16752,16770,109,97,4,3,59,102,118,16762,16764,16767,1,963,59,1,962,59,1,962,4,8,59,100,101,103,108,110,112,114,16788,16790,16795,16806,16817,16828,16832,16838,1,8764,111,116,59,1,10858,4,2,59,113,16801,16803,1,8771,59,1,8771,4,2,59,69,16812,16814,1,10910,59,1,10912,4,2,59,69,16823,16825,1,10909,59,1,10911,101,59,1,8774,108,117,115,59,1,10788,97,114,114,59,1,10610,97,114,114,59,1,8592,4,4,97,101,105,116,16860,16883,16891,16904,4,2,108,115,16866,16878,108,115,101,116,109,105,110,117,115,59,1,8726,104,112,59,1,10803,112,97,114,115,108,59,1,10724,4,2,100,108,16897,16900,59,1,8739,101,59,1,8995,4,2,59,101,16910,16912,1,10922,4,2,59,115,16918,16920,1,10924,59,3,10924,65024,4,3,102,108,112,16932,16938,16958,116,99,121,59,1,1100,4,2,59,98,16944,16946,1,47,4,2,59,97,16952,16954,1,10692,114,59,1,9023,102,59,3,55349,56676,97,4,2,100,114,16970,16985,101,115,4,2,59,117,16978,16980,1,9824,105,116,59,1,9824,59,1,8741,4,3,99,115,117,16996,17028,17089,4,2,97,117,17002,17015,112,4,2,59,115,17009,17011,1,8851,59,3,8851,65024,112,4,2,59,115,17022,17024,1,8852,59,3,8852,65024,117,4,2,98,112,17035,17062,4,3,59,101,115,17043,17045,17048,1,8847,59,1,8849,101,116,4,2,59,101,17056,17058,1,8847,113,59,1,8849,4,3,59,101,115,17070,17072,17075,1,8848,59,1,8850,101,116,4,2,59,101,17083,17085,1,8848,113,59,1,8850,4,3,59,97,102,17097,17099,17112,1,9633,114,4,2,101,102,17106,17109,59,1,9633,59,1,9642,59,1,9642,97,114,114,59,1,8594,4,4,99,101,109,116,17131,17136,17142,17148,114,59,3,55349,56520,116,109,110,59,1,8726,105,108,101,59,1,8995,97,114,102,59,1,8902,4,2,97,114,17160,17172,114,4,2,59,102,17167,17169,1,9734,59,1,9733,4,2,97,110,17178,17202,105,103,104,116,4,2,101,112,17188,17197,112,115,105,108,111,110,59,1,1013,104,105,59,1,981,115,59,1,175,4,5,98,99,109,110,112,17218,17351,17420,17423,17427,4,9,59,69,100,101,109,110,112,114,115,17238,17240,17243,17248,17261,17267,17279,17285,17291,1,8834,59,1,10949,111,116,59,1,10941,4,2,59,100,17254,17256,1,8838,111,116,59,1,10947,117,108,116,59,1,10945,4,2,69,101,17273,17276,59,1,10955,59,1,8842,108,117,115,59,1,10943,97,114,114,59,1,10617,4,3,101,105,117,17299,17335,17339,116,4,3,59,101,110,17308,17310,17322,1,8834,113,4,2,59,113,17317,17319,1,8838,59,1,10949,101,113,4,2,59,113,17330,17332,1,8842,59,1,10955,109,59,1,10951,4,2,98,112,17345,17348,59,1,10965,59,1,10963,99,4,6,59,97,99,101,110,115,17366,17368,17376,17385,17389,17415,1,8827,112,112,114,111,120,59,1,10936,117,114,108,121,101,113,59,1,8829,113,59,1,10928,4,3,97,101,115,17397,17405,17410,112,112,114,111,120,59,1,10938,113,113,59,1,10934,105,109,59,1,8937,105,109,59,1,8831,59,1,8721,103,59,1,9834,4,13,49,50,51,59,69,100,101,104,108,109,110,112,115,17455,17462,17469,17476,17478,17481,17496,17509,17524,17530,17536,17548,17554,5,185,1,59,17460,1,185,5,178,1,59,17467,1,178,5,179,1,59,17474,1,179,1,8835,59,1,10950,4,2,111,115,17487,17491,116,59,1,10942,117,98,59,1,10968,4,2,59,100,17502,17504,1,8839,111,116,59,1,10948,115,4,2,111,117,17516,17520,108,59,1,10185,98,59,1,10967,97,114,114,59,1,10619,117,108,116,59,1,10946,4,2,69,101,17542,17545,59,1,10956,59,1,8843,108,117,115,59,1,10944,4,3,101,105,117,17562,17598,17602,116,4,3,59,101,110,17571,17573,17585,1,8835,113,4,2,59,113,17580,17582,1,8839,59,1,10950,101,113,4,2,59,113,17593,17595,1,8843,59,1,10956,109,59,1,10952,4,2,98,112,17608,17611,59,1,10964,59,1,10966,4,3,65,97,110,17622,17627,17650,114,114,59,1,8665,114,4,2,104,114,17634,17638,107,59,1,10534,4,2,59,111,17644,17646,1,8601,119,59,1,8601,119,97,114,59,1,10538,108,105,103,5,223,1,59,17664,1,223,4,13,97,98,99,100,101,102,104,105,111,112,114,115,119,17694,17709,17714,17737,17742,17749,17754,17860,17905,17957,17964,18090,18122,4,2,114,117,17700,17706,103,101,116,59,1,8982,59,1,964,114,107,59,1,9140,4,3,97,101,121,17722,17728,17734,114,111,110,59,1,357,100,105,108,59,1,355,59,1,1090,111,116,59,1,8411,108,114,101,99,59,1,8981,114,59,3,55349,56625,4,4,101,105,107,111,17764,17805,17836,17851,4,2,114,116,17770,17786,101,4,2,52,102,17777,17780,59,1,8756,111,114,101,59,1,8756,97,4,3,59,115,118,17795,17797,17802,1,952,121,109,59,1,977,59,1,977,4,2,99,110,17811,17831,107,4,2,97,115,17818,17826,112,112,114,111,120,59,1,8776,105,109,59,1,8764,115,112,59,1,8201,4,2,97,115,17842,17846,112,59,1,8776,105,109,59,1,8764,114,110,5,254,1,59,17858,1,254,4,3,108,109,110,17868,17873,17901,100,101,59,1,732,101,115,5,215,3,59,98,100,17884,17886,17898,1,215,4,2,59,97,17892,17894,1,8864,114,59,1,10801,59,1,10800,116,59,1,8749,4,3,101,112,115,17913,17917,17953,97,59,1,10536,4,4,59,98,99,102,17927,17929,17934,17939,1,8868,111,116,59,1,9014,105,114,59,1,10993,4,2,59,111,17945,17948,3,55349,56677,114,107,59,1,10970,97,59,1,10537,114,105,109,101,59,1,8244,4,3,97,105,112,17972,17977,18082,100,101,59,1,8482,4,7,97,100,101,109,112,115,116,17993,18051,18056,18059,18066,18072,18076,110,103,108,101,4,5,59,100,108,113,114,18009,18011,18017,18032,18035,1,9653,111,119,110,59,1,9663,101,102,116,4,2,59,101,18026,18028,1,9667,113,59,1,8884,59,1,8796,105,103,104,116,4,2,59,101,18045,18047,1,9657,113,59,1,8885,111,116,59,1,9708,59,1,8796,105,110,117,115,59,1,10810,108,117,115,59,1,10809,98,59,1,10701,105,109,101,59,1,10811,101,122,105,117,109,59,1,9186,4,3,99,104,116,18098,18111,18116,4,2,114,121,18104,18108,59,3,55349,56521,59,1,1094,99,121,59,1,1115,114,111,107,59,1,359,4,2,105,111,18128,18133,120,116,59,1,8812,104,101,97,100,4,2,108,114,18143,18154,101,102,116,97,114,114,111,119,59,1,8606,105,103,104,116,97,114,114,111,119,59,1,8608,4,18,65,72,97,98,99,100,102,103,104,108,109,111,112,114,115,116,117,119,18204,18209,18214,18234,18250,18268,18292,18308,18319,18343,18379,18397,18413,18504,18547,18553,18584,18603,114,114,59,1,8657,97,114,59,1,10595,4,2,99,114,18220,18230,117,116,101,5,250,1,59,18228,1,250,114,59,1,8593,114,4,2,99,101,18241,18245,121,59,1,1118,118,101,59,1,365,4,2,105,121,18256,18265,114,99,5,251,1,59,18263,1,251,59,1,1091,4,3,97,98,104,18276,18281,18287,114,114,59,1,8645,108,97,99,59,1,369,97,114,59,1,10606,4,2,105,114,18298,18304,115,104,116,59,1,10622,59,3,55349,56626,114,97,118,101,5,249,1,59,18317,1,249,4,2,97,98,18325,18338,114,4,2,108,114,18332,18335,59,1,8639,59,1,8638,108,107,59,1,9600,4,2,99,116,18349,18374,4,2,111,114,18355,18369,114,110,4,2,59,101,18363,18365,1,8988,114,59,1,8988,111,112,59,1,8975,114,105,59,1,9720,4,2,97,108,18385,18390,99,114,59,1,363,5,168,1,59,18395,1,168,4,2,103,112,18403,18408,111,110,59,1,371,102,59,3,55349,56678,4,6,97,100,104,108,115,117,18427,18434,18445,18470,18475,18494,114,114,111,119,59,1,8593,111,119,110,97,114,114,111,119,59,1,8597,97,114,112,111,111,110,4,2,108,114,18457,18463,101,102,116,59,1,8639,105,103,104,116,59,1,8638,117,115,59,1,8846,105,4,3,59,104,108,18484,18486,18489,1,965,59,1,978,111,110,59,1,965,112,97,114,114,111,119,115,59,1,8648,4,3,99,105,116,18512,18537,18542,4,2,111,114,18518,18532,114,110,4,2,59,101,18526,18528,1,8989,114,59,1,8989,111,112,59,1,8974,110,103,59,1,367,114,105,59,1,9721,99,114,59,3,55349,56522,4,3,100,105,114,18561,18566,18572,111,116,59,1,8944,108,100,101,59,1,361,105,4,2,59,102,18579,18581,1,9653,59,1,9652,4,2,97,109,18590,18595,114,114,59,1,8648,108,5,252,1,59,18601,1,252,97,110,103,108,101,59,1,10663,4,15,65,66,68,97,99,100,101,102,108,110,111,112,114,115,122,18643,18648,18661,18667,18847,18851,18857,18904,18909,18915,18931,18937,18943,18949,18996,114,114,59,1,8661,97,114,4,2,59,118,18656,18658,1,10984,59,1,10985,97,115,104,59,1,8872,4,2,110,114,18673,18679,103,114,116,59,1,10652,4,7,101,107,110,112,114,115,116,18695,18704,18711,18720,18742,18754,18810,112,115,105,108,111,110,59,1,1013,97,112,112,97,59,1,1008,111,116,104,105,110,103,59,1,8709,4,3,104,105,114,18728,18732,18735,105,59,1,981,59,1,982,111,112,116,111,59,1,8733,4,2,59,104,18748,18750,1,8597,111,59,1,1009,4,2,105,117,18760,18766,103,109,97,59,1,962,4,2,98,112,18772,18791,115,101,116,110,101,113,4,2,59,113,18784,18787,3,8842,65024,59,3,10955,65024,115,101,116,110,101,113,4,2,59,113,18803,18806,3,8843,65024,59,3,10956,65024,4,2,104,114,18816,18822,101,116,97,59,1,977,105,97,110,103,108,101,4,2,108,114,18834,18840,101,102,116,59,1,8882,105,103,104,116,59,1,8883,121,59,1,1074,97,115,104,59,1,8866,4,3,101,108,114,18865,18884,18890,4,3,59,98,101,18873,18875,18880,1,8744,97,114,59,1,8891,113,59,1,8794,108,105,112,59,1,8942,4,2,98,116,18896,18901,97,114,59,1,124,59,1,124,114,59,3,55349,56627,116,114,105,59,1,8882,115,117,4,2,98,112,18923,18927,59,3,8834,8402,59,3,8835,8402,112,102,59,3,55349,56679,114,111,112,59,1,8733,116,114,105,59,1,8883,4,2,99,117,18955,18960,114,59,3,55349,56523,4,2,98,112,18966,18981,110,4,2,69,101,18973,18977,59,3,10955,65024,59,3,8842,65024,110,4,2,69,101,18988,18992,59,3,10956,65024,59,3,8843,65024,105,103,122,97,103,59,1,10650,4,7,99,101,102,111,112,114,115,19020,19026,19061,19066,19072,19075,19089,105,114,99,59,1,373,4,2,100,105,19032,19055,4,2,98,103,19038,19043,97,114,59,1,10847,101,4,2,59,113,19050,19052,1,8743,59,1,8793,101,114,112,59,1,8472,114,59,3,55349,56628,112,102,59,3,55349,56680,59,1,8472,4,2,59,101,19081,19083,1,8768,97,116,104,59,1,8768,99,114,59,3,55349,56524,4,14,99,100,102,104,105,108,109,110,111,114,115,117,118,119,19125,19146,19152,19157,19173,19176,19192,19197,19202,19236,19252,19269,19286,19291,4,3,97,105,117,19133,19137,19142,112,59,1,8898,114,99,59,1,9711,112,59,1,8899,116,114,105,59,1,9661,114,59,3,55349,56629,4,2,65,97,19163,19168,114,114,59,1,10234,114,114,59,1,10231,59,1,958,4,2,65,97,19182,19187,114,114,59,1,10232,114,114,59,1,10229,97,112,59,1,10236,105,115,59,1,8955,4,3,100,112,116,19210,19215,19230,111,116,59,1,10752,4,2,102,108,19221,19225,59,3,55349,56681,117,115,59,1,10753,105,109,101,59,1,10754,4,2,65,97,19242,19247,114,114,59,1,10233,114,114,59,1,10230,4,2,99,113,19258,19263,114,59,3,55349,56525,99,117,112,59,1,10758,4,2,112,116,19275,19281,108,117,115,59,1,10756,114,105,59,1,9651,101,101,59,1,8897,101,100,103,101,59,1,8896,4,8,97,99,101,102,105,111,115,117,19316,19335,19349,19357,19362,19367,19373,19379,99,4,2,117,121,19323,19332,116,101,5,253,1,59,19330,1,253,59,1,1103,4,2,105,121,19341,19346,114,99,59,1,375,59,1,1099,110,5,165,1,59,19355,1,165,114,59,3,55349,56630,99,121,59,1,1111,112,102,59,3,55349,56682,99,114,59,3,55349,56526,4,2,99,109,19385,19389,121,59,1,1102,108,5,255,1,59,19395,1,255,4,10,97,99,100,101,102,104,105,111,115,119,19419,19426,19441,19446,19462,19467,19472,19480,19486,19492,99,117,116,101,59,1,378,4,2,97,121,19432,19438,114,111,110,59,1,382,59,1,1079,111,116,59,1,380,4,2,101,116,19452,19458,116,114,102,59,1,8488,97,59,1,950,114,59,3,55349,56631,99,121,59,1,1078,103,114,97,114,114,59,1,8669,112,102,59,3,55349,56683,99,114,59,3,55349,56527,4,2,106,110,19498,19501,59,1,8205,106,59,1,8204]);const T=n.CODE_POINTS,E=n.CODE_POINT_SEQUENCES,c={128:8364,130:8218,131:402,132:8222,133:8230,134:8224,135:8225,136:710,137:8240,138:352,139:8249,140:338,142:381,145:8216,146:8217,147:8220,148:8221,149:8226,150:8211,151:8212,152:732,153:8482,154:353,155:8250,156:339,158:382,159:376},h=1,l=2,m=4,_=h|l|m,p="DATA_STATE",u="RCDATA_STATE",A="RAWTEXT_STATE",d="SCRIPT_DATA_STATE",N="PLAINTEXT_STATE",C="TAG_OPEN_STATE",f="END_TAG_OPEN_STATE",O="TAG_NAME_STATE",S="RCDATA_LESS_THAN_SIGN_STATE",R="RCDATA_END_TAG_OPEN_STATE",I="RCDATA_END_TAG_NAME_STATE",g="RAWTEXT_LESS_THAN_SIGN_STATE",L="RAWTEXT_END_TAG_OPEN_STATE",M="RAWTEXT_END_TAG_NAME_STATE",k="SCRIPT_DATA_LESS_THAN_SIGN_STATE",P="SCRIPT_DATA_END_TAG_OPEN_STATE",D="SCRIPT_DATA_END_TAG_NAME_STATE",H="SCRIPT_DATA_ESCAPE_START_STATE",F="SCRIPT_DATA_ESCAPE_START_DASH_STATE",U="SCRIPT_DATA_ESCAPED_STATE",G="SCRIPT_DATA_ESCAPED_DASH_STATE",B="SCRIPT_DATA_ESCAPED_DASH_DASH_STATE",K="SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN_STATE",b="SCRIPT_DATA_ESCAPED_END_TAG_OPEN_STATE",y="SCRIPT_DATA_ESCAPED_END_TAG_NAME_STATE",x="SCRIPT_DATA_DOUBLE_ESCAPE_START_STATE",v="SCRIPT_DATA_DOUBLE_ESCAPED_STATE",Y="SCRIPT_DATA_DOUBLE_ESCAPED_DASH_STATE",w="SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH_STATE",Q="SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN_STATE",W="SCRIPT_DATA_DOUBLE_ESCAPE_END_STATE",X="BEFORE_ATTRIBUTE_NAME_STATE",V="ATTRIBUTE_NAME_STATE",j="AFTER_ATTRIBUTE_NAME_STATE",z="BEFORE_ATTRIBUTE_VALUE_STATE",q="ATTRIBUTE_VALUE_DOUBLE_QUOTED_STATE",J="ATTRIBUTE_VALUE_SINGLE_QUOTED_STATE",Z="ATTRIBUTE_VALUE_UNQUOTED_STATE",$="AFTER_ATTRIBUTE_VALUE_QUOTED_STATE",ee="SELF_CLOSING_START_TAG_STATE",te="BOGUS_COMMENT_STATE",ne="MARKUP_DECLARATION_OPEN_STATE",se="COMMENT_START_STATE",re="COMMENT_START_DASH_STATE",ie="COMMENT_STATE",oe="COMMENT_LESS_THAN_SIGN_STATE",ae="COMMENT_LESS_THAN_SIGN_BANG_STATE",Te="COMMENT_LESS_THAN_SIGN_BANG_DASH_STATE",Ee="COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH_STATE",ce="COMMENT_END_DASH_STATE",he="COMMENT_END_STATE",le="COMMENT_END_BANG_STATE",me="DOCTYPE_STATE",_e="BEFORE_DOCTYPE_NAME_STATE",pe="DOCTYPE_NAME_STATE",ue="AFTER_DOCTYPE_NAME_STATE",Ae="AFTER_DOCTYPE_PUBLIC_KEYWORD_STATE",de="BEFORE_DOCTYPE_PUBLIC_IDENTIFIER_STATE",Ne="DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED_STATE",Ce="DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED_STATE",fe="AFTER_DOCTYPE_PUBLIC_IDENTIFIER_STATE",Oe="BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS_STATE",Se="AFTER_DOCTYPE_SYSTEM_KEYWORD_STATE",Re="BEFORE_DOCTYPE_SYSTEM_IDENTIFIER_STATE",Ie="DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE",ge="DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE",Le="AFTER_DOCTYPE_SYSTEM_IDENTIFIER_STATE",Me="BOGUS_DOCTYPE_STATE",ke="CDATA_SECTION_STATE",Pe="CDATA_SECTION_BRACKET_STATE",De="CDATA_SECTION_END_STATE",He="CHARACTER_REFERENCE_STATE",Fe="NAMED_CHARACTER_REFERENCE_STATE",Ue="AMBIGUOS_AMPERSAND_STATE",Ge="NUMERIC_CHARACTER_REFERENCE_STATE",Be="HEXADEMICAL_CHARACTER_REFERENCE_START_STATE",Ke="DECIMAL_CHARACTER_REFERENCE_START_STATE",be="HEXADEMICAL_CHARACTER_REFERENCE_STATE",ye="DECIMAL_CHARACTER_REFERENCE_STATE",xe="NUMERIC_CHARACTER_REFERENCE_END_STATE";function ve(e){return e===T.SPACE||e===T.LINE_FEED||e===T.TABULATION||e===T.FORM_FEED}function Ye(e){return e>=T.DIGIT_0&&e<=T.DIGIT_9}function we(e){return e>=T.LATIN_CAPITAL_A&&e<=T.LATIN_CAPITAL_Z}function Qe(e){return e>=T.LATIN_SMALL_A&&e<=T.LATIN_SMALL_Z}function We(e){return Qe(e)||we(e)}function Xe(e){return We(e)||Ye(e)}function Ve(e){return e>=T.LATIN_CAPITAL_A&&e<=T.LATIN_CAPITAL_F}function je(e){return e>=T.LATIN_SMALL_A&&e<=T.LATIN_SMALL_F}function ze(e){return e+32}function qe(e){return e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(e>>>10&1023|55296)+String.fromCharCode(56320|1023&e))}function Je(e){return String.fromCharCode(ze(e))}function Ze(e,t){const n=a[++e];let s=++e,r=s+n-1;for(;s<=r;){const e=s+r>>>1,i=a[e];if(i<t)s=e+1;else{if(!(i>t))return a[e+n];r=e-1;}}return -1}class $e{constructor(){this.preprocessor=new o,this.tokenQueue=[],this.allowCDATA=!1,this.state=p,this.returnState="",this.charRefCode=-1,this.tempBuff=[],this.lastStartTagName="",this.consumedAfterSnapshot=-1,this.active=!1,this.currentCharacterToken=null,this.currentToken=null,this.currentAttr=null;}_err(){}_errOnNextCodePoint(e){this._consume(),this._err(e),this._unconsume();}getNextToken(){for(;!this.tokenQueue.length&&this.active;){this.consumedAfterSnapshot=0;const e=this._consume();this._ensureHibernation()||this[this.state](e);}return this.tokenQueue.shift()}write(e,t){this.active=!0,this.preprocessor.write(e,t);}insertHtmlAtCurrentPos(e){this.active=!0,this.preprocessor.insertHtmlAtCurrentPos(e);}_ensureHibernation(){if(this.preprocessor.endOfChunkHit){for(;this.consumedAfterSnapshot>0;this.consumedAfterSnapshot--)this.preprocessor.retreat();return this.active=!1,this.tokenQueue.push({type:$e.HIBERNATION_TOKEN}),!0}return !1}_consume(){return this.consumedAfterSnapshot++,this.preprocessor.advance()}_unconsume(){this.consumedAfterSnapshot--,this.preprocessor.retreat();}_reconsumeInState(e){this.state=e,this._unconsume();}_consumeSequenceIfMatch(e,t,n){let s=0,r=!0;const i=e.length;let o=0,a=t,E=void 0;for(;o<i;o++){if(o>0&&(a=this._consume(),s++),a===T.EOF){r=!1;break}if(a!==(E=e[o])&&(n||a!==ze(E))){r=!1;break}}if(!r)for(;s--;)this._unconsume();return r}_isTempBufferEqualToScriptString(){if(this.tempBuff.length!==E.SCRIPT_STRING.length)return !1;for(let e=0;e<this.tempBuff.length;e++)if(this.tempBuff[e]!==E.SCRIPT_STRING[e])return !1;return !0}_createStartTagToken(){this.currentToken={type:$e.START_TAG_TOKEN,tagName:"",selfClosing:!1,ackSelfClosing:!1,attrs:[]};}_createEndTagToken(){this.currentToken={type:$e.END_TAG_TOKEN,tagName:"",selfClosing:!1,attrs:[]};}_createCommentToken(){this.currentToken={type:$e.COMMENT_TOKEN,data:""};}_createDoctypeToken(e){this.currentToken={type:$e.DOCTYPE_TOKEN,name:e,forceQuirks:!1,publicId:null,systemId:null};}_createCharacterToken(e,t){this.currentCharacterToken={type:e,chars:t};}_createEOFToken(){this.currentToken={type:$e.EOF_TOKEN};}_createAttr(e){this.currentAttr={name:e,value:""};}_leaveAttrName(e){null===$e.getTokenAttr(this.currentToken,this.currentAttr.name)?this.currentToken.attrs.push(this.currentAttr):this._err(s.duplicateAttribute),this.state=e;}_leaveAttrValue(e){this.state=e;}_emitCurrentToken(){this._emitCurrentCharacterToken();const e=this.currentToken;this.currentToken=null,e.type===$e.START_TAG_TOKEN?this.lastStartTagName=e.tagName:e.type===$e.END_TAG_TOKEN&&(e.attrs.length>0&&this._err(s.endTagWithAttributes),e.selfClosing&&this._err(s.endTagWithTrailingSolidus)),this.tokenQueue.push(e);}_emitCurrentCharacterToken(){this.currentCharacterToken&&(this.tokenQueue.push(this.currentCharacterToken),this.currentCharacterToken=null);}_emitEOFToken(){this._createEOFToken(),this._emitCurrentToken();}_appendCharToCurrentCharacterToken(e,t){this.currentCharacterToken&&this.currentCharacterToken.type!==e&&this._emitCurrentCharacterToken(),this.currentCharacterToken?this.currentCharacterToken.chars+=t:this._createCharacterToken(e,t);}_emitCodePoint(e){let t=$e.CHARACTER_TOKEN;ve(e)?t=$e.WHITESPACE_CHARACTER_TOKEN:e===T.NULL&&(t=$e.NULL_CHARACTER_TOKEN),this._appendCharToCurrentCharacterToken(t,qe(e));}_emitSeveralCodePoints(e){for(let t=0;t<e.length;t++)this._emitCodePoint(e[t]);}_emitChars(e){this._appendCharToCurrentCharacterToken($e.CHARACTER_TOKEN,e);}_matchNamedCharacterReference(e){let t=null,n=1,s=Ze(0,e);for(this.tempBuff.push(e);s>-1;){const e=a[s],r=e<_;r&&e&h&&(t=e&l?[a[++s],a[++s]]:[a[++s]],n=0);const i=this._consume();if(this.tempBuff.push(i),n++,i===T.EOF)break;s=r?e&m?Ze(s,i):-1:i===e?++s:-1;}for(;n--;)this.tempBuff.pop(),this._unconsume();return t}_isCharacterReferenceInAttribute(){return this.returnState===q||this.returnState===J||this.returnState===Z}_isCharacterReferenceAttributeQuirk(e){if(!e&&this._isCharacterReferenceInAttribute()){const e=this._consume();return this._unconsume(),e===T.EQUALS_SIGN||Xe(e)}return !1}_flushCodePointsConsumedAsCharacterReference(){if(this._isCharacterReferenceInAttribute())for(let e=0;e<this.tempBuff.length;e++)this.currentAttr.value+=qe(this.tempBuff[e]);else this._emitSeveralCodePoints(this.tempBuff);this.tempBuff=[];}[p](e){this.preprocessor.dropParsedChunk(),e===T.LESS_THAN_SIGN?this.state=C:e===T.AMPERSAND?(this.returnState=p,this.state=He):e===T.NULL?(this._err(s.unexpectedNullCharacter),this._emitCodePoint(e)):e===T.EOF?this._emitEOFToken():this._emitCodePoint(e);}[u](e){this.preprocessor.dropParsedChunk(),e===T.AMPERSAND?(this.returnState=u,this.state=He):e===T.LESS_THAN_SIGN?this.state=S:e===T.NULL?(this._err(s.unexpectedNullCharacter),this._emitChars(n.REPLACEMENT_CHARACTER)):e===T.EOF?this._emitEOFToken():this._emitCodePoint(e);}[A](e){this.preprocessor.dropParsedChunk(),e===T.LESS_THAN_SIGN?this.state=g:e===T.NULL?(this._err(s.unexpectedNullCharacter),this._emitChars(n.REPLACEMENT_CHARACTER)):e===T.EOF?this._emitEOFToken():this._emitCodePoint(e);}[d](e){this.preprocessor.dropParsedChunk(),e===T.LESS_THAN_SIGN?this.state=k:e===T.NULL?(this._err(s.unexpectedNullCharacter),this._emitChars(n.REPLACEMENT_CHARACTER)):e===T.EOF?this._emitEOFToken():this._emitCodePoint(e);}[N](e){this.preprocessor.dropParsedChunk(),e===T.NULL?(this._err(s.unexpectedNullCharacter),this._emitChars(n.REPLACEMENT_CHARACTER)):e===T.EOF?this._emitEOFToken():this._emitCodePoint(e);}[C](e){e===T.EXCLAMATION_MARK?this.state=ne:e===T.SOLIDUS?this.state=f:We(e)?(this._createStartTagToken(),this._reconsumeInState(O)):e===T.QUESTION_MARK?(this._err(s.unexpectedQuestionMarkInsteadOfTagName),this._createCommentToken(),this._reconsumeInState(te)):e===T.EOF?(this._err(s.eofBeforeTagName),this._emitChars("<"),this._emitEOFToken()):(this._err(s.invalidFirstCharacterOfTagName),this._emitChars("<"),this._reconsumeInState(p));}[f](e){We(e)?(this._createEndTagToken(),this._reconsumeInState(O)):e===T.GREATER_THAN_SIGN?(this._err(s.missingEndTagName),this.state=p):e===T.EOF?(this._err(s.eofBeforeTagName),this._emitChars("</"),this._emitEOFToken()):(this._err(s.invalidFirstCharacterOfTagName),this._createCommentToken(),this._reconsumeInState(te));}[O](e){ve(e)?this.state=X:e===T.SOLIDUS?this.state=ee:e===T.GREATER_THAN_SIGN?(this.state=p,this._emitCurrentToken()):we(e)?this.currentToken.tagName+=Je(e):e===T.NULL?(this._err(s.unexpectedNullCharacter),this.currentToken.tagName+=n.REPLACEMENT_CHARACTER):e===T.EOF?(this._err(s.eofInTag),this._emitEOFToken()):this.currentToken.tagName+=qe(e);}[S](e){e===T.SOLIDUS?(this.tempBuff=[],this.state=R):(this._emitChars("<"),this._reconsumeInState(u));}[R](e){We(e)?(this._createEndTagToken(),this._reconsumeInState(I)):(this._emitChars("</"),this._reconsumeInState(u));}[I](e){if(we(e))this.currentToken.tagName+=Je(e),this.tempBuff.push(e);else if(Qe(e))this.currentToken.tagName+=qe(e),this.tempBuff.push(e);else{if(this.lastStartTagName===this.currentToken.tagName){if(ve(e))return void(this.state=X);if(e===T.SOLIDUS)return void(this.state=ee);if(e===T.GREATER_THAN_SIGN)return this.state=p,void this._emitCurrentToken()}this._emitChars("</"),this._emitSeveralCodePoints(this.tempBuff),this._reconsumeInState(u);}}[g](e){e===T.SOLIDUS?(this.tempBuff=[],this.state=L):(this._emitChars("<"),this._reconsumeInState(A));}[L](e){We(e)?(this._createEndTagToken(),this._reconsumeInState(M)):(this._emitChars("</"),this._reconsumeInState(A));}[M](e){if(we(e))this.currentToken.tagName+=Je(e),this.tempBuff.push(e);else if(Qe(e))this.currentToken.tagName+=qe(e),this.tempBuff.push(e);else{if(this.lastStartTagName===this.currentToken.tagName){if(ve(e))return void(this.state=X);if(e===T.SOLIDUS)return void(this.state=ee);if(e===T.GREATER_THAN_SIGN)return this._emitCurrentToken(),void(this.state=p)}this._emitChars("</"),this._emitSeveralCodePoints(this.tempBuff),this._reconsumeInState(A);}}[k](e){e===T.SOLIDUS?(this.tempBuff=[],this.state=P):e===T.EXCLAMATION_MARK?(this.state=H,this._emitChars("<!")):(this._emitChars("<"),this._reconsumeInState(d));}[P](e){We(e)?(this._createEndTagToken(),this._reconsumeInState(D)):(this._emitChars("</"),this._reconsumeInState(d));}[D](e){if(we(e))this.currentToken.tagName+=Je(e),this.tempBuff.push(e);else if(Qe(e))this.currentToken.tagName+=qe(e),this.tempBuff.push(e);else{if(this.lastStartTagName===this.currentToken.tagName){if(ve(e))return void(this.state=X);if(e===T.SOLIDUS)return void(this.state=ee);if(e===T.GREATER_THAN_SIGN)return this._emitCurrentToken(),void(this.state=p)}this._emitChars("</"),this._emitSeveralCodePoints(this.tempBuff),this._reconsumeInState(d);}}[H](e){e===T.HYPHEN_MINUS?(this.state=F,this._emitChars("-")):this._reconsumeInState(d);}[F](e){e===T.HYPHEN_MINUS?(this.state=B,this._emitChars("-")):this._reconsumeInState(d);}[U](e){e===T.HYPHEN_MINUS?(this.state=G,this._emitChars("-")):e===T.LESS_THAN_SIGN?this.state=K:e===T.NULL?(this._err(s.unexpectedNullCharacter),this._emitChars(n.REPLACEMENT_CHARACTER)):e===T.EOF?(this._err(s.eofInScriptHtmlCommentLikeText),this._emitEOFToken()):this._emitCodePoint(e);}[G](e){e===T.HYPHEN_MINUS?(this.state=B,this._emitChars("-")):e===T.LESS_THAN_SIGN?this.state=K:e===T.NULL?(this._err(s.unexpectedNullCharacter),this.state=U,this._emitChars(n.REPLACEMENT_CHARACTER)):e===T.EOF?(this._err(s.eofInScriptHtmlCommentLikeText),this._emitEOFToken()):(this.state=U,this._emitCodePoint(e));}[B](e){e===T.HYPHEN_MINUS?this._emitChars("-"):e===T.LESS_THAN_SIGN?this.state=K:e===T.GREATER_THAN_SIGN?(this.state=d,this._emitChars(">")):e===T.NULL?(this._err(s.unexpectedNullCharacter),this.state=U,this._emitChars(n.REPLACEMENT_CHARACTER)):e===T.EOF?(this._err(s.eofInScriptHtmlCommentLikeText),this._emitEOFToken()):(this.state=U,this._emitCodePoint(e));}[K](e){e===T.SOLIDUS?(this.tempBuff=[],this.state=b):We(e)?(this.tempBuff=[],this._emitChars("<"),this._reconsumeInState(x)):(this._emitChars("<"),this._reconsumeInState(U));}[b](e){We(e)?(this._createEndTagToken(),this._reconsumeInState(y)):(this._emitChars("</"),this._reconsumeInState(U));}[y](e){if(we(e))this.currentToken.tagName+=Je(e),this.tempBuff.push(e);else if(Qe(e))this.currentToken.tagName+=qe(e),this.tempBuff.push(e);else{if(this.lastStartTagName===this.currentToken.tagName){if(ve(e))return void(this.state=X);if(e===T.SOLIDUS)return void(this.state=ee);if(e===T.GREATER_THAN_SIGN)return this._emitCurrentToken(),void(this.state=p)}this._emitChars("</"),this._emitSeveralCodePoints(this.tempBuff),this._reconsumeInState(U);}}[x](e){ve(e)||e===T.SOLIDUS||e===T.GREATER_THAN_SIGN?(this.state=this._isTempBufferEqualToScriptString()?v:U,this._emitCodePoint(e)):we(e)?(this.tempBuff.push(ze(e)),this._emitCodePoint(e)):Qe(e)?(this.tempBuff.push(e),this._emitCodePoint(e)):this._reconsumeInState(U);}[v](e){e===T.HYPHEN_MINUS?(this.state=Y,this._emitChars("-")):e===T.LESS_THAN_SIGN?(this.state=Q,this._emitChars("<")):e===T.NULL?(this._err(s.unexpectedNullCharacter),this._emitChars(n.REPLACEMENT_CHARACTER)):e===T.EOF?(this._err(s.eofInScriptHtmlCommentLikeText),this._emitEOFToken()):this._emitCodePoint(e);}[Y](e){e===T.HYPHEN_MINUS?(this.state=w,this._emitChars("-")):e===T.LESS_THAN_SIGN?(this.state=Q,this._emitChars("<")):e===T.NULL?(this._err(s.unexpectedNullCharacter),this.state=v,this._emitChars(n.REPLACEMENT_CHARACTER)):e===T.EOF?(this._err(s.eofInScriptHtmlCommentLikeText),this._emitEOFToken()):(this.state=v,this._emitCodePoint(e));}[w](e){e===T.HYPHEN_MINUS?this._emitChars("-"):e===T.LESS_THAN_SIGN?(this.state=Q,this._emitChars("<")):e===T.GREATER_THAN_SIGN?(this.state=d,this._emitChars(">")):e===T.NULL?(this._err(s.unexpectedNullCharacter),this.state=v,this._emitChars(n.REPLACEMENT_CHARACTER)):e===T.EOF?(this._err(s.eofInScriptHtmlCommentLikeText),this._emitEOFToken()):(this.state=v,this._emitCodePoint(e));}[Q](e){e===T.SOLIDUS?(this.tempBuff=[],this.state=W,this._emitChars("/")):this._reconsumeInState(v);}[W](e){ve(e)||e===T.SOLIDUS||e===T.GREATER_THAN_SIGN?(this.state=this._isTempBufferEqualToScriptString()?U:v,this._emitCodePoint(e)):we(e)?(this.tempBuff.push(ze(e)),this._emitCodePoint(e)):Qe(e)?(this.tempBuff.push(e),this._emitCodePoint(e)):this._reconsumeInState(v);}[X](e){ve(e)||(e===T.SOLIDUS||e===T.GREATER_THAN_SIGN||e===T.EOF?this._reconsumeInState(j):e===T.EQUALS_SIGN?(this._err(s.unexpectedEqualsSignBeforeAttributeName),this._createAttr("="),this.state=V):(this._createAttr(""),this._reconsumeInState(V)));}[V](e){ve(e)||e===T.SOLIDUS||e===T.GREATER_THAN_SIGN||e===T.EOF?(this._leaveAttrName(j),this._unconsume()):e===T.EQUALS_SIGN?this._leaveAttrName(z):we(e)?this.currentAttr.name+=Je(e):e===T.QUOTATION_MARK||e===T.APOSTROPHE||e===T.LESS_THAN_SIGN?(this._err(s.unexpectedCharacterInAttributeName),this.currentAttr.name+=qe(e)):e===T.NULL?(this._err(s.unexpectedNullCharacter),this.currentAttr.name+=n.REPLACEMENT_CHARACTER):this.currentAttr.name+=qe(e);}[j](e){ve(e)||(e===T.SOLIDUS?this.state=ee:e===T.EQUALS_SIGN?this.state=z:e===T.GREATER_THAN_SIGN?(this.state=p,this._emitCurrentToken()):e===T.EOF?(this._err(s.eofInTag),this._emitEOFToken()):(this._createAttr(""),this._reconsumeInState(V)));}[z](e){ve(e)||(e===T.QUOTATION_MARK?this.state=q:e===T.APOSTROPHE?this.state=J:e===T.GREATER_THAN_SIGN?(this._err(s.missingAttributeValue),this.state=p,this._emitCurrentToken()):this._reconsumeInState(Z));}[q](e){e===T.QUOTATION_MARK?this.state=$:e===T.AMPERSAND?(this.returnState=q,this.state=He):e===T.NULL?(this._err(s.unexpectedNullCharacter),this.currentAttr.value+=n.REPLACEMENT_CHARACTER):e===T.EOF?(this._err(s.eofInTag),this._emitEOFToken()):this.currentAttr.value+=qe(e);}[J](e){e===T.APOSTROPHE?this.state=$:e===T.AMPERSAND?(this.returnState=J,this.state=He):e===T.NULL?(this._err(s.unexpectedNullCharacter),this.currentAttr.value+=n.REPLACEMENT_CHARACTER):e===T.EOF?(this._err(s.eofInTag),this._emitEOFToken()):this.currentAttr.value+=qe(e);}[Z](e){ve(e)?this._leaveAttrValue(X):e===T.AMPERSAND?(this.returnState=Z,this.state=He):e===T.GREATER_THAN_SIGN?(this._leaveAttrValue(p),this._emitCurrentToken()):e===T.NULL?(this._err(s.unexpectedNullCharacter),this.currentAttr.value+=n.REPLACEMENT_CHARACTER):e===T.QUOTATION_MARK||e===T.APOSTROPHE||e===T.LESS_THAN_SIGN||e===T.EQUALS_SIGN||e===T.GRAVE_ACCENT?(this._err(s.unexpectedCharacterInUnquotedAttributeValue),this.currentAttr.value+=qe(e)):e===T.EOF?(this._err(s.eofInTag),this._emitEOFToken()):this.currentAttr.value+=qe(e);}[$](e){ve(e)?this._leaveAttrValue(X):e===T.SOLIDUS?this._leaveAttrValue(ee):e===T.GREATER_THAN_SIGN?(this._leaveAttrValue(p),this._emitCurrentToken()):e===T.EOF?(this._err(s.eofInTag),this._emitEOFToken()):(this._err(s.missingWhitespaceBetweenAttributes),this._reconsumeInState(X));}[ee](e){e===T.GREATER_THAN_SIGN?(this.currentToken.selfClosing=!0,this.state=p,this._emitCurrentToken()):e===T.EOF?(this._err(s.eofInTag),this._emitEOFToken()):(this._err(s.unexpectedSolidusInTag),this._reconsumeInState(X));}[te](e){e===T.GREATER_THAN_SIGN?(this.state=p,this._emitCurrentToken()):e===T.EOF?(this._emitCurrentToken(),this._emitEOFToken()):e===T.NULL?(this._err(s.unexpectedNullCharacter),this.currentToken.data+=n.REPLACEMENT_CHARACTER):this.currentToken.data+=qe(e);}[ne](e){this._consumeSequenceIfMatch(E.DASH_DASH_STRING,e,!0)?(this._createCommentToken(),this.state=se):this._consumeSequenceIfMatch(E.DOCTYPE_STRING,e,!1)?this.state=me:this._consumeSequenceIfMatch(E.CDATA_START_STRING,e,!0)?this.allowCDATA?this.state=ke:(this._err(s.cdataInHtmlContent),this._createCommentToken(),this.currentToken.data="[CDATA[",this.state=te):this._ensureHibernation()||(this._err(s.incorrectlyOpenedComment),this._createCommentToken(),this._reconsumeInState(te));}[se](e){e===T.HYPHEN_MINUS?this.state=re:e===T.GREATER_THAN_SIGN?(this._err(s.abruptClosingOfEmptyComment),this.state=p,this._emitCurrentToken()):this._reconsumeInState(ie);}[re](e){e===T.HYPHEN_MINUS?this.state=he:e===T.GREATER_THAN_SIGN?(this._err(s.abruptClosingOfEmptyComment),this.state=p,this._emitCurrentToken()):e===T.EOF?(this._err(s.eofInComment),this._emitCurrentToken(),this._emitEOFToken()):(this.currentToken.data+="-",this._reconsumeInState(ie));}[ie](e){e===T.HYPHEN_MINUS?this.state=ce:e===T.LESS_THAN_SIGN?(this.currentToken.data+="<",this.state=oe):e===T.NULL?(this._err(s.unexpectedNullCharacter),this.currentToken.data+=n.REPLACEMENT_CHARACTER):e===T.EOF?(this._err(s.eofInComment),this._emitCurrentToken(),this._emitEOFToken()):this.currentToken.data+=qe(e);}[oe](e){e===T.EXCLAMATION_MARK?(this.currentToken.data+="!",this.state=ae):e===T.LESS_THAN_SIGN?this.currentToken.data+="!":this._reconsumeInState(ie);}[ae](e){e===T.HYPHEN_MINUS?this.state=Te:this._reconsumeInState(ie);}[Te](e){e===T.HYPHEN_MINUS?this.state=Ee:this._reconsumeInState(ce);}[Ee](e){e!==T.GREATER_THAN_SIGN&&e!==T.EOF&&this._err(s.nestedComment),this._reconsumeInState(he);}[ce](e){e===T.HYPHEN_MINUS?this.state=he:e===T.EOF?(this._err(s.eofInComment),this._emitCurrentToken(),this._emitEOFToken()):(this.currentToken.data+="-",this._reconsumeInState(ie));}[he](e){e===T.GREATER_THAN_SIGN?(this.state=p,this._emitCurrentToken()):e===T.EXCLAMATION_MARK?this.state=le:e===T.HYPHEN_MINUS?this.currentToken.data+="-":e===T.EOF?(this._err(s.eofInComment),this._emitCurrentToken(),this._emitEOFToken()):(this.currentToken.data+="--",this._reconsumeInState(ie));}[le](e){e===T.HYPHEN_MINUS?(this.currentToken.data+="--!",this.state=ce):e===T.GREATER_THAN_SIGN?(this._err(s.incorrectlyClosedComment),this.state=p,this._emitCurrentToken()):e===T.EOF?(this._err(s.eofInComment),this._emitCurrentToken(),this._emitEOFToken()):(this.currentToken.data+="--!",this._reconsumeInState(ie));}[me](e){ve(e)?this.state=_e:e===T.GREATER_THAN_SIGN?this._reconsumeInState(_e):e===T.EOF?(this._err(s.eofInDoctype),this._createDoctypeToken(null),this.currentToken.forceQuirks=!0,this._emitCurrentToken(),this._emitEOFToken()):(this._err(s.missingWhitespaceBeforeDoctypeName),this._reconsumeInState(_e));}[_e](e){ve(e)||(we(e)?(this._createDoctypeToken(Je(e)),this.state=pe):e===T.NULL?(this._err(s.unexpectedNullCharacter),this._createDoctypeToken(n.REPLACEMENT_CHARACTER),this.state=pe):e===T.GREATER_THAN_SIGN?(this._err(s.missingDoctypeName),this._createDoctypeToken(null),this.currentToken.forceQuirks=!0,this._emitCurrentToken(),this.state=p):e===T.EOF?(this._err(s.eofInDoctype),this._createDoctypeToken(null),this.currentToken.forceQuirks=!0,this._emitCurrentToken(),this._emitEOFToken()):(this._createDoctypeToken(qe(e)),this.state=pe));}[pe](e){ve(e)?this.state=ue:e===T.GREATER_THAN_SIGN?(this.state=p,this._emitCurrentToken()):we(e)?this.currentToken.name+=Je(e):e===T.NULL?(this._err(s.unexpectedNullCharacter),this.currentToken.name+=n.REPLACEMENT_CHARACTER):e===T.EOF?(this._err(s.eofInDoctype),this.currentToken.forceQuirks=!0,this._emitCurrentToken(),this._emitEOFToken()):this.currentToken.name+=qe(e);}[ue](e){ve(e)||(e===T.GREATER_THAN_SIGN?(this.state=p,this._emitCurrentToken()):e===T.EOF?(this._err(s.eofInDoctype),this.currentToken.forceQuirks=!0,this._emitCurrentToken(),this._emitEOFToken()):this._consumeSequenceIfMatch(E.PUBLIC_STRING,e,!1)?this.state=Ae:this._consumeSequenceIfMatch(E.SYSTEM_STRING,e,!1)?this.state=Se:this._ensureHibernation()||(this._err(s.invalidCharacterSequenceAfterDoctypeName),this.currentToken.forceQuirks=!0,this._reconsumeInState(Me)));}[Ae](e){ve(e)?this.state=de:e===T.QUOTATION_MARK?(this._err(s.missingWhitespaceAfterDoctypePublicKeyword),this.currentToken.publicId="",this.state=Ne):e===T.APOSTROPHE?(this._err(s.missingWhitespaceAfterDoctypePublicKeyword),this.currentToken.publicId="",this.state=Ce):e===T.GREATER_THAN_SIGN?(this._err(s.missingDoctypePublicIdentifier),this.currentToken.forceQuirks=!0,this.state=p,this._emitCurrentToken()):e===T.EOF?(this._err(s.eofInDoctype),this.currentToken.forceQuirks=!0,this._emitCurrentToken(),this._emitEOFToken()):(this._err(s.missingQuoteBeforeDoctypePublicIdentifier),this.currentToken.forceQuirks=!0,this._reconsumeInState(Me));}[de](e){ve(e)||(e===T.QUOTATION_MARK?(this.currentToken.publicId="",this.state=Ne):e===T.APOSTROPHE?(this.currentToken.publicId="",this.state=Ce):e===T.GREATER_THAN_SIGN?(this._err(s.missingDoctypePublicIdentifier),this.currentToken.forceQuirks=!0,this.state=p,this._emitCurrentToken()):e===T.EOF?(this._err(s.eofInDoctype),this.currentToken.forceQuirks=!0,this._emitCurrentToken(),this._emitEOFToken()):(this._err(s.missingQuoteBeforeDoctypePublicIdentifier),this.currentToken.forceQuirks=!0,this._reconsumeInState(Me)));}[Ne](e){e===T.QUOTATION_MARK?this.state=fe:e===T.NULL?(this._err(s.unexpectedNullCharacter),this.currentToken.publicId+=n.REPLACEMENT_CHARACTER):e===T.GREATER_THAN_SIGN?(this._err(s.abruptDoctypePublicIdentifier),this.currentToken.forceQuirks=!0,this._emitCurrentToken(),this.state=p):e===T.EOF?(this._err(s.eofInDoctype),this.currentToken.forceQuirks=!0,this._emitCurrentToken(),this._emitEOFToken()):this.currentToken.publicId+=qe(e);}[Ce](e){e===T.APOSTROPHE?this.state=fe:e===T.NULL?(this._err(s.unexpectedNullCharacter),this.currentToken.publicId+=n.REPLACEMENT_CHARACTER):e===T.GREATER_THAN_SIGN?(this._err(s.abruptDoctypePublicIdentifier),this.currentToken.forceQuirks=!0,this._emitCurrentToken(),this.state=p):e===T.EOF?(this._err(s.eofInDoctype),this.currentToken.forceQuirks=!0,this._emitCurrentToken(),this._emitEOFToken()):this.currentToken.publicId+=qe(e);}[fe](e){ve(e)?this.state=Oe:e===T.GREATER_THAN_SIGN?(this.state=p,this._emitCurrentToken()):e===T.QUOTATION_MARK?(this._err(s.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers),this.currentToken.systemId="",this.state=Ie):e===T.APOSTROPHE?(this._err(s.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers),this.currentToken.systemId="",this.state=ge):e===T.EOF?(this._err(s.eofInDoctype),this.currentToken.forceQuirks=!0,this._emitCurrentToken(),this._emitEOFToken()):(this._err(s.missingQuoteBeforeDoctypeSystemIdentifier),this.currentToken.forceQuirks=!0,this._reconsumeInState(Me));}[Oe](e){ve(e)||(e===T.GREATER_THAN_SIGN?(this._emitCurrentToken(),this.state=p):e===T.QUOTATION_MARK?(this.currentToken.systemId="",this.state=Ie):e===T.APOSTROPHE?(this.currentToken.systemId="",this.state=ge):e===T.EOF?(this._err(s.eofInDoctype),this.currentToken.forceQuirks=!0,this._emitCurrentToken(),this._emitEOFToken()):(this._err(s.missingQuoteBeforeDoctypeSystemIdentifier),this.currentToken.forceQuirks=!0,this._reconsumeInState(Me)));}[Se](e){ve(e)?this.state=Re:e===T.QUOTATION_MARK?(this._err(s.missingWhitespaceAfterDoctypeSystemKeyword),this.currentToken.systemId="",this.state=Ie):e===T.APOSTROPHE?(this._err(s.missingWhitespaceAfterDoctypeSystemKeyword),this.currentToken.systemId="",this.state=ge):e===T.GREATER_THAN_SIGN?(this._err(s.missingDoctypeSystemIdentifier),this.currentToken.forceQuirks=!0,this.state=p,this._emitCurrentToken()):e===T.EOF?(this._err(s.eofInDoctype),this.currentToken.forceQuirks=!0,this._emitCurrentToken(),this._emitEOFToken()):(this._err(s.missingQuoteBeforeDoctypeSystemIdentifier),this.currentToken.forceQuirks=!0,this._reconsumeInState(Me));}[Re](e){ve(e)||(e===T.QUOTATION_MARK?(this.currentToken.systemId="",this.state=Ie):e===T.APOSTROPHE?(this.currentToken.systemId="",this.state=ge):e===T.GREATER_THAN_SIGN?(this._err(s.missingDoctypeSystemIdentifier),this.currentToken.forceQuirks=!0,this.state=p,this._emitCurrentToken()):e===T.EOF?(this._err(s.eofInDoctype),this.currentToken.forceQuirks=!0,this._emitCurrentToken(),this._emitEOFToken()):(this._err(s.missingQuoteBeforeDoctypeSystemIdentifier),this.currentToken.forceQuirks=!0,this._reconsumeInState(Me)));}[Ie](e){e===T.QUOTATION_MARK?this.state=Le:e===T.NULL?(this._err(s.unexpectedNullCharacter),this.currentToken.systemId+=n.REPLACEMENT_CHARACTER):e===T.GREATER_THAN_SIGN?(this._err(s.abruptDoctypeSystemIdentifier),this.currentToken.forceQuirks=!0,this._emitCurrentToken(),this.state=p):e===T.EOF?(this._err(s.eofInDoctype),this.currentToken.forceQuirks=!0,this._emitCurrentToken(),this._emitEOFToken()):this.currentToken.systemId+=qe(e);}[ge](e){e===T.APOSTROPHE?this.state=Le:e===T.NULL?(this._err(s.unexpectedNullCharacter),this.currentToken.systemId+=n.REPLACEMENT_CHARACTER):e===T.GREATER_THAN_SIGN?(this._err(s.abruptDoctypeSystemIdentifier),this.currentToken.forceQuirks=!0,this._emitCurrentToken(),this.state=p):e===T.EOF?(this._err(s.eofInDoctype),this.currentToken.forceQuirks=!0,this._emitCurrentToken(),this._emitEOFToken()):this.currentToken.systemId+=qe(e);}[Le](e){ve(e)||(e===T.GREATER_THAN_SIGN?(this._emitCurrentToken(),this.state=p):e===T.EOF?(this._err(s.eofInDoctype),this.currentToken.forceQuirks=!0,this._emitCurrentToken(),this._emitEOFToken()):(this._err(s.unexpectedCharacterAfterDoctypeSystemIdentifier),this._reconsumeInState(Me)));}[Me](e){e===T.GREATER_THAN_SIGN?(this._emitCurrentToken(),this.state=p):e===T.NULL?this._err(s.unexpectedNullCharacter):e===T.EOF&&(this._emitCurrentToken(),this._emitEOFToken());}[ke](e){e===T.RIGHT_SQUARE_BRACKET?this.state=Pe:e===T.EOF?(this._err(s.eofInCdata),this._emitEOFToken()):this._emitCodePoint(e);}[Pe](e){e===T.RIGHT_SQUARE_BRACKET?this.state=De:(this._emitChars("]"),this._reconsumeInState(ke));}[De](e){e===T.GREATER_THAN_SIGN?this.state=p:e===T.RIGHT_SQUARE_BRACKET?this._emitChars("]"):(this._emitChars("]]"),this._reconsumeInState(ke));}[He](e){this.tempBuff=[T.AMPERSAND],e===T.NUMBER_SIGN?(this.tempBuff.push(e),this.state=Ge):Xe(e)?this._reconsumeInState(Fe):(this._flushCodePointsConsumedAsCharacterReference(),this._reconsumeInState(this.returnState));}[Fe](e){const t=this._matchNamedCharacterReference(e);if(this._ensureHibernation())this.tempBuff=[T.AMPERSAND];else if(t){const e=this.tempBuff[this.tempBuff.length-1]===T.SEMICOLON;this._isCharacterReferenceAttributeQuirk(e)||(e||this._errOnNextCodePoint(s.missingSemicolonAfterCharacterReference),this.tempBuff=t),this._flushCodePointsConsumedAsCharacterReference(),this.state=this.returnState;}else this._flushCodePointsConsumedAsCharacterReference(),this.state=Ue;}[Ue](e){Xe(e)?this._isCharacterReferenceInAttribute()?this.currentAttr.value+=qe(e):this._emitCodePoint(e):(e===T.SEMICOLON&&this._err(s.unknownNamedCharacterReference),this._reconsumeInState(this.returnState));}[Ge](e){this.charRefCode=0,e===T.LATIN_SMALL_X||e===T.LATIN_CAPITAL_X?(this.tempBuff.push(e),this.state=Be):this._reconsumeInState(Ke);}[Be](e){!function(e){return Ye(e)||Ve(e)||je(e)}(e)?(this._err(s.absenceOfDigitsInNumericCharacterReference),this._flushCodePointsConsumedAsCharacterReference(),this._reconsumeInState(this.returnState)):this._reconsumeInState(be);}[Ke](e){Ye(e)?this._reconsumeInState(ye):(this._err(s.absenceOfDigitsInNumericCharacterReference),this._flushCodePointsConsumedAsCharacterReference(),this._reconsumeInState(this.returnState));}[be](e){Ve(e)?this.charRefCode=16*this.charRefCode+e-55:je(e)?this.charRefCode=16*this.charRefCode+e-87:Ye(e)?this.charRefCode=16*this.charRefCode+e-48:e===T.SEMICOLON?this.state=xe:(this._err(s.missingSemicolonAfterCharacterReference),this._reconsumeInState(xe));}[ye](e){Ye(e)?this.charRefCode=10*this.charRefCode+e-48:e===T.SEMICOLON?this.state=xe:(this._err(s.missingSemicolonAfterCharacterReference),this._reconsumeInState(xe));}[xe](){if(this.charRefCode===T.NULL)this._err(s.nullCharacterReference),this.charRefCode=T.REPLACEMENT_CHARACTER;else if(this.charRefCode>1114111)this._err(s.characterReferenceOutsideUnicodeRange),this.charRefCode=T.REPLACEMENT_CHARACTER;else if(n.isSurrogate(this.charRefCode))this._err(s.surrogateCharacterReference),this.charRefCode=T.REPLACEMENT_CHARACTER;else if(n.isUndefinedCodePoint(this.charRefCode))this._err(s.noncharacterCharacterReference);else if(n.isControlCodePoint(this.charRefCode)||this.charRefCode===T.CARRIAGE_RETURN){this._err(s.controlCharacterReference);const e=c[this.charRefCode];e&&(this.charRefCode=e);}this.tempBuff=[this.charRefCode],this._flushCodePointsConsumedAsCharacterReference(),this._reconsumeInState(this.returnState);}}$e.CHARACTER_TOKEN="CHARACTER_TOKEN",$e.NULL_CHARACTER_TOKEN="NULL_CHARACTER_TOKEN",$e.WHITESPACE_CHARACTER_TOKEN="WHITESPACE_CHARACTER_TOKEN",$e.START_TAG_TOKEN="START_TAG_TOKEN",$e.END_TAG_TOKEN="END_TAG_TOKEN",$e.COMMENT_TOKEN="COMMENT_TOKEN",$e.DOCTYPE_TOKEN="DOCTYPE_TOKEN",$e.EOF_TOKEN="EOF_TOKEN",$e.HIBERNATION_TOKEN="HIBERNATION_TOKEN",$e.MODE={DATA:p,RCDATA:u,RAWTEXT:A,SCRIPT_DATA:d,PLAINTEXT:N},$e.getTokenAttr=function(e,t){for(let n=e.attrs.length-1;n>=0;n--)if(e.attrs[n].name===t)return e.attrs[n].value;return null};var et=$e;function tt(e,t){return e(t={exports:{}},t.exports),t.exports}var nt=tt((function(e,t){const n=t.NAMESPACES={HTML:"http://www.w3.org/1999/xhtml",MATHML:"http://www.w3.org/1998/Math/MathML",SVG:"http://www.w3.org/2000/svg",XLINK:"http://www.w3.org/1999/xlink",XML:"http://www.w3.org/XML/1998/namespace",XMLNS:"http://www.w3.org/2000/xmlns/"};t.ATTRS={TYPE:"type",ACTION:"action",ENCODING:"encoding",PROMPT:"prompt",NAME:"name",COLOR:"color",FACE:"face",SIZE:"size"},t.DOCUMENT_MODE={NO_QUIRKS:"no-quirks",QUIRKS:"quirks",LIMITED_QUIRKS:"limited-quirks"};const s=t.TAG_NAMES={A:"a",ADDRESS:"address",ANNOTATION_XML:"annotation-xml",APPLET:"applet",AREA:"area",ARTICLE:"article",ASIDE:"aside",B:"b",BASE:"base",BASEFONT:"basefont",BGSOUND:"bgsound",BIG:"big",BLOCKQUOTE:"blockquote",BODY:"body",BR:"br",BUTTON:"button",CAPTION:"caption",CENTER:"center",CODE:"code",COL:"col",COLGROUP:"colgroup",DD:"dd",DESC:"desc",DETAILS:"details",DIALOG:"dialog",DIR:"dir",DIV:"div",DL:"dl",DT:"dt",EM:"em",EMBED:"embed",FIELDSET:"fieldset",FIGCAPTION:"figcaption",FIGURE:"figure",FONT:"font",FOOTER:"footer",FOREIGN_OBJECT:"foreignObject",FORM:"form",FRAME:"frame",FRAMESET:"frameset",H1:"h1",H2:"h2",H3:"h3",H4:"h4",H5:"h5",H6:"h6",HEAD:"head",HEADER:"header",HGROUP:"hgroup",HR:"hr",HTML:"html",I:"i",IMG:"img",IMAGE:"image",INPUT:"input",IFRAME:"iframe",KEYGEN:"keygen",LABEL:"label",LI:"li",LINK:"link",LISTING:"listing",MAIN:"main",MALIGNMARK:"malignmark",MARQUEE:"marquee",MATH:"math",MENU:"menu",META:"meta",MGLYPH:"mglyph",MI:"mi",MO:"mo",MN:"mn",MS:"ms",MTEXT:"mtext",NAV:"nav",NOBR:"nobr",NOFRAMES:"noframes",NOEMBED:"noembed",NOSCRIPT:"noscript",OBJECT:"object",OL:"ol",OPTGROUP:"optgroup",OPTION:"option",P:"p",PARAM:"param",PLAINTEXT:"plaintext",PRE:"pre",RB:"rb",RP:"rp",RT:"rt",RTC:"rtc",RUBY:"ruby",S:"s",SCRIPT:"script",SECTION:"section",SELECT:"select",SOURCE:"source",SMALL:"small",SPAN:"span",STRIKE:"strike",STRONG:"strong",STYLE:"style",SUB:"sub",SUMMARY:"summary",SUP:"sup",TABLE:"table",TBODY:"tbody",TEMPLATE:"template",TEXTAREA:"textarea",TFOOT:"tfoot",TD:"td",TH:"th",THEAD:"thead",TITLE:"title",TR:"tr",TRACK:"track",TT:"tt",U:"u",UL:"ul",SVG:"svg",VAR:"var",WBR:"wbr",XMP:"xmp"};t.SPECIAL_ELEMENTS={[n.HTML]:{[s.ADDRESS]:!0,[s.APPLET]:!0,[s.AREA]:!0,[s.ARTICLE]:!0,[s.ASIDE]:!0,[s.BASE]:!0,[s.BASEFONT]:!0,[s.BGSOUND]:!0,[s.BLOCKQUOTE]:!0,[s.BODY]:!0,[s.BR]:!0,[s.BUTTON]:!0,[s.CAPTION]:!0,[s.CENTER]:!0,[s.COL]:!0,[s.COLGROUP]:!0,[s.DD]:!0,[s.DETAILS]:!0,[s.DIR]:!0,[s.DIV]:!0,[s.DL]:!0,[s.DT]:!0,[s.EMBED]:!0,[s.FIELDSET]:!0,[s.FIGCAPTION]:!0,[s.FIGURE]:!0,[s.FOOTER]:!0,[s.FORM]:!0,[s.FRAME]:!0,[s.FRAMESET]:!0,[s.H1]:!0,[s.H2]:!0,[s.H3]:!0,[s.H4]:!0,[s.H5]:!0,[s.H6]:!0,[s.HEAD]:!0,[s.HEADER]:!0,[s.HGROUP]:!0,[s.HR]:!0,[s.HTML]:!0,[s.IFRAME]:!0,[s.IMG]:!0,[s.INPUT]:!0,[s.LI]:!0,[s.LINK]:!0,[s.LISTING]:!0,[s.MAIN]:!0,[s.MARQUEE]:!0,[s.MENU]:!0,[s.META]:!0,[s.NAV]:!0,[s.NOEMBED]:!0,[s.NOFRAMES]:!0,[s.NOSCRIPT]:!0,[s.OBJECT]:!0,[s.OL]:!0,[s.P]:!0,[s.PARAM]:!0,[s.PLAINTEXT]:!0,[s.PRE]:!0,[s.SCRIPT]:!0,[s.SECTION]:!0,[s.SELECT]:!0,[s.SOURCE]:!0,[s.STYLE]:!0,[s.SUMMARY]:!0,[s.TABLE]:!0,[s.TBODY]:!0,[s.TD]:!0,[s.TEMPLATE]:!0,[s.TEXTAREA]:!0,[s.TFOOT]:!0,[s.TH]:!0,[s.THEAD]:!0,[s.TITLE]:!0,[s.TR]:!0,[s.TRACK]:!0,[s.UL]:!0,[s.WBR]:!0,[s.XMP]:!0},[n.MATHML]:{[s.MI]:!0,[s.MO]:!0,[s.MN]:!0,[s.MS]:!0,[s.MTEXT]:!0,[s.ANNOTATION_XML]:!0},[n.SVG]:{[s.TITLE]:!0,[s.FOREIGN_OBJECT]:!0,[s.DESC]:!0}};}));nt.NAMESPACES,nt.ATTRS,nt.DOCUMENT_MODE,nt.TAG_NAMES,nt.SPECIAL_ELEMENTS;const st=nt.TAG_NAMES,rt=nt.NAMESPACES;function it(e){switch(e.length){case 1:return e===st.P;case 2:return e===st.RB||e===st.RP||e===st.RT||e===st.DD||e===st.DT||e===st.LI;case 3:return e===st.RTC;case 6:return e===st.OPTION;case 8:return e===st.OPTGROUP}return !1}function ot(e){switch(e.length){case 1:return e===st.P;case 2:return e===st.RB||e===st.RP||e===st.RT||e===st.DD||e===st.DT||e===st.LI||e===st.TD||e===st.TH||e===st.TR;case 3:return e===st.RTC;case 5:return e===st.TBODY||e===st.TFOOT||e===st.THEAD;case 6:return e===st.OPTION;case 7:return e===st.CAPTION;case 8:return e===st.OPTGROUP||e===st.COLGROUP}return !1}function at(e,t){switch(e.length){case 2:if(e===st.TD||e===st.TH)return t===rt.HTML;if(e===st.MI||e===st.MO||e===st.MN||e===st.MS)return t===rt.MATHML;break;case 4:if(e===st.HTML)return t===rt.HTML;if(e===st.DESC)return t===rt.SVG;break;case 5:if(e===st.TABLE)return t===rt.HTML;if(e===st.MTEXT)return t===rt.MATHML;if(e===st.TITLE)return t===rt.SVG;break;case 6:return (e===st.APPLET||e===st.OBJECT)&&t===rt.HTML;case 7:return (e===st.CAPTION||e===st.MARQUEE)&&t===rt.HTML;case 8:return e===st.TEMPLATE&&t===rt.HTML;case 13:return e===st.FOREIGN_OBJECT&&t===rt.SVG;case 14:return e===st.ANNOTATION_XML&&t===rt.MATHML}return !1}var Tt=class{constructor(e,t){this.stackTop=-1,this.items=[],this.current=e,this.currentTagName=null,this.currentTmplContent=null,this.tmplCount=0,this.treeAdapter=t;}_indexOf(e){let t=-1;for(let n=this.stackTop;n>=0;n--)if(this.items[n]===e){t=n;break}return t}_isInTemplate(){return this.currentTagName===st.TEMPLATE&&this.treeAdapter.getNamespaceURI(this.current)===rt.HTML}_updateCurrentElement(){this.current=this.items[this.stackTop],this.currentTagName=this.current&&this.treeAdapter.getTagName(this.current),this.currentTmplContent=this._isInTemplate()?this.treeAdapter.getTemplateContent(this.current):null;}push(e){this.items[++this.stackTop]=e,this._updateCurrentElement(),this._isInTemplate()&&this.tmplCount++;}pop(){this.stackTop--,this.tmplCount>0&&this._isInTemplate()&&this.tmplCount--,this._updateCurrentElement();}replace(e,t){const n=this._indexOf(e);this.items[n]=t,n===this.stackTop&&this._updateCurrentElement();}insertAfter(e,t){const n=this._indexOf(e)+1;this.items.splice(n,0,t),n===++this.stackTop&&this._updateCurrentElement();}popUntilTagNamePopped(e){for(;this.stackTop>-1;){const t=this.currentTagName,n=this.treeAdapter.getNamespaceURI(this.current);if(this.pop(),t===e&&n===rt.HTML)break}}popUntilElementPopped(e){for(;this.stackTop>-1;){const t=this.current;if(this.pop(),t===e)break}}popUntilNumberedHeaderPopped(){for(;this.stackTop>-1;){const e=this.currentTagName,t=this.treeAdapter.getNamespaceURI(this.current);if(this.pop(),e===st.H1||e===st.H2||e===st.H3||e===st.H4||e===st.H5||e===st.H6&&t===rt.HTML)break}}popUntilTableCellPopped(){for(;this.stackTop>-1;){const e=this.currentTagName,t=this.treeAdapter.getNamespaceURI(this.current);if(this.pop(),e===st.TD||e===st.TH&&t===rt.HTML)break}}popAllUpToHtmlElement(){this.stackTop=0,this._updateCurrentElement();}clearBackToTableContext(){for(;this.currentTagName!==st.TABLE&&this.currentTagName!==st.TEMPLATE&&this.currentTagName!==st.HTML||this.treeAdapter.getNamespaceURI(this.current)!==rt.HTML;)this.pop();}clearBackToTableBodyContext(){for(;this.currentTagName!==st.TBODY&&this.currentTagName!==st.TFOOT&&this.currentTagName!==st.THEAD&&this.currentTagName!==st.TEMPLATE&&this.currentTagName!==st.HTML||this.treeAdapter.getNamespaceURI(this.current)!==rt.HTML;)this.pop();}clearBackToTableRowContext(){for(;this.currentTagName!==st.TR&&this.currentTagName!==st.TEMPLATE&&this.currentTagName!==st.HTML||this.treeAdapter.getNamespaceURI(this.current)!==rt.HTML;)this.pop();}remove(e){for(let t=this.stackTop;t>=0;t--)if(this.items[t]===e){this.items.splice(t,1),this.stackTop--,this._updateCurrentElement();break}}tryPeekProperlyNestedBodyElement(){const e=this.items[1];return e&&this.treeAdapter.getTagName(e)===st.BODY?e:null}contains(e){return this._indexOf(e)>-1}getCommonAncestor(e){let t=this._indexOf(e);return --t>=0?this.items[t]:null}isRootHtmlElementCurrent(){return 0===this.stackTop&&this.currentTagName===st.HTML}hasInScope(e){for(let t=this.stackTop;t>=0;t--){const n=this.treeAdapter.getTagName(this.items[t]),s=this.treeAdapter.getNamespaceURI(this.items[t]);if(n===e&&s===rt.HTML)return !0;if(at(n,s))return !1}return !0}hasNumberedHeaderInScope(){for(let e=this.stackTop;e>=0;e--){const t=this.treeAdapter.getTagName(this.items[e]),n=this.treeAdapter.getNamespaceURI(this.items[e]);if((t===st.H1||t===st.H2||t===st.H3||t===st.H4||t===st.H5||t===st.H6)&&n===rt.HTML)return !0;if(at(t,n))return !1}return !0}hasInListItemScope(e){for(let t=this.stackTop;t>=0;t--){const n=this.treeAdapter.getTagName(this.items[t]),s=this.treeAdapter.getNamespaceURI(this.items[t]);if(n===e&&s===rt.HTML)return !0;if((n===st.UL||n===st.OL)&&s===rt.HTML||at(n,s))return !1}return !0}hasInButtonScope(e){for(let t=this.stackTop;t>=0;t--){const n=this.treeAdapter.getTagName(this.items[t]),s=this.treeAdapter.getNamespaceURI(this.items[t]);if(n===e&&s===rt.HTML)return !0;if(n===st.BUTTON&&s===rt.HTML||at(n,s))return !1}return !0}hasInTableScope(e){for(let t=this.stackTop;t>=0;t--){const n=this.treeAdapter.getTagName(this.items[t]);if(this.treeAdapter.getNamespaceURI(this.items[t])===rt.HTML){if(n===e)return !0;if(n===st.TABLE||n===st.TEMPLATE||n===st.HTML)return !1}}return !0}hasTableBodyContextInTableScope(){for(let e=this.stackTop;e>=0;e--){const t=this.treeAdapter.getTagName(this.items[e]);if(this.treeAdapter.getNamespaceURI(this.items[e])===rt.HTML){if(t===st.TBODY||t===st.THEAD||t===st.TFOOT)return !0;if(t===st.TABLE||t===st.HTML)return !1}}return !0}hasInSelectScope(e){for(let t=this.stackTop;t>=0;t--){const n=this.treeAdapter.getTagName(this.items[t]);if(this.treeAdapter.getNamespaceURI(this.items[t])===rt.HTML){if(n===e)return !0;if(n!==st.OPTION&&n!==st.OPTGROUP)return !1}}return !0}generateImpliedEndTags(){for(;it(this.currentTagName);)this.pop();}generateImpliedEndTagsThoroughly(){for(;ot(this.currentTagName);)this.pop();}generateImpliedEndTagsWithExclusion(e){for(;it(this.currentTagName)&&this.currentTagName!==e;)this.pop();}};const Et=3;class ct{constructor(e){this.length=0,this.entries=[],this.treeAdapter=e,this.bookmark=null;}_getNoahArkConditionCandidates(e){const t=[];if(this.length>=Et){const n=this.treeAdapter.getAttrList(e).length,s=this.treeAdapter.getTagName(e),r=this.treeAdapter.getNamespaceURI(e);for(let e=this.length-1;e>=0;e--){const i=this.entries[e];if(i.type===ct.MARKER_ENTRY)break;const o=i.element,a=this.treeAdapter.getAttrList(o);this.treeAdapter.getTagName(o)===s&&this.treeAdapter.getNamespaceURI(o)===r&&a.length===n&&t.push({idx:e,attrs:a});}}return t.length<Et?[]:t}_ensureNoahArkCondition(e){const t=this._getNoahArkConditionCandidates(e);let n=t.length;if(n){const s=this.treeAdapter.getAttrList(e),r=s.length,i=Object.create(null);for(let e=0;e<r;e++){const t=s[e];i[t.name]=t.value;}for(let e=0;e<r;e++)for(let s=0;s<n;s++){const r=t[s].attrs[e];if(i[r.name]!==r.value&&(t.splice(s,1),n--),t.length<Et)return}for(let e=n-1;e>=Et-1;e--)this.entries.splice(t[e].idx,1),this.length--;}}insertMarker(){this.entries.push({type:ct.MARKER_ENTRY}),this.length++;}pushElement(e,t){this._ensureNoahArkCondition(e),this.entries.push({type:ct.ELEMENT_ENTRY,element:e,token:t}),this.length++;}insertElementAfterBookmark(e,t){let n=this.length-1;for(;n>=0&&this.entries[n]!==this.bookmark;n--);this.entries.splice(n+1,0,{type:ct.ELEMENT_ENTRY,element:e,token:t}),this.length++;}removeEntry(e){for(let t=this.length-1;t>=0;t--)if(this.entries[t]===e){this.entries.splice(t,1),this.length--;break}}clearToLastMarker(){for(;this.length;){const e=this.entries.pop();if(this.length--,e.type===ct.MARKER_ENTRY)break}}getElementEntryInScopeWithTagName(e){for(let t=this.length-1;t>=0;t--){const n=this.entries[t];if(n.type===ct.MARKER_ENTRY)return null;if(this.treeAdapter.getTagName(n.element)===e)return n}return null}getElementEntry(e){for(let t=this.length-1;t>=0;t--){const n=this.entries[t];if(n.type===ct.ELEMENT_ENTRY&&n.element===e)return n}return null}}ct.MARKER_ENTRY="MARKER_ENTRY",ct.ELEMENT_ENTRY="ELEMENT_ENTRY";var ht=ct;class lt{constructor(e){const t={},n=this._getOverriddenMethods(this,t);for(const s of Object.keys(n))"function"==typeof n[s]&&(t[s]=e[s],e[s]=n[s]);}_getOverriddenMethods(){throw new Error("Not implemented")}}lt.install=function(e,t,n){e.__mixins||(e.__mixins=[]);for(let n=0;n<e.__mixins.length;n++)if(e.__mixins[n].constructor===t)return e.__mixins[n];const s=new t(e,n);return e.__mixins.push(s),s};var mt=lt;var _t=class extends mt{constructor(e){super(e),this.preprocessor=e,this.isEol=!1,this.lineStartPos=0,this.droppedBufferSize=0,this.offset=0,this.col=0,this.line=1;}_getOverriddenMethods(e,t){return {advance(){const n=this.pos+1,s=this.html[n];return e.isEol&&(e.isEol=!1,e.line++,e.lineStartPos=n),("\n"===s||"\r"===s&&"\n"!==this.html[n+1])&&(e.isEol=!0),e.col=n-e.lineStartPos+1,e.offset=e.droppedBufferSize+n,t.advance.call(this)},retreat(){t.retreat.call(this),e.isEol=!1,e.col=this.pos-e.lineStartPos+1;},dropParsedChunk(){const n=this.pos;t.dropParsedChunk.call(this);const s=n-this.pos;e.lineStartPos-=s,e.droppedBufferSize+=s,e.offset=e.droppedBufferSize+this.pos;}}}};var pt=class extends mt{constructor(e){super(e),this.tokenizer=e,this.posTracker=mt.install(e.preprocessor,_t),this.currentAttrLocation=null,this.ctLoc=null;}_getCurrentLocation(){return {startLine:this.posTracker.line,startCol:this.posTracker.col,startOffset:this.posTracker.offset,endLine:-1,endCol:-1,endOffset:-1}}_attachCurrentAttrLocationInfo(){this.currentAttrLocation.endLine=this.posTracker.line,this.currentAttrLocation.endCol=this.posTracker.col,this.currentAttrLocation.endOffset=this.posTracker.offset;const e=this.tokenizer.currentToken,t=this.tokenizer.currentAttr;e.location.attrs||(e.location.attrs=Object.create(null)),e.location.attrs[t.name]=this.currentAttrLocation;}_getOverriddenMethods(e,t){const n={_createStartTagToken(){t._createStartTagToken.call(this),this.currentToken.location=e.ctLoc;},_createEndTagToken(){t._createEndTagToken.call(this),this.currentToken.location=e.ctLoc;},_createCommentToken(){t._createCommentToken.call(this),this.currentToken.location=e.ctLoc;},_createDoctypeToken(n){t._createDoctypeToken.call(this,n),this.currentToken.location=e.ctLoc;},_createCharacterToken(n,s){t._createCharacterToken.call(this,n,s),this.currentCharacterToken.location=e.ctLoc;},_createEOFToken(){t._createEOFToken.call(this),this.currentToken.location=e._getCurrentLocation();},_createAttr(n){t._createAttr.call(this,n),e.currentAttrLocation=e._getCurrentLocation();},_leaveAttrName(n){t._leaveAttrName.call(this,n),e._attachCurrentAttrLocationInfo();},_leaveAttrValue(n){t._leaveAttrValue.call(this,n),e._attachCurrentAttrLocationInfo();},_emitCurrentToken(){const n=this.currentToken.location;this.currentCharacterToken&&(this.currentCharacterToken.location.endLine=n.startLine,this.currentCharacterToken.location.endCol=n.startCol,this.currentCharacterToken.location.endOffset=n.startOffset),this.currentToken.type===et.EOF_TOKEN?(n.endLine=n.startLine,n.endCol=n.startCol,n.endOffset=n.startOffset):(n.endLine=e.posTracker.line,n.endCol=e.posTracker.col+1,n.endOffset=e.posTracker.offset+1),t._emitCurrentToken.call(this);},_emitCurrentCharacterToken(){const n=this.currentCharacterToken&&this.currentCharacterToken.location;n&&-1===n.endOffset&&(n.endLine=e.posTracker.line,n.endCol=e.posTracker.col,n.endOffset=e.posTracker.offset),t._emitCurrentCharacterToken.call(this);}};return Object.keys(et.MODE).forEach(s=>{const r=et.MODE[s];n[r]=function(n){e.ctLoc=e._getCurrentLocation(),t[r].call(this,n);};}),n}};var ut=class extends mt{constructor(e,t){super(e),this.onItemPop=t.onItemPop;}_getOverriddenMethods(e,t){return {pop(){e.onItemPop(this.current),t.pop.call(this);},popAllUpToHtmlElement(){for(let t=this.stackTop;t>0;t--)e.onItemPop(this.items[t]);t.popAllUpToHtmlElement.call(this);},remove(n){e.onItemPop(this.current),t.remove.call(this,n);}}}};const At=nt.TAG_NAMES;var dt=class extends mt{constructor(e){super(e),this.parser=e,this.treeAdapter=this.parser.treeAdapter,this.posTracker=null,this.lastStartTagToken=null,this.lastFosterParentingLocation=null,this.currentToken=null;}_setStartLocation(e){let t=null;this.lastStartTagToken&&((t=Object.assign({},this.lastStartTagToken.location)).startTag=this.lastStartTagToken.location),this.treeAdapter.setNodeSourceCodeLocation(e,t);}_setEndLocation(e,t){const n=this.treeAdapter.getNodeSourceCodeLocation(e);if(n&&t.location){const s=t.location,r=this.treeAdapter.getTagName(e);t.type===et.END_TAG_TOKEN&&r===t.tagName?(n.endTag=Object.assign({},s),n.endLine=s.endLine,n.endCol=s.endCol,n.endOffset=s.endOffset):(n.endLine=s.startLine,n.endCol=s.startCol,n.endOffset=s.startOffset);}}_getOverriddenMethods(e,t){return {_bootstrap(n,s){t._bootstrap.call(this,n,s),e.lastStartTagToken=null,e.lastFosterParentingLocation=null,e.currentToken=null;const r=mt.install(this.tokenizer,pt);e.posTracker=r.posTracker,mt.install(this.openElements,ut,{onItemPop:function(t){e._setEndLocation(t,e.currentToken);}});},_runParsingLoop(n){t._runParsingLoop.call(this,n);for(let t=this.openElements.stackTop;t>=0;t--)e._setEndLocation(this.openElements.items[t],e.currentToken);},_processTokenInForeignContent(n){e.currentToken=n,t._processTokenInForeignContent.call(this,n);},_processToken(n){if(e.currentToken=n,t._processToken.call(this,n),n.type===et.END_TAG_TOKEN&&(n.tagName===At.HTML||n.tagName===At.BODY&&this.openElements.hasInScope(At.BODY)))for(let t=this.openElements.stackTop;t>=0;t--){const s=this.openElements.items[t];if(this.treeAdapter.getTagName(s)===n.tagName){e._setEndLocation(s,n);break}}},_setDocumentType(e){t._setDocumentType.call(this,e);const n=this.treeAdapter.getChildNodes(this.document),s=n.length;for(let t=0;t<s;t++){const s=n[t];if(this.treeAdapter.isDocumentTypeNode(s)){this.treeAdapter.setNodeSourceCodeLocation(s,e.location);break}}},_attachElementToTree(n){e._setStartLocation(n),e.lastStartTagToken=null,t._attachElementToTree.call(this,n);},_appendElement(n,s){e.lastStartTagToken=n,t._appendElement.call(this,n,s);},_insertElement(n,s){e.lastStartTagToken=n,t._insertElement.call(this,n,s);},_insertTemplate(n){e.lastStartTagToken=n,t._insertTemplate.call(this,n);const s=this.treeAdapter.getTemplateContent(this.openElements.current);this.treeAdapter.setNodeSourceCodeLocation(s,null);},_insertFakeRootElement(){t._insertFakeRootElement.call(this),this.treeAdapter.setNodeSourceCodeLocation(this.openElements.current,null);},_appendCommentNode(e,n){t._appendCommentNode.call(this,e,n);const s=this.treeAdapter.getChildNodes(n),r=s[s.length-1];this.treeAdapter.setNodeSourceCodeLocation(r,e.location);},_findFosterParentingLocation(){return e.lastFosterParentingLocation=t._findFosterParentingLocation.call(this),e.lastFosterParentingLocation},_insertCharacters(n){t._insertCharacters.call(this,n);const s=this._shouldFosterParentOnInsertion(),r=s&&e.lastFosterParentingLocation.parent||this.openElements.currentTmplContent||this.openElements.current,i=this.treeAdapter.getChildNodes(r),o=s&&e.lastFosterParentingLocation.beforeElement?i.indexOf(e.lastFosterParentingLocation.beforeElement)-1:i.length-1,a=i[o],T=this.treeAdapter.getNodeSourceCodeLocation(a);T?(T.endLine=n.location.endLine,T.endCol=n.location.endCol,T.endOffset=n.location.endOffset):this.treeAdapter.setNodeSourceCodeLocation(a,n.location);}}}};var Nt=class extends mt{constructor(e,t){super(e),this.posTracker=null,this.onParseError=t.onParseError;}_setErrorLocation(e){e.startLine=e.endLine=this.posTracker.line,e.startCol=e.endCol=this.posTracker.col,e.startOffset=e.endOffset=this.posTracker.offset;}_reportError(e){const t={code:e,startLine:-1,startCol:-1,startOffset:-1,endLine:-1,endCol:-1,endOffset:-1};this._setErrorLocation(t),this.onParseError(t);}_getOverriddenMethods(e){return {_err(t){e._reportError(t);}}}};var Ct=class extends Nt{constructor(e,t){super(e,t),this.posTracker=mt.install(e,_t),this.lastErrOffset=-1;}_reportError(e){this.lastErrOffset!==this.posTracker.offset&&(this.lastErrOffset=this.posTracker.offset,super._reportError(e));}};var ft=class extends Nt{constructor(e,t){super(e,t);const n=mt.install(e.preprocessor,Ct,t);this.posTracker=n.posTracker;}};var Ot=class extends Nt{constructor(e,t){super(e,t),this.opts=t,this.ctLoc=null,this.locBeforeToken=!1;}_setErrorLocation(e){this.ctLoc&&(e.startLine=this.ctLoc.startLine,e.startCol=this.ctLoc.startCol,e.startOffset=this.ctLoc.startOffset,e.endLine=this.locBeforeToken?this.ctLoc.startLine:this.ctLoc.endLine,e.endCol=this.locBeforeToken?this.ctLoc.startCol:this.ctLoc.endCol,e.endOffset=this.locBeforeToken?this.ctLoc.startOffset:this.ctLoc.endOffset);}_getOverriddenMethods(e,t){return {_bootstrap(n,s){t._bootstrap.call(this,n,s),mt.install(this.tokenizer,ft,e.opts),mt.install(this.tokenizer,pt);},_processInputToken(n){e.ctLoc=n.location,t._processInputToken.call(this,n);},_err(t,n){e.locBeforeToken=n&&n.beforeToken,e._reportError(t);}}}},St=tt((function(e,t){const{DOCUMENT_MODE:n}=nt;t.createDocument=function(){return {nodeName:"#document",mode:n.NO_QUIRKS,childNodes:[]}},t.createDocumentFragment=function(){return {nodeName:"#document-fragment",childNodes:[]}},t.createElement=function(e,t,n){return {nodeName:e,tagName:e,attrs:n,namespaceURI:t,childNodes:[],parentNode:null}},t.createCommentNode=function(e){return {nodeName:"#comment",data:e,parentNode:null}};const s=function(e){return {nodeName:"#text",value:e,parentNode:null}},r=t.appendChild=function(e,t){e.childNodes.push(t),t.parentNode=e;},i=t.insertBefore=function(e,t,n){const s=e.childNodes.indexOf(n);e.childNodes.splice(s,0,t),t.parentNode=e;};t.setTemplateContent=function(e,t){e.content=t;},t.getTemplateContent=function(e){return e.content},t.setDocumentType=function(e,t,n,s){let i=null;for(let t=0;t<e.childNodes.length;t++)if("#documentType"===e.childNodes[t].nodeName){i=e.childNodes[t];break}i?(i.name=t,i.publicId=n,i.systemId=s):r(e,{nodeName:"#documentType",name:t,publicId:n,systemId:s});},t.setDocumentMode=function(e,t){e.mode=t;},t.getDocumentMode=function(e){return e.mode},t.detachNode=function(e){if(e.parentNode){const t=e.parentNode.childNodes.indexOf(e);e.parentNode.childNodes.splice(t,1),e.parentNode=null;}},t.insertText=function(e,t){if(e.childNodes.length){const n=e.childNodes[e.childNodes.length-1];if("#text"===n.nodeName)return void(n.value+=t)}r(e,s(t));},t.insertTextBefore=function(e,t,n){const r=e.childNodes[e.childNodes.indexOf(n)-1];r&&"#text"===r.nodeName?r.value+=t:i(e,s(t),n);},t.adoptAttributes=function(e,t){const n=[];for(let t=0;t<e.attrs.length;t++)n.push(e.attrs[t].name);for(let s=0;s<t.length;s++)-1===n.indexOf(t[s].name)&&e.attrs.push(t[s]);},t.getFirstChild=function(e){return e.childNodes[0]},t.getChildNodes=function(e){return e.childNodes},t.getParentNode=function(e){return e.parentNode},t.getAttrList=function(e){return e.attrs},t.getTagName=function(e){return e.tagName},t.getNamespaceURI=function(e){return e.namespaceURI},t.getTextNodeContent=function(e){return e.value},t.getCommentNodeContent=function(e){return e.data},t.getDocumentTypeNodeName=function(e){return e.name},t.getDocumentTypeNodePublicId=function(e){return e.publicId},t.getDocumentTypeNodeSystemId=function(e){return e.systemId},t.isTextNode=function(e){return "#text"===e.nodeName},t.isCommentNode=function(e){return "#comment"===e.nodeName},t.isDocumentTypeNode=function(e){return "#documentType"===e.nodeName},t.isElementNode=function(e){return !!e.tagName},t.setNodeSourceCodeLocation=function(e,t){e.sourceCodeLocation=t;},t.getNodeSourceCodeLocation=function(e){return e.sourceCodeLocation};})),Rt=(St.createDocument,St.createDocumentFragment,St.createElement,St.createCommentNode,St.appendChild,St.insertBefore,St.setTemplateContent,St.getTemplateContent,St.setDocumentType,St.setDocumentMode,St.getDocumentMode,St.detachNode,St.insertText,St.insertTextBefore,St.adoptAttributes,St.getFirstChild,St.getChildNodes,St.getParentNode,St.getAttrList,St.getTagName,St.getNamespaceURI,St.getTextNodeContent,St.getCommentNodeContent,St.getDocumentTypeNodeName,St.getDocumentTypeNodePublicId,St.getDocumentTypeNodeSystemId,St.isTextNode,St.isCommentNode,St.isDocumentTypeNode,St.isElementNode,St.setNodeSourceCodeLocation,St.getNodeSourceCodeLocation,function(e,t){return [e,t=t||Object.create(null)].reduce((e,t)=>(Object.keys(t).forEach(n=>{e[n]=t[n];}),e),Object.create(null))});const{DOCUMENT_MODE:It}=nt,gt=["+//silmaril//dtd html pro v0r11 19970101//en","-//advasoft ltd//dtd html 3.0 aswedit + extensions//en","-//as//dtd html 3.0 aswedit + extensions//en","-//ietf//dtd html 2.0 level 1//en","-//ietf//dtd html 2.0 level 2//en","-//ietf//dtd html 2.0 strict level 1//en","-//ietf//dtd html 2.0 strict level 2//en","-//ietf//dtd html 2.0 strict//en","-//ietf//dtd html 2.0//en","-//ietf//dtd html 2.1e//en","-//ietf//dtd html 3.0//en","-//ietf//dtd html 3.0//en//","-//ietf//dtd html 3.2 final//en","-//ietf//dtd html 3.2//en","-//ietf//dtd html 3//en","-//ietf//dtd html level 0//en","-//ietf//dtd html level 0//en//2.0","-//ietf//dtd html level 1//en","-//ietf//dtd html level 1//en//2.0","-//ietf//dtd html level 2//en","-//ietf//dtd html level 2//en//2.0","-//ietf//dtd html level 3//en","-//ietf//dtd html level 3//en//3.0","-//ietf//dtd html strict level 0//en","-//ietf//dtd html strict level 0//en//2.0","-//ietf//dtd html strict level 1//en","-//ietf//dtd html strict level 1//en//2.0","-//ietf//dtd html strict level 2//en","-//ietf//dtd html strict level 2//en//2.0","-//ietf//dtd html strict level 3//en","-//ietf//dtd html strict level 3//en//3.0","-//ietf//dtd html strict//en","-//ietf//dtd html strict//en//2.0","-//ietf//dtd html strict//en//3.0","-//ietf//dtd html//en","-//ietf//dtd html//en//2.0","-//ietf//dtd html//en//3.0","-//metrius//dtd metrius presentational//en","-//microsoft//dtd internet explorer 2.0 html strict//en","-//microsoft//dtd internet explorer 2.0 html//en","-//microsoft//dtd internet explorer 2.0 tables//en","-//microsoft//dtd internet explorer 3.0 html strict//en","-//microsoft//dtd internet explorer 3.0 html//en","-//microsoft//dtd internet explorer 3.0 tables//en","-//netscape comm. corp.//dtd html//en","-//netscape comm. corp.//dtd strict html//en","-//o'reilly and associates//dtd html 2.0//en","-//o'reilly and associates//dtd html extended 1.0//en","-//spyglass//dtd html 2.0 extended//en","-//sq//dtd html 2.0 hotmetal + extensions//en","-//sun microsystems corp.//dtd hotjava html//en","-//sun microsystems corp.//dtd hotjava strict html//en","-//w3c//dtd html 3 1995-03-24//en","-//w3c//dtd html 3.2 draft//en","-//w3c//dtd html 3.2 final//en","-//w3c//dtd html 3.2//en","-//w3c//dtd html 3.2s draft//en","-//w3c//dtd html 4.0 frameset//en","-//w3c//dtd html 4.0 transitional//en","-//w3c//dtd html experimental 19960712//en","-//w3c//dtd html experimental 970421//en","-//w3c//dtd w3 html//en","-//w3o//dtd w3 html 3.0//en","-//w3o//dtd w3 html 3.0//en//","-//webtechs//dtd mozilla html 2.0//en","-//webtechs//dtd mozilla html//en"],Lt=gt.concat(["-//w3c//dtd html 4.01 frameset//","-//w3c//dtd html 4.01 transitional//"]),Mt=["-//w3o//dtd w3 html strict 3.0//en//","-/w3c/dtd html 4.0 transitional/en","html"],kt=["-//W3C//DTD XHTML 1.0 Frameset//","-//W3C//DTD XHTML 1.0 Transitional//"],Pt=kt.concat(["-//W3C//DTD HTML 4.01 Frameset//","-//W3C//DTD HTML 4.01 Transitional//"]);function Dt(e){const t=-1!==e.indexOf('"')?"'":'"';return t+e+t}function Ht(e,t){for(let n=0;n<t.length;n++)if(0===e.indexOf(t[n]))return !0;return !1}var Ft={isConforming:function(e){return "html"===e.name&&null===e.publicId&&(null===e.systemId||"about:legacy-compat"===e.systemId)},getDocumentMode:function(e){if("html"!==e.name)return It.QUIRKS;const t=e.systemId;if(t&&"http://www.ibm.com/data/dtd/v11/ibmxhtml1-transitional.dtd"===t.toLowerCase())return It.QUIRKS;let n=e.publicId;if(null!==n){if(n=n.toLowerCase(),Mt.indexOf(n)>-1)return It.QUIRKS;let e=null===t?Lt:gt;if(Ht(n,e))return It.QUIRKS;if(Ht(n,e=null===t?kt:Pt))return It.LIMITED_QUIRKS}return It.NO_QUIRKS},serializeContent:function(e,t,n){let s="!DOCTYPE ";return e&&(s+=e),t?s+=" PUBLIC "+Dt(t):n&&(s+=" SYSTEM"),null!==n&&(s+=" "+Dt(n)),s}},Ut=tt((function(e,t){const n=nt.TAG_NAMES,s=nt.NAMESPACES,r=nt.ATTRS,i={TEXT_HTML:"text/html",APPLICATION_XML:"application/xhtml+xml"},o={attributename:"attributeName",attributetype:"attributeType",basefrequency:"baseFrequency",baseprofile:"baseProfile",calcmode:"calcMode",clippathunits:"clipPathUnits",diffuseconstant:"diffuseConstant",edgemode:"edgeMode",filterunits:"filterUnits",glyphref:"glyphRef",gradienttransform:"gradientTransform",gradientunits:"gradientUnits",kernelmatrix:"kernelMatrix",kernelunitlength:"kernelUnitLength",keypoints:"keyPoints",keysplines:"keySplines",keytimes:"keyTimes",lengthadjust:"lengthAdjust",limitingconeangle:"limitingConeAngle",markerheight:"markerHeight",markerunits:"markerUnits",markerwidth:"markerWidth",maskcontentunits:"maskContentUnits",maskunits:"maskUnits",numoctaves:"numOctaves",pathlength:"pathLength",patterncontentunits:"patternContentUnits",patterntransform:"patternTransform",patternunits:"patternUnits",pointsatx:"pointsAtX",pointsaty:"pointsAtY",pointsatz:"pointsAtZ",preservealpha:"preserveAlpha",preserveaspectratio:"preserveAspectRatio",primitiveunits:"primitiveUnits",refx:"refX",refy:"refY",repeatcount:"repeatCount",repeatdur:"repeatDur",requiredextensions:"requiredExtensions",requiredfeatures:"requiredFeatures",specularconstant:"specularConstant",specularexponent:"specularExponent",spreadmethod:"spreadMethod",startoffset:"startOffset",stddeviation:"stdDeviation",stitchtiles:"stitchTiles",surfacescale:"surfaceScale",systemlanguage:"systemLanguage",tablevalues:"tableValues",targetx:"targetX",targety:"targetY",textlength:"textLength",viewbox:"viewBox",viewtarget:"viewTarget",xchannelselector:"xChannelSelector",ychannelselector:"yChannelSelector",zoomandpan:"zoomAndPan"},a={"xlink:actuate":{prefix:"xlink",name:"actuate",namespace:s.XLINK},"xlink:arcrole":{prefix:"xlink",name:"arcrole",namespace:s.XLINK},"xlink:href":{prefix:"xlink",name:"href",namespace:s.XLINK},"xlink:role":{prefix:"xlink",name:"role",namespace:s.XLINK},"xlink:show":{prefix:"xlink",name:"show",namespace:s.XLINK},"xlink:title":{prefix:"xlink",name:"title",namespace:s.XLINK},"xlink:type":{prefix:"xlink",name:"type",namespace:s.XLINK},"xml:base":{prefix:"xml",name:"base",namespace:s.XML},"xml:lang":{prefix:"xml",name:"lang",namespace:s.XML},"xml:space":{prefix:"xml",name:"space",namespace:s.XML},xmlns:{prefix:"",name:"xmlns",namespace:s.XMLNS},"xmlns:xlink":{prefix:"xmlns",name:"xlink",namespace:s.XMLNS}},T=t.SVG_TAG_NAMES_ADJUSTMENT_MAP={altglyph:"altGlyph",altglyphdef:"altGlyphDef",altglyphitem:"altGlyphItem",animatecolor:"animateColor",animatemotion:"animateMotion",animatetransform:"animateTransform",clippath:"clipPath",feblend:"feBlend",fecolormatrix:"feColorMatrix",fecomponenttransfer:"feComponentTransfer",fecomposite:"feComposite",feconvolvematrix:"feConvolveMatrix",fediffuselighting:"feDiffuseLighting",fedisplacementmap:"feDisplacementMap",fedistantlight:"feDistantLight",feflood:"feFlood",fefunca:"feFuncA",fefuncb:"feFuncB",fefuncg:"feFuncG",fefuncr:"feFuncR",fegaussianblur:"feGaussianBlur",feimage:"feImage",femerge:"feMerge",femergenode:"feMergeNode",femorphology:"feMorphology",feoffset:"feOffset",fepointlight:"fePointLight",fespecularlighting:"feSpecularLighting",fespotlight:"feSpotLight",fetile:"feTile",feturbulence:"feTurbulence",foreignobject:"foreignObject",glyphref:"glyphRef",lineargradient:"linearGradient",radialgradient:"radialGradient",textpath:"textPath"},E={[n.B]:!0,[n.BIG]:!0,[n.BLOCKQUOTE]:!0,[n.BODY]:!0,[n.BR]:!0,[n.CENTER]:!0,[n.CODE]:!0,[n.DD]:!0,[n.DIV]:!0,[n.DL]:!0,[n.DT]:!0,[n.EM]:!0,[n.EMBED]:!0,[n.H1]:!0,[n.H2]:!0,[n.H3]:!0,[n.H4]:!0,[n.H5]:!0,[n.H6]:!0,[n.HEAD]:!0,[n.HR]:!0,[n.I]:!0,[n.IMG]:!0,[n.LI]:!0,[n.LISTING]:!0,[n.MENU]:!0,[n.META]:!0,[n.NOBR]:!0,[n.OL]:!0,[n.P]:!0,[n.PRE]:!0,[n.RUBY]:!0,[n.S]:!0,[n.SMALL]:!0,[n.SPAN]:!0,[n.STRONG]:!0,[n.STRIKE]:!0,[n.SUB]:!0,[n.SUP]:!0,[n.TABLE]:!0,[n.TT]:!0,[n.U]:!0,[n.UL]:!0,[n.VAR]:!0};t.causesExit=function(e){const t=e.tagName;return !!(t===n.FONT&&(null!==et.getTokenAttr(e,r.COLOR)||null!==et.getTokenAttr(e,r.SIZE)||null!==et.getTokenAttr(e,r.FACE)))||E[t]},t.adjustTokenMathMLAttrs=function(e){for(let t=0;t<e.attrs.length;t++)if("definitionurl"===e.attrs[t].name){e.attrs[t].name="definitionURL";break}},t.adjustTokenSVGAttrs=function(e){for(let t=0;t<e.attrs.length;t++){const n=o[e.attrs[t].name];n&&(e.attrs[t].name=n);}},t.adjustTokenXMLAttrs=function(e){for(let t=0;t<e.attrs.length;t++){const n=a[e.attrs[t].name];n&&(e.attrs[t].prefix=n.prefix,e.attrs[t].name=n.name,e.attrs[t].namespace=n.namespace);}},t.adjustTokenSVGTagName=function(e){const t=T[e.tagName];t&&(e.tagName=t);},t.isIntegrationPoint=function(e,t,o,a){return !(a&&a!==s.HTML||!function(e,t,o){if(t===s.MATHML&&e===n.ANNOTATION_XML)for(let e=0;e<o.length;e++)if(o[e].name===r.ENCODING){const t=o[e].value.toLowerCase();return t===i.TEXT_HTML||t===i.APPLICATION_XML}return t===s.SVG&&(e===n.FOREIGN_OBJECT||e===n.DESC||e===n.TITLE)}(e,t,o))||!(a&&a!==s.MATHML||!function(e,t){return t===s.MATHML&&(e===n.MI||e===n.MO||e===n.MN||e===n.MS||e===n.MTEXT)}(e,t))};}));Ut.SVG_TAG_NAMES_ADJUSTMENT_MAP,Ut.causesExit,Ut.adjustTokenMathMLAttrs,Ut.adjustTokenSVGAttrs,Ut.adjustTokenXMLAttrs,Ut.adjustTokenSVGTagName,Ut.isIntegrationPoint;const Gt=nt.TAG_NAMES,Bt=nt.NAMESPACES,Kt=nt.ATTRS,bt={scriptingEnabled:!0,sourceCodeLocationInfo:!1,onParseError:null,treeAdapter:St},yt="hidden",xt=8,vt=3,Yt="INITIAL_MODE",wt="BEFORE_HTML_MODE",Qt="BEFORE_HEAD_MODE",Wt="IN_HEAD_MODE",Xt="IN_HEAD_NO_SCRIPT_MODE",Vt="AFTER_HEAD_MODE",jt="IN_BODY_MODE",zt="TEXT_MODE",qt="IN_TABLE_MODE",Jt="IN_TABLE_TEXT_MODE",Zt="IN_CAPTION_MODE",$t="IN_COLUMN_GROUP_MODE",en="IN_TABLE_BODY_MODE",tn="IN_ROW_MODE",nn="IN_CELL_MODE",sn="IN_SELECT_MODE",rn="IN_SELECT_IN_TABLE_MODE",on="IN_TEMPLATE_MODE",an="AFTER_BODY_MODE",Tn="IN_FRAMESET_MODE",En="AFTER_FRAMESET_MODE",cn="AFTER_AFTER_BODY_MODE",hn="AFTER_AFTER_FRAMESET_MODE",ln={[Gt.TR]:tn,[Gt.TBODY]:en,[Gt.THEAD]:en,[Gt.TFOOT]:en,[Gt.CAPTION]:Zt,[Gt.COLGROUP]:$t,[Gt.TABLE]:qt,[Gt.BODY]:jt,[Gt.FRAMESET]:Tn},mn={[Gt.CAPTION]:qt,[Gt.COLGROUP]:qt,[Gt.TBODY]:qt,[Gt.TFOOT]:qt,[Gt.THEAD]:qt,[Gt.COL]:$t,[Gt.TR]:en,[Gt.TD]:tn,[Gt.TH]:tn},_n={[Yt]:{[et.CHARACTER_TOKEN]:kn,[et.NULL_CHARACTER_TOKEN]:kn,[et.WHITESPACE_CHARACTER_TOKEN]:Sn,[et.COMMENT_TOKEN]:In,[et.DOCTYPE_TOKEN]:function(e,t){e._setDocumentType(t);const n=t.forceQuirks?nt.DOCUMENT_MODE.QUIRKS:Ft.getDocumentMode(t);Ft.isConforming(t)||e._err(s.nonConformingDoctype);e.treeAdapter.setDocumentMode(e.document,n),e.insertionMode=wt;},[et.START_TAG_TOKEN]:kn,[et.END_TAG_TOKEN]:kn,[et.EOF_TOKEN]:kn},[wt]:{[et.CHARACTER_TOKEN]:Pn,[et.NULL_CHARACTER_TOKEN]:Pn,[et.WHITESPACE_CHARACTER_TOKEN]:Sn,[et.COMMENT_TOKEN]:In,[et.DOCTYPE_TOKEN]:Sn,[et.START_TAG_TOKEN]:function(e,t){t.tagName===Gt.HTML?(e._insertElement(t,Bt.HTML),e.insertionMode=Qt):Pn(e,t);},[et.END_TAG_TOKEN]:function(e,t){const n=t.tagName;n!==Gt.HTML&&n!==Gt.HEAD&&n!==Gt.BODY&&n!==Gt.BR||Pn(e,t);},[et.EOF_TOKEN]:Pn},[Qt]:{[et.CHARACTER_TOKEN]:Dn,[et.NULL_CHARACTER_TOKEN]:Dn,[et.WHITESPACE_CHARACTER_TOKEN]:Sn,[et.COMMENT_TOKEN]:In,[et.DOCTYPE_TOKEN]:Rn,[et.START_TAG_TOKEN]:function(e,t){const n=t.tagName;n===Gt.HTML?zn(e,t):n===Gt.HEAD?(e._insertElement(t,Bt.HTML),e.headElement=e.openElements.current,e.insertionMode=Wt):Dn(e,t);},[et.END_TAG_TOKEN]:function(e,t){const n=t.tagName;n===Gt.HEAD||n===Gt.BODY||n===Gt.HTML||n===Gt.BR?Dn(e,t):e._err(s.endTagWithoutMatchingOpenElement);},[et.EOF_TOKEN]:Dn},[Wt]:{[et.CHARACTER_TOKEN]:Un,[et.NULL_CHARACTER_TOKEN]:Un,[et.WHITESPACE_CHARACTER_TOKEN]:Ln,[et.COMMENT_TOKEN]:In,[et.DOCTYPE_TOKEN]:Rn,[et.START_TAG_TOKEN]:Hn,[et.END_TAG_TOKEN]:Fn,[et.EOF_TOKEN]:Un},[Xt]:{[et.CHARACTER_TOKEN]:Gn,[et.NULL_CHARACTER_TOKEN]:Gn,[et.WHITESPACE_CHARACTER_TOKEN]:Ln,[et.COMMENT_TOKEN]:In,[et.DOCTYPE_TOKEN]:Rn,[et.START_TAG_TOKEN]:function(e,t){const n=t.tagName;n===Gt.HTML?zn(e,t):n===Gt.BASEFONT||n===Gt.BGSOUND||n===Gt.HEAD||n===Gt.LINK||n===Gt.META||n===Gt.NOFRAMES||n===Gt.STYLE?Hn(e,t):n===Gt.NOSCRIPT?e._err(s.nestedNoscriptInHead):Gn(e,t);},[et.END_TAG_TOKEN]:function(e,t){const n=t.tagName;n===Gt.NOSCRIPT?(e.openElements.pop(),e.insertionMode=Wt):n===Gt.BR?Gn(e,t):e._err(s.endTagWithoutMatchingOpenElement);},[et.EOF_TOKEN]:Gn},[Vt]:{[et.CHARACTER_TOKEN]:Bn,[et.NULL_CHARACTER_TOKEN]:Bn,[et.WHITESPACE_CHARACTER_TOKEN]:Ln,[et.COMMENT_TOKEN]:In,[et.DOCTYPE_TOKEN]:Rn,[et.START_TAG_TOKEN]:function(e,t){const n=t.tagName;n===Gt.HTML?zn(e,t):n===Gt.BODY?(e._insertElement(t,Bt.HTML),e.framesetOk=!1,e.insertionMode=jt):n===Gt.FRAMESET?(e._insertElement(t,Bt.HTML),e.insertionMode=Tn):n===Gt.BASE||n===Gt.BASEFONT||n===Gt.BGSOUND||n===Gt.LINK||n===Gt.META||n===Gt.NOFRAMES||n===Gt.SCRIPT||n===Gt.STYLE||n===Gt.TEMPLATE||n===Gt.TITLE?(e._err(s.abandonedHeadElementChild),e.openElements.push(e.headElement),Hn(e,t),e.openElements.remove(e.headElement)):n===Gt.HEAD?e._err(s.misplacedStartTagForHeadElement):Bn(e,t);},[et.END_TAG_TOKEN]:function(e,t){const n=t.tagName;n===Gt.BODY||n===Gt.HTML||n===Gt.BR?Bn(e,t):n===Gt.TEMPLATE?Fn(e,t):e._err(s.endTagWithoutMatchingOpenElement);},[et.EOF_TOKEN]:Bn},[jt]:{[et.CHARACTER_TOKEN]:bn,[et.NULL_CHARACTER_TOKEN]:Sn,[et.WHITESPACE_CHARACTER_TOKEN]:Kn,[et.COMMENT_TOKEN]:In,[et.DOCTYPE_TOKEN]:Sn,[et.START_TAG_TOKEN]:zn,[et.END_TAG_TOKEN]:$n,[et.EOF_TOKEN]:es},[zt]:{[et.CHARACTER_TOKEN]:Ln,[et.NULL_CHARACTER_TOKEN]:Ln,[et.WHITESPACE_CHARACTER_TOKEN]:Ln,[et.COMMENT_TOKEN]:Sn,[et.DOCTYPE_TOKEN]:Sn,[et.START_TAG_TOKEN]:Sn,[et.END_TAG_TOKEN]:function(e,t){t.tagName===Gt.SCRIPT&&(e.pendingScript=e.openElements.current);e.openElements.pop(),e.insertionMode=e.originalInsertionMode;},[et.EOF_TOKEN]:function(e,t){e._err(s.eofInElementThatCanContainOnlyText),e.openElements.pop(),e.insertionMode=e.originalInsertionMode,e._processToken(t);}},[qt]:{[et.CHARACTER_TOKEN]:ts,[et.NULL_CHARACTER_TOKEN]:ts,[et.WHITESPACE_CHARACTER_TOKEN]:ts,[et.COMMENT_TOKEN]:In,[et.DOCTYPE_TOKEN]:Sn,[et.START_TAG_TOKEN]:ns,[et.END_TAG_TOKEN]:ss,[et.EOF_TOKEN]:es},[Jt]:{[et.CHARACTER_TOKEN]:function(e,t){e.pendingCharacterTokens.push(t),e.hasNonWhitespacePendingCharacterToken=!0;},[et.NULL_CHARACTER_TOKEN]:Sn,[et.WHITESPACE_CHARACTER_TOKEN]:function(e,t){e.pendingCharacterTokens.push(t);},[et.COMMENT_TOKEN]:is,[et.DOCTYPE_TOKEN]:is,[et.START_TAG_TOKEN]:is,[et.END_TAG_TOKEN]:is,[et.EOF_TOKEN]:is},[Zt]:{[et.CHARACTER_TOKEN]:bn,[et.NULL_CHARACTER_TOKEN]:Sn,[et.WHITESPACE_CHARACTER_TOKEN]:Kn,[et.COMMENT_TOKEN]:In,[et.DOCTYPE_TOKEN]:Sn,[et.START_TAG_TOKEN]:function(e,t){const n=t.tagName;n===Gt.CAPTION||n===Gt.COL||n===Gt.COLGROUP||n===Gt.TBODY||n===Gt.TD||n===Gt.TFOOT||n===Gt.TH||n===Gt.THEAD||n===Gt.TR?e.openElements.hasInTableScope(Gt.CAPTION)&&(e.openElements.generateImpliedEndTags(),e.openElements.popUntilTagNamePopped(Gt.CAPTION),e.activeFormattingElements.clearToLastMarker(),e.insertionMode=qt,e._processToken(t)):zn(e,t);},[et.END_TAG_TOKEN]:function(e,t){const n=t.tagName;n===Gt.CAPTION||n===Gt.TABLE?e.openElements.hasInTableScope(Gt.CAPTION)&&(e.openElements.generateImpliedEndTags(),e.openElements.popUntilTagNamePopped(Gt.CAPTION),e.activeFormattingElements.clearToLastMarker(),e.insertionMode=qt,n===Gt.TABLE&&e._processToken(t)):n!==Gt.BODY&&n!==Gt.COL&&n!==Gt.COLGROUP&&n!==Gt.HTML&&n!==Gt.TBODY&&n!==Gt.TD&&n!==Gt.TFOOT&&n!==Gt.TH&&n!==Gt.THEAD&&n!==Gt.TR&&$n(e,t);},[et.EOF_TOKEN]:es},[$t]:{[et.CHARACTER_TOKEN]:os,[et.NULL_CHARACTER_TOKEN]:os,[et.WHITESPACE_CHARACTER_TOKEN]:Ln,[et.COMMENT_TOKEN]:In,[et.DOCTYPE_TOKEN]:Sn,[et.START_TAG_TOKEN]:function(e,t){const n=t.tagName;n===Gt.HTML?zn(e,t):n===Gt.COL?(e._appendElement(t,Bt.HTML),t.ackSelfClosing=!0):n===Gt.TEMPLATE?Hn(e,t):os(e,t);},[et.END_TAG_TOKEN]:function(e,t){const n=t.tagName;n===Gt.COLGROUP?e.openElements.currentTagName===Gt.COLGROUP&&(e.openElements.pop(),e.insertionMode=qt):n===Gt.TEMPLATE?Fn(e,t):n!==Gt.COL&&os(e,t);},[et.EOF_TOKEN]:es},[en]:{[et.CHARACTER_TOKEN]:ts,[et.NULL_CHARACTER_TOKEN]:ts,[et.WHITESPACE_CHARACTER_TOKEN]:ts,[et.COMMENT_TOKEN]:In,[et.DOCTYPE_TOKEN]:Sn,[et.START_TAG_TOKEN]:function(e,t){const n=t.tagName;n===Gt.TR?(e.openElements.clearBackToTableBodyContext(),e._insertElement(t,Bt.HTML),e.insertionMode=tn):n===Gt.TH||n===Gt.TD?(e.openElements.clearBackToTableBodyContext(),e._insertFakeElement(Gt.TR),e.insertionMode=tn,e._processToken(t)):n===Gt.CAPTION||n===Gt.COL||n===Gt.COLGROUP||n===Gt.TBODY||n===Gt.TFOOT||n===Gt.THEAD?e.openElements.hasTableBodyContextInTableScope()&&(e.openElements.clearBackToTableBodyContext(),e.openElements.pop(),e.insertionMode=qt,e._processToken(t)):ns(e,t);},[et.END_TAG_TOKEN]:function(e,t){const n=t.tagName;n===Gt.TBODY||n===Gt.TFOOT||n===Gt.THEAD?e.openElements.hasInTableScope(n)&&(e.openElements.clearBackToTableBodyContext(),e.openElements.pop(),e.insertionMode=qt):n===Gt.TABLE?e.openElements.hasTableBodyContextInTableScope()&&(e.openElements.clearBackToTableBodyContext(),e.openElements.pop(),e.insertionMode=qt,e._processToken(t)):(n!==Gt.BODY&&n!==Gt.CAPTION&&n!==Gt.COL&&n!==Gt.COLGROUP||n!==Gt.HTML&&n!==Gt.TD&&n!==Gt.TH&&n!==Gt.TR)&&ss(e,t);},[et.EOF_TOKEN]:es},[tn]:{[et.CHARACTER_TOKEN]:ts,[et.NULL_CHARACTER_TOKEN]:ts,[et.WHITESPACE_CHARACTER_TOKEN]:ts,[et.COMMENT_TOKEN]:In,[et.DOCTYPE_TOKEN]:Sn,[et.START_TAG_TOKEN]:function(e,t){const n=t.tagName;n===Gt.TH||n===Gt.TD?(e.openElements.clearBackToTableRowContext(),e._insertElement(t,Bt.HTML),e.insertionMode=nn,e.activeFormattingElements.insertMarker()):n===Gt.CAPTION||n===Gt.COL||n===Gt.COLGROUP||n===Gt.TBODY||n===Gt.TFOOT||n===Gt.THEAD||n===Gt.TR?e.openElements.hasInTableScope(Gt.TR)&&(e.openElements.clearBackToTableRowContext(),e.openElements.pop(),e.insertionMode=en,e._processToken(t)):ns(e,t);},[et.END_TAG_TOKEN]:function(e,t){const n=t.tagName;n===Gt.TR?e.openElements.hasInTableScope(Gt.TR)&&(e.openElements.clearBackToTableRowContext(),e.openElements.pop(),e.insertionMode=en):n===Gt.TABLE?e.openElements.hasInTableScope(Gt.TR)&&(e.openElements.clearBackToTableRowContext(),e.openElements.pop(),e.insertionMode=en,e._processToken(t)):n===Gt.TBODY||n===Gt.TFOOT||n===Gt.THEAD?(e.openElements.hasInTableScope(n)||e.openElements.hasInTableScope(Gt.TR))&&(e.openElements.clearBackToTableRowContext(),e.openElements.pop(),e.insertionMode=en,e._processToken(t)):(n!==Gt.BODY&&n!==Gt.CAPTION&&n!==Gt.COL&&n!==Gt.COLGROUP||n!==Gt.HTML&&n!==Gt.TD&&n!==Gt.TH)&&ss(e,t);},[et.EOF_TOKEN]:es},[nn]:{[et.CHARACTER_TOKEN]:bn,[et.NULL_CHARACTER_TOKEN]:Sn,[et.WHITESPACE_CHARACTER_TOKEN]:Kn,[et.COMMENT_TOKEN]:In,[et.DOCTYPE_TOKEN]:Sn,[et.START_TAG_TOKEN]:function(e,t){const n=t.tagName;n===Gt.CAPTION||n===Gt.COL||n===Gt.COLGROUP||n===Gt.TBODY||n===Gt.TD||n===Gt.TFOOT||n===Gt.TH||n===Gt.THEAD||n===Gt.TR?(e.openElements.hasInTableScope(Gt.TD)||e.openElements.hasInTableScope(Gt.TH))&&(e._closeTableCell(),e._processToken(t)):zn(e,t);},[et.END_TAG_TOKEN]:function(e,t){const n=t.tagName;n===Gt.TD||n===Gt.TH?e.openElements.hasInTableScope(n)&&(e.openElements.generateImpliedEndTags(),e.openElements.popUntilTagNamePopped(n),e.activeFormattingElements.clearToLastMarker(),e.insertionMode=tn):n===Gt.TABLE||n===Gt.TBODY||n===Gt.TFOOT||n===Gt.THEAD||n===Gt.TR?e.openElements.hasInTableScope(n)&&(e._closeTableCell(),e._processToken(t)):n!==Gt.BODY&&n!==Gt.CAPTION&&n!==Gt.COL&&n!==Gt.COLGROUP&&n!==Gt.HTML&&$n(e,t);},[et.EOF_TOKEN]:es},[sn]:{[et.CHARACTER_TOKEN]:Ln,[et.NULL_CHARACTER_TOKEN]:Sn,[et.WHITESPACE_CHARACTER_TOKEN]:Ln,[et.COMMENT_TOKEN]:In,[et.DOCTYPE_TOKEN]:Sn,[et.START_TAG_TOKEN]:as,[et.END_TAG_TOKEN]:Ts,[et.EOF_TOKEN]:es},[rn]:{[et.CHARACTER_TOKEN]:Ln,[et.NULL_CHARACTER_TOKEN]:Sn,[et.WHITESPACE_CHARACTER_TOKEN]:Ln,[et.COMMENT_TOKEN]:In,[et.DOCTYPE_TOKEN]:Sn,[et.START_TAG_TOKEN]:function(e,t){const n=t.tagName;n===Gt.CAPTION||n===Gt.TABLE||n===Gt.TBODY||n===Gt.TFOOT||n===Gt.THEAD||n===Gt.TR||n===Gt.TD||n===Gt.TH?(e.openElements.popUntilTagNamePopped(Gt.SELECT),e._resetInsertionMode(),e._processToken(t)):as(e,t);},[et.END_TAG_TOKEN]:function(e,t){const n=t.tagName;n===Gt.CAPTION||n===Gt.TABLE||n===Gt.TBODY||n===Gt.TFOOT||n===Gt.THEAD||n===Gt.TR||n===Gt.TD||n===Gt.TH?e.openElements.hasInTableScope(n)&&(e.openElements.popUntilTagNamePopped(Gt.SELECT),e._resetInsertionMode(),e._processToken(t)):Ts(e,t);},[et.EOF_TOKEN]:es},[on]:{[et.CHARACTER_TOKEN]:bn,[et.NULL_CHARACTER_TOKEN]:Sn,[et.WHITESPACE_CHARACTER_TOKEN]:Kn,[et.COMMENT_TOKEN]:In,[et.DOCTYPE_TOKEN]:Sn,[et.START_TAG_TOKEN]:function(e,t){const n=t.tagName;if(n===Gt.BASE||n===Gt.BASEFONT||n===Gt.BGSOUND||n===Gt.LINK||n===Gt.META||n===Gt.NOFRAMES||n===Gt.SCRIPT||n===Gt.STYLE||n===Gt.TEMPLATE||n===Gt.TITLE)Hn(e,t);else{const s=mn[n]||jt;e._popTmplInsertionMode(),e._pushTmplInsertionMode(s),e.insertionMode=s,e._processToken(t);}},[et.END_TAG_TOKEN]:function(e,t){t.tagName===Gt.TEMPLATE&&Fn(e,t);},[et.EOF_TOKEN]:Es},[an]:{[et.CHARACTER_TOKEN]:cs,[et.NULL_CHARACTER_TOKEN]:cs,[et.WHITESPACE_CHARACTER_TOKEN]:Kn,[et.COMMENT_TOKEN]:function(e,t){e._appendCommentNode(t,e.openElements.items[0]);},[et.DOCTYPE_TOKEN]:Sn,[et.START_TAG_TOKEN]:function(e,t){t.tagName===Gt.HTML?zn(e,t):cs(e,t);},[et.END_TAG_TOKEN]:function(e,t){t.tagName===Gt.HTML?e.fragmentContext||(e.insertionMode=cn):cs(e,t);},[et.EOF_TOKEN]:Mn},[Tn]:{[et.CHARACTER_TOKEN]:Sn,[et.NULL_CHARACTER_TOKEN]:Sn,[et.WHITESPACE_CHARACTER_TOKEN]:Ln,[et.COMMENT_TOKEN]:In,[et.DOCTYPE_TOKEN]:Sn,[et.START_TAG_TOKEN]:function(e,t){const n=t.tagName;n===Gt.HTML?zn(e,t):n===Gt.FRAMESET?e._insertElement(t,Bt.HTML):n===Gt.FRAME?(e._appendElement(t,Bt.HTML),t.ackSelfClosing=!0):n===Gt.NOFRAMES&&Hn(e,t);},[et.END_TAG_TOKEN]:function(e,t){t.tagName!==Gt.FRAMESET||e.openElements.isRootHtmlElementCurrent()||(e.openElements.pop(),e.fragmentContext||e.openElements.currentTagName===Gt.FRAMESET||(e.insertionMode=En));},[et.EOF_TOKEN]:Mn},[En]:{[et.CHARACTER_TOKEN]:Sn,[et.NULL_CHARACTER_TOKEN]:Sn,[et.WHITESPACE_CHARACTER_TOKEN]:Ln,[et.COMMENT_TOKEN]:In,[et.DOCTYPE_TOKEN]:Sn,[et.START_TAG_TOKEN]:function(e,t){const n=t.tagName;n===Gt.HTML?zn(e,t):n===Gt.NOFRAMES&&Hn(e,t);},[et.END_TAG_TOKEN]:function(e,t){t.tagName===Gt.HTML&&(e.insertionMode=hn);},[et.EOF_TOKEN]:Mn},[cn]:{[et.CHARACTER_TOKEN]:hs,[et.NULL_CHARACTER_TOKEN]:hs,[et.WHITESPACE_CHARACTER_TOKEN]:Kn,[et.COMMENT_TOKEN]:gn,[et.DOCTYPE_TOKEN]:Sn,[et.START_TAG_TOKEN]:function(e,t){t.tagName===Gt.HTML?zn(e,t):hs(e,t);},[et.END_TAG_TOKEN]:hs,[et.EOF_TOKEN]:Mn},[hn]:{[et.CHARACTER_TOKEN]:Sn,[et.NULL_CHARACTER_TOKEN]:Sn,[et.WHITESPACE_CHARACTER_TOKEN]:Kn,[et.COMMENT_TOKEN]:gn,[et.DOCTYPE_TOKEN]:Sn,[et.START_TAG_TOKEN]:function(e,t){const n=t.tagName;n===Gt.HTML?zn(e,t):n===Gt.NOFRAMES&&Hn(e,t);},[et.END_TAG_TOKEN]:Sn,[et.EOF_TOKEN]:Mn}};var pn=class{constructor(e){this.options=Rt(bt,e),this.treeAdapter=this.options.treeAdapter,this.pendingScript=null,this.options.sourceCodeLocationInfo&&mt.install(this,dt),this.options.onParseError&&mt.install(this,Ot,{onParseError:this.options.onParseError});}parse(e){const t=this.treeAdapter.createDocument();return this._bootstrap(t,null),this.tokenizer.write(e,!0),this._runParsingLoop(null),t}parseFragment(e,t){t||(t=this.treeAdapter.createElement(Gt.TEMPLATE,Bt.HTML,[]));const n=this.treeAdapter.createElement("documentmock",Bt.HTML,[]);this._bootstrap(n,t),this.treeAdapter.getTagName(t)===Gt.TEMPLATE&&this._pushTmplInsertionMode(on),this._initTokenizerForFragmentParsing(),this._insertFakeRootElement(),this._resetInsertionMode(),this._findFormInFragmentContext(),this.tokenizer.write(e,!0),this._runParsingLoop(null);const s=this.treeAdapter.getFirstChild(n),r=this.treeAdapter.createDocumentFragment();return this._adoptNodes(s,r),r}_bootstrap(e,t){this.tokenizer=new et(this.options),this.stopped=!1,this.insertionMode=Yt,this.originalInsertionMode="",this.document=e,this.fragmentContext=t,this.headElement=null,this.formElement=null,this.openElements=new Tt(this.document,this.treeAdapter),this.activeFormattingElements=new ht(this.treeAdapter),this.tmplInsertionModeStack=[],this.tmplInsertionModeStackTop=-1,this.currentTmplInsertionMode=null,this.pendingCharacterTokens=[],this.hasNonWhitespacePendingCharacterToken=!1,this.framesetOk=!0,this.skipNextNewLine=!1,this.fosterParentingEnabled=!1;}_err(){}_runParsingLoop(e){for(;!this.stopped;){this._setupTokenizerCDATAMode();const t=this.tokenizer.getNextToken();if(t.type===et.HIBERNATION_TOKEN)break;if(this.skipNextNewLine&&(this.skipNextNewLine=!1,t.type===et.WHITESPACE_CHARACTER_TOKEN&&"\n"===t.chars[0])){if(1===t.chars.length)continue;t.chars=t.chars.substr(1);}if(this._processInputToken(t),e&&this.pendingScript)break}}runParsingLoopForCurrentChunk(e,t){if(this._runParsingLoop(t),t&&this.pendingScript){const e=this.pendingScript;return this.pendingScript=null,void t(e)}e&&e();}_setupTokenizerCDATAMode(){const e=this._getAdjustedCurrentElement();this.tokenizer.allowCDATA=e&&e!==this.document&&this.treeAdapter.getNamespaceURI(e)!==Bt.HTML&&!this._isIntegrationPoint(e);}_switchToTextParsing(e,t){this._insertElement(e,Bt.HTML),this.tokenizer.state=t,this.originalInsertionMode=this.insertionMode,this.insertionMode=zt;}switchToPlaintextParsing(){this.insertionMode=zt,this.originalInsertionMode=jt,this.tokenizer.state=et.MODE.PLAINTEXT;}_getAdjustedCurrentElement(){return 0===this.openElements.stackTop&&this.fragmentContext?this.fragmentContext:this.openElements.current}_findFormInFragmentContext(){let e=this.fragmentContext;do{if(this.treeAdapter.getTagName(e)===Gt.FORM){this.formElement=e;break}e=this.treeAdapter.getParentNode(e);}while(e)}_initTokenizerForFragmentParsing(){if(this.treeAdapter.getNamespaceURI(this.fragmentContext)===Bt.HTML){const e=this.treeAdapter.getTagName(this.fragmentContext);e===Gt.TITLE||e===Gt.TEXTAREA?this.tokenizer.state=et.MODE.RCDATA:e===Gt.STYLE||e===Gt.XMP||e===Gt.IFRAME||e===Gt.NOEMBED||e===Gt.NOFRAMES||e===Gt.NOSCRIPT?this.tokenizer.state=et.MODE.RAWTEXT:e===Gt.SCRIPT?this.tokenizer.state=et.MODE.SCRIPT_DATA:e===Gt.PLAINTEXT&&(this.tokenizer.state=et.MODE.PLAINTEXT);}}_setDocumentType(e){const t=e.name||"",n=e.publicId||"",s=e.systemId||"";this.treeAdapter.setDocumentType(this.document,t,n,s);}_attachElementToTree(e){if(this._shouldFosterParentOnInsertion())this._fosterParentElement(e);else{const t=this.openElements.currentTmplContent||this.openElements.current;this.treeAdapter.appendChild(t,e);}}_appendElement(e,t){const n=this.treeAdapter.createElement(e.tagName,t,e.attrs);this._attachElementToTree(n);}_insertElement(e,t){const n=this.treeAdapter.createElement(e.tagName,t,e.attrs);this._attachElementToTree(n),this.openElements.push(n);}_insertFakeElement(e){const t=this.treeAdapter.createElement(e,Bt.HTML,[]);this._attachElementToTree(t),this.openElements.push(t);}_insertTemplate(e){const t=this.treeAdapter.createElement(e.tagName,Bt.HTML,e.attrs),n=this.treeAdapter.createDocumentFragment();this.treeAdapter.setTemplateContent(t,n),this._attachElementToTree(t),this.openElements.push(t);}_insertFakeRootElement(){const e=this.treeAdapter.createElement(Gt.HTML,Bt.HTML,[]);this.treeAdapter.appendChild(this.openElements.current,e),this.openElements.push(e);}_appendCommentNode(e,t){const n=this.treeAdapter.createCommentNode(e.data);this.treeAdapter.appendChild(t,n);}_insertCharacters(e){if(this._shouldFosterParentOnInsertion())this._fosterParentText(e.chars);else{const t=this.openElements.currentTmplContent||this.openElements.current;this.treeAdapter.insertText(t,e.chars);}}_adoptNodes(e,t){for(let n=this.treeAdapter.getFirstChild(e);n;n=this.treeAdapter.getFirstChild(e))this.treeAdapter.detachNode(n),this.treeAdapter.appendChild(t,n);}_shouldProcessTokenInForeignContent(e){const t=this._getAdjustedCurrentElement();if(!t||t===this.document)return !1;const n=this.treeAdapter.getNamespaceURI(t);if(n===Bt.HTML)return !1;if(this.treeAdapter.getTagName(t)===Gt.ANNOTATION_XML&&n===Bt.MATHML&&e.type===et.START_TAG_TOKEN&&e.tagName===Gt.SVG)return !1;const s=e.type===et.CHARACTER_TOKEN||e.type===et.NULL_CHARACTER_TOKEN||e.type===et.WHITESPACE_CHARACTER_TOKEN;return (!(e.type===et.START_TAG_TOKEN&&e.tagName!==Gt.MGLYPH&&e.tagName!==Gt.MALIGNMARK)&&!s||!this._isIntegrationPoint(t,Bt.MATHML))&&((e.type!==et.START_TAG_TOKEN&&!s||!this._isIntegrationPoint(t,Bt.HTML))&&e.type!==et.EOF_TOKEN)}_processToken(e){_n[this.insertionMode][e.type](this,e);}_processTokenInBodyMode(e){_n[jt][e.type](this,e);}_processTokenInForeignContent(e){e.type===et.CHARACTER_TOKEN?function(e,t){e._insertCharacters(t),e.framesetOk=!1;}(this,e):e.type===et.NULL_CHARACTER_TOKEN?function(e,t){t.chars=n.REPLACEMENT_CHARACTER,e._insertCharacters(t);}(this,e):e.type===et.WHITESPACE_CHARACTER_TOKEN?Ln(this,e):e.type===et.COMMENT_TOKEN?In(this,e):e.type===et.START_TAG_TOKEN?function(e,t){if(Ut.causesExit(t)&&!e.fragmentContext){for(;e.treeAdapter.getNamespaceURI(e.openElements.current)!==Bt.HTML&&!e._isIntegrationPoint(e.openElements.current);)e.openElements.pop();e._processToken(t);}else{const n=e._getAdjustedCurrentElement(),s=e.treeAdapter.getNamespaceURI(n);s===Bt.MATHML?Ut.adjustTokenMathMLAttrs(t):s===Bt.SVG&&(Ut.adjustTokenSVGTagName(t),Ut.adjustTokenSVGAttrs(t)),Ut.adjustTokenXMLAttrs(t),t.selfClosing?e._appendElement(t,s):e._insertElement(t,s),t.ackSelfClosing=!0;}}(this,e):e.type===et.END_TAG_TOKEN&&function(e,t){for(let n=e.openElements.stackTop;n>0;n--){const s=e.openElements.items[n];if(e.treeAdapter.getNamespaceURI(s)===Bt.HTML){e._processToken(t);break}if(e.treeAdapter.getTagName(s).toLowerCase()===t.tagName){e.openElements.popUntilElementPopped(s);break}}}(this,e);}_processInputToken(e){this._shouldProcessTokenInForeignContent(e)?this._processTokenInForeignContent(e):this._processToken(e),e.type===et.START_TAG_TOKEN&&e.selfClosing&&!e.ackSelfClosing&&this._err(s.nonVoidHtmlElementStartTagWithTrailingSolidus);}_isIntegrationPoint(e,t){const n=this.treeAdapter.getTagName(e),s=this.treeAdapter.getNamespaceURI(e),r=this.treeAdapter.getAttrList(e);return Ut.isIntegrationPoint(n,s,r,t)}_reconstructActiveFormattingElements(){const e=this.activeFormattingElements.length;if(e){let t=e,n=null;do{if(t--,(n=this.activeFormattingElements.entries[t]).type===ht.MARKER_ENTRY||this.openElements.contains(n.element)){t++;break}}while(t>0);for(let s=t;s<e;s++)n=this.activeFormattingElements.entries[s],this._insertElement(n.token,this.treeAdapter.getNamespaceURI(n.element)),n.element=this.openElements.current;}}_closeTableCell(){this.openElements.generateImpliedEndTags(),this.openElements.popUntilTableCellPopped(),this.activeFormattingElements.clearToLastMarker(),this.insertionMode=tn;}_closePElement(){this.openElements.generateImpliedEndTagsWithExclusion(Gt.P),this.openElements.popUntilTagNamePopped(Gt.P);}_resetInsertionMode(){for(let e=this.openElements.stackTop,t=!1;e>=0;e--){let n=this.openElements.items[e];0===e&&(t=!0,this.fragmentContext&&(n=this.fragmentContext));const s=this.treeAdapter.getTagName(n),r=ln[s];if(r){this.insertionMode=r;break}if(!(t||s!==Gt.TD&&s!==Gt.TH)){this.insertionMode=nn;break}if(!t&&s===Gt.HEAD){this.insertionMode=Wt;break}if(s===Gt.SELECT){this._resetInsertionModeForSelect(e);break}if(s===Gt.TEMPLATE){this.insertionMode=this.currentTmplInsertionMode;break}if(s===Gt.HTML){this.insertionMode=this.headElement?Vt:Qt;break}if(t){this.insertionMode=jt;break}}}_resetInsertionModeForSelect(e){if(e>0)for(let t=e-1;t>0;t--){const e=this.openElements.items[t],n=this.treeAdapter.getTagName(e);if(n===Gt.TEMPLATE)break;if(n===Gt.TABLE)return void(this.insertionMode=rn)}this.insertionMode=sn;}_pushTmplInsertionMode(e){this.tmplInsertionModeStack.push(e),this.tmplInsertionModeStackTop++,this.currentTmplInsertionMode=e;}_popTmplInsertionMode(){this.tmplInsertionModeStack.pop(),this.tmplInsertionModeStackTop--,this.currentTmplInsertionMode=this.tmplInsertionModeStack[this.tmplInsertionModeStackTop];}_isElementCausesFosterParenting(e){const t=this.treeAdapter.getTagName(e);return t===Gt.TABLE||t===Gt.TBODY||t===Gt.TFOOT||t===Gt.THEAD||t===Gt.TR}_shouldFosterParentOnInsertion(){return this.fosterParentingEnabled&&this._isElementCausesFosterParenting(this.openElements.current)}_findFosterParentingLocation(){const e={parent:null,beforeElement:null};for(let t=this.openElements.stackTop;t>=0;t--){const n=this.openElements.items[t],s=this.treeAdapter.getTagName(n),r=this.treeAdapter.getNamespaceURI(n);if(s===Gt.TEMPLATE&&r===Bt.HTML){e.parent=this.treeAdapter.getTemplateContent(n);break}if(s===Gt.TABLE){e.parent=this.treeAdapter.getParentNode(n),e.parent?e.beforeElement=n:e.parent=this.openElements.items[t-1];break}}return e.parent||(e.parent=this.openElements.items[0]),e}_fosterParentElement(e){const t=this._findFosterParentingLocation();t.beforeElement?this.treeAdapter.insertBefore(t.parent,e,t.beforeElement):this.treeAdapter.appendChild(t.parent,e);}_fosterParentText(e){const t=this._findFosterParentingLocation();t.beforeElement?this.treeAdapter.insertTextBefore(t.parent,e,t.beforeElement):this.treeAdapter.insertText(t.parent,e);}_isSpecialElement(e){const t=this.treeAdapter.getTagName(e),n=this.treeAdapter.getNamespaceURI(e);return nt.SPECIAL_ELEMENTS[n][t]}};function un(e,t){let n=e.activeFormattingElements.getElementEntryInScopeWithTagName(t.tagName);return n?e.openElements.contains(n.element)?e.openElements.hasInScope(t.tagName)||(n=null):(e.activeFormattingElements.removeEntry(n),n=null):Zn(e,t),n}function An(e,t){let n=null;for(let s=e.openElements.stackTop;s>=0;s--){const r=e.openElements.items[s];if(r===t.element)break;e._isSpecialElement(r)&&(n=r);}return n||(e.openElements.popUntilElementPopped(t.element),e.activeFormattingElements.removeEntry(t)),n}function dn(e,t,n){let s=t,r=e.openElements.getCommonAncestor(t);for(let i=0,o=r;o!==n;i++,o=r){r=e.openElements.getCommonAncestor(o);const n=e.activeFormattingElements.getElementEntry(o),a=n&&i>=vt;!n||a?(a&&e.activeFormattingElements.removeEntry(n),e.openElements.remove(o)):(o=Nn(e,n),s===t&&(e.activeFormattingElements.bookmark=n),e.treeAdapter.detachNode(s),e.treeAdapter.appendChild(o,s),s=o);}return s}function Nn(e,t){const n=e.treeAdapter.getNamespaceURI(t.element),s=e.treeAdapter.createElement(t.token.tagName,n,t.token.attrs);return e.openElements.replace(t.element,s),t.element=s,s}function Cn(e,t,n){if(e._isElementCausesFosterParenting(t))e._fosterParentElement(n);else{const s=e.treeAdapter.getTagName(t),r=e.treeAdapter.getNamespaceURI(t);s===Gt.TEMPLATE&&r===Bt.HTML&&(t=e.treeAdapter.getTemplateContent(t)),e.treeAdapter.appendChild(t,n);}}function fn(e,t,n){const s=e.treeAdapter.getNamespaceURI(n.element),r=n.token,i=e.treeAdapter.createElement(r.tagName,s,r.attrs);e._adoptNodes(t,i),e.treeAdapter.appendChild(t,i),e.activeFormattingElements.insertElementAfterBookmark(i,n.token),e.activeFormattingElements.removeEntry(n),e.openElements.remove(n.element),e.openElements.insertAfter(t,i);}function On(e,t){let n;for(let s=0;s<xt&&(n=un(e,t));s++){const t=An(e,n);if(!t)break;e.activeFormattingElements.bookmark=n;const s=dn(e,t,n.element),r=e.openElements.getCommonAncestor(n.element);e.treeAdapter.detachNode(s),Cn(e,r,s),fn(e,t,n);}}function Sn(){}function Rn(e){e._err(s.misplacedDoctype);}function In(e,t){e._appendCommentNode(t,e.openElements.currentTmplContent||e.openElements.current);}function gn(e,t){e._appendCommentNode(t,e.document);}function Ln(e,t){e._insertCharacters(t);}function Mn(e){e.stopped=!0;}function kn(e,t){e._err(s.missingDoctype,{beforeToken:!0}),e.treeAdapter.setDocumentMode(e.document,nt.DOCUMENT_MODE.QUIRKS),e.insertionMode=wt,e._processToken(t);}function Pn(e,t){e._insertFakeRootElement(),e.insertionMode=Qt,e._processToken(t);}function Dn(e,t){e._insertFakeElement(Gt.HEAD),e.headElement=e.openElements.current,e.insertionMode=Wt,e._processToken(t);}function Hn(e,t){const n=t.tagName;n===Gt.HTML?zn(e,t):n===Gt.BASE||n===Gt.BASEFONT||n===Gt.BGSOUND||n===Gt.LINK||n===Gt.META?(e._appendElement(t,Bt.HTML),t.ackSelfClosing=!0):n===Gt.TITLE?e._switchToTextParsing(t,et.MODE.RCDATA):n===Gt.NOSCRIPT?e.options.scriptingEnabled?e._switchToTextParsing(t,et.MODE.RAWTEXT):(e._insertElement(t,Bt.HTML),e.insertionMode=Xt):n===Gt.NOFRAMES||n===Gt.STYLE?e._switchToTextParsing(t,et.MODE.RAWTEXT):n===Gt.SCRIPT?e._switchToTextParsing(t,et.MODE.SCRIPT_DATA):n===Gt.TEMPLATE?(e._insertTemplate(t,Bt.HTML),e.activeFormattingElements.insertMarker(),e.framesetOk=!1,e.insertionMode=on,e._pushTmplInsertionMode(on)):n===Gt.HEAD?e._err(s.misplacedStartTagForHeadElement):Un(e,t);}function Fn(e,t){const n=t.tagName;n===Gt.HEAD?(e.openElements.pop(),e.insertionMode=Vt):n===Gt.BODY||n===Gt.BR||n===Gt.HTML?Un(e,t):n===Gt.TEMPLATE&&e.openElements.tmplCount>0?(e.openElements.generateImpliedEndTagsThoroughly(),e.openElements.currentTagName!==Gt.TEMPLATE&&e._err(s.closingOfElementWithOpenChildElements),e.openElements.popUntilTagNamePopped(Gt.TEMPLATE),e.activeFormattingElements.clearToLastMarker(),e._popTmplInsertionMode(),e._resetInsertionMode()):e._err(s.endTagWithoutMatchingOpenElement);}function Un(e,t){e.openElements.pop(),e.insertionMode=Vt,e._processToken(t);}function Gn(e,t){const n=t.type===et.EOF_TOKEN?s.openElementsLeftAfterEof:s.disallowedContentInNoscriptInHead;e._err(n),e.openElements.pop(),e.insertionMode=Wt,e._processToken(t);}function Bn(e,t){e._insertFakeElement(Gt.BODY),e.insertionMode=jt,e._processToken(t);}function Kn(e,t){e._reconstructActiveFormattingElements(),e._insertCharacters(t);}function bn(e,t){e._reconstructActiveFormattingElements(),e._insertCharacters(t),e.framesetOk=!1;}function yn(e,t){e.openElements.hasInButtonScope(Gt.P)&&e._closePElement(),e._insertElement(t,Bt.HTML);}function xn(e,t){e.openElements.hasInButtonScope(Gt.P)&&e._closePElement(),e._insertElement(t,Bt.HTML),e.skipNextNewLine=!0,e.framesetOk=!1;}function vn(e,t){e._reconstructActiveFormattingElements(),e._insertElement(t,Bt.HTML),e.activeFormattingElements.pushElement(e.openElements.current,t);}function Yn(e,t){e._reconstructActiveFormattingElements(),e._insertElement(t,Bt.HTML),e.activeFormattingElements.insertMarker(),e.framesetOk=!1;}function wn(e,t){e._reconstructActiveFormattingElements(),e._appendElement(t,Bt.HTML),e.framesetOk=!1,t.ackSelfClosing=!0;}function Qn(e,t){e._appendElement(t,Bt.HTML),t.ackSelfClosing=!0;}function Wn(e,t){e._switchToTextParsing(t,et.MODE.RAWTEXT);}function Xn(e,t){e.openElements.currentTagName===Gt.OPTION&&e.openElements.pop(),e._reconstructActiveFormattingElements(),e._insertElement(t,Bt.HTML);}function Vn(e,t){e.openElements.hasInScope(Gt.RUBY)&&e.openElements.generateImpliedEndTags(),e._insertElement(t,Bt.HTML);}function jn(e,t){e._reconstructActiveFormattingElements(),e._insertElement(t,Bt.HTML);}function zn(e,t){const n=t.tagName;switch(n.length){case 1:n===Gt.I||n===Gt.S||n===Gt.B||n===Gt.U?vn(e,t):n===Gt.P?yn(e,t):n===Gt.A?function(e,t){const n=e.activeFormattingElements.getElementEntryInScopeWithTagName(Gt.A);n&&(On(e,t),e.openElements.remove(n.element),e.activeFormattingElements.removeEntry(n)),e._reconstructActiveFormattingElements(),e._insertElement(t,Bt.HTML),e.activeFormattingElements.pushElement(e.openElements.current,t);}(e,t):jn(e,t);break;case 2:n===Gt.DL||n===Gt.OL||n===Gt.UL?yn(e,t):n===Gt.H1||n===Gt.H2||n===Gt.H3||n===Gt.H4||n===Gt.H5||n===Gt.H6?function(e,t){e.openElements.hasInButtonScope(Gt.P)&&e._closePElement();const n=e.openElements.currentTagName;n!==Gt.H1&&n!==Gt.H2&&n!==Gt.H3&&n!==Gt.H4&&n!==Gt.H5&&n!==Gt.H6||e.openElements.pop(),e._insertElement(t,Bt.HTML);}(e,t):n===Gt.LI||n===Gt.DD||n===Gt.DT?function(e,t){e.framesetOk=!1;const n=t.tagName;for(let t=e.openElements.stackTop;t>=0;t--){const s=e.openElements.items[t],r=e.treeAdapter.getTagName(s);let i=null;if(n===Gt.LI&&r===Gt.LI?i=Gt.LI:n!==Gt.DD&&n!==Gt.DT||r!==Gt.DD&&r!==Gt.DT||(i=r),i){e.openElements.generateImpliedEndTagsWithExclusion(i),e.openElements.popUntilTagNamePopped(i);break}if(r!==Gt.ADDRESS&&r!==Gt.DIV&&r!==Gt.P&&e._isSpecialElement(s))break}e.openElements.hasInButtonScope(Gt.P)&&e._closePElement(),e._insertElement(t,Bt.HTML);}(e,t):n===Gt.EM||n===Gt.TT?vn(e,t):n===Gt.BR?wn(e,t):n===Gt.HR?function(e,t){e.openElements.hasInButtonScope(Gt.P)&&e._closePElement(),e._appendElement(t,Bt.HTML),e.framesetOk=!1,e.ackSelfClosing=!0;}(e,t):n===Gt.RB?Vn(e,t):n===Gt.RT||n===Gt.RP?function(e,t){e.openElements.hasInScope(Gt.RUBY)&&e.openElements.generateImpliedEndTagsWithExclusion(Gt.RTC),e._insertElement(t,Bt.HTML);}(e,t):n!==Gt.TH&&n!==Gt.TD&&n!==Gt.TR&&jn(e,t);break;case 3:n===Gt.DIV||n===Gt.DIR||n===Gt.NAV?yn(e,t):n===Gt.PRE?xn(e,t):n===Gt.BIG?vn(e,t):n===Gt.IMG||n===Gt.WBR?wn(e,t):n===Gt.XMP?function(e,t){e.openElements.hasInButtonScope(Gt.P)&&e._closePElement(),e._reconstructActiveFormattingElements(),e.framesetOk=!1,e._switchToTextParsing(t,et.MODE.RAWTEXT);}(e,t):n===Gt.SVG?function(e,t){e._reconstructActiveFormattingElements(),Ut.adjustTokenSVGAttrs(t),Ut.adjustTokenXMLAttrs(t),t.selfClosing?e._appendElement(t,Bt.SVG):e._insertElement(t,Bt.SVG),t.ackSelfClosing=!0;}(e,t):n===Gt.RTC?Vn(e,t):n!==Gt.COL&&jn(e,t);break;case 4:n===Gt.HTML?function(e,t){0===e.openElements.tmplCount&&e.treeAdapter.adoptAttributes(e.openElements.items[0],t.attrs);}(e,t):n===Gt.BASE||n===Gt.LINK||n===Gt.META?Hn(e,t):n===Gt.BODY?function(e,t){const n=e.openElements.tryPeekProperlyNestedBodyElement();n&&0===e.openElements.tmplCount&&(e.framesetOk=!1,e.treeAdapter.adoptAttributes(n,t.attrs));}(e,t):n===Gt.MAIN||n===Gt.MENU?yn(e,t):n===Gt.FORM?function(e,t){const n=e.openElements.tmplCount>0;e.formElement&&!n||(e.openElements.hasInButtonScope(Gt.P)&&e._closePElement(),e._insertElement(t,Bt.HTML),n||(e.formElement=e.openElements.current));}(e,t):n===Gt.CODE||n===Gt.FONT?vn(e,t):n===Gt.NOBR?function(e,t){e._reconstructActiveFormattingElements(),e.openElements.hasInScope(Gt.NOBR)&&(On(e,t),e._reconstructActiveFormattingElements()),e._insertElement(t,Bt.HTML),e.activeFormattingElements.pushElement(e.openElements.current,t);}(e,t):n===Gt.AREA?wn(e,t):n===Gt.MATH?function(e,t){e._reconstructActiveFormattingElements(),Ut.adjustTokenMathMLAttrs(t),Ut.adjustTokenXMLAttrs(t),t.selfClosing?e._appendElement(t,Bt.MATHML):e._insertElement(t,Bt.MATHML),t.ackSelfClosing=!0;}(e,t):n===Gt.MENU?function(e,t){e.openElements.hasInButtonScope(Gt.P)&&e._closePElement(),e._insertElement(t,Bt.HTML);}(e,t):n!==Gt.HEAD&&jn(e,t);break;case 5:n===Gt.STYLE||n===Gt.TITLE?Hn(e,t):n===Gt.ASIDE?yn(e,t):n===Gt.SMALL?vn(e,t):n===Gt.TABLE?function(e,t){e.treeAdapter.getDocumentMode(e.document)!==nt.DOCUMENT_MODE.QUIRKS&&e.openElements.hasInButtonScope(Gt.P)&&e._closePElement(),e._insertElement(t,Bt.HTML),e.framesetOk=!1,e.insertionMode=qt;}(e,t):n===Gt.EMBED?wn(e,t):n===Gt.INPUT?function(e,t){e._reconstructActiveFormattingElements(),e._appendElement(t,Bt.HTML);const n=et.getTokenAttr(t,Kt.TYPE);n&&n.toLowerCase()===yt||(e.framesetOk=!1),t.ackSelfClosing=!0;}(e,t):n===Gt.PARAM||n===Gt.TRACK?Qn(e,t):n===Gt.IMAGE?function(e,t){t.tagName=Gt.IMG,wn(e,t);}(e,t):n!==Gt.FRAME&&n!==Gt.TBODY&&n!==Gt.TFOOT&&n!==Gt.THEAD&&jn(e,t);break;case 6:n===Gt.SCRIPT?Hn(e,t):n===Gt.CENTER||n===Gt.FIGURE||n===Gt.FOOTER||n===Gt.HEADER||n===Gt.HGROUP||n===Gt.DIALOG?yn(e,t):n===Gt.BUTTON?function(e,t){e.openElements.hasInScope(Gt.BUTTON)&&(e.openElements.generateImpliedEndTags(),e.openElements.popUntilTagNamePopped(Gt.BUTTON)),e._reconstructActiveFormattingElements(),e._insertElement(t,Bt.HTML),e.framesetOk=!1;}(e,t):n===Gt.STRIKE||n===Gt.STRONG?vn(e,t):n===Gt.APPLET||n===Gt.OBJECT?Yn(e,t):n===Gt.KEYGEN?wn(e,t):n===Gt.SOURCE?Qn(e,t):n===Gt.IFRAME?function(e,t){e.framesetOk=!1,e._switchToTextParsing(t,et.MODE.RAWTEXT);}(e,t):n===Gt.SELECT?function(e,t){e._reconstructActiveFormattingElements(),e._insertElement(t,Bt.HTML),e.framesetOk=!1,e.insertionMode===qt||e.insertionMode===Zt||e.insertionMode===en||e.insertionMode===tn||e.insertionMode===nn?e.insertionMode=rn:e.insertionMode=sn;}(e,t):n===Gt.OPTION?Xn(e,t):jn(e,t);break;case 7:n===Gt.BGSOUND?Hn(e,t):n===Gt.DETAILS||n===Gt.ADDRESS||n===Gt.ARTICLE||n===Gt.SECTION||n===Gt.SUMMARY?yn(e,t):n===Gt.LISTING?xn(e,t):n===Gt.MARQUEE?Yn(e,t):n===Gt.NOEMBED?Wn(e,t):n!==Gt.CAPTION&&jn(e,t);break;case 8:n===Gt.BASEFONT?Hn(e,t):n===Gt.FRAMESET?function(e,t){const n=e.openElements.tryPeekProperlyNestedBodyElement();e.framesetOk&&n&&(e.treeAdapter.detachNode(n),e.openElements.popAllUpToHtmlElement(),e._insertElement(t,Bt.HTML),e.insertionMode=Tn);}(e,t):n===Gt.FIELDSET?yn(e,t):n===Gt.TEXTAREA?function(e,t){e._insertElement(t,Bt.HTML),e.skipNextNewLine=!0,e.tokenizer.state=et.MODE.RCDATA,e.originalInsertionMode=e.insertionMode,e.framesetOk=!1,e.insertionMode=zt;}(e,t):n===Gt.TEMPLATE?Hn(e,t):n===Gt.NOSCRIPT?e.options.scriptingEnabled?Wn(e,t):jn(e,t):n===Gt.OPTGROUP?Xn(e,t):n!==Gt.COLGROUP&&jn(e,t);break;case 9:n===Gt.PLAINTEXT?function(e,t){e.openElements.hasInButtonScope(Gt.P)&&e._closePElement(),e._insertElement(t,Bt.HTML),e.tokenizer.state=et.MODE.PLAINTEXT;}(e,t):jn(e,t);break;case 10:n===Gt.BLOCKQUOTE||n===Gt.FIGCAPTION?yn(e,t):jn(e,t);break;default:jn(e,t);}}function qn(e,t){const n=t.tagName;e.openElements.hasInScope(n)&&(e.openElements.generateImpliedEndTags(),e.openElements.popUntilTagNamePopped(n));}function Jn(e,t){const n=t.tagName;e.openElements.hasInScope(n)&&(e.openElements.generateImpliedEndTags(),e.openElements.popUntilTagNamePopped(n),e.activeFormattingElements.clearToLastMarker());}function Zn(e,t){const n=t.tagName;for(let t=e.openElements.stackTop;t>0;t--){const s=e.openElements.items[t];if(e.treeAdapter.getTagName(s)===n){e.openElements.generateImpliedEndTagsWithExclusion(n),e.openElements.popUntilElementPopped(s);break}if(e._isSpecialElement(s))break}}function $n(e,t){const n=t.tagName;switch(n.length){case 1:n===Gt.A||n===Gt.B||n===Gt.I||n===Gt.S||n===Gt.U?On(e,t):n===Gt.P?function(e){e.openElements.hasInButtonScope(Gt.P)||e._insertFakeElement(Gt.P),e._closePElement();}(e):Zn(e,t);break;case 2:n===Gt.DL||n===Gt.UL||n===Gt.OL?qn(e,t):n===Gt.LI?function(e){e.openElements.hasInListItemScope(Gt.LI)&&(e.openElements.generateImpliedEndTagsWithExclusion(Gt.LI),e.openElements.popUntilTagNamePopped(Gt.LI));}(e):n===Gt.DD||n===Gt.DT?function(e,t){const n=t.tagName;e.openElements.hasInScope(n)&&(e.openElements.generateImpliedEndTagsWithExclusion(n),e.openElements.popUntilTagNamePopped(n));}(e,t):n===Gt.H1||n===Gt.H2||n===Gt.H3||n===Gt.H4||n===Gt.H5||n===Gt.H6?function(e){e.openElements.hasNumberedHeaderInScope()&&(e.openElements.generateImpliedEndTags(),e.openElements.popUntilNumberedHeaderPopped());}(e):n===Gt.BR?function(e){e._reconstructActiveFormattingElements(),e._insertFakeElement(Gt.BR),e.openElements.pop(),e.framesetOk=!1;}(e):n===Gt.EM||n===Gt.TT?On(e,t):Zn(e,t);break;case 3:n===Gt.BIG?On(e,t):n===Gt.DIR||n===Gt.DIV||n===Gt.NAV||n===Gt.PRE?qn(e,t):Zn(e,t);break;case 4:n===Gt.BODY?function(e){e.openElements.hasInScope(Gt.BODY)&&(e.insertionMode=an);}(e):n===Gt.HTML?function(e,t){e.openElements.hasInScope(Gt.BODY)&&(e.insertionMode=an,e._processToken(t));}(e,t):n===Gt.FORM?function(e){const t=e.openElements.tmplCount>0,n=e.formElement;t||(e.formElement=null),(n||t)&&e.openElements.hasInScope(Gt.FORM)&&(e.openElements.generateImpliedEndTags(),t?e.openElements.popUntilTagNamePopped(Gt.FORM):e.openElements.remove(n));}(e):n===Gt.CODE||n===Gt.FONT||n===Gt.NOBR?On(e,t):n===Gt.MAIN||n===Gt.MENU?qn(e,t):Zn(e,t);break;case 5:n===Gt.ASIDE?qn(e,t):n===Gt.SMALL?On(e,t):Zn(e,t);break;case 6:n===Gt.CENTER||n===Gt.FIGURE||n===Gt.FOOTER||n===Gt.HEADER||n===Gt.HGROUP||n===Gt.DIALOG?qn(e,t):n===Gt.APPLET||n===Gt.OBJECT?Jn(e,t):n===Gt.STRIKE||n===Gt.STRONG?On(e,t):Zn(e,t);break;case 7:n===Gt.ADDRESS||n===Gt.ARTICLE||n===Gt.DETAILS||n===Gt.SECTION||n===Gt.SUMMARY||n===Gt.LISTING?qn(e,t):n===Gt.MARQUEE?Jn(e,t):Zn(e,t);break;case 8:n===Gt.FIELDSET?qn(e,t):n===Gt.TEMPLATE?Fn(e,t):Zn(e,t);break;case 10:n===Gt.BLOCKQUOTE||n===Gt.FIGCAPTION?qn(e,t):Zn(e,t);break;default:Zn(e,t);}}function es(e,t){e.tmplInsertionModeStackTop>-1?Es(e,t):e.stopped=!0;}function ts(e,t){const n=e.openElements.currentTagName;n===Gt.TABLE||n===Gt.TBODY||n===Gt.TFOOT||n===Gt.THEAD||n===Gt.TR?(e.pendingCharacterTokens=[],e.hasNonWhitespacePendingCharacterToken=!1,e.originalInsertionMode=e.insertionMode,e.insertionMode=Jt,e._processToken(t)):rs(e,t);}function ns(e,t){const n=t.tagName;switch(n.length){case 2:n===Gt.TD||n===Gt.TH||n===Gt.TR?function(e,t){e.openElements.clearBackToTableContext(),e._insertFakeElement(Gt.TBODY),e.insertionMode=en,e._processToken(t);}(e,t):rs(e,t);break;case 3:n===Gt.COL?function(e,t){e.openElements.clearBackToTableContext(),e._insertFakeElement(Gt.COLGROUP),e.insertionMode=$t,e._processToken(t);}(e,t):rs(e,t);break;case 4:n===Gt.FORM?function(e,t){e.formElement||0!==e.openElements.tmplCount||(e._insertElement(t,Bt.HTML),e.formElement=e.openElements.current,e.openElements.pop());}(e,t):rs(e,t);break;case 5:n===Gt.TABLE?function(e,t){e.openElements.hasInTableScope(Gt.TABLE)&&(e.openElements.popUntilTagNamePopped(Gt.TABLE),e._resetInsertionMode(),e._processToken(t));}(e,t):n===Gt.STYLE?Hn(e,t):n===Gt.TBODY||n===Gt.TFOOT||n===Gt.THEAD?function(e,t){e.openElements.clearBackToTableContext(),e._insertElement(t,Bt.HTML),e.insertionMode=en;}(e,t):n===Gt.INPUT?function(e,t){const n=et.getTokenAttr(t,Kt.TYPE);n&&n.toLowerCase()===yt?e._appendElement(t,Bt.HTML):rs(e,t),t.ackSelfClosing=!0;}(e,t):rs(e,t);break;case 6:n===Gt.SCRIPT?Hn(e,t):rs(e,t);break;case 7:n===Gt.CAPTION?function(e,t){e.openElements.clearBackToTableContext(),e.activeFormattingElements.insertMarker(),e._insertElement(t,Bt.HTML),e.insertionMode=Zt;}(e,t):rs(e,t);break;case 8:n===Gt.COLGROUP?function(e,t){e.openElements.clearBackToTableContext(),e._insertElement(t,Bt.HTML),e.insertionMode=$t;}(e,t):n===Gt.TEMPLATE?Hn(e,t):rs(e,t);break;default:rs(e,t);}}function ss(e,t){const n=t.tagName;n===Gt.TABLE?e.openElements.hasInTableScope(Gt.TABLE)&&(e.openElements.popUntilTagNamePopped(Gt.TABLE),e._resetInsertionMode()):n===Gt.TEMPLATE?Fn(e,t):n!==Gt.BODY&&n!==Gt.CAPTION&&n!==Gt.COL&&n!==Gt.COLGROUP&&n!==Gt.HTML&&n!==Gt.TBODY&&n!==Gt.TD&&n!==Gt.TFOOT&&n!==Gt.TH&&n!==Gt.THEAD&&n!==Gt.TR&&rs(e,t);}function rs(e,t){const n=e.fosterParentingEnabled;e.fosterParentingEnabled=!0,e._processTokenInBodyMode(t),e.fosterParentingEnabled=n;}function is(e,t){let n=0;if(e.hasNonWhitespacePendingCharacterToken)for(;n<e.pendingCharacterTokens.length;n++)rs(e,e.pendingCharacterTokens[n]);else for(;n<e.pendingCharacterTokens.length;n++)e._insertCharacters(e.pendingCharacterTokens[n]);e.insertionMode=e.originalInsertionMode,e._processToken(t);}function os(e,t){e.openElements.currentTagName===Gt.COLGROUP&&(e.openElements.pop(),e.insertionMode=qt,e._processToken(t));}function as(e,t){const n=t.tagName;n===Gt.HTML?zn(e,t):n===Gt.OPTION?(e.openElements.currentTagName===Gt.OPTION&&e.openElements.pop(),e._insertElement(t,Bt.HTML)):n===Gt.OPTGROUP?(e.openElements.currentTagName===Gt.OPTION&&e.openElements.pop(),e.openElements.currentTagName===Gt.OPTGROUP&&e.openElements.pop(),e._insertElement(t,Bt.HTML)):n===Gt.INPUT||n===Gt.KEYGEN||n===Gt.TEXTAREA||n===Gt.SELECT?e.openElements.hasInSelectScope(Gt.SELECT)&&(e.openElements.popUntilTagNamePopped(Gt.SELECT),e._resetInsertionMode(),n!==Gt.SELECT&&e._processToken(t)):n!==Gt.SCRIPT&&n!==Gt.TEMPLATE||Hn(e,t);}function Ts(e,t){const n=t.tagName;if(n===Gt.OPTGROUP){const t=e.openElements.items[e.openElements.stackTop-1],n=t&&e.treeAdapter.getTagName(t);e.openElements.currentTagName===Gt.OPTION&&n===Gt.OPTGROUP&&e.openElements.pop(),e.openElements.currentTagName===Gt.OPTGROUP&&e.openElements.pop();}else n===Gt.OPTION?e.openElements.currentTagName===Gt.OPTION&&e.openElements.pop():n===Gt.SELECT&&e.openElements.hasInSelectScope(Gt.SELECT)?(e.openElements.popUntilTagNamePopped(Gt.SELECT),e._resetInsertionMode()):n===Gt.TEMPLATE&&Fn(e,t);}function Es(e,t){e.openElements.tmplCount>0?(e.openElements.popUntilTagNamePopped(Gt.TEMPLATE),e.activeFormattingElements.clearToLastMarker(),e._popTmplInsertionMode(),e._resetInsertionMode(),e._processToken(t)):e.stopped=!0;}function cs(e,t){e.insertionMode=jt,e._processToken(t);}function hs(e,t){e.insertionMode=jt,e._processToken(t);}nt.TAG_NAMES,nt.NAMESPACES;return e.parse=function(e,t){return new pn(t).parse(e)},e.parseFragment=function(e,t,n){return "string"==typeof e&&(n=t,t=e,e=null),new pn(n).parseFragment(t,e)},e}({});function parse(e,t){return parse5.parse(e,t)}function parseFragment(e,t){return parse5.parseFragment(e,t)}

const docParser = new WeakMap();
function parseDocumentUtil(ownerDocument, html) {
    const doc = parse(html.trim(), getParser(ownerDocument));
    doc.documentElement = doc.firstElementChild;
    doc.head = doc.documentElement.firstElementChild;
    doc.body = doc.head.nextElementSibling;
    return doc;
}
function parseFragmentUtil(ownerDocument, html) {
    if (typeof html === 'string') {
        html = html.trim();
    }
    else {
        html = '';
    }
    const frag = parseFragment(html, getParser(ownerDocument));
    return frag;
}
function getParser(ownerDocument) {
    let parseOptions = docParser.get(ownerDocument);
    if (parseOptions != null) {
        return parseOptions;
    }
    const treeAdapter = {
        createDocument() {
            const doc = ownerDocument.createElement("#document" /* DOCUMENT_NODE */);
            doc['x-mode'] = 'no-quirks';
            return doc;
        },
        createDocumentFragment() {
            return ownerDocument.createDocumentFragment();
        },
        createElement(tagName, namespaceURI, attrs) {
            const elm = ownerDocument.createElementNS(namespaceURI, tagName);
            for (let i = 0; i < attrs.length; i++) {
                const attr = attrs[i];
                if (attr.namespace == null || attr.namespace === 'http://www.w3.org/1999/xhtml') {
                    elm.setAttribute(attr.name, attr.value);
                }
                else {
                    elm.setAttributeNS(attr.namespace, attr.name, attr.value);
                }
            }
            return elm;
        },
        createCommentNode(data) {
            return ownerDocument.createComment(data);
        },
        appendChild(parentNode, newNode) {
            parentNode.appendChild(newNode);
        },
        insertBefore(parentNode, newNode, referenceNode) {
            parentNode.insertBefore(newNode, referenceNode);
        },
        setTemplateContent(templateElement, contentElement) {
            templateElement.content = contentElement;
        },
        getTemplateContent(templateElement) {
            return templateElement.content;
        },
        setDocumentType(doc, name, publicId, systemId) {
            let doctypeNode = doc.childNodes.find(n => n.nodeType === 10 /* DOCUMENT_TYPE_NODE */);
            if (doctypeNode == null) {
                doctypeNode = ownerDocument.createDocumentTypeNode();
                doc.insertBefore(doctypeNode, doc.firstChild);
            }
            doctypeNode.nodeValue = '!DOCTYPE';
            doctypeNode['x-name'] = name;
            doctypeNode['x-publicId'] = publicId;
            doctypeNode['x-systemId'] = systemId;
        },
        setDocumentMode(doc, mode) {
            doc['x-mode'] = mode;
        },
        getDocumentMode(doc) {
            return doc['x-mode'];
        },
        detachNode(node) {
            node.remove();
        },
        insertText(parentNode, text) {
            const lastChild = parentNode.lastChild;
            if (lastChild != null && lastChild.nodeType === 3 /* TEXT_NODE */) {
                lastChild.nodeValue += text;
            }
            else {
                parentNode.appendChild(ownerDocument.createTextNode(text));
            }
        },
        insertTextBefore(parentNode, text, referenceNode) {
            const prevNode = parentNode.childNodes[parentNode.childNodes.indexOf(referenceNode) - 1];
            if (prevNode != null && prevNode.nodeType === 3 /* TEXT_NODE */) {
                prevNode.nodeValue += text;
            }
            else {
                parentNode.insertBefore(ownerDocument.createTextNode(text), referenceNode);
            }
        },
        adoptAttributes(recipient, attrs) {
            for (let i = 0; i < attrs.length; i++) {
                const attr = attrs[i];
                if (recipient.hasAttributeNS(attr.namespace, attr.name) === false) {
                    recipient.setAttributeNS(attr.namespace, attr.name, attr.value);
                }
            }
        },
        getFirstChild(node) {
            return node.childNodes[0];
        },
        getChildNodes(node) {
            return node.childNodes;
        },
        getParentNode(node) {
            return node.parentNode;
        },
        getAttrList(element) {
            const attrs = element.attributes.items.map(attr => {
                return {
                    name: attr.name,
                    value: attr.value,
                    namespace: attr.namespaceURI,
                    prefix: null
                };
            });
            return attrs;
        },
        getTagName(element) {
            if (element.namespaceURI === 'http://www.w3.org/1999/xhtml') {
                return element.nodeName.toLowerCase();
            }
            else {
                return element.nodeName;
            }
        },
        getNamespaceURI(element) {
            return element.namespaceURI;
        },
        getTextNodeContent(textNode) {
            return textNode.nodeValue;
        },
        getCommentNodeContent(commentNode) {
            return commentNode.nodeValue;
        },
        getDocumentTypeNodeName(doctypeNode) {
            return doctypeNode['x-name'];
        },
        getDocumentTypeNodePublicId(doctypeNode) {
            return doctypeNode['x-publicId'];
        },
        getDocumentTypeNodeSystemId(doctypeNode) {
            return doctypeNode['x-systemId'];
        },
        isTextNode(node) {
            return node.nodeType === 3 /* TEXT_NODE */;
        },
        isCommentNode(node) {
            return node.nodeType === 8 /* COMMENT_NODE */;
        },
        isDocumentTypeNode(node) {
            return node.nodeType === 10 /* DOCUMENT_TYPE_NODE */;
        },
        isElementNode(node) {
            return node.nodeType === 1 /* ELEMENT_NODE */;
        }
    };
    parseOptions = {
        treeAdapter: treeAdapter
    };
    docParser.set(ownerDocument, parseOptions);
    return parseOptions;
}

class MockNode {
    constructor(ownerDocument, nodeType, nodeName, nodeValue) {
        this.ownerDocument = ownerDocument;
        this.nodeType = nodeType;
        this.nodeName = nodeName;
        this.nodeValue = nodeValue;
        this.parentNode = null;
        this.childNodes = [];
    }
    appendChild(newNode) {
        if (newNode.nodeType === 11 /* DOCUMENT_FRAGMENT_NODE */) {
            const nodes = newNode.childNodes.slice();
            for (const child of nodes) {
                this.appendChild(child);
            }
        }
        else {
            newNode.remove();
            newNode.parentNode = this;
            this.childNodes.push(newNode);
            connectNode(this.ownerDocument, newNode);
        }
        return newNode;
    }
    append(...items) {
        items.forEach(item => {
            const isNode = typeof item === 'object' && item !== null && 'nodeType' in item;
            this.appendChild(isNode ? item : this.ownerDocument.createTextNode(String(item)));
        });
    }
    prepend(...items) {
        const firstChild = this.firstChild;
        items.forEach(item => {
            const isNode = typeof item === 'object' && item !== null && 'nodeType' in item;
            this.insertBefore(isNode ? item : this.ownerDocument.createTextNode(String(item)), firstChild);
        });
    }
    cloneNode(deep) {
        throw new Error(`invalid node type to clone: ${this.nodeType}, deep: ${deep}`);
    }
    get firstChild() {
        return this.childNodes[0] || null;
    }
    insertBefore(newNode, referenceNode) {
        if (newNode.nodeType === 11 /* DOCUMENT_FRAGMENT_NODE */) {
            for (let i = 0, ii = newNode.childNodes.length; i < ii; i++) {
                insertBefore(this, newNode.childNodes[i], referenceNode);
            }
        }
        else {
            insertBefore(this, newNode, referenceNode);
        }
        return newNode;
    }
    get isConnected() {
        let node = this;
        while (node != null) {
            if (node.nodeType === 9 /* DOCUMENT_NODE */) {
                return true;
            }
            node = node.parentNode;
            if (node != null && node.nodeType === 11 /* DOCUMENT_FRAGMENT_NODE */) {
                node = node.host;
            }
        }
        return false;
    }
    isSameNode(node) {
        return this === node;
    }
    get lastChild() {
        return this.childNodes[this.childNodes.length - 1] || null;
    }
    get nextSibling() {
        if (this.parentNode != null) {
            const index = this.parentNode.childNodes.indexOf(this) + 1;
            return this.parentNode.childNodes[index] || null;
        }
        return null;
    }
    get parentElement() {
        return this.parentNode || null;
    }
    set parentElement(value) {
        this.parentNode = value;
    }
    get previousSibling() {
        if (this.parentNode != null) {
            const index = this.parentNode.childNodes.indexOf(this) - 1;
            return this.parentNode.childNodes[index] || null;
        }
        return null;
    }
    contains(otherNode) {
        return this.childNodes.includes(otherNode);
    }
    removeChild(childNode) {
        const index = this.childNodes.indexOf(childNode);
        if (index > -1) {
            this.childNodes.splice(index, 1);
            if (this.nodeType === 1 /* ELEMENT_NODE */) {
                const wasConnected = this.isConnected;
                childNode.parentNode = null;
                if (wasConnected === true) {
                    disconnectNode(childNode);
                }
            }
            else {
                childNode.parentNode = null;
            }
        }
        else {
            throw new Error(`node not found within childNodes during removeChild`);
        }
        return childNode;
    }
    remove() {
        if (this.parentNode != null) {
            this.parentNode.removeChild(this);
        }
    }
    replaceChild(newChild, oldChild) {
        if (oldChild.parentNode === this) {
            this.insertBefore(newChild, oldChild);
            oldChild.remove();
            return newChild;
        }
        return null;
    }
    get textContent() {
        return this.nodeValue;
    }
    set textContent(value) {
        this.nodeValue = String(value);
    }
}
MockNode.ELEMENT_NODE = 1;
MockNode.TEXT_NODE = 3;
MockNode.PROCESSING_INSTRUCTION_NODE = 7;
MockNode.COMMENT_NODE = 8;
MockNode.DOCUMENT_NODE = 9;
MockNode.DOCUMENT_TYPE_NODE = 10;
MockNode.DOCUMENT_FRAGMENT_NODE = 11;
class MockNodeList {
    constructor(ownerDocument, childNodes, length) {
        this.ownerDocument = ownerDocument;
        this.childNodes = childNodes;
        this.length = length;
    }
}
class MockElement extends MockNode {
    constructor(ownerDocument, nodeName) {
        super(ownerDocument, 1 /* ELEMENT_NODE */, typeof nodeName === 'string' ? nodeName : null, null);
        this.namespaceURI = null;
    }
    addEventListener(type, handler) {
        addEventListener(this, type, handler);
    }
    attachShadow(_opts) {
        const shadowRoot = this.ownerDocument.createDocumentFragment();
        this.shadowRoot = shadowRoot;
        return shadowRoot;
    }
    get shadowRoot() {
        return this.__shadowRoot || null;
    }
    set shadowRoot(shadowRoot) {
        if (shadowRoot != null) {
            shadowRoot.host = this;
            this.__shadowRoot = shadowRoot;
        }
        else {
            delete this.__shadowRoot;
        }
    }
    get attributes() {
        if (this.__attributeMap == null) {
            this.__attributeMap = new MockAttributeMap();
        }
        return this.__attributeMap;
    }
    set attributes(attrs) {
        this.__attributeMap = attrs;
    }
    get children() {
        return this.childNodes.filter(n => n.nodeType === 1 /* ELEMENT_NODE */);
    }
    get childElementCount() {
        return this.childNodes.filter(n => n.nodeType === 1 /* ELEMENT_NODE */).length;
    }
    get className() { return this.getAttributeNS(null, 'class') || ''; }
    set className(value) { this.setAttributeNS(null, 'class', value); }
    get classList() {
        return new MockClassList(this);
    }
    click() {
        dispatchEvent(this, new MockEvent('click', { bubbles: true, cancelable: true, composed: true }));
    }
    cloneNode(_deep) {
        // implemented on MockElement.prototype from within element.ts
        return null;
    }
    closest(selector) {
        return closest(selector, this);
    }
    get dataset() {
        return dataset(this);
    }
    get dir() { return this.getAttributeNS(null, 'dir') || ''; }
    set dir(value) { this.setAttributeNS(null, 'dir', value); }
    dispatchEvent(ev) {
        return dispatchEvent(this, ev);
    }
    get firstElementChild() {
        return this.children[0] || null;
    }
    getAttribute(attrName) {
        if (attrName === 'style') {
            if (this.__style != null && this.__style.length > 0) {
                return this.style.cssText;
            }
            return null;
        }
        const attr = this.attributes.getNamedItem(attrName);
        if (attr != null) {
            return attr.value;
        }
        return null;
    }
    getAttributeNS(namespaceURI, attrName) {
        const attr = this.attributes.getNamedItemNS(namespaceURI, attrName);
        if (attr != null) {
            return attr.value;
        }
        return null;
    }
    getBoundingClientRect() {
        return { bottom: 0, height: 0, left: 0, right: 0, top: 0, width: 0, x: 0, y: 0 };
    }
    getRootNode(opts) {
        const isComposed = (opts != null && opts.composed === true);
        let node = this;
        while (node.parentNode != null) {
            node = node.parentNode;
            if (isComposed === true && node.parentNode == null && node.host != null) {
                node = node.host;
            }
        }
        return node;
    }
    hasChildNodes() {
        return (this.childNodes.length > 0);
    }
    get id() { return this.getAttributeNS(null, 'id') || ''; }
    set id(value) { this.setAttributeNS(null, 'id', value); }
    get innerHTML() {
        if (this.childNodes.length === 0) {
            return '';
        }
        return serializeNodeToHtml(this, {
            newLines: false,
            indentSpaces: 0
        });
    }
    set innerHTML(html) {
        if (NON_ESCAPABLE_CONTENT.has(this.nodeName) === true) {
            setTextContent(this, html);
        }
        else {
            for (let i = this.childNodes.length - 1; i >= 0; i--) {
                this.removeChild(this.childNodes[i]);
            }
            if (typeof html === 'string') {
                const frag = parseFragmentUtil(this.ownerDocument, html);
                while (frag.childNodes.length > 0) {
                    this.appendChild(frag.childNodes[0]);
                }
            }
        }
    }
    get innerText() {
        const text = [];
        getTextContent(this.childNodes, text);
        return text.join('');
    }
    set innerText(value) {
        setTextContent(this, value);
    }
    hasAttribute(attrName) {
        if (attrName === 'style') {
            return (this.__style != null && this.__style.length > 0);
        }
        return this.getAttribute(attrName) !== null;
    }
    hasAttributeNS(namespaceURI, name) {
        return this.getAttributeNS(namespaceURI, name) !== null;
    }
    get hidden() { return this.hasAttributeNS(null, 'hidden'); }
    set hidden(isHidden) {
        if (isHidden === true) {
            this.setAttributeNS(null, 'hidden', '');
        }
        else {
            this.removeAttributeNS(null, 'hidden');
        }
    }
    get lang() { return this.getAttributeNS(null, 'lang') || ''; }
    set lang(value) { this.setAttributeNS(null, 'lang', value); }
    get lastElementChild() {
        const children = this.children;
        return children[children.length - 1] || null;
    }
    matches(selector) {
        return matches(selector, this);
    }
    get nextElementSibling() {
        const parentElement = this.parentElement;
        if (parentElement != null && (parentElement.nodeType === 1 /* ELEMENT_NODE */ || parentElement.nodeType === 11 /* DOCUMENT_FRAGMENT_NODE */ || parentElement.nodeType === 9 /* DOCUMENT_NODE */)) {
            const children = parentElement.children;
            const index = children.indexOf(this) + 1;
            return parentElement.children[index] || null;
        }
        return null;
    }
    get outerHTML() {
        return serializeNodeToHtml(this, {
            newLines: false,
            outerHtml: true,
            indentSpaces: 0
        });
    }
    get previousElementSibling() {
        const parentElement = this.parentElement;
        if (parentElement != null && (parentElement.nodeType === 1 /* ELEMENT_NODE */ || parentElement.nodeType === 11 /* DOCUMENT_FRAGMENT_NODE */ || parentElement.nodeType === 9 /* DOCUMENT_NODE */)) {
            const children = parentElement.children;
            const index = children.indexOf(this) - 1;
            return parentElement.children[index] || null;
        }
        return null;
    }
    querySelector(selector) {
        return selectOne(selector, this);
    }
    querySelectorAll(selector) {
        return selectAll(selector, this);
    }
    removeAttribute(attrName) {
        if (attrName === 'style') {
            delete this.__style;
        }
        else {
            const attr = this.attributes.getNamedItem(attrName);
            if (attr != null) {
                this.attributes.removeNamedItemNS(attr);
                if (checkAttributeChanged(this) === true) {
                    attributeChanged(this, attrName, attr.value, null);
                }
            }
        }
    }
    removeAttributeNS(namespaceURI, attrName) {
        const attr = this.attributes.getNamedItemNS(namespaceURI, attrName);
        if (attr != null) {
            this.attributes.removeNamedItemNS(attr);
            if (checkAttributeChanged(this) === true) {
                attributeChanged(this, attrName, attr.value, null);
            }
        }
    }
    removeEventListener(type, handler) {
        removeEventListener(this, type, handler);
    }
    setAttribute(attrName, value) {
        if (attrName === 'style') {
            this.style = value;
        }
        else {
            const attributes = this.attributes;
            let attr = attributes.getNamedItem(attrName);
            const checkAttrChanged = checkAttributeChanged(this);
            if (attr != null) {
                if (checkAttrChanged === true) {
                    const oldValue = attr.value;
                    attr.value = value;
                    if (oldValue !== attr.value) {
                        attributeChanged(this, attr.name, oldValue, attr.value);
                    }
                }
                else {
                    attr.value = value;
                }
            }
            else {
                if (attributes.caseInsensitive) {
                    attrName = attrName.toLowerCase();
                }
                attr = new MockAttr(attrName, value);
                attributes.items.push(attr);
                if (checkAttrChanged === true) {
                    attributeChanged(this, attrName, null, attr.value);
                }
            }
        }
    }
    setAttributeNS(namespaceURI, attrName, value) {
        const attributes = this.attributes;
        let attr = attributes.getNamedItemNS(namespaceURI, attrName);
        const checkAttrChanged = checkAttributeChanged(this);
        if (attr != null) {
            if (checkAttrChanged === true) {
                const oldValue = attr.value;
                attr.value = value;
                if (oldValue !== attr.value) {
                    attributeChanged(this, attr.name, oldValue, attr.value);
                }
            }
            else {
                attr.value = value;
            }
        }
        else {
            attr = new MockAttr(attrName, value, namespaceURI);
            attributes.items.push(attr);
            if (checkAttrChanged === true) {
                attributeChanged(this, attrName, null, attr.value);
            }
        }
    }
    get style() {
        if (this.__style == null) {
            this.__style = createCSSStyleDeclaration();
        }
        return this.__style;
    }
    set style(val) {
        if (typeof val === 'string') {
            if (this.__style == null) {
                this.__style = createCSSStyleDeclaration();
            }
            this.__style.cssText = val;
        }
        else {
            this.__style = val;
        }
    }
    get tabIndex() { return parseInt(this.getAttributeNS(null, 'tabindex') || '-1', 10); }
    set tabIndex(value) { this.setAttributeNS(null, 'tabindex', value); }
    get tagName() { return this.nodeName; }
    set tagName(value) { this.nodeName = value; }
    get textContent() {
        const text = [];
        getTextContent(this.childNodes, text);
        return text.join('');
    }
    set textContent(value) {
        setTextContent(this, value);
    }
    get title() { return this.getAttributeNS(null, 'title') || ''; }
    set title(value) { this.setAttributeNS(null, 'title', value); }
    onanimationstart() { }
    onanimationend() { }
    onanimationiteration() { }
    onabort() { }
    onauxclick() { }
    onbeforecopy() { }
    onbeforecut() { }
    onbeforepaste() { }
    onblur() { }
    oncancel() { }
    oncanplay() { }
    oncanplaythrough() { }
    onchange() { }
    onclick() { }
    onclose() { }
    oncontextmenu() { }
    oncopy() { }
    oncuechange() { }
    oncut() { }
    ondblclick() { }
    ondrag() { }
    ondragend() { }
    ondragenter() { }
    ondragleave() { }
    ondragover() { }
    ondragstart() { }
    ondrop() { }
    ondurationchange() { }
    onemptied() { }
    onended() { }
    onerror() { }
    onfocus() { }
    onformdata() { }
    onfullscreenchange() { }
    onfullscreenerror() { }
    ongotpointercapture() { }
    oninput() { }
    oninvalid() { }
    onkeydown() { }
    onkeypress() { }
    onkeyup() { }
    onload() { }
    onloadeddata() { }
    onloadedmetadata() { }
    onloadstart() { }
    onlostpointercapture() { }
    onmousedown() { }
    onmouseenter() { }
    onmouseleave() { }
    onmousemove() { }
    onmouseout() { }
    onmouseover() { }
    onmouseup() { }
    onmousewheel() { }
    onpaste() { }
    onpause() { }
    onplay() { }
    onplaying() { }
    onpointercancel() { }
    onpointerdown() { }
    onpointerenter() { }
    onpointerleave() { }
    onpointermove() { }
    onpointerout() { }
    onpointerover() { }
    onpointerup() { }
    onprogress() { }
    onratechange() { }
    onreset() { }
    onresize() { }
    onscroll() { }
    onsearch() { }
    onseeked() { }
    onseeking() { }
    onselect() { }
    onselectstart() { }
    onstalled() { }
    onsubmit() { }
    onsuspend() { }
    ontimeupdate() { }
    ontoggle() { }
    onvolumechange() { }
    onwaiting() { }
    onwebkitfullscreenchange() { }
    onwebkitfullscreenerror() { }
    onwheel() { }
    toString(opts) {
        return serializeNodeToHtml(this, opts);
    }
}
function resetElement(elm) {
    resetEventListeners(elm);
    delete elm.__attributeMap;
    delete elm.__shadowRoot;
    delete elm.__style;
}
function insertBefore(parentNode, newNode, referenceNode) {
    if (newNode !== referenceNode) {
        newNode.remove();
        newNode.parentNode = parentNode;
        newNode.ownerDocument = parentNode.ownerDocument;
        if (referenceNode != null) {
            const index = parentNode.childNodes.indexOf(referenceNode);
            if (index > -1) {
                parentNode.childNodes.splice(index, 0, newNode);
            }
            else {
                throw new Error(`referenceNode not found in parentNode.childNodes`);
            }
        }
        else {
            parentNode.childNodes.push(newNode);
        }
        connectNode(parentNode.ownerDocument, newNode);
    }
    return newNode;
}
class MockHTMLElement extends MockElement {
    constructor(ownerDocument, nodeName) {
        super(ownerDocument, typeof nodeName === 'string' ? nodeName.toUpperCase() : null);
        this.namespaceURI = 'http://www.w3.org/1999/xhtml';
    }
    get tagName() { return this.nodeName; }
    set tagName(value) { this.nodeName = value; }
    get attributes() {
        if (this.__attributeMap == null) {
            this.__attributeMap = new MockAttributeMap(true);
        }
        return this.__attributeMap;
    }
    set attributes(attrs) {
        this.__attributeMap = attrs;
    }
}
class MockTextNode extends MockNode {
    constructor(ownerDocument, text) {
        super(ownerDocument, 3 /* TEXT_NODE */, "#text" /* TEXT_NODE */, text);
    }
    cloneNode(_deep) {
        return new MockTextNode(null, this.nodeValue);
    }
    get textContent() {
        return this.nodeValue;
    }
    set textContent(text) {
        this.nodeValue = text;
    }
    get data() {
        return this.nodeValue;
    }
    set data(text) {
        this.nodeValue = text;
    }
    get wholeText() {
        if (this.parentNode != null) {
            const text = [];
            for (let i = 0, ii = this.parentNode.childNodes.length; i < ii; i++) {
                const childNode = this.parentNode.childNodes[i];
                if (childNode.nodeType === 3 /* TEXT_NODE */) {
                    text.push(childNode.nodeValue);
                }
            }
            return text.join('');
        }
        return this.nodeValue;
    }
}
function getTextContent(childNodes, text) {
    for (let i = 0, ii = childNodes.length; i < ii; i++) {
        const childNode = childNodes[i];
        if (childNode.nodeType === 3 /* TEXT_NODE */) {
            text.push(childNode.nodeValue);
        }
        else if (childNode.nodeType === 1 /* ELEMENT_NODE */) {
            getTextContent(childNode.childNodes, text);
        }
    }
}
function setTextContent(elm, text) {
    for (let i = elm.childNodes.length - 1; i >= 0; i--) {
        elm.removeChild(elm.childNodes[i]);
    }
    const textNode = new MockTextNode(elm.ownerDocument, text);
    elm.appendChild(textNode);
}

class MockComment extends MockNode {
    constructor(ownerDocument, data) {
        super(ownerDocument, 8 /* COMMENT_NODE */, "#comment" /* COMMENT_NODE */, data);
    }
    cloneNode(_deep) {
        return new MockComment(null, this.nodeValue);
    }
    get textContent() {
        return this.nodeValue;
    }
    set textContent(text) {
        this.nodeValue = text;
    }
}

class MockDocumentFragment extends MockHTMLElement {
    constructor(ownerDocument) {
        super(ownerDocument, null);
        this.nodeName = "#document-fragment" /* DOCUMENT_FRAGMENT_NODE */;
        this.nodeType = 11 /* DOCUMENT_FRAGMENT_NODE */;
    }
    cloneNode(deep) {
        const cloned = new MockDocumentFragment(null);
        if (deep) {
            for (let i = 0, ii = this.childNodes.length; i < ii; i++) {
                const childNode = this.childNodes[i];
                if (childNode.nodeType === 1 /* ELEMENT_NODE */ || childNode.nodeType === 3 /* TEXT_NODE */ || childNode.nodeType === 8 /* COMMENT_NODE */) {
                    const clonedChildNode = this.childNodes[i].cloneNode(true);
                    cloned.appendChild(clonedChildNode);
                }
            }
        }
        return cloned;
    }
}

class MockDocumentTypeNode extends MockHTMLElement {
    constructor(ownerDocument) {
        super(ownerDocument, '!DOCTYPE');
        this.nodeType = 10 /* DOCUMENT_TYPE_NODE */;
        this.setAttribute('html', '');
    }
}

const URL_ = /*@__PURE__*/(function(){
  if (typeof URL === 'function') {
    return URL;
  }
  const requireFunc = typeof __webpack_require__ === 'function' ? __non_webpack_require__ : require;
  if (typeof requireFunc === 'function') {
    try {
      return requireFunc('url').URL;
    } catch (e) {}
  }
  return function() {}
})();

function createElement(ownerDocument, tagName) {
    if (typeof tagName !== 'string' || tagName === '' || !(/^[a-z0-9-_:]+$/i.test(tagName))) {
        throw new Error(`The tag name provided (${tagName}) is not a valid name.`);
    }
    tagName = tagName.toLowerCase();
    switch (tagName) {
        case 'a':
            return new MockAnchorElement(ownerDocument);
        case 'base':
            return new MockBaseElement(ownerDocument);
        case 'button':
            return new MockButtonElement(ownerDocument);
        case 'form':
            return new MockFormElement(ownerDocument);
        case 'img':
            return new MockImgElement(ownerDocument);
        case 'input':
            return new MockInputElement(ownerDocument);
        case 'link':
            return new MockLinkElement(ownerDocument);
        case 'meta':
            return new MockMetaElement(ownerDocument);
        case 'script':
            return new MockScriptElement(ownerDocument);
        case 'template':
            return new MockTemplateElement(ownerDocument);
        case 'title':
            return new MockTitleElement(ownerDocument);
        case 'canvas':
            return new MockCanvasElement(ownerDocument);
    }
    if (ownerDocument != null && tagName.includes('-')) {
        const win = ownerDocument.defaultView;
        if (win != null && win.customElements != null) {
            return createCustomElement(win.customElements, ownerDocument, tagName);
        }
    }
    return new MockHTMLElement(ownerDocument, tagName);
}
function createElementNS(ownerDocument, namespaceURI, tagName) {
    if (namespaceURI === 'http://www.w3.org/1999/xhtml') {
        return createElement(ownerDocument, tagName);
    }
    else if (namespaceURI === 'http://www.w3.org/2000/svg') {
        return new MockSVGElement(ownerDocument, tagName);
    }
    else {
        return new MockElement(ownerDocument, tagName);
    }
}
class MockAnchorElement extends MockHTMLElement {
    constructor(ownerDocument) {
        super(ownerDocument, 'a');
    }
    get href() {
        return fullUrl(this, 'href');
    }
    set href(value) {
        this.setAttribute('href', value);
    }
}
class MockButtonElement extends MockHTMLElement {
    constructor(ownerDocument) {
        super(ownerDocument, 'button');
    }
}
patchPropAttributes(MockButtonElement.prototype, {
    type: String
}, {
    type: 'submit'
});
class MockImgElement extends MockHTMLElement {
    constructor(ownerDocument) {
        super(ownerDocument, 'img');
    }
    get src() {
        return fullUrl(this, 'src');
    }
    set src(value) {
        this.setAttribute('src', value);
    }
}
patchPropAttributes(MockImgElement.prototype, {
    height: Number,
    width: Number
});
class MockInputElement extends MockHTMLElement {
    constructor(ownerDocument) {
        super(ownerDocument, 'input');
    }
    get list() {
        const listId = this.getAttribute('list');
        if (listId) {
            return this.ownerDocument.getElementById(listId);
        }
        return null;
    }
}
patchPropAttributes(MockInputElement.prototype, {
    accept: String,
    autocomplete: String,
    autofocus: Boolean,
    capture: String,
    checked: Boolean,
    disabled: Boolean,
    form: String,
    formaction: String,
    formenctype: String,
    formmethod: String,
    formnovalidate: String,
    formtarget: String,
    height: Number,
    inputmode: String,
    max: String,
    maxLength: Number,
    min: String,
    minLength: Number,
    multiple: Boolean,
    name: String,
    pattern: String,
    placeholder: String,
    required: Boolean,
    readOnly: Boolean,
    size: Number,
    spellCheck: Boolean,
    src: String,
    step: String,
    type: String,
    value: String,
    width: Number
}, {
    type: 'text'
});
class MockFormElement extends MockHTMLElement {
    constructor(ownerDocument) {
        super(ownerDocument, 'form');
    }
}
patchPropAttributes(MockFormElement.prototype, {
    name: String
});
class MockLinkElement extends MockHTMLElement {
    constructor(ownerDocument) {
        super(ownerDocument, 'link');
    }
    get href() {
        return fullUrl(this, 'href');
    }
    set href(value) {
        this.setAttribute('href', value);
    }
}
patchPropAttributes(MockLinkElement.prototype, {
    crossorigin: String,
    media: String,
    rel: String,
    type: String
});
class MockMetaElement extends MockHTMLElement {
    constructor(ownerDocument) {
        super(ownerDocument, 'meta');
    }
}
patchPropAttributes(MockMetaElement.prototype, {
    charset: String,
    content: String,
    name: String
});
class MockScriptElement extends MockHTMLElement {
    constructor(ownerDocument) {
        super(ownerDocument, 'script');
    }
    get src() {
        return fullUrl(this, 'src');
    }
    set src(value) {
        this.setAttribute('src', value);
    }
}
patchPropAttributes(MockScriptElement.prototype, {
    type: String
});
class MockSVGElement extends MockElement {
    // SVGElement properties and methods
    get ownerSVGElement() { return null; }
    get viewportElement() { return null; }
    focus() { }
    onunload() { }
    // SVGGeometryElement properties and methods
    get pathLength() { return 0; }
    isPointInFill(_pt) { return false; }
    isPointInStroke(_pt) { return false; }
    getTotalLength() { return 0; }
}
class MockBaseElement extends MockHTMLElement {
    constructor(ownerDocument) {
        super(ownerDocument, 'base');
    }
    get href() {
        return fullUrl(this, 'href');
    }
    set href(value) {
        this.setAttribute('href', value);
    }
}
class MockTemplateElement extends MockHTMLElement {
    constructor(ownerDocument) {
        super(ownerDocument, 'template');
        this.content = new MockDocumentFragment(ownerDocument);
    }
    get innerHTML() {
        return this.content.innerHTML;
    }
    set innerHTML(html) {
        this.content.innerHTML = html;
    }
    cloneNode(deep) {
        const cloned = new MockTemplateElement(null);
        cloned.attributes = cloneAttributes(this.attributes);
        const styleCssText = this.getAttribute('style');
        if (styleCssText != null && styleCssText.length > 0) {
            cloned.setAttribute('style', styleCssText);
        }
        cloned.content = this.content.cloneNode(deep);
        if (deep) {
            for (let i = 0, ii = this.childNodes.length; i < ii; i++) {
                const clonedChildNode = this.childNodes[i].cloneNode(true);
                cloned.appendChild(clonedChildNode);
            }
        }
        return cloned;
    }
}
class MockTitleElement extends MockHTMLElement {
    constructor(ownerDocument) {
        super(ownerDocument, 'title');
    }
    get text() {
        return this.textContent;
    }
    set text(value) {
        this.textContent = value;
    }
}
class MockCanvasElement extends MockHTMLElement {
    constructor(ownerDocument) {
        super(ownerDocument, 'canvas');
    }
    getContext() {
        return {
            fillRect: function () { return; },
            clearRect: function () { return; },
            getImageData: function (_, __, w, h) {
                return {
                    data: new Array(w * h * 4)
                };
            },
            putImageData: function () { return; },
            createImageData: function () { return []; },
            setTransform: function () { return; },
            drawImage: function () { return; },
            save: function () { return; },
            fillText: function () { return; },
            restore: function () { return; },
            beginPath: function () { return; },
            moveTo: function () { return; },
            lineTo: function () { return; },
            closePath: function () { return; },
            stroke: function () { return; },
            translate: function () { return; },
            scale: function () { return; },
            rotate: function () { return; },
            arc: function () { return; },
            fill: function () { return; },
            measureText: function () {
                return { width: 0 };
            },
            transform: function () { return; },
            rect: function () { return; },
            clip: function () { return; },
        };
    }
}
function fullUrl(elm, attrName) {
    const val = elm.getAttribute(attrName) || '';
    if (elm.ownerDocument != null) {
        const win = elm.ownerDocument.defaultView;
        if (win != null) {
            const loc = win.location;
            if (loc != null) {
                const url = new URL_(val, loc.href);
                return url.href;
            }
        }
    }
    return val.replace(/\'|\"/g, '').trim();
}
function patchPropAttributes(prototype, attrs, defaults = {}) {
    Object.keys(attrs).forEach(propName => {
        const attr = attrs[propName];
        const defaultValue = defaults[propName];
        if (attr === Boolean) {
            Object.defineProperty(prototype, propName, {
                get() {
                    return this.hasAttribute(propName);
                },
                set(value) {
                    if (value) {
                        this.setAttribute(propName, '');
                    }
                    else {
                        this.removeAttribute(propName);
                    }
                }
            });
        }
        else if (attr === Number) {
            Object.defineProperty(prototype, propName, {
                get() {
                    const value = this.getAttribute(propName);
                    return (value
                        ? parseInt(value, 10)
                        : defaultValue === undefined ? 0 : defaultValue);
                },
                set(value) {
                    this.setAttribute(propName, value);
                }
            });
        }
        else {
            Object.defineProperty(prototype, propName, {
                get() {
                    return this.hasAttribute(propName)
                        ? this.getAttribute(propName)
                        : defaultValue || '';
                },
                set(value) {
                    this.setAttribute(propName, value);
                }
            });
        }
    });
}
MockElement.prototype.cloneNode = function (deep) {
    // because we're creating elements, which extending specific HTML base classes there
    // is a MockElement circular reference that bundling has trouble dealing with so
    // the fix is to add cloneNode() to MockElement's prototype after the HTML classes
    const cloned = createElement(null, this.nodeName);
    cloned.attributes = cloneAttributes(this.attributes);
    const styleCssText = this.getAttribute('style');
    if (styleCssText != null && styleCssText.length > 0) {
        cloned.setAttribute('style', styleCssText);
    }
    if (deep) {
        for (let i = 0, ii = this.childNodes.length; i < ii; i++) {
            const clonedChildNode = this.childNodes[i].cloneNode(true);
            cloned.appendChild(clonedChildNode);
        }
    }
    return cloned;
};

let sharedDocument;
function parseHtmlToDocument(html, ownerDocument = null) {
    if (ownerDocument == null) {
        if (sharedDocument == null) {
            sharedDocument = new MockDocument();
        }
        ownerDocument = sharedDocument;
    }
    return parseDocumentUtil(ownerDocument, html);
}
function parseHtmlToFragment(html, ownerDocument = null) {
    if (ownerDocument == null) {
        if (sharedDocument == null) {
            sharedDocument = new MockDocument();
        }
        ownerDocument = sharedDocument;
    }
    return parseFragmentUtil(ownerDocument, html);
}

const consoleNoop = () => { };
function createConsole() {
    return {
        debug: consoleNoop,
        error: consoleNoop,
        info: consoleNoop,
        log: consoleNoop,
        warn: consoleNoop,
        dir: consoleNoop,
        dirxml: consoleNoop,
        table: consoleNoop,
        trace: consoleNoop,
        group: consoleNoop,
        groupCollapsed: consoleNoop,
        groupEnd: consoleNoop,
        clear: consoleNoop,
        count: consoleNoop,
        countReset: consoleNoop,
        assert: consoleNoop,
        profile: consoleNoop,
        profileEnd: consoleNoop,
        time: consoleNoop,
        timeLog: consoleNoop,
        timeEnd: consoleNoop,
        timeStamp: consoleNoop,
        context: consoleNoop,
        memory: consoleNoop
    };
}

class MockHistory {
    constructor() {
        this.items = [];
    }
    get length() {
        return this.items.length;
    }
    back() {
        this.go(-1);
    }
    forward() {
        this.go(1);
    }
    go(_value) {
        //
    }
    pushState(_state, _title, _url) {
        //
    }
    replaceState(_state, _title, _url) {
        //
    }
}

class MockIntersectionObserver {
    constructor() { }
    disconnect() { }
    observe() { }
    takeRecords() {
        return [];
    }
    unobserve() { }
}

class MockLocation {
    constructor() {
        this.ancestorOrigins = null;
        this.protocol = '';
        this.host = '';
        this.hostname = '';
        this.port = '';
        this.pathname = '';
        this.search = '';
        this.hash = '';
        this.username = '';
        this.password = '';
        this.origin = '';
        this._href = '';
    }
    get href() {
        return this._href;
    }
    set href(value) {
        const url = new URL_(value, 'http://mockdoc.stenciljs.com');
        this._href = url.href;
        this.protocol = url.protocol;
        this.host = url.host;
        this.port = url.port;
        this.pathname = url.pathname;
        this.search = url.search;
        this.hash = url.hash;
        this.username = url.username;
        this.password = url.password;
        this.origin = url.origin;
    }
    assign(_url) {
        //
    }
    reload(_forcedReload) {
        //
    }
    replace(_url) {
        //
    }
    toString() {
        return this.href;
    }
}

class MockNavigator {
    constructor() {
        this.appCodeName = 'MockNavigator';
        this.appName = 'MockNavigator';
        this.appVersion = 'MockNavigator';
        this.platform = 'MockNavigator';
        this.userAgent = 'MockNavigator';
    }
}

/**
 * https://developer.mozilla.org/en-US/docs/Web/API/Performance
 */
class MockPerformance {
    constructor() {
        this.timeOrigin = Date.now();
    }
    addEventListener() {
        //
    }
    clearMarks() {
        //
    }
    clearMeasures() {
        //
    }
    clearResourceTimings() {
        //
    }
    dispatchEvent() {
        return true;
    }
    getEntries() {
        return [];
    }
    getEntriesByName() {
        return [];
    }
    getEntriesByType() {
        return [];
    }
    mark() {
        //
    }
    measure() {
        //
    }
    get navigation() {
        return {};
    }
    now() {
        return Date.now() - this.timeOrigin;
    }
    get onresourcetimingbufferfull() {
        return null;
    }
    removeEventListener() {
        //
    }
    setResourceTimingBufferSize() {
        //
    }
    get timing() {
        return {};
    }
    toJSON() {
        //
    }
}
function resetPerformance(perf) {
    if (perf != null) {
        try {
            perf.timeOrigin = Date.now();
        }
        catch (e) { }
    }
}

class MockStorage {
    constructor() {
        this.items = new Map();
    }
    key(_value) {
        //
    }
    getItem(key) {
        key = String(key);
        if (this.items.has(key)) {
            return this.items.get(key);
        }
        return null;
    }
    setItem(key, value) {
        if (value == null) {
            value = 'null';
        }
        this.items.set(String(key), String(value));
    }
    removeItem(key) {
        this.items.delete(String(key));
    }
    clear() {
        this.items.clear();
    }
}

const nativeClearInterval = clearInterval;
const nativeClearTimeout = clearTimeout;
const nativeSetInterval = setInterval;
const nativeSetTimeout = setTimeout;
const nativeURL = URL_;
class MockWindow {
    constructor(html = null) {
        if (html !== false) {
            this.document = new MockDocument(html, this);
        }
        else {
            this.document = null;
        }
        this.performance = new MockPerformance();
        this.customElements = new MockCustomElementRegistry(this);
        this.console = createConsole();
        resetWindowDefaults(this);
        resetWindowDimensions(this);
    }
    addEventListener(type, handler) {
        addEventListener(this, type, handler);
    }
    alert(msg) {
        if (this.console) {
            this.console.debug(msg);
        }
        else {
            console.debug(msg);
        }
    }
    blur() { }
    cancelAnimationFrame(id) {
        this.__clearTimeout(id);
    }
    cancelIdleCallback(id) {
        this.__clearTimeout(id);
    }
    clearInterval(id) {
        this.__clearInterval(id);
    }
    clearTimeout(id) {
        this.__clearTimeout(id);
    }
    close() {
        resetWindow(this);
    }
    confirm() {
        return false;
    }
    get CSS() {
        return {
            supports: () => true
        };
    }
    get CustomEvent() {
        if (this.__customEventClass != null) {
            return this.__customEventClass;
        }
        return MockCustomEvent;
    }
    set CustomEvent(custEvClass) {
        this.__customEventClass = custEvClass;
    }
    dispatchEvent(ev) {
        return dispatchEvent(this, ev);
    }
    get Element() {
        if (this.__elementCstr == null) {
            const ownerDocument = this.document;
            this.__elementCstr = class extends MockElement {
                constructor() {
                    super(ownerDocument, '');
                    throw (new Error('Illegal constructor: cannot construct Element'));
                }
            };
        }
        return this.__elementCstr;
    }
    get Event() {
        if (this.__eventClass != null) {
            return this.__eventClass;
        }
        return MockEvent;
    }
    set Event(ev) {
        this.__eventClass = ev;
    }
    focus() { }
    getComputedStyle(_) {
        return {
            cssText: '',
            length: 0,
            parentRule: null,
            getPropertyPriority() {
                return null;
            },
            getPropertyValue() {
                return '';
            },
            item() {
                return null;
            },
            removeProperty() {
                return null;
            },
            setProperty() {
                return null;
            }
        };
    }
    get globalThis() {
        return this;
    }
    get history() {
        if (this.__history == null) {
            this.__history = new MockHistory();
        }
        return this.__history;
    }
    set history(hsty) {
        this.__history = hsty;
    }
    get JSON() {
        return JSON;
    }
    get KeyboardEvent() {
        if (this.__keyboardEventClass != null) {
            return this.__keyboardEventClass;
        }
        return MockKeyboardEvent;
    }
    set KeyboardEvent(kbEvClass) {
        this.__keyboardEventClass = kbEvClass;
    }
    get HTMLElement() {
        if (this.__htmlElementCstr == null) {
            const ownerDocument = this.document;
            this.__htmlElementCstr = class extends MockHTMLElement {
                constructor() {
                    super(ownerDocument, '');
                    const observedAttributes = this.constructor.observedAttributes;
                    if (Array.isArray(observedAttributes) && typeof this.attributeChangedCallback === 'function') {
                        observedAttributes.forEach(attrName => {
                            const attrValue = this.getAttribute(attrName);
                            if (attrValue != null) {
                                this.attributeChangedCallback(attrName, null, attrValue);
                            }
                        });
                    }
                }
            };
        }
        return this.__htmlElementCstr;
    }
    get IntersectionObserver() {
        return MockIntersectionObserver;
    }
    get localStorage() {
        if (this.__localStorage == null) {
            this.__localStorage = new MockStorage();
        }
        return this.__localStorage;
    }
    set localStorage(locStorage) {
        this.__localStorage = locStorage;
    }
    get location() {
        if (this.__location == null) {
            this.__location = new MockLocation();
        }
        return this.__location;
    }
    set location(val) {
        if (typeof val === 'string') {
            if (this.__location == null) {
                this.__location = new MockLocation();
            }
            this.__location.href = val;
        }
        else {
            this.__location = val;
        }
    }
    matchMedia() {
        return {
            matches: false
        };
    }
    get MouseEvent() {
        if (this.__mouseEventClass != null) {
            return this.__mouseEventClass;
        }
        return MockMouseEvent;
    }
    set MouseEvent(mouseEvClass) {
        this.__mouseEventClass = mouseEvClass;
    }
    get Node() {
        if (this.__nodeCstr == null) {
            const ownerDocument = this.document;
            this.__nodeCstr = class extends MockNode {
                constructor() {
                    super(ownerDocument, 0, 'test', '');
                    throw (new Error('Illegal constructor: cannot construct Node'));
                }
            };
        }
        return this.__nodeCstr;
    }
    get NodeList() {
        if (this.__nodeListCstr == null) {
            const ownerDocument = this.document;
            this.__nodeListCstr = class extends MockNodeList {
                constructor() {
                    super(ownerDocument, [], 0);
                    throw (new Error('Illegal constructor: cannot construct NodeList'));
                }
            };
        }
        return this.__nodeListCstr;
    }
    get navigator() {
        if (this.__navigator == null) {
            this.__navigator = new MockNavigator();
        }
        return this.__navigator;
    }
    set navigator(nav) {
        this.__navigator = nav;
    }
    get parent() {
        return null;
    }
    prompt() {
        return '';
    }
    open() {
        return null;
    }
    get origin() {
        return this.location.origin;
    }
    removeEventListener(type, handler) {
        removeEventListener(this, type, handler);
    }
    requestAnimationFrame(callback) {
        return this.setTimeout(() => {
            callback(Date.now());
        }, 0);
    }
    requestIdleCallback(callback) {
        return this.setTimeout(() => {
            callback({
                didTimeout: false,
                timeRemaining: () => 0
            });
        }, 0);
    }
    scroll(_x, _y) { }
    scrollBy(_x, _y) { }
    scrollTo(_x, _y) { }
    get self() {
        return this;
    }
    get sessionStorage() {
        if (this.__sessionStorage == null) {
            this.__sessionStorage = new MockStorage();
        }
        return this.__sessionStorage;
    }
    set sessionStorage(locStorage) {
        this.__sessionStorage = locStorage;
    }
    setInterval(callback, ms, ...args) {
        if (this.__timeouts == null) {
            this.__timeouts = new Set();
        }
        ms = Math.min(ms, this.__maxTimeout);
        if (this.__allowInterval) {
            const intervalId = this.__setInterval(() => {
                this.__timeouts.delete(intervalId);
                try {
                    callback(...args);
                }
                catch (e) {
                    if (this.console) {
                        this.console.error(e);
                    }
                    else {
                        console.error(e);
                    }
                }
            }, ms);
            this.__timeouts.add(intervalId);
            return intervalId;
        }
        const timeoutId = this.__setTimeout(() => {
            this.__timeouts.delete(timeoutId);
            try {
                callback(...args);
            }
            catch (e) {
                if (this.console) {
                    this.console.error(e);
                }
                else {
                    console.error(e);
                }
            }
        }, ms);
        this.__timeouts.add(timeoutId);
        return timeoutId;
    }
    setTimeout(callback, ms, ...args) {
        if (this.__timeouts == null) {
            this.__timeouts = new Set();
        }
        ms = Math.min(ms, this.__maxTimeout);
        const timeoutId = this.__setTimeout(() => {
            this.__timeouts.delete(timeoutId);
            try {
                callback(...args);
            }
            catch (e) {
                if (this.console) {
                    this.console.error(e);
                }
                else {
                    console.error(e);
                }
            }
        }, ms);
        this.__timeouts.add(timeoutId);
        return timeoutId;
    }
    get top() {
        return this;
    }
    get window() {
        return this;
    }
    onanimationstart() { }
    onanimationend() { }
    onanimationiteration() { }
    onabort() { }
    onauxclick() { }
    onbeforecopy() { }
    onbeforecut() { }
    onbeforepaste() { }
    onblur() { }
    oncancel() { }
    oncanplay() { }
    oncanplaythrough() { }
    onchange() { }
    onclick() { }
    onclose() { }
    oncontextmenu() { }
    oncopy() { }
    oncuechange() { }
    oncut() { }
    ondblclick() { }
    ondrag() { }
    ondragend() { }
    ondragenter() { }
    ondragleave() { }
    ondragover() { }
    ondragstart() { }
    ondrop() { }
    ondurationchange() { }
    onemptied() { }
    onended() { }
    onerror() { }
    onfocus() { }
    onformdata() { }
    onfullscreenchange() { }
    onfullscreenerror() { }
    ongotpointercapture() { }
    oninput() { }
    oninvalid() { }
    onkeydown() { }
    onkeypress() { }
    onkeyup() { }
    onload() { }
    onloadeddata() { }
    onloadedmetadata() { }
    onloadstart() { }
    onlostpointercapture() { }
    onmousedown() { }
    onmouseenter() { }
    onmouseleave() { }
    onmousemove() { }
    onmouseout() { }
    onmouseover() { }
    onmouseup() { }
    onmousewheel() { }
    onpaste() { }
    onpause() { }
    onplay() { }
    onplaying() { }
    onpointercancel() { }
    onpointerdown() { }
    onpointerenter() { }
    onpointerleave() { }
    onpointermove() { }
    onpointerout() { }
    onpointerover() { }
    onpointerup() { }
    onprogress() { }
    onratechange() { }
    onreset() { }
    onresize() { }
    onscroll() { }
    onsearch() { }
    onseeked() { }
    onseeking() { }
    onselect() { }
    onselectstart() { }
    onstalled() { }
    onsubmit() { }
    onsuspend() { }
    ontimeupdate() { }
    ontoggle() { }
    onvolumechange() { }
    onwaiting() { }
    onwebkitfullscreenchange() { }
    onwebkitfullscreenerror() { }
    onwheel() { }
}
function resetWindowDefaults(win) {
    win.__clearInterval = nativeClearInterval;
    win.__clearTimeout = nativeClearTimeout;
    win.__setInterval = nativeSetInterval;
    win.__setTimeout = nativeSetTimeout;
    win.__maxTimeout = 30000;
    win.__allowInterval = true;
    win.URL = nativeURL;
}
function cloneWindow(srcWin) {
    if (srcWin == null) {
        return null;
    }
    const clonedWin = new MockWindow(false);
    if (srcWin.document != null) {
        const clonedDoc = new MockDocument(false, clonedWin);
        clonedWin.document = clonedDoc;
        clonedDoc.documentElement = srcWin.document.documentElement.cloneNode(true);
    }
    else {
        clonedWin.document = new MockDocument(null, clonedWin);
    }
    return clonedWin;
}
function cloneDocument(srcDoc) {
    if (srcDoc == null) {
        return null;
    }
    const dstWin = cloneWindow(srcDoc.defaultView);
    return dstWin.document;
}
/**
 * Constrain setTimeout() to 1ms, but still async. Also
 * only allow setInterval() to fire once, also constrained to 1ms.
 */
function constrainTimeouts(win) {
    win.__allowInterval = false;
    win.__maxTimeout = 0;
}
function resetWindow(win) {
    if (win != null) {
        if (win.__timeouts) {
            win.__timeouts.forEach(timeoutId => {
                nativeClearInterval(timeoutId);
                nativeClearTimeout(timeoutId);
            });
            win.__timeouts.clear();
        }
        if (win.customElements && win.customElements.clear) {
            win.customElements.clear();
        }
        resetDocument(win.document);
        resetPerformance(win.performance);
        for (const key in win) {
            if (win.hasOwnProperty(key) && key !== 'document' && key !== 'performance' && key !== 'customElements') {
                delete win[key];
            }
        }
        resetWindowDefaults(win);
        resetWindowDimensions(win);
        resetEventListeners(win);
        if (win.document != null) {
            try {
                win.document.defaultView = win;
            }
            catch (e) { }
        }
    }
}
function resetWindowDimensions(win) {
    try {
        win.devicePixelRatio = 1;
        win.innerHeight = 768;
        win.innerWidth = 1366;
        win.pageXOffset = 0;
        win.pageYOffset = 0;
        win.screenLeft = 0;
        win.screenTop = 0;
        win.screenX = 0;
        win.screenY = 0;
        win.scrollX = 0;
        win.scrollY = 0;
        win.screen = {
            availHeight: win.innerHeight,
            availLeft: 0,
            availTop: 0,
            availWidth: win.innerWidth,
            colorDepth: 24,
            height: win.innerHeight,
            keepAwake: false,
            orientation: {
                angle: 0,
                type: 'portrait-primary'
            },
            pixelDepth: 24,
            width: win.innerWidth
        };
    }
    catch (e) { }
}

class MockDocument extends MockHTMLElement {
    constructor(html = null, win = null) {
        super(null, null);
        this.nodeName = "#document" /* DOCUMENT_NODE */;
        this.nodeType = 9 /* DOCUMENT_NODE */;
        this.defaultView = win;
        this.cookie = '';
        this.referrer = '';
        this.appendChild(this.createDocumentTypeNode());
        if (typeof html === 'string') {
            const parsedDoc = parseDocumentUtil(this, html);
            const documentElement = parsedDoc.children.find(elm => elm.nodeName === 'HTML');
            if (documentElement != null) {
                this.appendChild(documentElement);
                setOwnerDocument(documentElement, this);
            }
        }
        else if (html !== false) {
            const documentElement = new MockHTMLElement(this, 'html');
            this.appendChild(documentElement);
            documentElement.appendChild(new MockHTMLElement(this, 'head'));
            documentElement.appendChild(new MockHTMLElement(this, 'body'));
        }
    }
    get location() {
        if (this.defaultView != null) {
            return this.defaultView.location;
        }
        return null;
    }
    set location(val) {
        if (this.defaultView != null) {
            this.defaultView.location = val;
        }
    }
    get baseURI() {
        const baseNode = this.head.childNodes.find(node => node.nodeName === 'BASE');
        if (baseNode) {
            return baseNode.href;
        }
        return this.URL;
    }
    get URL() {
        return this.location.href;
    }
    get styleSheets() {
        return this.querySelectorAll('style');
    }
    get scripts() {
        return this.querySelectorAll('script');
    }
    get forms() {
        return this.querySelectorAll('form');
    }
    get images() {
        return this.querySelectorAll('img');
    }
    get scrollingElement() {
        return this.documentElement;
    }
    get documentElement() {
        for (let i = this.childNodes.length - 1; i >= 0; i--) {
            if (this.childNodes[i].nodeName === 'HTML') {
                return this.childNodes[i];
            }
        }
        const documentElement = new MockHTMLElement(this, 'html');
        this.appendChild(documentElement);
        return documentElement;
    }
    set documentElement(documentElement) {
        for (let i = this.childNodes.length - 1; i >= 0; i--) {
            if (this.childNodes[i].nodeType !== 10 /* DOCUMENT_TYPE_NODE */) {
                this.childNodes[i].remove();
            }
        }
        if (documentElement != null) {
            this.appendChild(documentElement);
            setOwnerDocument(documentElement, this);
        }
    }
    get head() {
        const documentElement = this.documentElement;
        for (let i = 0; i < documentElement.childNodes.length; i++) {
            if (documentElement.childNodes[i].nodeName === 'HEAD') {
                return documentElement.childNodes[i];
            }
        }
        const head = new MockHTMLElement(this, 'head');
        documentElement.insertBefore(head, documentElement.firstChild);
        return head;
    }
    set head(head) {
        const documentElement = this.documentElement;
        for (let i = documentElement.childNodes.length - 1; i >= 0; i--) {
            if (documentElement.childNodes[i].nodeName === 'HEAD') {
                documentElement.childNodes[i].remove();
            }
        }
        if (head != null) {
            documentElement.insertBefore(head, documentElement.firstChild);
            setOwnerDocument(head, this);
        }
    }
    get body() {
        const documentElement = this.documentElement;
        for (let i = documentElement.childNodes.length - 1; i >= 0; i--) {
            if (documentElement.childNodes[i].nodeName === 'BODY') {
                return documentElement.childNodes[i];
            }
        }
        const body = new MockHTMLElement(this, 'body');
        documentElement.appendChild(body);
        return body;
    }
    set body(body) {
        const documentElement = this.documentElement;
        for (let i = documentElement.childNodes.length - 1; i >= 0; i--) {
            if (documentElement.childNodes[i].nodeName === 'BODY') {
                documentElement.childNodes[i].remove();
            }
        }
        if (body != null) {
            documentElement.appendChild(body);
            setOwnerDocument(body, this);
        }
    }
    appendChild(newNode) {
        newNode.remove();
        newNode.parentNode = this;
        this.childNodes.push(newNode);
        return newNode;
    }
    createComment(data) {
        return new MockComment(this, data);
    }
    createAttribute(attrName) {
        return new MockAttr(attrName.toLowerCase(), '');
    }
    createAttributeNS(namespaceURI, attrName) {
        return new MockAttr(attrName, '', namespaceURI);
    }
    createElement(tagName) {
        if (tagName === "#document" /* DOCUMENT_NODE */) {
            const doc = new MockDocument(false);
            doc.nodeName = tagName;
            doc.parentNode = null;
            return doc;
        }
        return createElement(this, tagName);
    }
    createElementNS(namespaceURI, tagName) {
        const elmNs = createElementNS(this, namespaceURI, tagName);
        elmNs.namespaceURI = namespaceURI;
        return elmNs;
    }
    createTextNode(text) {
        return new MockTextNode(this, text);
    }
    createDocumentFragment() {
        return new MockDocumentFragment(this);
    }
    createDocumentTypeNode() {
        return new MockDocumentTypeNode(this);
    }
    getElementById(id) {
        return getElementById(this, id);
    }
    getElementsByClassName(classNames) {
        const foundElms = [];
        const classes = classNames.trim().split(' ').filter(c => c.length > 0);
        getElementsByClassName(this, classes, foundElms);
        return foundElms;
    }
    getElementsByTagName(tagName) {
        const foundElms = [];
        getElementsByTagName(this, tagName.toLowerCase(), foundElms);
        return foundElms;
    }
    getElementsByName(elmName) {
        const foundElms = [];
        getElementsByName(this, elmName.toLowerCase(), foundElms);
        return foundElms;
    }
    get title() {
        const title = this.head.childNodes.find(elm => elm.nodeName === 'TITLE');
        if (title != null) {
            return title.textContent;
        }
        return '';
    }
    set title(value) {
        const head = this.head;
        let title = head.childNodes.find(elm => elm.nodeName === 'TITLE');
        if (title == null) {
            title = this.createElement('title');
            head.appendChild(title);
        }
        title.textContent = value;
    }
}
function createDocument(html = null) {
    return new MockWindow(html).document;
}
function createFragment(html) {
    return parseHtmlToFragment(html, null);
}
function resetDocument(doc) {
    if (doc != null) {
        resetEventListeners(doc);
        const documentElement = doc.documentElement;
        if (documentElement != null) {
            resetElement(documentElement);
            for (let i = 0, ii = documentElement.childNodes.length; i < ii; i++) {
                const childNode = documentElement.childNodes[i];
                resetElement(childNode);
                childNode.childNodes.length = 0;
            }
        }
        for (const key in doc) {
            if (doc.hasOwnProperty(key) && !DOC_KEY_KEEPERS.has(key)) {
                delete doc[key];
            }
        }
        try {
            doc.nodeName = "#document" /* DOCUMENT_NODE */;
        }
        catch (e) { }
        try {
            doc.nodeType = 9 /* DOCUMENT_NODE */;
        }
        catch (e) { }
        try {
            doc.cookie = '';
        }
        catch (e) { }
        try {
            doc.referrer = '';
        }
        catch (e) { }
    }
}
const DOC_KEY_KEEPERS = new Set([
    'nodeName',
    'nodeType',
    'nodeValue',
    'ownerDocument',
    'parentNode',
    'childNodes',
    '_shadowRoot'
]);
function getElementById(elm, id) {
    const children = elm.children;
    for (let i = 0, ii = children.length; i < ii; i++) {
        const childElm = children[i];
        if (childElm.id === id) {
            return childElm;
        }
        const childElmFound = getElementById(childElm, id);
        if (childElmFound != null) {
            return childElmFound;
        }
    }
    return null;
}
function getElementsByClassName(elm, classNames, foundElms) {
    const children = elm.children;
    for (let i = 0, ii = children.length; i < ii; i++) {
        const childElm = children[i];
        for (let j = 0, jj = classNames.length; j < jj; j++) {
            if (childElm.classList.contains(classNames[j])) {
                foundElms.push(childElm);
            }
        }
        getElementsByClassName(childElm, classNames, foundElms);
    }
}
function getElementsByTagName(elm, tagName, foundElms) {
    const children = elm.children;
    for (let i = 0, ii = children.length; i < ii; i++) {
        const childElm = children[i];
        if (childElm.nodeName.toLowerCase() === tagName) {
            foundElms.push(childElm);
        }
        getElementsByTagName(childElm, tagName, foundElms);
    }
}
function getElementsByName(elm, elmName, foundElms) {
    const children = elm.children;
    for (let i = 0, ii = children.length; i < ii; i++) {
        const childElm = children[i];
        if (childElm.name && childElm.name.toLowerCase() === elmName) {
            foundElms.push(childElm);
        }
        getElementsByName(childElm, elmName, foundElms);
    }
}
function setOwnerDocument(elm, ownerDocument) {
    for (let i = 0, ii = elm.childNodes.length; i < ii; i++) {
        elm.childNodes[i].ownerDocument = ownerDocument;
        if (elm.childNodes[i].nodeType === 1 /* ELEMENT_NODE */) {
            setOwnerDocument(elm.childNodes[i], ownerDocument);
        }
    }
}

function setupGlobal(gbl) {
    if (gbl.window == null) {
        const win = gbl.window = new MockWindow();
        WINDOW_FUNCTIONS.forEach(fnName => {
            if (!(fnName in gbl)) {
                gbl[fnName] = win[fnName].bind(win);
            }
        });
        WINDOW_PROPS.forEach(propName => {
            if (!(propName in gbl)) {
                Object.defineProperty(gbl, propName, {
                    get() { return win[propName]; },
                    set(val) { win[propName] = val; },
                    configurable: true,
                    enumerable: true
                });
            }
        });
    }
    return gbl.window;
}
function teardownGlobal(gbl) {
    const win = gbl.window;
    if (win && typeof win.close === 'function') {
        win.close();
    }
}
function patchWindow(winToBePatched) {
    const mockWin = new MockWindow(false);
    WINDOW_FUNCTIONS.forEach(fnName => {
        if (typeof winToBePatched[fnName] !== 'function') {
            winToBePatched[fnName] = mockWin[fnName].bind(mockWin);
        }
    });
    WINDOW_PROPS.forEach(propName => {
        if (winToBePatched === undefined) {
            Object.defineProperty(winToBePatched, propName, {
                get() { return mockWin[propName]; },
                set(val) { mockWin[propName] = val; },
                configurable: true,
                enumerable: true
            });
        }
    });
}
const WINDOW_FUNCTIONS = [
    'addEventListener',
    'cancelAnimationFrame',
    'cancelIdleCallback',
    'dispatchEvent',
    'matchMedia',
    'removeEventListener',
    'requestAnimationFrame',
    'requestIdleCallback',
    'URL'
];
const WINDOW_PROPS = [
    'customElements',
    'devicePixelRatio',
    'document',
    'history',
    'innerHeight',
    'innerWidth',
    'localStorage',
    'location',
    'navigator',
    'pageXOffset',
    'pageYOffset',
    'performance',
    'screenLeft',
    'screenTop',
    'screenX',
    'screenY',
    'scrollX',
    'scrollY',
    'sessionStorage',
    'CSS',
    'CustomEvent',
    'Event',
    'Element',
    'HTMLElement',
    'Node',
    'NodeList',
    'KeyboardEvent',
    'MouseEvent'
];

const URL_$1 = /*@__PURE__*/(function(){
  if (typeof URL === 'function') {
    return URL;
  }
  const requireFunc = typeof __webpack_require__ === 'function' ? __non_webpack_require__ : require;
  if (typeof requireFunc === 'function') {
    try {
      return requireFunc('url').URL;
    } catch (e) {}
  }
  return function() {}
})();

function normalizeHydrateOptions(inputOpts) {
    const outputOpts = Object.assign({
        hasTimedOut: false,
        serializeToHtml: false,
        destroyWindow: false,
        destroyDocument: false,
    }, inputOpts || {});
    if (typeof outputOpts.clientHydrateAnnotations !== 'boolean') {
        outputOpts.clientHydrateAnnotations = true;
    }
    if (typeof outputOpts.constrainTimeouts !== 'boolean') {
        outputOpts.constrainTimeouts = true;
    }
    if (typeof outputOpts.maxHydrateCount !== 'number') {
        outputOpts.maxHydrateCount = 300;
    }
    if (typeof outputOpts.timeout !== 'number') {
        outputOpts.timeout = 15000;
    }
    return outputOpts;
}
function generateHydrateResults(opts) {
    if (typeof opts.url !== 'string') {
        opts.url = `https://hydrate.stenciljs.com/`;
    }
    const results = {
        diagnostics: [],
        url: opts.url,
        host: null,
        hostname: null,
        href: null,
        port: null,
        pathname: null,
        search: null,
        hash: null,
        html: null,
        hydratedCount: 0,
        anchors: [],
        components: [],
        imgs: [],
        scripts: [],
        styles: [],
        title: null
    };
    try {
        const url = new URL_$1(opts.url, `https://hydrate.stenciljs.com/`);
        results.url = url.href;
        results.host = url.host;
        results.hostname = url.hostname;
        results.href = url.href;
        results.port = url.port;
        results.pathname = url.pathname;
        results.search = url.search;
        results.hash = url.hash;
    }
    catch (e) {
        renderCatchError(results, e);
    }
    return results;
}
function renderBuildError(results, msg) {
    const diagnostic = {
        level: 'error',
        type: 'build',
        header: 'Hydrate Error',
        messageText: msg,
        relFilePath: null,
        absFilePath: null,
        lines: []
    };
    if (results.pathname) {
        if (results.pathname !== '/') {
            diagnostic.header += ': ' + results.pathname;
        }
    }
    else if (results.url) {
        diagnostic.header += ': ' + results.url;
    }
    results.diagnostics.push(diagnostic);
    return diagnostic;
}
function renderCatchError(results, err) {
    const diagnostic = renderBuildError(results, null);
    if (err != null) {
        if (err.stack != null) {
            diagnostic.messageText = err.stack.toString();
        }
        else {
            if (err.message != null) {
                diagnostic.messageText = err.message.toString();
            }
            else {
                diagnostic.messageText = err.toString();
            }
        }
    }
    return diagnostic;
}

function initializeWindow(win, opts, results) {
    try {
        win.location.href = opts.url;
    }
    catch (e) {
        renderCatchError(results, e);
    }
    if (typeof opts.userAgent === 'string') {
        try {
            win.navigator.userAgent = opts.userAgent;
        }
        catch (e) { }
    }
    if (typeof opts.cookie === 'string') {
        try {
            win.document.cookie = opts.cookie;
        }
        catch (e) { }
    }
    if (typeof opts.referrer === 'string') {
        try {
            win.document.referrer = opts.referrer;
        }
        catch (e) { }
    }
    if (typeof opts.direction === 'string') {
        try {
            win.document.documentElement.setAttribute('dir', opts.direction);
        }
        catch (e) { }
    }
    if (typeof opts.language === 'string') {
        try {
            win.document.documentElement.setAttribute('lang', opts.language);
        }
        catch (e) { }
    }
    try {
        win.customElements = null;
    }
    catch (e) { }
    if (opts.constrainTimeouts) {
        constrainTimeouts(win);
    }
    try {
        win.console.error = function () {
            renderCatchError(results, [...arguments].join(', '));
        };
        win.console.debug = function () {
            const diagnostic = renderCatchError(results, [...arguments].join(', '));
            diagnostic.level = 'debug';
            diagnostic.messageText = 'Hydrate Debug';
        };
    }
    catch (e) {
        renderCatchError(results, e);
    }
    return win;
}

function inspectElement(results, elm, depth) {
    const children = elm.children;
    for (let i = 0, ii = children.length; i < ii; i++) {
        const childElm = children[i];
        const tagName = childElm.nodeName.toLowerCase();
        if (tagName.includes('-')) {
            const cmp = results.components.find(c => c.tag === tagName);
            if (cmp != null) {
                cmp.count++;
                if (depth > cmp.depth) {
                    cmp.depth = depth;
                }
            }
        }
        else {
            switch (tagName) {
                case 'a':
                    const anchor = collectAttributes(childElm);
                    anchor.href = childElm.href;
                    if (typeof anchor.href === 'string') {
                        if (!results.anchors.some(a => a.href === anchor.href)) {
                            results.anchors.push(anchor);
                        }
                    }
                    break;
                case 'img':
                    const img = collectAttributes(childElm);
                    img.src = childElm.src;
                    if (typeof img.src === 'string') {
                        if (!results.imgs.some(a => a.src === img.src)) {
                            results.imgs.push(img);
                        }
                    }
                    break;
                case 'link':
                    const link = collectAttributes(childElm);
                    link.href = childElm.href;
                    if (typeof link.rel === 'string' && link.rel.toLowerCase() === 'stylesheet') {
                        if (typeof link.href === 'string') {
                            if (!results.styles.some(s => s.link === link.href)) {
                                delete link.rel;
                                delete link.type;
                                results.styles.push(link);
                            }
                        }
                    }
                    break;
                case 'script':
                    const script = collectAttributes(childElm);
                    script.src = childElm.src;
                    if (typeof script.src === 'string') {
                        if (!results.scripts.some(s => s.src === script.src)) {
                            results.scripts.push(script);
                        }
                    }
                    break;
            }
        }
        depth++;
        inspectElement(results, childElm, depth);
    }
}
function collectAttributes(node) {
    const parsedElm = {};
    const attrs = node.attributes;
    for (let i = 0, ii = attrs.length; i < ii; i++) {
        const attr = attrs.item(i);
        const attrName = attr.nodeName.toLowerCase();
        if (SKIP_ATTRS.has(attrName)) {
            continue;
        }
        const attrValue = attr.nodeValue;
        if (attrName === 'class' && attrValue === '') {
            continue;
        }
        parsedElm[attrName] = attrValue;
    }
    return parsedElm;
}
const SKIP_ATTRS = new Set([
    's-id', 'c-id'
]);

function patchDomImplementation(doc, opts) {
    let win;
    if (doc.defaultView != null) {
        opts.destroyWindow = true;
        patchWindow(doc.defaultView);
        win = doc.defaultView;
    }
    else {
        opts.destroyWindow = true;
        opts.destroyDocument = false;
        win = new MockWindow(false);
    }
    if (win.document !== doc) {
        win.document = doc;
    }
    if (doc.defaultView !== win) {
        doc.defaultView = win;
    }
    const HTMLElement = doc.documentElement.constructor.prototype;
    if (typeof HTMLElement.getRootNode !== 'function') {
        const elm = doc.createElement('unknown-element');
        const HTMLUnknownElement = elm.constructor.prototype;
        HTMLUnknownElement.getRootNode = getRootNode;
    }
    if (typeof doc.createEvent === 'function') {
        const CustomEvent = doc.createEvent('CustomEvent').constructor;
        if (win.CustomEvent !== CustomEvent) {
            win.CustomEvent = CustomEvent;
        }
    }
    try {
        doc.baseURI;
    }
    catch (e) {
        Object.defineProperty(doc, 'baseURI', {
            get() {
                const baseElm = doc.querySelector('base[href]');
                if (baseElm) {
                    return (new URL(baseElm.getAttribute('href'), win.location.href)).href;
                }
                return win.location.href;
            }
        });
    }
    return win;
}
function getRootNode(opts) {
    const isComposed = (opts != null && opts.composed === true);
    let node = this;
    while (node.parentNode != null) {
        node = node.parentNode;
        if (isComposed === true && node.parentNode == null && node.host != null) {
            node = node.host;
        }
    }
    return node;
}

function relocateMetaCharset(doc) {
    const head = doc.head;
    let charsetElm = head.querySelector('meta[charset]');
    if (charsetElm == null) {
        charsetElm = doc.createElement('meta');
        charsetElm.setAttribute('charset', 'utf-8');
    }
    else {
        charsetElm.remove();
    }
    head.insertBefore(charsetElm, head.firstChild);
}

const commentre = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;
function parseCss(css, filePath) {
    var lineno = 1;
    var column = 1;
    var srcLines;
    function updatePosition(str) {
        const lines = str.match(/\n/g);
        if (lines)
            lineno += lines.length;
        const i = str.lastIndexOf('\n');
        column = ~i ? str.length - i : column + str.length;
    }
    function position() {
        const start = { line: lineno, column: column };
        return function (node) {
            node.position = new ParsePosition(start);
            whitespace();
            return node;
        };
    }
    class ParsePosition {
        constructor(start) {
            this.start = start;
            this.end = { line: lineno, column: column };
            this.source = filePath;
        }
    }
    ParsePosition.prototype.content = css;
    const diagnostics = [];
    function error(msg) {
        if (!srcLines) {
            srcLines = css.split('\n');
        }
        const d = {
            level: 'error',
            type: 'css',
            language: 'css',
            header: 'CSS Parse',
            messageText: msg,
            absFilePath: filePath,
            lines: [{
                    lineIndex: lineno - 1,
                    lineNumber: lineno,
                    errorCharStart: column,
                    text: css[lineno - 1],
                }]
        };
        if (lineno > 1) {
            const previousLine = {
                lineIndex: lineno - 1,
                lineNumber: lineno - 1,
                text: css[lineno - 2],
                errorCharStart: -1,
                errorLength: -1
            };
            d.lines.unshift(previousLine);
        }
        if (lineno + 2 < srcLines.length) {
            const nextLine = {
                lineIndex: lineno,
                lineNumber: lineno + 1,
                text: srcLines[lineno],
                errorCharStart: -1,
                errorLength: -1
            };
            d.lines.push(nextLine);
        }
        diagnostics.push(d);
    }
    function stylesheet() {
        const rulesList = rules();
        return {
            type: 'stylesheet',
            stylesheet: {
                source: filePath,
                rules: rulesList,
                diagnostics: diagnostics
            }
        };
    }
    function open() {
        return match(/^{\s*/);
    }
    function close() {
        return match(/^}/);
    }
    function rules() {
        var node;
        const rules = [];
        whitespace();
        comments(rules);
        while (css.length && css.charAt(0) !== '}' && (node = atrule() || rule())) {
            if (node !== false) {
                rules.push(node);
                comments(rules);
            }
        }
        return rules;
    }
    function match(re) {
        const m = re.exec(css);
        if (!m)
            return;
        const str = m[0];
        updatePosition(str);
        css = css.slice(str.length);
        return m;
    }
    function whitespace() {
        match(/^\s*/);
    }
    function comments(rules) {
        var c;
        rules = rules || [];
        while (c = comment()) {
            if (c !== false) {
                rules.push(c);
            }
        }
        return rules;
    }
    function comment() {
        const pos = position();
        if ('/' !== css.charAt(0) || '*' !== css.charAt(1))
            return;
        var i = 2;
        while ('' !== css.charAt(i) && ('*' !== css.charAt(i) || '/' !== css.charAt(i + 1)))
            ++i;
        i += 2;
        if ('' === css.charAt(i - 1)) {
            return error('End of comment missing');
        }
        const str = css.slice(2, i - 2);
        column += 2;
        updatePosition(str);
        css = css.slice(i);
        column += 2;
        return pos({
            type: 'comment',
            comment: str
        });
    }
    function selector() {
        const m = match(/^([^{]+)/);
        if (!m)
            return;
        return trim(m[0])
            .replace(/\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*\/+/g, '')
            .replace(/"(?:\\"|[^"])*"|'(?:\\'|[^'])*'/g, function (m) {
            return m.replace(/,/g, '\u200C');
        })
            .split(/\s*(?![^(]*\)),\s*/)
            .map(function (s) {
            return s.replace(/\u200C/g, ',');
        });
    }
    function declaration() {
        const pos = position();
        var prop = match(/^(\*?[-#\/\*\\\w]+(\[[0-9a-z_-]+\])?)\s*/);
        if (!prop)
            return;
        prop = trim(prop[0]);
        if (!match(/^:\s*/))
            return error(`property missing ':'`);
        const val = match(/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^\)]*?\)|[^};])+)/);
        const ret = pos({
            type: 'declaration',
            property: prop.replace(commentre, ''),
            value: val ? trim(val[0]).replace(commentre, '') : ''
        });
        match(/^[;\s]*/);
        return ret;
    }
    function declarations() {
        const decls = [];
        if (!open())
            return error(`missing '{'`);
        comments(decls);
        var decl;
        while (decl = declaration()) {
            if (decl !== false) {
                decls.push(decl);
                comments(decls);
            }
        }
        if (!close())
            return error(`missing '}'`);
        return decls;
    }
    function keyframe() {
        var m;
        const vals = [];
        const pos = position();
        while (m = match(/^((\d+\.\d+|\.\d+|\d+)%?|[a-z]+)\s*/)) {
            vals.push(m[1]);
            match(/^,\s*/);
        }
        if (!vals.length)
            return;
        return pos({
            type: 'keyframe',
            values: vals,
            declarations: declarations()
        });
    }
    function atkeyframes() {
        const pos = position();
        var m = match(/^@([-\w]+)?keyframes\s*/);
        if (!m)
            return;
        const vendor = m[1];
        m = match(/^([-\w]+)\s*/);
        if (!m)
            return error(`@keyframes missing name`);
        const name = m[1];
        if (!open())
            return error(`@keyframes missing '{'`);
        var frame;
        var frames = comments();
        while (frame = keyframe()) {
            frames.push(frame);
            frames = frames.concat(comments());
        }
        if (!close())
            return error(`@keyframes missing '}'`);
        return pos({
            type: 'keyframes',
            name: name,
            vendor: vendor,
            keyframes: frames
        });
    }
    function atsupports() {
        const pos = position();
        const m = match(/^@supports *([^{]+)/);
        if (!m)
            return;
        const supports = trim(m[1]);
        if (!open())
            return error(`@supports missing '{'`);
        const style = comments().concat(rules());
        if (!close())
            return error(`@supports missing '}'`);
        return pos({
            type: 'supports',
            supports: supports,
            rules: style
        });
    }
    function athost() {
        const pos = position();
        const m = match(/^@host\s*/);
        if (!m)
            return;
        if (!open())
            return error(`@host missing '{'`);
        const style = comments().concat(rules());
        if (!close())
            return error(`@host missing '}'`);
        return pos({
            type: 'host',
            rules: style
        });
    }
    function atmedia() {
        const pos = position();
        const m = match(/^@media *([^{]+)/);
        if (!m)
            return;
        const media = trim(m[1]);
        if (!open())
            return error(`@media missing '{'`);
        const style = comments().concat(rules());
        if (!close())
            return error(`@media missing '}'`);
        return pos({
            type: 'media',
            media: media,
            rules: style
        });
    }
    function atcustommedia() {
        const pos = position();
        const m = match(/^@custom-media\s+(--[^\s]+)\s*([^{;]+);/);
        if (!m)
            return;
        return pos({
            type: 'custom-media',
            name: trim(m[1]),
            media: trim(m[2])
        });
    }
    function atpage() {
        const pos = position();
        const m = match(/^@page */);
        if (!m)
            return;
        const sel = selector() || [];
        if (!open())
            return error(`@page missing '{'`);
        var decls = comments();
        var decl;
        while (decl = declaration()) {
            decls.push(decl);
            decls = decls.concat(comments());
        }
        if (!close())
            return error(`@page missing '}'`);
        return pos({
            type: 'page',
            selectors: sel,
            declarations: decls
        });
    }
    function atdocument() {
        const pos = position();
        const m = match(/^@([-\w]+)?document *([^{]+)/);
        if (!m)
            return;
        const vendor = trim(m[1]);
        const doc = trim(m[2]);
        if (!open())
            return error(`@document missing '{'`);
        const style = comments().concat(rules());
        if (!close())
            return error(`@document missing '}'`);
        return pos({
            type: 'document',
            document: doc,
            vendor: vendor,
            rules: style
        });
    }
    function atfontface() {
        const pos = position();
        const m = match(/^@font-face\s*/);
        if (!m)
            return;
        if (!open())
            return error(`@font-face missing '{'`);
        var decls = comments();
        var decl;
        while (decl = declaration()) {
            decls.push(decl);
            decls = decls.concat(comments());
        }
        if (!close())
            return error(`@font-face missing '}'`);
        return pos({
            type: 'font-face',
            declarations: decls
        });
    }
    const atimport = _compileAtrule('import');
    const atcharset = _compileAtrule('charset');
    const atnamespace = _compileAtrule('namespace');
    function _compileAtrule(name) {
        const re = new RegExp('^@' + name + '\\s*([^;]+);');
        return function () {
            const pos = position();
            const m = match(re);
            if (!m)
                return;
            const ret = { type: name };
            ret[name] = m[1].trim();
            return pos(ret);
        };
    }
    function atrule() {
        if (css[0] !== '@')
            return;
        return atkeyframes()
            || atmedia()
            || atcustommedia()
            || atsupports()
            || atimport()
            || atcharset()
            || atnamespace()
            || atdocument()
            || atpage()
            || athost()
            || atfontface();
    }
    function rule() {
        const pos = position();
        const sel = selector();
        if (!sel)
            return error('selector missing');
        comments();
        return pos({
            type: 'rule',
            selectors: sel,
            declarations: declarations()
        });
    }
    return addParent(stylesheet());
}
function trim(str) {
    return str ? str.trim() : '';
}
function addParent(obj, parent) {
    const isNode = obj && typeof obj.type === 'string';
    const childParent = isNode ? obj : parent;
    for (const k in obj) {
        const value = obj[k];
        if (Array.isArray(value)) {
            value.forEach(function (v) { addParent(v, childParent); });
        }
        else if (value && typeof value === 'object') {
            addParent(value, childParent);
        }
    }
    if (isNode) {
        Object.defineProperty(obj, 'parent', {
            configurable: true,
            writable: true,
            enumerable: false,
            value: parent || null
        });
    }
    return obj;
}

function getSelectors(sel) {
    SELECTORS.all.length = SELECTORS.tags.length = SELECTORS.classNames.length = SELECTORS.ids.length = SELECTORS.attrs.length = 0;
    sel = sel.replace(/\./g, ' .')
        .replace(/\#/g, ' #')
        .replace(/\[/g, ' [')
        .replace(/\>/g, ' > ')
        .replace(/\+/g, ' + ')
        .replace(/\~/g, ' ~ ')
        .replace(/\*/g, ' * ')
        .replace(/\:not\((.*?)\)/g, ' ');
    const items = sel.split(' ');
    for (var i = 0; i < items.length; i++) {
        items[i] = items[i].split(':')[0];
        if (items[i].length === 0)
            continue;
        if (items[i].charAt(0) === '.') {
            SELECTORS.classNames.push(items[i].substr(1));
        }
        else if (items[i].charAt(0) === '#') {
            SELECTORS.ids.push(items[i].substr(1));
        }
        else if (items[i].charAt(0) === '[') {
            items[i] = items[i].substr(1).split('=')[0].split(']')[0].trim();
            SELECTORS.attrs.push(items[i].toLowerCase());
        }
        else if (/[a-z]/g.test(items[i].charAt(0))) {
            SELECTORS.tags.push(items[i].toLowerCase());
        }
    }
    SELECTORS.classNames = SELECTORS.classNames.sort((a, b) => {
        if (a.length < b.length)
            return -1;
        if (a.length > b.length)
            return 1;
        return 0;
    });
    return SELECTORS;
}
const SELECTORS = {
    all: [],
    tags: [],
    classNames: [],
    ids: [],
    attrs: []
};

class StringifyCss {
    constructor(usedSelectors) {
        this.usedSelectors = usedSelectors;
        this.hasUsedAttrs = usedSelectors.attrs.size > 0;
        this.hasUsedClassNames = usedSelectors.classNames.size > 0;
        this.hasUsedIds = usedSelectors.ids.size > 0;
        this.hasUsedTags = usedSelectors.tags.size > 0;
    }
    visit(node) {
        return this[node.type](node);
    }
    mapVisit(nodes, delim) {
        let buf = '';
        delim = delim || '';
        for (let i = 0, length = nodes.length; i < length; i++) {
            buf += this.visit(nodes[i]);
            if (delim && i < length - 1)
                buf += delim;
        }
        return buf;
    }
    compile(node) {
        return node.stylesheet
            .rules.map(this.visit, this)
            .join('');
    }
    comment() {
        return '';
    }
    import(node) {
        return '@import ' + node.import + ';';
    }
    media(node) {
        const mediaCss = this.mapVisit(node.rules);
        if (mediaCss === '') {
            return '';
        }
        return '@media ' + node.media + '{' + this.mapVisit(node.rules) + '}';
    }
    document(node) {
        const documentCss = this.mapVisit(node.rules);
        if (documentCss === '') {
            return '';
        }
        const doc = '@' + (node.vendor || '') + 'document ' + node.document;
        return doc + '{' + documentCss + '}';
    }
    charset(node) {
        return '@charset ' + node.charset + ';';
    }
    namespace(node) {
        return '@namespace ' + node.namespace + ';';
    }
    supports(node) {
        const supportsCss = this.mapVisit(node.rules);
        if (supportsCss === '') {
            return '';
        }
        return '@supports ' + node.supports + '{' + supportsCss + '}';
    }
    keyframes(node) {
        const keyframesCss = this.mapVisit(node.keyframes);
        if (keyframesCss === '') {
            return '';
        }
        return '@' + (node.vendor || '') + 'keyframes ' + node.name + '{' + keyframesCss + '}';
    }
    keyframe(node) {
        const decls = node.declarations;
        return node.values.join(',') + '{' + this.mapVisit(decls) + '}';
    }
    page(node) {
        const sel = node.selectors.length
            ? node.selectors.join(', ')
            : '';
        return '@page ' + sel + '{' + this.mapVisit(node.declarations) + '}';
    }
    ['font-face'](node) {
        const fontCss = this.mapVisit(node.declarations);
        if (fontCss === '') {
            return '';
        }
        return '@font-face{' + fontCss + '}';
    }
    host(node) {
        return '@host{' + this.mapVisit(node.rules) + '}';
    }
    ['custom-media'](node) {
        return '@custom-media ' + node.name + ' ' + node.media + ';';
    }
    rule(node) {
        const decls = node.declarations;
        if (decls == null || decls.length === 0) {
            return '';
        }
        const usedSelectors = this.usedSelectors;
        let i;
        let j;
        for (i = node.selectors.length - 1; i >= 0; i--) {
            const sel = getSelectors(node.selectors[i]);
            let include = true;
            let jlen = sel.classNames.length;
            if (jlen > 0 && this.hasUsedClassNames) {
                for (j = 0; j < jlen; j++) {
                    if (!usedSelectors.classNames.has(sel.classNames[j])) {
                        include = false;
                        break;
                    }
                }
            }
            if (include && this.hasUsedTags) {
                jlen = sel.tags.length;
                if (jlen > 0) {
                    for (j = 0; j < jlen; j++) {
                        if (!usedSelectors.tags.has(sel.tags[j])) {
                            include = false;
                            break;
                        }
                    }
                }
            }
            if (include && this.hasUsedAttrs) {
                jlen = sel.attrs.length;
                if (jlen > 0) {
                    for (j = 0; j < jlen; j++) {
                        if (!usedSelectors.attrs.has(sel.attrs[j])) {
                            include = false;
                            break;
                        }
                    }
                }
            }
            if (include && this.hasUsedIds) {
                jlen = sel.ids.length;
                if (jlen > 0) {
                    for (j = 0; j < jlen; j++) {
                        if (!usedSelectors.ids.has(sel.ids[j])) {
                            include = false;
                            break;
                        }
                    }
                }
            }
            if (!include) {
                node.selectors.splice(i, 1);
            }
        }
        if (node.selectors.length === 0) {
            return '';
        }
        return `${node.selectors}{${this.mapVisit(decls)}}`;
    }
    declaration(node) {
        return node.property + ':' + node.value + ';';
    }
}

class UsedSelectors {
    constructor(elm) {
        this.tags = new Set();
        this.classNames = new Set();
        this.ids = new Set();
        this.attrs = new Set();
        this.collectSelectors(elm);
    }
    collectSelectors(elm) {
        if (elm != null && elm.tagName) {
            const tagName = elm.tagName.toLowerCase();
            this.tags.add(tagName);
            const attributes = elm.attributes;
            for (let i = 0, l = attributes.length; i < l; i++) {
                const attr = attributes.item(i);
                const attrName = attr.name.toLowerCase();
                if (attrName === 'class') {
                    const classList = elm.classList;
                    for (let i = 0, l = classList.length; i < l; i++) {
                        this.classNames.add(classList.item(i));
                    }
                }
                else if (attrName === 'style') {
                    continue;
                }
                else if (attrName === 'id') {
                    this.ids.add(attr.value);
                }
                else {
                    this.attrs.add(attrName);
                }
            }
            for (let i = 0, l = elm.children.length; i < l; i++) {
                this.collectSelectors(elm.children[i]);
            }
        }
    }
}

function removeUnusedStyles(doc, diagnostics) {
    const styleElms = doc.head.querySelectorAll(`style[data-styles]`);
    if (styleElms.length > 0) {
        const usedSelectors = new UsedSelectors(doc.body);
        for (let i = 0; i < styleElms.length; i++) {
            removeUnusedStyleText(usedSelectors, diagnostics, styleElms[i]);
        }
    }
}
function removeUnusedStyleText(usedSelectors, diagnostics, styleElm) {
    try {
        const cssAst = parseCss(styleElm.innerHTML);
        if (cssAst.stylesheet.diagnostics.length > 0) {
            diagnostics.push(...cssAst.stylesheet.diagnostics);
            return;
        }
        try {
            const stringify = new StringifyCss(usedSelectors);
            styleElm.innerHTML = stringify.compile(cssAst);
        }
        catch (e) {
            diagnostics.push({
                level: 'warn',
                type: 'css',
                header: 'CSS Stringify',
                messageText: e
            });
        }
    }
    catch (e) {
        diagnostics.push({
            level: 'warn',
            type: 'css',
            header: 'CSS Parse',
            messageText: e
        });
    }
}

function updateCanonicalLink(doc, href) {
    let canonicalLinkElm = doc.head.querySelector('link[rel="canonical"]');
    if (typeof href === 'string') {
        if (canonicalLinkElm == null) {
            canonicalLinkElm = doc.createElement('link');
            canonicalLinkElm.setAttribute('rel', 'canonical');
            doc.head.appendChild(canonicalLinkElm);
        }
        canonicalLinkElm.setAttribute('href', href);
    }
    else {
        if (canonicalLinkElm != null) {
            canonicalLinkElm.parentNode.removeChild(canonicalLinkElm);
        }
    }
}

function renderToString(html, userOpts) {
    const opts = normalizeHydrateOptions(userOpts);
    opts.serializeToHtml = true;
    return new Promise(resolve => {
        const results = generateHydrateResults(opts);
        if (results.diagnostics.length > 0) {
            resolve(results);
        }
        else if (typeof html === 'string') {
            try {
                opts.destroyWindow = true;
                opts.destroyDocument = true;
                const win = new MockWindow(html);
                render(win, opts, results, resolve);
            }
            catch (e) {
                renderCatchError(results, e);
                resolve(results);
            }
        }
        else if (isValidDocument(html)) {
            try {
                opts.destroyDocument = false;
                const win = patchDomImplementation(html, opts);
                render(win, opts, results, resolve);
            }
            catch (e) {
                renderCatchError(results, e);
                resolve(results);
            }
        }
        else {
            renderBuildError(results, `Invalid html or document. Must be either valid "html" string, or DOM "document".`);
            resolve(results);
        }
    });
}
function hydrateDocument(doc, userOpts) {
    const opts = normalizeHydrateOptions(userOpts);
    opts.serializeToHtml = false;
    return new Promise(resolve => {
        const results = generateHydrateResults(opts);
        if (results.diagnostics.length > 0) {
            resolve(results);
        }
        else if (typeof doc === 'string') {
            try {
                opts.destroyWindow = true;
                opts.destroyDocument = true;
                const win = new MockWindow(doc);
                render(win, opts, results, resolve);
            }
            catch (e) {
                renderCatchError(results, e);
                resolve(results);
            }
        }
        else if (isValidDocument(doc)) {
            try {
                opts.destroyDocument = false;
                const win = patchDomImplementation(doc, opts);
                render(win, opts, results, resolve);
            }
            catch (e) {
                renderCatchError(results, e);
                resolve(results);
            }
        }
        else {
            renderBuildError(results, `Invalid html or document. Must be either valid "html" string, or DOM "document".`);
            resolve(results);
        }
    });
}
function isValidDocument(doc) {
    return doc != null &&
        doc.nodeType === 9 &&
        doc.documentElement != null &&
        doc.documentElement.nodeType === 1 &&
        doc.body != null &&
        doc.body.nodeType === 1;
}
function render(win, opts, results, resolve) {
    if (!process.__stencilErrors) {
        process.__stencilErrors = true;
        process.on('unhandledRejection', e => {
            console.log('unhandledRejection', e);
        });
    }
    initializeWindow(win, opts, results);
    if (typeof opts.beforeHydrate === 'function') {
        try {
            const rtn = opts.beforeHydrate(win.document);
            if (rtn != null && typeof rtn.then === 'function') {
                rtn.then(() => {
                    hydrateFactory(win, opts, results, afterHydrate, resolve);
                });
            }
            else {
                hydrateFactory(win, opts, results, afterHydrate, resolve);
            }
        }
        catch (e) {
            renderCatchError(results, e);
            finalizeHydrate(win, opts, results, resolve);
        }
    }
    else {
        hydrateFactory(win, opts, results, afterHydrate, resolve);
    }
}
function afterHydrate(win, opts, results, resolve) {
    if (typeof opts.afterHydrate === 'function') {
        try {
            const rtn = opts.afterHydrate(win.document);
            if (rtn != null && typeof rtn.then === 'function') {
                rtn.then(() => {
                    finalizeHydrate(win, opts, results, resolve);
                });
            }
            else {
                finalizeHydrate(win, opts, results, resolve);
            }
        }
        catch (e) {
            renderCatchError(results, e);
            finalizeHydrate(win, opts, results, resolve);
        }
    }
    else {
        finalizeHydrate(win, opts, results, resolve);
    }
}
function finalizeHydrate(win, opts, results, resolve) {
    try {
        inspectElement(results, win.document.documentElement, 0);
        if (opts.removeUnusedStyles !== false) {
            try {
                removeUnusedStyles(win.document, results.diagnostics);
            }
            catch (e) {
                renderCatchError(results, e);
            }
        }
        if (typeof opts.title === 'string') {
            try {
                win.document.title = opts.title;
            }
            catch (e) {
                renderCatchError(results, e);
            }
        }
        results.title = win.document.title;
        if (opts.removeScripts) {
            removeScripts(win.document.documentElement);
        }
        try {
            updateCanonicalLink(win.document, opts.canonicalUrl);
        }
        catch (e) {
            renderCatchError(results, e);
        }
        try {
            relocateMetaCharset(win.document);
        }
        catch (e) { }
        try {
            const metaStatus = win.document.head.querySelector('meta[http-equiv="status"]');
            if (metaStatus != null) {
                const content = metaStatus.getAttribute('content');
                if (content != null) {
                    results.httpStatus = parseInt(content, 10);
                }
            }
        }
        catch (e) { }
        if (opts.clientHydrateAnnotations) {
            win.document.documentElement.classList.add('hydrated');
        }
        if (opts.serializeToHtml) {
            results.html = serializeNodeToHtml(win.document, {
                approximateLineWidth: opts.approximateLineWidth,
                outerHtml: false,
                prettyHtml: opts.prettyHtml,
                removeAttributeQuotes: opts.removeAttributeQuotes,
                removeBooleanAttributeQuotes: opts.removeBooleanAttributeQuotes,
                removeEmptyAttributes: opts.removeEmptyAttributes,
                removeHtmlComments: opts.removeHtmlComments,
                serializeShadowRoot: false,
            });
        }
    }
    catch (e) {
        renderCatchError(results, e);
    }
    if (opts.destroyWindow) {
        try {
            if (!opts.destroyDocument) {
                const doc = win.document;
                win.document = null;
                doc.defaultView = null;
            }
            win.close();
        }
        catch (e) {
            renderCatchError(results, e);
        }
    }
    resolve(results);
}
function removeScripts(elm) {
    const children = elm.children;
    for (let i = children.length - 1; i >= 0; i--) {
        const child = children[i];
        removeScripts(child);
        if (child.nodeName === 'SCRIPT') {
            child.remove();
        }
        else if (child.nodeName === 'LINK' && child.getAttribute('rel') === 'modulepreload') {
            child.remove();
        }
    }
}

exports.hydrateDocument = hydrateDocument;
exports.renderToString = renderToString;
