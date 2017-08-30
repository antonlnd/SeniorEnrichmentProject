'use strict'
import React from 'react'
import { hashHistory, IndexRoute, Link, Route, Router } from 'react-router'
import { render } from 'react-dom'

import Main from './components/Main'
import DesignForm from './components/Login'
import Navbar from './components/Navbar'
import Schools from './components/Schools'

render(
	<Main/>
	,
	document.getElementById('main')
)





