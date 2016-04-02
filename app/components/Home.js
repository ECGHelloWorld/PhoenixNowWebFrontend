import React from 'react'
import { connect } from 'react-redux'
import LoginRegisterContainer from './LoginRegisterContainer'

const Home = ({user}) => {
    if (!user) {
        return (
            <div>
                <LoginRegisterContainer />
            </div>
        )
    } else {
        return (
            <div>
            Welcome to PhoenixNow
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Home)
