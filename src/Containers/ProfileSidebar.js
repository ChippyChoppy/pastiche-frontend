import React from 'react'
import UserProfile from '../Components/UserProfile'
import Buttons from '../Components/Buttons'
import styled from 'styled-components'

const ProfileSidebar = (props) => {
    // console.log(props)

    return (
        <SideBar>
            {props.userArray.map((user) => {
                return (
                    <UserProfile 
                        key={user.id}
                        user={user}
                    />
                )
            })}
            <Buttons />
        </SideBar>
    )


}

export default ProfileSidebar

const SideBar = styled.ul `
    width: 20%;
    background: #d9919a;
    color: #fefbfa;
    border-radius: 8px;
    list-style-type: none;
    margin: 0;
    padding: 0;
`;



