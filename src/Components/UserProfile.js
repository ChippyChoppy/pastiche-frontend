import React from 'react'
import styled from 'styled-components'

class UserProfile extends React.Component {

    renderUserProfile = () => {
        return (
            <Profile>
                <li><h1>{this.props.user.first_name}'s Profile</h1></li>
                <ProfileImage alt={this.props.user.first_name} src={this.props.user.image} />
                <li><p>
                    About: 
                    <br/>
                    {this.props.user.bio}</p>
                </li>
            </Profile>

        )
    }
    render() {
        // console.log(this.props)
        return (
            <ProfileWrapper>
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
    max-height: 300px;
    max-width: 90%
    object-fit: contain;
    justify-content: center;
    border: 6px solid #fec196;
    border-style: outset;
    box-shadow: 0px 0px 15px 8px #052b38;

`