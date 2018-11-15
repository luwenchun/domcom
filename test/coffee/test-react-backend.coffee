{expect, iit, idescribe, nit, ndescribe} = require 'bdd-test-helper'

import ReactDom from 'react-dom'

{newDemoNode} = require './helper'


{normalizeDomElement} = require '../../src/dom-util'
{
Tag, Text, List, txt, list
p, div, Html, html, if_
classFn, styleFrom,
Nothing
isComponent
getters
mvc
} = dc

describe "test react back end", ->
  afterEach ->
    ReactDom.unmountComponentAtNode(normalizeDomElement('#demo2'))

  idescribe 'update BaseBlock', ->

    it 'should mount simple react div block', ->
      dr = dc.react()
      expect(dr).to.be.instanceof(dc.React)
      {div} = dr
      comp = div({}, ['hello'])
      expect(comp).to.be.instanceof(dc.ReactBlock)
      comp.mount('#demo2')

    it 'should mount embedded react div block', ->
      dr = dc.react()
      expect(dr).to.be.instanceof(dc.React)
      {div} = dr
      comp = div({}, div({key:1}, div({key:1}, 'hello')))
      expect(comp).to.be.instanceof(dc.ReactBlock)
      comp.mount('#demo2')
      dc.update()

    it 'should mount react mvc + div block', ->
      dr = dc.react()
      {div} = dr
      expect(dr).to.be.instanceof(dc.React)
      view = () -> if_(this.showing, div(this.message))
      comp = mvc(view)
      comp.showing = true
      comp.message = 'hello mvc'
      comp.mount('#demo2')
      comp.message = 'hello mvc 2'
      comp.showing = false
      debugger
      comp.update()

    it 'should mount and update react mvc + if_ div block', ->
      dr = dc.react()
      {div} = dr
      expect(dr).to.be.instanceof(dc.React)
      view = () -> if_(this.showing, div(this.message1), div(this.message2))
      comp = mvc(view)
      comp.showing = true
      comp.message1 = 'hello mvc 1'
      comp.message2 = 'hello mvc 2'
      comp.mount('#demo2')
      comp.showing = false
      debugger
      comp.update()

    it 'should mount and update react mvc + if_ div block 2', ->
      dr = dc.react()
      {div} = dr
      expect(dr).to.be.instanceof(dc.React)
      view = () -> if_(this.showing, div(this.message1), div(this.message2))
      comp = mvc(view)
      comp.showing = true
      comp.message1 = 'hello mvc 1'
      comp.message2 = 'hello mvc 2'
      comp.mount('#demo2')
      comp.showing = false
      comp.update()
      comp.showing = true
      comp.update()
      comp.showing = false
      comp.update()
