import React from 'react'
import styled from 'styled-components'

class UserProfile extends React.Component {

    renderUserProfile = () => {
        return (
            <Profile>
                <li>{this.props.user.first_name}</li>
                <ProfileImage alt={this.props.user.first_name} src={this.props.user.image} />
                <li>
                    About: 
                    <br/>
                    {this.props.user.bio}
                </li>
            </Profile>

        )
    }
    render() {
        // console.log(this.props)
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
    padding: 15px;

`

const ProfileList = styled.li `
display: block;
width: 20%;
`

const Profile = styled.ul `
    width: 100%;
    padding: 15px;
    list-style-type: none;
    margin: 0;
    padding: 0;
`

const ProfileImage = styled.img `
    max-height: 175px;
    object-fit: contain;
    justify-content: center;
`