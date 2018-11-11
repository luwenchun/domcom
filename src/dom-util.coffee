{renew} = require 'lazy-flow'

#export default
module.exports = exports = {}

if typeof window != 'undefined'
  exports.normalizeDomElement = (domElement) ->
    if typeof domElement == 'string'
      domElement = document.querySelector(domElement)
    domElement

exports.getBindProp = (component)  ->
  tagName = component.tagName
  if !tagName
    throw new Error 'trying to bind a Component which is not a Tag'
  else if tagName=='input' && component.props.type=='checkbox'
    'checked'
  else
    'value'

if typeof window != 'undefined'
  # add browser compatability for addEventListener and removeEventListener in ie 6, 7, 8
  if document.addEventListener
    exports.addEventListener = (node, name, handler, useCapture) ->
      node.addEventListener(name, handler, useCapture)
      return

    exports.removeEventListener = (node, name, handler) ->
      node.removeEventListener(name, handler)
      return

  else
    exports.addEventListener = (node, name, handler) ->
      node.attachEvent(name, handler)
      return

    exports.removeEventListener = (node, name, handler) ->
      node.detachEvent(name, handler)
      return

  # Returns true if it is a DOM element
exports.isElement = (item) ->
  if typeof HTMLElement == "object"
    item instanceof HTMLElement
  else
    item && typeof item == "object" && item != null && item.nodeType == 1 && typeof item.nodeName=="string"


exports.domField = (value, component) ->

  if !value?
    ''

  else if typeof value != 'function'

   if value.then && value.catch
     fn = react -> fn.promiseResult

     value
     .then (result) ->
        fn.promiseResult = result
        fn.invalidate()
     .catch (error) ->
        fn.promiseResult = error
        fn.invalidate()

     fn

   else
     value

  else if value.bindComponent
    value.bindComponent(component)

  else if !value.invalidate
    renew(value)

  else
    value

exports.domValue = (value, component) ->
  if !value?
    ''
  else if typeof value != 'function'
    value
  else
    value = value.call(component)
    if !value?
      ''
    else
      value

# family do not consider exceeding TranBlock
# a BaseBlock can have only one reference of one component in all of its family
# it's the responsiblility of the user program of domcom to keep no conflicting reference while exceeding TranBlock
exports.extendChildFamily = (family, child) ->
#  for dcid of child.family
#    if family[dcid]
#      throw new Error 'do not allow to have the same component to be referenced in different location of one List'
#    family[dcid] = true
  return



tagNames = "a abbr acronym address area b base bdo big blockquote body br button caption cite code col colgroup dd del dfn div dl"+
    " dt em fieldset form h1 h2 h3 h4 h5 h6 head hr i img input ins kbd label legend li link map meta noscript object"+
    " ol optgroup option p param pre q samp script select small span strong style sub sup"+
    " table tbody td textarea tfoot th thead title tr tt ul var header footer section svg iframe" +
    " article aside bdi details dialog figcaption figure footer header main mark menuitem meter nav progress rp rt ruby summary time wbr"
exports.tagNames = tagNames.split(' ')


export default exports