import React from 'react'
import styled from 'styled-components'

class UserProfile extends React.Component {

    renderUserProfile = () => {
        return (
            <Profile>
                <h3>{this.props.user.first_name}</h3>
                <ProfileImage alt={this.props.user.first_name} src={this.props.user.image} />
                <p>
                    About: 
                    <br/>
                    {this.props.user.bio}
                </p>
            </Profile>

        )
    }
    render() {
        console.log(this.props)
        return (
            <ProfileWrapper>
                <h2>user profile</h2>
                {this.renderUserProfile()}
            </ProfileWrapper>
        )
    }
}

export default UserProfile

const ProfileWrapper = styled.div `
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`

const Profile = styled.div `
    width: 100%;
    background: pink;
`

const ProfileImage = styled.img `
    height: 150px;
    object-fit: contain;
`